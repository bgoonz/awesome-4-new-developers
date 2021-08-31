// Source : https://leetcode.com/problems/maximum-subarray/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  var maxn = -Number.MAX_VALUE;
  var sum = 0;
  nums.forEach(function (item, index, array) {
    sum += item;
    if (sum > maxn) maxn = sum;
    if (sum < 0) sum = 0;
  });

  return maxn;
};
