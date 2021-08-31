// Source : https://leetcode.com/problems/power-of-three/
// Author : Bryan Guner

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (!n) return false;
  var a = Math.log(n) / Math.log(3);
  return Math.pow(3, Math.floor(a)) === n || Math.pow(3, Math.ceil(a)) === n;
};
