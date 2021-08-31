/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 *
 * Input: s = "rat", t = "car"
 * Output: false
 * Note:
 * You may assume the string contains only lowercase alphabets.
 */

function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let charMap = {};
  s = s.split("");
  for (let index = 0; index < s.length; index++) {
    if (charMap[s[index]]) {
      charMap[s[index]] += 1;
    } else {
      charMap[s[index]] = 1;
    }
  }
  for (let index = 0; index < t.length; index++) {
    if (!charMap[t[index]]) {
      return false;
    } else {
      charMap[t[index]]--;
    }
  }
  return true;
}

test("valid Anagram", () => {
  expect(validAnagram("anagram", "nagaram")).toEqual(true);
  expect(validAnagram("rat", "car")).toEqual(false);
});
