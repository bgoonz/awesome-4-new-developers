// Source : https://leetcode.com/problems/search-for-a-range/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
  var idx = [];
  nums.forEach(function (item, index, array) {
    if (item === target) idx.push(index);
  });

  if (!idx.length) return [-1, -1];
  return [idx[0], idx[idx.length - 1]];
};
