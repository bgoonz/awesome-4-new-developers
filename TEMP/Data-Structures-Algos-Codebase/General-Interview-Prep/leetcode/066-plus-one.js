/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a non-empty array of digits representing a non-negative integer,
 * plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the
 *  head of the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except
 *  the number 0 itself.
 *
 * Example 1:
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 */

function plusOne(value) {
  if (value.length < 1) return [];
  for (let i = value.length - 1; i >= 0; i--) {
    if (value[i] < 9) {
      value[i] += 1;
      return value;
    } else {
      value[i] = 0;
    }
  }
  value.unshift(1);
  return value;
}

test("plus One", () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});
