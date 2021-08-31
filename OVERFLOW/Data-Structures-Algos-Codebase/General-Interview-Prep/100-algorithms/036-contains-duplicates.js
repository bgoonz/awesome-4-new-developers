/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

Example

For a = [1, 2, 3, 1], the output should be containsDuplicates(a) = true.
There are two 1s in the given array.

For a = [3, 1], the output should be containsDuplicates(a) = false.
The given array contains no duplicates.
*/

function containsDuplicates(array) {
  let dict = {};
  for (let index = 0; index < array.length; index++) {
    if (dict[array[index]]) {
      dict[array[index]] += 1;
    } else {
      dict[array[index]] = 1;
    }
  }
  return Object.values(dict).filter((n) => n !== 1).length === 0;
}

test("contains Duplicates", () => {
  expect(containsDuplicates([1, 2, 3, 1])).toEqual(true);
  expect(containsDuplicates([3, 1])).toEqual(false);
});
