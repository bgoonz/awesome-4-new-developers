/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function pairwiseArrayComparisons(array) {
  let maxDelta = Math.abs(array[0] - array[1]);
  for (let index = 0; index < array.length; index++) {
    const delta = Math.abs(array[index] - array[index + 1]);
    if (delta > maxDelta) {
      maxDelta = delta;
    }
  }
  return maxDelta;
}

test("pairwise Array Comparisons", () => {
  expect(pairwiseArrayComparisons([70, 72, 68, 65, 74, 74, 73])).toEqual(9);
});
