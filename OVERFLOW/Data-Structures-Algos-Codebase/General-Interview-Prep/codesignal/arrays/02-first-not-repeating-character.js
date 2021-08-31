/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a string s consisting of small English letters, find and return the first instance
 * of a non-repeating character in it. If there is no such character, return '_'.
 *
 * Example
 *
 * For s = "abacabad", the output should be
 * firstNotRepeatingCharacter(s) = 'c'.
 *
 * There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears
 * in the string first
 */

function firstNotRepeatingCharacter(value) {
  if (!value) return "_";
  let charDict = {};
  cd;
  for (const char of value) {
    if (!charDict[char]) {
      charDict[char] = 1;
    } else {
      charDict[char] += 1;
    }
  }
  for (const key in charDict) {
    if (charDict[key] === 1) {
      return key;
    }
  }
  return "_";
}

test("first Not Repeating Character", () => {
  expect(firstNotRepeatingCharacter("abacabad")).toEqual("c");
});
