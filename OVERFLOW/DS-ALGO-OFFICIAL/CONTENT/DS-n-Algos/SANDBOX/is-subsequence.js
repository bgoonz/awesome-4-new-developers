// Source : https://leetcode.com/problems/is-subsequence/
// Author : Bryan Guner

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  var index = 0,
    len = s.length;

  for (var item of t) {
    if (item === s[index]) index++;

    if (index === len) break;
  }

  return index === len;
};
