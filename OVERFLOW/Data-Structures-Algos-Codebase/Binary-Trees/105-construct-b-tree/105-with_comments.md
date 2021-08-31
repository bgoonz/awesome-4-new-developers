```js
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
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
var buildTree = function(preorder, inorder) {
};
*/
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");
let g = new TreeNode("g");
let h = new TreeNode("h");
let i = new TreeNode("i");
let j = new TreeNode("j");
let k = new TreeNode("k");
let l = new TreeNode("l");
let m = new TreeNode("m");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
h.left = i;
h.right = k;
i.right = j;
k.left = l;
l.right = m;
//--------------------------------------\\
console.log(a);
console.log(h);
console.log("a.val: ", a.val);
console.log("b.val: ", b.val);
console.log("a.left: ", a.left);
console.log("a.right: ", a.right);
console.log("h.left: ", h.left);
//--------------------------------------------------------------------------------------\\
console.log(
  "//--------------------------------------------------------------------------------------\\"
);
const preO = [3, 9, 20, 15, 7];
const inO = [9, 3, 15, 20, 7];
function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;
  // the first element in the preorder array is the root
  let root = new TreeNode(preorder[0]);
  let rootIdx = inorder.indexOf(preorder[0]);
  // the left subtree is everything in the inorder array to the left of the root
  let leftInorder = inorder.slice(0, rootIdx);
  // the right subtree is everything in the inorder array to the right of the root
  let rightInorder = inorder.slice(rootIdx + 1);
  // to build the left subtree, the values in the leftPreorder array have to be the same as the ones in the leftInorder array
  let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
  // to build the left subtree, the values in the leftPreorder array have to be the same as the ones in the leftInorder array
  let rightPreorder = preorder.filter((val) => rightInorder.includes(val));
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
}
console.log(
  "//--------------------------------------------------------------------------------------\\"
);
buildTree(preO, inO);
console.log("buildTree( preO, inO ): ", buildTree(preO, inO));
//--------------------------results below--------------------------------------------
/*
node 105-Construct\ Binary\ Tree\ from\ Preorder\ and\ Inorder\ Traversal.js
TreeNode {
  val: 'a',
  left: TreeNode {
    val: 'b',
    left: TreeNode { val: 'd', left: null, right: null },
    right: TreeNode { val: 'e', left: null, right: null }
  },
  right: TreeNode {
    val: 'c',
    left: TreeNode { val: 'f', left: null, right: null },
    right: TreeNode { val: 'g', left: null, right: null }
  }
}
TreeNode {
  val: 'h',
  left: TreeNode {
    val: 'i',
    left: null,
    right: TreeNode { val: 'j', left: null, right: null }
  },
  right: TreeNode {
    val: 'k',
    left: TreeNode { val: 'l', left: null, right: [TreeNode] },
    right: null
  }
}
a.val:  a
b.val:  b
a.left:  TreeNode {
  val: 'b',
  left: TreeNode { val: 'd', left: null, right: null },
  right: TreeNode { val: 'e', left: null, right: null }
}
a.right:  TreeNode {
  val: 'c',
  left: TreeNode { val: 'f', left: null, right: null },
  right: TreeNode { val: 'g', left: null, right: null }
}
h.left:  TreeNode {
  val: 'i',
  left: null,
  right: TreeNode { val: 'j', left: null, right: null }
}
//--------------------------------------------------------------------------------------\
//--------------------------------------------------------------------------------------\
buildTree( preO, inO ):  TreeNode {
  val: 3,
  left: TreeNode { val: 9, left: null, right: null },
  right: TreeNode {
    val: 20,
    left: TreeNode { val: 15, left: null, right: null },
    right: TreeNode { val: 7, left: null, right: null }
  }
}
\___________________________________________________
bryan_dir:105-construct-b-tree_exitstatus:0 ====>
<--------------------------------------------------->
/*************************************
 *     PREORDER = [3,9,20,15,7]      *
 *      INORDER = [9,3,15,20,7]      *
 * RETURN THE FOLLOWING BINARY TREE: *
 *                 3                 *
 *                / \                *
 *               9  20               *
 *                 /  \              *
 *               15    7             *
 *************************************/
```
