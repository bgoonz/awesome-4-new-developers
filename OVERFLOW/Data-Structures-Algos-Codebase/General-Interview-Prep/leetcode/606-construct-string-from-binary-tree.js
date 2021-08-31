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

const constructStringFromBinaryTree = (root) => {
  let result = "";
  const traverse = (root) => {
    if (root == null) {
      return "";
    }
    let left = root.right ? "()" : "";
    let right = "";
    if (root.left) left = `(${traverse(root.left)})`;
    if (root.right) right = `(${traverse(root.right)})`;
    return root.val + left + right;
  };
  result = traverse(root);
  return result;
};

test("constructStringFromBinaryTree", () => {
  const t1 = new TreeNode(1);
  t1.right = new TreeNode(3);
  t1.left = new TreeNode(2);
  t1.left.right = new TreeNode(4);
  expect(constructStringFromBinaryTree(t1)).toEqual("1(2()(4))(3)");
});
