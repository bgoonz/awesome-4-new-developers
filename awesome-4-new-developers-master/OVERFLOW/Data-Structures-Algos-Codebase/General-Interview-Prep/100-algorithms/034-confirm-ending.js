/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Example

confirmEnding("Abstraction", "action") returns true;
confirmEnding("Open sesame", "pen") returns false;
*/

function confirmEnding(str, target) {
  return str.substr(str.length - target.length) === target;
}

test("confirm Ending", () => {
  expect(confirmEnding("Abstraction", "action")).toEqual(true);
  expect(confirmEnding("Open sesame", "pen")).toEqual(false);
});
