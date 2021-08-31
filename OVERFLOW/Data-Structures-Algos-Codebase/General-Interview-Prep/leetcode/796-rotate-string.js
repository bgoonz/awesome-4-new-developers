/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * We are given two strings, A and B.
 *
 * A shift on A consists of taking string A and moving the leftmost
 * character to the rightmost position. For example, if A = 'abcde',
 * then it will be 'bcdea' after one shift on A. Return True if and
 * only if A can become B after some number of shifts on A.
 *
 * Example 1:
 * Input: A = 'abcde', B = 'cdeab'
 * Output: true
 *
 * Example 2:
 * Input: A = 'abcde', B = 'abced'
 * Output: false
 */

function rotateString(str1, str2) {
  if (str1.length !== str2.length) return false;
  if (str1 === "" && str2 === "") return true;
  let queue = [];
  for (const c of str1) {
    queue.push(c);
  }

  for (let i = 0; i < str1.length; i++) {
    let currentElement = queue.shift();
    queue.push(currentElement);
    if (queue.join("") === str2) {
      return true;
    }
  }

  return false;
}

test("rotate String", () => {
  expect(rotateString("abcde", "cdeab")).toEqual(true);
});
