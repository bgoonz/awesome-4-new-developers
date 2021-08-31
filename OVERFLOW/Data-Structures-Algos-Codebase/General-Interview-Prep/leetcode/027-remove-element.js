/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array nums and a value val, remove all instances of that value in-place
 * and return the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * The order of elements can be changed. It doesn't matter what you leave beyond
 * the new length.
 *
 * Example 1:
 *
 * Given nums = [3,2,2,3], val = 3,
 * Your function should return length = 2, with the first two elements of nums being 2.
 * It doesn't matter what you leave beyond the returned length.
 */

function removeElement(nums, val) {
  for (let i = nums.length; i > -1; i--) {
    if (nums[i] === val) {
      let temp = nums[i];
      nums[i] = nums[nums.length - 1];
      nums[nums.length - 1] = temp;
      nums.pop();
    }
  }
  return nums.length;
}

test("remove Element", () => {
  expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
});
