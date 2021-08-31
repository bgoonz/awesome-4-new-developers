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

const pathSum = (root, sum) => {
  let result = false;
  const traverse = (root, sum) => {
    if (root == null) {
      return false;
    }
    if (!root.left && !root.right) {
      console.log("End of tree -> ", sum, root.val);
      return sum == root.val;
    }
    const left = traverse(root.left, sum - root.val);
    const right = traverse(root.right, sum - root.val);
    return left || right;
  };
  result = traverse(root, sum);
  return result;
};

test("pathSum", () => {
  const t1 = new TreeNode(5);
  t1.left = new TreeNode(4);
  t1.right = new TreeNode(8);
  t1.left.left = new TreeNode(11);
  t1.left.left.left = new TreeNode(7);
  t1.left.left.right = new TreeNode(2);
  t1.right.left = new TreeNode(13);
  t1.right.right = new TreeNode(4);
  t1.right.right.right = new TreeNode(1);
  expect(pathSum(t1, 22)).toEqual(true);
});
