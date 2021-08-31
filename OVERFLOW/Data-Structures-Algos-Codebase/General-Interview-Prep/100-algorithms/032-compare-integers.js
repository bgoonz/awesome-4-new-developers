/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Compare two integers given as strings.

Example

For a = "12" and b = "13", the output should be compareIntegers(a, b) = "less";

For a = "875" and b = "799", the output should be compareIntegers(a, b) = "greater";

For a = "1000" and b = "1000", the output should be compareIntegers(a, b) = "equal". 
*/

function compareIntegers(a, b) {
  return parseInt(a) > parseInt(b)
    ? "greater"
    : parseInt(a) < parseInt(b)
    ? "less"
    : "equal";
}

test("compare Integers", () => {
  expect(compareIntegers("875", "799")).toEqual("greater");
  expect(compareIntegers("12", "13")).toEqual("less");
  expect(compareIntegers("1000", "`1000`")).toEqual("equal");
});
