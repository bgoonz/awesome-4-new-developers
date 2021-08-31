// Leetcode 136
// Language: Javascript
// Problem: https://leetcode.com/problems/single-number/
// Author: Bryan Guner
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var total = 0;

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    total ^= num;
  }

  return total;
};
