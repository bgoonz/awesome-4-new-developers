// Source : https://leetcode.com/problems/word-break/
// Author : Bryan Guner

/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  var len = s.length;

  var f = [];

  var arr = [];

  var obj = {};
  obj.pos = 0;
  obj.str = "";

  arr.push(obj);

  while (arr.length) {
    var obj = arr.shift();
    var pos = obj.pos;
    var str = obj.str;

    if (wordDict.has(str) && !f[pos]) {
      f[pos] = true;

      if (pos < len) {
        var _obj = {};
        _obj.pos = pos + 1;
        _obj.str = s[pos];
        arr.push(_obj);
      }
    }

    if (pos < len) {
      var _obj = {};
      _obj.pos = pos + 1;
      _obj.str = str + s[pos];
      arr.push(_obj);
    }
  }

  return !!f[len];
};
