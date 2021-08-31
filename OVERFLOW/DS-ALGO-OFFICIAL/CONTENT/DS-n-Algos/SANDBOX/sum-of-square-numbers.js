// Source : https://leetcode.com/problems/sum-of-square-numbers/description/
// Author : Bryan Guner

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let mid = ~~Math.sqrt(c);

  for (let i = 0; i <= mid; i++) {
    let rem = c - i * i;
    if (rem === Math.pow(~~Math.sqrt(rem), 2)) return true;
  }

  return false;
};
