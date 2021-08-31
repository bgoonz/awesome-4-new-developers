/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/**
 * Given a positive integer num, write a function which returns True
 * if num is a perfect square else False.
 *
 * Note: Do not use any built-in library function such as sqrt.
 *
 * Example 1:
 *
 * Input: 16
 * Output: true
 */

function validPerfectSquare(num) {
  let start = 0;
  let end = num;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (num === mid * mid) {
      return true;
    }
    if (mid * mid > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

test("valid Perfect Square", () => {
  expect(validPerfectSquare(16)).toEqual(true);
});
