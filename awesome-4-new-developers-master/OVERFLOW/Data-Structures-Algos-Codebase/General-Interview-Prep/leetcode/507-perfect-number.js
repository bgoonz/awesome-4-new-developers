/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * We define the Perfect Number is a positive integer that is equal to the
 * sum of all its positive divisors except itself.
 *
 * Now, given an integer n, write a function that returns true when it is
 * a perfect number and false when it is not.
 *
 * Example:
 * Input: 28
 * Output: True
 * Explanation: 28 = 1 + 2 + 4 + 7 + 14
 */

function perfectNumber(value) {
  if (value < 3) return false;
  let divisor = 2;
  let sum = 0;
  while (divisor <= Math.sqrt(value)) {
    if (value % divisor === 0) {
      sum += divisor + value / divisor;
    }
    divisor++;
  }
  sum++;
  return sum === value;
}

test("perfect Number", () => {
  expect(perfectNumber(28)).toEqual(true);
});
