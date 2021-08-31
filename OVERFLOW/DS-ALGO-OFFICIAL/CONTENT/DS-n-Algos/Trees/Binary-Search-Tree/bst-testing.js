const { TreeNode, BST } = require("./binary-search-tree.js");
const { findMin } = require("./findMin.js");
const { getHeight } = require("./getHeight.js");
let tree = new BST();
tree.insert(10);
console.log(tree.root instanceof TreeNode); //expect true
console.log(tree.root.value === 10); //expect ture
tree.insert(5);
tree.insert(16);
tree.insert(1);
tree.insert(7);
tree.insert(16);
//10;
console.log("tree.root.val: ", tree.root.val);
//5;
console.log("tree.root.left.val: ", tree.root.left.val);
//16;
console.log("tree.root.right.val: ", tree.root.right.val);
//1;
console.log("ree.root.left.left.val: ", tree.root.left.left.val);
//16;
console.log("tree.root.right.right.val: ", tree.root.right.right.val);
//-----------------------------------
let emptyTree = new BST();
//expect false
console.log("emptyTree.searchRecur(10): ", emptyTree.searchRecur(10));
//expect true
console.log(" tree.searchRecur(10): ", tree.searchRecur(10));
//expect true
console.log(" tree.searchRecur(7): ", tree.searchRecur(7));
//expect false
console.log(" tree.searchRecur(10): ", tree.searchRecur(-4));
//expect false
console.log(" tree.searchRecur(7): ", tree.searchRecur(14));
/*
node bst-testing.js
true
false
tree.root.val:  10
tree.root.left.val:  5
tree.root.right.val:  16
ree.root.left.left.val:  1
tree.root.right.right.val:  16
emptyTree.searchRecur(10):  false
 tree.searchRecur(10):  true
 tree.searchRecur(7):  true
 tree.searchRecur(10):  false
 tree.searchRecur(7):  false

\___________________________________________________
bryan_dir:Binary-Search-Tree_exitstatus:0 ====>


*/
