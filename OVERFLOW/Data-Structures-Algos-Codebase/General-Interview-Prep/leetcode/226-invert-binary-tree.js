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

const invertBinaryTree = (root) => {
  if (root == null) {
    return null;
  }
  let traverse = (root) => {
    if (!root.left && !root.right) {
      return;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    root.left && traverse(root.left);
    root.right && traverse(root.right);
  };
  traverse(root);
  return root;
};

test("invertBinaryTree", () => {
  const t1 = new TreeNode(4);
  t1.right = new TreeNode(7);
  t1.left = new TreeNode(2);
  t1.left.left = new TreeNode(1);
  t1.left.right = new TreeNode(3);
  t1.right.left = new TreeNode(6);
  t1.right.right = new TreeNode(9);

  const t2 = new TreeNode(4);
  t2.right = new TreeNode(2);
  t2.left = new TreeNode(7);
  t2.left.left = new TreeNode(9);
  t2.left.right = new TreeNode(6);
  t2.right.left = new TreeNode(3);
  t2.right.right = new TreeNode(1);

  expect(invertBinaryTree(t1)).toEqual(t2);
});
