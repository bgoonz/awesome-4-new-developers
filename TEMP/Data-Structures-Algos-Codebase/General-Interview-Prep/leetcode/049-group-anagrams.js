/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

function groupAnagrams(value) {
  let grouped = {};
  for (let index = 0; index < value.length; index++) {
    let word = value[index];
    let key = word.split("").sort().join("");
    if (!grouped[key]) {
      grouped[key] = [word];
    } else {
      grouped[key].push(word);
    }
  }
  return Object.values(grouped);
}

test("group Anagrams", () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
    ["ate", "eat", "tea"],
    ["nat", "tan"],
    ["bat"],
  ]);
});
