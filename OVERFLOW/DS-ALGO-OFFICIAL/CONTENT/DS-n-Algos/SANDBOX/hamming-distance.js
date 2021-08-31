// Source : https://leetcode.com/problems/hamming-distance/
// Author : Bryan Guner

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let ans = 0;
  while (x || y) {
    ans += (x & 1) ^ (y & 1);
    x >>= 1;
    y >>= 1;
  }
  return ans;
};
