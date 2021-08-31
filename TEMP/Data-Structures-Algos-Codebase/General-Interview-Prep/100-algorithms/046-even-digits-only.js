/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be evenDigitsOnly(n) = true;
For n = 642386, the output should be evenDigitsOnly(n) = false.
*/

function evenDigitsOnly(value) {
  return value
    .toString()
    .split("")
    .every((value) => parseInt(value) % 2 === 0);
}

test("even Digits Only", () => {
  expect(evenDigitsOnly(248622)).toEqual(true);
  expect(evenDigitsOnly(642386)).toEqual(false);
});
