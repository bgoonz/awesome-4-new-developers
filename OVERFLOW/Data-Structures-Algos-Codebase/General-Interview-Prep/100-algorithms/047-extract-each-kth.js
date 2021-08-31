/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given array of integers, remove each kth element from it.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
*/

function extractEachKth(array, k) {
  return array.filter((value, index) => (index + 1) % k !== 0);
}

test("extract Each Kth", () => {
  expect(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([
    1, 2, 4, 5, 7, 8, 10,
  ]);
});
