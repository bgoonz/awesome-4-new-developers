/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be differentSymbolsNaive(s) = 3.

There are 3 different characters a, b and c.
*/

function differentSymbolsNaive(array) {
  array = array.split("");
  let unqiueChars = [...new Set(array)];
  return unqiueChars.length;
}

test("different Symbols Naive", () => {
  expect(differentSymbolsNaive("cabca")).toEqual(3);
});
