// Source : https://leetcode.com/problems/find-the-duplicate-number/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
  var hash = {};
  for (var i = 0, len = nums.length; i < len; i++) {
    var item = nums[i];
    if (!hash[item]) hash[item] = true;
    else return item;
  }
};
