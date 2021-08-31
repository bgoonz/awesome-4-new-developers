// Source : https://leetcode.com/problems/power-of-four/
// Author : Bryan Guner

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (!num) return false;

  var a = Math.log(num) / Math.log(4);
  return (
    Math.pow(4, Math.floor(a)) === num || Math.pow(4, Math.ceil(a)) === num
  );
};
