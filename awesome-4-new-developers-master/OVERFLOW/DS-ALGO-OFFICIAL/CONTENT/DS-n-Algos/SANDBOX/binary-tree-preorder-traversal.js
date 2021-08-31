// Source : https://leetcode.com/problems/binary-tree-preorder-traversal/
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
  ans.push(root.val);

  dfs(root.left, ans);
  dfs(root.right, ans);
}

var preorderTraversal = function (root) {
  var ans = [];
  dfs(root, ans);
  return ans;
};
