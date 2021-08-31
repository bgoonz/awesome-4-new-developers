/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be addTwoDigits(n) = 11.

function addTwoDigits(values) {
  const nums = values.toString().split("");
  return nums.reduce((i, sum) => Number(i) + Number(sum));
}

test("add Two Digits", () => {
  expect(addTwoDigits(29)).toEqual(11);
});
