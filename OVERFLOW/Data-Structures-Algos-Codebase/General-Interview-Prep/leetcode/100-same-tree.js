/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given two binary trees, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical
 * and the nodes have the same value.
 *
 * Example 1:
 *
 * Input:     1         1
 *           / \       / \
 *          2   3     2   3
 *
 *         [1,2,3],   [1,2,3]
 *
 * Output: true
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function sameTree(p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.val !== q.val) {
    return false;
  }

  return sameTree(p.left, q.left) && sameTree(p.right, q.right);
}

test("same Tree", () => {
  const t1 = new TreeNode(1);
  t1.left = new TreeNode(2);
  t1.right = new TreeNode(3);

  const t2 = new TreeNode(1);
  t2.left = new TreeNode(2);
  t2.right = new TreeNode(3);
  expect(sameTree(t1, t2)).toEqual(true);
});
