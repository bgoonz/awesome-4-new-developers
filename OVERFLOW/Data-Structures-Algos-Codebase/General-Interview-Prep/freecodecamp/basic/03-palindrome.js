/**
 * Created by Bryan Guner
 *
 * bryan.guner@gmail.com
 */

/**
 * Problem:
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 * Note You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
 */

function checkForPalindrome(str) {
  const originalStr = str.replace(/\W|_/g, "").toLowerCase();
  const reverseStr = originalStr.split("").reverse().join("");
  return originalStr === reverseStr;
}

console.log(checkForPalindrome("eyE"));
