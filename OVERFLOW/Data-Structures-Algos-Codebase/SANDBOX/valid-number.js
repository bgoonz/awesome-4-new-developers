// Source : https://leetcode.com/problems/valid-number/
// Author : Bryan Guner

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  if (s.trim() === "") return false;
  return !isNaN(Number(s));
};
