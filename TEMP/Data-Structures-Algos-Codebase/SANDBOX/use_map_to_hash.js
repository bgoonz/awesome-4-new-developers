// Source : https://leetcode.com/problems/palindrome-pairs/
// Author : Bryan Guner

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  var hash = [];

  var len = words.length;

  var myMap = new Map();

  for (var i = 0; i < len; i++) myMap.set(words[i], i);

  var ans = [];

  for (var i = 0; i < len; i++) {
    var item = words[i];

    var str = "";

    var wLen = item.length;

    var j = 0;

    do {
      var index = myMap.get(str);

      if (index === undefined || index === i) {
        str = item[j++] + str;
        continue;
      }

      var _str = item.substring(j);

      if (!isPalindrome(_str)) {
        str = item[j++] + str;
        continue;
      }

      ans.push([i, index]);

      str = item[j++] + str;
    } while (j < wLen);
  }

  for (var i = 0; i < len; i++) {
    var item = words[i];

    var str = "";

    var wLen = item.length;

    var j = wLen - 1;

    do {
      var index = myMap.get(str);

      if (index === undefined || index === i) {
        str += item[j--];
        continue;
      }

      var _str = item.substring(0, j + 1);

      if (!isPalindrome(_str)) {
        str += item[j--];
        continue;
      }

      ans.push([index, i]);

      str += item[j--];
    } while (j >= -1);
  }

  function isPalindrome(s) {
    return s === s.split("").reverse().join("");
  }

  return ans;
};
