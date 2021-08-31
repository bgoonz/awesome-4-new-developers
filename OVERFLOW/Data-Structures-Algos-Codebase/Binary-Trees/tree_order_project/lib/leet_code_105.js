// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./tree_node.js");

function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;
  let first = preorder[0];
  let root = new TreeNode(first);
  let rootIdx = inorder.indexOf(first);
  let leftInOrder = inorder.slice(0, rootIdx);
  let rightInOrder = inorder.slice(rootIdx + 1);
  let leftPreOrder = preorder.filter((el) => leftInOrder.include(el));
  let rightPreOrder = preorder.filter((el) => rightInOrder.include(el));
  root.left = buildTree(leftPreOrder, leftInOrder);
  root.right = buildTree(rightPreOrder, rightInOrder);
  return root;
}
