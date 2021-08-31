# Copyright 2017 The TensorFlow Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ==============================================================================
# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
#
# Do not use pylint on generated code.
# pylint: disable=missing-docstring,g-short-docstring-punctuation,g-no-space-after-docstring-summary,invalid-name,line-too-long,unused-argument,g-doc-args
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import grpc

from tensorflow.core.debug import (
    debug_service_pb2 as tensorflow_dot_core_dot_debug_dot_debug__service__pb2,
)
from tensorflow.core.protobuf import (
    debug_pb2 as tensorflow_dot_core_dot_protobuf_dot_debug__pb2,
)
from tensorflow.core.util import (
    event_pb2 as tensorflow_dot_core_dot_util_dot_event__pb2,
)


class EventListenerStub(object):
    """EventListener: Receives Event protos, e.g., from debugged TensorFlow
  runtime(s).
  """

    def __init__(self, channel):
        """Constructor.

    Args:
      channel: A grpc.Channel.
    """
        self.SendEvents = channel.stream_stream(
            "/tensorflow.EventListener/SendEvents",
            request_serializer=tensorflow_dot_core_dot_util_dot_event__pb2.Event.SerializeToString,
            response_deserializer=tensorflow_dot_core_dot_debug_dot_debug__service__pb2.EventReply.FromString,
        )
        self.SendTracebacks = channel.unary_unary(
            "/tensorflow.EventListener/SendTracebacks",
            request_serializer=tensorflow_dot_core_dot_debug_dot_debug__service__pb2.CallTraceback.SerializeToString,
            response_deserializer=tensorflow_dot_core_dot_debug_dot_debug__service__pb2.EventReply.FromString,
        )
        self.SendSourceFiles = channel.unary_unary(
            "/tensorflow.EventListener/SendSourceFiles",
            request_serializer=tensorflow_dot_core_dot_protobuf_dot_debug__pb2.DebuggedSourceFiles.SerializeToString,
            response_deserializer=tensorflow_dot_core_dot_debug_dot_debug__service__pb2.EventReply.FromString,
        )


class EventListenerServicer(object):
    """EventListener: Receives Event protos, e.g., from debugged TensorFlow
  runtime(s).
  """

    def SendEvents(self, request_iterator, context):
        """Client(s) can use this RPC method to send the EventListener Event protos.
    The Event protos can hold information such as:
    1) intermediate tensors from a debugged graph being executed, which can
    be sent from DebugIdentity ops configured with grpc URLs.
    2) GraphDefs of partition graphs, which can be sent from special debug
    ops that get executed immediately after the beginning of the graph
    execution.
    """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def SendTracebacks(self, request, context):
        """Send the tracebacks of ops in a Python graph definition.
    """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def SendSourceFiles(self, request, context):
        """Send a collection of source code files being debugged.
    """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")


def add_EventListenerServicer_to_server(servicer, server):
    rpc_method_handlers = {
        "SendEvents": grpc.stream_stream_rpc_method_handler(
            servicer.SendEvents,
            request_deserializer=tensorflow_dot_core_dot_util_dot_event__pb2.Event.FromString,
            response_serializer=tensorflow_dot_core_dot_debug_dot_debug__service__pb2.EventReply.SerializeToString,
        ),
        "SendTracebacks": grpc.unary_unary_rpc_method_handler(
            servicer.SendTracebacks,
            request_deserializer=tensorflow_dot_core_dot_debug_dot_debug__service__pb2.CallTraceback.FromString,
            response_serializer=tensorflow_dot_core_dot_debug_dot_debug__service__pb2.EventReply.SerializeToString,
        ),
        "SendSourceFiles": grpc.unary_unary_rpc_method_handler(
            servicer.SendSourceFiles,
            request_deserializer=tensorflow_dot_core_dot_protobuf_dot_debug__pb2.DebuggedSourceFiles.FromString,
            response_serializer=tensorflow_dot_core_dot_debug_dot_debug__service__pb2.EventReply.SerializeToString,
        ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
        "tensorflow.EventListener", rpc_method_handlers
    )
    server.add_generic_rpc_handlers((generic_handler,))
