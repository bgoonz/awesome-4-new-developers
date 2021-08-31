/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

const containerWithMostWater = (nums) => {
  let result = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const minLine = Math.min(nums[left], nums[right]);
    const area = minLine * (right - left);
    result = Math.max(result, area);
    if (nums[left] < nums[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return result;
};

test("containerWithMostWater", () => {
  expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
});
