/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

EX.)

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.


If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/
//-------------------------------(soln)--------------------------
const testArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSubArray = (nums) => {
  let dp = nums[0];
  let max = dp || 0;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, (dp = Math.max(dp, 0) + nums[i]));
  }
  return max;
};
console.log("maxSubArray(testArr): ", maxSubArray(testArr));
/*
node 53max-sub-arr.js
maxSubArray(testArr):  6

\___________________________________________________
bryan_dir:53-max-subArr_exitstatus:0 ====>
*/
