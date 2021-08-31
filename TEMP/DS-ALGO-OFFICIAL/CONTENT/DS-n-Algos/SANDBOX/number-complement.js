// Source : https://leetcode.com/problems/number-complement/
// Author : Bryan Guner

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let ans = 0,
    add = 1;

  while (num) {
    if (!(num & 1)) ans += add;
    num >>= 1;
    add <<= 1;
  }

  return ans;
};
