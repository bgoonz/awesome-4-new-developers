/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix
 * in diagonal order as shown in the below image.
 *
 * Example:
 *
 * Input:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 *
 * Output:  [1,2,4,7,5,3,6,8,9]
 */

function diagonalTraverse(matrix) {
  if (matrix.length < 1 || matrix[0].length < 1) return [];
  let res = [];
  let i = 0,
    j = 0,
    m = matrix.length,
    n = matrix[0].length;
  for (let k = 0; k < m * n; k++) {
    res.push(matrix[i][j]);
    if ((i + j) % 2 === 0) {
      if (j === n - 1) {
        i++;
      } else if (i === 0) {
        j++;
      } else {
        i--;
        j++;
      }
    } else {
      if (i === m - 1) {
        j++;
      } else if (j === 0) {
        i++;
      } else {
        j--;
        i++;
      }
    }
  }
  return res;
}

test("diagonal Traverse", () => {
  expect(
    diagonalTraverse([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
  expect(diagonalTraverse([[2, 3]])).toEqual([2, 3]);
});
