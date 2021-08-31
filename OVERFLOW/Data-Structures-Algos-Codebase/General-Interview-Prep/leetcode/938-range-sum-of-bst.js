/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/**
 *
 * Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
 * Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 * Output: 32
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const rangeSumOfBst = (root, low, high) => {
  let sum = 0;
  const innerRangeSumOfBst = (root, low, high) => {
    if (root == null) {
      return 0;
    }
    if (root.val >= low) {
      innerRangeSumOfBst(root.left, low, high);
    }
    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }
    if (root.val <= high) {
      innerRangeSumOfBst(root.right, low, high);
    }
  };
  innerRangeSumOfBst(root, low, high);
  return sum;
};

test("rangeSumOfBst", () => {
  const t1 = new TreeNode(10);
  t1.right = new TreeNode(15);
  t1.right.right = new TreeNode(18);
  t1.left = new TreeNode(5);
  t1.left.left = new TreeNode(3);
  t1.left.right = new TreeNode(7);
  expect(rangeSumOfBst(t1, 7, 15)).toEqual(32);
});
