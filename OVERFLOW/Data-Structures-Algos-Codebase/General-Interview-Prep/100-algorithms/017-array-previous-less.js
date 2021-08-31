/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller values. Store this value at position i in the answer. If no such value can be found, store -1 instead.

Example

For items = [3, 5, 2, 4, 5], the output should be arrayPreviousLess(items) = [-1, 3, -1, 2, 4]. 
*/

function arrayPreviousLess(array) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    let newValue = -1;
    for (let j = 0; j < i; j++) {
      if (array[j] < array[i]) {
        newValue = array[j];
      }
    }
    results.push(newValue);
  }
  return results;
}

test("array Previous Less", () => {
  expect(arrayPreviousLess([3, 5, 2, 4, 5])).toEqual([-1, 3, -1, 2, 4]);
  expect(arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3])).toEqual([
    -1, -1, -1, 1, 3, 4, 4, 1,
  ]);
});
