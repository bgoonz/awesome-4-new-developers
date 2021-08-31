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

const pathSum3 = (root, sum) => {
  let count = 0;
  let list = [];
  const traverse = (root) => {
    if (!root) {
      return;
    }
    list.push(root.val);
    traverse(root.left);
    traverse(root.right);
    let total = 0;
    for (let i = list.length - 1; i >= 0; i--) {
      total += list[i];
      if (sum === total) {
        count += 1;
      }
    }
    list.pop();
  };
  traverse(root);
  return count;
};

test("pathSum3", () => {
  const t1 = new TreeNode(5);
  t1.right = new TreeNode(-3);
  t1.right.right = new TreeNode(11);
  t1.left = new TreeNode(5);
  t1.left.right = new TreeNode(2);
  t1.left.right.right = new TreeNode(1);
  t1.left.left = new TreeNode(3);
  t1.left.left.left = new TreeNode(3);
  t1.left.left.right = new TreeNode(-2);
  expect(pathSum3(t1, 8)).toEqual(3);
});
