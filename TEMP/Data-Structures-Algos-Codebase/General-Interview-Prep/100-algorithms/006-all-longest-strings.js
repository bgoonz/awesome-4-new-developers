/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(values) {
  let longestString = values[0].length;
  values.forEach(({ length }) => {
    if (length > longestString) {
      longestString = length;
    }
  });
  return values.filter(({ length }) => length === longestString);
}

test("all Longest Strings", () => {
  expect(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])).toEqual([
    "aba",
    "vcd",
    "aba",
  ]);
});
