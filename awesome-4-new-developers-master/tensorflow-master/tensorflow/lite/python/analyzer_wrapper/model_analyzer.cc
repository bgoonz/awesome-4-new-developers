/* Copyright 2021 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
#include <memory>
#include <sstream>
#include <string>

#include "absl/strings/str_join.h"
#include "tensorflow/lite/core/api/error_reporter.h"
#include "tensorflow/lite/model_builder.h"
#include "tensorflow/lite/schema/schema_generated.h"
#include "tensorflow/lite/schema/schema_utils.h"
#include "tensorflow/lite/tools/versioning/gpu_compatibility.h"
#include "tensorflow/lite/version.h"

namespace tflite {

namespace {

// Dump details of the given tensor.
void dump_tensor_detail(std::stringstream& out_stream,
                        const tflite::Tensor* tensor, const int tensor_idx) {
  out_stream << "T#" << tensor_idx;
  out_stream << "(" << tensor->name()->str() << ") ";
  // Prints `shape_signature` instead of `shape` if it's available since it
  // supports dynamic shapes.
  if (tensor->shape_signature()) {
    out_stream << "shape_signature:[";
    for (int i = 0; i < tensor->shape_signature()->Length(); ++i) {
      const int j = tensor->shape_signature()->Get(i);
      out_stream << j;
      if (i != tensor->shape_signature()->Length() - 1) {
        out_stream << ", ";
      }
    }
    out_stream << "]";
  } else {
    out_stream << "shape:[";
    for (int i = 0; i < tensor->shape()->Length(); ++i) {
      const int j = tensor->shape()->Get(i);
      out_stream << j;
      if (i != tensor->shape()->Length() - 1) {
        out_stream << ", ";
      }
    }
    out_stream << "]";
  }
  out_stream << ", type:" << EnumNameTensorType(tensor->type());
  out_stream << "\n";
}

// Dump list of input or output tensors.
void dump_tensor_list(std::stringstream& out_stream,
                      const flatbuffers::Vector<int32_t>* tensors,
                      bool verbose = false) {
  for (int i = 0; i < tensors->Length(); ++i) {
    const int tensor_idx = tensors->Get(i);
    if (verbose) {
      out_stream << "tensor #" << tensor_idx;
    } else {
      out_stream << "T#" << tensor_idx;
    }
    if (i != tensors->Length() - 1) {
      if (verbose) {
        out_stream << " and ";
      } else {
        out_stream << ", ";
      }
    }
  }
}

// Returns the string representation of the given OperatorCode.
const std::string get_op_name(const OperatorCode* op_code) {
  auto builtin_code = GetBuiltinCode(op_code);
  if (builtin_code != BuiltinOperator_CUSTOM) {
    return EnumNameBuiltinOperator(builtin_code);
  } else {
    return op_code->custom_code()->str();
  }
}

// Dump the given Operator node.
void dump_node(std::stringstream& out_stream, const int node_no,
               const OperatorCode* op_code, const Operator* op,
               const SubGraph* subgraph) {
  out_stream << "Op#" << node_no << " " << get_op_name(op_code);
  out_stream << "(";
  dump_tensor_list(out_stream, op->inputs());
  out_stream << ") -> [";
  dump_tensor_list(out_stream, op->outputs());
  out_stream << "]\n";
}

// Dump the summary of the given TFLite flatbuffer model. It's printed at the
// beginning of the analyzer output.
void dump_model_summary(std::stringstream& out_stream,
                        const ::tflite::Model* model) {
  auto* subgraphs = model->subgraphs();
  out_stream
      << "Your TFLite model has ‘" << subgraphs->Length()
      << "’ subgraph(s). In the subgraph description below,\nT# represents the "
         "Tensor numbers. ";
  if (subgraphs->Length() > 0 && subgraphs->Get(0)->operators()->Length() > 0) {
    const Operator* first_op = subgraphs->Get(0)->operators()->Get(0);
    const OperatorCode* first_op_code =
        model->operator_codes()->Get(first_op->opcode_index());
    out_stream << "For example, in Subgraph#0, the "
               << get_op_name(first_op_code) << " op takes\n";
    dump_tensor_list(out_stream, first_op->inputs(), /*verbose=*/true);
    out_stream << " as input and produces ";
    dump_tensor_list(out_stream, first_op->outputs(), /*verbose=*/true);
    out_stream << " as output.\n\n";
  }
}

}  // namespace

class StreamErrorReporter : public ErrorReporter {
 public:
  explicit StreamErrorReporter(std::stringstream* out_stream)
      : out_stream_(out_stream) {}
  int Report(const char* format, va_list args) override {
    char buffer[1024];
    int size = vsnprintf(buffer, sizeof(buffer), format, args);
    *out_stream_ << buffer;
    return size;
  }

 private:
  std::stringstream* out_stream_;
};

std::string model_analyzer(const std::string& model_file_or_buffer,
                           bool input_is_filepath,
                           bool check_gpu_compatibility) {
  std::stringstream out_stream;
  StreamErrorReporter error_reporter(&out_stream);
  std::unique_ptr<FlatBufferModel> fb_model;
  if (input_is_filepath) {
    fb_model = FlatBufferModel::BuildFromFile(model_file_or_buffer.c_str(),
                                              &error_reporter);
    if (!fb_model) {
      out_stream << "Failed to mmap model " << model_file_or_buffer;
      return out_stream.str();
    }
  } else {
    fb_model = FlatBufferModel::BuildFromBuffer(model_file_or_buffer.c_str(),
                                                model_file_or_buffer.size(),
                                                &error_reporter);
    if (!fb_model) {
      out_stream << "Failed to mmap the given model buffer.";
      return out_stream.str();
    }
  }
  const ::tflite::Model* model = fb_model->GetModel();
  auto* subgraphs = model->subgraphs();

  dump_model_summary(out_stream, model);

  bool model_is_gpu_compatibile = true;
  for (int i = 0; i < subgraphs->Length(); ++i) {
    std::vector<int> gpu_incompatibile_nodes;
    const SubGraph* subgraph = subgraphs->Get(i);
    out_stream << "Subgraph#" << i;
    if (subgraph->name()) {
      out_stream << " " << subgraph->name()->str();
    }
    out_stream << "(";
    dump_tensor_list(out_stream, subgraph->inputs());
    out_stream << ") -> [";
    dump_tensor_list(out_stream, subgraph->outputs());
    out_stream << "]\n";
    for (int j = 0; j < subgraph->operators()->Length(); ++j) {
      const Operator* op = subgraph->operators()->Get(j);
      const OperatorCode* op_code =
          model->operator_codes()->Get(op->opcode_index());
      out_stream << "  ";  // indents for operators
      dump_node(out_stream, /*node_no=*/j, op_code, op, subgraph);
      if (check_gpu_compatibility) {
        auto status =
            CheckGpuDelegateCompatibility(op_code, op, subgraph, model);
        if (!status.ok()) {
          gpu_incompatibile_nodes.push_back(j);
          out_stream << "GPU COMPATIBILITY WARNING: " << status.message()
                     << "\n";
        }
      }
    }
    if (!gpu_incompatibile_nodes.empty()) {
      model_is_gpu_compatibile = false;
      out_stream << "\nGPU COMPATIBILITY WARNING: Subgraph#" << i
                 << " has GPU delegate compatibility issues at nodes "
                 << absl::StrJoin(gpu_incompatibile_nodes, ", ")
                 << " with TFLite runtime version " << TF_VERSION_STRING
                 << "\n";
    }

    // Dump Subgraph Tensors.
    out_stream << "\nTensors of Subgraph#" << i << "\n";
    auto tensors = subgraph->tensors();
    for (int j = 0; j < tensors->Length(); ++j) {
      auto tensor = tensors->Get(j);
      out_stream << "  ";  // indents for tensors
      dump_tensor_detail(out_stream, tensor, j);
    }
    out_stream << "\n";
  }
  if (check_gpu_compatibility && model_is_gpu_compatibile) {
    out_stream
        << "\nYour model looks compatibile with GPU delegate"
        << " with TFLite runtime version " << TF_VERSION_STRING
        << ".\nBut it doesn't guarantee that your model works well with GPU "
           "delegate.\nThere could be some runtime incompatibililty happen.\n";
  }
  return out_stream.str();
}

}  // namespace tflite
