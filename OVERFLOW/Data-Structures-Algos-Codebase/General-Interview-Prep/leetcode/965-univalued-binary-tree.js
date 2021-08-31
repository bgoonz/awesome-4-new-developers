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

const univaluedBinaryTree = (root) => {
  let flag = true;
  const traverse = (root, value) => {
    if (root == null) {
      return;
    }
    if (value !== root.val) {
      flag = false;
      return;
    }
    root.left && traverse(root.left, value);
    root.right && traverse(root.right, value);
  };
  traverse(root, root.val);
  return flag;
};

test("univaluedBinaryTree", () => {
  const t1 = new TreeNode(1);
  t1.right = new TreeNode(1);
  t1.left = new TreeNode(1);
  t1.left.left = new TreeNode(5);
  t1.left.right = new TreeNode(1);
  // t1.right.right = new TreeNode(1)
  expect(univaluedBinaryTree(t1)).toEqual(false);
});
