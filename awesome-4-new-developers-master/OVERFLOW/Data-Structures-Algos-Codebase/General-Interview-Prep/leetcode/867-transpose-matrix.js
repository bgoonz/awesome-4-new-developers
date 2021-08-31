/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a matrix A, return the transpose of A.
 *
 * The transpose of a matrix is the matrix flipped over it's main diagonal,
 * switching the row and column indices of the matrix.
 *
 * Example 1:
 *
 * Input: [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[1,4,7],[2,5,8],[3,6,9]]
 */

function transposeMatrix(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let currentCol = [];
    for (let j = 0; j < matrix[0].length; j++) {
      currentCol.push(matrix[j][i]);
    }
    result.push(currentCol);
  }
  return result;
}

test("transpose Matrix", () => {
  expect(
    transposeMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]);
});
