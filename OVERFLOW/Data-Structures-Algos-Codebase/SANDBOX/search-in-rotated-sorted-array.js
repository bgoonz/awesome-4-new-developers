// Source : https://leetcode.com/problems/search-in-rotated-sorted-array/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  for (var i = 0, len = nums.length; i < len; i++)
    if (nums[i] === target) return i;
  return -1;
};
