// Source : https://leetcode.com/problems/valid-word-abbreviation
// Author : Bryan Guner

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  if (/([^1-9]|^)0+/.test(abbr)) return false;

  abbr = abbr.replace(/\d+/g, "[A-z]{$&}");
  abbr = "^" + abbr + "$";

  return new RegExp(abbr).test(word);
};
