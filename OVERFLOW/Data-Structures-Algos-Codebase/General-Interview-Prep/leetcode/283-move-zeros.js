/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array nums, write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 *
 * Example:
 *
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Note:
 *
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */

function moveZeros(nums) {
  let start = 0;
  let end = nums.length;
  while (start < end) {
    if (nums[start] === 0) {
      nums.splice(start, 1);
      nums.push(0);
      end--;
    } else {
      start++;
    }
  }
  return nums;
}

test("move Zeros", () => {
  expect(moveZeros([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  expect(moveZeros([1, 0])).toEqual([1, 0]);
  expect(moveZeros([0, 0, 1])).toEqual([1, 0, 0]);
});
