/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3.
*/

function arrayMaximalAdjacentDifference(values) {
  let maxAbsoluteDifference = Math.abs(values[1] - values[0]);
  for (let index = 0; index < values.length; index++) {
    const absoluteDifference = values[index - 1] - values[index];
    if (absoluteDifference > maxAbsoluteDifference) {
      maxAbsoluteDifference = absoluteDifference;
    }
  }
  return maxAbsoluteDifference;
}

test("array MaximalAdjacent Difference", () => {
  expect(arrayMaximalAdjacentDifference([2, 4, 1, 0])).toEqual(3);
});
