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

const diameterOfBinaryTree = (root) => {
  if (!root) {
    return 0;
  }
  let result = 0;
  const traverse = (root) => {
    if (!root) {
      return 0;
    }
    let left = traverse(root.left);
    let right = traverse(root.right);
    result = Math.max(left + right, result);
    return Math.max(left, right) + 1;
  };
  traverse(root);
  return result;
};

test("diameterOfBinaryTree", () => {
  const t1 = new TreeNode(1);
  t1.right = new TreeNode(3);
  t1.left = new TreeNode(2);
  t1.left.left = new TreeNode(4);
  t1.left.right = new TreeNode(5);
  expect(diameterOfBinaryTree(t1)).toEqual(3);
});
