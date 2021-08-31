// Source : https://leetcode.com/problems/divide-two-integers/
// Author : Bryan Guner

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  var MAX_POSITIVE_INT = ~(1 << 31);
  var MAX_NEGATIVE_INT = 1 << 31;

  var ans = Math.floor(dividend / divisor);

  if (ans < MAX_NEGATIVE_INT) ans = MAX_NEGATIVE_INT;

  if (ans > MAX_POSITIVE_INT) ans = MAX_POSITIVE_INT;

  return ans;
};
