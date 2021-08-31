/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a string which consists of lowercase or uppercase letters,
 * find the length of the longest palindromes that can be built with those letters.
 *
 * This is case sensitive, for example "Aa" is not considered a palindrome here.
 *
 * Example:
 *
 * Input:
 * "abccccdd"
 * Output:
 * 7
 * Explanation:
 * One longest palindrome that can be built is "dccaccd", whose length is 7.
 */

function longestPalindrome(value) {
  if (value.length < 2) return 1;
  let map = {};
  let num = 0;
  for (let index = 0; index < value.length; index++) {
    if (map[value[index]] === 1) {
      num += 2;
      map[value[index]] = 0;
    } else {
      map[value[index]] = 1;
    }
  }

  for (const key in map) {
    if (map[key] === 1) {
      num += 1;
      break;
    }
  }

  return num;
}

test("longest Palindrome", () => {
  expect(longestPalindrome("abccccdd")).toEqual(7);
  expect(longestPalindrome("a")).toEqual(1);
});
