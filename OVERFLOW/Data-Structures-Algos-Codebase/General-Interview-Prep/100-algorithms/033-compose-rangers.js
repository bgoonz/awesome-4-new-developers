/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.

Example

For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be composeRanges(nums) = ["-1->2", "6->7", "9"].
*/

function composeRangers(array) {
  if (array.length < 1) {
    return [];
  }
  let result = [{ start: array[0], end: array[0] }];
  for (let index = 1; index < array.length; index++) {
    if (result[result.length - 1].end + 1 == array[index]) {
      result[result.length - 1].end = array[index];
    } else {
      result.push({ start: array[index], end: array[index] });
    }
  }
  result = result.map(({ start, end }) => {
    if (start !== end) {
      return `${start}->${end}`;
    } else {
      return `${start}`;
    }
  });
  return result;
}

test("compose Rangers", () => {
  expect(composeRangers([-1, 0, 1, 2, 6, 7, 9])).toEqual([
    "-1->2",
    "6->7",
    "9",
  ]);
});
