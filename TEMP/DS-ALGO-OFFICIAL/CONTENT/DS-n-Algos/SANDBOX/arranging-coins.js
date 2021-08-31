// Source : https://leetcode.com/problems/arranging-coins/
// Author : Bryan Guner

"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let ans = Math.sqrt(1 + 8 * n) - 1;
  ans /= 2;

  return ~~ans;
};
