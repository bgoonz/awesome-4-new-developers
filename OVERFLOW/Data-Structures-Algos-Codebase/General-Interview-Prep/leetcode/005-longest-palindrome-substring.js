/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

function longestPalindromeSubstring(value) {
  let startIndex = 0;
  let maxLength = 0;

  function compareBetween(left, right) {
    while (left >= 0 && right < value.length && value[left] == value[right]) {
      const length = right - left + 1;
      if (length > maxLength) {
        maxLength = length;
        startIndex = left;
      }
      left = left - 1;
      right = right + 1;
    }
  }

  for (let index = 0; index < value.length; index++) {
    compareBetween(index - 1, index + 1);
    compareBetween(index, index + 1);
  }

  return value.slice(startIndex, startIndex + maxLength);
}

test("longest Palindrome Substring", () => {
  expect(longestPalindromeSubstring("babad")).toEqual("bab");
});
