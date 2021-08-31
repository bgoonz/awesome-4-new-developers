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

const binaryTreeMaximumPathSum = (root) => {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return root.val;
  }
  let maxSum = -Infinity;
  const traverse = (root) => {
    if (!root.left && !root.right) {
      maxSum = Math.max(root.val, maxSum);
      return root.val;
    }
    let left = 0;
    let right = 0;
    if (root.left) {
      left = Math.max(traverse(root.left), 0);
    }
    if (root.right) {
      right = Math.max(traverse(root.right), 0);
    }
    maxSum = Math.max(left + right + root.val, maxSum);
    return Math.max(left + root.val, right + root.val, 0);
  };
  traverse(root);
  return maxSum;
};

test("binaryTreeMaximumPathSum", () => {
  const t1 = new TreeNode(-2);
  t1.left = new TreeNode(-1);
  expect(binaryTreeMaximumPathSum(t1)).toEqual(-1);
});
