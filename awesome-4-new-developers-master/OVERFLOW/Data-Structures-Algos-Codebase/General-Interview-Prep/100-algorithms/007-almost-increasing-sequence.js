/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be almostIncreasingSequence(sequence) = false;
There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be almostIncreasingSequence(sequence) = true.
You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]. */

function almostIncreasingSequence(values) {
  let count = 0;
  for (let index = 0; index < values.length; index++) {
    if (values[index] <= values[index - 1]) {
      count += 1;
      if (
        values[index] <= values[index - 2] &&
        values[index + 1] <= values[index - 1]
      ) {
        return false;
      }
    }
  }
  return count <= 1;
}

test("almost Increasing Sequence", () => {
  expect(almostIncreasingSequence([])).toEqual(true);
  expect(almostIncreasingSequence([1])).toEqual(true);
  expect(almostIncreasingSequence([1, 2])).toEqual(true);
  expect(almostIncreasingSequence([1, 2, 3])).toEqual(true);
  expect(almostIncreasingSequence([1, 3, 2])).toEqual(true);
  expect(almostIncreasingSequence([10, 1, 2, 3, 4, 5])).toEqual(true);
  expect(almostIncreasingSequence([0, -2, 5, 6])).toEqual(true);
  expect(almostIncreasingSequence([1, 1])).toEqual(true);
  expect(almostIncreasingSequence([1, 2, 3, 4, 3, 6])).toEqual(true);
  expect(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6])).toEqual(true);
  expect(almostIncreasingSequence([1, 2, 2, 3])).toEqual(true);
  expect(almostIncreasingSequence([1, 3, 2, 1])).toEqual(false);
  expect(almostIncreasingSequence([3, 2, 1])).toEqual(false);
  expect(almostIncreasingSequence([1, 1, 1])).toEqual(false);
  expect(almostIncreasingSequence([1, 1, 1, 2, 3])).toEqual(false);
  expect(almostIncreasingSequence([4, 5, 6, 1, 2, 3])).toEqual(false);
});
