/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 *
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 *
 * Find the minimum element.
 *
 * You may assume no duplicate exists in the array.
 *
 * Example 1:
 *
 * Input: [3,4,5,1,2]
 * Output: 1
 * Example 2:
 *
 * Input: [4,5,6,7,0,1,2]
 * Output: 0
 */

function findMinimumInRotatedSortedArray(nums) {
  let left = 0;
  let right = nums.length - 1;
  let min = null;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (min == null || nums[mid] < min) {
      min = nums[mid];
    }
    if (nums[left] <= nums[mid]) {
      min = Math.min(nums[left], min);
      left = mid + 1;
    } else {
      min = Math.min(nums[mid + 1], min);
      right = mid - 1;
    }
  }
  return min;
}

test("find Minimum In Rotated Sorted Array", () => {
  expect(findMinimumInRotatedSortedArray([3, 4, 5, 1, 2])).toEqual(1);
  expect(findMinimumInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
});
