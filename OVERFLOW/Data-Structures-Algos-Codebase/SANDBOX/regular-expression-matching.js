// Source : https://leetcode.com/problems/regular-expression-matching/
// Author : Bryan Guner

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  var p = "^" + p + "$";
  var pattern = new RegExp(p, "g");
  return pattern.test(s);
};
