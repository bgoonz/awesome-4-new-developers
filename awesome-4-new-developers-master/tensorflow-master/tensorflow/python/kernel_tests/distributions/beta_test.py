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
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import importlib

import numpy as np

from tensorflow.python.eager import backprop
from tensorflow.python.framework import constant_op
from tensorflow.python.framework import random_seed
from tensorflow.python.framework import tensor_shape
from tensorflow.python.framework import test_util
from tensorflow.python.ops import math_ops
from tensorflow.python.ops import nn_ops
from tensorflow.python.ops.distributions import beta as beta_lib
from tensorflow.python.ops.distributions import kullback_leibler
from tensorflow.python.platform import test
from tensorflow.python.platform import tf_logging


def try_import(name):  # pylint: disable=invalid-name
    module = None
    try:
        module = importlib.import_module(name)
    except ImportError as e:
        tf_logging.warning("Could not import %s: %s" % (name, str(e)))
    return module


special = try_import("scipy.special")
stats = try_import("scipy.stats")


@test_util.run_all_in_graph_and_eager_modes
class BetaTest(test.TestCase):
    def testSimpleShapes(self):
        a = np.random.rand(3)
        b = np.random.rand(3)
        dist = beta_lib.Beta(a, b)
        self.assertAllEqual([], self.evaluate(dist.event_shape_tensor()))
        self.assertAllEqual([3], self.evaluate(dist.batch_shape_tensor()))
        self.assertEqual(tensor_shape.TensorShape([]), dist.event_shape)
        self.assertEqual(tensor_shape.TensorShape([3]), dist.batch_shape)

    def testComplexShapes(self):
        a = np.random.rand(3, 2, 2)
        b = np.random.rand(3, 2, 2)
        dist = beta_lib.Beta(a, b)
        self.assertAllEqual([], self.evaluate(dist.event_shape_tensor()))
        self.assertAllEqual([3, 2, 2], self.evaluate(dist.batch_shape_tensor()))
        self.assertEqual(tensor_shape.TensorShape([]), dist.event_shape)
        self.assertEqual(tensor_shape.TensorShape([3, 2, 2]), dist.batch_shape)

    def testComplexShapesBroadcast(self):
        a = np.random.rand(3, 2, 2)
        b = np.random.rand(2, 2)
        dist = beta_lib.Beta(a, b)
        self.assertAllEqual([], self.evaluate(dist.event_shape_tensor()))
        self.assertAllEqual([3, 2, 2], self.evaluate(dist.batch_shape_tensor()))
        self.assertEqual(tensor_shape.TensorShape([]), dist.event_shape)
        self.assertEqual(tensor_shape.TensorShape([3, 2, 2]), dist.batch_shape)

    def testAlphaProperty(self):
        a = [[1.0, 2, 3]]
        b = [[2.0, 4, 3]]
        dist = beta_lib.Beta(a, b)
        self.assertEqual([1, 3], dist.concentration1.get_shape())
        self.assertAllClose(a, self.evaluate(dist.concentration1))

    def testBetaProperty(self):
        a = [[1.0, 2, 3]]
        b = [[2.0, 4, 3]]
        dist = beta_lib.Beta(a, b)
        self.assertEqual([1, 3], dist.concentration0.get_shape())
        self.assertAllClose(b, self.evaluate(dist.concentration0))

    def testPdfXProper(self):
        a = [[1.0, 2, 3]]
        b = [[2.0, 4, 3]]
        dist = beta_lib.Beta(a, b, validate_args=True)
        self.evaluate(dist.prob([0.1, 0.3, 0.6]))
        self.evaluate(dist.prob([0.2, 0.3, 0.5]))
        # Either condition can trigger.
        with self.assertRaisesOpError("sample must be positive"):
            self.evaluate(dist.prob([-1.0, 0.1, 0.5]))
        with self.assertRaisesOpError("sample must be positive"):
            self.evaluate(dist.prob([0.0, 0.1, 0.5]))
        with self.assertRaisesOpError("sample must be less than `1`"):
            self.evaluate(dist.prob([0.1, 0.2, 1.2]))
        with self.assertRaisesOpError("sample must be less than `1`"):
            self.evaluate(dist.prob([0.1, 0.2, 1.0]))

    def testPdfTwoBatches(self):
        a = [1.0, 2]
        b = [1.0, 2]
        x = [0.5, 0.5]
        dist = beta_lib.Beta(a, b)
        pdf = dist.prob(x)
        self.assertAllClose([1.0, 3.0 / 2], self.evaluate(pdf), rtol=1e-5, atol=1e-5)
        self.assertEqual((2,), pdf.get_shape())

    def testPdfTwoBatchesNontrivialX(self):
        a = [1.0, 2]
        b = [1.0, 2]
        x = [0.3, 0.7]
        dist = beta_lib.Beta(a, b)
        pdf = dist.prob(x)
        self.assertAllClose([1, 63.0 / 50], self.evaluate(pdf), rtol=1e-5, atol=1e-5)
        self.assertEqual((2,), pdf.get_shape())

    def testPdfUniformZeroBatch(self):
        # This is equivalent to a uniform distribution
        a = 1.0
        b = 1.0
        x = np.array([0.1, 0.2, 0.3, 0.5, 0.8], dtype=np.float32)
        dist = beta_lib.Beta(a, b)
        pdf = dist.prob(x)
        self.assertAllClose([1.0] * 5, self.evaluate(pdf))
        self.assertEqual((5,), pdf.get_shape())

    def testPdfAlphaStretchedInBroadcastWhenSameRank(self):
        a = [[1.0, 2]]
        b = [[1.0, 2]]
        x = [[0.5, 0.5], [0.3, 0.7]]
        dist = beta_lib.Beta(a, b)
        pdf = dist.prob(x)
        self.assertAllClose(
            [[1.0, 3.0 / 2], [1.0, 63.0 / 50]], self.evaluate(pdf), rtol=1e-5, atol=1e-5
        )
        self.assertEqual((2, 2), pdf.get_shape())

    def testPdfAlphaStretchedInBroadcastWhenLowerRank(self):
        a = [1.0, 2]
        b = [1.0, 2]
        x = [[0.5, 0.5], [0.2, 0.8]]
        pdf = beta_lib.Beta(a, b).prob(x)
        self.assertAllClose(
            [[1.0, 3.0 / 2], [1.0, 24.0 / 25]], self.evaluate(pdf), rtol=1e-5, atol=1e-5
        )
        self.assertEqual((2, 2), pdf.get_shape())

    def testPdfXStretchedInBroadcastWhenSameRank(self):
        a = [[1.0, 2], [2.0, 3]]
        b = [[1.0, 2], [2.0, 3]]
        x = [[0.5, 0.5]]
        pdf = beta_lib.Beta(a, b).prob(x)
        self.assertAllClose(
            [[1.0, 3.0 / 2], [3.0 / 2, 15.0 / 8]],
            self.evaluate(pdf),
            rtol=1e-5,
            atol=1e-5,
        )
        self.assertEqual((2, 2), pdf.get_shape())

    def testPdfXStretchedInBroadcastWhenLowerRank(self):
        a = [[1.0, 2], [2.0, 3]]
        b = [[1.0, 2], [2.0, 3]]
        x = [0.5, 0.5]
        pdf = beta_lib.Beta(a, b).prob(x)
        self.assertAllClose(
            [[1.0, 3.0 / 2], [3.0 / 2, 15.0 / 8]],
            self.evaluate(pdf),
            rtol=1e-5,
            atol=1e-5,
        )
        self.assertEqual((2, 2), pdf.get_shape())

    def testLogPdfOnBoundaryIsFiniteWhenAlphaIsOne(self):
        b = [[0.01, 0.1, 1.0, 2], [5.0, 10.0, 2.0, 3]]
        pdf = self.evaluate(beta_lib.Beta(1.0, b).prob(0.0))
        self.assertAllEqual(np.ones_like(pdf, dtype=np.bool_), np.isfinite(pdf))

    def testBetaMean(self):
        a = [1.0, 2, 3]
        b = [2.0, 4, 1.2]
        dist = beta_lib.Beta(a, b)
        self.assertEqual(dist.mean().get_shape(), (3,))
        if not stats:
            return
        expected_mean = stats.beta.mean(a, b)
        self.assertAllClose(expected_mean, self.evaluate(dist.mean()))

    def testBetaVariance(self):
        a = [1.0, 2, 3]
        b = [2.0, 4, 1.2]
        dist = beta_lib.Beta(a, b)
        self.assertEqual(dist.variance().get_shape(), (3,))
        if not stats:
            return
        expected_variance = stats.beta.var(a, b)
        self.assertAllClose(expected_variance, self.evaluate(dist.variance()))

    def testBetaMode(self):
        a = np.array([1.1, 2, 3])
        b = np.array([2.0, 4, 1.2])
        expected_mode = (a - 1) / (a + b - 2)
        dist = beta_lib.Beta(a, b)
        self.assertEqual(dist.mode().get_shape(), (3,))
        self.assertAllClose(expected_mode, self.evaluate(dist.mode()))

    def testBetaModeInvalid(self):
        a = np.array([1.0, 2, 3])
        b = np.array([2.0, 4, 1.2])
        dist = beta_lib.Beta(a, b, allow_nan_stats=False)
        with self.assertRaisesOpError("Condition x < y.*"):
            self.evaluate(dist.mode())

        a = np.array([2.0, 2, 3])
        b = np.array([1.0, 4, 1.2])
        dist = beta_lib.Beta(a, b, allow_nan_stats=False)
        with self.assertRaisesOpError("Condition x < y.*"):
            self.evaluate(dist.mode())

    def testBetaModeEnableAllowNanStats(self):
        a = np.array([1.0, 2, 3])
        b = np.array([2.0, 4, 1.2])
        dist = beta_lib.Beta(a, b, allow_nan_stats=True)

        expected_mode = (a - 1) / (a + b - 2)
        expected_mode[0] = np.nan
        self.assertEqual((3,), dist.mode().get_shape())
        self.assertAllClose(expected_mode, self.evaluate(dist.mode()))

        a = np.array([2.0, 2, 3])
        b = np.array([1.0, 4, 1.2])
        dist = beta_lib.Beta(a, b, allow_nan_stats=True)

        expected_mode = (a - 1) / (a + b - 2)
        expected_mode[0] = np.nan
        self.assertEqual((3,), dist.mode().get_shape())
        self.assertAllClose(expected_mode, self.evaluate(dist.mode()))

    def testBetaEntropy(self):
        a = [1.0, 2, 3]
        b = [2.0, 4, 1.2]
        dist = beta_lib.Beta(a, b)
        self.assertEqual(dist.entropy().get_shape(), (3,))
        if not stats:
            return
        expected_entropy = stats.beta.entropy(a, b)
        self.assertAllClose(expected_entropy, self.evaluate(dist.entropy()))

    def testBetaSample(self):
        a = 1.0
        b = 2.0
        beta = beta_lib.Beta(a, b)
        n = constant_op.constant(100000)
        samples = beta.sample(n)
        sample_values = self.evaluate(samples)
        self.assertEqual(sample_values.shape, (100000,))
        self.assertFalse(np.any(sample_values < 0.0))
        if not stats:
            return
        self.assertLess(
            stats.kstest(
                # Beta is a univariate distribution.
                sample_values,
                stats.beta(a=1.0, b=2.0).cdf,
            )[0],
            0.01,
        )
        # The standard error of the sample mean is 1 / (sqrt(18 * n))
        self.assertAllClose(
            sample_values.mean(axis=0), stats.beta.mean(a, b), atol=1e-2
        )
        self.assertAllClose(
            np.cov(sample_values, rowvar=0), stats.beta.var(a, b), atol=1e-1
        )

    def testBetaFullyReparameterized(self):
        a = constant_op.constant(1.0)
        b = constant_op.constant(2.0)
        with backprop.GradientTape() as tape:
            tape.watch(a)
            tape.watch(b)
            beta = beta_lib.Beta(a, b)
            samples = beta.sample(100)
        grad_a, grad_b = tape.gradient(samples, [a, b])
        self.assertIsNotNone(grad_a)
        self.assertIsNotNone(grad_b)

    # Test that sampling with the same seed twice gives the same results.
    def testBetaSampleMultipleTimes(self):
        a_val = 1.0
        b_val = 2.0
        n_val = 100

        random_seed.set_random_seed(654321)
        beta1 = beta_lib.Beta(concentration1=a_val, concentration0=b_val, name="beta1")
        samples1 = self.evaluate(beta1.sample(n_val, seed=123456))

        random_seed.set_random_seed(654321)
        beta2 = beta_lib.Beta(concentration1=a_val, concentration0=b_val, name="beta2")
        samples2 = self.evaluate(beta2.sample(n_val, seed=123456))

        self.assertAllClose(samples1, samples2)

    def testBetaSampleMultidimensional(self):
        a = np.random.rand(3, 2, 2).astype(np.float32)
        b = np.random.rand(3, 2, 2).astype(np.float32)
        beta = beta_lib.Beta(a, b)
        n = constant_op.constant(100000)
        samples = beta.sample(n)
        sample_values = self.evaluate(samples)
        self.assertEqual(sample_values.shape, (100000, 3, 2, 2))
        self.assertFalse(np.any(sample_values < 0.0))
        if not stats:
            return
        self.assertAllClose(
            sample_values[:, 1, :].mean(axis=0), stats.beta.mean(a, b)[1, :], atol=1e-1
        )

    def testBetaCdf(self):
        shape = (30, 40, 50)
        for dt in (np.float32, np.float64):
            a = 10.0 * np.random.random(shape).astype(dt)
            b = 10.0 * np.random.random(shape).astype(dt)
            x = np.random.random(shape).astype(dt)
            actual = self.evaluate(beta_lib.Beta(a, b).cdf(x))
            self.assertAllEqual(np.ones(shape, dtype=np.bool_), 0.0 <= x)
            self.assertAllEqual(np.ones(shape, dtype=np.bool_), 1.0 >= x)
            if not stats:
                return
            self.assertAllClose(stats.beta.cdf(x, a, b), actual, rtol=9e-3, atol=5e-6)

    def testBetaLogCdf(self):
        shape = (30, 40, 50)
        for dt in (np.float32, np.float64):
            a = 10.0 * np.random.random(shape).astype(dt)
            b = 10.0 * np.random.random(shape).astype(dt)
            x = np.random.random(shape).astype(dt)
            actual = self.evaluate(math_ops.exp(beta_lib.Beta(a, b).log_cdf(x)))
            self.assertAllEqual(np.ones(shape, dtype=np.bool_), 0.0 <= x)
            self.assertAllEqual(np.ones(shape, dtype=np.bool_), 1.0 >= x)
            if not stats:
                return
            self.assertAllClose(stats.beta.cdf(x, a, b), actual, rtol=3e-3, atol=2e-5)

    def testBetaWithSoftplusConcentration(self):
        a, b = -4.2, -9.1
        dist = beta_lib.BetaWithSoftplusConcentration(a, b)
        self.assertAllClose(
            self.evaluate(nn_ops.softplus(a)), self.evaluate(dist.concentration1)
        )
        self.assertAllClose(
            self.evaluate(nn_ops.softplus(b)), self.evaluate(dist.concentration0)
        )

    def testBetaBetaKL(self):
        for shape in [(10,), (4, 5)]:
            a1 = 6.0 * np.random.random(size=shape) + 1e-4
            b1 = 6.0 * np.random.random(size=shape) + 1e-4
            a2 = 6.0 * np.random.random(size=shape) + 1e-4
            b2 = 6.0 * np.random.random(size=shape) + 1e-4
            # Take inverse softplus of values to test BetaWithSoftplusConcentration
            a1_sp = np.log(np.exp(a1) - 1.0)
            b1_sp = np.log(np.exp(b1) - 1.0)
            a2_sp = np.log(np.exp(a2) - 1.0)
            b2_sp = np.log(np.exp(b2) - 1.0)

            d1 = beta_lib.Beta(concentration1=a1, concentration0=b1)
            d2 = beta_lib.Beta(concentration1=a2, concentration0=b2)
            d1_sp = beta_lib.BetaWithSoftplusConcentration(
                concentration1=a1_sp, concentration0=b1_sp
            )
            d2_sp = beta_lib.BetaWithSoftplusConcentration(
                concentration1=a2_sp, concentration0=b2_sp
            )

            if not special:
                return
            kl_expected = (
                special.betaln(a2, b2)
                - special.betaln(a1, b1)
                + (a1 - a2) * special.digamma(a1)
                + (b1 - b2) * special.digamma(b1)
                + (a2 - a1 + b2 - b1) * special.digamma(a1 + b1)
            )

            for dist1 in [d1, d1_sp]:
                for dist2 in [d2, d2_sp]:
                    kl = kullback_leibler.kl_divergence(dist1, dist2)
                    kl_val = self.evaluate(kl)
                    self.assertEqual(kl.get_shape(), shape)
                    self.assertAllClose(kl_val, kl_expected)

            # Make sure KL(d1||d1) is 0
            kl_same = self.evaluate(kullback_leibler.kl_divergence(d1, d1))
            self.assertAllClose(kl_same, np.zeros_like(kl_expected))


if __name__ == "__main__":
    test.main()
