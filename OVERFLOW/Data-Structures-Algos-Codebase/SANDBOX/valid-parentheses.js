// Source : https://leetcode.com/problems/valid-parentheses/
// Author : Bryan Guner

/**
 * @param {string} s
 * @return {boolean}
 */

// stack use
var isValid = function (s) {
  var sta = [],
    target = {};
  target["("] = ")";
  target["["] = "]";
  target["{"] = "}";
  for (var i = 0, len = s.length; i < len; i++) {
    if (!sta.length) sta.push(s[i]);
    else {
      if (s[i] === target[sta[sta.length - 1]]) sta.pop();
      else sta.push(s[i]);
    }
  }

  return !sta.length;
};
