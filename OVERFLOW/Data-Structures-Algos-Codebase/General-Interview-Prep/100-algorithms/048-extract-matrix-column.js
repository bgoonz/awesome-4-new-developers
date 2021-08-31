/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one).

Example

For matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]]

      and column = 2, the output should be
      extractMatrixColumn(matrix, column) = [1, 0, 3].
*/

function extractMatrixColumn(matrix, k) {
  let column = [];
  for (let index = 0; index < matrix.length; index++) {
    column.push(matrix[index][k]);
  }
  return column;
}

test("extract Matrix Column", () => {
  expect(
    extractMatrixColumn(
      [
        [1, 1, 1, 2],
        [0, 5, 0, 4],
        [2, 1, 3, 6],
      ],
      2
    )
  ).toEqual([1, 0, 3]);
});
