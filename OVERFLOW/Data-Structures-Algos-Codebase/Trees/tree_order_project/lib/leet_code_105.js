// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./tree_node.js");

function buildTree(preorder, inorder) {
  const node = new TreeNode(preorder[0]);
  if (!inorder.length) return null;
  if (inorder.length === 1) return node;

  const arr = split(inorder, node.val);

  node.left = buildTree(preorder.slice(1), arr[0]);
  node.right = buildTree(preorder.slice(1 + arr[0].length), arr[1]);

  return node;
}

function split(arr, val) {
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      left = arr.slice(0, i);
      right = arr.slice(i + 1);
      break;
    }
  }

  return [left, right];
}
