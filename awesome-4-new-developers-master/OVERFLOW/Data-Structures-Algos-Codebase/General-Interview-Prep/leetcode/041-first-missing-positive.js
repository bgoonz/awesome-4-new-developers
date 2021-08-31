/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

const firstMissingPositive = (nums) => {
  nums = nums.sort((a, b) => a - b);
  if (nums.length == 0 || nums[nums.length - 1] < 0) {
    return 1;
  }
  for (let i = 1; i < nums[nums.length - 1]; i++) {
    if (nums.indexOf(i) == -1) {
      return i;
    }
  }
  return nums[nums.length - 1] + 1;
};

test("firstMissingPositive", () => {
  expect(firstMissingPositive([1, 2, 0])).toEqual(3);
});
