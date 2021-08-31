# Module 3 Whiteboarding Exercises

## Problem 1: Breadth First Search on a Graph

given the adjacency list below, how many friends would Joe visit if he were
trying to get to Jesse using Breadth-First Traversal?

NOTE: your function should return the number of friends visited, not including Joe himself

```javascript
const adjacencyList = {
  derek: ["selam", "dean"],
  joe: ["selam"],
  selam: ["derek", "joe", "dean", "evan"],
  dean: ["derek", "evan", "selam"],
  sam: ["jen"],
  evan: ["selam", "jesse", "dean"],
  jen: ["sam", "javier"],
  javier: ["jen"],
  chris: [],
  jesse: ["evan"],
};
```

## Problem 2: Depth First Search on a Graph

Given the adjacency list below, which friends would Joe visit if he were
trying to get to Jesse using Depth-First Traversal?

NOTE: your function should return a list of friends visited, not including Joe himself.

```javascript
const adjacencyList = {
  derek: ["selam", "dean"],
  joe: ["selam"],
  selam: ["derek", "joe", "dean", "evan"],
  dean: ["derek", "evan", "selam"],
  sam: ["jen"],
  evan: ["selam", "jesse", "dean"],
  jen: ["sam", "javier"],
  javier: ["jen"],
  chris: [],
  jesse: ["evan"],
};
```

## Problem 3: Path Sum of Binary Tree

Given the binary tree below and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Use the following test-case: pathSum(5, 22) where 5 is the root node and 22 is the sum.
Note: this function should return a boolean value indicating whether or not the sum is possible to achieve.

```js
//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
```

## Problem 4: Max Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: the depth at the root is 0.

```js
//   3
//  / \
// 9  20
//   /  \
//  15   7
```

## Now go ahead and start the problems that are in AAO
