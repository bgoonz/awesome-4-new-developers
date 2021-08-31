/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Write a function that takes a string as input and reverse only the vowels of a string.
 *
 * Example 1:
 *
 * Input: "hello"
 * Output: "holle"
 */

function reverseVowelsOfAString(value) {
  if (value.length < 2) return value;
  value = value.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsFound = [];
  for (let index = 0; index < value.length; index++) {
    if (vowels.indexOf(value[index].toLowerCase()) > -1) {
      vowelsFound.push(value[index]);
    }
  }

  for (let index = 0; index < value.length; index++) {
    if (vowels.indexOf(value[index].toLowerCase()) > -1) {
      value[index] = vowelsFound.pop();
    }
  }
  return value.join("");
}

test("reverse Vowels Of A String", () => {
  expect(reverseVowelsOfAString("hello")).toEqual("holle");
  expect(reverseVowelsOfAString("leetcode")).toEqual("leotcede");
});
