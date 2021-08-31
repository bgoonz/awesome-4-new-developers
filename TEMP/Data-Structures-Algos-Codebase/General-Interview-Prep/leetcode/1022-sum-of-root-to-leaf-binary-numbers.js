/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

const { traverse } = require("@babel/core");

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sumOfRootToLeafBinaryNumbers = (root) => {
  let sum = 0;
  const traverse = (root, bin) => {
    if (!root.left && !root.right) {
      sum += parseInt(bin + root.val, 2);
    }
    root.left && traverse(root.left, bin + root.val);
    root.right && traverse(root.right, bin + root.val);
  };
  traverse(root, "");
  return sum;
};

test("sumOfRootToLeafBinaryNumbers", () => {
  const t1 = new TreeNode(1);
  t1.right = new TreeNode(1);
  t1.left = new TreeNode(0);
  t1.left.left = new TreeNode(0);
  t1.left.right = new TreeNode(1);
  t1.right.left = new TreeNode(0);
  t1.right.right = new TreeNode(1);
  expect(sumOfRootToLeafBinaryNumbers(t1)).toEqual(22);
});
