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
from tensorflow.python.framework import tensor_shape
from tensorflow.python.framework import test_util
from tensorflow.python.ops import nn_ops
from tensorflow.python.ops.distributions import laplace as laplace_lib
from tensorflow.python.platform import test

from tensorflow.python.platform import tf_logging


def try_import(name):  # pylint: disable=invalid-name
    module = None
    try:
        module = importlib.import_module(name)
    except ImportError as e:
        tf_logging.warning("Could not import %s: %s" % (name, str(e)))
    return module


stats = try_import("scipy.stats")


@test_util.run_all_in_graph_and_eager_modes
class LaplaceTest(test.TestCase):
    def testLaplaceShape(self):
        loc = constant_op.constant([3.0] * 5)
        scale = constant_op.constant(11.0)
        laplace = laplace_lib.Laplace(loc=loc, scale=scale)

        self.assertEqual(self.evaluate(laplace.batch_shape_tensor()), (5,))
        self.assertEqual(laplace.batch_shape, tensor_shape.TensorShape([5]))
        self.assertAllEqual(self.evaluate(laplace.event_shape_tensor()), [])
        self.assertEqual(laplace.event_shape, tensor_shape.TensorShape([]))

    def testLaplaceLogPDF(self):
        batch_size = 6
        loc = constant_op.constant([2.0] * batch_size)
        scale = constant_op.constant([3.0] * batch_size)
        loc_v = 2.0
        scale_v = 3.0
        x = np.array([2.5, 2.5, 4.0, 0.1, 1.0, 2.0], dtype=np.float32)
        laplace = laplace_lib.Laplace(loc=loc, scale=scale)
        log_pdf = laplace.log_prob(x)
        self.assertEqual(log_pdf.get_shape(), (6,))
        if not stats:
            return
        expected_log_pdf = stats.laplace.logpdf(x, loc_v, scale=scale_v)
        self.assertAllClose(self.evaluate(log_pdf), expected_log_pdf)

        pdf = laplace.prob(x)
        self.assertEqual(pdf.get_shape(), (6,))
        self.assertAllClose(self.evaluate(pdf), np.exp(expected_log_pdf))

    def testLaplaceLogPDFMultidimensional(self):
        batch_size = 6
        loc = constant_op.constant([[2.0, 4.0]] * batch_size)
        scale = constant_op.constant([[3.0, 4.0]] * batch_size)
        loc_v = np.array([2.0, 4.0])
        scale_v = np.array([3.0, 4.0])
        x = np.array([[2.5, 2.5, 4.0, 0.1, 1.0, 2.0]], dtype=np.float32).T
        laplace = laplace_lib.Laplace(loc=loc, scale=scale)
        log_pdf = laplace.log_prob(x)
        log_pdf_values = self.evaluate(log_pdf)
        self.assertEqual(log_pdf.get_shape(), (6, 2))

        pdf = laplace.prob(x)
        pdf_values = self.evaluate(pdf)
        self.assertEqual(pdf.get_shape(), (6, 2))
        if not stats:
            return
        expected_log_pdf = stats.laplace.logpdf(x, loc_v, scale=scale_v)
        self.assertAllClose(log_pdf_values, expected_log_pdf)
        self.assertAllClose(pdf_values, np.exp(expected_log_pdf))

    def testLaplaceLogPDFMultidimensionalBroadcasting(self):
        batch_size = 6
        loc = constant_op.constant([[2.0, 4.0]] * batch_size)
        scale = constant_op.constant(3.0)
        loc_v = np.array([2.0, 4.0])
        scale_v = 3.0
        x = np.array([[2.5, 2.5, 4.0, 0.1, 1.0, 2.0]], dtype=np.float32).T
        laplace = laplace_lib.Laplace(loc=loc, scale=scale)
        log_pdf = laplace.log_prob(x)
        log_pdf_values = self.evaluate(log_pdf)
        self.assertEqual(log_pdf.get_shape(), (6, 2))

        pdf = laplace.prob(x)
        pdf_values = self.evaluate(pdf)
        self.assertEqual(pdf.get_shape(), (6, 2))
        if not stats:
            return
        expected_log_pdf = stats.laplace.logpdf(x, loc_v, scale=scale_v)
        self.assertAllClose(log_pdf_values, expected_log_pdf)
        self.assertAllClose(pdf_values, np.exp(expected_log_pdf))

    def testLaplaceCDF(self):
        batch_size = 6
        loc = constant_op.constant([2.0] * batch_size)
        scale = constant_op.constant([3.0] * batch_size)
        loc_v = 2.0
        scale_v = 3.0
        x = np.array([2.5, 2.5, 4.0, 0.1, 1.0, 2.0], dtype=np.float32)

        laplace = laplace_lib.Laplace(loc=loc, scale=scale)

        cdf = laplace.cdf(x)
        self.assertEqual(cdf.get_shape(), (6,))
        if not stats:
            return
        expected_cdf = stats.laplace.cdf(x, loc_v, scale=scale_v)
        self.assertAllClose(self.evaluate(cdf), expected_cdf)

    def testLaplaceLogCDF(self):
        batch_size = 6
        loc = constant_op.constant([2.0] * batch_size)
        scale = constant_op.constant([3.0] * batch_size)
        loc_v = 2.0
        scale_v = 3.0
        x = np.array([-2.5, 2.5, -4.0, 0.1, 1.0, 2.0], dtype=np.float32)

        laplace = laplace_lib.Laplace(loc=loc, scale=scale)

        cdf = laplace.log_cdf(x)
        self.assertEqual(cdf.get_shape(), (6,))
        if not stats:
            return
        expected_cdf = stats.laplace.logcdf(x, loc_v, scale=scale_v)
        self.assertAllClose(self.evaluate(cdf), expected_cdf)

    def testLaplaceLogSurvivalFunction(self):
        batch_size = 6
        loc = constant_op.constant([2.0] * batch_size)
        scale = constant_op.constant([3.0] * batch_size)
        loc_v = 2.0
        scale_v = 3.0
        x = np.array([-2.5, 2.5, -4.0, 0.1, 1.0, 2.0], dtype=np.float32)

        laplace = laplace_lib.Laplace(loc=loc, scale=scale)

        sf = laplace.log_survival_function(x)
        self.assertEqual(sf.get_shape(), (6,))
        if not stats:
            return
        expected_sf = stats.laplace.logsf(x, loc_v, scale=scale_v)
        self.assertAllClose(self.evaluate(sf), expected_sf)

    def testLaplaceMean(self):
        loc_v = np.array([1.0, 3.0, 2.5])
        scale_v = np.array([1.0, 4.0, 5.0])
        laplace = laplace_lib.Laplace(loc=loc_v, scale=scale_v)
        self.assertEqual(laplace.mean().get_shape(), (3,))
        if not stats:
            return
        expected_means = stats.laplace.mean(loc_v, scale=scale_v)
        self.assertAllClose(self.evaluate(laplace.mean()), expected_means)

    def testLaplaceMode(self):
        loc_v = np.array([0.5, 3.0, 2.5])
        scale_v = np.array([1.0, 4.0, 5.0])
        laplace = laplace_lib.Laplace(loc=loc_v, scale=scale_v)
        self.assertEqual(laplace.mode().get_shape(), (3,))
        self.assertAllClose(self.evaluate(laplace.mode()), loc_v)

    def testLaplaceVariance(self):
        loc_v = np.array([1.0, 3.0, 2.5])
        scale_v = np.array([1.0, 4.0, 5.0])
        laplace = laplace_lib.Laplace(loc=loc_v, scale=scale_v)
        self.assertEqual(laplace.variance().get_shape(), (3,))
        if not stats:
            return
        expected_variances = stats.laplace.var(loc_v, scale=scale_v)
        self.assertAllClose(self.evaluate(laplace.variance()), expected_variances)

    def testLaplaceStd(self):
        loc_v = np.array([1.0, 3.0, 2.5])
        scale_v = np.array([1.0, 4.0, 5.0])
        laplace = laplace_lib.Laplace(loc=loc_v, scale=scale_v)
        self.assertEqual(laplace.stddev().get_shape(), (3,))
        if not stats:
            return
        expected_stddev = stats.laplace.std(loc_v, scale=scale_v)
        self.assertAllClose(self.evaluate(laplace.stddev()), expected_stddev)

    def testLaplaceEntropy(self):
        loc_v = np.array([1.0, 3.0, 2.5])
        scale_v = np.array([1.0, 4.0, 5.0])
        laplace = laplace_lib.Laplace(loc=loc_v, scale=scale_v)
        self.assertEqual(laplace.entropy().get_shape(), (3,))
        if not stats:
            return
        expected_entropy = stats.laplace.entropy(loc_v, scale=scale_v)
        self.assertAllClose(self.evaluate(laplace.entropy()), expected_entropy)

    def testLaplaceSample(self):
        loc_v = 4.0
        scale_v = 3.0
        loc = constant_op.constant(loc_v)
        scale = constant_op.constant(scale_v)
        n = 100000
        laplace = laplace_lib.Laplace(loc=loc, scale=scale)
        samples = laplace.sample(n, seed=137)
        sample_values = self.evaluate(samples)
        self.assertEqual(samples.get_shape(), (n,))
        self.assertEqual(sample_values.shape, (n,))
        if not stats:
            return
        self.assertAllClose(
            sample_values.mean(),
            stats.laplace.mean(loc_v, scale=scale_v),
            rtol=0.05,
            atol=0.0,
        )
        self.assertAllClose(
            sample_values.var(),
            stats.laplace.var(loc_v, scale=scale_v),
            rtol=0.05,
            atol=0.0,
        )
        self.assertTrue(self._kstest(loc_v, scale_v, sample_values))

    def testLaplaceFullyReparameterized(self):
        loc = constant_op.constant(4.0)
        scale = constant_op.constant(3.0)
        with backprop.GradientTape() as tape:
            tape.watch(loc)
            tape.watch(scale)
            laplace = laplace_lib.Laplace(loc=loc, scale=scale)
            samples = laplace.sample(100)
        grad_loc, grad_scale = tape.gradient(samples, [loc, scale])
        self.assertIsNotNone(grad_loc)
        self.assertIsNotNone(grad_scale)

    def testLaplaceSampleMultiDimensional(self):
        loc_v = np.array([np.arange(1, 101, dtype=np.float32)])  # 1 x 100
        scale_v = np.array([np.arange(1, 11, dtype=np.float32)]).T  # 10 x 1
        laplace = laplace_lib.Laplace(loc=loc_v, scale=scale_v)
        n = 10000
        samples = laplace.sample(n, seed=137)
        sample_values = self.evaluate(samples)
        self.assertEqual(samples.get_shape(), (n, 10, 100))
        self.assertEqual(sample_values.shape, (n, 10, 100))
        zeros = np.zeros_like(loc_v + scale_v)  # 10 x 100
        loc_bc = loc_v + zeros
        scale_bc = scale_v + zeros
        if not stats:
            return
        self.assertAllClose(
            sample_values.mean(axis=0),
            stats.laplace.mean(loc_bc, scale=scale_bc),
            rtol=0.35,
            atol=0.0,
        )
        self.assertAllClose(
            sample_values.var(axis=0),
            stats.laplace.var(loc_bc, scale=scale_bc),
            rtol=0.105,
            atol=0.0,
        )
        fails = 0
        trials = 0
        for ai, a in enumerate(np.reshape(loc_v, [-1])):
            for bi, b in enumerate(np.reshape(scale_v, [-1])):
                s = sample_values[:, bi, ai]
                trials += 1
                fails += 0 if self._kstest(a, b, s) else 1
        self.assertLess(fails, trials * 0.03)

    def _kstest(self, loc, scale, samples):
        # Uses the Kolmogorov-Smirnov test for goodness of fit.
        if not stats:
            return True  # If scipy isn't available, return "True" for passing
        ks, _ = stats.kstest(samples, stats.laplace(loc, scale=scale).cdf)
        # Return True when the test passes.
        return ks < 0.02

    def testLaplacePdfOfSampleMultiDims(self):
        laplace = laplace_lib.Laplace(loc=[7.0, 11.0], scale=[[5.0], [6.0]])
        num = 50000
        samples = laplace.sample(num, seed=137)
        pdfs = laplace.prob(samples)
        sample_vals, pdf_vals = self.evaluate([samples, pdfs])
        self.assertEqual(samples.get_shape(), (num, 2, 2))
        self.assertEqual(pdfs.get_shape(), (num, 2, 2))
        self._assertIntegral(sample_vals[:, 0, 0], pdf_vals[:, 0, 0], err=0.02)
        self._assertIntegral(sample_vals[:, 0, 1], pdf_vals[:, 0, 1], err=0.02)
        self._assertIntegral(sample_vals[:, 1, 0], pdf_vals[:, 1, 0], err=0.02)
        self._assertIntegral(sample_vals[:, 1, 1], pdf_vals[:, 1, 1], err=0.02)
        if not stats:
            return
        self.assertAllClose(
            stats.laplace.mean(
                [[7.0, 11.0], [7.0, 11.0]], scale=np.array([[5.0, 5.0], [6.0, 6.0]])
            ),
            sample_vals.mean(axis=0),
            rtol=0.05,
            atol=0.0,
        )
        self.assertAllClose(
            stats.laplace.var(
                [[7.0, 11.0], [7.0, 11.0]], scale=np.array([[5.0, 5.0], [6.0, 6.0]])
            ),
            sample_vals.var(axis=0),
            rtol=0.05,
            atol=0.0,
        )

    def _assertIntegral(self, sample_vals, pdf_vals, err=1e-3):
        s_p = zip(sample_vals, pdf_vals)
        prev = (0, 0)
        total = 0
        for k in sorted(s_p, key=lambda x: x[0]):
            pair_pdf = (k[1] + prev[1]) / 2
            total += (k[0] - prev[0]) * pair_pdf
            prev = k
        self.assertNear(1.0, total, err=err)

    def testLaplaceNonPositiveInitializationParamsRaises(self):
        loc_v = constant_op.constant(0.0, name="loc")
        scale_v = constant_op.constant(-1.0, name="scale")
        with self.assertRaisesOpError("Condition x > 0 did not hold element-wise"):
            laplace = laplace_lib.Laplace(loc=loc_v, scale=scale_v, validate_args=True)
            self.evaluate(laplace.mean())
        loc_v = constant_op.constant(1.0, name="loc")
        scale_v = constant_op.constant(0.0, name="scale")
        with self.assertRaisesOpError("Condition x > 0 did not hold element-wise"):
            laplace = laplace_lib.Laplace(loc=loc_v, scale=scale_v, validate_args=True)
            self.evaluate(laplace.mean())

    def testLaplaceWithSoftplusScale(self):
        loc_v = constant_op.constant([0.0, 1.0], name="loc")
        scale_v = constant_op.constant([-1.0, 2.0], name="scale")
        laplace = laplace_lib.LaplaceWithSoftplusScale(loc=loc_v, scale=scale_v)
        self.assertAllClose(
            self.evaluate(nn_ops.softplus(scale_v)), self.evaluate(laplace.scale)
        )
        self.assertAllClose(self.evaluate(loc_v), self.evaluate(laplace.loc))


if __name__ == "__main__":
    test.main()
