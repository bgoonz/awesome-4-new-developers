// Source : https://leetcode.com/problems/patching-array/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */

var minPatches = function (nums, n) {
  var sum = 0;
  var index = 0;
  var ans = 0;

  while (sum < n) {
    if (nums[index] === undefined) {
      sum = sum * 2 + 1;
      ans++;
    } else {
      if (sum + 1 < nums[index]) {
        ans++;
        sum = sum * 2 + 1;
      } else {
        sum += nums[index++];
      }
    }
  }

  return ans;
};
