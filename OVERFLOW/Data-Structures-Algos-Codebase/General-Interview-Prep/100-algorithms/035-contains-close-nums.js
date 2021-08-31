/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.

Example

For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be containsCloseNums(nums, k) = true.
There are two 2s in nums, and the absolute difference between their positions is exactly 3.

For nums = [0, 1, 2, 3, 5, 2] and k = 2, the output should be
containsCloseNums(nums, k) = false.

The absolute difference between the positions of the two 2s is 3, which is more than k.
*/

function containsCloseNums(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        return Math.abs(i - j) <= k;
      }
    }
  }
  return false;
}

test("contains Close Nums", () => {
  expect(containsCloseNums([0, 1, 2, 3, 5, 2], 3)).toEqual(true);
  expect(containsCloseNums([0, 1, 2, 3, 5, 2], 2)).toEqual(false);
});
