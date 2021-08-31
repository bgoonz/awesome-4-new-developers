// Leetcode 12
// Language: Javascript
// Problem: https://leetcode.com/problems/integer-to-roman/
// Author: Bryan Guner
/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  const dict = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";

  val.forEach((v, i) => {
    if (num >= v) {
      const count = parseInt(num / v);
      num %= v;

      for (let j = 0; j < count; j++) {
        result = result + dict[i];
      }
    }
  });

  return result;
};
