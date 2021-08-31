/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given alphanumeric string s. (Alphanumeric string is a string consisting
 * of lowercase English letters and digits).You have to find a permutation
 * of the string where no letter is followed by another letter and no digit
 * is followed by another digit. That is, no two adjacent characters have
 * the same type. Return the reformatted string or return an empty string if
 * it is impossible to reformat the string.
 *
 *
 * Example 1:
 * Input: s = "a0b1c2"
 * Output: "0a1b2c"
 * Explanation: No two adjacent characters have the same type in "0a1b2c".
 * "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
 */

function reformatTheString(s) {
  let c = [],
    n = [];
  for (const a of s) {
    isNaN(a) ? c.push(a) : n.push(a);
  }
  if (n.length > c.length) {
    [c, n] = [n, c];
  }
  return c.length - n.length <= 1
    ? c.map((x, i) => x + (n[i] ? n[i] : "")).join("")
    : "";
}

test("reformat The String", () => {
  expect(reformatTheString("a0b1c2")).toEqual("a0b1c2");
  expect(reformatTheString("leetcode")).toEqual("");
  expect(reformatTheString("covid2019")).toEqual("c2o0v1i9d");
});
