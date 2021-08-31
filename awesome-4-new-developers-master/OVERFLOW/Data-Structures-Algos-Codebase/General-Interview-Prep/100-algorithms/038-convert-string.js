/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
You are given the string s. Your friend just asked you if it's possible to change the string from s to a string t by removing some characters from it. You're a pro at programming, so you decided to create a program to determine this.

Example

For s = "ceoydefthf5iyg5h5yts" and t = "codefights", the output should be convertString(s, t) = true.

For s = "addbyca" and t = "abcd", the output should be convertString(s, t) = false.
*/

function convertString(s, t) {
  let word = "";
  let matchIndex = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === t[matchIndex]) {
      word = word.concat(s[index]);
      matchIndex += 1;
    }
    if (word === t) {
      return true;
    }
  }
  return false;
}

test("convert String", () => {
  expect(convertString("ceoydefthf5iyg5h5yts", "codefights")).toEqual(true);
  expect(convertString("addbyca", "abcd")).toEqual(false);
});
