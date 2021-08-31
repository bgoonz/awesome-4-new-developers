/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 */

function validPalindrome(value) {
  const str = value.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

test("valid Palindrome", () => {
  expect(validPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
  expect(validPalindrome("race a car")).toEqual(false);
});
