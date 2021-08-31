// //-------------------Binary-Tree-Proj-1-----------------------------------------
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// //-------------------------------tree-order---------------------------
// function preOrderArray(root) {
//     if (!root) return [];
//     return [
//         root.val,
//         ...preOrderArray(root.left),
//         ...preOrderArray(root.right),
//     ];
// }
// function inOrderArray(root) {
//     if (!root) return [];
//     return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)];
// }
// function postOrderArray(root) {
//     if (!root) return [];
//     return [
//         ...postOrderArray(root.left),
//         ...postOrderArray(root.right),
//         root.val,
//     ];
// }
// //------------------------------dfs--------------------------------------
// // Iterative Solution
// function dfs(root) {
//     if (!root) return [];
//     let stack = [root];
//     let vals = [];
//     while (stack.length) {
//         let node = stack.pop();
//         vals.push(node.val);
//         if (node.right) stack.push(node.right);
//         if (node.left) stack.push(node.left);
//     }
//     return vals;
// }
// // Recursive Solution
// const dfsRec = (root) => {
//     if (!root) return [];
//     return [root.val, ...dfsRec(root.left), ...dfsRec(root.right)];
// };
// //-----------------------BFS-----------------------------------------------
// function bfs(root) {
//     if (!root) return [];
//     let queue = [root];
//     let vals = [];
//     while (queue.length) {
//         let node = queue.shift();
//         vals.push(node.val);
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }
//     return vals;
// }
// //---------------Build-Tree-----leetcode---require treeNode--------------------
// function buildTree(preorder, inorder) {
//     if (!preorder.length && !inorder.length) return null;
//     // the first element in the preorder array is the root
//     let root = new TreeNode(preorder[0]);
//     let rootIdx = inorder.indexOf(preorder[0]);
//     // the left subtree is everything in the inorder array to the left of the root
//     let leftInorder = inorder.slice(0, rootIdx);
//     // the right subtree is everything in the inorder array to the right of the root
//     let rightInorder = inorder.slice(rootIdx + 1);
//     // to build the left subtree, the values in the leftPreorder array have to be the same as the ones in the leftInorder array
//     let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
//     // to build the left subtree, the values in the leftPreorder array have to be the same as the ones in the leftInorder array
//     let rightPreorder = preorder.filter((val) => rightInorder.includes(val));
//     root.left = buildTree(leftPreorder, leftInorder);
//     root.right = buildTree(rightPreorder, rightInorder);
//     return root;
// }
//-------------------------------------------------------------------------------------

//----------------------------PROJ 2 BST---------------------------------------------
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BST {
//     constructor() {
//         this.root = null;
//     }
//     insert(val, currentNode = this.root) {
//         if (!this.root) {
//             this.root = new TreeNode(val);
//             return;
//         }
//         if (val < currentNode.val) {
//             if (!currentNode.left) {
//                 currentNode.left = new TreeNode(val);
//             } else {
//                 this.insert(val, currentNode.left);
//             }
//         } else {
//             if (!currentNode.right) {
//                 currentNode.right = new TreeNode(val);
//             } else {
//                 this.insert(val, currentNode.right);
//             }
//         }
//     }
//     searchRecur(val, currentNode = this.root) {
//         if (!currentNode) return false;
//         if (val < currentNode.val) {
//             return this.searchRecur(val, currentNode.left);
//         } else if (val > currentNode.val) {
//             return this.searchRecur(val, currentNode.right);
//         } else {
//             return true;
//         }
//     }
//     searchIter(val) {
//         let currentNode = this.root;
//         while (currentNode) {
//             if (val < currentNode.val) {
//                 currentNode = currentNode.left;
//             } else if (val > currentNode.val) {
//                 currentNode = currentNode.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
// }
// const sam = new TreeNode("Sam");
// console.log("sam:", sam);
// const riv = new TreeNode("River");
// const barry = new TreeNode("Barry");
// const dean = new TreeNode("Dean");
// const tree = new BST();
// tree.root = sam;
// sam.left = riv;
// sam.right = barry;
// riv.left = dean;
// console.log("riv:", riv);
// console.log("tree.banana:--->", tree.banana);
// const tree2 = ["sam", "river", "Barry", "dean"];
// console.log("tree 2--->", tree2);
// tree2.child = "sam";
// console.log("tree 2--->after--->", tree2);
// //----------------------------------proj2 leetcode 108-------------------------------
// /*
//   Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
//
// For this problem, a height-balanced binary tree is defined as a binary tree
//  in which the depth of the two subtrees of every node never differ by more than 1.
//  Example:
//
// Given the sorted array: [-10,-3,0,5,9],
//
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//
//       0
//      / \
//    -3   9
//    /   /
//  -10  5
// */
// const getHeight = (root) => {
//     if (!root) return -1;
//     return 1 + Math.max(getHeight(root.left), getHeight(root.right));
// };
//
// function isBalanced(root) {
//     // check the height of each branch
//     // left and right subtrees height diff <= 1
//     if (!root) return true;
//     let heightDifference =
//         Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
//
//     return heightDifference && isBalanced(root.left) && isBalanced(root.right);
// }
// //---------Or--------------------------------------------------/
// function sortedArrayToBST(nums) {
//     if (!nums.length) return null;
//     let midIdx = Math.floor(nums.length / 2);
//     // we use the middle element of the array as our root
//     let root = new TreeNode(nums[midIdx]);
//     // the root's left subtree is a recursive call on the left side of the array
//     root.left = sortedArrayToBST(nums.slice(0, midIdx));
//     // the root's right subtree is a recursive call on the right side of the array
//     root.right = sortedArrayToBST(nums.slice(midIdx + 1));
//     return root;
// }
// //----------OR---------------------------------------
// let sortedArrayToBST = function (nums) {
//     return generate(nums, 0, nums.length - 1);
// };
// let generate = function (nums, start, end) {
//     if (start > end) {
//         return null;
//     }
//     let midIndex = start + parseInt((end - start) / 2);
//     let midVal = nums[midIndex];
//     let node = new TreeNode(midVal);
//     node.left = generate(nums, start, midIndex - 1);
//     node.right = generate(nums, midIndex + 1, end);
//     return node;
// };
// //------------------------------LeetCode 110-----------------------------------
// function getHeight(root) {
//     if (!root) return -1;
//     return 1 + Math.max(getHeight(root.left), getHeight(root.right));
// }
//
// function isBalanced(root) {
//     if (!root) return true;
//
//     // check to see if the top level of the tree is balanced
//     let heightDifference =
//         Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
//
//     // also check to see if the left and right subtrees are balanced
//     return heightDifference && isBalanced(root.left) && isBalanced(root.right);
// }
//--------------------------------------------------------------------------------------
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BST {
//     constructor() {
//         this.root = null;
//     }
//     insert(val, currentNode = this.root) {
//         if (!this.root) {
//             this.root = new TreeNode(val);
//             return;
//         }
//         if (val < currentNode.val) {
//             if (!currentNode.left) {
//                 currentNode.left = new TreeNode(val);
//             } else {
//                 this.insert(val, currentNode.left);
//             }
//         } else {
//             if (!currentNode.right) {
//                 currentNode.right = new TreeNode(val);
//             } else {
//                 this.insert(val, currentNode.right);
//             }
//         }
//     }
//     searchRecur(val, currentNode = this.root) {
//         if (!currentNode) return false;
//         if (val < currentNode.val) {
//             return this.searchRecur(val, currentNode.left);
//         } else if (val > currentNode.val) {
//             return this.searchRecur(val, currentNode.right);
//         } else {
//             return true;
//         }
//     }
//     searchIter(val) {
//         let currentNode = this.root;
//         while (currentNode) {
//             if (val < currentNode.val) {
//                 currentNode = currentNode.left;
//             } else if (val > currentNode.val) {
//                 currentNode = currentNode.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
// }
//-------------------------------------------
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// let ten = new TreeNode("10");
// let five = new TreeNode("5");
// let sixteen = new TreeNode("16");
// let one = new TreeNode("1");
// let seven = new TreeNode("7");
// let sixteenDuplicate = new TreeNode("16");
// ten.left = five;
// ten.right = sixteen;
// five.left = one;
// five.right = seven;
// sixteen.right = sixteenDuplicate;
// console.log("ten: ", ten);
// console.log("----------ten above^----------");
// console.log("five: ", five);
// console.log("----------five----------");
// console.log("sixteen: ", sixteen);
// console.log("----------sixteen----------");
// console.log(" one: ", one);
// console.log("----------one----------");
// console.log("seven: ", seven);
// console.log("----------seven----------");
// console.log("sixteenDuplicate: ", sixteenDuplicate);
//---------------------------------------------------------------------------------------
// //! Explain and implement a Graph
// // Class based Graph
// class GraphNode {
//     constructor(val) {
//         this.val = val;
//         this.neighbors = [];
//     }
// }
// let a = new GraphNode("a");
// let b = new GraphNode("b");
// let c = new GraphNode("c");
// // a.neighbors = [b];
// // b.neighbors = [c];
// // c.neighbors = [a];
//
// let graph = {
//     a: ["b"],
//     b: ["c"],
//     c: ["a"],
// };
// //When doing breadth first, iterative is simpler and easier.
// //We can use a queue to do this.
// function breadthFirstSearch(graph, startingNode, targetVal) {
//     // Populate our queue with the starting Node
//     let queue = [startingNode];
//     // Create a new empty Set to hold the nodes we've visited
//     let visited = new Set();
//     // Keep going until the queue is empty
//     while (queue.length) {
//         // Dequeue the first thing from the queue
//         let node = queue.shift();
//         // If we've visited this node before, then just continue, which goes
//         // back up to the while loop
//         if (visited.has(node)) continue;
//         // Add the node to the visited set.
//         visited.add(node);
//         // Check to see if the node is the one we are looking for, if it is
//         // return true
//         if (node === targetVal) return true;
//         // Enqueue the node's neighbors from the adjacency graph onto the queue
//         queue.push(...graph[node]);
//     }
//     // If we made it through the loop without finding one, return false
//     return false;
// }
// breadthFirstSearch(graph, "a", "c");
// console.log(
//     'breadthFirstSearch(graph, "a", "c"): ',
//     breadthFirstSearch(graph, "a", "c")
// ); //breadthFirstSearch(graph, "a", "c"):  true

//--------------------------white boarding--------------------------------------------------
// // PROBLEM 1
// function joesFriendsBFS(adjacencyList, startName, endName) {
//     // We're doing BFS so we know we need a QUEUE
//     let queue = [startName];
//     // Track our visited friends.
//     let visited = new Set();
//     // While there are friends left to visit
//     while (queue.length) {
//         // We remove a friend from the queue
//         let name = queue.shift();
//         // Check if we've already visited them. if we have, we move on
//         if (visited.has(name)) continue;
//         // If we haven't, we add them to the visited Set
//         visited.add(name);
//         // Have we reached Jesse yet?
//         if (name === endName) {
//             // if so, we know we're done and we can return the number of friends we've
//             // visited, which is the length of the visited set (minus Joe)
//             return Array.from(visited).length - 1;
//         }
//         // Otherwise let's add all the friends at our current friend, and run this again
//         queue.push(...adjacencyList[name]);
//     }
//     // if our whole loop happened and we didn't get to Jesse, it means he's not a
//     // part of the graph or there's no path between Joe and Jesse
//     return "Jesse's not here :(";
// }
// console.log(
//     " TESTS FOR PROBLEMS 1 AND 2---------------------------------------------------------------------"
// );
// const adjacencyList = {
//     derek: ["selam", "dean"],
//     joe: ["selam"],
//     selam: ["derek", "joe", "dean", "evan"],
//     dean: ["derek", "evan", "selam"],
//     sam: ["jen"],
//     evan: ["selam", "jesse", "dean"],
//     jen: ["sam", "javier"],
//     javier: ["jen"],
//     chris: [],
//     jesse: ["evan"],
// };
//
// console.log(
//     'joesFriendsBFS(adjacencyList, "joe", "jesse"): ',
//     joesFriendsBFS(adjacencyList, "joe", "jesse")
// );
// console.log(joesFriendsDFS(adjacencyList, "joe", "jesse")); // [ 'selam', 'evan', 'dean', 'derek', 'jesse' ]
//
// console.log(
//     " TESTS FOR PROBLEMS 3---------------------------------------------------------------------"
// );
// // PROBLEM 2
// function joesFriendsDFS(adjacencyList, startName, endName) {
//     // we're doing DFS so we know we need a STACK
//     let stack = [startName];
//     // Track visited
//     let visited = new Set();
//     // While there are friends to search through, we're going to contine
//     while (stack.length) {
//         // We remove the current friend we're comparing to Jesse
//         let name = stack.pop();
//         // Check if we've already visited them. if we have, we move on.
//         if (visited.has(name)) continue;
//         // if we haven't, add them to the visited list
//         visited.add(name);
//         // check if we have reached Jesse
//         if (name === endName) {
//             // If we have, we can return the list of friends we visited along the way
//             const friendsList = Array.from(visited);
//             // but we must first remove Joe from the list. we know he's first because
//             // he was the first person popped off the stack.
//             friendsList.shift();
//             return friendsList;
//         }
//         // if we didn't see Jesse, we add the friends to the top of the stack and keep searching
//         stack.push(...adjacencyList[name]);
//     }
//     // if our whole loop happened and we didn't get to Jesse, it means he's not a
//     // part of the graph or there's no path between Joe and Jesse
//     return "Jesse's not here :(";
// }
// // PROBLEM 3 SOLUTION
// const hasPathSum = function (root, sum) {
//     // If there's no root, we know that it's impossible to reach the sum
//     if (!root) return false;
//     // we must keep track of our current value, which is the difference between our final sum and the number we're currently on (e.g 22 - 5)
//     let currSum = sum - root.val;
//     // our base case. if we reach the bottom of the tree, and the difference between
//     // our final value and our current value is zero, we know we've found the sum along this path
//     // so we can return true.
//     if (!root.left && !root.right) {
//         if (currSum == 0) return true;
//     }
//     // Now that we've established our base case and recursive step, we call the recursion
//     let leftSum = hasPathSum(root.left, currSum);
//     let rightSum = hasPathSum(root.right, currSum);
//     // we want these functions to return a number, and we want to check both directions
//     return leftSum || rightSum;
// };
// const pathSum = (root, sum, curSum = root.val) => {
//     if (!root) return false;
//     if (sum === curSum) return true;
//     const leftRecur = pathSum(root.left, sum, curSum + root.val);
//     const rightRecur = pathSum(root.right, sum, curSum + root.val);
//     console.log(leftRecur || rightRecur);
//     return leftRecur || rightRecur;
// };
// // PROBLEM 4
// // DFS Recursive
// function maxDepth(root) {
//     // Our base case. we've reached the bottom of the tree.
//     // Also stops us from running this on an empty tree
//     if (!root) return -1;
//     // we know this function returns a number, so we just add one to that number
//     // to count the 'depth' of our tree.
//     // we do this to the left and right of each tree node because we want to ensure
//     // we are finding the maximum depth
//     const leftHeight = 1 + maxDepth(root.left);
//     const rightHeight = 1 + maxDepth(root.right);
//     // our function returns the larger number: whichever one has the larger depth.
//     return Math.max(leftHeight, rightHeight);
// }
//
// class TreeNode {
//     constructor(val) {
//         (this.val = val), (this.left = null), (this.right = null);
//     }
// }
// const five = new TreeNode(5);
// const four = new TreeNode(4);
// const eight = new TreeNode(8);
// const eleven = new TreeNode(11);
// const thirteen = new TreeNode(13);
// const fourSecond = new TreeNode(4);
// const seven = new TreeNode(7);
// const two = new TreeNode(2);
// const one = new TreeNode(1);
// five.left = four;
// five.right = eight;
// four.left = eleven;
// eleven.left = seven;
// eleven.right = two;
// eight.left = thirteen;
// eight.right = fourSecond;
// fourSecond.right = one;
// console.log(pathSum(five, 22)); // true
//
// console.log(
//     " TESTS FOR PROBLEM 4--------------------------------------------------------------"
// );
// const three = new TreeNode(3);
// const nine = new TreeNode(9);
// const twenty = new TreeNode(20);
// const fifteen = new TreeNode(15);
// const sevenTwo = new TreeNode(7);
// three.left = nine;
// three.right = twenty;
// twenty.left = fifteen;
// twenty.right = sevenTwo;
// console.log(maxDepth(three)); // 2

// //---------------------------BST-implementation------------------------------
// class _Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//         this.parent = null;
//     }
// }
// class BST {
//     constructor() {
//         this.root = null;
//     }
//     insert(value) {
//         if (this.root) {
//             this._insert(this.root, value);
//         } else {
//             this.root = new _Node(value);
//         }
//     }
//     _insert(root, value) {
//         if (value < root.value) {
//             if (root.left) {
//                 this._insert(root.left, value);
//             } else {
//                 root.left = new _Node(value);
//                 root.left.parent = root;
//             }
//         } else {
//             if (root.right) {
//                 this._insert(root.right, value);
//             } else {
//                 root.right = new _Node(value);
//                 root.right.parent = root;
//             }
//         }
//     }
//     bfsPrint() {
//         if (this.root) {
//             return this._bfsPrint();
//         } else {
//             return `your tree is empty fam`;
//         }
//     }
//     _bfsPrint() {
//         const nodes = [this.root]; // [root.left, root,right]
//         const li = new Array();
//         while (nodes.length) {
//             const node = nodes.shift();
//             li.push(node.value);
//             if (node.left) nodes.push(node.left);
//             if (node.right) nodes.push(node.right);
//         }
//         return li;
//     }
//     dfsPreorderPrint() {
//         if (this.root) {
//             return this._dfsPreorderPrint(this.root);
//         } else {
//             return `your tree is empty fam`;
//         }
//     }
// 
//     _dfsPreorderPrint(root, li = new Array()) {
//         li.push(root.value);
//         if (root.left) this._dfsPreorderPrint(root.left, li);
//         if (root.right) this._dfsPreorderPrint(root.right, li);
//         return li;
//     }
//     dfsInorderPrint() {
//         if (this.root) {
//             return this._dfsInorderPrint(this.root);
//         } else {
//             return `your tree is empty fam`;
//         }
//     }
//     _dfsInorderPrint(root, li = new Array()) {
//         if (root.left) this._dfsInorderPrint(root.left, li);
//         li.push(root.value);
//         if (root.right) this._dfsInorderPrint(root.right, li);
//         return li;
//     }
//     dfsPostorderPrint() {
//         if (this.root) {
//             return this._dfsPostorderPrint(this.root);
//         } else {
//             return `your tree is empty fam`;
//         }
//     }
//     _dfsPostorderPrint(root, li = new Array()) {
//         if (root.left) this._dfsPostorderPrint(root.left, li);
//         if (root.right) this._dfsPostorderPrint(root.right, li);
//         li.push(root.value);
//         return li;
//     }
//     find(value) {
//         if (this.root) {
//             return this._find(this.root, value);
//         }
//     }
//     _find(root, value) {
//         if (root.value === value) {
//             return root;
//         } else if (value < root.value && root.left) {
//             return this._find(root.left, value);
//         } else if (value >= root.value && root.right) {
//             return this._find(root.right, value);
//         }
//         return `not here fam`;
//     }
//     getHeight() {
//         // gets the depth of tree
//     }
//     validBST() {
//         // is it balanced?
//     }
//     buildTree() {
//         // performs the balancing
//     }
//     delete(value) {
//         // deletes node
//         // 1. leaf node
//         // 2. you have one child
//         // 3. you have two children
//     }
// }
// const tree = new BST();
// tree.insert(6);
// tree.insert(2);
// tree.insert(7);
// tree.insert(1);
// tree.insert(4);
// tree.insert(3);
// tree.insert(5);
// tree.insert(9);
// tree.insert(8);
// console.log(tree.bfsPrint());
// console.log(tree.dfsPreorderPrint());
// console.log(tree.dfsInorderPrint());
// console.log(tree.dfsPostorderPrint());
// console.log(tree.find(10));
// console.log(tree.find(6));
// console.log(tree.find(8));
/*
  node sept-study-guide.js
[ 6, 2, 7, 1, 4, 9, 3, 5, 8 ]
[ 6, 2, 1, 4, 3, 5, 7, 9, 8 ]
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
[ 1, 3, 5, 4, 2, 8, 9, 7, 6 ]
not here fam
_Node {
  value: 6,
  left:
   _Node {
     value: 2,
     left:
      _Node { value: 1, left: null, right: null, parent: [Circular] },
     right:
      _Node { value: 4, left: [_Node], right: [_Node], parent: [Circular] },
     parent: [Circular] },
  right:
   _Node {
     value: 7,
     left: null,
     right:
      _Node { value: 9, left: [_Node], right: null, parent: [Circular] },
     parent: [Circular] },
  parent: null }
_Node {
  value: 8,
  left: null,
  right: null,
  parent:
   _Node {
     value: 9,
     left: [Circular],
     right: null,
     parent:
      _Node { value: 7, left: null, right: [Circular], parent: [_Node] } } }
*/


// If you are unfamiliar, a Set is a data structure that does not allow for repeated values
// It makes sense to use here because it has constant lookup time with its `has` method
// and our visited nodes should never have repeats.
// We could have accomplished the same thing with a different data structure
// (object, array, etc.), but a Set makes sense with what we are tracking.
function depthFirstRecur(node, visited=new Set()) {
    // if this node has already been visited, then return early
    if (visited.has(node.val)) return;

    // otherwise it hasn't yet been visited,
    // so print it's val and mark it as visited.
    console.log(node.val);
    visited.add(node.val);

    // then explore each of its neighbors
    node.neighbors.forEach(neighbor => {
        depthFirstRecur(neighbor, visited);
    });
}

depthFirstRecur(f);
Using a NODE implementation with ITERATION:
// This is easy to swap to a breadth-first approach by using a queue instead of a stack!
// Instead of popping from the top, we can shift from the front
function depthFirstIter(node) {
    let visited = new Set();
    let stack = [ node ];

    while (stack.length) {
        let node = stack.pop();

        // if this node has already been visited, then skip this node
        if (visited.has(node.val)) continue;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        console.log(node.val);
        visited.add(node.val);

        // then add its neighbors to the stack to be explored
        stack.push(...node.neighbors);
    }
}

depthFirstIter(f);
//Using an ADJACENCY LIST with RECURSION:
//One advantage of an adjacency list is that, since we have a reference to the whole graph,
//we can access nodes that aren't connected to our starting point.
//This may or may not be desired, so we can implement our functions differently to account for this feature.
function depthFirst(graph) {
    let visited = new Set();

    // This loop allows us to access every node/vertex, even if it wasn't connected
    // to where we started.
    // If we only wanted to reach points from a starting location, we could take in
    // that value as an argument and use it as the node directly with our helper
    // function, no need to loop.
    for (let node in graph) {
        _depthFirstRecur(node, graph, visited);
    }
}

function _depthFirstRecur(node, graph, visited) {
    if (visited.has(node)) return;

    console.log(node);
    visited.add(node);

    graph[node].forEach(neighbor => {
        _depthFirstRecur(neighbor, graph, visited);
    });
}

depthFirst(graph);
Using an ADJACENCY LIST with ITERATION:
// With starting node, not exploring all nodes, only the connected ones
function depthFirstIter(graph, startNode) {
  // Just like our node implementation, if we want to operate breadth-first, we
  // can utilize a queue instead of a stack, shifting instead of popping
  let stack = [startNode];
  let visited = new Set();

  while (stack.length > 0) {
    let node = stack.pop();
    if (visited.has(node)) continue;
    console.log(node)
    visited.add(node);
    stack.push(...graph[node]);
  }
}
