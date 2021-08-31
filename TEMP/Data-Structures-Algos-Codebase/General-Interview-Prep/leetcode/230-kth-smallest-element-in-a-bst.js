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

const kthSmallestElementInABst = (root, k) => {
  let result = 0;
  let count = 0;
  const traverse = (root, k) => {
    if (!root) {
      return;
    }
    traverse(root.left, k);
    count++;
    if (count == k) {
      result = root.val;
    }
    traverse(root.right, k);
  };
  traverse(root, k);
  return result;
};

test("kthSmallestElementInABst", () => {
  const t1 = new TreeNode(3);
  t1.left = new TreeNode(1);
  t1.right = new TreeNode(4);
  t1.left.right = new TreeNode(2);
  expect(kthSmallestElementInABst(t1, 1)).toEqual(1);
});
