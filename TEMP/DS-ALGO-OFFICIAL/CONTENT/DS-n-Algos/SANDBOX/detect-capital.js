// Source : https://leetcode.com/problems/detect-capital/?tab=Description
// Author : Bryan Guner

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let p = /^([a-z]+|[A-Z]+|[A-Z]{1}[a-z]+)$/;
  return p.test(word);
};
