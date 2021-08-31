// Leetcode #112
// Language: Javascript
// Problem: https://leetcode.com/problems/path-sum/
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = (root, sum) => {
  if (root === null) {
    return false;
  }

  if (root.val === sum && root.left === null && root.right === null) {
    return true;
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = (root, sum) => {
  if (root === null) {
    return false;
  }

  const left = root.left;
  const right = root.right;

  if (left === null && right === null) {
    return root.val === sum;
  }

  return hasPathSum(left, sum - root.val) || hasPathSum(right, sum - root.val);
};
