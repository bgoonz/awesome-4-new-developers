/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array a that contains only numbers in the range from 1 to a.length, find the first
 * duplicate number for which the second occurrence has the minimal index. In other words,
 * if there are more than 1 duplicated numbers, return the number for which the second occurrence
 * has a smaller index than the second occurrence of the other number does. If there are no such
 * elements, return -1.
 *
 * Example
 *
 * For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3
 */

function firstDuplicate(nums) {
  if (nums.length < 2) return -1;
  let lookupDict = {};
  for (let index = 0; index < nums.length; index++) {
    if (lookupDict[nums[index]]) {
      return nums[index];
    } else {
      lookupDict[nums[index]] = 1;
    }
  }
  return -1;
}

test("first Duplicate", () => {
  expect(firstDuplicate([2, 1, 3, 5, 3, 2])).toEqual(3);
});
