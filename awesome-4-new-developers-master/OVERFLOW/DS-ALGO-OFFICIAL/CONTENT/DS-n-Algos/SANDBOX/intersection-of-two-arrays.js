// Source : https://leetcode.com/problems/intersection-of-two-arrays/
// Author : Bryan Guner

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var hash = {};

  nums1.forEach(function (item) {
    hash[item] = 1;
  });

  nums2.forEach(function (item) {
    if (hash[item]) hash[item] = 2;
  });

  var ans = [];

  for (var k in hash) hash[k] === 2 && ans.push(+k);

  return ans;
};
