// Source : https://leetcode.com/problems/wiggle-subsequence/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @return {number}
 */

// Greedy
var ans;

var wiggleMaxLength = function (nums) {
  ans = 0;

  dfs(Infinity, 0, false, 0, nums);
  dfs(-Infinity, 0, true, 0, nums);

  return ans;
};

function dfs(current, index, flag, len, nums) {
  if (index === nums.length) {
    ans = Math.max(ans, len);
    return;
  }

  var item = nums[index];

  // 需要减
  if (!flag) {
    if (item < current) dfs(item, index + 1, !flag, len + 1, nums);
    else dfs(item, index + 1, flag, len, nums);
  } else {
    // 需要增
    if (item > current) dfs(item, index + 1, !flag, len + 1, nums);
    else dfs(item, index + 1, flag, len, nums);
  }
}
