// Source : https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
  return Math.min.apply(null, nums);
};
