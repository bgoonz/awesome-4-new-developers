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

const threeSumClosest = (nums, target) => {
  let closest = -Infinity;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      closest =
        Math.abs(target - closest) > Math.abs(target - sum) ? sum : closest;
      if (sum > target) {
        k -= 1;
      } else if (sum < target) {
        j += 1;
      } else {
        return sum;
      }
    }
  }
  return closest;
};

test("threeSumClosest", () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toEqual(2);
});
