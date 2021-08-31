/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a non-negative integer c, your task is to decide whether
 * there're two integers a and b such that a2 + b2 = c.
 *
 * Example 1:
 *
 * Input: 5
 * Output: True
 * Explanation: 1 * 1 + 2 * 2 = 5
 */

function sumOfSquareNumbers(value) {
  if (!value) return true;
  let max = Math.floor(Math.sqrt(value - 1));
  while (max >= 0) {
    let complement = Math.sqrt(value - max * max);
    if (complement % 1 === 0) {
      return true;
    }
    max--;
  }
  return false;
}

test("sum Of Square Numbers", () => {
  expect(sumOfSquareNumbers(4)).toEqual(true);
  expect(sumOfSquareNumbers(5)).toEqual(true);
  expect(sumOfSquareNumbers(3)).toEqual(false);
});
