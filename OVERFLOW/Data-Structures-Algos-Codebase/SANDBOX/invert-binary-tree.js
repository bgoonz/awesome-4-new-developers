// Source : https://leetcode.com/problems/invert-binary-tree/
// Author : Bryan Guner

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  var left = root.left;

  var right = root.right;

  left && invertTree(left);

  right && invertTree(right);

  root.left = right;
  root.right = left;

  return root;
};
