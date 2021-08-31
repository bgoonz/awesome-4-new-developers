/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given a string, enclose it in round brackets.

Example

For inputString = "abacaba", the output should be encloseInBrackets(inputString) = "(abacaba)".
*/

function encloseInBrackets(value) {
  value = value.split("");
  value.push(")");
  value.unshift("(");
  return value.join("");
}

test("enclose In Brackets", () => {
  expect(encloseInBrackets("abacaba")).toEqual("(abacaba)");
});
