// Source : https://leetcode.com/problems/missing-number/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var hash = [];
  nums.forEach(function (item) {
    hash[item] = true;
  });

  for (var i = 0; ; i++) if (!hash[i]) return i;
};
