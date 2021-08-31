// Source : https://leetcode.com/problems/jump-game/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  var rightMost = 1;
  for (var i = 0, len = nums.length; i < len; i++) {
    if (rightMost < i + 1) break;
    rightMost = Math.max(rightMost, i + 1 + nums[i]);
  }
  return rightMost >= len;
};
