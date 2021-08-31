/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be avoidObstacles(inputArray) = 4.

Check out the image below for better understanding:

---------------------------------------------------------
0   1   2   3   4   5   6   7   8   9   10
*/

function avoidObstacles(array) {
  array = array.sort((a, b) => a - b);
  const highestValue = array[array.length - 1];

  for (let index = 1; index <= highestValue + 1; index++) {
    if (array.every((element) => element % index !== 0)) {
      return index;
    }
  }
}

test("avoid Obstacles", () => {
  expect(avoidObstacles([5, 3, 6, 7, 9])).toEqual(4);
});
