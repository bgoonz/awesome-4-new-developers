/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const runningSumOf1DArray = (nums) => {
  let result = [];
  const helper = (nums, index, sum) => {
    if (nums.length == index) {
      return;
    }
    result[index] = sum + nums[index];
    helper(nums, index + 1, sum + nums[index]);
  };
  helper(nums, 0, 0);
  return result;
};

test("runningSumOf1DArray", () => {
  expect(runningSumOf1DArray([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
});
