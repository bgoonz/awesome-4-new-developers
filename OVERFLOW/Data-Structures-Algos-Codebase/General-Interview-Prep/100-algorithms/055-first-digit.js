/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be firstDigit(inputString) = '1';

For inputString = "q2q-q", the output should be firstDigit(inputString) = '2';

For inputString = "0ss", the output should be firstDigit(inputString) = '0'.
*/

function firstDigit(str) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  str = str.split("");
  for (let index = 0; index < str.length; index++) {
    if (digits.includes(str[index])) {
      return str[index];
    }
  }
}

test("first Digit", () => {
  expect(firstDigit("var_1__Int")).toEqual("1");
  expect(firstDigit("q2q-q")).toEqual("2");
  expect(firstDigit("0ss")).toEqual("0");
});
