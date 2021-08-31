// Source : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Author : Bryan Guner

"use strict";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let len = nums.length;
  let hash = {};
  let ans = [];

  nums.forEach(function (item) {
    hash[item] = true;
  });

  for (let i = 1; i <= len; i++) !hash[i] && ans.push(i);

  return ans;
};
