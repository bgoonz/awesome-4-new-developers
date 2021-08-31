// Source : https://leetcode.com/problems/add-digits/
// Author : Bryan Guner

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num.toString().length !== 1) {
    var sum = 0;
    while (num) {
      sum += num % 10;
      num = ~~(num / 10);
    }
    num = sum;
  }

  return num;
};
