// Source : https://leetcode.com/problems/valid-perfect-square/
// Author : Bryan Guner

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  var a = 0,
    b = num;

  while (a <= b) {
    var mid = (a + b) >> 1,
      ans = mid * mid;

    if (ans > num) b = mid - 1;
    else if (ans < num) a = mid + 1;
    else return true;
  }

  return false;
};
