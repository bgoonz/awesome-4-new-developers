// Source : https://leetcode.com/problems/rotate-array/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  k %= nums.length;
  var tmp = [];
  if (k) tmp = nums.slice(-k);
  nums.splice(-k, k);

  Array.prototype.unshift.apply(nums, tmp);
};
