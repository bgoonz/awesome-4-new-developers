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

const binaryTreeRightSideView = (root) => {
  let result = [];
  const traverse = (root, level) => {
    if (!root) {
      return;
    }
    result[level] = root.val;
    if (root.left) traverse(root.left, level + 1);
    if (root.right) traverse(root.right, level + 1);
  };
  traverse(root, 0);
  return result;
};

test("binaryTreeRightSideView", () => {
  const t1 = new TreeNode(1);
  t1.left = new TreeNode(2);
  t1.right = new TreeNode(3);
  t1.left.right = new TreeNode(5);
  t1.right.right = new TreeNode(4);
  expect(binaryTreeRightSideView(t1)).toEqual([1, 3, 4]);
});
