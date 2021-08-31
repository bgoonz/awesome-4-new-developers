/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a string s consists of upper/lower-case alphabets and empty space characters
 * ' ', return the length of last word (last word means the last appearing word if
 * we loop from left to right) in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a maximal substring consisting of non-space characters
 * only.
 *
 * Example:
 *
 * Input: "Hello World"
 * Output: 5
 */

function lengthOfLastWord(value) {
  if (!value) return 0;
  return value.trim().split(" ").pop().length;
}

test("length Of Last Word", () => {
  expect(lengthOfLastWord("Hello World")).toEqual(5);
  expect(lengthOfLastWord("a ")).toEqual(1);
  expect(lengthOfLastWord("")).toEqual(0);
  expect(lengthOfLastWord(" ")).toEqual(0);
});
