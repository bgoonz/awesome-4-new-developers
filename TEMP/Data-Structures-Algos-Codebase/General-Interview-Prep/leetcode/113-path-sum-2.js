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

const pathSum2 = (root, targetSum) => {
  const result = [];
  const traverse = (root, sum, path) => {
    if (!root) {
      return 0;
    }
    if (!root.left && !root.right) {
      if (targetSum === sum + root.val) {
        result.push([...path, root.val]);
        return;
      }
    }
    traverse(root.left, sum + root.val, [...path, root.val]);
    traverse(root.right, sum + root.val, [...path, root.val]);
  };
  traverse(root, 0, []);
  return result;
};

test("pathSum2", () => {
  const t1 = new TreeNode(5);
  t1.left = new TreeNode(4);
  t1.right = new TreeNode(8);
  t1.left.left = new TreeNode(11);
  t1.left.left.left = new TreeNode(7);
  t1.left.left.right = new TreeNode(2);
  t1.right.left = new TreeNode(13);
  t1.right.right = new TreeNode(4);
  t1.right.right.left = new TreeNode(5);
  t1.right.right.right = new TreeNode(1);
  expect(pathSum2(t1, 22)).toEqual([
    [5, 4, 11, 2],
    [5, 8, 4, 5],
  ]);
});
