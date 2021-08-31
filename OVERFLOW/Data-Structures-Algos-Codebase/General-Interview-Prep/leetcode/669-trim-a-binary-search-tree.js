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

const trimABinarySearchTree = (root, low, high) => {
  if (root == null) {
    return null;
  }
  if (root.val < low) {
    return trimABinarySearchTree(root.right, low, high);
  }
  if (root.val > high) {
    return trimABinarySearchTree(root.left, low, high);
  }
  root.left = trimABinarySearchTree(root.left, low, high);
  root.right = trimABinarySearchTree(root.right, low, high);
  return root;
};

test("trimABinarySearchTree", () => {
  const t1 = new TreeNode(3);
  t1.right = new TreeNode(4);
  t1.left = new TreeNode(0);
  t1.left.right = new TreeNode(2);
  t1.left.right.left = new TreeNode(1);

  const t2 = new TreeNode(3);
  t2.left = new TreeNode(2);
  t2.left.left = new TreeNode(1);
  expect(trimABinarySearchTree(t1, 1, 3)).toEqual(t2);
});
