/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array of integers A sorted in non-decreasing order,
 * return an array of the squares of each number, also in sorted
 * non-decreasing order.
 *
 * Example 1:
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 */

function squaresOfASortedArray(nums) {
  let length = nums.length,
    left = 0,
    right = length - 1,
    index = length - 1,
    result = new Array(nums.length).fill(0);
  while (left <= right) {
    const leftElement = nums[left] * nums[left];
    const rightElement = nums[right] * nums[right];
    if (leftElement > rightElement) {
      result[index] = leftElement;
      left++;
    } else {
      result[index] = rightElement;
      right--;
    }
    index--;
  }
  return result;
}

test("squares Of A Sorted Array", () => {
  expect(squaresOfASortedArray([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
});
