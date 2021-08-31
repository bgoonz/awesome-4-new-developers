/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given a character, check if it represents an odd digit, an even digit or not a digit at all.

Example

For symbol = '5', the output should be characterParity(symbol) = "odd";
For symbol = '8', the output should be characterParity(symbol) = "even";
For symbol = 'q', the output should be characterParity(symbol) = "not a digit".
*/

function characterParity(value) {
  if (!isNaN(parseInt(value))) {
    return value % 2 == 0 ? "even" : "odd";
  }
  return "not a digit";
}

test("character Parity", () => {
  expect(characterParity(5)).toEqual("odd");
  expect(characterParity(8)).toEqual("even");
  expect(characterParity("q")).toEqual("not a digit");
});
