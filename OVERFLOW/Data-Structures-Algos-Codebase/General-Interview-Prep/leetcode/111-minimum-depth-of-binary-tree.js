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

function minimumDepthOfBinaryTree(value, minDepth = 1) {
  if (!value) return 0;
  if (!value.left && !value.right) return minDepth;
  if (value.left && value.right)
    return Math.min(
      minimumDepthOfBinaryTree(value.left, minDepth + 1),
      minimumDepthOfBinaryTree(value.right, minDepth + 1)
    );
  if (!value.left) return minimumDepthOfBinaryTree(value.right, minDepth + 1);
  if (!value.right) return minimumDepthOfBinaryTree(value.left, minDepth + 1);
}

test("minimum Depth Of Binary Tree", () => {
  const t1 = new TreeNode(3);
  t1.left = new TreeNode(9);
  t1.right = new TreeNode(20);
  t1.right.left = new TreeNode(15);
  t1.right.right = new TreeNode(7);

  const t2 = new TreeNode(1);
  t2.left = new TreeNode(2);

  expect(minimumDepthOfBinaryTree(t1)).toEqual(2);
  expect(minimumDepthOfBinaryTree(t2)).toEqual(2);
});
