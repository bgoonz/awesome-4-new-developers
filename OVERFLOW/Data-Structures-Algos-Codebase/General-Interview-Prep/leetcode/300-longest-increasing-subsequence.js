/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 *
 * Example:
 *
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 * Note:
 *
 * There may be more than one LIS combination, it is only necessary for you to return the length.
 * Your algorithm should run in O(n2) complexity.
 */

function longestIncreasingSubsequence(nums) {
  let dp = new Array(nums.length).fill(1);
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
}

test("longest Increasing Subsequence", () => {
  expect(longestIncreasingSubsequence([1, 4, 0, 7])).toEqual(3);
  expect(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4);
});
