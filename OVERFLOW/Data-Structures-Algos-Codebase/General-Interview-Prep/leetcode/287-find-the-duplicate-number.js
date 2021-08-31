/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

const findTheDuplicateNumber = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    while (i != nums[i] - 1) {
      if (nums[i] == nums[nums[i] - 1]) {
        return nums[i];
      }
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
      console.log(nums);
    }
  }
  console.log(nums);
  return nums;
};
//console.log(findTheDuplicateNumber([1, 3, 4, 2, 2]))
test("findTheDuplicateNumber", () => {
  expect(findTheDuplicateNumber([1, 3, 4, 2, 2])).toEqual(2);
});
