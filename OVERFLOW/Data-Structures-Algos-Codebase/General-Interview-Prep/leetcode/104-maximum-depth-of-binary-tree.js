/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given binary tree [3,9,20,null,null,15,7],
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * return its depth = 3.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function maximumDepthOfBinaryTree(value, depth = 0) {
  if (!value) return depth;
  return Math.max(
    maximumDepthOfBinaryTree(value.left, depth + 1),
    maximumDepthOfBinaryTree(value.right, depth + 1)
  );
}

test("maximum Depth Of Binary Tree", () => {
  const t1 = new TreeNode(3);
  t1.left = new TreeNode(9);
  t1.right = new TreeNode(20);
  t1.right.left = new TreeNode(15);
  t1.right.right = new TreeNode(7);

  expect(maximumDepthOfBinaryTree(t1)).toEqual(3);
});
