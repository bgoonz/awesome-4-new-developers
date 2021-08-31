/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a m * n matrix grid which is sorted in non-increasing order
 * both row-wise and column-wise. Return the number of negative numbers in grid.
 *
 * Example 1:
 * Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
 * Output: 8
 * Explanation: There are 8 negatives number in the matrix.
 */

function countNegativeNumbersInASortedMatrix(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const currentNum = matrix[i][j];
      if (currentNum < 0) {
        count++;
      }
    }
  }
  return count;
}

test("count Negative Numbers In A Sorted Matrix", () => {
  expect(
    countNegativeNumbersInASortedMatrix([
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ])
  ).toEqual(8);
});
