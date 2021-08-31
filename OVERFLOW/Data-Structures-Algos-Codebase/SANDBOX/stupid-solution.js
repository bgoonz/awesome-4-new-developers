// Source : https://leetcode.com/problems/symmetric-tree/
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  var left = [];

  var right = [];

  dfs(root.left, 1, left);
  dfs(root.right, 1, right);

  if (left.length !== right.length) return false;

  for (var i = 1, len = left.length; i < len; i++) {
    var a = left[i];
    var b = right[i];
    b.reverse();

    if (a.length !== b.length) return false;

    if (a.join("|") !== b.join("|")) return false;
  }

  return true;
};

function dfs(node, step, arr) {
  if (!arr[step]) arr[step] = [];

  if (!node) {
    arr[step].push(null);
    return;
  }

  arr[step].push(node.val);

  dfs(node.left, step + 1, arr);
  dfs(node.right, step + 1, arr);
}
