# Copyright 2015 The TensorFlow Authors. All Rights Reserved.
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
"""Tests for tensorflow.ops.math_ops.matrix_triangular_solve."""

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import numpy as np

from tensorflow.python.framework import test_util
from tensorflow.python.ops import array_ops
from tensorflow.python.ops import linalg_ops
from tensorflow.python.platform import test


class MatrixTriangularSolveOpTest(test.TestCase):
    def _verifySolveAllWays(self, x, y, dtypes, batch_dims=None):
        for lower in True, False:
            for adjoint in True, False:
                for use_placeholder in True, False:
                    self._verifySolve(
                        x,
                        y,
                        lower=lower,
                        adjoint=adjoint,
                        batch_dims=batch_dims,
                        use_placeholder=use_placeholder,
                        dtypes=dtypes,
                    )

    def _verifySolveAllWaysReal(self, x, y, batch_dims=None):
        self._verifySolveAllWays(x, y, (np.float32, np.float64), batch_dims)

    def _verifySolveAllWaysComplex(self, x, y, batch_dims=None):
        self._verifySolveAllWays(x, y, (np.complex64, np.complex128), batch_dims)

    def _verifySolve(
        self,
        x,
        y,
        lower=True,
        adjoint=False,
        batch_dims=None,
        use_placeholder=False,
        dtypes=(np.float32, np.float64),
    ):
        for np_type in dtypes:
            a = x.astype(np_type)
            b = y.astype(np_type)
            # For numpy.solve we have to explicitly zero out the strictly
            # upper or lower triangle.
            if lower and a.size > 0:
                a_np = np.tril(a)
            elif a.size > 0:
                a_np = np.triu(a)
            else:
                a_np = a
            if adjoint:
                axes = list(range(len(a_np.shape)))
                axes[-2] = -1
                axes[-1] = -2
                a_np = np.conj(np.transpose(a_np, axes=axes))

            if batch_dims is not None:
                a = np.tile(a, batch_dims + [1, 1])
                a_np = np.tile(a_np, batch_dims + [1, 1])
                b = np.tile(b, batch_dims + [1, 1])

            def broadcast(a, b):
                b1 = b + np.zeros(a.shape[:-2] + (1, 1), dtype=b.dtype)
                return a, b1

            a_tf = a
            b_tf = b
            if use_placeholder:
                a_tf = array_ops.placeholder_with_default(a_tf, shape=None)
                b_tf = array_ops.placeholder_with_default(b_tf, shape=None)
            tf_ans = linalg_ops.matrix_triangular_solve(
                a_tf, b_tf, lower=lower, adjoint=adjoint
            )
            tf_val = self.evaluate(tf_ans)
            a_np, b = broadcast(a_np, b)
            np_ans = np.linalg.solve(a_np, b)
            self.assertEqual(np_ans.shape, tf_val.shape)
            self.assertAllClose(np_ans, tf_val)

    @test_util.run_deprecated_v1
    def testSolve(self):
        # 1x1 matrix, single rhs.
        matrix = np.array([[0.1]])
        rhs0 = np.array([[1.0]])
        self._verifySolveAllWaysReal(matrix, rhs0)
        # 2x2 matrices, single right-hand side.
        matrix = np.array([[1.0, 2.0], [3.0, 4.0]])
        rhs0 = np.array([[1.0], [1.0]])
        self._verifySolveAllWaysReal(matrix, rhs0)
        # 2x2 matrices, 3 right-hand sides.
        rhs1 = np.array([[1.0, 0.0, 1.0], [0.0, 1.0, 1.0]])
        self._verifySolveAllWaysReal(matrix, rhs1)

    @test_util.run_deprecated_v1
    def testSolveComplex(self):
        # 1x1 matrix, single rhs.
        matrix = np.array([[0.1 + 1j * 0.1]])
        rhs0 = np.array([[1.0 + 1j]])
        self._verifySolveAllWaysComplex(matrix, rhs0)
        # 2x2 matrices, single right-hand side.
        matrix = np.array([[1.0, 2.0], [3.0, 4.0]]).astype(np.complex64)
        matrix += 1j * matrix
        rhs0 = np.array([[1.0], [1.0]]).astype(np.complex64)
        rhs0 += 1j * rhs0
        self._verifySolveAllWaysComplex(matrix, rhs0)
        # 2x2 matrices, 3 right-hand sides.
        rhs1 = np.array([[1.0, 0.0, 1.0], [0.0, 1.0, 1.0]]).astype(np.complex64)
        rhs1 += 1j * rhs1
        self._verifySolveAllWaysComplex(matrix, rhs1)

    @test_util.run_deprecated_v1
    def testSolveBatch(self):
        matrix = np.array([[1.0, 2.0], [3.0, 4.0]])
        rhs = np.array([[1.0, 0.0, 1.0], [0.0, 1.0, 1.0]])
        # Batch of 2x3x2x2 matrices, 2x3x2x3 right-hand sides.
        self._verifySolveAllWaysReal(matrix, rhs, batch_dims=[2, 3])
        # Batch of 3x2x2x2 matrices, 3x2x2x3 right-hand sides.
        self._verifySolveAllWaysReal(matrix, rhs, batch_dims=[3, 2])

    @test_util.run_deprecated_v1
    def testSolveBatchBroadcast(self):
        # 2 x 2 x 2
        matrix = np.array([[[1.0, 0.0], [3.0, 4.0]], [[1.0, 0.0], [2.0, 1.0]]])
        # 2 x 3
        rhs = np.array([[1.0, 0.0, 1.0], [0.0, 1.0, 1.0]])
        # 2 x 2 x 3
        self._verifySolveAllWaysReal(matrix, rhs)
        # 2 x 2 x 2
        matrix2 = np.array([[[1.0, 0.0], [3.0, 4.0]], [[2.0, 0.0], [1.0, 6.3]]])
        # 1 x 2 x 3
        rhs = np.array([[[1.0, 0.0, 1.0], [0.0, 1.0, 1.0]]])
        # 2 x 2 x 3
        self._verifySolveAllWaysReal(matrix2, rhs)

    @test_util.run_deprecated_v1
    def testSolveBatchBroadcastLargerBatches(self):
        # 1 x 10 x 10
        matrix = np.random.uniform(low=1, high=2.0, size=[1, 10, 10])
        # 10 x 1
        rhs = np.random.uniform(size=[10, 1])
        # 1 x 10 x 1
        self._verifySolveAllWaysReal(matrix, rhs)

        # 2 x 10 x 10
        matrix = np.random.uniform(low=1, high=2.0, size=[2, 10, 10])
        # 10 x 1
        rhs = np.random.uniform(size=[10, 1])
        # 2 x 10 x 1
        self._verifySolveAllWaysReal(matrix, rhs)

        # 2 x 257 x 257
        matrix = np.random.uniform(low=1, high=2.0, size=[2, 257, 257])
        # Also ensure the matrix is well conditioned by making it diagonally
        # dominant.
        np.fill_diagonal(matrix[0, ...], 257 * 2)
        np.fill_diagonal(matrix[1, ...], 257 * 2)
        # 257 x 1
        rhs = np.random.uniform(size=[257, 1])
        # 2 x 257 x 1
        self._verifySolveAllWaysReal(matrix, rhs)

    @test_util.run_deprecated_v1
    def testSolveBatchComplex(self):
        matrix = np.array([[1.0, 2.0], [3.0, 4.0]]).astype(np.complex64)
        matrix += 1j * matrix
        rhs = np.array([[1.0, 0.0, 1.0], [0.0, 1.0, 1.0]]).astype(np.complex64)
        rhs += 1j * rhs
        # Batch of 2x3x2x2 matrices, 2x3x2x3 right-hand sides.
        self._verifySolveAllWaysComplex(matrix, rhs, batch_dims=[2, 3])
        # Batch of 3x2x2x2 matrices, 3x2x2x3 right-hand sides.
        self._verifySolveAllWaysComplex(matrix, rhs, batch_dims=[3, 2])

    @test_util.run_deprecated_v1
    def testNonSquareMatrix(self):
        # A non-square matrix should cause an error.
        matrix = np.array([[1.0, 2.0, 3.0], [3.0, 4.0, 5.0]])
        with self.cached_session():
            with self.assertRaises(ValueError):
                self._verifySolve(matrix, matrix)
            with self.assertRaises(ValueError):
                self._verifySolve(matrix, matrix, batch_dims=[2, 3])

    @test_util.run_deprecated_v1
    def testWrongDimensions(self):
        # The matrix should have the same number of rows as the
        # right-hand sides.
        matrix = np.array([[1.0, 0.0], [0.0, 1.0]])
        rhs = np.array([[1.0, 0.0]])
        with self.cached_session():
            with self.assertRaises(ValueError):
                self._verifySolve(matrix, rhs)
            with self.assertRaises(ValueError):
                self._verifySolve(matrix, rhs, batch_dims=[2, 3])

    @test_util.run_deprecated_v1
    @test_util.disable_xla("XLA cannot throw assertion errors during a kernel.")
    def testNotInvertible(self):
        # The input should be invertible.
        # The matrix is singular because it has a zero on the diagonal.
        singular_matrix = np.array(
            [[1.0, 0.0, -1.0], [-1.0, 0.0, 1.0], [0.0, -1.0, 1.0]]
        )

        # FIXME(rmlarsen): The GPU kernel does not check for singularity.
        with self.cached_session(use_gpu=False):
            with self.assertRaisesOpError("Input matrix is not invertible."):
                self._verifySolve(singular_matrix, singular_matrix)
            with self.assertRaisesOpError("Input matrix is not invertible."):
                self._verifySolve(singular_matrix, singular_matrix, batch_dims=[2, 3])

    def testEmpty(self):
        self._verifySolve(np.empty([0, 2, 2]), np.empty([0, 2, 2]), lower=True)
        self._verifySolve(np.empty([2, 0, 0]), np.empty([2, 0, 0]), lower=True)
        self._verifySolve(np.empty([2, 0, 0]), np.empty([2, 0, 0]), lower=False)
        self._verifySolve(
            np.empty([2, 0, 0]), np.empty([2, 0, 0]), lower=True, batch_dims=[3, 2]
        )
        self._verifySolve(np.empty([0, 0]), np.empty([0, 0]), lower=True)


if __name__ == "__main__":
    test.main()
