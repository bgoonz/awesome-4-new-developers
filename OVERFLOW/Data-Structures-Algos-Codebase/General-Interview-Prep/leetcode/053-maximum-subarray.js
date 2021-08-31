/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

function maximumSubarray(nums) {
  let sum = nums[0];
  for (let index = 1; index < nums.length; index++) {
    nums[index] = Math.max(nums[index], nums[index] + nums[index - 1]);
    sum = Math.max(sum, nums[index]);
  }
  return sum;
}

test("maximum Subarray", () => {
  expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});
