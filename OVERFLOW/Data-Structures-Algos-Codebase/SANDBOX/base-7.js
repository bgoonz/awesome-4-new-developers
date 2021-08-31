// Source : https://leetcode.com/problems/base-7/
// Author : Bryan Guner

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return "0";

  let prefix = num < 0 ? "-" : "",
    res = [],
    base = 7;

  num = Math.abs(num);

  while (num) {
    res.push(num % base);
    num = ~~(num / base);
  }

  return prefix + res.reverse().join("");
};
