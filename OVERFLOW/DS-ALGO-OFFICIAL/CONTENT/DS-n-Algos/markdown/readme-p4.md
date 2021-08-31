[Readme](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/README.md)

[readme part 2](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/readme-p2.md)

[readme part 3](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/readme-p3.md)

[readme part 4](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/readme-p4.md)

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Path Sum II": https://leetcode.com/problems/path-sum-ii
"Binary Tree Maximum Path Sum": https://leetcode.com/problems/binary-tree-maximum-path-sum
"Sum Root to Leaf Numbers": https://leetcode.com/problems/sum-root-to-leaf-numbers
"Path Sum III": https://leetcode.com/problems/path-sum-iii
"Path Sum IV": https://leetcode.com/problems/path-sum-iv

---

## [112. Path Sum](https://leetcode.com/problems/path-sum/description/)

### Problem:

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```

return true, as there exist a root-to-leaf path `5->4->11->2` which sum is 22.

### Solution:

Note that node value could be negative so pruning can not be performed.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
let hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }
  if (root.left === null && root.right === null) {
    return root.val === sum;
  }
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Path Sum": https://leetcode.com/problems/path-sum
"Binary Tree Paths": https://leetcode.com/problems/binary-tree-paths
"Path Sum III": https://leetcode.com/problems/path-sum-iii
"Path Sum IV": https://leetcode.com/problems/path-sum-iv

---

## [113. Path Sum II](https://leetcode.com/problems/path-sum-ii/description/)

### Problem:

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
```

Return:

```
[
   [5,4,11,2],
   [5,8,4,5]
]
```

### Solution:

Simple backtracking.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
let pathSum = function (root, sum, path = [], result = []) {
  if (!root) {
    return result;
  }

  if (root.left === null && root.right === null) {
    if (root.val === sum) {
      result.push([...path, root.val]);
    }
    return result;
  }

  path.push(root.val);
  pathSum(root.left, sum - root.val, path, result);
  pathSum(root.right, sum - root.val, path, result);
  path.pop();

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Flatten a Multilevel Doubly Linked List": https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list

---

## [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/)

### Problem:

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

```
    1
   / \
  2   5
 / \   \
3   4   6
```

The flattened tree should look like:

```
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```

### Solution:

Return the leaf node of a flattened subtree for concatenation.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
let flatten = function (root) {
  _flatten(root);
};

/**
 * @param {TreeNode} root
 * @return {TreeNode} leaf node of a flattened subtree
 */
function _flatten(root) {
  if (!root) {
    return null;
  }
  const leftLeaf = _flatten(root.left);
  const rightLeaf = _flatten(root.right);
  if (leftLeaf !== null) {
    leftLeaf.right = root.right;
    root.right = root.left;
  } else if (rightLeaf === null) {
    return root;
  }

  root.left = null;
  return rightLeaf || leftLeaf;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"String": https://leetcode.com/tag/string
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming

---

## [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/description/)

### Problem:

Given a string **S** and a string **T**, count the number of distinct subsequences of **S** which equals **T**.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `"ACE"` is a subsequence of `"ABCDE"` while `"AEC"` is not).

**Example 1:**

```
Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:

As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
```

**Example 2:**

```
Input: S = "babgbag", T = "bag"
Output: 5
Explanation:

As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
```

### Solution:

Define `f(i, j)` to be the number of ways that generate `T[0...j)` from `S[0...i)`.

For `f(i, j)` you can always skip `S[i-1]`, but can only take it when `S[i-1] === T[j-1]`.

```javascript
f(0, j) = 0, j > 0 // nothing to delete
f(i, 0) = 1 // delete all
f(i, j) = f(i-1, j) + (S[i-1] === T[j-1] ? f(i-1, j-1) : 0)
```

Dynamic array can be used.

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
let numDistinct = function (s, t) {
  const lens = s.length;
  const lent = t.length;
  const dp = new Array(lent + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= lens; i++) {
    for (let j = lent; j >= 1; j--) {
      if (s[i - 1] === t[j - 1]) {
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp[lent];
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Populating Next Right Pointers in Each Node II": https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii
"Binary Tree Right Side View": https://leetcode.com/problems/binary-tree-right-side-view

---

## [116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/)

### Problem:

Given a binary tree

```
struct TreeLinkNode {
  TreeLinkNode *left;
  TreeLinkNode *right;
  TreeLinkNode *next;
}

```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

**Note:**

- You may only use constant extra space.
- Recursive approach is fine, implicit stack space does not count as extra space for this problem.
- You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).

**Example:**

Given the following perfect binary tree,

```
     1
   /  \
  2    3
 / \  / \
4  5  6  7

```

After calling your function, the tree should look like:

```
     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \  / \
4->5->6->7 -> NULL

```

### Solution:

#### ONE

Recursive.

For every `node`:

- Left child: points to `node.right`.
- Right child: points to `node.next.left` if `node.next` exists.

```javascript
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
let connect = function (root) {
  if (!root) {
    return;
  }
  if (root.left !== null) {
    root.left.next = root.right;
    connect(root.left);
  }
  if (root.right !== null) {
    if (root.next !== null) {
      root.right.next = root.next.left;
    }
    connect(root.right);
  }
};
```

#### TWO

Level order traversal.

```javascript
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
let connect = function (root) {
  if (!root) {
    return;
  }

  const queue = [NaN, root];
  while (queue.length > 1) {
    const node = queue.shift();
    if (node !== node) {
      for (let i = 0; i < queue.length; i++) {
        queue[i].next = queue[i + 1] || null;
      }
      queue.push(NaN);
    } else {
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Populating Next Right Pointers in Each Node": https://leetcode.com/problems/populating-next-right-pointers-in-each-node

---

## [117. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/)

### Problem:

Given a binary tree

```
struct TreeLinkNode {
  TreeLinkNode *left;
  TreeLinkNode *right;
  TreeLinkNode *next;
}

```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

**Note:**

- You may only use constant extra space.
- Recursive approach is fine, implicit stack space does not count as extra space for this problem.

**Example:**

Given the following binary tree,

```
     1
   /  \
  2    3
 / \    \
4   5    7

```

After calling your function, the tree should look like:

```
     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \    \
4-> 5 -> 7 -> NULL

```

### Solution:

#### ONE

Recursive. See [116. Populating Next Right Pointers in Each Node](./116.%20Populating%20Next%20Right%20Pointers%20in%20Each%20Node.md).

The tree may not be perfect now. So keep finding `next` until there is a node with children, or `null`.

This also means post-order traversal is required.

```javascript
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
let connect = function (root) {
  if (!root) {
    return;
  }
  let next = null;
  for (let node = root.next; node !== null; node = node.next) {
    if (node.left !== null) {
      next = node.left;
      break;
    }
    if (node.right !== null) {
      next = node.right;
      break;
    }
  }
  if (root.right !== null) {
    root.right.next = next;
  }
  if (root.left !== null) {
    root.left.next = root.right || next;
  }
  connect(root.right);
  connect(root.left);
};
```

#### TWO

Level order traversal. Exact same as [116. Populating Next Right Pointers in Each Node](./116.%20Populating%20Next%20Right%20Pointers%20in%20Each%20Node.md).

```javascript
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
let connect = function (root) {
  if (!root) {
    return;
  }

  const queue = [NaN, root];
  while (queue.length > 1) {
    const node = queue.shift();
    if (node !== node) {
      for (let i = 0; i < queue.length; i++) {
        queue[i].next = queue[i + 1] || null;
      }
      queue.push(NaN);
    } else {
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
Similar Questions:
"Pascal's Triangle II": https://leetcode.com/problems/pascals-triangle-ii

---

## [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/)

### Problem:

Given a non-negative integer *numRows*, generate the first _numRows_ of Pascal's triangle.

![PascalTriangleAnimated2.gif](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

In Pascal's triangle, each number is the sum of the two numbers directly above it.

**Example:**

```
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

```

### Solution:

Dynamic Programming 101.

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function (numRows) {
  if (numRows <= 0) {
    return [];
  }

  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    const lastRow = result[i - 1];
    const row = [1];
    for (let j = 1; j < i; j++) {
      row[j] = lastRow[j] + lastRow[j - 1];
    }
    row.push(1);
    result.push(row);
  }

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
Similar Questions:
"Pascal's Triangle": https://leetcode.com/problems/pascals-triangle

---

## [119. Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/description/)

### Problem:

Given a non-negative index *k* where _k_ ≤ 33, return the *k*th index row of the Pascal's triangle.

Note that the row index starts from 0.

![PascalTriangleAnimated2.gif](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

In Pascal's triangle, each number is the sum of the two numbers directly above it.

**Example:**

```
Input: 3
Output: [1,3,3,1]

```

**Follow up:**

Could you optimize your algorithm to use only _O_(_k_) extra space?

### Solution:

Dynamic Programming 101 with dynamic array.

State `(i, j)` depends on `(i-1, j)` and `(i-1, j-1)`. So to access `(i-1, j-1)` iteration must be from right to left.

```javascript
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function (rowIndex) {
  if (rowIndex < 0) {
    return [];
  }

  const row = [1];
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i - 1; j > 0; j--) {
      row[j] += row[j - 1];
    }
    row.push(1);
  }

  return row;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming

---

## [120. Triangle](https://leetcode.com/problems/triangle/description/)

### Problem:

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

```

The minimum path sum from top to bottom is `11` (i.e., **2** + **3** + **5** + **1** = 11).

**Note:**

Bonus point if you are able to do this using only _O_(_n_) extra space, where _n_ is the total number of rows in the triangle.

### Solution:

Define `f(i, j)` to be the minimum path sum from `triangle[0][0]` to `triangle[i][j]`.

```
f(i, 0) = f(i-1, j) + triangle[i][0]
f(i, j) = min( f(i-1, j-1), f(i-1, j) ) + triangle[i][j], 0 < j < i
f(i, i) = f(i-1, i-1) + triangle[i][i], i > 0
```

Dynamic array can be used.

```javascript
/**
 * @param {number[][]} triangle
 * @return {number}
 */
let minimumTotal = function (triangle) {
  if (triangle.length <= 0) {
    return 0;
  }

  const dp = [triangle[0][0]];
  for (let i = 1; i < triangle.length; i++) {
    dp[i] = dp[i - 1] + triangle[i][i];
    for (let j = i - 1; j >= 1; j--) {
      dp[j] = Math.min(dp[j], dp[j - 1]) + triangle[i][j];
    }
    dp[0] += triangle[i][0];
  }
  return Math.min(...dp);
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
"Maximum Subarray": https://leetcode.com/problems/maximum-subarray
"Best Time to Buy and Sell Stock II": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
"Best Time to Buy and Sell Stock III": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii
"Best Time to Buy and Sell Stock IV": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv
"Best Time to Buy and Sell Stock with Cooldown": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown

---

## [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

### Problem:

Say you have an array for which the *i*th element is the price of a given stock on day _i_.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

**Example 1:**

```
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

```

**Example 2:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

```

### Solution:

Only care about positive profits. Take the frist item as base and scan to the right. If we encounter an item `j` whose price `price[j]` is lower than the base (which means if we sell now the profit would be negative), we sell `j-1` instead and make `j` the new base.

Because `price[j]` is lower that the base, using `j` as new base is guaranteed to gain more profit comparing to the old one.

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let max = 0;
  let base = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - base;
    if (profit > max) {
      max = profit;
    } else if (profit < 0) {
      base = prices[i];
    }
  }
  return max;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
"Greedy": https://leetcode.com/tag/greedy
Similar Questions:
"Best Time to Buy and Sell Stock": https://leetcode.com/problems/best-time-to-buy-and-sell-stock
"Best Time to Buy and Sell Stock III": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii
"Best Time to Buy and Sell Stock IV": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv
"Best Time to Buy and Sell Stock with Cooldown": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown
"Best Time to Buy and Sell Stock with Transaction Fee": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee

---

## [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)

### Problem:

Say you have an array for which the *i*th element is the price of a given stock on day _i_.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

**Note:** You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

```

**Example 2:**

```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

```

**Example 3:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

### Solution:

Sell immediately after the price drops. Or in other perspective, it is the sum of all the incremental pairs (buy in then immediately sell out).

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1];
    }
  }
  return max;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
"Best Time to Buy and Sell Stock": https://leetcode.com/problems/best-time-to-buy-and-sell-stock
"Best Time to Buy and Sell Stock II": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
"Best Time to Buy and Sell Stock IV": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv
"Maximum Sum of 3 Non-Overlapping Subarrays": https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays

---

## [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/)

### Problem:

Say you have an array for which the *i*th element is the price of a given stock on day _i_.

Design an algorithm to find the maximum profit. You may complete at most _two_ transactions.

**Note:**You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

**Example 2:**

```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

```

**Example 3:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

### Solution:

Multiple transactions may not be engaged in at the same time. That means if we view the days that involed in the same transaction as a group, there won't be any intersection. We may complete at most _two_ transactions, so divide the days into two groups, `[0...k]` and `[k...n-1]`. Notice `k` exists in both groups because technically we can sell out then immediately buy in at the same day.

Define `p1(i)` to be the max profit of day `[0...i]`. This is just like the problem of [121. Best Time to Buy and Sell Stock](./121.%20Best%20Time%20to%20Buy%20and%20Sell%20Stock.md).

```
p1(0) = 0
p1(i) = max( p1(i-1), prices[i] - min(prices[0], ..., prices[i-1]) ), 0 < i <= n-1
```

Define `p2(i)` to be the max profit of day `[i...n-1]`. This is the mirror of `p1`.

```
p2(n-1) = 0
p2(i) = max( p2(i+1), max(prices[i], ..., prices[n-1]) - prices[i] ), n-1 > i >= 0
```

Define `f(k)` to be `p1(k) + p2(k)`. We need to get `max( f(0), ..., f(n-1) )`.

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  const len = prices.length;
  if (len <= 1) {
    return 0;
  }

  const dp = [0];

  let min = prices[0];
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
    min = Math.min(prices[i], min);
  }

  let p2 = 0;
  let max = prices[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    max = Math.max(prices[i], max);
    p2 = Math.max(p2, max - prices[i]);
    dp[i] += p2;
  }

  return Math.max(...dp);
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Path Sum": https://leetcode.com/problems/path-sum
"Sum Root to Leaf Numbers": https://leetcode.com/problems/sum-root-to-leaf-numbers
"Path Sum IV": https://leetcode.com/problems/path-sum-iv
"Longest Univalue Path": https://leetcode.com/problems/longest-univalue-path

---

## [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/)

### Problem:

Given a **non-empty** binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain **at least one node** and does not need to go through the root.

**Example 1:**

```
Input: [1,2,3]

       1
      / \
     2   3

Output: 6

```

**Example 2:**

```
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

```

### Solution:

For every `node`, there are six possible ways to get the max path sum:

- With `node.val`
  1. `node.val` plus the max sum of a path that ends with `node.left`.
  2. `node.val` plus the max sum of a path that starts with `node.right`.
  3. `node.val` plus the max sum of both paths.
  4. Just `node.val` (the max sum of both paths are negative).
- Without`node.val` (disconnected)
  1. The max-sum path is somewhere under the `node.left` subtree.
  2. The max-sum path is somewhere under the `node.right` subtree.

There are two ways to implement this.

#### ONE

Define a function that returns two values. The max sum of a path that may or may not end with `root` node, and the max sum of the path that ends with `root` node.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxPathSum = function (root) {
  return Math.max(..._maxPathSum(root));
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function _maxPathSum(root) {
  if (!root) {
    return [-Infinity, -Infinity];
  }

  const left = _maxPathSum(root.left);
  const right = _maxPathSum(root.right);
  return [
    Math.max(
      left[0],
      right[0],
      root.val + Math.max(0, left[1], right[1], left[1] + right[1])
    ),
    Math.max(left[1], right[1], 0) + root.val,
  ];
}
```

#### TWO

Just return the later (max sum of a path that ends with `root`). Maintain a global variable to store the disconnected max sum.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxPathSum = function (root) {
  const global = { max: -Infinity };
  _maxPathSum(root, global);
  return global.max;
};

/**
 * @param {TreeNode} root
 * @param {object} global
 * @param {number} global.max
 * @return {number[]}
 */
function _maxPathSum(root, global) {
  if (!root) {
    return -Infinity;
  }

  const left = _maxPathSum(root.left, global);
  const right = _maxPathSum(root.right, global);
  const localMax = Math.max(left, right, 0) + root.val;
  global.max = Math.max(global.max, localMax, root.val + left + right);
  return localMax;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Two Pointers": https://leetcode.com/tag/two-pointers
"String": https://leetcode.com/tag/string
Similar Questions:
"Palindrome Linked List": https://leetcode.com/problems/palindrome-linked-list
"Valid Palindrome II": https://leetcode.com/problems/valid-palindrome-ii

---

## [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)

### Problem:

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Note:** For the purpose of this problem, we define empty string as valid palindrome.

**Example 1:**

```
Input: "A man, a plan, a canal: Panama"
Output: true

```

**Example 2:**

```
Input: "race a car"
Output: false

```

### Solution:

#### ONE

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  const clean = s.toLowerCase().split(/[^a-z0-9]*/);
  return clean.join("") === clean.reverse().join("");
};
```

#### TWO

Remove non-alphanumeric characters then compare.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  const clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0, j = clean.length - 1; i < j; i++, j--) {
    if (clean[i] !== clean[j]) {
      return false;
    }
  }
  return true;
};
```

#### THREE

Compare the char codes.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    let left = s.charCodeAt(i);
    while (
      i < j &&
      (left < 48 ||
        (left > 57 && left < 65) ||
        (left > 90 && left < 97) ||
        left > 122)
    ) {
      left = s.charCodeAt(++i);
    }
    if (i >= j) {
      return true;
    }
    if (left >= 65 && left <= 90) {
      left += 32;
    }

    let right = s.charCodeAt(j);
    while (
      i < j &&
      (right < 48 ||
        (right > 57 && right < 65) ||
        (right > 90 && right < 97) ||
        right > 122)
    ) {
      right = s.charCodeAt(--j);
    }
    if (i >= j) {
      return true;
    }
    if (right >= 65 && right <= 90) {
      right += 32;
    }

    if (left !== right) {
      return false;
    }
  }

  return true;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
"String": https://leetcode.com/tag/string
"Backtracking": https://leetcode.com/tag/backtracking
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
"Word Ladder": https://leetcode.com/problems/word-ladder

---

## [126. Word Ladder II](https://leetcode.com/problems/word-ladder-ii/description/)

### Problem:

Given two words (_beginWord_ and _endWord_), and a dictionary's word list, find all shortest transformation sequence(s) from _beginWord_ to _endWord_, such that:

1. Only one letter can be changed at a time
2. Each transformed word must exist in the word list. Note that _beginWord_ is _not_ a transformed word.

**Note:**

- Return an empty list if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume _beginWord_ and _endWord_ are non-empty and are not the same.

**Example 1:**

```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]

```

**Example 2:**

```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

```

### Solution:

This is just like [127. Word Ladder](./127.%20Word%20Ladder).

The constrain still works, but instead of deleting the words right away, collect them and delete them all when a level ends, so that we can reuse the words (matching different parents in the same level).

The items in the queue are not just words now. Parent nodes are also kept so that we can backtrack the path from the end.

```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
function findLadders(beginWord, endWord, wordList) {
  wordList = new Set(wordList);
  if (!wordList.has(endWord)) {
    return [];
  }

  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  const result = [];
  let isEndWordFound = false;
  const levelWords = new Set();
  const queue = [[beginWord, null], null];
  while (queue.length > 1) {
    const node = queue.shift();

    if (node === null) {
      if (isEndWordFound) {
        break;
      }
      levelWords.forEach((word) => wordList.delete(word));
      levelWords.clear();
      queue.push(null);
      continue;
    }

    const word = node[0];

    for (let i = word.length - 1; i >= 0; i--) {
      const head = word.slice(0, i);
      const tail = word.slice(i + 1);

      for (let c = 0; c < 26; c++) {
        if (ALPHABET[c] !== word[i]) {
          const w = head + ALPHABET[c] + tail;
          if (w === endWord) {
            const path = [endWord];
            for (let n = node; n !== null; n = n[1]) {
              path.unshift(n[0]);
            }
            result.push(path);
            isEndWordFound = true;
          }
          if (wordList.has(w)) {
            levelWords.add(w);
            queue.push([w, node]);
          }
        }
      }
    }
  }

  return result;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
"Word Ladder II": https://leetcode.com/problems/word-ladder-ii
"Minimum Genetic Mutation": https://leetcode.com/problems/minimum-genetic-mutation

---

## [127. Word Ladder](https://leetcode.com/problems/word-ladder/description/)

### Problem:

Given two words (_beginWord_ and _endWord_), and a dictionary's word list, find the length of shortest transformation sequence from _beginWord_ to _endWord_, such that:

1. Only one letter can be changed at a time.
2. Each transformed word must exist in the word list. Note that _beginWord_ is _not_ a transformed word.

**Note:**

- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume _beginWord_ and _endWord_ are non-empty and are not the same.

**Example 1:**

```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

```

**Example 2:**

```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

```

### Solution:

Think of it as building a tree, with `begineWord` as root and `endWord` as leaves.

The best way control the depth (length of the shortest transformations) while building the tree is level-order traversal (BFS).

We do not actually build the tree because it is expensive (astronomical if the list is huge). In fact, we only need one shortest path. So just like Dijkstra's algorithm, we say that the first time (level `i`) we encounter a word that turns out to be in a shortest path, then level `i` is the lowest level this word could ever get. We can safely remove it from the `wordList`.

To find all the next words, instead of filtering the `wordList`, enumerate all 25 possible words and check if in `wordList`.

```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
let ladderLength = function (beginWord, endWord, wordList) {
  wordList = new Set(wordList);
  if (!wordList.has(endWord)) {
    return 0;
  }

  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  let level = 1;
  const queue = [beginWord, null];
  while (queue.length > 1) {
    const word = queue.shift();

    if (word === null) {
      level++;
      queue.push(null);
      continue;
    }

    for (let i = word.length - 1; i >= 0; i--) {
      const head = word.slice(0, i);
      const tail = word.slice(i + 1);

      for (let c = 0; c < 26; c++) {
        if (ALPHABET[c] !== word[i]) {
          const word = head + ALPHABET[c] + tail;
          if (word === endWord) {
            return level + 1;
          }
          if (wordList.delete(word)) {
            queue.push(word);
          }
        }
      }
    }
  }

  return 0;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
"Union Find": https://leetcode.com/tag/union-find
Similar Questions:
"Binary Tree Longest Consecutive Sequence": https://leetcode.com/problems/binary-tree-longest-consecutive-sequence

---

## [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

### Problem:

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(_n_) complexity.

**Example:**

```
Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

```

### Solution:

Build a Set from the list. Pick a number, find all it's adjacent numbers that are also in the Set. Count them and remove them all from the Set. Repeat until the Set is empty. Time complexity O(n + n) = O(n).

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let maxCount = 0;
  while (numSet.size > 0) {
    const num = numSet.values().next().value;
    numSet.delete(num);
    let count = 1;
    for (let n = num + 1; numSet.delete(n); n++) {
      count++;
    }
    for (let n = num - 1; numSet.delete(n); n--) {
      count++;
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Path Sum": https://leetcode.com/problems/path-sum
"Binary Tree Maximum Path Sum": https://leetcode.com/problems/binary-tree-maximum-path-sum

---

## [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/description/)

### Problem:

Given a binary tree containing digits from `0-9` only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path `1->2->3` which represents the number `123`.

Find the total sum of all root-to-leaf numbers.

**Note:** A leaf is a node with no children.

**Example:**

```
Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
```

**Example 2:**

```
Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
```

### Solution:

To write a clean solution for this promblem, use `0` as indicator of leaf node. If all the children get `0`, it is a leaf node, return the sum of current level.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let sumNumbers = function (root, sum = 0) {
  if (!root) {
    return 0;
  }
  sum = sum * 10 + root.val;
  return sumNumbers(root.left, sum) + sumNumbers(root.right, sum) || sum;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Depth-first Search": https://leetcode.com/tag/depth-first-search
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search
"Union Find": https://leetcode.com/tag/union-find
Similar Questions:
"Number of Islands": https://leetcode.com/problems/number-of-islands
"Walls and Gates": https://leetcode.com/problems/walls-and-gates

---

## [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/description/)

### Problem:

Given a 2D board containing `'X'` and `'O'` (**the letter O**), capture all regions surrounded by `'X'`.

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region.

**Example:**

```
X X X X
X O O X
X X O X
X O X X

```

After running your function, the board should be:

```
X X X X
X X X X
X X X X
X O X X

```

**Explanation:**

Surrounded regions shouldn't be on the border, which means that any `'O'` on the border of the board are not flipped to `'X'`. Any `'O'` that is not on the border and it is not connected to an `'O'` on the border will be flipped to `'X'`. Two cells are connected if they are adjacent cells connected horizontally or vertically.

### Solution:

Find all the `O`s that are connected to the `O`s on the border, change them to `#`. Then scan the board, change `O` to `X` and `#` back to `O`.

The process of finding the connected `O`s is just like tree traversal. `O`s on the border are the same level. Their children are the second level. And so on.

So both BFS and DFS are good. I prefer BFS when pruning is not needed in favor of its readability.

```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let solve = function (board) {
  const height = board.length;
  if (height <= 1) {
    return;
  }
  const width = board[0].length;
  if (width <= 1) {
    return;
  }

  const rowend = height - 1;
  const colend = width - 1;

  const queue = [];

  for (let row = 0; row < height; row++) {
    if (board[row][0] === "O") {
      board[row][0] = "#";
      queue.push(row, 0);
    }
    if (board[row][colend] === "O") {
      board[row][colend] = "#";
      queue.push(row, colend);
    }
  }

  for (let col = 0; col < width; col++) {
    if (board[0][col] === "O") {
      board[0][col] = "#";
      queue.push(0, col);
    }
    if (board[rowend][col] === "O") {
      board[rowend][col] = "#";
      queue.push(rowend, col);
    }
  }

  while (queue.length > 0) {
    const row = queue.shift();
    const col = queue.shift();
    if (row < rowend && board[row + 1][col] === "O") {
      board[row + 1][col] = "#";
      queue.push(row + 1, col);
    }
    if (row > 0 && board[row - 1][col] === "O") {
      board[row - 1][col] = "#";
      queue.push(row - 1, col);
    }
    if (board[row][col + 1] === "O") {
      board[row][col + 1] = "#";
      queue.push(row, col + 1);
    }
    if (board[row][col - 1] === "O") {
      board[row][col - 1] = "#";
      queue.push(row, col - 1);
    }
  }

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (board[row][col] === "#") {
        board[row][col] = "O";
      } else if (board[row][col] === "O") {
        board[row][col] = "X";
      }
    }
  }
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Depth-first Search": https://leetcode.com/tag/depth-first-search
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search
"Graph": https://leetcode.com/tag/graph
Similar Questions:
"Copy List with Random Pointer": https://leetcode.com/problems/copy-list-with-random-pointer

---

## [133. Clone Graph](https://leetcode.com/problems/clone-graph/description/)

### Problem:

Given the head of a graph, return a deep copy (clone) of the graph. Each node in the graph contains a `label` (`int`) and a list (`List[UndirectedGraphNode]`) of its `neighbors`. There is an edge between the given node and each of the nodes in its neighbors.

OJ's undirected graph serialization (so you can understand error output):

Nodes are labeled uniquely.

We use `#` as a separator for each node, and `,` as a separator for node label and each neighbor of the node.

As an example, consider the serialized graph `{0,1,2#1,2#2,2}`.

The graph has a total of three nodes, and therefore contains three parts as separated by `#`.

1. First node is labeled as `0`. Connect node `0` to both nodes `1` and `2`.
2. Second node is labeled as `1`. Connect node `1` to node `2`.
3. Third node is labeled as `2`. Connect node `2` to node `2` (itself), thus forming a self-cycle.

Visually, the graph looks like the following:

```
       1
      / \
     /   \
    0 --- 2
         / \
         \_/

```

**Note**: The information about the tree serialization is only meant so that you can understand error output if you get a wrong answer. You don't need to understand the serialization to solve the problem.

### Solution:

DFS. Cache the visited node before entering the next recursion.

```javascript
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
let cloneGraph = function (graph) {
  const cache = {};
  return _clone(graph);

  function _clone(graph) {
    if (!graph) {
      return graph;
    }
    const label = graph.label;
    if (!cache[label]) {
      cache[label] = new UndirectedGraphNode(label);
      cache[label].neighbors = graph.neighbors.map(_clone);
    }
    return cache[label];
  }
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

![alt text](https://github.com/everthis/leetcode-js/blob/master/images/binary-tree-upside-down.webp "binary-tree-upside-down")

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const upsideDownBinaryTree = function (root) {
  let curr = root;
  let next = null;
  let temp = null;
  let prev = null;
  while (curr !== null) {
    next = curr.left;
    curr.left = temp;
    temp = curr.right;
    curr.right = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// another

const upsideDownBinaryTree = function (root) {
  if (root == null || root.left == null) {
    return root;
  }
  const newRoot = upsideDownBinaryTree(root.left);
  root.left.left = root.right;
  root.left.right = root;
  root.left = null;
  root.right = null;
  return newRoot;
};
```

![alt text](https://github.com/everthis/leetcode-js/blob/master/images/maximum-sum-circular-subarray.png "maximum-sum-circular-subarray")

```js
/**
 * @param {number[]} A
 * @return {number}
 */
const maxSubarraySumCircular = function (A) {
  let minSum = Infinity,
    sum = 0,
    maxSum = -Infinity,
    curMax = 0,
    curMin = 0;
  for (let a of A) {
    sum += a;
    curMax = Math.max(curMax + a, a);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin + a, a);
    minSum = Math.min(minSum, curMin);
  }
  return maxSum > 0 ? Math.max(maxSum, sum - minSum) : maxSum;
};
```

# Balanced Binary Tree - LeetCode

> Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of _every_ node differ in height by no more than 1.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg)

**Input:** root = \[3,9,20,null,null,15,7\]
**Output:** true

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg)

**Input:** root = \[1,2,2,3,3,null,null,4,4\]
**Output:** false

**Example 3:**

**Input:** root = \[\]
**Output:** true

**Constraints:**

- The number of nodes in the tree is in the range `[0, 5000]`.
- `-104 <= Node.val <= 104`

[Source](https://leetcode.com/problems/balanced-binary-tree/)# Convert Sorted Array to Binary Search Tree

> Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of _every_ node never differ by more than 1.

**Example:**

Given the sorted array: \[-10,-3,0,5,9\],

One possible answer is: \[0,-3,9,-10,null,5\], which represents the following height balanced BST:

      0
     / \\

-3 9
/ /
-10 5

[Source](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)# Delete Node in a BST

> Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

1.  Search for a node to remove.
2.  If the node is found, delete the node.

**Follow up:** Can you solve it with time complexity `O(height of tree)`?

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/04/del_node_1.jpg)

**Input:** root = \[5,3,6,2,4,null,7\], key = 3
**Output:** \[5,4,6,2,null,null,7\]
**Explanation:** Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is \[5,4,6,2,null,null,7\], shown in the above BST.
Please notice that another valid answer is \[5,2,6,null,4,null,7\] and it's also accepted.
![](https://assets.leetcode.com/uploads/2020/09/04/del_node_supp.jpg)

**Example 2:**

**Input:** root = \[5,3,6,2,4,null,7\], key = 0
**Output:** \[5,3,6,2,4,null,7\]
**Explanation:** The tree does not contain a node with value = 0.

**Example 3:**

**Input:** root = \[\], key = 0
**Output:** \[\]

**Constraints:**

- The number of nodes in the tree is in the range `[0, 104]`.
- `-105 <= Node.val <= 105`
- Each node has a **unique** value.
- `root` is a valid binary search tree.
- `-105 <= key <= 105`

[Source](https://leetcode.com/problems/delete-node-in-a-bst/)![alt text](https://github.com/everthis/leetcode-js/blob/master/images/meeting-room-ii-0.jpg "meeting-room-ii")
![alt text](https://github.com/everthis/leetcode-js/blob/master/images/meeting-room-ii-1.jpg "meeting-room-ii")

```javascript
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function (intervals) {
  const len = intervals.length;
  const starts = new Array(len);
  const ends = new Array(len);
  for (let i = 0; i < len; i++) {
    starts[i] = intervals[i][0];
    ends[i] = intervals[i][1];
  }
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);
  let rooms = 0;
  let endsIdx = 0;
  for (let i = 0; i < len; i++) {
    if (starts[i] < ends[endsIdx]) rooms++;
    else endsIdx++;
  }
  return rooms;
};
```

</details><details> <summary>CONTENT/DS-n-Algos/Sorting-n-Searching/2-sorting-algorithms/</summary>

### [CONTENT/DS-n-Algos/Sorting-n-Searching/2-sorting-algorithms/subsequence-quicksort.md](CONTENT/DS-n-Algos/Sorting-n-Searching/2-sorting-algorithms/subsequence-quicksort.md)

### The steps

---

- Call Quick sort, passing the array and left-pointer and right-pointer to the quickSort function. For the first call, left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).

---

- Select Pivot, as the last index of the array. The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

---

- Swap function: A helper function to swap values of the array.

---

- Call Partition function: After calculating the pivot, we send the pivot to the partition() function. This function moves all the items smaller than the pivot value to the left and larger than pivot value to the right with the swap function. Then the function updates and returns the value of the left-pointer, which is indeed used as the partitionIndex.

---

- partitionIndex: In the partition() function, we keep moving all the items smaller than the pivot value to the left and larger than pivot value to the right. We have to keep track of the position of the partition. so that we can split the array into two parts in the next step. This tracking of the index where we partition the array is done by using partitionIndex variable. the initial value is left-pointer. And this initial value gets updated by the partition() function
  Inside the partition() function, we swap values for misplaced elements. That is, if an element is larger than the pivot position element, but is placed on the left side of the pivot, we swap it.

---

- Repeat the process: Now come back to quickSort function. when I get the updated partitionIndex, apply quickSort for the left side of the array and right side of the array. keep doing it until left is smaller than right.
  So, after the first 2 segments (segmented by pivot) are scanned with the partition() function, the next two segments that the main algorithm recurs on are [left…pivot - 1] and [pivot…right]

```js
//I hate using var but in this case the fact that it is function scope is rather advantageous.... substituting in let for var does not accurately sort the array in this case ... a exclusivley let declared implementation can be found in the 05-quicksort.js file above.
//1.) swap helper func
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function flexiSort(array, left, right) {
  // left-pointer would be the index of the first element ...
  //---> 0
  //right-pointer would be the index of the last element
  //---> (length -1).
  left = left || 0;
  right = right || array.length - 1;
  var pivot = partition(array, left, right);
  if (left < pivot - 1) {
    flexiSort(array, left, pivot - 1);
  }
  if (right > pivot) {
    flexiSort(array, pivot, right);
  }
  return array;
}
/* Two indices that start at the ends of the array being partitioned, then move toward each other, until they detect an inversion: a pair of elements, one greater than the pivot, one smaller, that are in the wrong order relative to each other. The inverted elements are then swapped. 
Here the numerical values of left and right is continually getting updated with each inner while loop. But only if the while loop condition gets satisfied. That is, when the while loop condition is unsatisfied, e.g. for the first inner while loop, when array[left] > array[pivot] which means we have found a misplaced pair. 
That is, although the left <= right (which is being made sure by the outer while loop) the actual elements are not sorted. Meaning a left side element is larger in value than the right side element. So, the code execution then jumps out of the inner while loop and goes right in to execute the swap function.
*/
function partition(array, left, right) {
  var pivot = Math.floor((left + right) / 2);
  while (left < right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    while (array[right] > array[pivot]) {
      right--;
    }
    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}
//--------------------------------(Testing)--------------------------------
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // By adding 1, I am making the maximum inclusive
  //Fun Fact:---->( the minimum is inclusive anyway).
  //Math.random() function returns a pseudo - random number in the range from 0 inclusive --> 1 exclusive
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}
//--------------------------------------------------------------------------
var arr = [];
// random unsorted array of integers
for (var i = 0; i < 10; i++) {
  arr.push(getRandomInt(1, 100));
}
console.log(
  "-----------------------------------------------------------------"
);
console.log("Unsorted array: ");
// unsorted array
console.log(arr);
console.log(
  "-----------------------------------------------------------------"
);
arr = flexiSort(arr, 0, arr.length - 1);
console.log("↧↧↧↧↧  Sorted array: ↧↧↧↧↧↧ ");
console.log(arr);
```

</details><details> <summary>CONTENT/DS-n-Algos/Strings/03-lengthOfLongestSubString/</summary>

### [CONTENT/DS-n-Algos/Strings/03-lengthOfLongestSubString/length-of-longest-substr.md](CONTENT/DS-n-Algos/Strings/03-lengthOfLongestSubString/length-of-longest-substr.md)

# Longest Substring Without Repeating Characters

> Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example 1:**

**Input:** s = "abcabcbb"
**Output:** 3
**Explanation:** The answer is "abc", with the length of 3.

**Example 2:**

**Input:** s = "bbbbb"
**Output:** 1
**Explanation:** The answer is "b", with the length of 1.

**Example 3:**

**Input:** s = "pwwkew"
**Output:** 3
**Explanation:** The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

**Example 4:**

**Input:** s = ""
**Output:** 0

**Constraints:**

- `0 <= s.length <= 5 * 104`
- `s` consists of English letters, digits, symbols and spaces.

[Source](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

</details><details> <summary>CONTENT/DS-n-Algos/Trees/Binary-Search-Tree/</summary>

### [CONTENT/DS-n-Algos/Trees/Binary-Search-Tree/binary-search.md](CONTENT/DS-n-Algos/Trees/Binary-Search-Tree/binary-search.md)

// Recursive Boolean

```js
function recurBSearch(array, target) {
  // Our base case:
  // If our array is empty, we do not have the target
  if (array.length === 0) {
    return false;
  }

  // Get a reference to the middle index, and middle element
  const midIdx = Math.floor(array.length / 2);
  const midEl = array[midIdx];
  // We get a subarray that represents our left half by slicing up to but not
  // including our midIdx.
  const leftHalf = array.slice(0, midIdx);
  // We get a subarray that represents our right half by slicing from the
  // midIdx + 1 all the way to the end of our array (no second argument needed).
  const rightHalf = array.slice(midIdx + 1);
  // If our target is smaller than the middle element, repeat this process with
  // the left half of our array.
  if (target < midEl) {
    return recurBSearch(leftHalf, target);
  }
  // If our target is larger than the middle element, repeat this process with
  // the right half of our array.
  else if (target > midEl) {
    return recurBSearch(rightHalf, target);
  }
  // If neither of these occurred, we found our element and return true.
  else {
    return true;
  }
}
```

// Iterative Boolean

```js
function iterBSearch(array, target) {
  // Get a reference to our lower and upper bounds that we would like to search
  // within our array. At the start, this is the entire array, so the indices are
  // 0 and our length - 1.
  let lowerIdx = 0;
  let upperIdx = array.length - 1;
  // We also create a midIdx variable because we will reassign it at each iteration
  let midIdx;

  // While our lowerIdx <= upperIdx, we still have elements that we haven't ruled
  // out as being our target, so we want our iteration to continue.
  while (lowerIdx <= upperIdx) {
    // Get a reference to the middle element within our current bounds.
    // We are using Math.floor in order to get an integer/valid index.
    // (If we used ceiling, we would have to do some subtraction in order to get
    // our first element. For example, [14] has a length 1, so
    // Math.ceil((0 + 1)/2)) = 1, which is outside our bounds.
    midIdx = Math.floor((lowerIdx + upperIdx) / 2);
    // If our target is larger than our current middle element, our lower bound
    // needs to be moved up past our midIdx so that we look at the right half.
    if (array[midIdx] < target) {
      lowerIdx = midIdx + 1;
      // If our target is smaller than our current middle element, our upper bound
      // needs to be moved down past our midIdx so that we look at the left half.
    } else if (array[midIdx] > target) {
      upperIdx = midIdx - 1;
      // Otherwise, we have found our target at the midIdx and can return true.
    } else {
      return true;
    }
  }

  // If we made it outside of our loop without returning, our target is not in
  // the array, so we can return false.
  return false;
}
```

// Recursive Index

```js
function recurBSearchIdx(array, target) {
  // Our base case
  // This is another way of checking if the length is 0
  // Since 0 is a falsey value, !0 would be truthy, meaning our array is empty
  // -1 here indicates that the value is not found (very common for -1 to be used
  // in these situations so that all return values are numbers)
  if (!array.length) return -1;

  // Getting a reference to our middle element for our comparisons
  const midIdx = Math.floor(array.length / 2);
  const midEl = array[midIdx];

  // We get a subarray that represents our left half by slicing up to but not
  // including our midIdx.
  const leftHalf = array.slice(0, midIdx);
  // We get a subarray that represents our right half by slicing from the
  // midIdx + 1 all the way to the end of our array (no second argument needed).
  const rightHalf = array.slice(midIdx + 1);

  // If our target is less than our current middle element, we can recursively
  // call our function with the left half of the array and return that value.
  if (target < midEl) {
    return recurBSearchIdx(leftHalf, target);
    // If our target is greater than our current middle element we have two scenarios
    // The first scenario, we did not find our target in the subarray (right side).
    // In this case, we also want to return -1 to indicate that the value isn't
    // in our array.
    // The second scenario is that we find our element in the subarray.
    // In this case, the return value is going to be the index IN THE SUBARRAY.
    // In order for us to be able to return what index that corresponds to in
    // our larger original array, we need to shift this value by where this
    // subarray starts in our larger array.
    // Ultimately this means taking our return value and adding on our midIdx + 1
    // Take a look at the comments below this function for an example
  } else if (target > midEl) {
    const idxShift = recurBSearchIdx(rightHalf, target);
    if (idxShift === -1) {
      return -1;
    } else {
      return idxShift + midIdx + 1;
    }
    // If neither of the above cases are true, we found our element and return that
    // index (the midIdx that we compared)
  } else {
    return midIdx;
  }
}
```

// Using the right-side shift example:
// Array: [1, 2, 3, 4, 5], Target: 5
// The first index that we are going to compare is Math.floor(array.length/2) = 2,
// which is our element 3.
// Our target is greater than this value, so we need to check the right subarray.
// The new array is [4, 5] with the same target of 5.
// In this recursive call, the index that we are checking is Math.floor(array.length/2) = 1,
// which is our element 5.
// Since we found our element, we are hitting our last case of the conditional,
// return our index of 1 to where our recursive function was called.
// This value of 1 does not line up with the index of our original array, though,
// it was the index of our subarray.
// In order to convert this into an index that aligns with our current, larger
// array, we need to add on the amount that the indices were shifted. Our slicing
// of the subarray was acheived by taking the first three elements off. We know
// this intuitively, but it can be calculated by adding on our midIdx + 1 that
// we originally passed to our slice method.
// We end up getting our returned index from the recursion (1) added on to our
// midIdx + 1 (2 + 1), getting a final index of 4, which corresponds to where
// our element is in the larger array.
// This shifting didn't have to take place on the left side because the indices
// of the subarrays are the same as the indices of our larger array (index 1 of
// the left subarray is the same element as index 1 of the larger original).

// Recursive Index v2

```js
function recurBSearchIdxV2(array, target, lo = 0, hi = array.length - 1) {
  // I'm adding a second condition to this base case that Alvin doesn't do. It's
  // possible that our last element of the array is the target, which would mean
  // that lo === hi, but we haven't checked that element yet.
  // This second part of the condition will only ever be evaluated when the first
  // is true, making that final check.
  // (This is an edge case that I don't think Alvin accounts for)
  if (lo === hi && array[lo] !== target) {
    return -1;
  }

  let midIdx = Math.floor((lo + hi) / 2);

  if (target < array[midIdx]) {
    return recurBSearchIdxV2(array, target, lo, midIdx);
  } else if (target > array[midIdx]) {
    return recurBSearchIdxV2(array, target, midIdx + 1, hi);
  } else {
    return midIdx;
  }
}
```

// Iterative Index

```js
function iterBSearchIdx(array, target) {
  // The implementation of this function is exactly the same as returning a boolean
  // Instead of returning true/false, we return the midIdx.
  // No index shifting needs to take place like in the right-side scenario above
  // because we are never making subarrays; we are only dealing with the indices
  // as they relate to the original array.
  let lowerIdx = 0;
  let upperIdx = array.length - 1;
  let midIdx;

  while (lowerIdx <= upperIdx) {
    midIdx = Math.floor((lowerIdx + upperIdx) / 2);
    if (array[midIdx] < target) {
      lowerIdx = midIdx + 1;
    } else if (array[midIdx] > target) {
      upperIdx = midIdx - 1;
    } else {
      return midIdx;
    }
  }

  return -1;
}
```

```js
module.exports = {
  recurBSearch,
  iterBSearch,
  recurBSearchIdx,
  recurBSearchIdxV2,
  iterBSearchIdx,
};
```

### [CONTENT/DS-n-Algos/Trees/Binary-Search-Tree/BST.md](CONTENT/DS-n-Algos/Trees/Binary-Search-Tree/BST.md)

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    let newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (newNode.val < root.val) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insert(val, root.left);
      }
    }

    if (newNode.val >= root.val) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insert(val, root.right);
      }
    }
  }

  searchRecur(val, root = this.root) {
    if (!root) {
      return false;
    }
    if (root.val === val) {
      return true;
    }

    // console.log("VAL::::::" ,val)
    // console.log("ROOT VAL:::::", root.val)
    let found = false;
    if (val < root.val) {
      found = this.searchRecur(val, root.left);
    } else {
      found = this.searchRecur(val, root.right);
    }

    return found;

    //     value :7

    //     searchRecur (7, 5)
    //           10
    //       5       16
    //    1    7         16
    // postOrder.push(...postOrderArray(roo.left));
    // postOrder.push(...postOrderArray(roo.right));
    // postOrder.push(roo.val);

    // if (val < root.val) {
    //    // console.log("ROOOT LEFT:::", root.left)
    //    // console.log("VALUE:::", val)
    //     if (root.left=== val) {

    //         return true;
    //     } else {
    //         return this.searchRecur(val, root.left);
    //     }
    // }else {
    //     if (root.right === val) {
    //         return true;
    //     } else {
    //         return this.searchRecur(val, root.right);
    //     }
    // }

    // return false;
  }

  searchIter(val) {
    if (!this.root) {
      return false;
    }

    let found = false;
    let curr = this.root;

    while (!found) {
      if (!curr) {
        return false;
      }
      if (val === curr.val) {
        found = true;
        return true;
      }
      if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return false;
  }
}

/*
    BST
    #constructor()
      ✓ should initialize the `root` property to null
    #insert(val)
      ✓ should insert a TreeNode with the given value into the BST
      when the BST is empty
        ✓ should correctly insert a TreeNode with the given val as the root
    #searchRecur(val)
      ✓ should return false if the BST is empty
      ✓ should be recursive
      when the val is contained in the BST
        ✓ should return true
      when the val is not contained in the BST
        ✓ should return false
    #searchIter(val)
      ✓ should return false if the BST is empty
      ✓ should be iterative, not recursive
      when the val is contained in the BST
        ✓ should return true
      when the val is not contained in the BST
        ✓ should return false

  findMin()
    when the tree is empty
      ✓ should return null
    when the root has no children
      ✓ should return the root
    when the root only has right children
      ✓ should return the root
    when the root has left children
      ✓ should return the leftmost child of the root

  getHeight()
    ✓ should return -1 for an empty root
    ✓ should correctly return the height of a balanced tree
    ✓ should correctly return the height of an unbalanced tree
*/

module.exports = {
  TreeNode,
  BST,
};
```

---

```js

```

---

```js

```

</details><details> <summary>CONTENT/DS-n-Algos/Trees/leetcode-450-delete-bst-node/</summary>

### [CONTENT/DS-n-Algos/Trees/leetcode-450-delete-bst-node/Delete Node in a BST.md](CONTENT/DS-n-Algos/Trees/leetcode-450-delete-bst-node/Delete Node in a BST.md)

# Delete Node in a BST

> Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

1.  Search for a node to remove.
2.  If the node is found, delete the node.

**Follow up:** Can you solve it with time complexity `O(height of tree)`?

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/04/del_node_1.jpg)

**Input:** root = \[5,3,6,2,4,null,7\], key = 3
**Output:** \[5,4,6,2,null,null,7\]
**Explanation:** Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is \[5,4,6,2,null,null,7\], shown in the above BST.
Please notice that another valid answer is \[5,2,6,null,4,null,7\] and it's also accepted.
![](https://assets.leetcode.com/uploads/2020/09/04/del_node_supp.jpg)

**Example 2:**

**Input:** root = \[5,3,6,2,4,null,7\], key = 0
**Output:** \[5,3,6,2,4,null,7\]
**Explanation:** The tree does not contain a node with value = 0.

**Example 3:**

**Input:** root = \[\], key = 0
**Output:** \[\]

**Constraints:**

- The number of nodes in the tree is in the range `[0, 104]`.
- `-105 <= Node.val <= 105`
- Each node has a **unique** value.
- `root` is a valid binary search tree.
- `-105 <= key <= 105`

[Source](https://leetcode.com/problems/delete-node-in-a-bst/)

</details><details> <summary>CONTENT/DS-n-Algos/Trees/leetcode108-sorted-arr-2-bst/</summary>

### [CONTENT/DS-n-Algos/Trees/leetcode108-sorted-arr-2-bst/Convert Sorted Array to Binary Search Tree.md](CONTENT/DS-n-Algos/Trees/leetcode108-sorted-arr-2-bst/Convert Sorted Array to Binary Search Tree.md)

# Convert Sorted Array to Binary Search Tree

> Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of _every_ node never differ by more than 1.

**Example:**

Given the sorted array: \[-10,-3,0,5,9\],

One possible answer is: \[0,-3,9,-10,null,5\], which represents the following height balanced BST:

      0
     / \\

-3 9
/ /
-10 5

[Source](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

</details><details> <summary>CONTENT/DS-n-Algos/web-dev/listenForEvent-s/</summary>

### [CONTENT/DS-n-Algos/web-dev/listenForEvent-s/DOMEventHandlers.md](CONTENT/DS-n-Algos/web-dev/listenForEvent-s/DOMEventHandlers.md)

# DOM onevent handlers

> The Web platform provides several ways to be notified of DOM events. Two common approaches are addEventListener() and the specific onevent handlers.

The Web platform provides several ways to be notified of [DOM events](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/Events). Two common approaches are [`addEventListener()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/EventTarget/addEventListener) and the specific `on_event_` handlers. This page focuses on how the latter work.

## Registering onevent handlers

The **`on_event_`** handlers are properties on certain DOM elements to manage how that element reacts to events. Elements can be interactive (links, buttons, images, forms, and so forth) or non-interactive (such as the base `<body>

                                <a href="https://github.com/bgoonz/DS-ALGO-OFFICIAL" class="github-corner"
                                aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250"
                                    style="z-index: 100000; fill:#194ccdaf; color:#fff; position: fixed; top: 20px; border: 0; left: 20px; transform: scale(-1.5, 1.5);"
                                    aria-hidden="true">
                                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                                    <path
                                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
                                    </path>
                                    <path
                                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                        fill="currentColor" class="octo-body"></path>
                                </svg></a>




` element). Events are actions like:

- Being clicked
- Detecting pressed keys
- Getting focus

The `on_event_` handler is usually named with the event it reacts to, like `on_click_`, `on_keypress_`, `on_focus_`, etc.

You can specify an `on_<…>_` event handler for a particular event (such as `[click](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/Events/click "/en-US/docs/Web/Events/click")`) for a given object in different ways:

- Adding an HTML [attribute](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/attribute) named `on_<eventtype>_`:  
  `<button **onclick="handleClick()"**>`,
- Or by setting the corresponding [property](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/property/JavaScript) from JavaScript:  
  `document.querySelector("button")**.onclick = function(event) { … }**`.

An `on_event_` event handler property serves as a placeholder of sorts, to which a single event handler can be assigned. In order to allow multiple handlers to be installed for the same event on a given object, you can call its [`addEventListener()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/EventTarget/addEventListener) method, which manages a list of handlers for the given event on the object. A handler can then be removed from the object by calling its [`removeEventListener()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/EventTarget/removeEventListener) function.

When an event occurs that applies to an element, each of its event handlers is called to allow them to handle the event, one after another. You don't need to call them yourself, although you can do so in many cases to easily simulate an event taking place. For example, given a button object `myButton`, you can do `myButton.onclick(myEventObject)` to call the event handler directly. If the event handler doesn't access any data from the event object, you can leave out the event when calling `onclick()`.

This continues until every handler has been called, unless one of the event handlers explicitly halts the processing of the event by calling [`stopPropagation()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Event/stopPropagation) on the event object itself.

### Non-element objects

Event handlers can also be set with properties on non-element objects that generate events, like [`window`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Window), [`document`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Document), [`XMLHttpRequest`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/XMLHttpRequest), and others. For example, for the `progress` event on instances of `XMLHttpRequest`:

    const xhr = new XMLHttpRequest();
    xhr.onprogress = function() { … };

## HTML onevent attributes

HTML elements have attributes named `on_event_` which can be used to register a handler for an event directly within the HTML code. When the element is built from the HTML, the value of its `on_event_` attributes are copied to the DOM object that represents the element, so that accessing the attributes' values using JavaScript will get the value set in the HTML.

Further changes to the HTML attribute value can be done via the [`setAttribute`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Element/setAttribute) method; Making changes to the JavaScript property will have no effect.

### HTML

Given this HTML document:

    <p>Demonstrating quirks of <code>on<em>event</em></code> HTML attributes on
       <a onclick="log('Click!')">these three words</a>.
    </p>

    <div></div>

### JavaScript

Then this JavaScript demonstrates that the value of the HTML attribute is unaffected by changes to the JavaScript object's property.

    let logElement = document.querySelector('div');
    let el = document.querySelector("a");

    function log(msg) { logElement.innerHTML += `${msg}<br>` };
    function anchorOnClick(event) { log("Changed onclick handler") };


    log(`Element's onclick as a JavaScript property: <code> ${el.onclick.toString()} </code>`);


    log('<br>Changing onclick handler using <strong> onclick property </strong> ');

    el.onclick = anchorOnClick;

    log(`Changed the property to: <code> ${el.onclick.toString()} </code>`);
    log(`But the HTML attribute is unchanged: <code> ${el.getAttribute("onclick")} </code><br>`);


    log('<hr/><br> Changing onclick handler using <strong> setAttribute method </strong> ');
    el.setAttribute("onclick", 'anchorOnClick(event)');

    log(`Changed the property to: <code> ${el.onclick.toString()} </code>`);
    log(`Now even the HTML attribute has changed: <code> ${el.getAttribute("onclick")} </code><br>`);

### Result

For historical reasons, some attributes/properties on the [`<body>

                                <a href="https://github.com/bgoonz/DS-ALGO-OFFICIAL" class="github-corner"
                                aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250"
                                    style="z-index: 100000; fill:#194ccdaf; color:#fff; position: fixed; top: 20px; border: 0; left: 20px; transform: scale(-1.5, 1.5);"
                                    aria-hidden="true">
                                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                                    <path
                                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
                                    </path>
                                    <path
                                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                        fill="currentColor" class="octo-body"></path>
                                </svg></a>




`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTML/Element/body "The HTML <body>

                                <a href="https://github.com/bgoonz/DS-ALGO-OFFICIAL" class="github-corner"
                                aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250"
                                    style="z-index: 100000; fill:#194ccdaf; color:#fff; position: fixed; top: 20px; border: 0; left: 20px; transform: scale(-1.5, 1.5);"
                                    aria-hidden="true">
                                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                                    <path
                                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
                                    </path>
                                    <path
                                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                        fill="currentColor" class="octo-body"></path>
                                </svg></a>




Element represents the content of an HTML document. There can be only one <body>

                                <a href="https://github.com/bgoonz/DS-ALGO-OFFICIAL" class="github-corner"
                                aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250"
                                    style="z-index: 100000; fill:#194ccdaf; color:#fff; position: fixed; top: 20px; border: 0; left: 20px; transform: scale(-1.5, 1.5);"
                                    aria-hidden="true">
                                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                                    <path
                                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
                                    </path>
                                    <path
                                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                        fill="currentColor" class="octo-body"></path>
                                </svg></a>




element in a document.") and [`<frameset>`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTML/Element/frameset "The HTML <frameset> element is used to contain <frame> elements.") elements instead set event handlers on their parent [`Window`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Window) object. (The HTML specification names these: [`onblur`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onblur), [`onerror`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onerror), [`onfocus`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onfocus), [`onload`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onload), and [`onscroll`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onscroll).)

### Event handler's parameters, this binding, and the return value

When the event handler is specified as **an HTML attribute**, the specified code is wrapped into a function with **the following parameters**:

- `event` — for all event handlers except [`onerror`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onerror).
- `event`, `source`, `lineno`, `colno`, and `error` for the [`onerror`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onerror) event handler. Note that the `event` parameter actually contains the error message as a string.

When the event handler is invoked, the `this` keyword inside the handler is set to the DOM element on which the handler is registered. For more details, see [the `this` keyword documentation](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/this#In_an_inline_event_handler).

The return value from the handler determines if the event is canceled. The specific handling of the return value depends on the kind of event; for details, see ["The event handler processing algorithm" in the HTML specification](https://html.spec.whatwg.org/multipage/webappapis.html#the-event-handler-processing-algorithm).

### When the event handler is invoked

TBD (non-capturing listener)

### Terminology

The term **event handler** may refer to:

- Any function or object that is registered to be notified of events
- Or more specifically, to the mechanism of registering event listeners via `on…` attributes in HTML or properties in Web APIs, such as `<button onclick="alert(this)">` or `window.onload = function() { … }`.

When discussing the various methods of listening to events:

- **Event listener** refers to a function or object registered via [`EventTarget.addEventListener()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/EventTarget/addEventListener)
- **Event handler** refers to a function registered via `on…` attributes or properties

## Specifications

| Specification | Status | Comment |
| ------------- | ------ | ------- |

| [HTML Living Standard  
The definition of 'event handlers' in that specification.](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-attributes) | Living Standard | |
| [HTML5  
The definition of 'event handlers' in that specification.](https://www.w3.org/TR/html52/webappapis.html#event-handler-attributes) | Recommendation | |

## Browser compatibility

#### Detecting the presence of event handler properties

You can detect the presence of an event handler property with the JavaScript [`in`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/in) operator. For example:

    if ("onsomenewfeature" in window) {

    }

#### Event handlers and prototypes

You can't set or access the values of any IDL-defined attributes on DOM prototype objects. That means you can't, for example, change `Window.prototype.onload`. In the past, event handlers (`onload`, etc.) weren't implemented as IDL attributes in Gecko, so you were able to do this for those. Now you can't. This improves compatibility.

[Source](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)

</details><details> <summary>CONTENT/Resources/My-Data-Structures-Notes/</summary>

### [CONTENT/Resources/My-Data-Structures-Notes/Data-Structures-Cheat-Sheet.md](CONTENT/Resources/My-Data-Structures-Notes/Data-Structures-Cheat-Sheet.md)

# ![](ds-cheat-sheet-operations.png)

> Its always good to have a look at worst-case time complexities of common data structure operations frequently.

Its always good to have a look at worst-case time complexities of common data structure operations frequently.

![Image for post](https://miro.medium.com/max/60/1*6NpRbTpekXG_1l5hh1XeIQ.png?q=20)

![Image for post](https://miro.medium.com/max/3572/1*6NpRbTpekXG_1l5hh1XeIQ.png)

Arrays are one of the basic and important data structures to learn, They take constant time to read and Insert elements at the end and takes a linear time for the remaining.

![Image for post](https://miro.medium.com/max/60/1*vFbcvaNX-aWr5-wERwKFIA.png?q=20)

![Image for post](https://miro.medium.com/max/3746/1*vFbcvaNX-aWr5-wERwKFIA.png)

Stack takes constant time for Push, Pop & Peek operations.

![Image for post](https://miro.medium.com/max/60/1*HgkpbE06UCWm2G3U54J8ew.png?q=20)

![Image for post](https://miro.medium.com/max/2512/1*HgkpbE06UCWm2G3U54J8ew.png)

In Queue for Enqueue, Dequeue & Peek operations it takes only Constant time.

![Image for post](https://miro.medium.com/max/60/1*amq4OYYapQjaN2QXIG5eUw.png?q=20)

![Image for post](https://miro.medium.com/max/3942/1*amq4OYYapQjaN2QXIG5eUw.png)

Here we are considering we are using tails for all single linked lists (Some implementations might not have it).  
Linked List is the data structure that comes with a lot of different operational scenarios, we have to think about head & tail usage in every operation we are doing. And operation logic and complexity changes at the head, tail, and middle. Typically insertion at head & tail takes constant time and insertion in middle takes linear time. Search can take linear time. Deletion at the head takes constant time and it can take linear time in remaining scenarios.

---

## [](#Trees-basic-concepts "Trees: basic concepts")Trees: basic concepts

A tree is a data structure where a node can have zero or more children. Each node contains a **value**. Like graphs, the connection between nodes is called **edges**. A tree is a type of graph, but not all of them are trees (more on that later).

These data structures are called "trees" because the data structure resembles a tree 🌳. It starts with a **root** node and **branch** off with its descendants, and finally, there are **leaves**.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/tree-parts.jpg)

Here are some properties of trees:

- The top-most node is called **root**.
- A node without children is called **leaf** node or **terminal** node.
- **Height** (_h_) of the tree is the distance (edge count) between the farthest leaf to the root.
  - `A` has a height of 3
  - `I` has a height of 0
- **Depth** or **level** of a node is the distance between the root and the node in question.
  - `H` has a depth of 2
  - `B` has a depth of 1

### [](#Implementing-a-simple-tree-data-structure "Implementing a simple tree data structure")Implementing a simple tree data structure

As we saw earlier, a tree node is just a data structure that has a value and has links to their descendants.

Here's an example of a tree node:

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br></pre></td><td><pre><span><span><span>class</span> <span>TreeNode</span> </span>{</span><br><span>  <span>constructor</span>(value) {</span><br><span>    <span>this</span>.value = value;</span><br><span>    <span>this</span>.descendents = [];</span><br><span>  }</span><br><span>}</span><br></pre></td></tr></tbody></table>

We can create a tree with 3 descendents as follows:

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br></pre></td><td><pre><span></span><br><span><span>const</span> abe = <span>new</span> TreeNode(<span>'Abe'</span>);</span><br><span><span>const</span> homer = <span>new</span> TreeNode(<span>'Homer'</span>);</span><br><span><span>const</span> bart = <span>new</span> TreeNode(<span>'Bart'</span>);</span><br><span><span>const</span> lisa = <span>new</span> TreeNode(<span>'Lisa'</span>);</span><br><span><span>const</span> maggie = <span>new</span> TreeNode(<span>'Maggie'</span>);</span><br><span></span><br><span></span><br><span>abe.descendents.push(homer);</span><br><span>homer.descendents.push(bart, lisa, maggie);</span><br></pre></td></tr></tbody></table>

That's all; we have a tree data structure!

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/simpson2-tree.jpg "Simpson tree data structure")

The node `abe` is the **root** and `bart`, `lisa` and `maggie` are the **leaf** nodes of the tree. Notice that the tree's node can have a different number of descendants: 0, 1, 3, or any other value.

Tree data structures have many applications such as:

- [Maps](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#HashMaps)
- [Sets](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Sets)
- Databases
- Priority Queues
- Querying an LDAP (Lightweight Directory Access Protocol)
- Representing the Document Object Model (DOM) for HTML on Websites.

## [](#Binary-Trees "Binary Trees")Binary Trees

Trees nodes can have zero or more children. However, when a tree has at the most two children, then it's called **binary tree**.

### [](#Full-Complete-and-Perfect-binary-trees "Full, Complete and Perfect binary trees")Full, Complete and Perfect binary trees

Depending on how nodes are arranged in a binary tree, it can be **full**, **complete** and **perfect**:

- **Full binary tree**: each node has exactly 0 or 2 children (but never 1).
- **Complete binary tree**: when all levels except the last one are **full** with nodes.
- **Perfect binary tree**: when all the levels (including the last one) are full of nodes.

Look at these examples:

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/full-complete-perfect-binary-tree.jpg "Full vs. Complete vs. Perfect Binary Tree")

These properties are not always mutually exclusive. You can have more than one:

- A perfect tree is **always** complete and full.
  - Perfect binary trees have precisely 2k\-1 nodes, where _`k`_ is the last level of the tree (starting with 1).
- A complete tree is **not** always `full`.
  - Like in our "complete" example, since it has a parent with only one child. If we remove the rightmost gray node, then we would have a **complete** and **full** tree but not perfect.
- A full tree is not always complete and perfect.

## [](#Binary-Search-Tree-BST "Binary Search Tree (BST)")Binary Search Tree (BST)

Binary Search Trees or BST for short are a particular application of binary trees. BST has at most two nodes (like all binary trees). However, the values are in such a way that the left children value must be less than the parent, and the right children is must be higher.

**Duplicates:** Some BST doesn't allow duplicates while others add the same values as a right child. Other implementations might keep a count on a case of the duplicity (we are going to do this one later).

Let's implement a Binary Search Tree!

### [](#BST-Implementation "BST Implementation")BST Implementation

BST are very similar to our previous [implementation of a tree](#Implementing-a-simple-tree-data-structure). However, there are some differences:

- Nodes can have at most, only two children: left and right.
- Nodes values has to be ordered as `left < parent < right`.

Here's the tree node. Very similar to what we did before, but we added some handy getters and setters for left and right children. Notice that is also keeping a reference to the parent and we update it every time add children.

TreeNode.js[Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/tree-node.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br><span>24</span><br><span>25</span><br><span>26</span><br><span>27</span><br><span>28</span><br><span>29</span><br><span>30</span><br><span>31</span><br><span>32</span><br></pre></td><td><pre><span><span>const</span> LEFT = <span>0</span>;</span><br><span><span>const</span> RIGHT = <span>1</span>;</span><br><span></span><br><span><span><span>class</span> <span>TreeNode</span> </span>{</span><br><span>  <span>constructor</span>(value) {</span><br><span>    <span>this</span>.value = value;</span><br><span>    <span>this</span>.descendents = [];</span><br><span>    <span>this</span>.parent = <span>null</span>;</span><br><span>  }</span><br><span></span><br><span>  <span>get</span> <span>left</span>() {</span><br><span>    <span>return</span> <span>this</span>.descendents[LEFT];</span><br><span>  }</span><br><span></span><br><span>  <span>set</span> <span>left</span>(<span>node</span>) {</span><br><span>    <span>this</span>.descendents[LEFT] = node;</span><br><span>    <span>if</span> (node) {</span><br><span>      node.parent = <span>this</span>;</span><br><span>    }</span><br><span>  }</span><br><span></span><br><span>  <span>get</span> <span>right</span>() {</span><br><span>    <span>return</span> <span>this</span>.descendents[RIGHT];</span><br><span>  }</span><br><span></span><br><span>  <span>set</span> <span>right</span>(<span>node</span>) {</span><br><span>    <span>this</span>.descendents[RIGHT] = node;</span><br><span>    <span>if</span> (node) {</span><br><span>      node.parent = <span>this</span>;</span><br><span>    }</span><br><span>  }</span><br><span>}</span><br></pre></td></tr></tbody></table>

Ok, so far we can add a left and right child. Now, let's do the BST class that enforces the `left < parent < right` rule.

BinarySearchTree.js linkUrl linkText

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br></pre></td><td><pre><span></span><br><span><span><span>class</span> <span>BinarySearchTree</span> </span>{</span><br><span>  <span>constructor</span>() {</span><br><span>    <span>this</span>.root = <span>null</span>;</span><br><span>    <span>this</span>.size = <span>0</span>;</span><br><span>  }</span><br><span></span><br><span>  add(value) {  }</span><br><span>  find(value) {  }</span><br><span>  remove(value) {  }</span><br><span>  getMax() {  }</span><br><span>  getMin() {  }</span><br><span>}</span><br></pre></td></tr></tbody></table>

Let's implementing insertion.

### [](#BST-Node-Insertion "BST Node Insertion")BST Node Insertion

To insert a node in a binary tree, we do the following:

1.  If a tree is empty, the first node becomes the **root** and you are done.
2.  Compare root/parent's value if it's _higher_ go **right**, if it's _lower_ go **left**. If it's the same, then the value already exists so you can increase the duplicate count (multiplicity).
3.  Repeat #2 until we found an empty slot to insert the new node.

Let's do an illustration how to insert 30, 40, 10, 15, 12, 50:

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/bst2.gif "Inserting nodes on a Binary Search Tree (BST)")

We can implement insert as follows:

BinarySearchTree.prototype.add[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js#L11)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br></pre></td><td><pre><span>add(value) {</span><br><span>  <span>const</span> newNode = <span>new</span> TreeNode(value);</span><br><span></span><br><span>  <span>if</span> (<span>this</span>.root) {</span><br><span>    <span>const</span> { found, parent } = <span>this</span>.findNodeAndParent(value);</span><br><span>    <span>if</span> (found) { </span><br><span>      found.meta.multiplicity = (found.meta.multiplicity || <span>1</span>) + <span>1</span>;</span><br><span>    } <span>else</span> <span>if</span> (value &lt; parent.value) {</span><br><span>      parent.left = newNode;</span><br><span>    } <span>else</span> {</span><br><span>      parent.right = newNode;</span><br><span>    }</span><br><span>  } <span>else</span> {</span><br><span>    <span>this</span>.root = newNode;</span><br><span>  }</span><br><span></span><br><span>  <span>this</span>.size += <span>1</span>;</span><br><span>  <span>return</span> newNode;</span><br><span>}</span><br></pre></td></tr></tbody></table>

We are using a helper function called `findNodeAndParent`. If we found that the node already exists in the tree, then we increase the `multiplicity` counter. Let's see how this function is implemented:

BinarySearchTree.prototype.findNodeAndParent[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js#L44)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br></pre></td><td><pre><span>findNodeAndParent(value) {</span><br><span>  <span>let</span> node = <span>this</span>.root;</span><br><span>  <span>let</span> parent;</span><br><span></span><br><span>  <span>while</span> (node) {</span><br><span>    <span>if</span> (node.value === value) {</span><br><span>      <span>break</span>;</span><br><span>    }</span><br><span>    parent = node;</span><br><span>    node = ( value &gt;= node.value) ? node.right : node.left;</span><br><span>  }</span><br><span></span><br><span>  <span>return</span> { <span>found</span>: node, parent };</span><br><span>}</span><br></pre></td></tr></tbody></table>

`findNodeAndParent` goes through the tree searching for the value. It starts at the root (line 2) and then goes left or right based on the value (line 10). If the value already exists, it will return the node `found` and also the parent. In case that the node doesn't exist, we still return the `parent`.

### [](#BST-Node-Deletion "BST Node Deletion")BST Node Deletion

We know how to insert and search for value. Now, we are going to implement the delete operation. It's a little trickier than adding, so let's explain it with the following cases:

**Deleting a leaf node (0 children)**

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span>    30                             30</span><br><span> /     \         remove(12)     /     \</span><br><span>10      40       ---------&gt;    10      40</span><br><span>  \    /  \                      \    /  \</span><br><span>  15  35   50                    15  35   50</span><br><span>  /</span><br><span>12*</span><br></pre></td></tr></tbody></table>

We just remove the reference from node's parent (15) to be null.

**Deleting a node with one child.**

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>    30                              30</span><br><span> /     \         remove(10)      /     \</span><br><span>10*     40       ---------&gt;     15      40</span><br><span>  \    /  \                            /  \</span><br><span>  15  35   50                         35   50</span><br></pre></td></tr></tbody></table>

In this case, we go to the parent (30) and replace the child (10), with a child's child (15).

**Deleting a node with two children**

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>    30                              30</span><br><span> /     \         remove(40)      /     \</span><br><span>15      40*      ---------&gt;     15      50</span><br><span>       /  \                            /</span><br><span>      35   50                         35</span><br></pre></td></tr></tbody></table>

We are removing node 40, that has two children (35 and 50). We replace the parent's (30) child (40) with the child's right child (50). Then we keep the left child (35) in the same place it was before, so we have to make it the left child of 50.

Another way to do it to remove node 40, is to move the left child (35) up and then keep the right child (50) where it was.

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>    30</span><br><span> /     \</span><br><span>15      35</span><br><span>          \</span><br><span>           50</span><br></pre></td></tr></tbody></table>

Either way is ok as long as you keep the binary search tree property: `left < parent < right`.

**Deleting the root.**

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>   30*                            50</span><br><span> /     \       remove(30)      /     \</span><br><span>15      50     ---------&gt;     15      35</span><br><span>       /</span><br><span>      35</span><br></pre></td></tr></tbody></table>

Deleting the root is very similar to removing nodes with 0, 1, or 2 children that we discussed earlier. The only difference is that afterward, we need to update the reference of the root of the tree.

Here's an animation of what we discussed.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/bst-remove.gif "Removing a node with 0, 1, 2 children from a binary search tree")

In the animation, it moves up the left child/subtree and keeps the right child/subtree in place.

Now that we have a good idea how it should work, let's implement it:

BinarySearchTree.prototype.remove[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js#L89)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br></pre></td><td><pre><span>remove(value) {</span><br><span>  <span>const</span> nodeToRemove = <span>this</span>.find(value);</span><br><span>  <span>if</span> (!nodeToRemove) <span>return</span> <span>false</span>;</span><br><span></span><br><span>  </span><br><span>  <span>const</span> nodeToRemoveChildren = <span>this</span>.combineLeftIntoRightSubtree(nodeToRemove);</span><br><span></span><br><span>  <span>if</span> (nodeToRemove.meta.multiplicity &amp;&amp; nodeToRemove.meta.multiplicity &gt; <span>1</span>) {</span><br><span>    nodeToRemove.meta.multiplicity -= <span>1</span>; </span><br><span>  } <span>else</span> <span>if</span> (nodeToRemove === <span>this</span>.root) {</span><br><span>    </span><br><span>    <span>this</span>.root = nodeToRemoveChildren;</span><br><span>    <span>this</span>.root.parent = <span>null</span>; </span><br><span>  } <span>else</span> {</span><br><span>    <span>const</span> side = nodeToRemove.isParentLeftChild ? <span>'left'</span> : <span>'right'</span>;</span><br><span>    <span>const</span> { parent } = nodeToRemove; </span><br><span>    </span><br><span>    parent[side] = nodeToRemoveChildren;</span><br><span>  }</span><br><span></span><br><span>  <span>this</span>.size -= <span>1</span>;</span><br><span>  <span>return</span> <span>true</span>;</span><br><span>}</span><br></pre></td></tr></tbody></table>

Here are some highlights of the implementation:

- First, we search if the node exists. If it doesn't, we return false and we are done!
- If the node to remove exists, then combine left and right children into one subtree.
- Replace node to delete with the combined subtree.

The function that combines left into right subtree is the following:

BinarySearchTree.prototype.combineLeftIntoRightSubtree[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js#L89)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br></pre></td><td><pre><span>combineLeftIntoRightSubtree(node) {</span><br><span>  <span>if</span> (node.right) {</span><br><span>    <span>const</span> leftmost = <span>this</span>.getLeftmost(node.right);</span><br><span>    leftmost.left = node.left;</span><br><span>    <span>return</span> node.right;</span><br><span>  }</span><br><span>  <span>return</span> node.left;</span><br><span>}</span><br></pre></td></tr></tbody></table>

For instance, let's say that we want to combine the following tree and we are about to delete node `30`. We want to mix 30's left subtree into the right one. The result is this:

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span>   30*                             40</span><br><span> /     \                          /  \</span><br><span>10      40    combine(30)       35   50</span><br><span>  \    /  \   -----------&gt;      /</span><br><span>  15  35   50                  10</span><br><span>                                \</span><br><span>                                 15</span><br></pre></td></tr></tbody></table>

Now, and if we make the new subtree the root, then node `30` is no more!

## [](#Binary-Tree-Transversal "Binary Tree Transversal")Binary Tree Transversal

There are different ways of traversing a Binary Tree, depending on the order that the nodes are visited: in-order, pre-order, and post-order. Also, we can use them [DFS](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/#Depth-first-search-DFS-Graph-search) and [BFS](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/#Breadth-frirst-search-BFS-Graph-search) that we learned from the [graph post.](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/) Let's go through each one.

**In-Order Traversal**

In-order traversal visit nodes on this order: left, parent, right.

BinarySearchTree.prototype.inOrderTraversal[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>* inOrderTraversal(node = <span>this</span>.root) {</span><br><span>  <span>if</span> (node.left) { <span>yield</span>* <span>this</span>.inOrderTraversal(node.left); }</span><br><span>  <span>yield</span> node;</span><br><span>  <span>if</span> (node.right) { <span>yield</span>* <span>this</span>.inOrderTraversal(node.right); }</span><br><span>}</span><br></pre></td></tr></tbody></table>

Let's use this tree to make the example:

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span>         10</span><br><span>       /    \</span><br><span>      5      30</span><br><span>    /       /  \</span><br><span>   4       15   40</span><br><span> /</span><br><span>3</span><br></pre></td></tr></tbody></table>

In-order traversal would print out the following values: `3, 4, 5, 10, 15, 30, 40`. If the tree is a BST, then the nodes will be sorted in ascendent order as in our example.

**Post-Order Traversal**

Post-order traversal visit nodes on this order: left, right, parent.

BinarySearchTree.prototype.postOrderTraversal[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>* postOrderTraversal(node = <span>this</span>.root) {</span><br><span>  <span>if</span> (node.left) { <span>yield</span>* <span>this</span>.postOrderTraversal(node.left); }</span><br><span>  <span>if</span> (node.right) { <span>yield</span>* <span>this</span>.postOrderTraversal(node.right); }</span><br><span>  <span>yield</span> node;</span><br><span>}</span><br></pre></td></tr></tbody></table>

Post-order traversal would print out the following values: `3, 4, 5, 15, 40, 30, 10`.

**Pre-Order Traversal and DFS**

In-order traversal visit nodes on this order: parent, left, right.

BinarySearchTree.prototype.preOrderTraversal[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>* preOrderTraversal(node = <span>this</span>.root) {</span><br><span>  <span>yield</span> node;</span><br><span>  <span>if</span> (node.left) { <span>yield</span>* <span>this</span>.preOrderTraversal(node.left); }</span><br><span>  <span>if</span> (node.right) { <span>yield</span>* <span>this</span>.preOrderTraversal(node.right); }</span><br><span>}</span><br></pre></td></tr></tbody></table>

Pre-order traversal would print out the following values: `10, 5, 4, 3, 30, 15, 40`. This order of numbers is the same result that we would get if we run the Depth-First Search (DFS).

BinarySearchTree.prototype.dfs[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br></pre></td><td><pre><span>* dfs() {</span><br><span>  <span>const</span> stack = <span>new</span> Stack();</span><br><span></span><br><span>  stack.add(<span>this</span>.root);</span><br><span></span><br><span>  <span>while</span> (!stack.isEmpty()) {</span><br><span>    <span>const</span> node = stack.remove();</span><br><span>    <span>yield</span> node;</span><br><span>    </span><br><span>    node.descendents.reverse().forEach(<span><span>child</span> =&gt;</span> stack.add(child));</span><br><span>  }</span><br><span>}</span><br></pre></td></tr></tbody></table>

If you need a refresher on DFS, we covered in details on [Graph post](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/#Depth-first-search-DFS-Graph-search).

**Breadth-First Search (BFS)**

Similar to DFS, we can implement a BFS by switching the `Stack` by a `Queue`:

BinarySearchTree.prototype.bfs[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br></pre></td><td><pre><span>* bfs() {</span><br><span>  <span>const</span> queue = <span>new</span> Queue();</span><br><span></span><br><span>  queue.add(<span>this</span>.root);</span><br><span></span><br><span>  <span>while</span> (!queue.isEmpty()) {</span><br><span>    <span>const</span> node = queue.remove();</span><br><span>    <span>yield</span> node;</span><br><span>    node.descendents.forEach(<span><span>child</span> =&gt;</span> queue.add(child));</span><br><span>  }</span><br><span>}</span><br></pre></td></tr></tbody></table>

The BFS order is: `10, 5, 30, 4, 15, 40, 3`

## [](#Balanced-vs-Non-balanced-Trees "Balanced vs. Non-balanced Trees")Balanced vs. Non-balanced Trees

So far, we have discussed how to `add`, `remove` and `find` elements. However, we haven't talked about runtimes. Let's think about the worst-case scenarios.

Let's say that we want to add numbers in ascending order.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/bst-asc.gif "Inserting values in ascending order in a Binary Search Tree")

We will end up with all the nodes on the left side! This unbalanced tree is no better than a LinkedList, so finding an element would take _O(n)_. 😱

Looking for something in an unbalanced tree is like looking for a word in the dictionary page by page. When the tree is balanced, you can open the dictionary in the middle and from there you know if you have to go left or right depending on the alphabet and the word you are looking for.

We need to find a way to balance the tree!

If the tree was **balanced**, then we could find elements in _O(log n)_ instead of going through each node. Let's talk about what balanced tree means.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/balanced-vs-non-balanced-tree.jpg "Balanced vs unbalanced Tree")

If we are searching for `7` in the non-balanced tree, we have to go from 1 to 7. However, in the balanced tree, we visit: `4`, `6`, and `7`. It gets even worse with larger trees. If you have one million nodes, searching for a non-existing element might require to visit all million while on a balanced tree it just requires 20 visits! That's a huge difference!

We are going to solve this issue in the next post using self-balanced trees (AVL trees).

## Big O Notation

### time complexity

it allow us to talk formally about how the runtime of an algorithm grows as the input grows.

n = number of operation the computer has to do can be:
f(n) = n
f(n) = n^2
f(n) = 1

f(n) = could be something entirely different !

O(n):

```javascript
function addUpToSimple(n: number) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}
```

O(1):

```javascript
function addUpComplex(n: number) {
  return (n * (n + 1)) / 2;
}
```

O(n): maybe thinking O(2n) but we see big picture! BigONotation doesn't care about precision only about general trends _linear? quadric? constant?_

```javascript
function printUpAndDown(n: number) {
  console.log("Going up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Going down");
  for (let j = n - 1; j > 0; j--) {
    console.log(j);
  }
}
```

O(n^2)

```javascript
function printAllPairs(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = 0; j < n; j++) {
      console.log(j);
    }
  }
}
```

O(n) : cuz as soon as n grows complexity grows too

```javascript
function logAtLeastFive(n: number) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
```

O(1)

```javascript
function logAtMostFive(n: number) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```

### space complexity

Rules of Thumb

- <==(_**most primitive booleans numbers undefined null are constant space**_)==>.
- <==(_\*\*strings and reference types like objects an arrays require O(n) space \_n is string length or number of keys_\*\*\_)==>

O(1)

```javascript
function sum(arr: number[]) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
}
```

O(n)

```javascript
function double(arr: number[]) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] * 2);
  }
  return newArr;
}
```

### quick note around object, array through BigO lens!

- object:

```javascript
const person = { name: "John", age: 22, hobbies: ["reading", "sleeping"] };

Object.keys(person); // ["name", "age", "hobbies"] --->              O(n)
Object.values(person); // ["John", 22, Array(2)]--->                 O(n)
Object.entries(person); // [Array(2), Array(2), Array(2)]--->        O(n)
person.hasOwnProperty("name"); // true --->                          O(1)
```

- array:
  **_push() and pop()_ are always faster than _unshift() and shift()_ because inserting or removing element from beginning of an array requires reIndexing all elements**

## Common Patterns

```javascript
function binarySearch(sortedArr: number[], value: number): number {
  let min = 0;
  let max = sortedArr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (sortedArr[middle] < value) {
      min = middle + 1;
    } else if (sortedArr[middle] > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```

## Recursion

a process that calls itself

quick note around callStack

```javascript
function wakeUp() {
  // callStack [wakeUp]
  takeShower();
  eatBreakfast();
  console.log("Ready to go ... ");
} // callStack []

function takeShower() {
  // callStack [takeShower, wakeUp]
  console.log("taking shower");
} // callStack[wakeUp]

function eatBreakfast() {
  // callStack [eatBreakfast, wakeUp]
  const meal = cookBreakFast();
  console.log(`eating ${meal}`);
} // callStack [wakeUp]

function cookBreakFast() {
  // callStack [cookBreakFast, eatBreakfast, wakeUp]
  const meals = ["Cheese", "Protein Shake", "Coffee"];
  return meals[Math.floor(Math.random() * meals.length)]; // callStack [eatBreakFast, wakeUp]
}

wakeUp();
```

two essential part of recursive functions

- **base case : end of the line**
- **different input : recursive should call by different piece of data**

```javascript
function sumRange(num: number) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num: number) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

helper method recursion vs pure recursion

```javascript
// helper method recursion approach
function collectOdd(arr: number[]) {
  const result = [];

  function helper(helperArr: number[]) {
    if (!helperArr.length) {
      return;
    }

    if (helperArr[0] % 2 !== 0) {
      result.push(helperArr[0]);
    }

    helper(helperArr.slice(1));
  }

  helper(arr);

  return result;
}

// pure recursion approach
function collectOdd(arr: number[]): number[] {
  let result = [];

  if (!arr.length) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  result = collectOdd(result.concat(arr.slice(1)));
  return result;
}
```

## Searching Algorithms

### linear search

_indexOf() includes() find() findIndex()_ all this methods doing linear search behind the scene

O(n)

```javascript
function linearSearch(arr: number[], value: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
    return -1;
  }
}
```

### binary search

O(Log n)

```javascript
function binarySearch(sortedArr: number[], value: number): number {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const middle = Math.round((right + left) / 2);

    if (sortedArr[middle] > value) {
      right = middle - 1;
    } else if (sortedArr[middle] < value) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```

## Sorting Algorithms

### array.sort()

array.sort(cb) will turn all values to _string_ then sort it based on it's _unicode_

```javascript
["a", "c", "b", "f", "d"].sort(); // (5) ["a", "b", "c", "d", "f"]
[1, 10, 6, 8, 2, 3, 5].sort(); //(7) [1, 10, 2, 3, 5, 6, 8]

/* 
also receive callback function by two arguments:
    a: previous number 
    b: next number 

*/
// if callback return NEGATIVE number a will placed before b
[1, 10, 6, 8, 2, 3, 5].sort((a, b) => a - b); // (7) [1, 2, 3, 5, 6, 8, 10]

// if callback return POSITIVE number a will placed after b
(7)[(1, 2, 3, 5, 6, 8, 10)].sort((a, b) => b - a); // (7) [10, 8, 6, 5, 3, 2, 1]

// if callback return ZERO a and b will placed at the same position
```

## Quadric

### bubble sort

general: O(n^2)
nearlySortedData: O(n)

```javascript
function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

// or

function bubbleSort(arr: number[]): number[] {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}
```

### selection sort

O(n^2)

```javascript
function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
```

### insertion sort

general: O(n^2)
nearlySortedData: O(n)

```javascript
function insertionSort(arr) {
  var currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```

### quadric sorting algorithms comparison

|   Algorithm    | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| :------------: | :--------------------: | :-----------------------: | :---------------------: | :--------------: |
|  bubble sort   |          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
| insertion sort |          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
| selection sort |         O(n^2)         |          O(n^2)           |         O(n^2)          |       O(1)       |

## Fancy

### merge sort

O(n Log n)

```javascript
// merge two sorted array
function merge(arr1: number[], arr2: number[]): number[] {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}
```

### quick sort

![](./assets/Quicksort.gif)

in following implementation we always assume _first item_ as pivot

general: O(n Log n)
sorted: O(n^2)

```javascript
// place pivot in the right index and return pivot index
function pivot(arr: number[], start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
}

function quickSort(arr: number[], start = 0, end = arr.length - 1) {
  if (left < right) {
    const pivot = pivot(arr, start, end);

    // left
    quickSort(arr, start, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}
```

### radix sort

O(nk)
n: the number of items we sorting
k: average length of those numbers

```javascript
// get the actual number at the given index
function getDigit(num: number, i: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// get number length
function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// return number by most length
function mostDigits(arr: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}
function radixSort(arr: number[]): number[] {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      digitBuckets[getDigit(arr[j], k)].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }
  return arr;
}
```

### fancy sorting algorithms comparison

| Algorithm  | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| :--------: | :--------------------: | :-----------------------: | :---------------------: | :--------------: |
| merge sort |       O(n Log n)       |        O(n Log n)         |       O(n Log n)        |       O(n)       |
| quick sort |       O(n Log n)       |        O(n Log n)         |         O(n^2)          |     O(Log n)     |
| radix sort |         O(nk)          |           O(nk)           |          O(nk)          |     O(n + k)     |

## Data Structure

### complexity comparison

|   DataStructure    | Insertion |                         Removal                          |                 Searching                 | Access |
| :----------------: | :-------: | :------------------------------------------------------: | :---------------------------------------: | :----: |
| Singly Linked List |   O(1)    | bestCase(very beginning): O(1) worstCase(very end): O(n) |                   O(n)                    |  O(n)  |
| Doubly Linked List |   O(1)    |                           O(1)                           | O(n) it is faster than Singly Linked List |  O(n)  |
|       Stack        |   O(1)    |                           O(1)                           |                   O(n)                    |  O(n)  |
|       Queue        |   O(1)    |                           O(1)                           |                   O(n)                    |  O(n)  |
| Binary Search Tree | O( Log n) |                            -                             |                 O(Log n)                  |   -    |
|    Binary Heap     | O( Log n) |                        O( Log n)                         |                  O( n )                   |   -    |
|    Hash Tables     |  O( 1 )   |                          O( 1 )                          |                     -                     | O( 1 ) |

## Singly Linked list

```javascript
class _Node {
    constructor(public value: any) {}
    public next: _Node | null = null;
}

class SinglyLinkedList {
    private _length: number = 0;
    private head: _Node | null = null;
    private tail: _Node | null = null;

    get length() {
        return this._length;
    }

    get print(): null | _Node[] {
        if (!this._length) return null;

        const arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    public push(value: any): SinglyLinkedList {
        const node = new _Node(value);

        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this._length += 1;

        return this;
    }

    public pop(): _Node | null {
        if (!this.head) return null;

        let currentNode = this.head;

        if (!currentNode.next) {
            this.head = null;
            this.tail = null;
            this._length -= 1;
            return currentNode;
        }
        while (currentNode.next && currentNode.next.next) {
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
        this.tail.next = null;
        this._length -= 1;
        return currentNode.next as _Node;
    }

    public unShift(value: any): SinglyLinkedList {
        const currentHead = this.head;

        this.head = new _Node(value);

        if (currentHead) {
            this.head.next = currentHead;
        } else {
            this.tail = this.head;
        }
        this._length += 1;
        return this;
    }

    public shift(): _Node | null {
        if (!this.head) return null;

        const currentHead = this.head;
        this.head = currentHead.next;
        this._length -= 1;

        if (currentHead === this.tail) this.tail = null;

        return currentHead;
    }

    public get(index: number): _Node | null {
        if (index < 0 || index >= this._length) return null;

        let currentNode = this.head;
        for (let j = 0; j < index; j++) {
            if (currentNode && currentNode.next) {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }

    public set(index: number, value: any): _Node | null {
        const node = this.get(index);
        if (node) {
            node.value = value;
        }
        return node;
    }

    public insert(index: number, value: any): SinglyLinkedList | null {
        if (index < 0 || index >= this._length) {
            return null;
        } else if (index === 0) {
            return this.unShift(value);
        } else if (index === this._length) {
            return this.push(value);
        } else {
            const prevNode = this.get(index - 1);

            if (prevNode) {
                const newNode = new _Node(value);
                newNode.next = prevNode.next;
                prevNode.next = newNode;
                this._length += 1;

                return this;
            }
            return prevNode;
        }
    }

    public remove(index: number): _Node | null {
        if (index === 0) {
            return this.shift();
        } else if (index === this._length - 1) {
            return this.pop();
        } else {
            const prevNode = this.get(index - 1);
            const currentNode = this.get(index);
            if (prevNode && currentNode) {
                prevNode.next = currentNode.next;
                this._length -= 1;
            }
            return currentNode;
        }
    }

    public reverse(): SinglyLinkedList | false {
        if (this._length <= 1) return false;

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next: _Node | null;
        let prev: _Node | null = null;
        for (let i = 0; i < this._length; i++) {
            if (node) {
                next = node.next;
                node.next = prev;
                prev = node;
                node = next;
            }
        }
        return this;
    }
}
```

## Doubly Linked List

```javascript
class _Node {
    public next: _Node | null = null;
    public prev: _Node | null = null;

    constructor(public value: any) {}
}

class DoublyLinkedList {
    private head: _Node | null = null;
    private tail: _Node | null = null;

    private _length = 0;

    get length() {
        return this._length;
    }

    get print(): null | _Node[] {
        if (!this._length) return null;

        const arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    public push(value: any): DoublyLinkedList {
        const node = new _Node(value);

        if (!this.tail) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this._length += 1;
        this.tail = node;

        return this;
    }

    public pop(): _Node | null {
        if (!this.tail) {
            return null;
        }

        const currentTail = this.tail;
        if (currentTail.prev) {
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        this._length -= 1;
        return currentTail;
    }

    public shift(): null | _Node {
        if (!this.head) {
            return null;
        }

        const currentHead = this.head;
        if (currentHead.next) {
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.next = null;
        } else {
            return this.pop();
        }

        this._length -= 1;
        return currentHead;
    }

    public unshift(value: any): DoublyLinkedList {
        if (!this.head) {
            return this.push(value);
        }

        const node = new _Node(value);
        const currentHead = this.head;

        this.head = node;
        this.head.next = currentHead;
        currentHead.prev = this.head;

        this._length += 1;
        return this;
    }

    public get(index: number): null | _Node {
        if (index < 0 || index >= this._length) return null;

        let currentNode: _Node | null = null;

        if (index < Math.floor(this._length / 2)) {
            // iterate from head to tail

            currentNode = this.head;
            for (let i = 0; i < index; i++) {
                if (currentNode && currentNode.next) {
                    currentNode = currentNode.next;
                }
            }
        } else {
            // iterate from tail to head

            currentNode = this.tail;
            for (let i = this._length - 1; i > index; i--) {
                if (currentNode && currentNode.prev) {
                    currentNode = currentNode.prev;
                }
                return currentNode;
            }
        }

        return currentNode;
    }

    public set(index: number, value: any): _Node | null {
        const node = this.get(index);
        if (node) {
            node.value = value;
        }
        return node;
    }

    public insert(index: number, value: any): DoublyLinkedList | null {
        if (index < 0 || index > this._length) {
            return null;
        } else if (index === 0) {
            return this.unshift(value);
        } else if (index === this._length) {
            return this.push(value);
        } else {
            const prevNode = this.get(index - 1);
            const nextNode = this.get(index);

            if (prevNode && nextNode) {
                const newNode = new _Node(value);

                prevNode.next = newNode;
                (newNode.prev = prevNode), (newNode.next = nextNode);
                nextNode.prev = newNode;
            }
        }
        this._length += 1;
        return this;
    }

    public remove(index: number): DoublyLinkedList | null {
        if (index < 0 || index > this._length) {
            return null;
        } else if (index === 0) {
            this.shift();
        } else if (index === this._length - 1) {
            this.pop();
        } else {
            const node = this.get(index);

            if (node && node.prev && node.next) {
                (node.prev.next = node.next), (node.next.prev = node.prev);
                (node.next = null), (node.prev = null);
            }
            this._length -= 1;
        }
        return this;
    }
}
```

## Stacks

LIFO
last in first out

```javascript
// implement stack using array
const stack = [1, 2, 3];
stack.push(4); // [1,2,3,4]
stack.pop(); // [1,2,3]
// stacks just have push and pop
stack.unshift(0); // [0,1,2,3]
stack.shift(); // [1,2,3]
```

```javascript
// implementing stack using singly linked list
class _Node {
    public next: _Node | null = null;

    constructor(public value: any) {}
}

class Stack {
    private first: _Node | null = null;
    private last: _Node | null = null;

    private _length = 0;
    get length(): number {
        return this._length;
    }

    push(value: any): Stack {
        const node = new _Node(value);
        const currentFirst = this.first;

        (this.first = node), (this.first.next = currentFirst);

        if (!currentFirst) {
            this.last = node;
        }

        this._length += 1;
        return this;
    }

    pop(): _Node | null {
        const currentFirst = this.first;
        if (currentFirst) {
            if (this.first === this.last) this.last = currentFirst.next;
            this.first = currentFirst.next;
            this._length -= 1;
        }
        return currentFirst;
    }
}
```

## Queue

FIFO
first in first out

```javascript
// implementing queue using array
const q = [];
q.push(1);
q.push(2);
q.shift(1); // out first items first
// or
q.shift(1);
q.shift(2);
q.pop(); // out first items first
```

```javascript
// implementing queue using singly linked list
class _Node {
    public next: _Node | null = null;

    constructor(public value: any) {}
}

class Queue {
    private first: _Node | null = null;
    private last: _Node | null = null;

    private _length = 0;
    get length(): number {
        return this._length;
    }

    enqueue(value: any): Queue {
        const node = new _Node(value);
        if (!this.last) {
            (this.first = node), (this.last = node);
        } else {
            this.last.next = node;
            this.last = node;
        }

        this._length += 1;
        return this;
    }

    dequeue(): _Node | null {
        const currentFirst = this.first;
        if (currentFirst) {
            if (this.first === this.last) this.last = null;
            this.first = currentFirst.next;
            this._length -= 1;
        }

        return currentFirst;
    }
}
```

## Tree

### terminology

- root : top node of tree
- child : a node directly connected to another node when moving away from root
- parent : the converse notion of a child
- sibling : a group of nodes with the same parent
- leaf : a child with no children
- edge : connection from two node

### binary search tree

- every parent node has at most **two** children
- every node to the **left** of parent node is always **less** than the **parent**
- every node to the **right** of parent node is always **greater** than the **parent**

```javascript
class _Node {
    constructor(public value: number) {}

    public left: _Node | null = null;
    public right: _Node | null = null;
}
class BinarySearchTree {
    public root: _Node | null = null;

    public insert(value: number): BinarySearchTree | null {
        const node = new _Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let currentNode: _Node = this.root;
            do {
                if (value === currentNode.value) return null;

                if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = node;
                        break;
                    }
                } else {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = node;
                        break;
                    }
                }
            } while (currentNode);
        }
        return this;
    }

    public have(value: number): boolean {
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            } else {
                if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                        continue;
                    }
                    break;
                } else {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                        continue;
                    }
                    break;
                }
            }
        }
        return false;
    }
}
```

### tree traversal

there is two main strategies to traversal a tree : **Breadth-first-search** and **Depth-first-search**

```javascript
class _Node {
    constructor(public value: number) {}

    public left: _Node | null = null;
    public right: _Node | null = null;
}
class BinarySearchTree {
    public root: _Node | null = null;

    public insert(value: number): BinarySearchTree | null {
        const node = new _Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let currentNode: _Node = this.root;
            do {
                if (value === currentNode.value) return null;

                if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = node;
                        break;
                    }
                } else {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = node;
                        break;
                    }
                }
            } while (currentNode);
        }
        return this;
    }

    public have(value: number): boolean {
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            } else {
                if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    }
                    break;
                } else {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                        continue;
                    }
                    break;
                }
            }
        }
        return false;
    }
    /*
    breadth first search (bfs) : traverse tree horizontally
*/
    public bfs(): _Node[] {
        const visited: _Node[] = [];
        if (this.root) {
            const q: _Node[] = [this.root];
            while (q.length) {
                if (q[0].left) q.push(q[0].left);
                if (q[0].right) q.push(q[0].right);

                visited.push(q[0]), q.shift();
            }
        }
        return visited;
    }
    /*
    depth first search (dfs) : traverse tree vertically
    following contains three dfs searching methods:
    1. preOrder : add node => going to left and add left => going to right and add right
    2. postOrder : going to left and add left => going to right and add right => going to node and add node
    3. inOrder : going to the left and add left => add node => going to the right and add right
     */
    public dfsPreOrder(): _Node[] {
        const visited: _Node[] = [];
        if (this.root) {
            (function traverse(node: _Node): void {
                visited.push(node);

                if (node.left) {
                    traverse(node.left);
                }
                if (node.right) {
                    traverse(node.right);
                }
            })(this.root);
        }

        return visited;
    }

    public dfsPostOrder(): _Node[] {
        const visited: _Node[] = [];

        if (this.root) {
            (function traverse(node: _Node): void {
                if (node.left) {
                    traverse(node.left);
                }
                if (node.right) {
                    traverse(node.right);
                }

                visited.push(node);
            })(this.root);
        }
        return visited;
    }

    dfsInOrder(): _Node[] {
        const visited: _Node[] = [];

        if (this.root) {
            (function traverse(node: _Node) {
                if (node.left) {
                    traverse(node.left);
                }

                visited.push(node);
                f;

                if (node.right) {
                    traverse(node.right);
                }
            })(this.root);
        }

        return visited;
    }
}
```

### traversal comparison

**depth-first** _vs_ **breadth-first** : they both **timeComplexity is same** but **spaceComplexity is different** if we got **a wide tree** like this:

![](./assets/Z20M5iE.png)

**breadth-first take up more space.** cuz we adding more element to queue.

if we got **a depth long tree** like this:

**depth-first take up more space.**

<hr/>

**potentially use cases for dfs variants (_preOder postOrder inOrder_)**
preOrder is useful when we want a clone of tree.
inOrder is useful when we want data in order that it's stored in tree.

## Binary heaps

### terminology

- a binary heap is as compact as possible (all the children of each node are as full as they can be and left children and filled out first)
- each parent has at most two children

**Max Binary Heap**:

- **parent** nodes are always greater than **child** nodes but there is no guarantees between sibling

**Min Binary Heap**:

- **child** nodes are always greater than **parent** nodes but there is no guarantees between sibling

### binary heap parent and child relations

```javascript
class MaxBinaryHeap {
    private _values: number[] = [];
    get values(): number[] {
        return this._values;
    }

    private sinkingUp(value: number): void {
        let valueIndex = this._values.length - 1;
        while (valueIndex > 0) {
            const parentIndex = Math.floor((valueIndex - 1) / 2);
            const parent = this._values[parentIndex];

            if (value <= parent) break;

            this._values[parentIndex] = value;
            this._values[valueIndex] = parent;

            valueIndex = parentIndex;
        }
    }
    private sinkingDown(): void {
        let targetIndex = 0;
        while (true) {
            let leftChildIndex = targetIndex * 2 + 1,
                rightChildIndex = targetIndex * 2 + 2;

            let target = this._values[targetIndex],
                leftChild = this._values[leftChildIndex],
                rightChild = this._values[rightChildIndex];

            if (target < leftChild && target < rightChild) {
                if (rightChild > leftChild) {
                    [
                        this._values[targetIndex],
                        this._values[rightChildIndex]
                    ] = [
                        this._values[rightChildIndex],
                        this._values[targetIndex]
                    ];

                    targetIndex = rightChildIndex;
                } else {
                    [
                        this._values[targetIndex],
                        this._values[leftChildIndex]
                    ] = [
                        this._values[leftChildIndex],
                        this._values[targetIndex]
                    ];

                    targetIndex = leftChildIndex;
                }

                continue;
            } else if (rightChild >= target) {
                [this._values[targetIndex], this._values[rightChildIndex]] = [
                    this._values[rightChildIndex],
                    this._values[targetIndex]
                ];

                targetIndex = leftChildIndex;

                continue;
            } else if (leftChild >= target) {
                [this._values[targetIndex], this._values[leftChildIndex]] = [
                    this._values[leftChildIndex],
                    this._values[targetIndex]
                ];

                targetIndex = leftChildIndex;

                continue;
            }

            break;
        }
    }

    public insert(value: number): number[] {
        this._values.push(value);
        this.sinkingUp(value);
        return this._values;
    }

    public extractMax(): number | null {
        if (!this._values.length) {
            return null;
        }
        const root = this._values[0];
        this._values[0] = this._values[this._values.length - 1];
        this._values.pop();
        this.sinkingDown();

        return root;
    }
}
```

## Priority Queue

A data structure which every element has a priority.
Elements with higher priorities are served before elements with lower priorities.

**In the following example, we implemented a priority queue using minBinaryHeap but you should know binaryHeaps and priority queue is two different concepts and we just use an abstract of it**

```javascript
interface INode {
    value: any;
    priority: number;
}

class _Node implements INode {
    constructor(public value: any, public priority: number = 0) {}
}

class PriorityQueue {
    private _values: INode[] = [];
    get values(): INode[] {
        return this._values;
    }

    private sinkingUp(node: INode): void {
        let valueIndex = this._values.length - 1;
        while (valueIndex > 0) {
            const parentIndex = Math.floor((valueIndex - 1) / 2);
            const parent = this._values[parentIndex];

            if (node.priority >= parent.priority) break;

            this._values[parentIndex] = node;
            this._values[valueIndex] = parent;

            valueIndex = parentIndex;
        }
    }
    private sinkingDown(): void {
        let targetIndex = 0;
        while (true) {
            let leftChildIndex = targetIndex * 2 + 1,
                rightChildIndex = targetIndex * 2 + 2;

            let target = this._values[targetIndex],
                leftChild = this._values[leftChildIndex],
                rightChild = this._values[rightChildIndex];

            if (
                leftChild &&
                rightChild &&
                target.priority > leftChild.priority &&
                target.priority > rightChild.priority
            ) {
                if (rightChild.priority < leftChild.priority) {
                    [
                        this._values[targetIndex],
                        this._values[rightChildIndex]
                    ] = [
                        this._values[rightChildIndex],
                        this._values[targetIndex]
                    ];

                    targetIndex = rightChildIndex;
                } else {
                    [
                        this._values[targetIndex],
                        this._values[leftChildIndex]
                    ] = [
                        this._values[leftChildIndex],
                        this._values[targetIndex]
                    ];

                    targetIndex = leftChildIndex;
                }

                continue;
            } else if (rightChild && rightChild.priority <= target.priority) {
                [this._values[targetIndex], this._values[rightChildIndex]] = [
                    this._values[rightChildIndex],
                    this._values[targetIndex]
                ];

                targetIndex = leftChildIndex;

                continue;
            } else if (leftChild && leftChild.priority <= target.priority) {
                [this._values[targetIndex], this._values[leftChildIndex]] = [
                    this._values[leftChildIndex],
                    this._values[targetIndex]
                ];

                targetIndex = leftChildIndex;

                continue;
            }

            break;
        }
    }

    public enqueue({ value, priority }: INode): _Node[] {
        const node = new _Node(value, priority);
        this._values.push(node);
        this.sinkingUp(node);
        return this._values;
    }

    public dequeue(): _Node | null {
        if (!this._values.length) {
            return null;
        }
        const root = this._values[0];
        this._values[0] = this._values[this._values.length - 1];
        this._values.pop();
        this.sinkingDown();

        return root;
    }
}
```

## Hash Tables

Hash tables are collection of key-value pairs

### collisions

There is possibility for handle collisions is hash tables :

- Separate chaining ( e.g. using nested arrays of key values _implemented in following hash tables_ )
- linear probing ( if index filled place {key, value} in next position )

```javascript
type El = [string, any];
class HashTable {
    private keyMap: El[][];
    constructor(size: number = 53) {
        this.keyMap = new Array(size);
    }

    public _hash(key: string): number {
        let total = 0;
        const WEIRD_PRIME = 31;

        for (let i = 0; i < key.length; i++) {
            const characterCode = key.charCodeAt(i) - 96;
            total = (total + characterCode * WEIRD_PRIME) % this.keyMap.length;
        }
        return total;
    }

    set(key: string, value: any): El[][] {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);

        return this.keyMap;
    }

    get(key: string): El | undefined {
        const index = this._hash(key);

        const elements = this.keyMap[index];

        if (elements) {
            for (let value of elements) {
                if (value[0] === key) return value[1];
            }
        }

        return undefined;
    }

    get keys(): string[] {
        const keys: string[] = [];
        for (let value of this.keyMap) {
            if (value) {
                for (let _value of value) {
                    keys.push(_value[0]);
                }
            }
        }
        return keys;
    }

    get values(): any[] {
        const values = new Set<any>();

        for (let value of this.keyMap) {
            if (value) {
                for (let _value of value) {
                    values.add(value[1]);
                }
            }
        }

        return [...values];
    }
}
```

## Graphs

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for directed graph.

### terminology

- vertex :node

- edge : connection between nodes

- directed/ undirected graph:
  in directed graph there is a direction assigned to vertices an in undirected no direction assigned.

- weighted/ unweighted graph:
  in weighted graph there is a weight associated by edges but in unweighted graph no weight assigned to edges
  ![](./assets/3.-Weithened-Graph.png)

### adjacency matrix

![](./assets/GahiR.jpg)

## adjacency list

![](./assets/268857bd-bb32-4fa5-88c9-66d7787952e9.png)

## adjacency list vs adjacency matrix

|   Operation   | Adjacency List | Adjacency Matrix |
| :-----------: | :------------: | :--------------: |
|  Add vertex   |      O(1)      |      O(V^2)      |
|   Add Edge    |      O(1)      |       O(1)       |
| Remove vertex |     O(V+E)     |      O(V^2)      |
|  Remove Edge  |      O(E)      |       O(1)       |
|     Query     |     O(V+E)     |       O(1)       |
|    Storage    |     O(V+E)     |      O(V^2)      |

- |V| : number of Vertices
- |E| : number of Edges

<hr/>

- **Adjacency List** take **less space** in sparse graph( when we have a few edges ).
- **Adjacency List** are **faster to iterate** over edges.
- **Adjacency Matrix** are **faster to** finding a specific edge.

### graph(adjacency list)

```javascript
interface AdjacencyList {
    [vertex: string]: string[];
}

class Graph {
    private _adjacencyList: AdjacencyList = {};
    public get adjacencyList(): AdjacencyList {
        return this._adjacencyList;
    }
    public set adjacencyList(value: AdjacencyList) {
        this._adjacencyList = value;
    }

    public addVertex(vertex: string): AdjacencyList {
        this._adjacencyList[vertex] = [];
        return this._adjacencyList;
    }

    public addEdge(vertex1: string, vertex2: string): boolean {
        if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
            this._adjacencyList[vertex1].push(vertex2),
                this._adjacencyList[vertex2].push(vertex1);

            return true;
        }
        return false;
    }

    public removeEdge(vertex1: string, vertex2: string): boolean {
        if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
            (this._adjacencyList[vertex1] = this._adjacencyList[vertex1].filter(
                (value: string) => value !== vertex2
            )),
                (this._adjacencyList[vertex2] = this._adjacencyList[
                    vertex2
                ].filter((value: string) => value !== vertex1));
            return true;
        }
        return false;
    }

    public removeVertex(vertex: string): string | undefined {
        if (this._adjacencyList[vertex]) {
            for (let key in this._adjacencyList) {
                this.removeEdge(key, vertex);
            }
            delete this._adjacencyList[vertex];

            return vertex;
        }
        return undefined;
    }
}
```

## Graph Traversal

### depth first traversal and breadth first traversal in graph

```javascript
interface AdjacencyList {
    [vertex: string]: string[];
}

class Graph {
    private _adjacencyList: AdjacencyList = {};
    public get adjacencyList(): AdjacencyList {
        return this._adjacencyList;
    }
    public set adjacencyList(value: AdjacencyList) {
        this._adjacencyList = value;
    }

    public addVertex(vertex: string): AdjacencyList {
        this._adjacencyList[vertex] = [];
        return this._adjacencyList;
    }

    public addEdge(vertex1: string, vertex2: string): boolean {
        if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
            this._adjacencyList[vertex1].push(vertex2),
                this._adjacencyList[vertex2].push(vertex1);

            return true;
        }
        return false;
    }

    public removeEdge(vertex1: string, vertex2: string): boolean {
        if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
            (this._adjacencyList[vertex1] = this._adjacencyList[vertex1].filter(
                (value: string) => value !== vertex2
            )),
                (this._adjacencyList[vertex2] = this._adjacencyList[
                    vertex2
                ].filter((value: string) => value !== vertex1));
            return true;
        }
        return false;
    }

    public removeVertex(vertex: string): string | undefined {
        if (this._adjacencyList[vertex]) {
            for (let key in this._adjacencyList) {
                this.removeEdge(key, vertex);
            }
            delete this._adjacencyList[vertex];

            return vertex;
        }
        return undefined;
    }

    public dfcRecursive(startingVertex: string): string[] {
        const results: string[] = [];
        const adjacencyList = this._adjacencyList;

        let currentVertex = this._adjacencyList[startingVertex];
        if (currentVertex) {
            const visitedVertex: { [vertex: string]: boolean } = {};

            (function traverse(vertex: string | undefined): void {
                if (!vertex) return;

                if (!visitedVertex[vertex]) {
                    visitedVertex[vertex] = true;
                    results.push(vertex);

                    for (let neighbor of currentVertex) {
                        if (!visitedVertex[neighbor]) {
                            currentVertex = adjacencyList[neighbor];
                            traverse(neighbor);
                        }
                    }
                }
            })(startingVertex);
        }

        return results;
    }
    // or
    public dfsIterative(startingVertex: string): string[] {
        const results: string[] = [];

        if (this._adjacencyList[startingVertex]) {
            let stack: string[] = [startingVertex];
            const visitedVertex: { [vertex: string]: boolean } = {};

            while (stack.length) {
                debugger;
                const currentVertex = stack.pop();
                if (currentVertex && !visitedVertex[currentVertex]) {
                    visitedVertex[currentVertex] = true;
                    results.push(currentVertex);
                    stack = [...stack, ...this._adjacencyList[currentVertex]];
                }
            }
        }

        return results;
    }

    public breadthFirstSearch(startingVertex: string): string[] {
        const results: string[] = [];

        if (this._adjacencyList[startingVertex]) {
            let queue = [startingVertex];
            const visitedVertex: { [vertex: string]: boolean } = {};

            while (queue.length) {
                const currentVertex = queue.shift();
                if (currentVertex && !visitedVertex[currentVertex]) {
                    visitedVertex[currentVertex] = true;
                    results.push(currentVertex);
                    queue = [...queue, ...this._adjacencyList[currentVertex]];
                }
            }
        }

        return results;
    }
}
```

## Dijkstra's Shortest path firt Algorithms

Finding shortest path between two vertices in a **weighted graph**.

![](./assets/Dijkstra_Animation.gif)

```javascript
interface Value {
    value: any;
    priority: number;
}

interface Neighbor {
    vertex: string;
    weight: number;
}

interface AdjacencyList {
    [vertex: string]: Neighbor[];
}

// naive priority queue
class PriorityQueue {
    private _values: Value[] = [];
    public get values(): Value[] {
        return this._values;
    }

    public enqueue(value: any, priority: number): Value[] {
        this._values.push({ value, priority });
        this.sort();
        return this._values;
    }

    public dequeue(): Value {
        const value = this._values.shift();
        return value as Value;
    }

    private sort() {
        this._values.sort((a: Value, b: Value) => a.priority - b.priority);
    }
}

class WeightedGraph {
    private _adjacencyList: AdjacencyList = {};
    public get adjacencyList(): AdjacencyList {
        return this._adjacencyList;
    }
    public set adjacencyList(value: AdjacencyList) {
        this._adjacencyList = value;
    }

    public addVertex(vertex: string): AdjacencyList {
        this._adjacencyList[vertex] = [];
        return this._adjacencyList;
    }

    public addEdge(vertex1: string, vertex2: string, weight: number): boolean {
        if (this._adjacencyList[vertex1]) {
            this._adjacencyList[vertex1].push({ vertex: vertex2, weight });
            this._adjacencyList[vertex2].push({ vertex: vertex1, weight });
            return true;
        }
        return false;
    }

    /*
    dijkstra shortest path first
    */

    dijkstraSPF(startingVertex: string, targetVertex: string): string[] {
        let path: string[] = [];

        if (
            this._adjacencyList[startingVertex] &&
            this._adjacencyList[targetVertex]
        ) {
            const pq = new PriorityQueue();
            const previousVertex: { [vertex: string]: string | null } = {};
            const distances: { [vertex: string]: number } = {};

            // build initial states
            for (let key in this._adjacencyList) {
                if (key === startingVertex) {
                    (distances[key] = 0), pq.enqueue(key, 0);
                } else {
                    distances[key] = Infinity;
                    pq.enqueue(key, Infinity);
                }
                previousVertex[key] = null;
            }

            while (pq.values.length) {
                let smallest = pq.dequeue().value;
                if (smallest) {
                    if (smallest === targetVertex) {
                        // done build path
                        while (
                            previousVertex[smallest] ||
                            smallest === startingVertex
                        ) {
                            path.push(smallest);
                            smallest = previousVertex[smallest];
                        }
                        break;
                    }

                    for (let neighbor of this._adjacencyList[smallest]) {
                        const candidate = distances[smallest] + neighbor.weight;

                        let nextNeighbor = neighbor.vertex;

                        if (candidate < distances[nextNeighbor]) {
                            distances[nextNeighbor] = candidate;

                            previousVertex[nextNeighbor] = smallest;

                            pq.enqueue(nextNeighbor, candidate);
                        }
                    }
                }
            }
        }

        return path.reverse();
    }
}
```

## Dynamic Programming (light introduction)

It's a method for solving a complex problems by breaking it down into a collection of simpler problems, solving their subProblems **once** and **storing** their solutions.
_technically it using knowledge of last problems to solve next by memorization_

### example Fibonacci sequence

Let's implement it without dynamic programming:without dynamic programming:

**_in fibonacci sequence fib(n) = fib(n-2) + fib(n-1) && fin(1) = 1 && fib(2) = 1_**

**O(2^n)**

```javascript
function fib(n: number): number {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```

![](./assets/2-Figure3.1-1.png)

As you see we calculate f(5) two times with current implementation.

### memorization

Storing the results of expensive function class and returning the cached result when the same inputs occur again.

O(n)

```javascript
function fib(n: number, memo: number[] = []): number {
  if (memo[n]) return memo[n];

  if (n <= 2) return 1;

  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}
fib(10000); // Maximum callStack exceeded
```

### tabulation

```javascript
function fib(n: number): number {
  if (n <= 2) return 1;

  const fibNumbers = [0, 1, 1];

  for (let index = 3; index <= n; index++) {
    fibNumbers[index] = fibNumbers[index - 1] + fibNumbers[index - 2];
  }

  console.log(fibNumbers);

  return fibNumbers[n];
}
fib(10000); // Infinity
```

## Interesting Stuff

```javascript
// turn it to boolean
console.log(!!1); // true
console.log(!!0); // false

// group operation
(newNode.prev = prevNode), (newNode.next = nextNode);
```

## String

```javascript
const str = "hello";
str.search('lo') || .indexOf('lo') // 3
str.includes('lo') // true
```

### string pattern matching

```javascript
// regex.test(str: number) Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
function charCount(str: string) {
  const result: { [key: string]: number } = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

// *** string.chatCodeAt(i: number) Returns the unicode of value on specified location

/* 
numeric (0-9) code > 47 && code < 58;
upper alpha (A-Z) code > 64 && code < 91;
lower alpha (a-z) code > 96 && code <123;
*/
function charCount(str: string) {
  const result: { [key: string]: number } = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

function isAlphaNumeric(char: string) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
```

## Array

```javascript
const array = ["hello", "world"];
arr.find((el) => el === "world"); // world
arr.findIndex((el) => el === "world"); // 1

[1, 2].includes(1); // true

Array.from({ length: 2 }, () => ["lol"]); // [["lol"], ["lol"]]

const stack = ["A", "B", "D", "E", "C", "F"];
const s = stack.shift();
const p = stack.pop();
console.log(s); // "A"
console.log(p); // "F"

["a", "b"].reverse(); // ['b', 'a']
```

### Object

```javascript
delete this._adjacencyList[vertex]; // delete key and value from object
delete this._adjacencyList.vertex;
```

### Map

```javascript
const map = new Map();
// store any type of **unique key** of use duplicate key it will override last value
map.set({ 1: "Object" }, "Object");
map.set(["arr"], "arr");
map.set(1, "number");
map.set(false, "boolean");
map.set(() => console.log("Function"), "Function");

console.log(map);
/* 
0: {Object => "Object"}
1: {Array(1) => "arr"}
2: {1 => "number"}
3: {false => "boolean"}
4: {function () { return console.log("Function"); } => "Function"}
*/

// iterable by **for (let [key, value] of map)**
for (let [key, value] of map) console.log(key, value);

// map to arr
const arr = [...map]; // :[ [key, value] ]
/* 
0: (2) [{…}, "Object"]
1: (2) [Array(1), "arr"]
2: (2) [1, "number"]
3: (2) [false, "boolean"]
4: (2) [ƒ, "Function"]
*/
```

## Math

```javascript
Math.pow(2, 2); // 4
Math.abs(-5); // 5
Math.log10(100); // 10
Math.max(...[1, 2, 3]); // 3
Math.min(...[1, 2, 3]); // 1
```

### [CONTENT/Resources/My-Data-Structures-Notes/Data-Structures-Concepts.md](CONTENT/Resources/My-Data-Structures-Notes/Data-Structures-Concepts.md)

#### Curated by Bryan Guner

## The idea behind big O notation

**Big O notation is the language we use for talking about how long an
algorithm takes to run**. It's how we compare the efficiency of
different approaches to a problem.

With big O notation we express the runtime in terms of

### how quickly it grows relative to the input, as the input gets arbitrarily large\_.

1.  **how quickly the runtime grows**—

It's hard to pin down the _exact runtime_ of an algorithm.

- It depends on the speed of the processor,
- what else the computer is running, etc.

So instead of talking about the runtime directly, we use big O notation to talk about _how quickly the runtime grows_.

2.  **relative to the input**—If we were measuring our runtime directly,

we could express our speed in seconds. Since we're measuring _how quickly our runtime grows_, we need to express our speed in terms of...something else. With Big O notation, we use the size of the input, which we call "n." So we can say things like the runtime grows "on the order of the size of the input" () or "on the order of the square of the size of the input" ().

3.  **as the input gets arbitrarily large**—

Our algorithm may have steps that seem expensive when n is small but are eclipsed eventually by other steps as n gets huge. For big O analysis, we care most about the stuff that grows fastest as the input grows, because everything else is quickly eclipsed as n gets very large. (If you know what an asymptote is, you might see why "big O analysis" is sometimes called "asymptotic analysis.")hy "big O analysis" is sometimes called

    "asymptotic analysis.")

---

---

# Data Structures Reference

---

## Array

Stores things in order. Has quick lookups by index.
![](arr1.png)
![](array.png)

## Linked List

![](queue.gif)

Also stores things in order. Faster insertions and deletions than
arrays, but slower lookups (you have to "walk down" the whole list).

!

## Queue

Like the line outside a busy restaurant. "First come, first served."
[](linked-list.png)
![](queue.png)

## Stack

![](stack.gif)
![](stack.png)
Like a stack of dirty plates in the sink. The first one you take off the
top is the last one you put down.

## Tree

Good for storing hierarchies. Each node can have "child" nodes.
![](tree.png)
![](leaves-depth-height.png)
![](traversals.png)
![](dfs.png)
![](pre-and-in-order-traversal.png)
![](post-order.png)

## Binary Search Tree

Everything in the left subtree is smaller than the current node,
everything in the right subtree is larger. lookups, but only if the tree
is balanced!
![](binary-tree.png)

## Binary Search Tree

## Graph

Good for storing networks, geography, social relationships, etc.
![](graph.png)
![](directed-or-undirected-cycles.png)
![](weighted-or-unweighted.png)

## Heap

A binary tree where the smallest value is always at the top. Use it to implement a priority queue.

![A binary heap is a binary tree where the nodes are organized to so that the smallest value is always at the top.]

### Adjacency list

A list where the index represents the node and the value at that index is a list of the node's neighbors:

graph = [ [1], [0, 2, 3], [1, 3], [1, 2], ]

Since node 3 has edges to nodes 1 and 2, graph[3] has the adjacency list [1, 2].

We could also use [a dictionary](https://www.interviewcake.com/concept/hash-map) where the keys represent the node and the values are the lists of neighbors.

graph = { 0: [1], 1: [0, 2, 3], 2: [1, 3], 3: [1, 2], }

This would be useful if the nodes were represented by strings, objects, or otherwise didn't map cleanly to list indices.

### Adjacency matrix

A matrix of 0s and 1s indicating whether node x connects to node y (0 means no, 1 means yes).

graph = [ [0, 1, 0, 0], [1, 0, 1, 1], [0, 1, 0, 1], [0, 1, 1, 0], ]

Since node 3 has edges to nodes 1 and 2, graph[3][1] and graph[3][2] have value 1.

a = LinkedListNode(5) b = LinkedListNode(1) c = LinkedListNode(9) a.next = b b.next = c

---

---

---

---

## Arrays

Ok, so we know how to store individual numbers. Let's talk about storing _several numbers_.

That's right, things are starting to _heat up_.

Suppose we wanted to keep a count of how many bottles of kombucha we drink every day.

Let's store each day's kombucha count in an 8-bit, fixed-width, unsigned integer. That should be plenty—we're not likely to get through more than 256 (2\^8) bottles in a _single day_, right?

And let's store the kombucha counts right next to each other in RAM, starting at memory address 0:

![A stack of RAM in which we store kombucha counts starting at index 0.](https://www.interviewcake.com/images/svgs/cs_for_hackers__array_kombucha_counts.svg?bust=209)

Bam. That's an **array**. RAM is _basically_ an array already.

Just like with RAM, the elements of an array are numbered. We call that number the **index** of the array element (plural: indices). In _this_ example, each array element's index is the same as its address in RAM.

But that's not usually true. Suppose another program like Spotify had already stored some information at memory address 2:

![A column of 9 RAM slots representing an array. The row at index 2 is highlighted because it is being used by Spotify.](https://www.interviewcake.com/images/svgs/cs_for_hackers__array5_occupied.svg?bust=209)

We'd have to start our array below it, for example at memory address 3. So index 0 in our array would be at memory address 3, and index 1 would be at memory address 4, etc.:

![A column of 9 RAM slots representing an array. The row at index 2 is highlighted, and the rows at indices 3 through 7 are selected with a bracket.](https://www.interviewcake.com/images/svgs/cs_for_hackers__array5.svg?bust=209)

Suppose we wanted to get the kombucha count at index 4 in our array. How do we figure out what _address in memory_ to go to? Simple math:

Take the array's starting address (3), add the index we're looking for (4), and that's the address of the item we're looking for. 3 + 4 = 7. In general, for getting the nth item in our array:

\\text{address of nth item in array} = \\text{address of array start} + n

This works out nicely because the size of the addressed memory slots and the size of each kombucha count are _both_ 1 byte. So a slot in our array corresponds to a slot in RAM.

But that's not always the case. In fact, it's _usually not_ the case. We _usually_ use _64-bit_ integers.

So how do we build an array of _64-bit_ (8 byte) integers on top of our _8-bit_ (1 byte) memory slots?

We simply give each array index _8_ address slots instead of 1:

![A column of RAM slots representing an array of 64-bit integers. Every 8 buckets of RAM represents one integer.](https://www.interviewcake.com/images/svgs/cs_for_hackers__array64_long.svg?bust=209)

So we can still use simple math to grab the start of the nth item in our array—just gotta throw in some multiplication:

\\text{address of nth item in array} = \\text{address of array start} + (n \* \\text{size of each item in bytes})

Don't worry—adding this multiplication doesn't really slow us down. Remember: addition, subtraction, multiplication, and division of fixed-width integers takes time. So _all_ the math we're using here to get the address of the nth item in the array takes time.

And remember how we said the memory controller has a _direct connection_ to each slot in RAM? That means we can read the stuff at any given memory address in time.

![A memory controller connected to a section of RAM.](https://www.interviewcake.com/images/svgs/cs_for_hackers__arrays_no_processor_ram_memory_controller.svg?bust=209)

**Together, this means looking up the contents of a given array index is time.** This fast lookup capability is the most important property of arrays.

But the formula we used to get the address of the nth item in our array only works _if_:

1.  **Each item in the array is the _same size_** (takes up the same

number of bytes).

2.  **The array is _uninterrupted_ (contiguous) in memory**. There can't

be any gaps in the array...like to "skip over" a memory slot Spotify was already using.

These things make our formula for finding the nth item _work_ because they make our array _predictable_. We can _predict_ exactly where in memory the nth element of our array will be.

But they also constrain what kinds of things we can put in an array. Every item has to be the same size. And if our array is going to store a _lot_ of stuff, we'll need a _bunch_ of uninterrupted free space in RAM. Which gets hard when most of our RAM is already occupied by other programs (like Spotify).

That's the tradeoff. Arrays have fast lookups ( time), but each item in the array needs to be the same size, and you need a big block of uninterrupted free memory to store the array.

---

---

---

---

## Pointers

Remember how we said every item in an array had to be the same size? Let's dig into that a little more.

Suppose we wanted to store a bunch of ideas for baby names. Because we've got some _really_ cute ones.

Each name is a string. Which is really an array. And now we want to store _those arrays_ in an array. _Whoa_.

Now, what if our baby names have different lengths? That'd violate our rule that all the items in an array need to be the same size!

We could put our baby names in arbitrarily large arrays (say, 13 characters each), and just use a special character to mark the end of the string within each array...

![Strings represented in RAM as arrays of 13 characters, with the end of the strings being denoted by a special "null" character. The last 8 rows are marked as wasted space because the name Bill (along with the null character) only takes up 5 out of 13 available characters.](https://www.interviewcake.com/images/svgs/cs_for_hackers__pointers_baby_names.svg?bust=209)

"Wigglesworth" is a cute baby name, right?

But look at all that wasted space after "Bill". And what if we wanted to store a string that was _more_ than 13 characters? We'd be out of luck.

There's a better way. Instead of storing the strings right inside our array, let's just put the strings wherever we can fit them in memory. Then we'll have each element in our array hold the _address in memory_ of its corresponding string. Each address is an integer, so really our outer array is just an array of integers. We can call each of these integers a **pointer**, since it points to another spot in memory.

![An array of names represented in RAM. The names are stored out of order, but an array holds the address in memory of each of name with arrows pointing from the number to the memory address.](https://www.interviewcake.com/images/svgs/cs_for_hackers__pointers_pointer_array.svg?bust=209)

The pointers are marked with a \* at the beginning.

Pretty clever, right? This fixes _both_ the disadvantages of arrays:

1.  The items don't have to be the same length—each string can be as

long or as short as we want.

2.  We don't need enough uninterrupted free memory to store all our

strings next to each other—we can place each of them separately, wherever there's space in RAM.

We fixed it! No more tradeoffs. Right?

Nope. Now we have a _new_ tradeoff:

Remember how the memory controller sends the contents of _nearby_ memory addresses to the processor with each read? And the processor caches them? So reading sequential addresses in RAM is _faster_ because we can get most of those reads right from the cache?

![A series of caches inside of the memory controller, where the processor stores what it has recently read from RAM.](https://www.interviewcake.com/images/svgs/cs_for_hackers__ram_cache.svg?bust=209)

Our original array was very **cache-friendly**, because everything was sequential. So reading from the 0th index, then the 1st index, then the 2nd, etc. got an extra speedup from the processor cache.

**But the pointers in this array make it _not_ cache-friendly**, because the baby names are scattered randomly around RAM. So reading from the 0th index, then the 1st index, etc. doesn't get that extra speedup from the cache.

That's the tradeoff. This pointer-based array requires less uninterrupted memory and can accommodate elements that aren't all the same size, _but_ it's _slower_ because it's not cache-friendly.

This slowdown isn't reflected in the big O time cost. Lookups in this pointer-based array are _still_ time.

---

---

---

---

## Linked lists

Our word processor is definitely going to need fast appends—appending to the document is like the _main thing_ you do with a word processor.

Can we build a data structure that can store a string, has fast appends, _and_ doesn't require you to say how long the string will be ahead of time?

Let's focus first on not having to know the length of our string ahead of time. Remember how we used _pointers_ to get around length issues with our array of baby names?

What if we pushed that idea even further?

What if each _character_ in our string were a _two-index array_ with:

1.  the character itself 2. a pointer to the next character

![An example of a linked list storing the string "DEAR." Each element of the linked list is an array composed of two items: a character and a pointer that points to the next element.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_sample.svg?bust=209)

We would call each of these two-item arrays a **node** and we'd call this series of nodes a **linked list**.

Here's how we'd actually implement it in memory:

![The same linked list represented in RAM, showing the nodes scattered in memory but connected by pointers.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_in_memory.svg?bust=209)

Notice how we're free to store our nodes wherever we can find two open slots in memory. They don't have to be next to each other. They don't even have to be _in order_:

![The same linked list represented in RAM. This time the characters are stored out of order to show that the pointers still keep everything in place.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_in_memory_out_of_order.svg?bust=209)

"But that's not cache-friendly, " you may be thinking. Good point! We'll get to that.

The first node of a linked list is called the **head**, and the last node is usually called the **tail**.

Confusingly, some people prefer to use "tail" to refer to _everything after the head_ of a linked list. In an interview it's fine to use either definition. Briefly say which definition you're using, just to be clear.

It's important to have a pointer variable referencing the head of the list—otherwise we'd be unable to find our way back to the start of the list!

We'll also sometimes keep a pointer to the tail. That comes in handy when we want to add something new to the end of the linked list. In fact, let's try that out:

Suppose we had the string "LOG" stored in a linked list:

![A linked list with head and tail pointers storing the word "LOG." The *head points to the first character "L, " and the tail points to the last letter "G."](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string.svg?bust=209)

Suppose we wanted to add an "S" to the end, to make it "LOGS". How would we do that?

Easy. We just put it in a new node:

![A linked list with head and tail pointers storing the word "LOG." A new unconnected node storing the character "S" is added to the bottom and bolded.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_add_node.svg?bust=209)

And tweak some pointers:

​1. Grab the last letter, which is "G". Our tail pointer lets us do this in time.

![A linked list with head and tail pointers storing the word "LOG." The *tail pointer and the character "G" are bolded.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_logs_string_grab_last_letter.svg?bust=209)

​2. Point the last letter's next to the letter we're appending ("S").

![A linked list with head and tail pointers storing the word "LOG." The "G"'s *next pointer is bolded and pointing to the appended "S".](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_logs_string_point_next.svg?bust=209)

​3. Update the tail pointer to point to our _new_ last letter, "S".

![A linked list with head and tail pointers storing the word "LOGS." The *tail pointer is now pointed to the new last letter: "S".](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_logs_string_tweak_pointers.svg?bust=209)

That's time.

Why is it time? Because the runtime doesn't get bigger if the string gets bigger. No matter how many characters are in our string, we still just have to tweak a couple pointers for any append.

Now, what if instead of a linked list, our string had been a _dynamic array_? We might not have any room at the end, forcing us to do one of those doubling operations to make space:

![A dynamic array containing the word "LOG" going through a doubling operation to make space for an appended letter.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_doubled_array.svg?bust=209)

So with a dynamic array, our append would have a _worst-case_ time cost of .

**Linked lists have worst-case -time appends, which is better than the worst-case time of dynamic arrays.**

That _worst-case_ part is important. The _average case_ runtime for appends to linked lists and dynamic arrays is the same: .

Now, what if we wanted to *pre*pend something to our string? Let's say we wanted to put a "B" at the beginning.

For our linked list, it's just as easy as appending. Create the node:

![A linked list with head and tail pointers storing the word "LOGS." A new unconnected node storing the character "B" is added to the top and bolded.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_logs_string_add_node.svg?bust=209)

And tweak some pointers:

1.  Point "B"'s next to "L". 2. Point the head to "B".

![A linked list with head and tail pointers storing the word "LOGS." The "B"'s *next pointer is bolded and pointing to the letter "L, " and the *head pointer is bolded and pointing to the prepended letter "B".](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_blogs_string_tweak_pointers.svg?bust=209)

Bam. time again.

But if our string were a _dynamic array_...

![A dynamic array storing the string "LOGS."](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array.svg?bust=209)

And we wanted to add in that "B":

![A dynamic array storing the string "LOGS." A bolded "B" is added above the array.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_add_b.svg?bust=209)

Eep. We have to _make room_ for the "B"!

We have to move _each character_ one space down:

![A dynamic array storing the string "LOGS" with the letter "B" floating above. The "S" is bolded with an arrow attached showing how the character is being moved one index up.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_move_s.svg?bust=209)

![A dynamic array storing the string "LOGS" with the letter "B" floating above. The "G" is bolded with an arrow attached showing how the character is being moved one index up.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_move_g.svg?bust=209)

![A dynamic array storing the string "LOGS" with the letter "B" floating above. The "O" is bolded with an arrow attached showing how the character is being moved one index up.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_move_o.svg?bust=209)

![A dynamic array storing the string "LOGS" with the letter "B" floating above. The "L" is bolded with an arrow attached showing how the character is being moved one index up.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_move_l.svg?bust=209)

_Now_ we can drop the "B" in there:

![A dynamic array storing the string "LOGS" with the letter "B" floating above. The "B" is bolded with an arrow attached showing how the character is now being placed in the first index.](https://www.interviewcake.com/images/svgs/cs_for_hackers__linked_lists_log_string_dynamic_array_chars_moved.svg?bust=209)

What's our time cost here?

It's all in the step where we made room for the first letter. We had to move _all n_ characters in our string. One at a time. That's time.

**So linked lists have faster *pre*pends ( time) than dynamic arrays ( time).**

No "worst case" caveat this time—prepends for dynamic arrays are _always_ time. And prepends for linked lists are _always_ time.

These quick appends and prepends for linked lists come from the fact that linked list nodes can go anywhere in memory. They don't have to sit right next to each other the way items in an array do.

So if linked lists are so great, why do we usually store strings in an array? **Because [arrays have -time lookups](#constant-time-array-lookups).** And those constant-time lookups _come from_ the fact that all the array elements are lined up next to each other in memory.

Lookups with a linked list are more of a process, because we have no way of knowing where the ith node is in memory. So we have to walk through the linked list node by node, counting as we go, until we hit the ith item.

def get_ith_item_in_linked_list(head, i): if i \< 0: raise ValueError("i can't be negative: %d" % i) current_node = head current_position = 0 while current_node: if current_position == i: \# Found it! return current_node \# Move on to the next node current_node = current_node.next current_position += 1 raise ValueError('List has fewer than i + 1 (%d) nodes' % (i + 1))

That's i + 1 steps down our linked list to get to the ith node (we made our function zero-based to match indices in arrays). **So linked lists have -time lookups.** Much slower than the -time lookups for arrays and dynamic arrays.

Not only that—**walking down a linked list is _not_ cache-friendly.** Because the next node could be _anywhere_ in memory, we don't get any benefit from the processor cache. This means lookups in a linked list are even slower.

So the tradeoff with linked lists is they have faster prepends and faster appends than dynamic arrays, _but_ they have slower lookups.

---

---

---

---

## Doubly Linked Lists

In a basic linked list, each item stores a single pointer to the next element.

In a **doubly linked list**, items have pointers to the next _and the previous_ nodes.

![A doubly-linked list with 3 nodes. The first node has value 5 with a "next" arrow pointing ahead to the second node and a "previous" arrow pointing back to "None." The second node has value 1 with a "next" arrow pointing ahead to the third node and a "previous" arrow pointing back to the first node. The third node has value 9 with a "next" arrow pointing ahead to "None" and a "previous" arrow pointing back to the second node.](https://www.interviewcake.com/images/svgs/linked_list__doubly_linked_nodes_and_pointers.svg?bust=209)

Doubly linked lists allow us to traverse our list _backwards_. In a _singly_ linked list, if you just had a pointer to a node in the _middle_ of a list, there would be _no way_ to know what nodes came before it. Not a problem in a doubly linked list.

## Not cache-friendly

Most computers have [caching systems that make reading from sequential addresses in memory faster than reading from scattered addresses](https://www.interviewcake.com/article/data-structures-coding-interview#ram).

[Array](https://www.interviewcake.com/concept/array) items are always located right next to each other in computer memory, but linked list nodes can be scattered all over.

So iterating through a linked list is usually quite a bit slower than iterating through the items in an array, even though they're both theoretically time.

---

---

---

---

## Hash tables

Quick lookups are often really important. For that reason, we tend to use arrays (-time lookups) much more often than linked lists (-time lookups).

For example, suppose we wanted to count how many times each ASCII character appears in [Romeo and Juliet](https://raw.githubusercontent.com/GITenberg/The-Tragedy-of-Romeo-and-Juliet_1112/master/1112.txt). How would we store those counts?

We can use arrays in a clever way here. Remember—characters are just numbers. In ASCII (a common character encoding) 'A' is 65, 'B' is 66, etc.

So we can use the character('s number value) as the _index_ in our array, and store the _count_ for that character _at that index_ in the array:

![An array showing indices 63 through 68. To the left of the indices are the ASCII characters that correspond to the numeric indices with arrows pointing from each character to its corresponding number.](https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_chars_to_ints.svg?bust=209)

With this array, we can look up (and edit) the count for any character in constant time. Because we can access any index in our array in constant time.

Something interesting is happening here—this array isn't just a list of values. This array is storing _two_ things: characters and counts. The characters are _implied_ by the indices.

**So we can think of an array as a _table_ with _two columns_...except you don't really get to pick the values in one column (the indices)—they're always 0, 1, 2, 3, etc.**

But what if we wanted to put _any_ value in that column and still get quick lookups?

Suppose we wanted to count the number of times each _word_ appears in Romeo and Juliet. Can we adapt our array?

Translating a _character_ into an array index was easy. But we'll have to do something more clever to translate a _word_ (a string) into an array index...

![A blank array except for the value 20 stored at index 9. To the left the array is the word "lies" with an arrow pointing to the right at diamond with a question mark in the middle. The diamond points to the 9th index of the array.](https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_key_unlabeled.svg?bust=209)

Here's one way we could do it:

Grab the number value for each character and add those up.

![The word "lies" in quotes. Arrows point from each character down to their corresponding number values, which are separated by plus signs and shown in sum to equal 429.](https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_chars.svg?bust=209)

The result is 429. But what if we only have _30_ slots in our array? We'll use a common trick for forcing a number into a specific range: the modulus operator (%). Modding our sum by 30 ensures we get a whole number that's less than 30 (and at least 0):

429 \\: \\% \\: 30 = 9

Bam. That'll get us from a word (or any string) to an array index.

This data structure is called a **hash table** or **hash map**. In our hash table, the _counts_ are the **values** and the _words_ ("lies, " etc.) are the **keys** (analogous to the _indices_ in an array). The process we used to translate a key into an array index is called a **hashing function**.

![A blank array except for a 20, labeled as the value, stored at index

9. To the left the array is the word "lies," labeled as the key, with an

arrow pointing to the right at diamond with a question mark in the middle, labeled as the hashing function. The diamond points to the 9th index of the array.](https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_key_labeled.svg?bust=209)

The hashing functions used in modern systems get pretty complicated—the one we used here is a simplified example.

Note that our quick lookups are only in one direction—we can quickly get the value for a given key, but the only way to get the key for a given value is to walk through all the values and keys.

Same thing with arrays—we can quickly look up the value at a given index, but the only way to figure out the index for a given value is to walk through the whole array.

One problem—what if two keys hash to the same index in our array? Look at "lies" and "foes":

![The word "lies" in quotes and the word "foes" in quotes. Arrows point from the characters of each word to their corresponding number values. The sum of the characters of both words is shown to equal 429.](https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_and_foes_addition.svg?bust=209)

They both sum up to 429! So of course they'll have the same answer when we mod by 30:

429 \\: \\% \\: 30 = 9

So our hashing function gives us the same answer for "lies" and "foes." This is called a **hash collision**. There are a few different strategies for dealing with them.

Here's a common one: instead of storing the actual values in our array, let's have each array slot hold a _pointer_ to a _linked list_ holding the counts for all the words that hash to that index:

![An array storing pointers. Three of the pointers have arrows pointing to linked lists to the right of the array.](https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_hash_collision.svg?bust=209)

One problem—how do we know which count is for "lies" and which is for "foes"? To fix this, we'll store the _word_ as well as the count in each linked list node:

![An array storing pointers. The pointer at index 9 has an arrow pointing to a linked list to the right of the array. Each linked list node now stores the word as well as its count and a pointer.](https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_hash_collision_key_val.svg?bust=209)

"But wait!" you may be thinking, "Now lookups in our hash table take time in the worst case, since we have to walk down a linked list." That's true! You could even say that in the worst case _every_ key creates a hash collision, so our whole hash table _degrades to a linked list_.

In industry though, we usually wave our hands and say **collisions are rare enough that on _average_ lookups in a hash table are time**. And there are fancy algorithms that keep the number of collisions low and keep the lengths of our linked lists nice and short.

But that's sort of the tradeoff with hash tables. You get fast lookups by key...except _some_ lookups could be slow. And of course, you only get those fast lookups in one direction—looking up the _key_ for a given _value_ still takes time

# Breadth-First Search (BFS) and Breadth-First Traversal

**Breadth-first search** (BFS) is a method for exploring a tree or graph. In a BFS, you first explore all the nodes one step away, then all the nodes two steps away, etc.

Breadth-first search is like throwing a stone in the center of a pond. The nodes you explore "ripple out" from the starting point.

Here's a how a BFS would traverse this tree, starting with the root:

![A 4-row binary tree represented by circles connected with lines. Our breadth-first search has us start at the root node at the top of the tree.](https://www.interviewcake.com/images/svgs/breadth_first_search_root.svg?bust=209)

We'd visit all the immediate children (all the nodes that're one step away from our starting node):

![The same 4-row binary tree with all nodes at depth 1 (second row) bolded after being visited.](https://www.interviewcake.com/images/svgs/breadth_first_search_first_level.svg?bust=209)

Then we'd move on to all _those_ nodes' children (all the nodes that're _two steps_ away from our starting node):

![The same 4-row binary tree with all nodes at depth 2 (third row) bolded after being visited.](https://www.interviewcake.com/images/svgs/breadth_first_search_second_level.svg?bust=209)

And so on:

![The same 4-row binary tree with all nodes at depth 3 (fourth and final row) bolded after being visited.](https://www.interviewcake.com/images/svgs/breadth_first_search_third_level.svg?bust=209)

Until we reach the end.

Breadth-first search is often compared with **depth-first search**.

Advantages:

- A BFS will find the **shortest path** between the starting point and

any other reachable node. A depth-first search will not necessarily find the shortest path.

Disadvantages

- A BFS on a binary tree _generally_ requires more memory than a DFS.

![A binary search tree with nodes containing integers. The root node contains the integer 50. Each child node to the left of the root contains integers less than 50, and each child node to the right of the root contains integers greater than 50.](https://www.interviewcake.com/images/svgs/binary_search_tree__preview.svg?bust=209)

# Binary Search Tree

A **binary tree** is a **tree** where <==(_**every node has two or fewer children**_)==>.
The children are usually called **_left_** and _**right**_.

class BinaryTreeNode(object):

This lets us build a structure like this:

![A tree represented by circles connected with lines. The root node is on top, and connects to 2 children below it. Each of those children connect to 2 children below them, which all connect to their own 2 children, which all connect to their own 2 children.](https://www.interviewcake.com/images/svgs/binary_tree__depth_5.svg?bust=209)

That particular example is special because every level of the tree is completely full. There are no "gaps." We call this kind of tree "**perfect**."

Binary trees have a few interesting properties when they're perfect:

**Property 1: the number of total nodes on each "level" doubles as we move down the tree.**

![A binary tree with 5 rows of nodes. The root node is on top, and every node has 2 children in the row below. Each row is labelled with the number of nodes in the row, which doubles from the top down: 1, 2, 4, 8, 16.](https://www.interviewcake.com/images/svgs/binary_tree__depth_5_with_number_of_nodes_labelled.svg?bust=209)

**Property 2: the number of nodes on the last level is equal to the sum of the number of nodes on all other levels (plus 1).** In other words, about _half_ of our nodes are on the last level.

<==(_**Let's call the number of nodes n, **_)==>

<==(**\_**and the height of the tree h. **\_**)==>

**h can also be thought of as the "number of levels."**

If we had h, how could we calculate n?

Let's just add up the number of nodes on each level!

If we zero-index the levels, the number of nodes on the xth level is exactly 2\^x.

1.  Level 0: 2\^0 nodes,
2.  2.  Level 1: 2\^1 nodes,
3.  3.  Level 2: 2\^2 nodes,
4.  4.  Level 3: 2\^3 nodes,
5.  5.  _etc_

So our total number of nodes is:

**n = 2\^0 + 2\^1 + 2\^2 + 2\^3 + ... + 2\^{h-1}**

Why only up to 2\^{h-1}?

Notice that we **started counting our levels at 0.**

- So if we have h levels in total,
- the last level is actually the "h-1"-th level.
- That means the number of nodes on the last level is 2\^{h-1}.

But we can simplify.

**Property 2 tells us that the number of nodes on the last level is (1 more than) half of the total number of nodes**,

**so we can just take the number of nodes on the last level, multiply it by 2, and subtract 1 to get the number of nodes overall**.

- We know the number of nodes on the last level is 2\^{h-1},

- So:

**n = 2\^{h-1} \* 2 - 1
n = 2\^{h-1} \* 2\^1 - 1
n = 2\^{h-1+1}- 1
n = 2\^{h} - 1**

So that's how we can go from h to n. What about the other direction?

We need to bring the h down from the exponent.

That's what logs are for!

First, some quick review.

<==(log\_{10} (100) )==>

simply means,

**"What power must you raise 10 to in order to get 100?"**.

Which is 2,

because .

<==(10\^2 = 100 )==>

# Graph Data Structure: Directed, Acyclic, etc

Graph ===== ![](graph-md.png)

## Binary numbers

Let's put those bits to use. Let's store some stuff. Starting with numbers.

The number system we usually use (the one you probably learned in elementary school) is called **base 10**, because each digit has _ten_ possible values (1, 2, 3, 4, 5, 6, 7, 8, 9, and 0).

But computers don't have digits with ten possible values. They have _bits_ with _two_ possible values. So they use **base 2** numbers.

Base 10 is also called **decimal**. Base 2 is also called **binary**.

To understand binary, let's take a closer look at how decimal numbers work. Take the number "101" in decimal:

![In base 10, the digits 101 represent 1 hundred, 0 tens, and 1 one.](https://www.interviewcake.com/images/svgs/cs_for_hackers__binary_numbers_base_10_101.svg?bust=209)

Notice we have two "1"s here, but they don't _mean_ the same thing. The leftmost "1" _means_ 100, and the rightmost "1" _means_ 1. That's because the leftmost "1" is in the hundreds place, while the rightmost "1" is in the ones place. And the "0" between them is in the tens place.

![In base 10, the digits 101 represent 1 hundred, 0 tens, and 1 one.](https://www.interviewcake.com/images/svgs/cs_for_hackers__binary_numbers_base_10_digits.svg?bust=209)

**So this "101" in base 10 is telling us we have "1 hundred, 0 tens, and 1 one."**

![In base 10, the digits 101 represent 1 hundred, 0 tens, and 1 one, which add to give the value one hundred and one.](https://www.interviewcake.com/images/svgs/cs_for_hackers__binary_numbers_base_10.svg?bust=209)

Notice how the _places_ in base 10 (ones place, tens place, hundreds place, etc.) are _sequential powers of 10_:

- 10\^0=1 _ 10\^1=10 _ 10\^2=100 _ 10\^3=1000 _ etc.

**The places in _binary_ (base 2) are sequential powers of _2_:**

- 2\^0=1 _ 2\^1=2 _ 2\^2=4 _ 2\^3=8 _ etc.

So let's take that same "101" but this time let's read it as a _binary_ number:

![In base 2, the digits 101 represent 1 four, 0 twos, and 1 one.](https://www.interviewcake.com/images/svgs/cs_for_hackers__binary_numbers_base_2_digits.svg?bust=209)

Reading this from right to left: we have a 1 in the ones place, a 0 in the twos place, and a 1 in the fours place. So our total is 4 + 0 + 1 which is 5.

![In base 2, the digits 101 represent 1 four, 0 twos, and 1 one, which add to give the value five.](https://www.interviewcake.com/images/svgs/cs_for_hackers__binary_numbers_base_2.svg?bust=209)

Here's how we'd count up to 12 in binary:

### [CONTENT/Resources/My-Data-Structures-Notes/My-ds-notes.md](CONTENT/Resources/My-Data-Structures-Notes/My-ds-notes.md)

## Binary Trees

1. Explain and implement a Binary Tree.

- A tree is a collection of nodes and edges between them.
- It cannot have any cycles, which are edges that form a loop between nodes.
- We also only consider rooted trees in computer science, which is a tree that has one root node that is able to access all other nodes.
- For a tree to be a binary tree, each node can have a maximum of two children.
- It's important to be able to identify and explain tree terminology as well. If given a tree, be able to point out each component.
  - root: The single node of a tree that can access every other node through edges.
  - parent node: A node that is connected to lower nodes in the tree. If a tree only has one node, it is not a parent node because there are no children.
  - child node: A node that is connected to a higher node in the tree. Every node except for the root is a child node of some parent.
  - sibling nodes: Nodes that have the same parent.
  - leaf node: A node that has no children (at the ends of the branches of the tree)
  - internal node: A non-leaf node (aka a parent)
  - path: A series of nodes that can be traveled through edges.
  - subtree: A smaller portion of the original tree. Any node that is not the root node is itself the root of a subtree.
- Know the basics of each term

  - A non-empty tree has to have a root.
  - A tree doesn't have any parent nodes if there are no children.
  - What's the min/max number of parent and leaf nodes for a tree with 5 nodes?

    - Two extreme implementations:

    ![min-max-nodes-ll.png]

    - Implementing in a chain results in max number of parents and min number of leaves: 4 parents, 1 leaf

    ![min-max-nodes-balanced.png]

    - Implementing as a balanced tree results in min number of parents and max number of leaves: 2 parents, 3 leaves

- All that we need in order to implement a binary tree is a TreeNode class that can store a value and references to a left and right child. We can create a tree by assigning the left and right properties to point to other TreeNode instances:

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

2. Identify the three types of tree traversals: pre-order, in-order, and post-order.

- Pre-order: Values are accessed as soon as the node is reached.
- In-order: Values are accessed after we have fully explored the left but before we explore the right branch.
- Post-order: Values are accessed after all of our children have been accessed.
- \*Breadth First: The previous three are types of Depth First Traversals. Breadth first accesses values of nodes by level, left to right, top to bottom.
- Given a tree, be able to determine the order of each traversal type:

  ![Number tree]

  - Breadth First: 20, 9, 24, 7, 11, 23, 27, 3, 10, 17, 36, 30
  - Pre-order: 20, 9, 7, 3, 11, 10, 17, 24, 23, 27, 36, 30
  - In-order: 3, 7, 9, 10, 11, 17, 20, 23, 24, 27, 30, 36
  - Post-order: 3, 7, 10, 17, 11, 9, 23, 30, 36, 27, 24, 20

3. Explain and implement a Binary Search Tree.

- A binary search tree is a binary tree with the added stipulation that all values to the left of a node are less than its value and all values to the right are greater than its value.
  - Example of a Binary Search Tree ![Binary Search Tree]
- Example of a BST with an insert method. You won't be asked to implement a removal:

```javascript
class BST {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }
}
```

## Graphs

1. Know the differences between graphs and trees

- A graph can:
  - Consist of any collection of nodes and edges (no limits on connections)
  - Have cycles
  - Have disconnected portions (a forest, with multiple trees, for example)
  - Be missing a root node (don't have to have one node that connects to everything)
- In a tree, we had an idea of children and parents, in a graph we have neighbors (no hierarchy)

2. What are three ways that we can implement a graph? What are each implementations' advantages or disadvantages?

- Adjacency Matrix - 2D Array
  - Visually clear what's going on
  - One axis (outside array) has an entry (inner array) for each node in the graph. If one node is connected to another node in the graph, our entry in the inner array is set to true. Otherwise the entry is false.

```javascript
let matrix = [
  /*          A       B       C       D       E       F   */
  /*A*/
  [true, true, true, false, true, false],
  /*B*/
  [false, true, false, false, false, false],
  /*C*/
  [false, true, true, true, false, false],
  /*D*/
  [false, false, false, true, false, false],
  /*E*/
  [true, false, false, false, true, false],
  /*F*/
  [false, false, false, false, true, true],
];
```

- Adjacency List - POJO
  - Object where every value in the graph has a key
  - Value for the key is an array with each other node that it is connected to (neighbors)
  - Easy to iterate through
  - Doesn't take up as much space as an Adjacency Matrix or Node
  - Can refer to the entire graph by referencing the object

```javascript
let list = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};
```

- Object-Oriented (ex: using Nodes)
  - Similar to our linked list or tree implementations
  - Track the value and the neighbors array as instance variables on the node
  - We don't have a reference to the overall graph with this implementation

```javascript
class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}
```

3. Given a graph in one of the above implementations, be able to traverse the graph in a breadth-first or depth-first manner.

- We can use recursion or iteration to traverse each node.
- We generally want to keep track of each node that we've visited already so that we don't get trapped in cycles. Easiest way to do this is to keep a Set variable that we update as we traverse to each node.
- The projects from W08D02 and their solutions are a great resource here.
  - Be comfortable with taking either an iterative or a recursive approach to traversing a graph, as well as being able to work with either an adjacency list (like in the friendsOf problem) or a node class (like in the breadthFirstSearch or maxValue problems).
  - Practice taking the implementation that you did in the project and converting it to a different implementation. You probably used recursion for friendsOf, so try using iteration with a stack array, etc.

4. Be able to make conclusions from these traversals

- Is it possible to get from node A to node B?
  - Here we're really implementing a search, like the breadthFirstSearch problem.
- What is the maximum/minimum value we can encounter if we start at node X?
  - Instead of returning a boolean, we want to compare values of nodes and return the appropriate value
    - If we do this recursively we can compare this node and to each of its neighbors values and return the maximum up the call stack.
    - If we do this iteratively, we can keep a currentMax variable as we traverse and update it if we find a new max value.
- etc.

## **Whiteboarding Tips and Tricks**

- Companies whiteboard because steps for solving wb problems are almost nearly identical to solving real-world practical situations.
  - They are looking to test a few things:
    - Can you think algorithmically? Think efficiently?
    - Are you a good communicator?
    - Can you code neatly and correctly?

**`Correct Steps`**

1. Repeat and clarify the problem.
2. Identify Edge Cases & I/O.
3. Pseudocode IF NECESSARY.
4. Implement Code.
5. Walk through an example input.
6. Det. Time and Space (Theta).

   - Time is expensive, space is cheap.
   - Ask interviewer is optimization is even necessary.

**`Strategies`**

- Hash Maps.
- Divide and Conquer DP Programming.
- Using Math Properties.
- **`Amortized Analysis`** : Method for analyzing a given algorithm's complexity, or how much a resource, especially time or or memory, it takes to execute.
- Keeping a Stack or Queue on the side to track values.
- Keep two pointers for the same iteration.
- Perform an operation twice.
- Sort the input.
- Approach the problem from the other end.
- Use binary numbers instead of decimal numbers.
- Use binary search instead of incrementation.

**If you have seen the problem before, just tell them you have**.

---

# **Notes**

## **Binary Trees**

![graphs](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/trees/images/graphs.png)

- **`Graph`** : A collection of nodes and any edges between those nodes. (Linked Lists and Trees are both considered subclasses of graphs)
- **`Tree`** : Graph that does not contain any cycles.
  - In CS we only refer to trees that are "`rooted`", or a tree where there exists a node that is accessible from every other node.
- **`Binary Tree`** : Tree where nodes have at most 2 children.

![tree](https://assets.aaonline.io/data_structures_algorithms/trees/images/graph_a.png)

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
```

- Common way to implement a binary tree is by using a node class with OOP.

**Basic Tree Terminology**

- **`Tree`** : Graph with no cycles.
  - Cycle is a path through edges that begins and ends at the same node.
  - In CS, trees must have roots!
- **`Binary Tree`** : Tree where nodes have at most 2 nodes.
- **`Root`** : The ultimate parent, the single node s tree that can access every other node through edges; root does not have a parent.
- **`Internal Node`** : Node that has children.
- **`Leaf`** : Node that does not have any children.
- **`Path`** : A series of nodes that can be traveled through edges.

**Traversing Trees**

- Trees can be traveresed in multiple ways: Depth-First or Breadth-First.
- Three common ways to go depth-first:
  - In-Order
  - Pre-Order
  - Post-Order
- **`Breadth First`** : Traversing level by level, visiting every node at each stage.

```js
        A
            /
            \
            B C /
            / \
        D E F
        A, B, C, D, E, F
```

- **`Depth-First`** :

```js
        A
            /
            \
            B C /
            / \
        D E F
        A, B, D, C, E, F
```

![pic](https://upload.wikimedia.org/wikipedia/commons/d/dc/Sorted_binary_tree_ALL.svg)

- **`Pre-Order Traversal`** :

  - F, B, A, D, C, E, G, I, H
  - Access data of the current Node
  - Recursively visit the left sub tree
  - Recursively visit the right sub tree

- **`In-Order Traversal`** :

  - A, B, C, D, E, F, G, H, I
  - Recursively visit the left sub tree
  - Access the data of the current node
  - Recursively visit the right sub tree

- **`Post-Order Traversal`** :

  - A, C, E, D, B, H, I, G, F
  - Recursively visit the left sub tree
  - Recursively visit the right sub tree
  - Access the data of the current node

**`Binary Search Trees`**

- A Binary Tree is a **Binary Search Tree** if:
  - The left subtree contains values less than the root.
  - AND the right subtree contains values greater than or equal to the root
  - AND the left subtree is a Binary Search Tree
  - AND the right subtree is a Binary Search Tree

![bst](https://assets.aaonline.io/data_structures_algorithms/binary_search_trees/images/bsts.png)

- BSTs are sorted Data Structures
- If this printing function is called on a BST, the values will be print out in ascending order.

```js
function inOrderPrint(root) {
  if (!root) return;

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}
// BST 1: 42
// BST 2: 4, 5, 6
// BST 3: 1, 5, 7, 10, 16, 16
```

- The best BSTs are **height balanced**.

---

# **Notes**

## **Graphs**

- **Graph** : Any collection of nodes and edges, it is much more relaxed compared to other trees.
  - May lack a root node.
  - May have cycles.
  - May have any number of edges leaving a node.

![graph](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/images/graphs.png)

**GraphNode Class**

```js
class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode("a");
let b = new GraphNode("b");
let c = new GraphNode("c");
let d = new GraphNode("d");
let e = new GraphNode("e");
let f = new GraphNode("f");
a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];
```

- **Adjacency Matrix** : Mathematician's preferred way of representing a graph.

![adja](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/images/adj_matrix_graph.png)

```js
let matrix = [
  /*          A       B       C       D       E       F   */
  /*A*/
  [true, true, true, false, true, false],
  /*B*/
  [false, true, false, false, false, false],
  /*C*/
  [false, true, true, true, false, false],
  /*D*/
  [false, false, false, true, false, false],
  /*E*/
  [true, false, false, false, true, false],
  /*F*/
  [false, false, false, false, true, true],
];
```

- **Adjacency List** : Using an object to represent node labels.

```js
let graph = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};
```

---

## **Graph Traversal**

**Traversal with Graph Node**
**Depthfirst Recursion**

```js
class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode("a");
let b = new GraphNode("b");
let c = new GraphNode("c");
let d = new GraphNode("d");
let e = new GraphNode("e");
let f = new GraphNode("f");
a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];
```

```js
function depthFirstRecur(node, visited = new Set()) {
  // if this node has already been visited, then return early
  if (visited.has(node.val)) return;

  // otherwise it hasn't yet been visited,
  // so print it's val and mark it as visited.
  console.log(node.val);
  visited.add(node.val);

  // then explore each of its neighbors
  node.neighbors.forEach((neighbor) => {
    depthFirstRecur(neighbor, visited);
  });
}
```

```js
function depthFirstIter(node) {
  let visited = new Set();
  let stack = [node];

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
```

**Traversal with Adjacency List**

```js
let graph = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};
```

```js
function depthFirst(graph) {
  let visited = new Set();

  for (let node in graph) {
    _depthFirstRecur(node, graph, visited);
  }
}

function _depthFirstRecur(node, graph, visited) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach((neighbor) => {
    _depthFirstRecur(neighbor, graph, visited);
  });
}

depthFirst(graph);
```

# **Notes**

## **Network Knowledge**

## **OSI Network Model**

- **`OSI`** : The Open Systems Interconnection reference model is a well known Network Model created in the UK that has both conceptual layers **and** suggested protocols for each.

  - There are seven layers to the OSI Model.

![osilayer](https://assets.aaonline.io/Module-Web/network/image-network-models-osi.svg)

- **`Application`** : Includes information used by client-side software, data from this later interacts directly with applications. (i.e. HTTP)
- **`Presentation`** : The syntax later that converts data from machine-readable to human-readable. Includes data compression, encryption, and character encoding. (i.e. JPEG & GIF)
- **`Session`** : Includes protocols responsible for authentication and data continuity. Includes authorization or re-establishing a dropp connection. (i.e. RPC (Remote Procedure Call))
- **`Transport`** : Utilization of transport protocols (i.e. TCP and UDP)
- **`Network`** : Basically the internet layer (i.e. IP)
- **`Data Link`** : Deal with connections from one machine's network interface to another. (i.e. ethernet)
- **`Physical`** : Translating raw electrical signals to bits & bytes of data. (i.e. Wi-Fi & DSL)

* It is important to remember that OSI Model is highly conceptual, it's practical uses are limited.
* TCP/IP is much more practical compared to OSI, but it is purely practical.

---

## **TCP/IP Model**

- **`Reference Model`** : A High-level overview of a complex topic provided by an organization that manages it.

**Layers of the TCP/IP Model**

![tcpiplayer](https://assets.aaonline.io/Module-Web/network/image-network-models-tcp-ip.svg)

- **`Application`** : Includes protocols related to user-facing data. Anything that is transmitted from the Transport layer is considered Application Layer Data (i.e. HTTP & FTP)
- **`Transport`** : TCP & UDP.
- **`Internet`** : Connects separate networks together (IP)
- **`Link`** : Lower-level communication standards.
- **`Physical?`** : There is a supposed fifth layer that cinludes all the electrical concepts that span across wires, but it is not officially stated.

![encap](https://assets.aaonline.io/Module-Web/network/image-network-models-encapsulation.svg)

- We can think of the layers of our reference model as being **encapsulated**.

---

## **Binary and Hexidecimal**

- **`Binary`** : Number expressed in the base-2 numeral system or binary numeral system.
  - **`Base`** : Number System, computers use a Base 2 NS.
- **`CPU`** : Central Processing Unit, an electronic circuitry within a computer that executes instructions that make up a computer program.

- It is easy to understand binary numbers if you remember the bases.
- 1, 2, 4, 8, 16, 32, 64, 128...etc.

- **`Bit`** : A single digit represented by either 1 (ON) or 2 (OFF).

![pic](https://i.gyazo.com/413dd89d209c0b2a4d10d8c1f6fe40b6.png)

- **`Byte`** : Sequence of 8 Bits.

- **`Hexadecimal`** : Base 16, useful numeric system due to it making it easier for us to read binary.
  - Helps to make up for base 10 only going from 0 - 9, adds in A, B, C, D, E, F.
  - You will sometimes see hexadecimals pre-pended with a `0x`.
  - `FF = 255 = 11111111 = 1 byte`

```
hexadecimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  A,  B,  C,  D,  E,  F
decimal:     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
```

```
Regular Numbers: 4 8 15 16 23 42
Binary: 00000100 00001000 00001111 00010000 00010111 00101010
Hexadecimal: 04 08 0F 10 17 2A
```

- If you provide a numerical base in JS in the .toString() method you can convert things to binary and decimal. (parseInt can also be used)

```js
Number(42).toString(16); // 2a
Number(42).toString(2); // 101010
```

```js
parseInt("101010", 2); // 42
parseInt("2A", 16); // 42
```

---

## **Internet Protocol**

- **`TCP`** : Transmission Control Protocol.
  - TCP is fault tolerant and end-to-end.
  - If data transmission fails it can be cached and re-sent.
  - No single central system that can take down the entire network.
- **`IP`** : Internet Protocol.
- **`Internet`** : A series of interconnected networks sharing data.
- **`Packet`** : Format that IP data is packaged in.
  - Contains metadata in headers, and body content.
- **`Pack-Switching`** : When a message is split up into separate 'packets', delivered to a destination, and reassembled as appropriate.

  > A Byte is 8 Bits

![ip4](https://assets.aaonline.io/Module-Web/network/image-ip-ipv4-headers.svg)

- IPV4
- IPv4 is still the most commonly used protocol version online.

![ipv6](https://assets.aaonline.io/Module-Web/network/image-ip-ipv6-headers.svg)

- IPV6
- Was created because we are running out of IP Addresses.
- **`Version`** : Binary representation of the version #.
- **`Traffic Class`** : Used to Identify different types of packets.
- **`Flow Label`** : An experimental option used for adding packet sequencing into IP.
- **`Payload Length`** : Let's the receivers know how large the data in the packet will be.
- **`Next Header`** : Usually identifies the protocol type of the packet's data.
- **`Hop Limit`** : Means of preventing packets from being passed around routers forever.
- **`Source Address`** : Where the pack originated.
- **`Destination Address`** : Where the packet is heading.

  > All of the headers have a fixed length of 40 bytes.

**Special Addresses**

- **Local Host** : Loopback Address, or the identifier for your current machine.
  - `127.0.0.1`
- **ALl-Interfaces Address** : Used to catch any incoming requests regardless of the intended destination.
  - `0.0.0.0`

---

## **Transport Protocols**

- Transport Protocols act as our delivery person.
- IP is concerned with machine-to-machine communication.
- HTTP is designed for application-to-application communication.
- **`Port`** : Virtual interfaces that allow a single device to host lot's of different applications & services.
- **`TCP`** : Transmission Control Protocol, the most common transport protocol.

  - Connection-oriented protocol.
  - Reliable protocol because the segments cannot be lost.
  - Heavy protocol to use (hence, sometimes there is buffering)

- **`UDP`** : User Datagram Protocol.
  - Unreliable protocol.
  - Connection-less and provides no verification if data has been received.
  - Up to the sender/recipient to manage expectati

---

## **DNS**

- **`DNS`** : Domain Name System is a distributed appraoch to providing easily-understood names for internetworked devices. (Similar to a phonebook)

  - Invented as a way to distribute the work to numerous organizations, lightening the load and allowing much more rapid growth.

- **`Domain`** : A website's domain refers to the 'friendly' name for the website's host, or the server providing the site's content.

![url](https://assets.aaonline.io/Module-Web/network/image-ip-dns-domain.svg)

- Top Level Domain the last part of the domain (.com, .net, .org)
- Second Level Domain (Name of the website)
- Subdomain (www)

* **`Resolution`** : Process of working out which name server is needed.
  - During resolving, we work from right to left.

**DNS Records**

- **`Zone File`** : Text file containing, host names, IP Addresses, and resource types.
- Common DNS Record Types:
  - **`SOA`** : Start of Authority, let's use know what name server is the primary authority (**`THE MINIMUM REQUIREMENT IN A ZONE FILE`**)
  - **`NS`** : Keeps us connected to our zone by pointing to name servers.
  - **`A/AAAA`** : A = Domain Name to IPv4 & AAAA = Domain Name to IPv6
  - **`CNAME`** : Links Domain name to Domain Name.
  - **`MX`** : Mail Exchanger, used by e-mail clients.
  - **`TTL`** : Time to live, measure of how long a record should be cached by a DNS name server.

---

## **Network Hardware**

- **HUB** : Simplest networking device aka a Signal Splitter.

  - Cheap and found in older networks.
  - Hubs do not do any filtering, every single data packet is sent to every single device all the time.
  - No one uses them anymore.

- **Switches: Traffic Control** : Intelligent Hubs, track devices connected to them, help manage network load, and can manage separate internal networks with ease.
  - The Max Address Table is the largest difference from hubs.
  - **`Flood`** : If a destination address is unknown, the switch will flood received data out to all connect devices.
  - **`Forward`** : If the destination is known, it will send data directly to that device.
  - **`Filter`** : When data is dropped entirely from a transfer.
- **`Routers`** : Connect separate networks with each other.
  - Participate in a process called NAT (Network Address Translation)

---

## Big O Notation

### time complexity

it allow us to talk formally about how the runtime of an algorithm grows as the input grows.

n = number of operation the computer has to do can be:
f(n) = n
f(n) = n^2
f(n) = 1

f(n) = could be something entirely different !

![](./assets/ece920b.png)

O(n):

```typescript
function addUpToSimple(n: number) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}
```

O(1):

```typescript
function addUpComplex(n: number) {
  return (n * (n + 1)) / 2;
}
```

O(n): maybe thinking O(2n) but we see big picture! BigONotation doesn't care about precision only about general trends _linear? quadric? constant?_

```typescript
function printUpAndDown(n: number) {
  console.log("Going up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Going down");
  for (let j = n - 1; j > 0; j--) {
    console.log(j);
  }
}
```

O(n^2)

```typescript
function printAllPairs(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = 0; j < n; j++) {
      console.log(j);
    }
  }
}
```

O(n) : cuz as soon as n grows complexity grows too

```typescript
function logAtLeastFive(n: number) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
```

O(1)

```typescript
function logAtMostFive(n: number) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```

### space complexity

Rules of Thumb

- most primitive _booleans numbers undefined null_ are constant space.
- strings and reference types like objects an arrays require O(n) space _n is string length or number of keys_

O(1)

```typescript
function sum(arr: number[]) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
}
```

O(n)

```typescript
function double(arr: number[]) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] * 2);
  }
  return newArr;
}
```

### quick note around object, array through BigO lens!

object:

```typescript
const person = { name: "John", age: 22, hobbies: ["reading", "sleeping"] };

Object.keys(person); // ["name", "age", "hobbies"] O(n)
Object.values(person); // ["John", 22, Array(2)] O(n)
Object.entries(person); // [Array(2), Array(2), Array(2)] O(n)
person.hasOwnProperty("name"); // true O(1)
```

array:
_push() and pop()_ are always faster from _unshift() and shift()_ cuz inserting or removing element from beginning of an array needs reIndexing all elements

## Common Patterns

### frequency counter

O(n^3)

```typescript
function same(arrOne: number[], arrTwo: number[]): boolean {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let element of arrOne) {
    // for O(n)
    if (!arrTwo.includes(element ** 2)) {
      // includes cuz iterate over all indexes O(n)
      return false;
    }
    arrTwo.splice(arrTwo.indexOf(element ** 2), 1); // indexOf cuz iterate over all indexes O(n)
  }
  return true;
}
```

frequencyCounter:

O(n)

```typescript
function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    const sqrtKey = parseInt(key, 10) ** 2;
    if (
      !(sqrtKey in frequencyCounter2) || // interesting ** in ** check if object contains key
      frequencyCounter2[sqrtKey] !== frequencyCounter1[key]
    ) {
      return false;
    }
  }

  return true;
}
```

O(n)

```typescript
// approach one
function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCount1 = {};
  const frequencyCount2 = {};

  for (let value of str1) {
    frequencyCount1[value] = (frequencyCount1[value] || 0) + 1;
  }
  for (let value of str2) {
    frequencyCount2[value] = (frequencyCount2[value] || 0) + 1;
  }

  for (let key in frequencyCount1) {
    if (frequencyCount1[key] !== frequencyCount2[key]) {
      return false;
    }
  }

  return true;
}

// approach two
function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCount = {};

  for (let i = 0; i < str1.length; i++) {
    const currentElement = str1[i];

    frequencyCount[currentElement]
      ? (frequencyCount[currentElement] += 1)
      : (frequencyCount[currentElement] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const currentElement = str2[i];

    if (!frequencyCount[currentElement]) {
      return false;
    } else {
      frequencyCount[currentElement] -= 1;
    }
  }

  return true;
}
```

## multiple pointers

O(n^2)

```typescript
function sumZero(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
```

multiple pointers:

O(n)

```typescript
function sumZero(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```

O(n)

```typescript
// my approach

function countUniqueValues(arr: number[]): number {
  let pointer = 0;
  let count = 0;
  while (pointer < arr.length) {
    if (arr[pointer] === arr[pointer + 1]) {
      pointer++;
    } else {
      count++;
      pointer++;
    }
  }

  return count;
}

// steele approach

function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
```

### sliding window

O(n^2)

```typescript
function maxSubArraySum(arr: number[], n: number): number | null {
  if (arr.length < n) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let tmp = 0;
    for (let j = 0; j < n; j++) {
      tmp += arr[i + j];
    }

    if (tmp > max) {
      max = tmp;
    }
  }
  return max;
}
```

O(n)

sliding window:

```typescript
function maxSubArraySum(arr: number[], n: number): number | null {
  if (arr.length < n) {
    return null;
  }

  let maxSum = 0;
  let tmpSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  for (let i = n; i < arr.length; i++) {
    tmpSum = tmpSum - arr[i - n] + arr[i];
    maxSum = Math.max(tmpSum, maxSum);
  }
  return maxSum;
}
```

### divide and conquer

linearSearch

O(n)

```typescript
function linearSearch(arr, val): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
```

divide an conquer:

binarySearch

O (Log n)

```typescript
function binarySearch(sortedArr: number[], value: number): number {
  let min = 0;
  let max = sortedArr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (sortedArr[middle] < value) {
      min = middle + 1;
    } else if (sortedArr[middle] > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```

## Recursion

a process that calls itself

quick note around callStack

```typescript
function wakeUp() {
  // callStack [wakeUp]
  takeShower();
  eatBreakfast();
  console.log("Ready to go ... ");
} // callStack []

function takeShower() {
  // callStack [takeShower, wakeUp]
  console.log("taking shower");
} // callStack[wakeUp]

function eatBreakfast() {
  // callStack [eatBreakfast, wakeUp]
  const meal = cookBreakFast();
  console.log(`eating ${meal}`);
} // callStack [wakeUp]

function cookBreakFast() {
  // callStack [cookBreakFast, eatBreakfast, wakeUp]
  const meals = ["Cheese", "Protein Shake", "Coffee"];
  return meals[Math.floor(Math.random() * meals.length)]; // callStack [eatBreakFast, wakeUp]
}

wakeUp();
```

two essential part of recursive functions

- base case : end of the line
- different input : recursive should call by different piece of data

```typescript
function sumRange(num: number) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num: number) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

helper method recursion vs pure recursion

```typescript
// helper method recursion approach
function collectOdd(arr: number[]) {
  const result = [];

  function helper(helperArr: number[]) {
    if (!helperArr.length) {
      return;
    }

    if (helperArr[0] % 2 !== 0) {
      result.push(helperArr[0]);
    }

    helper(helperArr.slice(1));
  }

  helper(arr);

  return result;
}

// pure recursion approach
function collectOdd(arr: number[]): number[] {
  let result = [];

  if (!arr.length) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  result = collectOdd(result.concat(arr.slice(1)));
  return result;
}
```

## Searching Algorithms

### linear search

_indexOf() includes() find() findIndex()_ all this methods doing linear search behind the scene

O(n)

```typescript
function linearSearch(arr: number[], value: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
    return -1;
  }
}
```

### binary search

O(Log n)

```typescript
function binarySearch(sortedArr: number[], value: number): number {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const middle = Math.round((right + left) / 2);

    if (sortedArr[middle] > value) {
      right = middle - 1;
    } else if (sortedArr[middle] < value) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```

### naive string search

O(n^2)

```typescript
function naiveStringSearch(long: string, pattern: string): number {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== long[i + j]) {
        break;
      }
      if (j === pattern.length - 1) {
        count++;
      }
    }
  }

  return count;
}
```

## Sorting Algorithms

### array.sort()

array.sort(cb?) will turn all values to _string_ then sort it based on it's _unicode_

```typescript
["a", "c", "b", "f", "d"].sort(); // (5) ["a", "b", "c", "d", "f"]
[1, 10, 6, 8, 2, 3, 5].sort(); //(7) [1, 10, 2, 3, 5, 6, 8]

/* 
also receive callback function by two arguments:
    a: previous number 
    b: next number 

*/
// if callback return NEGATIVE number a will placed before b
[1, 10, 6, 8, 2, 3, 5].sort((a, b) => a - b); // (7) [1, 2, 3, 5, 6, 8, 10]

// if callback return POSITIVE number a will placed after b
(7)[(1, 2, 3, 5, 6, 8, 10)].sort((a, b) => b - a); // (7) [10, 8, 6, 5, 3, 2, 1]

// if callback return ZERO a and b will placed at the same position
```

## Quadric

### bubble sort

![](./assets/Sorting_bubblesort_anim.gif)

general: O(n^2)
nearlySortedData: O(n)

```typescript
function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

// or

function bubbleSort(arr: number[]): number[] {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}
```

### selection sort

![](./assets/Selection-Sort-Animation.gif)

O(n^2)

```typescript
function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
```

### insertion sort

![](./assets/Insertion-sort-example-300px.gif)

general: O(n^2)
nearlySortedData: O(n)

```typescript
function insertionSort(arr) {
  var currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```

### quadric sorting algorithms comparison

|   Algorithm    | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| :------------: | :--------------------: | :-----------------------: | :---------------------: | :--------------: |
|  bubble sort   |          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
| insertion sort |          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
| selection sort |         O(n^2)         |          O(n^2)           |         O(n^2)          |       O(1)       |

## Fancy

### merge sort

![](./assets/Merge-sort-example-300px.gif)

O(n Log n)

```typescript
// merge two sorted array
function merge(arr1: number[], arr2: number[]): number[] {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}
```

### quick sort

![](./assets/Quicksort.gif)

in following implementation we always assume _first item_ as pivot

general: O(n Log n)
sorted: O(n^2)

```typescript
// place pivot in the right index and return pivot index
function pivot(arr: number[], start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
}

function quickSort(arr: number[], start = 0, end = arr.length - 1) {
  if (left < right) {
    const pivot = pivot(arr, start, end);

    // left
    quickSort(arr, start, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}
```

### radix sort

![](./assets/3C7DDB59DF2D21B287E42A7B908409CB.gif)

O(nk)
n: the number of items we sorting
k: average length of those numbers

```typescript
// get the actual number at the given index
function getDigit(num: number, i: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// get number length
function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// return number by most length
function mostDigits(arr: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}
function radixSort(arr: number[]): number[] {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      digitBuckets[getDigit(arr[j], k)].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }
  return arr;
}
```

### fancy sorting algorithms comparison

| Algorithm  | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| :--------: | :--------------------: | :-----------------------: | :---------------------: | :--------------: |
| merge sort |       O(n Log n)       |        O(n Log n)         |       O(n Log n)        |       O(n)       |
| quick sort |       O(n Log n)       |        O(n Log n)         |         O(n^2)          |     O(Log n)     |
| radix sort |         O(nk)          |           O(nk)           |          O(nk)          |     O(n + k)     |

## Data Structure

### complexity comparison

|   DataStructure    | Insertion |                         Removal                          |                 Searching                 | Access |
| :----------------: | :-------: | :------------------------------------------------------: | :---------------------------------------: | :----: |
| Singly Linked List |   O(1)    | bestCase(very beginning): O(1) worstCase(very end): O(n) |                   O(n)                    |  O(n)  |
| Doubly Linked List |   O(1)    |                           O(1)                           | O(n) it is faster than Singly Linked List |  O(n)  |
|       Stack        |   O(1)    |                           O(1)                           |                   O(n)                    |  O(n)  |
|       Queue        |   O(1)    |                           O(1)                           |                   O(n)                    |  O(n)  |
| Binary Search Tree | O( Log n) |                            -                             |                 O(Log n)                  |   -    |
|    Binary Heap     | O( Log n) |                        O( Log n)                         |                  O( n )                   |   -    |
|    Hash Tables     |  O( 1 )   |                          O( 1 )                          |                     -                     | O( 1 ) |

## Singly Linked list

```typescript
class _Node {
  constructor(public value: any) {}
  public next: _Node | null = null;
}

class SinglyLinkedList {
  private _length: number = 0;
  private head: _Node | null = null;
  private tail: _Node | null = null;

  get length() {
    return this._length;
  }

  get print(): null | _Node[] {
    if (!this._length) return null;

    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  public push(value: any): SinglyLinkedList {
    const node = new _Node(value);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._length += 1;

    return this;
  }

  public pop(): _Node | null {
    if (!this.head) return null;

    let currentNode = this.head;

    if (!currentNode.next) {
      this.head = null;
      this.tail = null;
      this._length -= 1;
      return currentNode;
    }
    while (currentNode.next && currentNode.next.next) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.tail.next = null;
    this._length -= 1;
    return currentNode.next as _Node;
  }

  public unShift(value: any): SinglyLinkedList {
    const currentHead = this.head;

    this.head = new _Node(value);

    if (currentHead) {
      this.head.next = currentHead;
    } else {
      this.tail = this.head;
    }
    this._length += 1;
    return this;
  }

  public shift(): _Node | null {
    if (!this.head) return null;

    const currentHead = this.head;
    this.head = currentHead.next;
    this._length -= 1;

    if (currentHead === this.tail) this.tail = null;

    return currentHead;
  }

  public get(index: number): _Node | null {
    if (index < 0 || index >= this._length) return null;

    let currentNode = this.head;
    for (let j = 0; j < index; j++) {
      if (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  public set(index: number, value: any): _Node | null {
    const node = this.get(index);
    if (node) {
      node.value = value;
    }
    return node;
  }

  public insert(index: number, value: any): SinglyLinkedList | null {
    if (index < 0 || index >= this._length) {
      return null;
    } else if (index === 0) {
      return this.unShift(value);
    } else if (index === this._length) {
      return this.push(value);
    } else {
      const prevNode = this.get(index - 1);

      if (prevNode) {
        const newNode = new _Node(value);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this._length += 1;

        return this;
      }
      return prevNode;
    }
  }

  public remove(index: number): _Node | null {
    if (index === 0) {
      return this.shift();
    } else if (index === this._length - 1) {
      return this.pop();
    } else {
      const prevNode = this.get(index - 1);
      const currentNode = this.get(index);
      if (prevNode && currentNode) {
        prevNode.next = currentNode.next;
        this._length -= 1;
      }
      return currentNode;
    }
  }

  public reverse(): SinglyLinkedList | false {
    if (this._length <= 1) return false;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next: _Node | null;
    let prev: _Node | null = null;
    for (let i = 0; i < this._length; i++) {
      if (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
    }
    return this;
  }
}
```

## Doubly Linked List

```typescript
class _Node {
  public next: _Node | null = null;
  public prev: _Node | null = null;

  constructor(public value: any) {}
}

class DoublyLinkedList {
  private head: _Node | null = null;
  private tail: _Node | null = null;

  private _length = 0;

  get length() {
    return this._length;
  }

  get print(): null | _Node[] {
    if (!this._length) return null;

    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  public push(value: any): DoublyLinkedList {
    const node = new _Node(value);

    if (!this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this._length += 1;
    this.tail = node;

    return this;
  }

  public pop(): _Node | null {
    if (!this.tail) {
      return null;
    }

    const currentTail = this.tail;
    if (currentTail.prev) {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this._length -= 1;
    return currentTail;
  }

  public shift(): null | _Node {
    if (!this.head) {
      return null;
    }

    const currentHead = this.head;
    if (currentHead.next) {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    } else {
      return this.pop();
    }

    this._length -= 1;
    return currentHead;
  }

  public unshift(value: any): DoublyLinkedList {
    if (!this.head) {
      return this.push(value);
    }

    const node = new _Node(value);
    const currentHead = this.head;

    this.head = node;
    this.head.next = currentHead;
    currentHead.prev = this.head;

    this._length += 1;
    return this;
  }

  public get(index: number): null | _Node {
    if (index < 0 || index >= this._length) return null;

    let currentNode: _Node | null = null;

    if (index < Math.floor(this._length / 2)) {
      // iterate from head to tail

      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        if (currentNode && currentNode.next) {
          currentNode = currentNode.next;
        }
      }
    } else {
      // iterate from tail to head

      currentNode = this.tail;
      for (let i = this._length - 1; i > index; i--) {
        if (currentNode && currentNode.prev) {
          currentNode = currentNode.prev;
        }
        return currentNode;
      }
    }

    return currentNode;
  }

  public set(index: number, value: any): _Node | null {
    const node = this.get(index);
    if (node) {
      node.value = value;
    }
    return node;
  }

  public insert(index: number, value: any): DoublyLinkedList | null {
    if (index < 0 || index > this._length) {
      return null;
    } else if (index === 0) {
      return this.unshift(value);
    } else if (index === this._length) {
      return this.push(value);
    } else {
      const prevNode = this.get(index - 1);
      const nextNode = this.get(index);

      if (prevNode && nextNode) {
        const newNode = new _Node(value);

        prevNode.next = newNode;
        (newNode.prev = prevNode), (newNode.next = nextNode);
        nextNode.prev = newNode;
      }
    }
    this._length += 1;
    return this;
  }

  public remove(index: number): DoublyLinkedList | null {
    if (index < 0 || index > this._length) {
      return null;
    } else if (index === 0) {
      this.shift();
    } else if (index === this._length - 1) {
      this.pop();
    } else {
      const node = this.get(index);

      if (node && node.prev && node.next) {
        (node.prev.next = node.next), (node.next.prev = node.prev);
        (node.next = null), (node.prev = null);
      }
      this._length -= 1;
    }
    return this;
  }
}
```

## Stacks

LIFO
last in first out

```typescript
// implement stack using array
const stack = [1, 2, 3];
stack.push(4); // [1,2,3,4]
stack.pop(); // [1,2,3]
// stacks just have push and pop
stack.unshift(0); // [0,1,2,3]
stack.shift(); // [1,2,3]
```

```typescript
// implementing stack using singly linked list
class _Node {
  public next: _Node | null = null;

  constructor(public value: any) {}
}

class Stack {
  private first: _Node | null = null;
  private last: _Node | null = null;

  private _length = 0;
  get length(): number {
    return this._length;
  }

  push(value: any): Stack {
    const node = new _Node(value);
    const currentFirst = this.first;

    (this.first = node), (this.first.next = currentFirst);

    if (!currentFirst) {
      this.last = node;
    }

    this._length += 1;
    return this;
  }

  pop(): _Node | null {
    const currentFirst = this.first;
    if (currentFirst) {
      if (this.first === this.last) this.last = currentFirst.next;
      this.first = currentFirst.next;
      this._length -= 1;
    }
    return currentFirst;
  }
}
```

## Queue

FIFO
first in first out

```typescript
// implementing queue using array
const q = [];
q.push(1);
q.push(2);
q.shift(1); // out first items first
// or
q.shift(1);
q.shift(2);
q.pop(); // out first items first
```

```typescript
// implementing queue using singly linked list
class _Node {
  public next: _Node | null = null;

  constructor(public value: any) {}
}

class Queue {
  private first: _Node | null = null;
  private last: _Node | null = null;

  private _length = 0;
  get length(): number {
    return this._length;
  }

  enqueue(value: any): Queue {
    const node = new _Node(value);
    if (!this.last) {
      (this.first = node), (this.last = node);
    } else {
      this.last.next = node;
      this.last = node;
    }

    this._length += 1;
    return this;
  }

  dequeue(): _Node | null {
    const currentFirst = this.first;
    if (currentFirst) {
      if (this.first === this.last) this.last = null;
      this.first = currentFirst.next;
      this._length -= 1;
    }

    return currentFirst;
  }
}
```

## Tree

### terminology

- root : top node of tree
- child : a node directly connected to another node when moving away from root
- parent : the converse notion of a child
- sibling : a group of nodes with the same parent
- leaf : a child with no children
- edge : connection from two node

### binary search tree

- every parent node has at most **two** children
- every node to the **left** of parent node is always **less** than the **parent**
- every node to the **right** of parent node is always **greater** than the **parent**

```typescript
class _Node {
  constructor(public value: number) {}

  public left: _Node | null = null;
  public right: _Node | null = null;
}
class BinarySearchTree {
  public root: _Node | null = null;

  public insert(value: number): BinarySearchTree | null {
    const node = new _Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode: _Node = this.root;
      do {
        if (value === currentNode.value) return null;

        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = node;
            break;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = node;
            break;
          }
        }
      } while (currentNode);
    }
    return this;
  }

  public have(value: number): boolean {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else {
        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
          }
          break;
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
          }
          break;
        }
      }
    }
    return false;
  }
}
```

### tree traversal

there is two main strategies to traversal a tree : **Breadth-first-search** and **Depth-first-search**

```typescript
class _Node {
  constructor(public value: number) {}

  public left: _Node | null = null;
  public right: _Node | null = null;
}
class BinarySearchTree {
  public root: _Node | null = null;

  public insert(value: number): BinarySearchTree | null {
    const node = new _Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode: _Node = this.root;
      do {
        if (value === currentNode.value) return null;

        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = node;
            break;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = node;
            break;
          }
        }
      } while (currentNode);
    }
    return this;
  }

  public have(value: number): boolean {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else {
        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          }
          break;
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
          }
          break;
        }
      }
    }
    return false;
  }
  /* 
    breadth first search (bfs) : traverse tree horizontally
*/
  public bfs(): _Node[] {
    const visited: _Node[] = [];
    if (this.root) {
      const q: _Node[] = [this.root];
      while (q.length) {
        if (q[0].left) q.push(q[0].left);
        if (q[0].right) q.push(q[0].right);

        visited.push(q[0]), q.shift();
      }
    }
    return visited;
  }
  /*
    depth first search (dfs) : traverse tree vertically
    following contains three dfs searching methods:

    1. preOrder : add node => going to left and add left => going to right and add right 
    2. postOrder : going to left and add left => going to right and add right => going to node and add node 
    3. inOrder : going to the left and add left => add node => going to the right and add right

     */
  public dfsPreOrder(): _Node[] {
    const visited: _Node[] = [];
    if (this.root) {
      (function traverse(node: _Node): void {
        visited.push(node);

        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }
      })(this.root);
    }

    return visited;
  }

  public dfsPostOrder(): _Node[] {
    const visited: _Node[] = [];

    if (this.root) {
      (function traverse(node: _Node): void {
        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }

        visited.push(node);
      })(this.root);
    }
    return visited;
  }

  dfsInOrder(): _Node[] {
    const visited: _Node[] = [];

    if (this.root) {
      (function traverse(node: _Node) {
        if (node.left) {
          traverse(node.left);
        }

        visited.push(node);
        f;

        if (node.right) {
          traverse(node.right);
        }
      })(this.root);
    }

    return visited;
  }
}
```

### traversal comparison

**depth-first** _vs_ **breadth-first** : they both **timeComplexity is same** but **spaceComplexity is different** if we got **a wide tree** like this:

![](./assets/Z20M5iE.png)

**breadth-first take up more space.** cuz we adding more element to queue.

if we got **a depth long tree** like this:

![](./assets/Binary-search-tree-insertion-When-a-sequence-of-data-f1-3-4-6-5-7-9-8-2-g.png)

**depth-first take up more space.**

<hr/>

**potentially use cases for dfs variants (_preOder postOrder inOrder_)**
preOrder is useful when we want a clone of tree.
inOrder is useful when we want data in order that it's stored in tree.

## Binary heaps

### terminology

- a binary heap is as compact as possible (all the children of each node are as full as they can be and left children and filled out first)
- each parent has at most two children

**Max Binary Heap**:

- **parent** nodes are always greater than **child** nodes but there is no guarantees between sibling

**Min Binary Heap**:

- **child** nodes are always greater than **parent** nodes but there is no guarantees between sibling

### binary heap parent and child relations

![](./assets/binaryHeapsParentAndChildRelation.jpg)

```typescript
class MaxBinaryHeap {
  private _values: number[] = [];
  get values(): number[] {
    return this._values;
  }

  private sinkingUp(value: number): void {
    let valueIndex = this._values.length - 1;
    while (valueIndex > 0) {
      const parentIndex = Math.floor((valueIndex - 1) / 2);
      const parent = this._values[parentIndex];

      if (value <= parent) break;

      this._values[parentIndex] = value;
      this._values[valueIndex] = parent;

      valueIndex = parentIndex;
    }
  }
  private sinkingDown(): void {
    let targetIndex = 0;
    while (true) {
      let leftChildIndex = targetIndex * 2 + 1,
        rightChildIndex = targetIndex * 2 + 2;

      let target = this._values[targetIndex],
        leftChild = this._values[leftChildIndex],
        rightChild = this._values[rightChildIndex];

      if (target < leftChild && target < rightChild) {
        if (rightChild > leftChild) {
          [this._values[targetIndex], this._values[rightChildIndex]] = [
            this._values[rightChildIndex],
            this._values[targetIndex],
          ];

          targetIndex = rightChildIndex;
        } else {
          [this._values[targetIndex], this._values[leftChildIndex]] = [
            this._values[leftChildIndex],
            this._values[targetIndex],
          ];

          targetIndex = leftChildIndex;
        }

        continue;
      } else if (rightChild >= target) {
        [this._values[targetIndex], this._values[rightChildIndex]] = [
          this._values[rightChildIndex],
          this._values[targetIndex],
        ];

        targetIndex = leftChildIndex;

        continue;
      } else if (leftChild >= target) {
        [this._values[targetIndex], this._values[leftChildIndex]] = [
          this._values[leftChildIndex],
          this._values[targetIndex],
        ];

        targetIndex = leftChildIndex;

        continue;
      }

      break;
    }
  }

  public insert(value: number): number[] {
    this._values.push(value);
    this.sinkingUp(value);
    return this._values;
  }

  public extractMax(): number | null {
    if (!this._values.length) {
      return null;
    }
    const root = this._values[0];
    this._values[0] = this._values[this._values.length - 1];
    this._values.pop();
    this.sinkingDown();

    return root;
  }
}
```

## Priority Queue

A data structure which every element has a priority.
Elements with higher priorities are served before elements with lower priorities.

**In the following example, we implemented a priority queue using minBinaryHeap but you should know binaryHeaps and priority queue is two different concepts and we just use an abstract of it**

```typescript
interface INode {
  value: any;
  priority: number;
}

class _Node implements INode {
  constructor(public value: any, public priority: number = 0) {}
}

class PriorityQueue {
  private _values: INode[] = [];
  get values(): INode[] {
    return this._values;
  }

  private sinkingUp(node: INode): void {
    let valueIndex = this._values.length - 1;
    while (valueIndex > 0) {
      const parentIndex = Math.floor((valueIndex - 1) / 2);
      const parent = this._values[parentIndex];

      if (node.priority >= parent.priority) break;

      this._values[parentIndex] = node;
      this._values[valueIndex] = parent;

      valueIndex = parentIndex;
    }
  }
  private sinkingDown(): void {
    let targetIndex = 0;
    while (true) {
      let leftChildIndex = targetIndex * 2 + 1,
        rightChildIndex = targetIndex * 2 + 2;

      let target = this._values[targetIndex],
        leftChild = this._values[leftChildIndex],
        rightChild = this._values[rightChildIndex];

      if (
        leftChild &&
        rightChild &&
        target.priority > leftChild.priority &&
        target.priority > rightChild.priority
      ) {
        if (rightChild.priority < leftChild.priority) {
          [this._values[targetIndex], this._values[rightChildIndex]] = [
            this._values[rightChildIndex],
            this._values[targetIndex],
          ];

          targetIndex = rightChildIndex;
        } else {
          [this._values[targetIndex], this._values[leftChildIndex]] = [
            this._values[leftChildIndex],
            this._values[targetIndex],
          ];

          targetIndex = leftChildIndex;
        }

        continue;
      } else if (rightChild && rightChild.priority <= target.priority) {
        [this._values[targetIndex], this._values[rightChildIndex]] = [
          this._values[rightChildIndex],
          this._values[targetIndex],
        ];

        targetIndex = leftChildIndex;

        continue;
      } else if (leftChild && leftChild.priority <= target.priority) {
        [this._values[targetIndex], this._values[leftChildIndex]] = [
          this._values[leftChildIndex],
          this._values[targetIndex],
        ];

        targetIndex = leftChildIndex;

        continue;
      }

      break;
    }
  }

  public enqueue({ value, priority }: INode): _Node[] {
    const node = new _Node(value, priority);
    this._values.push(node);
    this.sinkingUp(node);
    return this._values;
  }

  public dequeue(): _Node | null {
    if (!this._values.length) {
      return null;
    }
    const root = this._values[0];
    this._values[0] = this._values[this._values.length - 1];
    this._values.pop();
    this.sinkingDown();

    return root;
  }
}
```

## Hash Tables

Hash tables are collection of key-value pairs

### collisions

There is possibility for handle collisions is hash tables :

- Separate chaining ( e.g. using nested arrays of key values _implemented in following hash tables_ )
- linear probing ( if index filled place {key, value} in next position )

```typescript
type El = [string, any];
class HashTable {
  private keyMap: El[][];
  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  public _hash(key: string): number {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < key.length; i++) {
      const characterCode = key.charCodeAt(i) - 96;
      total = (total + characterCode * WEIRD_PRIME) % this.keyMap.length;
    }
    return total;
  }

  set(key: string, value: any): El[][] {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);

    return this.keyMap;
  }

  get(key: string): El | undefined {
    const index = this._hash(key);

    const elements = this.keyMap[index];

    if (elements) {
      for (let value of elements) {
        if (value[0] === key) return value[1];
      }
    }

    return undefined;
  }

  get keys(): string[] {
    const keys: string[] = [];
    for (let value of this.keyMap) {
      if (value) {
        for (let _value of value) {
          keys.push(_value[0]);
        }
      }
    }
    return keys;
  }

  get values(): any[] {
    const values = new Set<any>();

    for (let value of this.keyMap) {
      if (value) {
        for (let _value of value) {
          values.add(value[1]);
        }
      }
    }

    return [...values];
  }
}
```

## Graphs

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for directed graph.

### terminology

- vertex :node

- edge : connection between nodes

- directed/ undirected graph:

  in directed graph there is a direction assigned to vertices an in undirected no direction assigned.
  ![](./assets/three-node-networks.jpg)

- weighted/ unweighted graph:

  in weighted graph there is a weight associated by edges but in unweighted graph no weight assigned to edges
  ![](./assets/3.-Weithened-Graph.png)

### adjacency matrix

![](./assets/GahiR.jpg)

## adjacency list

![](./assets/268857bd-bb32-4fa5-88c9-66d7787952e9.png)

## adjacency list vs adjacency matrix

|   Operation   | Adjacency List | Adjacency Matrix |
| :-----------: | :------------: | :--------------: |
|  Add vertex   |      O(1)      |      O(V^2)      |
|   Add Edge    |      O(1)      |       O(1)       |
| Remove vertex |     O(V+E)     |      O(V^2)      |
|  Remove Edge  |      O(E)      |       O(1)       |
|     Query     |     O(V+E)     |       O(1)       |
|    Storage    |     O(V+E)     |      O(V^2)      |

- |V| : number of Vertices
- |E| : number of Edges

<hr/>

- **Adjacency List** take **less space** in sparse graph( when we have a few edges ).
- **Adjacency List** are **faster to iterate** over edges.
- **Adjacency Matrix** are **faster to** finding a specific edge.

### graph(adjacency list)

```typescript
interface AdjacencyList {
  [vertex: string]: string[];
}

class Graph {
  private _adjacencyList: AdjacencyList = {};
  public get adjacencyList(): AdjacencyList {
    return this._adjacencyList;
  }
  public set adjacencyList(value: AdjacencyList) {
    this._adjacencyList = value;
  }

  public addVertex(vertex: string): AdjacencyList {
    this._adjacencyList[vertex] = [];
    return this._adjacencyList;
  }

  public addEdge(vertex1: string, vertex2: string): boolean {
    if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
      this._adjacencyList[vertex1].push(vertex2),
        this._adjacencyList[vertex2].push(vertex1);

      return true;
    }
    return false;
  }

  public removeEdge(vertex1: string, vertex2: string): boolean {
    if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
      (this._adjacencyList[vertex1] = this._adjacencyList[vertex1].filter(
        (value: string) => value !== vertex2
      )),
        (this._adjacencyList[vertex2] = this._adjacencyList[vertex2].filter(
          (value: string) => value !== vertex1
        ));
      return true;
    }
    return false;
  }

  public removeVertex(vertex: string): string | undefined {
    if (this._adjacencyList[vertex]) {
      for (let key in this._adjacencyList) {
        this.removeEdge(key, vertex);
      }
      delete this._adjacencyList[vertex];

      return vertex;
    }
    return undefined;
  }
}
```

## Graph Traversal

### depth first traversal and breadth first traversal in graph

```typescript
interface AdjacencyList {
  [vertex: string]: string[];
}

class Graph {
  private _adjacencyList: AdjacencyList = {};
  public get adjacencyList(): AdjacencyList {
    return this._adjacencyList;
  }
  public set adjacencyList(value: AdjacencyList) {
    this._adjacencyList = value;
  }

  public addVertex(vertex: string): AdjacencyList {
    this._adjacencyList[vertex] = [];
    return this._adjacencyList;
  }

  public addEdge(vertex1: string, vertex2: string): boolean {
    if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
      this._adjacencyList[vertex1].push(vertex2),
        this._adjacencyList[vertex2].push(vertex1);

      return true;
    }
    return false;
  }

  public removeEdge(vertex1: string, vertex2: string): boolean {
    if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
      (this._adjacencyList[vertex1] = this._adjacencyList[vertex1].filter(
        (value: string) => value !== vertex2
      )),
        (this._adjacencyList[vertex2] = this._adjacencyList[vertex2].filter(
          (value: string) => value !== vertex1
        ));
      return true;
    }
    return false;
  }

  public removeVertex(vertex: string): string | undefined {
    if (this._adjacencyList[vertex]) {
      for (let key in this._adjacencyList) {
        this.removeEdge(key, vertex);
      }
      delete this._adjacencyList[vertex];

      return vertex;
    }
    return undefined;
  }

  public dfcRecursive(startingVertex: string): string[] {
    const results: string[] = [];
    const adjacencyList = this._adjacencyList;

    let currentVertex = this._adjacencyList[startingVertex];
    if (currentVertex) {
      const visitedVertex: { [vertex: string]: boolean } = {};

      (function traverse(vertex: string | undefined): void {
        if (!vertex) return;

        if (!visitedVertex[vertex]) {
          visitedVertex[vertex] = true;
          results.push(vertex);

          for (let neighbor of currentVertex) {
            if (!visitedVertex[neighbor]) {
              currentVertex = adjacencyList[neighbor];
              traverse(neighbor);
            }
          }
        }
      })(startingVertex);
    }

    return results;
  }
  // or
  public dfsIterative(startingVertex: string): string[] {
    const results: string[] = [];

    if (this._adjacencyList[startingVertex]) {
      let stack: string[] = [startingVertex];
      const visitedVertex: { [vertex: string]: boolean } = {};

      while (stack.length) {
        debugger;
        const currentVertex = stack.pop();
        if (currentVertex && !visitedVertex[currentVertex]) {
          visitedVertex[currentVertex] = true;
          results.push(currentVertex);
          stack = [...stack, ...this._adjacencyList[currentVertex]];
        }
      }
    }

    return results;
  }

  public breadthFirstSearch(startingVertex: string): string[] {
    const results: string[] = [];

    if (this._adjacencyList[startingVertex]) {
      let queue = [startingVertex];
      const visitedVertex: { [vertex: string]: boolean } = {};

      while (queue.length) {
        const currentVertex = queue.shift();
        if (currentVertex && !visitedVertex[currentVertex]) {
          visitedVertex[currentVertex] = true;
          results.push(currentVertex);
          queue = [...queue, ...this._adjacencyList[currentVertex]];
        }
      }
    }

    return results;
  }
}
```

## Dijkstra's Shortest path firt Algorithms

Finding shortest path between two vertices in a **weighted graph**.

![](./assets/Dijkstra_Animation.gif)

```typescript
interface Value {
  value: any;
  priority: number;
}

interface Neighbor {
  vertex: string;
  weight: number;
}

interface AdjacencyList {
  [vertex: string]: Neighbor[];
}

// naive priority queue
class PriorityQueue {
  private _values: Value[] = [];
  public get values(): Value[] {
    return this._values;
  }

  public enqueue(value: any, priority: number): Value[] {
    this._values.push({ value, priority });
    this.sort();
    return this._values;
  }

  public dequeue(): Value {
    const value = this._values.shift();
    return value as Value;
  }

  private sort() {
    this._values.sort((a: Value, b: Value) => a.priority - b.priority);
  }
}

class WeightedGraph {
  private _adjacencyList: AdjacencyList = {};
  public get adjacencyList(): AdjacencyList {
    return this._adjacencyList;
  }
  public set adjacencyList(value: AdjacencyList) {
    this._adjacencyList = value;
  }

  public addVertex(vertex: string): AdjacencyList {
    this._adjacencyList[vertex] = [];
    return this._adjacencyList;
  }

  public addEdge(vertex1: string, vertex2: string, weight: number): boolean {
    if (this._adjacencyList[vertex1]) {
      this._adjacencyList[vertex1].push({ vertex: vertex2, weight });
      this._adjacencyList[vertex2].push({ vertex: vertex1, weight });
      return true;
    }
    return false;
  }

  /* 
    dijkstra shortest path first
    */

  dijkstraSPF(startingVertex: string, targetVertex: string): string[] {
    let path: string[] = [];

    if (
      this._adjacencyList[startingVertex] &&
      this._adjacencyList[targetVertex]
    ) {
      const pq = new PriorityQueue();
      const previousVertex: { [vertex: string]: string | null } = {};
      const distances: { [vertex: string]: number } = {};

      // build initial states
      for (let key in this._adjacencyList) {
        if (key === startingVertex) {
          (distances[key] = 0), pq.enqueue(key, 0);
        } else {
          distances[key] = Infinity;
          pq.enqueue(key, Infinity);
        }
        previousVertex[key] = null;
      }

      while (pq.values.length) {
        let smallest = pq.dequeue().value;
        if (smallest) {
          if (smallest === targetVertex) {
            // done build path
            while (previousVertex[smallest] || smallest === startingVertex) {
              path.push(smallest);
              smallest = previousVertex[smallest];
            }
            break;
          }

          for (let neighbor of this._adjacencyList[smallest]) {
            const candidate = distances[smallest] + neighbor.weight;

            let nextNeighbor = neighbor.vertex;

            if (candidate < distances[nextNeighbor]) {
              distances[nextNeighbor] = candidate;

              previousVertex[nextNeighbor] = smallest;

              pq.enqueue(nextNeighbor, candidate);
            }
          }
        }
      }
    }

    return path.reverse();
  }
}
```

## Dynamic Programming (light introduction)

It's a method for solving a complex problems by breaking it down into a collection of simpler problems, solving their subProblems **once** and **storing** their solutions.
_technically it using knowledge of last problems to solve next by memorization_

### example Fibonacci sequence

Let's implement it without dynamic programming:without dynamic programming:

**_in fibonacci sequence fib(n) = fib(n-2) + fib(n-1) && fin(1) = 1 && fib(2) = 1_**

**O(2^n)**

```typescript
function fib(n: number): number {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```

![](./assets/2-Figure3.1-1.png)

As you see we calculate f(5) two times with current implementation.

### memorization

Storing the results of expensive function class and returning the cached result when the same inputs occur again.

O(n)

```typescript
function fib(n: number, memo: number[] = []): number {
  if (memo[n]) return memo[n];

  if (n <= 2) return 1;

  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}
fib(10000); // Maximum callStack exceeded
```

### tabulation

```typescript
function fib(n: number): number {
  if (n <= 2) return 1;

  const fibNumbers = [0, 1, 1];

  for (let index = 3; index <= n; index++) {
    fibNumbers[index] = fibNumbers[index - 1] + fibNumbers[index - 2];
  }

  console.log(fibNumbers);

  return fibNumbers[n];
}
fib(10000); // Infinity
```

## Interesting Stuff

```typescript
// turn it to boolean
console.log(!!1); // true
console.log(!!0); // false

// group operation
(newNode.prev = prevNode), (newNode.next = nextNode);
```

## String

```typescript
const str = "hello";
str.search('lo') || .indexOf('lo') // 3
str.includes('lo') // true
```

### string pattern matching

```typescript
// regex.test(str: number) Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
function charCount(str: string) {
  const result: { [key: string]: number } = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

// *** string.chatCodeAt(i: number) Returns the unicode of value on specified location

/* 
numeric (0-9) code > 47 && code < 58;
upper alpha (A-Z) code > 64 && code < 91;
lower alpha (a-z) code > 96 && code <123;
*/
function charCount(str: string) {
  const result: { [key: string]: number } = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

function isAlphaNumeric(char: string) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
```

## Array

```typescript
const array = ["hello", "world"];
arr.find((el) => el === "world"); // world
arr.findIndex((el) => el === "world"); // 1

[1, 2].includes(1); // true

Array.from({ length: 2 }, () => ["lol"]); // [["lol"], ["lol"]]

const stack = ["A", "B", "D", "E", "C", "F"];
const s = stack.shift();
const p = stack.pop();
console.log(s); // "A"
console.log(p); // "F"

["a", "b"].reverse(); // ['b', 'a']
```

### Object

```typescript
delete this._adjacencyList[vertex]; // delete key and value from object
delete this._adjacencyList.vertex;
```

### Map

```typescript
const map = new Map();
// store any type of **unique key** of use duplicate key it will override last value
map.set({ 1: "Object" }, "Object");
map.set(["arr"], "arr");
map.set(1, "number");
map.set(false, "boolean");
map.set(() => console.log("Function"), "Function");

console.log(map);
/* 
0: {Object => "Object"}
1: {Array(1) => "arr"}
2: {1 => "number"}
3: {false => "boolean"}
4: {function () { return console.log("Function"); } => "Function"}
*/

// iterable by **for (let [key, value] of map)**
for (let [key, value] of map) console.log(key, value);

// map to arr
const arr = [...map]; // :[ [key, value] ]
/* 
0: (2) [{…}, "Object"]
1: (2) [Array(1), "arr"]
2: (2) [1, "number"]
3: (2) [false, "boolean"]
4: (2) [ƒ, "Function"]
*/
```

## Math

```typescript
Math.pow(2, 2); // 4
Math.abs(-5); // 5
Math.log10(100); // 10
Math.max(...[1, 2, 3]); // 3
Math.min(...[1, 2, 3]); // 1
```

</details><details> <summary>CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/</summary>

### [CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/deque.md](CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/deque.md)

# Deque

### Projected Time

80 minutes

### Prerequisites

- [Intro to Data Structures](/data-structures/intro-to-data-structures.md)
- [JavaScript 1 - Variables, Strings, Numbers](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-arrays-functions.md)
- [JavaScript 3 - Conditionals, Comparisons, Booleans](/javascript/javascript-3-conditionals.md)
- [JavaScript 4 - Loops](/javascript/javascript-4-loops.md)
- [JavaScript 5 - Switch Statements](/javascript/javascript-5-switch.md)
- [JavaScript 6 - Object Literals](/javascript/javascript-6-object-literals.md)
- [JavaScript 7 - Object-Oriented Programming](/javascript/javascript-7-oop.md)
- [Runtime Complexity](/runtime-complexity/runtime-complexity.md)

### Motivation

Deque is used as an abstract data type, also referenced as a double-ended queue.
Similar to a queue, deques exist as an ordered collection of items. A deque's nature is unrestrictive, meaning that it easily allows for adding and removing items at either end. Deques are a unique hybrid linear structure that provide the capabilities of stacks and queues in a unique data structure. Deques can be implemented with a dynamic array or with a doubly-linked list and they do not require Last In First Out (LIFO) or First In First Out (FIFO)orderings that are required by both stacks and queues. The homophone "dequeue" is used as a verb, meaning to remove from a queue.

Examples that use Deque:

- A nice application of the deque is storing a web browser's history. Recently visited URLs are added to the front of the deque, and the URL at the back of the deque is removed after some specified number of insertions at the front.
- Another common application of the deque is storing a software application's list of undo operations.
- One example where a deque can be used is the A-Steal job scheduling algorithm. This algorithm implements task scheduling for several processors. A separate deque with threads to be executed is maintained for each processor.
  [(by Atishay Jain)](https://www.quora.com/What-are-some-of-the-real-life-application-of-Deque)

### Objectives

**Participants will be able to:**

- Understand when to use a deque
- Be familiar with common methods
- Implement a deque
- Find and use a deque library
- Discern performance tradeoffs for different implementations of a deque

### Specific Things to Learn

- Properties of a deque
- Common use cases for deque
- Review of common implementation(s)

### Materials

- [Deque Geeks for Geeks](https://www.geeksforgeeks.org/deque-set-1-introduction-applications/)
- [Deque Data Structure](https://www.youtube.com/watch?v=kLBuJ1Hle8g) - 7 minute video
- [Stacks, Queues, & Double Ended Queues](https://youtu.be/IITnvmnfi_Y) - 6 minute video

### Lesson

Review content from slides (TODO: add link here when available).

### Common Mistakes / Misconceptions

- There may be an implementation that is very simple, but untenable for larger deques.

### Guided Practice

Discuss as a group how a deque differs from other data structures already reviewed. Some suggested questions to consider:

- What are the methods a deque must have?
- What can be tracked in a deque?
- When would a deque be used?
- What other data structures are used to make a deque?

### Independent Practice

Implement a deque in JavaScript, keeping in mind all methods and helper methods that define a deque. Consider performance -- what happens as you call specific methods you've defined?

### Challenge

There are many different ways to implement a deque in any language. Implement a deque a different way from what you did before, then consider how it differs. Is this second implementation better? If you get stuck, check out StackOverflow comments!

### Check for Understanding

Find another person in the cohort and discuss:

- What are some of the of the advantages/ disadvantages of using deques?
- In a language of your choice, can you implement some of the basic operations a deque must perform?
- Having implemented queues and stacks, can you identify situations where deques are a better data structure to use?

### Additional Reading

A-Steal Job Scheduling was briefly mentioned in the lesson as a use of deques. You can [read more here](http://supertech.csail.mit.edu/papers/steal.pdf).

### [CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/hash-tables.md](CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/hash-tables.md)

# Hash Tables

### Projected Time

About 2 hours and 30 minutes

- 60 mins Lesson
- 30 mins Independent Practice
- 30 mins Check for Understanding

### Prerequisites

- [JavaScript prototypal inheritance](../javascript/javascript-7-oop.md)
- [Runtime complexity](../runtime-complexity/runtime-complexity.md)

### Motivation

Hash tables are one of the most frequently used data structures. You'll use them in your code a lot, so knowing how and when to use hash tables is important.

Knowing how hash tables work will give you a deeper understanding of why hash tables are used and what they're good for. Hash tables are also often used in the solution to interview questions.

Uses of Hashing:

- Authentication - Cryptographic hash functions let you log in to a system without storing your password anywhere vulnerable.
- Search - Hashing is useful for indexing large storage spaces, so that you can look things up in them without reading their entire contents every time. Developers usually do the indexing of big data sets to reduce the time of processing operations over them.
- Programming languages - Hash tables are a convenient way to implement the mechanism that connects a variable's name to its memory location.
  [(quora.com)](https://www.quora.com/What-are-the-real-world-examples-for-hashing)

### Objectives

- Understand basic hashing algorithms
- Know the runtime of hash table operations
- Be able to identify problems where hash tables could be used
- Be able to write code that uses hash tables to solve problems
- Understand how hash tables are implemented and how this implementation leads to the runtime properties

### Specific Things to Learn

- A hash table is used to store key-value pairs or tuples.
- Why is this called a hash table? The hash of the key determines where the value is stored.
- All objects in JavaScript are hash tables.
- Look-up in a hash table is on average O(1). Worst case look-up is O(n).
- Using different hashing algorithms on the keys will affect the hash table's performance.

### Materials

- [Understanding and Using Hash Tables Slides](https://docs.google.com/presentation/d/1V9liCnncXJDXZ0CK_MbXfFrWz6cwGucTYdIkHdkJ9_8/edit#slide=id.p)
- [Implementing Hash Tables Slides](https://docs.google.com/presentation/d/1-zCx1fc5cUP6rklL-CrYzmO8ibcXztsOZxJUv3Fpd-s/edit#slide=id.g2f6e14aaa5_0_0)

### Lesson

- Read through lesson slides [Understanding and Using Hash Tables](https://docs.google.com/presentation/d/1V9liCnncXJDXZ0CK_MbXfFrWz6cwGucTYdIkHdkJ9_8/edit#slide=id.p)
- Read through lesson slides [Implementing Hash Tables](https://docs.google.com/presentation/d/1-zCx1fc5cUP6rklL-CrYzmO8ibcXztsOZxJUv3Fpd-s/edit#slide=id.g2f6e14aaa5_0_0)

### Common Mistakes / Misconceptions

- When should I use an array instead of a hash table? If your keys are sequential integers.

### Preamble

Languages call this type of data structure by many names:

- ES2015 JS calls it a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) but historically, since all Objects allow lookup by property name, folks just used plain `Object`
- Python calls it a [`Dict`](https://realpython.com/python-dicts/) for Dictionary since you look it up by a key, just like a dictionary's have an index for each letter
- Java calls is a [`HashMap`](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html) or `Hashtable`
- Ruby calls it a [`Hash`](https://ruby-doc.org/core-2.7.0/Hash.html)

### Guided Practice

Let's understand how to make hash maps using JavaScript.

- [How to implement hash table in javascript](https://reactgo.com/hashtable-javascript/)
- Here is the link for the video on [how to make hash tables using JavaScripts](https://www.youtube.com/watch?v=VundFD_ccgE).
- The another link for what hash tables are and how to implement them is [Basics of Hash Tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/). It contains the code for how _different types of hashing_ can be done by _coding_ in JS. The apprentices should be able to code different type of hashtables like linear probing, quadratic probing etc. They can start tutorial where coding begins provided that they know the basics of hashing.

### Independent Practice

#### Coding questions that use hash tables

- A person is represented in a JSON string, and the person's `name` is specified. Say hello to this person.

#### Implement a hash table

Basics: set(), get(), print()
Challenge 1: Handle collisions with chaining
Challenge 2: Make the table larger when enough items are added to the table

### Challenge

Compare implementations of bucket collisions with a peer. Brainstorm different data structures one can use for implementing buckets. Code review others' hash table implementations: Are clear parameter and method names used? Is the code DRY? Compare hashing algorithm choices with a peer.

### Check for Understanding

- Explain how a hash table uses hashing.
- What is a real-world use case for a hash table? What are the advantages?

### Supplemental Materials

- [How to implement simple hash table?](https://medium.freecodecamp.org/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997)
- [Hash Tables in JavaScript](http://www.mojavelinux.com/articles/javascript_hashes.html)
- [Objects and Hash Tables in JavaScript](https://codeburst.io/objects-and-hash-tables-in-javascript-a472ad1940d9)
- [Algorithms in JavaScript: Hash Tables](https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b)

### [CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/intro-to-data-structures.md](CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/intro-to-data-structures.md)

# Data Structures

### Projected Time

75 - 90 min

- 20 minutes - Slideshow
- 40 minutes - Independent Practice
- 15 minutes - Check for Understanding

### Prerequisites

- [JavaScript 1 - Variables, Strings, Numbers](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-arrays-functions.md)
- [JavaScript 3 - Conditionals, Comparisons, Booleans](/javascript/javascript-3-conditionals.md)
- [JavaScript 4 - Loops](/javascript/javascript-4-loops.md)
- [JavaScript 5 - Switch Statements](/javascript/javascript-5-switch.md)
- [JavaScript 6 - Object Literals](/javascript/javascript-6-object-literals.md)
- [JavaScript 7 - Object-Oriented Programming](/javascript/javascript-7-oop.md)
- [Runtime Complexity](/runtime-complexity/runtime-complexity.md)

### Motivation

Structuring data, and deciding how to organize and store data in non-arbitrary ways is one way to create performant programs. When data is efficiently structured, then data manipulation can be optimized. With that in mind, it's important to take note of the fact that no single data structure is a one-size fits all solution, therefore, it is necessary to know the strengths and limitations of several data structures. Data Structures can be grouped into two camps: **Linear** and **Non-Linear**.

Linear data structures arrange values in a linear form, and some commonly used linear data structures include
**Arrays**: great for storing a list of a fixed length,
**Linked-list**: great for storing a number of data items that can easily change size to add or remove items,
**Stacks**: Add to top and remove from the top (last in, first out data traversal),
**Queues**: Add to the back and remove from the front, (first in first out data storage/traversal), and
**Priority queues**: add anywhere, and remove the highest priority (array that searches for the lowest cost contained and appends it to the end).

**Non-linear data structures** imply that data values are not arranged in order. Some structures include
**hash tables**: unordered lists which use a hash function to insert and search (used to implement key, value, dictionary-like interfaces),
**Trees**: data is organized in branches (data structure consisting of one or more data nodes, an XML document with a root node is a good example),
**Binary Trees** (great for storing records that can be accessed in a key, value pair),
**Graphs**: a general branching structure with less strict conditions than a tree.
Some other data structures include record, union, tagged union, class, graphs, and binary trees.

Data Structure forms the major part of IT companies. Many top companies like Microsoft and Google hire on the basis of coding skills that mainly includes data structure.

Example of people getting hired having data structure knowledge:

- [How I landed offers from Microsoft, Amazon and Twitter (by Zhia Hwa Chong)](https://www.freecodecamp.org/news/how-i-landed-offers-from-microsoft-amazon-and-twitter-without-an-ivy-league-degree-d62cfe286eb8/)

### Objectives

**Apprentices will be able to:**

- Consider data structure availability when problem solving
- Contrast data structures with data types
- Identify main types of data structures, along with their pros and cons
- Classic use cases for each data structure

### Materials

- [Overview of common data structures](https://www.topcoder.com/community/data-science/data-science-tutorials/data-structures/)
- [Article: https://www.tutorialspoint.com/data_structures_algorithms/data_structures_basics.htm](https://www.tutorialspoint.com/data_structures_algorithms/data_structures_basics.htm)
- [Data Structures: Crash Course Computer Science #14 ](https://youtu.be/DuDz6B4cqVc)

### Lesson

[Data Structures & Algorithms Slideshow](https://docs.google.com/presentation/d/1Vxx4hTzi8JFO8TFWS4dU4q2tyIEq7iBex59m6-k68XA/edit?usp=sharing)

### Independent Practice

1. Using the links available in the Common Mistakes section, create a diagram outlining the key functional differences between type and structure.
2. Watch Crash Course Computer Science #14 video featured in Materials section above.
3. Look through the Tutorials Point lessons from Data Structures through the Sorting Techniques section to gain more insight on Data Structures and their use cases.
4. Practice questions on every data structure using link available in the Materials section

### Common Mistakes / Misconceptions:

[Data structures](https://en.wikipedia.org/wiki/Data_structure) and [data types](https://en.wikipedia.org/wiki/Data_type) are not the same.

### Check for Understanding

Using a timer, pair up for 5 minutes and quiz each other while reviewing the differences between data types and data structures. After that, switch partners and discuss the ways each featured data structure works for 10 minutes.

### Additional Resources

- [Watch Data Structures and Algorithms in action at visualgo.net](https://visualgo.net/en)
- [Article w/Videos: Data Structures and Algorithms in JavaScript by Beau Carnes](https://medium.freecodecamp.org/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b)
- [Practice Data Structures](https://www.hackerearth.com/practice/data-structures/arrays/1-d/tutorial/)

### [CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/linked-lists.md](CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/linked-lists.md)

# Linked Lists

### Projected Time

About 1 hour 20mins

### Prerequisites

- [Data Structures Overview](/data-structures/intro-to-data-structures.md)
- [JavaScript Arrays, Functions](/javascript/javascript-2-arrays-functions.md)
- [JavaScript Objects](/javascript/javascript-7-oop.md)
- [Prototypical Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### Motivation

Though you will rarely (if ever) be asked to implement a data structure from scratch, having solid knowledge and understanding of the various data structures and ideal use cases can help you ace a technical interview (and get into your dream tech job).

### Objectives

**Participants will be able to:**

- Implement various types of linked lists.
- Understand which portions of linked lists are already implemented in JavaScript.
- Implement their own linked lists under the correct circumstances.

### Specific Things To Learn

- What is a linked list
- What are the basic characteristics of a linked list
  - Why would a linked list be used instead of an array?
  - What other data structures are similar to linked lists?
  - What is the difference between a singly-linked list and a doubly linked list
  - Why would a singly linked list be used instead of a doubly linked list?
- How to recognize linked lists when you see them
- How to know when to use linked lists to solve a problem.
- Linked lists in different versions of JavaScript.

### Lesson

Create a file named "node.js" and create a Node class like the one below but give each Node a 'text' attribute.

<code>
// Declare a Node() function that we will use to instantiate new Node objects.
function Node(data) {
    this.data = data;
    this.next = null;
}

// Declare a SinglyLinkedList() function that we will use as a basis for our singly-linked list.
function SinglyLinkedList() {
this.\_length = 0;
this.head = null;
}

// Use JavaScript prototyping to give the SinglyLinkedList class new public methods.
SinglyLinkedList.prototype.add = function(value) {
let node = new Node(value),
currentNode = this.head;

    // If the list is empty (has no head value)
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // Loop over all nodes that have a value in their "next" property.
    // This loop ends when it reaches a node that has no value in the "next" property.
    // We use this to determine the "last" node of the singly linked list.
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    // We can now add our node to the end of the list by storing it in the "next" of the node we determined was last in the list.
    currentNode.next = node;

    // We need to increment the length of the list now that we've added a new node.
    this._length++;

    return node;

};

SinglyLinkedList.prototype.findByPosition = function(position) {
let currentNode = this.head,
length = this.\_length,
count = 1,
message = {failure: 'Failure: non-existent node in this list.'};

    // Catch the possibility that a position that doesn't exist was provided.
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // Loop over all nodes until the node before the desired position
    while (count < position) {
        // Pull the "next" node object from the node based on the count
        currentNode = currentNode.next;
        count++;
    }

    // Because our loop stopped at the position before, our "currentNode" value is correctly set.
    return currentNode;

};

SinglyLinkedList.prototype.remove = function(position) {
let currentNode = this.head,
length = this.\_length,
count = 0,
message = {failure: 'Failure: non-existent node in this list.'},
beforeNodeToDelete = null,
nodeToDelete = null,
deletedNode = null;

    // Catch the possibility that a position that doesn't exist was provided.
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    // Only run when the first node is being removed.
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // Remaining logic that is run when any node is being removed.
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;

};
</code>

---

_Make sure to mention these things:_

- Common data structures in interviews (hash tables, binary search trees, etc.)
- Most blockchains are built on some implementation of the Merkle tree data structure patented by Ralph Merkle (check out his site -> [merkle.com](http://merkle.com/) for more info if you're into cryptography)
  - Different ways of applying and/or updating attributes
- Constructors
- Different ways of applying attributes
- How to define methods on a class in ES6
- Traversing a LinkedList
- How to remove Nodes

### Common Mistakes / Misconceptions

While traversing a singly-linked list, it is imperative that you stop BEFORE the actual node that you want to remove, as there is no going backwards to the "previous" node.

Adding/removing items is usually faster than more complex data structures.

Searching/iteration can be slower/cumbersome since every node only references the "next" node in the list.

The DOM is a kind of Linked List. Our HTML elements are contained within parent elements and there is a last and first element to every HTML document.

Other (tradeoffs when using linked lists)[https://en.wikipedia.org/wiki/Linked_list#Tradeoffs] as detailed by Wikipedia.

### Guided Practice

Create a method to add a node to the end of the Linked List and a method to delete a node with the text attribute matching the given string.

### Independent Practice

Create a method to add a new node after the node with the text attribute matching the given string.

### Challenge

See [Testing and TDD](../testing-and-tdd/testing-and-tdd.md) for a refresher on how to use Mocha and Chai to write tests.

Create a file called "LinkedList_test.js" and write tests for each of your methods using Mocha and Chai be sure to include:
<code>
const LinkedList = require('./linkedlist.js');
</code>

### Check for Understanding

Form small groups in the cohort and discuss:

- Summarize what you have learnt about linked lists. What are the basic features of linked lists?
- What are some of the common misconceptions in using linked lists?
- Draw single, double, multiple, and circular linked list diagrams, and compare with a fellow group member.

(http://blog.millermedeiros.com/linked-lists/)

### Supplemental Materials

- [MDN web docs | Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [THat JS Dude | JS: Interview Questions part -4: Stack, Queue, Linked List](https://www.thatjsdude.com/interview/linkedList.html#singlyLinkedList)
- [Geeks for Geeks | Linked List | Set 1 (Introduction)](https://www.geeksforgeeks.org/linked-list-set-1-introduction/)
- [ES6 Implementation](https://gist.github.com/klugjo/a9e9ef98fe879bc2b19b5a2e5947204c)
- [Instantiation Patterns in JavaScript](https://medium.com/dailyjs/instantiation-patterns-in-javascript-8fdcf69e8f9b)

### [CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/queues.md](CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/queues.md)

# Queues

### Projected Time

About 60-90 minutes

- Lesson Slides: 15 min
- Medium Article: 15 min
- Video Materials: 10 min
- Group Discussion: 10 min
- Independent Practice: 30 min

### Prerequisites

- [What is a Data Structure](/data-structures/intro-to-data-structures.md)
- [JavaScript 1 - Variables, Strings, Numbers](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-arrays-functions.md)
- [JavaScript 3 - Conditionals, Comparisons, Booleans](/javascript/javascript-3-conditionals.md)
- [JavaScript 4 - Loops](/javascript/javascript-4-loops.md)
- [JavaScript 5 - Switch Statements](/javascript/javascript-5-switch.md)
- [JavaScript 6 - Object Literals](/javascript/javascript-6-object-literals.md)
- [JavaScript 7 - Object-Oriented Programming](/javascript/javascript-7-oop.md)
- [Runtime Complexity](/runtime-complexity/runtime-complexity.md)

### Motivation

Queues are widely used both in programming and in real life. In programming: if you have an array of tasks to execute and not enough time to do them all as they come in, you'll need some way to both track the tasks and execute them in the order they arrived. In real life: in line for a coffee, or on hold for customer support -- there are many everyday scenarios that are real-life implementations of queues.

Application of queue in computer science:

- When a resource is shared among multiple consumers. Examples include CPU scheduling, Disk Scheduling.
- When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes. Examples include IO Buffers, pipes, file IO, etc.
  [(geeksforgeeks)](https://www.geeksforgeeks.org/applications-of-queue-data-structure/)

### Objectives

**Participants will be able to:**

- Understand when to use a queue
- Be familiar with common methods
- Implement a queue
- Find and use a queue library
- Discern performance tradeoffs for different implementations of a queue

### Specific Things to Learn

- Properties of a queue
- Common use cases for queues
- Review of common implementation(s)

### Materials

- [Queue Slides](https://docs.google.com/presentation/d/1nBWaTq5Sm1EKbquW12LmonMkW6OqAUGpQI1nW6fiNWI/edit?usp=sharing)
- [A Gentle Introduction to Data Structures: How Queues Work (20 mins read)](https://medium.freecodecamp.org/a-gentle-introduction-to-data-structures-how-queues-work-f8b871938e64)
- [Introduction to queues video (10 mins watch)](https://www.youtube.com/watch?v=XuCbpw6Bj1U)

### Lesson

1. Read through lesson slides [Queue](https://docs.google.com/presentation/d/1nBWaTq5Sm1EKbquW12LmonMkW6OqAUGpQI1nW6fiNWI/edit?usp=sharing).
2. Watch the video and read the article in the materials section.

### Common Mistakes / Misconceptions

- There may be an implementation that is very simple, but untenable for larger queues.

### Guided Practice

Discuss as a group how a queue differs from other data structures already reviewed. Some suggested questions to consider:

- What are the methods a queue must have?
- What can be tracked in a queue?
- When would a queue be used?
- What other data structures are used to make a queue?

### Independent Practice

Implement a queue in JavaScript with a partner, keeping in mind all methods and helper methods that define a queue. Consider performance -- what happens as you call specific methods you've defined?

### Challenge

Search online with your partner for a way to implement a queue other than the one you just tried. Is this second implementation better? Why or why not?

### Supplemental Materials

- [Queue concepts video (7 mins watch)](https://youtu.be/PjQdvpWfCmE)
- [Introduction to Queues video (9 mins watch)](https://www.youtube.com/watch?v=XuCbpw6Bj1U)
- [Queues Practical Use Case - Messaging (video 10 mins watch)](https://www.youtube.com/watch?v=oUJbuFMyBDk)
- [tuts+ article: Data Structures With JavaScript: Stack and Queue](https://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348)
- [Download a queues project and experiment: Kate Morley - JavaScript queues](http://code.iamkate.com/javascript/queues/)

### Check for Understanding

Share what you've learned and your implementation with another person.

### [CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/stack.md](CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/stack.md)

# Stacks

### Projected Time

About 1 hour

### Prerequisites

- [JavaScript](/javascript)
- [Functional programming](/functional-programming/FP.md)

### Motivation

Stack is one of the most commonly used data structure along with its opposite relative, queue. Understanding how to implement stack helps you better understand and describe insertion, removal, and organization of data in a sequential order.

Applications of stack includes:

- An "undo" mechanism in text editors; this operation is accomplished by keeping all text changes in a stack.
- Undo/Redo stacks in Excel or Word.
- Language processing :
  - space for parameters and local variables is created internally using a stack.
  - compiler's syntax check for matching braces is implemented by using stack.
- Back/Forward stacks on browsers.
  [(by Siddhart Mahapatra)](https://www.quora.com/What-are-the-real-life-applications-of-stack-data-structure)

### Objectives

Explain what a stack data structure is and show how it is implemented.

### Specific Things to Learn

- Definition of stack
- Show an example of stack data structure
- JavaScript methods used to implement stack

### Lesson

[Lesson slides](https://docs.google.com/presentation/d/1lOqqqXF-NYzFw0Cu3vIa-dLZeERGhcg1SFmOgW4Y62w/edit#slide=id.p)  
[Lesson video](https://drive.google.com/open?id=1ioFhuH4I0J5gAnwyw6SJxWzioAWKNrZp)

Make sure to mention these things:

- Explain what LIFO and FILO means.
- Differentiate stack and queue.

### Common Mistakes / Misconceptions

- Array and stack seem similar at first glance. While stack can be implemented using array, the data in array can be accessed randomly, whereas stack must be accessed according to order.

### Guided Practice

Explain and discuss as a class the steps involved in writing a stack structure, including:

- Constructor
- Push/Enqueue
- Pop/Dequeue
- Size control

### Independent Practice

Try to write a Stack class with the steps discussed as methods:

```
const Stack = function() {}
  // Constructor

  // Push

  // Pop

  // Size management of stack

  // Output of stack
}
```

### Challenge / Check for Understanding

Find a partner and show each other your own Stack class. Explain how the class you wrote works.

Next, ask each other the following questions:

- What is difference between a stack and a simple array?
- Which method uses LIFO?
- Which methods are used in the stack data structure?
- What is the runtime complexity of a stack?
- How to make simple class as a stack class?
- What is the meaning of '\_' (_underscore_) in the beginning of the variable name? Refer [Playing with data structures in JavaScript — Stack](https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d)
- Give some day-to-day examples where stack is used.
- What is difference between stack and queue?

### Supplemental Resources

- [GeeksforGeeks: Implementation of Stack in JavaScript](https://www.geeksforgeeks.org/implementation-stack-javascript/)
- [InitJS: Implement a Stack in JavaScript](https://initjs.org/data-structure-stack-in-javascript-714f45dbf889)

### [CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/trees.md](CONTENT/Resources/My-Data-Structures-Notes/z-NOTES/data-structures/trees.md)

# Trees

### Projected Time

about 2 hours

- Lesson Materials - 30-50 minutes
- Independent Practice - 60-90 minutes

### Prerequisites

- [Intro to Data Structures](/data-structures/intro-to-data-structures.md)
- [JavaScript 1 - Variables, Strings, Numbers](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-arrays-functions.md)
- [JavaScript 3 - Conditionals, Comparisons, Booleans](/javascript/javascript-3-conditionals.md)
- [JavaScript 4 - Loops](/javascript/javascript-4-loops.md)
- [JavaScript 5 - Switch Statements](/javascript/javascript-5-switch.md)
- [JavaScript 6 - Object Literals](/javascript/javascript-6-object-literals.md)
- [JavaScript 7 - Object-Oriented Programming](/javascript/javascript-7-oop.md)
- [Runtime Complexity](/runtime-complexity/runtime-complexity.md)

### Motivation

- Trees are the type of data structure that will allow you to store and process objects and tasks dealing with numbers, strings and everything in between. The motivation here is to understand that a tree is a type of data structure that represents data in a top down arrangement, similar to a hierarchy.

- https://google.com uses a type of tree called a 'trie' to auto-complete what you are typing into the search bar. By seeing the first few letters you've typed, it can check it's record tree of possible letters that can come after. So if you type "how do I", their record tree for "how do I" has child nodes each contain a possible following set of characters, like "learn to draw" or "tie a tie" or "build a shelf". The same can be said for auto-complete in many texting apps.

- When records are kept in order in a binary search tree (or BST), everything on one side of any branch is a lower value, and everything on the other side is a higher value, so finding something again is extremely efficient.

- Companies that care about spacial positioning are likely to use something called quadtrees or octrees which are the 2d & 3d parallels of a BST (so you may see this used for optimizing physics simulations e.g. in game engines like [Unity](https://unity3d.com/) and [Unreal](https://www.unrealengine.com/en-US/what-is-unreal-engine-4).)

- [Agari](https://www.agari.com/) used [Radix tries](https://en.wikipedia.org/wiki/Radix_tree) to optimize their IP address search engine - their efficiency went from 0(n) (searching an array) to O(log n).

### Objectives

**Participants will be able to:**
identify, implement and differentiate: trees, binary tree traversal, binary heaps, & tries.

### Specific Things to Learn

- Trees
- Binary Search Trees
- B Trees
- Tries
- Heaps

### Materials

- [Techtonica: Trees Slides](https://docs.google.com/presentation/d/1O_mK6z7q69RLvqVFmoqfmEr4XKFSYVibgf-E08hxApw/edit?usp=sharing)
- [binary search trees (video)](https://www.youtube.com/watch?v=7vw2iIdqHlM) - 7 minutes
- [B trees](https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/) -5 min read
- [tries (video)](https://youtu.be/zIjfhVPRZCg)- 5 minutes
- [tries explained (video)](https://youtu.be/-urNrIAQnNo) - 9 minutes
- [heaps (video)](https://youtu.be/t0Cq6tVNRBA) - 10 minutes
- [Data Structures: Crash Course Computer Science #14 (video)](https://youtu.be/DuDz6B4cqVc) (Trees are explained 8 minutes into the video - 1 min total)
- [Tree Implementation in an Array](https://webdocs.cs.ualberta.ca/~holte/T26/tree-as-array.html)(5 min read)
- [Data Structures: Trees (video)](https://www.youtube.com/watch?v=oSWTXtMglKE)(10 min video)

### Lesson

Work through the materials provided in 'materials'. This should take 30-50 minutes.

#### Notes:

- **Trees** associate every object to a node in a tree, and the number of children stemming from that node are referred to as its degree. There are several types of trees, including Binary Search Trees (BST) and with Binary Search Trees you can perform insertions, deletions, and retrievals.

- **Trees are a common interview question**. They can be used when you want to store data that takes the shape of a hierarchy. Unlike arrays, and linked lists, trees are a non-linear data structure. Organizing keys in the form of a tree allows us to search for a given key quicker than a linked list, but slower than searching through an array.

- **Self-balancing search trees** and **Red-Black trees** produce an upper bound of O(Log n)for search. Trees also provide a faster key insertion and deletion time than arrays, but slightly slower than unordered linked lists.

- The common uses of trees include manipulating hierarchical data, making information easy to search (tree traversal), manipulating sorted lists of data, compositing digital images for visual effects, and router algorithms.

### Independent Practice

[Cracking the Coding Interview 6th Ed.](https://www.pdfdrive.com/cracking-the-coding-interview-e52072841.html), Ch.4 | Trees & Graphs pages 100 - 107

- Read pages 100 - 107
- Implement 3 of the Interview Challenges found on pages 109 - 111

### Challenge

Ask a mentor, volunteer, or apprentice for a code review of your Tree implementation.

### Check for Understanding

Create a cheat sheet about the types of trees, binary tree traversal, binary heaps, tries, graphs, and graph search.

</details><details> <summary>CONTENT/Resources/visualizations/Linked-List-Visualization/</summary>

### [CONTENT/Resources/visualizations/Linked-List-Visualization/README.md](CONTENT/Resources/visualizations/Linked-List-Visualization/README.md)

# Linked List Visualization

Linked List Data Structure animated with javascript. This is not
an implementation of the data structure itself in javascript,
it is a visualization of how a linked list works.
