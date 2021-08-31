/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
function longestSubstringWithoutRepeatingCharacters(value) {
  let windowChars = {}; // {a: 0, b: 1, c: 2}
  let windowStart = 0;
  let maxCount = 0;
  for (let index = 0; index < value.length; index++) {
    const endChar = value[index];
    if (windowChars[endChar] >= windowStart) {
      windowStart = windowChars[endChar] + 1;
    }
    windowChars[endChar] = index;
    maxCount = Math.max(maxCount, index - windowStart + 1);
  }
  return maxCount;
}

test("longest Substring Without Repeating Characters", () => {
  expect(longestSubstringWithoutRepeatingCharacters("abcabcbb")).toEqual(3);
});
