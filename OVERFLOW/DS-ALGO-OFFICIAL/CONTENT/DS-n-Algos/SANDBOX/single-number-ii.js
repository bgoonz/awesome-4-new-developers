// Source : https://leetcode.com/problems/single-number-ii/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  var tmp = [];
  for (var i = 0, len = nums.length; i < len; i++)
    if (!tmp[nums[i]]) tmp[nums[i]] = 1;
    else tmp[nums[i]]++;

  for (var i = 0; i < len; i++) if (tmp[nums[i]] === 1) return nums[i];
};
