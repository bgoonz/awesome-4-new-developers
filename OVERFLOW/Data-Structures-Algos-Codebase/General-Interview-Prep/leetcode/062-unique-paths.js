/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot is trying to reach
 * the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 *
 * Example 1:
 *
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 * Example 2:
 *
 * Input: m = 7, n = 3
 * Output: 28
 *
 *
 * Constraints:
 *
 * 1 <= m, n <= 100
 * It's guarantee
 */

function uniquePaths(m, n) {
  let rows = new Array(m).fill(0);
  let matrix = rows.map((v) => new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i][j - 1] + matrix[i - 1][j];
    }
  }
  return matrix[m - 1][n - 1];
}

test("unique Paths", () => {
  expect(uniquePaths(3, 2)).toEqual(3);
  expect(uniquePaths(7, 3)).toEqual(28);
});
