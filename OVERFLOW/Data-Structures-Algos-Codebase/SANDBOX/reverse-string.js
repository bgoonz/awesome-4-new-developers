// Source : https://leetcode.com/problems/reverse-string/
// Author : Bryan Guner

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  if (s === null) return s;

  return s.split("").reverse().join("");
};
