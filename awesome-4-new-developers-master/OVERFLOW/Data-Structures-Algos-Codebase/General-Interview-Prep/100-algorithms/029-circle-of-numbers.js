/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

Example

For n = 10 and firstNumber = 2, the output should be circleOfNumbers(n, firstNumber) = 7.
 */

function circleOfNumbers(n, firstNumber) {
  let circle = [];
  let halfOfN = n / 2;
  for (let index = 0; index < n; index++) {
    circle.push(index);
  }
  if (firstNumber < halfOfN) {
    return firstNumber + circle[halfOfN];
  }
  return circle[firstNumber - halfOfN];
}

test("circle Of Numbers", () => {
  expect(circleOfNumbers(10, 2)).toEqual(7);
});
