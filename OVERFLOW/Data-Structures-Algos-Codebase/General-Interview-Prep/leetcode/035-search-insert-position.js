/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 *
 * You may assume no duplicates in the array.
 *
 * Example 1:
 *
 * Input: [1,3,5,6], 5
 * Output: 2
 * Example 2:
 *
 * Input: [1,3,5,6], 2
 * Output: 1
 * Example 3:
 *
 * Input: [1,3,5,6], 7
 * Output: 4
 * Example 4:
 *
 * Input: [1,3,5,6], 0
 * Output: 0
 */

function searchInsertPosition(nums, target) {
  const index = nums.indexOf(target);
  if (index !== -1) {
    return index;
  }
  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > target) {
      return index;
    }
  }
}

test("search Insert Position", () => {
  expect(searchInsertPosition([1, 3, 5, 6], 5)).toEqual(2);
  expect(searchInsertPosition([1, 3, 5, 6], 2)).toEqual(1);
  expect(searchInsertPosition([1, 3, 5, 6], 7)).toEqual(4);
  expect(searchInsertPosition([1, 3, 5, 6], 0)).toEqual(0);
});
