/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
  Given an array of integers, find if the array contains any duplicates.

  Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

  Example 1:

  Input: [1,2,3,1]
  Output: true
  Example 2:

  Input: [1,2,3,4]
  Output: false
  Example 3:

  Input: [1,1,1,3,3,4,3,2,4,2]
  Output: true
*/

function containsDuplicates(nums) {
  let numsDict = {};
  for (let index = 0; index < nums.length; index++) {
    if (!numsDict.hasOwnProperty(nums[index])) {
      numsDict[nums[index]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

test("contains Duplicates", () => {
  expect(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  expect(containsDuplicates([1, 2, 3, 4])).toEqual(false);
  expect(containsDuplicates([1, 2, 3, 1])).toEqual(true);
});
