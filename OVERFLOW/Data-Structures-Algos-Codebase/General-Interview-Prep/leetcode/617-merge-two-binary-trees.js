/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given two binary trees and imagine that when you put one of them to cover the other,
 * some nodes of the two trees are overlapped while the others are not.
 *
 * You need to merge them into a new binary tree. The merge rule is that if two nodes
 * overlap, then sum node values up as the new value of the merged node. Otherwise,
 * the NOT null node will be used as the node of new tree.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const mergeTwoBinaryTrees = (t1, t2) => {
  if (!t1) return t2;
  if (!t2) return t1;
  t1.val += t2.val;
  t1.left = mergeTwoBinaryTrees(t1.left, t2.left);
  t1.right = mergeTwoBinaryTrees(t1.right, t2.right);
  return t1;
};

test("mergeTwoBinaryTrees", () => {
  const t1 = new TreeNode(1);
  t1.right = new TreeNode(2);
  t1.left = new TreeNode(3);
  t1.left.left = new TreeNode(5);

  const t2 = new TreeNode(2);
  t2.right = new TreeNode(3);
  t2.right.right = new TreeNode(7);
  t2.left = new TreeNode(1);
  t2.left.right = new TreeNode(4);

  const t3 = new TreeNode(3);
  t3.right = new TreeNode(5);
  t3.right.right = new TreeNode(7);
  t3.left = new TreeNode(4);
  t3.left.left = new TreeNode(5);
  t3.left.right = new TreeNode(4);
  expect(mergeTwoBinaryTrees(t1, t2)).toEqual(t3);
});
