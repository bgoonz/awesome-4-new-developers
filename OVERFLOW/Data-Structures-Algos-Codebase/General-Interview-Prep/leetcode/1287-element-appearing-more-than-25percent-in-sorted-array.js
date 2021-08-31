/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an integer array sorted in non-decreasing order, there is exactly
 * one integer in the array that occurs more than 25% of the time.
 *
 * Return that integer.
 *
 * Example 1:
 *
 * Input: arr = [1,2,2,6,6,6,6,7,10]
 * Output: 6
 */

function elementAppearingMoreThanInSortedArray(nums) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === nums[Math.floor(nums.length * 0.25) + index]) {
      return nums[index];
    }
  }
  return -1;
}

test("element Appearing More Than 25% In Sorted Array", () => {
  expect(
    elementAppearingMoreThanInSortedArray([1, 2, 2, 6, 6, 6, 6, 7, 10])
  ).toEqual(6);
});
