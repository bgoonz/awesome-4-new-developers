// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/
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
 * @return {number[]}
 */

function dfs(root, ans) {
  if (!root) return;

  dfs(root.left, ans);
  dfs(root.right, ans);

  ans.push(root.val);
}

var postorderTraversal = function (root) {
  var ans = [];
  dfs(root, ans);
  return ans;
};
