/*
  View the full problem and run the test cases at:
 https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/


Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/
const { TreeNode } = require("./tree_node.js");

function buildTree(preorder, inorder) {
  if (preorder.length == 0 && inorder.length == 0) return null;

  let root = new TreeNode(preorder[0]);
  let rootIdx = inorder.indexOf(preorder[0]);

  let leftInorder = inorder.slice(0, rootIdx);
  let rightInorder = inorder.slice(rootIdx + 1);

  let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
  let rightPreorder = preorder.filter((val) => rightInorder.includes(val));

  console.log(`preorder: ${preorder}`);
  console.log(`inorder: ${inorder}`);
  console.log(`leftInorder: ${leftInorder}`);
  console.log(`rightInorder: ${rightInorder}`);
  console.log(`leftPreorder: ${leftPreorder}`);
  console.log(`rightPreorder: ${rightPreorder}`);
  console.log(`\n--------------\n`);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

buildTree(preorder, inorder);
//===================================== ⬆️ (leet105) ⬆️======================================\

/*
  // View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {

}
*/
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  TreeNode,
};
//===================================== ⬆️ (tree_node.js) ⬆️ ======================================\

/*
  // View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {

}
*/
function inOrderArray(root) {
  if (!root) return [];

  return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)];
}

function postOrderArray(root) {
  if (!root) return [];

  return [
    ...postOrderArray(root.left),
    ...postOrderArray(root.right),
    root.val,
  ];
}

module.exports = {
  inOrderArray,
  postOrderArray,
};
//===================================== ⬆️ (tree_order.js) ⬆️ ======================================\

/*
 ________  ________  ________        ___  _______   ________ _________         _______          ________  ___  ________   ________  ________      ___    ___             ________  _______   ________  ________  ________  ___  ___                _________  ________  _______   _______
|\   __  \|\   __  \|\   __  \      |\  \|\  ___ \ |\   ____\\___   ___\      /  ___  \        |\   __  \|\  \|\   ___  \|\   __  \|\   __  \    |\  \  /  /|           |\   ____\|\  ___ \ |\   __  \|\   __  \|\   ____\|\  \|\  \              |\___   ___\\   __  \|\  ___ \ |\  ___ \
\ \  \|\  \ \  \|\  \ \  \|\  \     \ \  \ \   __/|\ \  \___\|___ \  \_|     /__/|_/  /|       \ \  \|\ /\ \  \ \  \\ \  \ \  \|\  \ \  \|\  \   \ \  \/  / /___________\ \  \___|\ \   __/|\ \  \|\  \ \  \|\  \ \  \___|\ \  \\\  \  ___________\|___ \  \_\ \  \|\  \ \   __/|\ \   __/|
 \ \   ____\ \   _  _\ \  \\\  \  __ \ \  \ \  \_|/_\ \  \       \ \  \      |__|//  / /        \ \   __  \ \  \ \  \\ \  \ \   __  \ \   _  _\   \ \    / /\____________\ \_____  \ \  \_|/_\ \   __  \ \   _  _\ \  \    \ \   __  \|\____________\  \ \  \ \ \   _  _\ \  \_|/_\ \  \_|/__
  \ \  \___|\ \  \\  \\ \  \\\  \|\  \\_\  \ \  \_|\ \ \  \____   \ \  \         /  /_/__        \ \  \|\  \ \  \ \  \\ \  \ \  \ \  \ \  \\  \|   \/  /  /\|____________|\|____|\  \ \  \_|\ \ \  \ \  \ \  \\  \\ \  \____\ \  \ \  \|____________|   \ \  \ \ \  \\  \\ \  \_|\ \ \  \_|\ \
   \ \__\    \ \__\\ _\\ \_______\ \________\ \_______\ \_______\  \ \__\       |\________\       \ \_______\ \__\ \__\\ \__\ \__\ \__\ \__\\ _\ __/  / /                   ____\_\  \ \_______\ \__\ \__\ \__\\ _\\ \_______\ \__\ \__\                 \ \__\ \ \__\\ _\\ \_______\ \_______\
    \|__|     \|__|\|__|\|_______|\|________|\|_______|\|_______|   \|__|        \|_______|        \|_______|\|__|\|__| \|__|\|__|\|__|\|__|\|__|\___/ /                   |\_________\|_______|\|__|\|__|\|__|\|__|\|_______|\|__|\|__|                  \|__|  \|__|\|__|\|_______|\|_______|
                                                                                                                                                \|___|/                    \|_________|


*/
