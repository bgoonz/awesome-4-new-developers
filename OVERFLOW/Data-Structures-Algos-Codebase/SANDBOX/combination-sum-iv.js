// Source : https://leetcode.com/problems/combination-sum-iv/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  var ans = [];
  ans[0] = 1;

  for (var i = 1; i <= target; i++) {
    ans[i] = 0;
    for (var j = 0, len = nums.length; j < len; j++) {
      var item = nums[j];
      if (i - item < 0) continue;
      // (i - item) + item = i
      ans[i] += ans[i - item];
    }
  }

  return ans[target];
};
