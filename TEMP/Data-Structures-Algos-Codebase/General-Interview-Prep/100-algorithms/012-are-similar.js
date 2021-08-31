/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be areSimilar(a, b) = true.
The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be areSimilar(a, b) = true.
We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be areSimilar(a, b) = false.
Any swap of any two elements either in a or in b won't make a and b equal.
 */

function areSimilar(arr1, arr2) {
  let arr1NotEqualNumbers = [];
  let arr2NotEqualNumbers = [];
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.toString() === arr2.toString()) {
    return true;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      arr1NotEqualNumbers.push(arr1[index]);
      arr2NotEqualNumbers.push(arr2[index]);
    }
  }
  arr2NotEqualNumbers = arr2NotEqualNumbers.reverse();

  if (
    arr1NotEqualNumbers.length === 2 &&
    arr1NotEqualNumbers.toString === arr2NotEqualNumbers.toString
  ) {
    return true;
  }
  return false;
}

test("are Similar", () => {
  expect(areSimilar([1, 2, 3], [1, 2, 3])).toEqual(true);
  expect(areSimilar([1, 2, 3], [2, 1, 3])).toEqual(true);
  expect(areSimilar([1, 2, 2], [2, 1, 1])).toEqual(false);
});
