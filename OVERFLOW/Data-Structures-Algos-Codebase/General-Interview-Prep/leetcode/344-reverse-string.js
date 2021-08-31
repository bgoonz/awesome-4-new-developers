/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Write a function that reverses a string. The input string is given as
 * an array of characters char[].
 *
 * Do not allocate extra space for another array, you must do this by
 * modifying the input array in-place with O(1) extra memory.
 *
 * You may assume all the characters consist of printable ascii characters.
 *
 * Example 1:
 *
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 */

function reverseString(value) {
  let start = 0;
  let end = value.length - 1;
  while (start < end) {
    let temp = value[start];
    value[start++] = value[end];
    value[end--] = temp;
  }
  return value;
}

test("reverse String", () => {
  expect(reverseString(["h", "e", "l", "l", "o"])).toEqual([
    "o",
    "l",
    "l",
    "e",
    "h",
  ]);
});
