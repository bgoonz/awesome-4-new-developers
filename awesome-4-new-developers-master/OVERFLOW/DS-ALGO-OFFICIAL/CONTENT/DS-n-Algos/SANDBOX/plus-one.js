// Source : https://leetcode.com/problems/plus-one/
// Author : Bryan Guner

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  var ans = [],
    add = 0,
    len = digits.length;

  digits[len - 1]++;

  for (var i = len - 1; i >= 0; i--) {
    var sum = digits[i] + add;
    ans[i] = sum % 10;
    add = ~~(sum / 10);
  }

  if (add) ans.unshift(add);

  return ans;
};
