# Copyright 2016 The TensorFlow Authors. All Rights Reserved.
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
"""Tests for Keras initializers."""

import numpy as np

from tensorflow.python.keras import backend
from tensorflow.python.keras import combinations
from tensorflow.python.keras import initializers
from tensorflow.python.keras import models
from tensorflow.python.keras import testing_utils
from tensorflow.python.keras.engine import input_layer
from tensorflow.python.keras.layers import core
from tensorflow.python.ops import array_ops
from tensorflow.python.platform import test


def _compute_fans(shape):
    """Computes the number of input and output units for a weight shape.

  Args:
    shape: Integer shape tuple or TF tensor shape.

  Returns:
    A tuple of integer scalars (fan_in, fan_out).
  """
    if len(shape) < 1:  # Just to avoid errors for constants.
        fan_in = fan_out = 1
    elif len(shape) == 1:
        fan_in = fan_out = shape[0]
    elif len(shape) == 2:
        fan_in = shape[0]
        fan_out = shape[1]
    else:
        # Assuming convolution kernels (2D, 3D, or more).
        # kernel shape: (..., input_depth, depth)
        receptive_field_size = 1
        for dim in shape[:-2]:
            receptive_field_size *= dim
        fan_in = shape[-2] * receptive_field_size
        fan_out = shape[-1] * receptive_field_size
    return int(fan_in), int(fan_out)


@combinations.generate(combinations.combine(mode=["graph", "eager"]))
class KerasInitializersTest(test.TestCase):
    def _runner(
        self,
        init,
        shape,
        target_mean=None,
        target_std=None,
        target_max=None,
        target_min=None,
    ):
        variable = backend.variable(init(shape))
        output = backend.get_value(variable)
        # Test serialization (assumes deterministic behavior).
        config = init.get_config()
        reconstructed_init = init.__class__.from_config(config)
        variable = backend.variable(reconstructed_init(shape))
        output_2 = backend.get_value(variable)
        self.assertAllClose(output, output_2, atol=1e-4)

    def test_uniform(self):
        tensor_shape = (9, 6, 7)
        with self.cached_session():
            self._runner(
                initializers.RandomUniformV2(minval=-1, maxval=1, seed=124),
                tensor_shape,
                target_mean=0.0,
                target_max=1,
                target_min=-1,
            )

    def test_normal(self):
        tensor_shape = (8, 12, 99)
        with self.cached_session():
            self._runner(
                initializers.RandomNormalV2(mean=0, stddev=1, seed=153),
                tensor_shape,
                target_mean=0.0,
                target_std=1,
            )

    def test_truncated_normal(self):
        tensor_shape = (12, 99, 7)
        with self.cached_session():
            self._runner(
                initializers.TruncatedNormalV2(mean=0, stddev=1, seed=126),
                tensor_shape,
                target_mean=0.0,
                target_max=2,
                target_min=-2,
            )

    def test_constant(self):
        tensor_shape = (5, 6, 4)
        with self.cached_session():
            self._runner(
                initializers.ConstantV2(2.0),
                tensor_shape,
                target_mean=2,
                target_max=2,
                target_min=2,
            )

    def test_lecun_uniform(self):
        tensor_shape = (5, 6, 4, 2)
        with self.cached_session():
            fan_in, _ = _compute_fans(tensor_shape)
            std = np.sqrt(1.0 / fan_in)
            self._runner(
                initializers.LecunUniformV2(seed=123),
                tensor_shape,
                target_mean=0.0,
                target_std=std,
            )

    def test_glorot_uniform(self):
        tensor_shape = (5, 6, 4, 2)
        with self.cached_session():
            fan_in, fan_out = _compute_fans(tensor_shape)
            std = np.sqrt(2.0 / (fan_in + fan_out))
            self._runner(
                initializers.GlorotUniformV2(seed=123),
                tensor_shape,
                target_mean=0.0,
                target_std=std,
            )

    def test_he_uniform(self):
        tensor_shape = (5, 6, 4, 2)
        with self.cached_session():
            fan_in, _ = _compute_fans(tensor_shape)
            std = np.sqrt(2.0 / fan_in)
            self._runner(
                initializers.HeUniformV2(seed=123),
                tensor_shape,
                target_mean=0.0,
                target_std=std,
            )

    def test_lecun_normal(self):
        tensor_shape = (5, 6, 4, 2)
        with self.cached_session():
            fan_in, _ = _compute_fans(tensor_shape)
            std = np.sqrt(1.0 / fan_in)
            self._runner(
                initializers.LecunNormalV2(seed=123),
                tensor_shape,
                target_mean=0.0,
                target_std=std,
            )

    def test_glorot_normal(self):
        tensor_shape = (5, 6, 4, 2)
        with self.cached_session():
            fan_in, fan_out = _compute_fans(tensor_shape)
            std = np.sqrt(2.0 / (fan_in + fan_out))
            self._runner(
                initializers.GlorotNormalV2(seed=123),
                tensor_shape,
                target_mean=0.0,
                target_std=std,
            )

    def test_he_normal(self):
        tensor_shape = (5, 6, 4, 2)
        with self.cached_session():
            fan_in, _ = _compute_fans(tensor_shape)
            std = np.sqrt(2.0 / fan_in)
            self._runner(
                initializers.HeNormalV2(seed=123),
                tensor_shape,
                target_mean=0.0,
                target_std=std,
            )

    def test_orthogonal(self):
        tensor_shape = (20, 20)
        with self.cached_session():
            self._runner(
                initializers.OrthogonalV2(seed=123), tensor_shape, target_mean=0.0
            )

    def test_identity(self):
        with self.cached_session():
            tensor_shape = (3, 4, 5)
            with self.assertRaises(ValueError):
                self._runner(
                    initializers.IdentityV2(),
                    tensor_shape,
                    target_mean=1.0 / tensor_shape[0],
                    target_max=1.0,
                )

            tensor_shape = (3, 3)
            self._runner(
                initializers.IdentityV2(),
                tensor_shape,
                target_mean=1.0 / tensor_shape[0],
                target_max=1.0,
            )

    def test_zero(self):
        tensor_shape = (4, 5)
        with self.cached_session():
            self._runner(
                initializers.ZerosV2(), tensor_shape, target_mean=0.0, target_max=0.0
            )

    def test_one(self):
        tensor_shape = (4, 5)
        with self.cached_session():
            self._runner(
                initializers.OnesV2(), tensor_shape, target_mean=1.0, target_max=1.0
            )

    def test_default_random_uniform(self):
        ru = initializers.get("uniform")
        self.assertEqual(ru.minval, -0.05)
        self.assertEqual(ru.maxval, 0.05)

    def test_default_random_normal(self):
        rn = initializers.get("normal")
        self.assertEqual(rn.mean, 0.0)
        self.assertEqual(rn.stddev, 0.05)

    def test_default_truncated_normal(self):
        tn = initializers.get("truncated_normal")
        self.assertEqual(tn.mean, 0.0)
        self.assertEqual(tn.stddev, 0.05)

    def test_custom_initializer_saving(self):
        def my_initializer(shape, dtype=None):
            return array_ops.ones(shape, dtype=dtype)

        inputs = input_layer.Input((10,))
        outputs = core.Dense(1, kernel_initializer=my_initializer)(inputs)
        model = models.Model(inputs, outputs)
        model2 = model.from_config(
            model.get_config(), custom_objects={"my_initializer": my_initializer}
        )
        self.assertEqual(model2.layers[1].kernel_initializer, my_initializer)

    @testing_utils.run_v2_only
    def test_load_external_variance_scaling_v2(self):
        external_serialized_json = {
            "class_name": "VarianceScaling",
            "config": {
                "distribution": "normal",
                "mode": "fan_avg",
                "scale": 1.0,
                "seed": None,
            },
        }
        initializer = initializers.deserialize(external_serialized_json)
        self.assertEqual(initializer.distribution, "truncated_normal")

    def test_partition(self):
        with self.cached_session():
            partition_enabled_initializers = [
                initializers.ZerosV2(),
                initializers.OnesV2(),
                initializers.RandomUniformV2(),
                initializers.RandomNormalV2(),
                initializers.TruncatedNormalV2(),
                initializers.LecunUniformV2(),
                initializers.GlorotUniformV2(),
                initializers.HeUniformV2(),
            ]
            for initializer in partition_enabled_initializers:
                got = initializer(
                    shape=(4, 2), partition_shape=(2, 2), partition_offset=(0, 0)
                )
                self.assertEqual(got.shape, (2, 2))

            partition_forbidden_initializers = [
                initializers.OrthogonalV2(),
                initializers.IdentityV2(),
            ]
            for initializer in partition_forbidden_initializers:
                with self.assertRaisesRegex(
                    ValueError,
                    "initializer doesn't support partition-related arguments",
                ):
                    initializer(
                        shape=(4, 2), partition_shape=(2, 2), partition_offset=(0, 0)
                    )


if __name__ == "__main__":
    test.main()
