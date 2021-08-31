// Source : https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
// Author : Bryan Guner

"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += nums[i];
  let minn = Math.min.apply(null, nums);

  for (let i = 0; ; i++) {
    if ((sum - i) % n) continue;

    return Math.max(sum - n * minn, i);
  }
};
