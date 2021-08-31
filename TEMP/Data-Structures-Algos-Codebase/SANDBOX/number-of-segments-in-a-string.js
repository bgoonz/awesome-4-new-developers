// Source : https://leetcode.com/problems/number-of-segments-in-a-string/
// Author : Bryan Guner

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let arr = s.split(" ");
  let ans = 0;

  arr.forEach(function (item) {
    item && ans++;
  });

  return ans;
};
