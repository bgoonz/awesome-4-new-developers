/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

const findAllDuplicatesInAnArray = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      result.push(index + 1);
    }
    nums[index] = -nums[index];
  }
  return result;
};

test("findAllDuplicatesInAnArray", () => {
  expect(findAllDuplicatesInAnArray([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
});
