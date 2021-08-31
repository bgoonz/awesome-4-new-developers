// Leetcode 110
// Language: Javascript
// Problem: https://leetcode.com/problems/balanced-binary-tree/
// Author: Bryan Guner
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const maxHeight = (node) => {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(maxHeight(node.left), maxHeight(node.right));
};

const minHeight = (node) => {
  if (node === null) {
    return 0;
  }

  return 1 + Math.min(minHeight(node.left), minHeight(node.right));
};

const height = (node) => {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(height(node.left), height(node.right));
};

const isBalanced = (root) => {
  if (root === null) {
    return true;
  }

  // var maxh = maxHeight(root);
  // var minh = minHeight(root);

  // return Math.abs(maxh - minh) <= 1;

  const lh = height(root.left);
  const rh = height(root.right);

  const diff = Math.abs(lh - rh);

  if (diff <= 1) {
    return isBalanced(root.left) && isBalanced(root.right);
  } else {
    return false;
  }
};
