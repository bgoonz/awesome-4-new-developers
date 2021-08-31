/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
 */

function adjacedElementsProduct(values) {
  let max = values[0] * values[1];
  for (let index = 1; index < values.length - 1; index++) {
    const productOfAdjacentElements = values[index] * values[index + 1];
    max = max < productOfAdjacentElements ? productOfAdjacentElements : max;
  }
  return max;
}

test("adjaced Elements Product", () => {
  expect(adjacedElementsProduct([3, 6, -2, -5, 7, 3])).toEqual(21);
});
