/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix (i.e. all cells that belong either to the ath row or to the bth column, or to both). Return sum of all elements of that union.

Example

For
matrix = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]] a = 1 and b = 3, the output should be crossingSum(matrix, a, b) = 12.

Here (2 + 2 + 2 + 2) + (1 + 3) = 12.
*/

function crossingSum(matrix, a, b) {
  let rowSum = matrix[a].reduce((a, b) => a + b);
  let columnSum = 0;
  for (let index = 0; index < matrix.length; index++) {
    columnSum += index !== a ? matrix[index][b] : 0;
  }
  return rowSum + columnSum;
}

test("crossing Sum", () => {
  expect(
    crossingSum(
      [
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3],
      ],
      1,
      3
    )
  ).toEqual(12);
});
