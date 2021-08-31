/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a non-empty string s, you may delete at most one character.
 * Judge whether you can make it a palindrome.
 *
 * Example 1:
 * Input: "aba"
 * Output: True
 *
 * Example 2:
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'.
 */

function validPalindrome(
  value,
  left = 0,
  right = value.length - 1,
  corrections = 0
) {
  while (left < right) {
    if (value[left] !== value[right]) {
      if (corrections > 0) {
        return false;
      }
      return (
        validPalindrome(value, left, right - 1, 1) ||
        validPalindrome(value, left + 1, right, 1)
      );
    }
    left++;
    right--;
  }
  return true;
}

test("valid Palindrome", () => {
  expect(validPalindrome("aba")).toEqual(true);
  expect(validPalindrome("abca")).toEqual(true);
});
