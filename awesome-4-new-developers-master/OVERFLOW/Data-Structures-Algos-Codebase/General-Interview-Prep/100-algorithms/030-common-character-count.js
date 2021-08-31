/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
  let count = 0;
  let dict = {};
  for (let index = 0; index < s1.length; index++) {
    dict[s1[index]] = 1;
  }
}

test("common Character Count", () => {
  expect(commonCharacterCount("aabcc", "adcaa")).toEqual(3);
});
