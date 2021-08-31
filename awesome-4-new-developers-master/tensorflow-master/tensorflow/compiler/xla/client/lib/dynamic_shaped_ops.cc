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

#include "tensorflow/compiler/xla/client/lib/dynamic_shaped_ops.h"

#include "tensorflow/compiler/xla/client/xla_builder.h"
#include "tensorflow/compiler/xla/literal_util.h"
#include "tensorflow/compiler/xla/shape_util.h"
namespace xla {
namespace {

XlaOp ReconsileBranchDifference(const Shape& left_branch_shape,
                                const Shape& right_branch_shape,
                                XlaOp left_root) {
  if (left_branch_shape.IsTuple()) {
    // Invariant sanity check -- Left branch and right branch need to have
    // compatible shapes.
    CHECK(right_branch_shape.IsTuple() &&
          left_branch_shape.tuple_shapes_size() ==
              right_branch_shape.tuple_shapes_size());
    // Recurse into sub-element.
    std::vector<XlaOp> results;
    results.reserve(left_branch_shape.tuple_shapes_size());
    for (int64_t i = 0; i < left_branch_shape.tuple_shapes_size(); ++i) {
      XlaOp sub_tuple = GetTupleElement(left_root, i);
      XlaOp elem = ReconsileBranchDifference(left_branch_shape.tuple_shapes(i),
                                             right_branch_shape.tuple_shapes(i),
                                             sub_tuple);
      results.push_back(elem);
    }
    return Tuple(left_root.builder(), results);
  }
  XlaOp result = left_root;
  // Invariant sanity check -- Left branch and right branch need to have
  // compatible shapes.
  CHECK(!right_branch_shape.IsTuple());
  CHECK(left_branch_shape.rank() == right_branch_shape.rank());
  for (int64_t dim = 0; dim < left_branch_shape.rank(); ++dim) {
    XlaOp original_dim = GetDimensionSize(result, dim);
    if (left_branch_shape.dimensions(dim) <
        right_branch_shape.dimensions(dim)) {
      int64_t diff = right_branch_shape.dimensions(dim) -
                     left_branch_shape.dimensions(dim);

      result = PadInDim(
          result, Zero(result.builder(), left_branch_shape.element_type()), dim,
          0, diff);
    }
    if (left_branch_shape.dimensions(dim) !=
        right_branch_shape.dimensions(dim)) {
      result = SetDimensionSize(result, original_dim, dim);
    }
  }
  return result;
}
}  // namespace
XlaOp DynamicConditional(XlaBuilder* builder, XlaOp predicate,
                         XlaOp true_operand,
                         const XlaComputation& true_computation,
                         XlaOp false_operand,
                         const XlaComputation& false_computation) {
  return builder->ReportErrorOrReturn([&]() -> StatusOr<XlaOp> {
    auto true_shape =
        true_computation.GetProgramShape().ConsumeValueOrDie().result();

    auto false_shape =
        false_computation.GetProgramShape().ConsumeValueOrDie().result();

    if (ShapeUtil::Compatible(true_shape, false_shape)) {
      return xla::Conditional(predicate, true_operand, true_computation,
                              false_operand, false_computation);
    }

    auto reconsile_branch = [](const Shape& root_shape,
                               const Shape& operand_shape,
                               const Shape& reference_root_shape,
                               const XlaComputation& computation) {
      xla::XlaBuilder builder("dynamic_builder");
      auto param = xla::Parameter(&builder, 0, operand_shape, "param");
      auto call = Call(&builder, computation, {param});

      ReconsileBranchDifference(root_shape, reference_root_shape, call);
      return builder.Build();
    };
    TF_ASSIGN_OR_RETURN(
        auto true_computation_rewritten,
        reconsile_branch(true_shape,
                         builder->GetShape(true_operand).ValueOrDie(),
                         false_shape, true_computation));

    TF_ASSIGN_OR_RETURN(
        auto false_computation_rewritten,
        reconsile_branch(false_shape,
                         builder->GetShape(false_operand).ValueOrDie(),
                         true_shape, false_computation));
    return xla::Conditional(predicate, true_operand, true_computation_rewritten,
                            false_operand, false_computation_rewritten);
  });
}

StatusOr<XlaOp> SetDimensionSizeWithRebound(ValueInference* value_inference,
                                            XlaOp operand, XlaOp dimension_size,
                                            int64_t dimension) {
  auto inferred_bound_status_or = value_inference->AnalyzeConstant(
      dimension_size, xla::ValueInferenceMode::kUpperBound);

  auto dynamism_status_or = value_inference->AnalyzeIsDynamic(dimension_size);
  TF_RETURN_IF_ERROR(inferred_bound_status_or.status());
  TF_RETURN_IF_ERROR(dynamism_status_or.status());
  if (inferred_bound_status_or->AllValid()) {
    int64_t inferred_bound = inferred_bound_status_or->Get<int32>({}).value();
    TF_ASSIGN_OR_RETURN(auto* shape_ptr,
                        operand.builder()->GetShapePtr(operand));
    // Found a tighter bound, do a slice.
    if (shape_ptr->dimensions(dimension) > inferred_bound) {
      operand = xla::SliceInDim(operand, 0, inferred_bound, 1, dimension);
    }
  }
  if (dynamism_status_or->Get<bool>({})) {
    // dimension size is dynamic, make output dynamic by calling set dimension
    // size.
    operand = xla::SetDimensionSize(operand, dimension_size, dimension);
  }
  return operand;
}

StatusOr<XlaOp> SetAllDimensionSizes(ValueInference* value_inference,
                                     XlaOp operand, XlaOp size_vector) {
  auto builder = value_inference->builder();
  TF_RETURN_IF_ERROR(builder->GetCurrentStatus());
  TF_ASSIGN_OR_RETURN(auto shape_ptr, builder->GetShapePtr(operand));

  for (int64_t i = 0; i < shape_ptr->rank(); ++i) {
    // If a dimension is dynamic, call set-dimension-size on the output.
    auto dim_size = xla::Slice(size_vector, {i}, {i + 1}, {1});
    dim_size = xla::Reshape(dim_size, {});
    dim_size = xla::ConvertElementType(dim_size, xla::S32);
    TF_ASSIGN_OR_RETURN(auto dynamism,
                        value_inference->AnalyzeIsDynamic(dim_size));
    if (dynamism.Get<bool>({})) {
      operand = xla::SetDimensionSize(operand, dim_size, i);
    }
  }
  return operand;
}
}  // namespace xla
