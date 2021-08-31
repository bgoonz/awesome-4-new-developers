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

const twoSumIvInputIsBst = (root, target) => {
  let found = false;
  let map = {};
  const traverse = (root) => {
    if (!root || found) {
      return;
    }
    const complement = target - root.val;
    if (map[complement]) {
      found = true;
      return;
    } else {
      map[root.val] = root.val;
    }
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);
  return found;
};

test("twoSumIvInputIsBst", () => {
  const t1 = new TreeNode(5);
  t1.right = new TreeNode(6);
  t1.right.right = new TreeNode(7);
  t1.left = new TreeNode(3);
  t1.left.right = new TreeNode(4);
  t1.left.left = new TreeNode(2);
  expect(twoSumIvInputIsBst(t1, 9)).toEqual(true);
});
