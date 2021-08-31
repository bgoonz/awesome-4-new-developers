/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array nums of integers, return how many of them contain an even number of digits.
 *
 * Example 1:
 * Input: nums = [12,345,2,6,7896]
 * Output: 2
 * Explanation:
 * 12 contains 2 digits (even number of digits).
 * 345 contains 3 digits (odd number of digits).
 * 2 contains 1 digit (odd number of digits).
 * 6 contains 1 digit (odd number of digits).
 * 7896 contains 4 digits (even number of digits).
 * Therefore only 12 and 7896 contain an even number of digits.
 */

function checkEven(num) {
  let noOfDigits = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    noOfDigits += 1;
  }
  return noOfDigits % 2 === 0;
}

function findNumbersWithEvenNumberOfDigits(nums) {
  return nums.filter((n) => checkEven(n)).length;
}

test("find Numbers With Even Number Of Digits", () => {
  expect(findNumbersWithEvenNumberOfDigits([12, 345, 2, 6, 7896])).toEqual(2);
});
