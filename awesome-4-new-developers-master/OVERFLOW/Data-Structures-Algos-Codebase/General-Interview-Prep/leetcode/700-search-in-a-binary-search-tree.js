/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given the root node of a binary search tree (BST) and a value.
 * You need to find the node in the BST that the node's value equals
 * the given value. Return the subtree rooted with that node. If
 * such node doesn't exist, you should return NULL.
 *
 * For example,
 *
 * Given the tree:
 *         4
 *        / \
 *       2   7
 *      / \
 *     1   3
 *
 * And the value to search: 2
 * You should return this subtree:
 *
 *       2
 *      / \
 *     1   3
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function searchInABinarySearchTree(root, val) {
  if (!root) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  if (!root.left || !root.right) {
    return null;
  }

  return (
    searchInABinarySearchTree(root.left, val) ||
    searchInABinarySearchTree(root.right, val)
  );
}

test("search In A Binary Search Tree", () => {
  const t1 = new TreeNode(4);
  t1.left = new TreeNode(2);
  t1.left.left = new TreeNode(1);
  t1.left.right = new TreeNode(3);
  t1.right = new TreeNode(7);

  const t2 = new TreeNode(2);
  t2.left = new TreeNode(1);
  t2.right = new TreeNode(3);
  expect(searchInABinarySearchTree(t1, 2)).toEqual(t2);
});
