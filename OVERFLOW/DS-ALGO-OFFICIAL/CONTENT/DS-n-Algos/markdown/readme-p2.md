[Readme](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/README.md)

[readme part 2](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/readme-p2.md)

[readme part 3](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/readme-p3.md)

[readme part 4](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/readme-p4.md)

---

Difficulty: Hard
Related Topics:
"String": https://leetcode.com/tag/string
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#115-distinct-subsequenceshttpsleetcodecomproblemsdistinct-subsequencesdescription)

## ➤ [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/description/)

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

---

Difficulty: Medium
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Populating Next Right Pointers in Each Node II": https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii
"Binary Tree Right Side View": https://leetcode.com/problems/binary-tree-right-side-view

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#116-populating-next-right-pointers-in-each-nodehttpsleetcodecomproblemspopulating-next-right-pointers-in-each-nodedescription)

## ➤ [116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/)

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

---

Difficulty: Medium
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Populating Next Right Pointers in Each Node": https://leetcode.com/problems/populating-next-right-pointers-in-each-node

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#117-populating-next-right-pointers-in-each-node-iihttpsleetcodecomproblemspopulating-next-right-pointers-in-each-node-iidescription)

## ➤ [117. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/)

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

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
Similar Questions:
"Pascal's Triangle II": https://leetcode.com/problems/pascals-triangle-ii

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#118-pascals-trianglehttpsleetcodecomproblemspascals-triangledescription)

## ➤ [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/)

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

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
Similar Questions:
"Pascal's Triangle": https://leetcode.com/problems/pascals-triangle

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#119-pascals-triangle-iihttpsleetcodecomproblemspascals-triangle-iidescription)

## ➤ [119. Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/description/)

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

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#120-trianglehttpsleetcodecomproblemstriangledescription)

## ➤ [120. Triangle](https://leetcode.com/problems/triangle/description/)

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

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#121-best-time-to-buy-and-sell-stockhttpsleetcodecomproblemsbest-time-to-buy-and-sell-stockdescription)

## ➤ [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

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

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#122-best-time-to-buy-and-sell-stock-iihttpsleetcodecomproblemsbest-time-to-buy-and-sell-stock-iidescription)

## ➤ [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)

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

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#123-best-time-to-buy-and-sell-stock-iiihttpsleetcodecomproblemsbest-time-to-buy-and-sell-stock-iiidescription)

## ➤ [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/)

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

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#124-binary-tree-maximum-path-sumhttpsleetcodecomproblemsbinary-tree-maximum-path-sumdescription)

## ➤ [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/)

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

---

Difficulty: Easy
Related Topics:
"Two Pointers": https://leetcode.com/tag/two-pointers
"String": https://leetcode.com/tag/string
Similar Questions:
"Palindrome Linked List": https://leetcode.com/problems/palindrome-linked-list
"Valid Palindrome II": https://leetcode.com/problems/valid-palindrome-ii

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#125-valid-palindromehttpsleetcodecomproblemsvalid-palindromedescription)

## ➤ [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)

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

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#126-word-ladder-iihttpsleetcodecomproblemsword-ladder-iidescription)

## ➤ [126. Word Ladder II](https://leetcode.com/problems/word-ladder-ii/description/)

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

---

Difficulty: Medium
Related Topics:
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
"Word Ladder II": https://leetcode.com/problems/word-ladder-ii
"Minimum Genetic Mutation": https://leetcode.com/problems/minimum-genetic-mutation

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#127-word-ladderhttpsleetcodecomproblemsword-ladderdescription)

## ➤ [127. Word Ladder](https://leetcode.com/problems/word-ladder/description/)

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

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
"Union Find": https://leetcode.com/tag/union-find
Similar Questions:
"Binary Tree Longest Consecutive Sequence": https://leetcode.com/problems/binary-tree-longest-consecutive-sequence

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#128-longest-consecutive-sequencehttpsleetcodecomproblemslongest-consecutive-sequencedescription)

## ➤ [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

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

---

Difficulty: Medium
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Path Sum": https://leetcode.com/problems/path-sum
"Binary Tree Maximum Path Sum": https://leetcode.com/problems/binary-tree-maximum-path-sum

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#129-sum-root-to-leaf-numbershttpsleetcodecomproblemssum-root-to-leaf-numbersdescription)

## ➤ [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/description/)

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

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#130-surrounded-regionshttpsleetcodecomproblemssurrounded-regionsdescription)

## ➤ [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/description/)

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

---

Difficulty: Medium
Related Topics:
"Depth-first Search": https://leetcode.com/tag/depth-first-search
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search
"Graph": https://leetcode.com/tag/graph
Similar Questions:
"Copy List with Random Pointer": https://leetcode.com/problems/copy-list-with-random-pointer

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#133-clone-graphhttpsleetcodecomproblemsclone-graphdescription)

## ➤ [133. Clone Graph](https://leetcode.com/problems/clone-graph/description/)

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

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#balanced-binary-tree---leetcode)

# ➤ Balanced Binary Tree - LeetCode

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

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

## ➤Contact

Thank you very much for your interest in this project.  
Feel free to reach out to provide feedback, bug reports, or anything else :) .

<!-- CONTRIBUTOR PROFILE -->
<!-- Include: Name, title, job/search status, (opt) photo, (opt) summary of contributions, (opt) a few words or a quote, socials badges (github follow, linkedin, angellist, email, resume, portfolio, twitter, etc.), (opt) team/contact page from app's site -->

<img 
    src="[docs/images/portrait.png](https://avatars.githubusercontent.com/u/66654881?s=460&u=fa9d2cc45bc228dd9b7d3dee6d4653f940fab35a&v=4)" 
    alt="Bryan Gimer" 
    height="100px"
    align="left">

</div>

##Bryan Guner
_(Full-stack software developer)_

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://bgoonz.github.io/)](https://bgoonz.github.io)
<a href="https://github.com/bgoonz/resume-cv-portfolio-samples/blob/master/2021-resume/bryan-guner-resume-2021.pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a>
[![Bryan's email](https://img.shields.io/badge/bryan.guner@gmail.com-f4b400?style=flat-square&logo=gmail&logoColor=black&link=mailto:bryan.guner@gmail.com)](mailto:bryan.guner@gmail.com)
[![Blog](https://img.shields.io/badge/-Blog-21759b?style=flat-square&logo=WordPress&logoColor=white&link=https://web-dev-hub.com/)](https://web-dev-hub.com/)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bryan-guner-046199128/)](https://www.linkedin.com/in/bryan-guner-046199128/)
[![AngelList](https://img.shields.io/badge/-AngelList-black?style=flat-square&logo=AngelList&logoColor=white&link=https://angel.co/u/bryan-guner)](https://angel.co/u/bryan-guner)
[![GitHub bgoonz](https://img.shields.io/github/followers/bgoonz?label=follow&style=social)](https://github.com/bgoonz)

</div>

<br clear="both">

---

<!--end-->

---

<details> <summary>CONTENT/DS-n-Algos/_Extra-Practice/</summary>

### [CONTENT/DS-n-Algos/\_Extra-Practice/README.md](CONTENT/DS-n-Algos/_Extra-Practice/README.md)

# The data structures

- [x] Array
- [x] Hash Table
- [x] Set
- [x] Singly Linked List
- [x] Doubly Linked List
- [x] Stack
- [x] Queue
- [x] Tree
- [x] Binary Search Tree
- [x] Trie
- [x] Graph

</details><details> <summary>CONTENT/DS-n-Algos/0-TESTING-RESOURCES/main-data/</summary>

### [CONTENT/DS-n-Algos/0-TESTING-RESOURCES/main-data/test-data.md](CONTENT/DS-n-Algos/0-TESTING-RESOURCES/main-data/test-data.md)

let numbers99Arr =[
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
96, 97, 98, 99
]

let alphAr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let numStringsArr= [
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
'10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
'20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
'30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
'40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
'50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
'60', '61', '62', '63', '64', '65', '66', '67', '68', '69',
'70', '71', '72', '73', '74', '75', '76', '77', '78', '79',
'80', '81', '82', '83', '84', '85', '86', '87', '88', '89',
'90', '91', '92', '93', '94', '95', '96', '97', '98', '99'
]

let personObj={
name: 'Celestine Stracke',
username: 'Angelica.Weimann',
email: 'Reanna_Mayert55@yahoo.com',
address: {
street: 'Aubrey Track',
suite: 'Suite 437',
city: 'South Liana',
zipcode: '92739',
geo: {
lat: '-20.3782',
lng: '-51.5498'
}
},
phone: '887-731-9357 x3878',
website: 'irma.biz',
company: {
name: 'Lockman - Veum',
catchPhrase: 'Future-proofed actuating collaboration',
bs: 'cross-media synergize e-tailers'
}
}

let bigFarrv = ["0","01","02","03","1","10","11","12","13","14","15","16","17","18","19","2","20","3","3com","4","5","6","7","8","9","ILMI","a","a.auth-ns","a01","a02","a1","a2","abc","about","ac","academico","acceso","access","accounting","accounts","acid","activestat","ad","adam","adkit","admin","administracion","administrador","administrator","administrators","admins","ads","adserver","adsl","ae","af","affiliate","affiliates","afiliados","ag","agenda","agent","ai","aix","ajax","ak","akamai","al","alabama","alaska","albuquerque","alerts","alpha","alterwind","am","amarillo","americas","an","anaheim","analyzer","announce","announcements","antivirus","ao","ap","apache","apollo","app","app01","app1","apple","application","applications","apps","appserver","aq","ar","archie","arcsight","argentina","arizona","arkansas","arlington","as","as400","asia","asterix","at","athena","atlanta","atlas","att","au","auction","austin","auth","auto","autodiscover","autorun","av","aw","ayuda","az","b","b.auth-ns","b01","b02","b1","b2","b2b","b2c","ba","back","backend","backup","baker","bakersfield","balance","balancer","baltimore","banking","bayarea","bb","bbdd","bbs","bd","bdc","be","bea","beta","bf","bg","bh","bi","billing","biz","biztalk","bj","black","blackberry","blog","blogs","blue","bm","bn","bnc","bo","bob","bof","boise","bolsa","border","boston","boulder","boy","br","bravo","brazil","britian","broadcast","broker","bronze","brown","bs","bsd","bsd0","bsd01","bsd02","bsd1","bsd2","bt","bug","buggalo","bugs","bugzilla","build","bulletins","burn","burner","buscador","buy","bv","bw","by","bz","c","c.auth-ns","ca","cache","cafe","calendar","california","call","calvin","canada","canal","canon","careers","catalog","cc","cd","cdburner","cdn","cert","certificates","certify","certserv","certsrv","cf","cg","cgi","ch","channel","channels","charlie","charlotte","chat","chats","chatserver","check","checkpoint","chi","chicago","ci","cims","cincinnati","cisco","citrix","ck","cl","class","classes","classifieds","classroom","cleveland","clicktrack","client","clientes","clients","club","clubs","cluster","clusters","cm","cmail","cms","cn","co","cocoa","code","coldfusion","colombus","colorado","columbus","com","commerce","commerceserver","communigate","community","compaq","compras","con","concentrator","conf","conference","conferencing","confidential","connect","connecticut","consola","console","consult","consultant","consultants","consulting","consumer","contact","content","contracts","core","core0","core01","corp","corpmail","corporate","correo","correoweb","cortafuegos","counterstrike","courses","cr","cricket","crm","crs","cs","cso","css","ct","cu","cust1","cust10","cust100","cust101","cust102","cust103","cust104","cust105","cust106","cust107","cust108","cust109","cust11","cust110","cust111","cust112","cust113","cust114","cust115","cust116","cust117","cust118","cust119","cust12","cust120","cust121","cust122","cust123","cust124","cust125","cust126","cust13","cust14","cust15","cust16","cust17","cust18","cust19","cust2","cust20","cust21","cust22","cust23","cust24","cust25","cust26","cust27","cust28","cust29","cust3","cust30","cust31","cust32","cust33","cust34","cust35","cust36","cust37","cust38","cust39","cust4","cust40","cust41","cust42","cust43","cust44","cust45","cust46","cust47","cust48","cust49","cust5","cust50","cust51","cust52","cust53","cust54","cust55","cust56","cust57","cust58","cust59","cust6","cust60","cust61","cust62","cust63","cust64","cust65","cust66","cust67","cust68","cust69","cust7","cust70","cust71","cust72","cust73","cust74","cust75","cust76","cust77","cust78","cust79","cust8","cust80","cust81","cust82","cust83","cust84","cust85","cust86","cust87","cust88","cust89","cust9","cust90","cust91","cust92","cust93","cust94","cust95","cust96","cust97","cust98","cust99","customer","customers","cv","cvs","cx","cy","cz","d","dallas","data","database","database01","database02","database1","database2","databases","datastore","datos","david","db","db0","db01","db02","db1","db2","dc","de","dealers","dec","def","default","defiant","delaware","dell","delta","delta1","demo","demonstration","demos","denver","depot","des","desarrollo","descargas","design","designer","desktop","detroit","dev","dev0","dev01","dev1","devel","develop","developer","developers","development","device","devserver","devsql","dhcp","dial","dialup","digital","dilbert","dir","direct","directory","disc","discovery","discuss","discussion","discussions","disk","disney","distributer","distributers","dj","dk","dm","dmail","dmz","dnews","dns","dns-2","dns0","dns1","dns2","dns3","do","docs","documentacion","documentos","domain","domains","dominio","domino","dominoweb","doom","download","downloads","downtown","dragon","drupal","dsl","dyn","dynamic","dynip","dz","e","e-com","e-commerce","e0","eagle","earth","east","ec","echo","ecom","ecommerce","edi","edu","education","edward","ee","eg","eh","ejemplo","elpaso","email","employees","empresa","empresas","en","enable","eng","eng01","eng1","engine","engineer","engineering","enterprise","epsilon","er","erp","es","esd","esm","espanol","estadisticas","esx","et","eta","europe","events","example","exchange","exec","extern","external","extranet","f","f5","falcon","farm","faststats","fax","feedback","feeds","fi","field","file","files","fileserv","fileserver","filestore","filter","find","finger","firewall","fix","fixes","fj","fk","fl","flash","florida","flow","fm","fo","foobar","formacion","foro","foros","fortworth","forum","forums","foto","fotos","foundry","fox","foxtrot","fr","france","frank","fred","freebsd","freebsd0","freebsd01","freebsd02","freebsd1","freebsd2","freeware","fresno","front","frontdesk","fs","fsp","ftp","ftp-","ftp0","ftp2","ftpserver","fw","fw-1","fw1","fwsm","fwsm0","fwsm01","fwsm1","g","ga","galeria","galerias","galleries","gallery","games","gamma","gandalf","gate","gatekeeper","gateway","gauss","gd","ge","gemini","general","george","georgia","germany","gf","gg","gh","gi","gl","glendale","gm","gmail","gn","go","gold","goldmine","golf","gopher","gp","gq","gr","green","group","groups","groupwise","gs","gsx","gt","gu","guest","gw","gw1","gy","h","hal","halflife","hawaii","hello","help","helpdesk","helponline","henry","hermes","hi","hidden","hk","hm","hn","hobbes","hollywood","home","homebase","homer","honeypot","honolulu","host","host1","host3","host4","host5","hotel","hotjobs","houstin","houston","howto","hp","hpov","hr","ht","http","https","hu","hub","humanresources","i","ia","ias","ibm","ibmdb","id","ida","idaho","ids","ie","iis","il","illinois","im","images","imail","imap","imap4","img","img0","img01","img02","in","inbound","inc","include","incoming","india","indiana","indianapolis","info","informix","inside","install","int","intern","internal","international","internet","intl","intranet","invalid","investor","investors","io","iota","iowa","iplanet","ipmonitor","ipsec","ipsec-gw","ipv6","ipv6.teredo","iq","ir","irc","ircd","ircserver","ireland","iris","irvine","irving","is","isa","isaserv","isaserver","ism","israel","isync","it","italy","ix","j","japan","java","je","jedi","jm","jo","jobs","john","jp","jrun","juegos","juliet","juliette","juniper","k","kansas","kansascity","kappa","kb","ke","kentucky","kerberos","keynote","kg","kh","ki","kilo","king","km","kn","knowledgebase","knoxville","koe","korea","kp","kr","ks","kw","ky","kz","l","la","lab","laboratory","labs","lambda","lan","laptop","laserjet","lasvegas","launch","lb","lc","ldap","legal","leo","li","lib","library","lima","lincoln","link","linux","linux0","linux01","linux02","linux1","linux2","lista","lists","listserv","listserver","live","lk","load","loadbalancer","local","localhost","log","log0","log01","log02","log1","log2","logfile","logfiles","logger","logging","loghost","login","logs","london","longbeach","losangeles","lotus","louisiana","lr","ls","lt","lu","luke","lv","ly","lyris","m","ma","mac","mac1","mac10","mac11","mac2","mac3","mac4","mac5","mach","macintosh","madrid","mail","mail2","mailer","mailgate","mailhost","mailing","maillist","maillists","mailroom","mailserv","mailsite","mailsrv","main","maine","maint","mall","manage","management","manager","manufacturing","map","mapas","maps","marketing","marketplace","mars","marvin","mary","maryland","massachusetts","master","max","mc","mci","md","mdaemon","me","media","member","members","memphis","mercury","merlin","messages","messenger","mg","mgmt","mh","mi","miami","michigan","mickey","midwest","mike","milwaukee","minneapolis","minnesota","mirror","mis","mississippi","missouri","mk","ml","mm","mn","mngt","mo","mobile","mobilemail","mom","monitor","monitoring","montana","moon","moscow","movies","mozart","mp","mp3","mpeg","mpg","mq","mr","mrtg","ms","ms-exchange","ms-sql","msexchange","mssql","mssql0","mssql01","mssql1","mt","mta","mtu","mu","multimedia","music","mv","mw","mx","my","mysql","mysql0","mysql01","mysql1","mz","n","na","name","names","nameserv","nameserver","nas","nashville","nat","nc","nd","nds","ne","nebraska","neptune","net","netapp","netdata","netgear","netmeeting","netscaler","netscreen","netstats","network","nevada","new","newhampshire","newjersey","newmexico","neworleans","news","newsfeed","newsfeeds","newsgroups","newton","newyork","newzealand","nf","ng","nh","ni","nigeria","nj","nl","nm","nms","nntp","no","node","nokia","nombres","nora","north","northcarolina","northdakota","northeast","northwest","noticias","novell","november","np","nr","ns","ns-","ns0","ns01","ns02","ns1","ns2","ns3","ns4","ns5","nt","nt4","nt40","ntmail","ntp","ntserver","nu","null","nv","ny","nz","o","oakland","ocean","odin","office","offices","oh","ohio","ok","oklahoma","oklahomacity","old","om","omaha","omega","omicron","online","ontario","open","openbsd","openview","operations","ops","ops0","ops01","ops02","ops1","ops2","opsware","or","oracle","orange","order","orders","oregon","orion","orlando","oscar","out","outbound","outgoing","outlook","outside","ov","owa","owa01","owa02","owa1","owa2","ows","oxnard","p","pa","page","pager","pages","paginas","papa","paris","parners","partner","partners","patch","patches","paul","payroll","pbx","pc","pc01","pc1","pc10","pc101","pc11","pc12","pc13","pc14","pc15","pc16","pc17","pc18","pc19","pc2","pc20","pc21","pc22","pc23","pc24","pc25","pc26","pc27","pc28","pc29","pc3","pc30","pc31","pc32","pc33","pc34","pc35","pc36","pc37","pc38","pc39","pc4","pc40","pc41","pc42","pc43","pc44","pc45","pc46","pc47","pc48","pc49","pc5","pc50","pc51","pc52","pc53","pc54","pc55","pc56","pc57","pc58","pc59","pc6","pc60","pc7","pc8","pc9","pcmail","pda","pdc","pe","pegasus","pennsylvania","peoplesoft","personal","pf","pg","pgp","ph","phi","philadelphia","phoenix","phoeniz","phone","phones","photos","pi","pics","pictures","pink","pipex-gw","pittsburgh","pix","pk","pki","pl","plano","platinum","pluto","pm","pm1","pn","po","policy","polls","pop","pop3","portal","portals","portfolio","portland","post","postales","postoffice","ppp1","ppp10","ppp11","ppp12","ppp13","ppp14","ppp15","ppp16","ppp17","ppp18","ppp19","ppp2","ppp20","ppp21","ppp3","ppp4","ppp5","ppp6","ppp7","ppp8","ppp9","pptp","pr","prensa","press","printer","printserv","printserver","priv","privacy","private","problemtracker","products","profiles","project","projects","promo","proxy","prueba","pruebas","ps","psi","pss","pt","pub","public","pubs","purple","pw","py","q","qa","qmail","qotd","quake","quebec","queen","quotes","r","r01","r02","r1","r2","ra","radio","radius","rapidsite","raptor","ras","rc","rcs","rd","re","read","realserver","recruiting","red","redhat","ref","reference","reg","register","registro","registry","regs","relay","rem","remote","remstats","reports","research","reseller","reserved","resumenes","rho","rhodeisland","ri","ris","rmi","ro","robert","romeo","root","rose","route","router","router1","rs","rss","rtelnet","rtr","rtr01","rtr1","ru","rune","rw","rwhois","s","s1","s2","sa","sac","sacramento","sadmin","safe","sales","saltlake","sam","san","sanantonio","sandiego","sanfrancisco","sanjose","saskatchewan","saturn","sb","sbs","sc","scanner","schedules","scotland","scotty","sd","se","search","seattle","sec","secret","secure","secured","securid","security","sendmail","seri","serv","serv2","server","server1","servers","service","services","servicio","servidor","setup","sg","sh","shared","sharepoint","shareware","shipping","shop","shoppers","shopping","si","siebel","sierra","sigma","signin","signup","silver","sim","sirius","site","sj","sk","skywalker","sl","slackware","slmail","sm","smc","sms","smtp","smtphost","sn","sniffer","snmp","snmpd","snoopy","snort","so","soap","socal","software","sol","solaris","solutions","soporte","source","sourcecode","sourcesafe","south","southcarolina","southdakota","southeast","southwest","spain","spam","spider","spiderman","splunk","spock","spokane","springfield","sprint","sqa","sql","sql0","sql01","sql1","sql7","sqlserver","squid","sr","ss","ssh","ssl","ssl0","ssl01","ssl1","st","staff","stage","staging","start","stat","static","statistics","stats","stlouis","stock","storage","store","storefront","streaming","stronghold","strongmail","studio","submit","subversion","sun","sun0","sun01","sun02","sun1","sun2","superman","supplier","suppliers","support","sv","sw","sw0","sw01","sw1","sweden","switch","switzerland","sy","sybase","sydney","sysadmin","sysback","syslog","syslogs","system","sz","t","tacoma","taiwan","talk","tampa","tango","tau","tc","tcl","td","team","tech","technology","techsupport","telephone","telephony","telnet","temp","tennessee","terminal","terminalserver","termserv","test","test2k","testajax","testasp","testaspnet","testbed","testcf","testing","testjsp","testlab","testlinux","testphp","testserver","testsite","testsql","testxp","texas","tf","tftp","tg","th","thailand","theta","thor","tienda","tiger","time","titan","tivoli","tj","tk","tm","tn","to","tokyo","toledo","tom","tool","tools","toplayer","toronto","tour","tp","tr","tracker","train","training","transfers","trinidad","trinity","ts","ts1","tt","tucson","tulsa","tunnel","tv","tw","tx","tz","u","ua","uddi","ug","uk","um","uniform","union","unitedkingdom","unitedstates","unix","unixware","update","updates","upload","ups","upsilon","uranus","urchin","us","usa","usenet","user","users","ut","utah","utilities","uy","uz","v","v6","va","vader","vantive","vault","vc","ve","vega","vegas","vend","vendors","venus","vermont","vg","vi","victor","video","videos","viking","violet","vip","virginia","vista","vm","vmserver","vmware","vn","vnc","voice","voicemail","voip","voyager","vpn","vpn0","vpn01","vpn02","vpn1","vpn2","vt","vu","w","w1","w2","w3","wa","wais","wallet","wam","wan","wap","warehouse","washington","wc3","web","webaccess","webadmin","webalizer","webboard","webcache","webcam","webcast","webdev","webdocs","webfarm","webhelp","weblib","weblogic","webmail","webmaster","webproxy","webring","webs","webserv","webserver","webservices","website","websites","websphere","websrv","websrvr","webstats","webstore","websvr","webtrends","welcome","west","westvirginia","wf","whiskey","white","whois","wi","wichita","wiki","wililiam","win","win01","win02","win1","win2","win2000","win2003","win2k","win2k3","windows","windows01","windows02","windows1","windows2","windows2000","windows2003","windowsxp","wingate","winnt","winproxy","wins","winserve","winxp","wire","wireless","wisconsin","wlan","wordpress","work","world","wpad","write","ws","ws1","ws10","ws11","ws12","ws13","ws2","ws3","ws4","ws5","ws6","ws7","ws8","ws9","wusage","wv","ww","www","www-","www-01","www-02","www-1","www-2","www-int","www0","www01","www02","www1","www2","www3","wwwchat","wwwdev","wwwmail","wy","wyoming","x","x-ray","xi","xlogan","xmail","xml","xp","y","yankee","ye","yellow","young","yt","yu","z","z-log","za","zebra","zera","zeus","zlog","zm","zulu","zw"]

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/coin-change/</summary>

### [CONTENT/DS-n-Algos/ALGO/coin-change/coinchange.md](CONTENT/DS-n-Algos/ALGO/coin-change/coinchange.md)

There are only two ways to make change for 6 cents, but f(6) = 3. f gives the number of ways of making 5 cents and
adding a penny, plus the number of ways of making 1 cent and adding a nickel. When changing money, we would like
"1 penny, l nickel" and "l nickel, l penny" to be considered as just one way of making change for 6 cents.
We can fix this by adding each type of coin in turn; we will not be able to count different orderings twice if there are
no different orderings.
By increasing the dimension of the recurrence relation. we keep track of enough information to actually solve the
problem.

---

> The boundary cases assert that there is exactly one way to make change for 0 cents using a positive number of coins.
> but there are no ways to make change for negative amounts, or using no coins.

---

In the non-boundary case. the number of ways of making change using the first k types of coin is the number of ways
that don't use that coin, together with the number of ways that do.

First. the number of ways of making change using only the first type of coin. (which is always assumed to be I in this
sort of problem so that change can be made for any integral amount). is always exactly 1.

---

```js
function waysToReturnChange(denominations, numOfCoins, amount) {
  if (amount === 0) return 1; // Perfect!
  if (amount < 0) return 0; // No solution exists for negative amount
  if (numOfCoins < 0 && amount > 0) return 0; // We don't have coins left!
  console.log(
    `checking ways to make ${amount} with ${denominations.slice(numOfCoins)}`
  );
  return (
    waysToReturnChange(
      denominations,
      numOfCoins,
      amount - denominations[numOfCoins]
    ) + waysToReturnChange(denominations, numOfCoins - 1, amount)
  );
}
function waysToReturnMemoize(amount, denominations) {
  // intialize an array of zeros with indices up to amount
  var waysOfDoingNcents = [];
  for (var i = 0; i <= amount; i++) {
    waysOfDoingNcents[i] = 0;
  }
  // there is 1 way to renturn 0 cents
  waysOfDoingNcents[0] = 1;
  for (var j = 0; j < denominations.length; j++) {
    //  can only start returning change with coins in our denominations
    var coin = denominations[j];
    //  start bottom up, each time reducing change amout with curr coin.
    for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
      var higherAmountRemainder = higherAmount - coin;
      // ways to create change is equivalent to reducing the problem to a known problem
      // and gaining all the ways to solve for smaller problems
      waysOfDoingNcents[higherAmount] +=
        waysOfDoingNcents[higherAmountRemainder];
    }
  }
  return waysOfDoingNcents[amount];
}
var denominations = [1, 2, 3];
var amount = 4;
console.time("answer time");
console.log(
  waysToReturnChange(denominations, denominations.length - 1, amount)
);
console.timeEnd("answer time");
console.time("answer time1");
console.log(waysToReturnMemoize(amount, denominations));
console.timeEnd("answer time1");
/*
node memo-coin-change.js
checking ways to make 4 with 3
checking ways to make 1 with 3
checking ways to make 1 with 2,3
checking ways to make 1 with 1,2,3
checking ways to make 4 with 2,3
checking ways to make 2 with 2,3
checking ways to make 2 with 1,2,3
checking ways to make 1 with 1,2,3
node memo-coin-change.js
checking ways to make 4 with 3
checking ways to make 1 with 3
checking ways to make 1 with 2,3
checking ways to make 1 with 1,2,3
checking ways to make 4 with 2,3
checking ways to make 2 with 2,3
checking ways to make 2 with 1,2,3
checking ways to make 1 with 1,2,3
checking ways to make 4 with 1,2,3
checking ways to make 3 with 1,2,3
checking ways to make 2 with 1,2,3
checking ways to make 1 with 1,2,3
4
answer time: 24.948ms
4
answer time1: 0.386ms
\___________________________________________________
bryan_dir:coinchange-memoized_exitstatus:0 ====>
checking ways to make 4 with 1,2,3
checking ways to make 3 with 1,2,3
checking ways to make 2 with 1,2,3
checking ways to make 1 with 1,2,3
4
answer time: 24.948ms
4
answer time1: 0.386ms
\___________________________________________________
bryan_dir:coinchange-memoized_exitstatus:0 ====>
*/
```

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/insertion-sort/</summary>

### [CONTENT/DS-n-Algos/ALGO/insertion-sort/README.md](CONTENT/DS-n-Algos/ALGO/insertion-sort/README.md)

# Insertion Sort

Implement the [insertion sort algorithm](http://en.wikipedia.org/wiki/Insertion_sort).

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/integer-difference/</summary>

### [CONTENT/DS-n-Algos/ALGO/integer-difference/Readme.md](CONTENT/DS-n-Algos/ALGO/integer-difference/Readme.md)

# Integer Difference

Write a function that accepts an array of random integers and an integer _n_. Determine the number of times where two integers in the array have the difference of _n_.

```js
f(4, [1, 1, 5, 6, 9, 16, 27]); // 3 (Due to 2x [1, 5], and [5, 9])
f(2, [1, 1, 3, 3]); // 4 (Due to 4x [1, 3])
```

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/integer-length/</summary>

### [CONTENT/DS-n-Algos/ALGO/integer-length/Readme.md](CONTENT/DS-n-Algos/ALGO/integer-length/Readme.md)

# Integer Length

Write a function that takes an integer as input and returns the number of digits in that integer.

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/kth-largest-element-in-array/</summary>

### [CONTENT/DS-n-Algos/ALGO/kth-largest-element-in-array/Readme.md](CONTENT/DS-n-Algos/ALGO/kth-largest-element-in-array/Readme.md)

# Kth Largest Element in Array

Given an array of integers find the kth element in the sorted order (not the kth distinct element). So, if the array is `[3, 1, 2, 1, 4]` and k is 3 then the result is 2, because it's the 3rd element in sorted order (but the 3rd distinct element is 3).

## Source

[http://www.ardendertat.com/2011/10/27/programming-interview-questions-10-kth-largest-element-in-array/](http://www.ardendertat.com/2011/10/27/programming-interview-questions-10-kth-largest-element-in-array/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/largest-continuous-sum/</summary>

### [CONTENT/DS-n-Algos/ALGO/largest-continuous-sum/Readme.md](CONTENT/DS-n-Algos/ALGO/largest-continuous-sum/Readme.md)

# Largest Continuous Sum

Given an array of integers (positive and negative) find the largest continuous sum.

## Source

[http://www.ardendertat.com/2011/09/24/programming-interview-questions-3-largest-continuous-sum/](http://www.ardendertat.com/2011/09/24/programming-interview-questions-3-largest-continuous-sum/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/largest-palindrome/</summary>

### [CONTENT/DS-n-Algos/ALGO/largest-palindrome/Readme.md](CONTENT/DS-n-Algos/ALGO/largest-palindrome/Readme.md)

# Largest Palindrome

Write a function that finds the largest palindrome in a string. All characters can be valid for the palindrome, including whitespace. In the string "I am a red racecar driver" - the largest palindrome would be "d racecar d".

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/linked-list/</summary>

### [CONTENT/DS-n-Algos/ALGO/linked-list/Readme.md](CONTENT/DS-n-Algos/ALGO/linked-list/Readme.md)

# Linked List

Write a linked list implementation, better yet - make it doubly linked.

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/longest-common-prefix/</summary>

### [CONTENT/DS-n-Algos/ALGO/longest-common-prefix/Readme.md](CONTENT/DS-n-Algos/ALGO/longest-common-prefix/Readme.md)

# Longest Common Prefix

Given a String array, find the longest common prefix.

## Example

```
f(['rocket', 'rockstar', 'rockbottom', 'rock', 'rollingstone'] // 'ro'
f(['shuffle', 'shuttle', 'shut'] // 'shu'
```

## Source

Personal Phone Interview

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/longest-compound-word/</summary>

### [CONTENT/DS-n-Algos/ALGO/longest-compound-word/Readme.md](CONTENT/DS-n-Algos/ALGO/longest-compound-word/Readme.md)

# Longest Compound Word

Given a sorted list of words, find the longest compound word in the list that is constructed by concatenating the words in the list. For example, if the input list is: `['cat', 'cats', 'catsdogcats', 'catxdogcatsrat', 'dog', 'dogcatsdog', 'hippopotamuses', 'rat', 'ratcat', 'ratcatdog', 'ratcatdogcat']`. Then the longest compound word is 'ratcatdogcat' with 12 letters. Note that the longest individual words are 'catxdogcatsrat' and 'hippopotamuses' with 14 letters, but they're not fully constructed by other words. Former one has an extra 'x' letter, and latter is an individual word by itself not a compound word.

## Source

[http://www.ardendertat.com/2012/06/15/programming-interview-questions-28-longest-compound-word/](http://www.ardendertat.com/2012/06/15/programming-interview-questions-28-longest-compound-word/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/longest-words/</summary>

### [CONTENT/DS-n-Algos/ALGO/longest-words/Readme.md](CONTENT/DS-n-Algos/ALGO/longest-words/Readme.md)

# Longest Words

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

## Example

```js
longestWords("You are just an old antidisestablishmentarian"); // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents"); // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"); // ["buffalo"] or ["Buffalo"]
```

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/matching-nodes/</summary>

### [CONTENT/DS-n-Algos/ALGO/matching-nodes/Readme.md](CONTENT/DS-n-Algos/ALGO/matching-nodes/Readme.md)

# Matching Nodes

Given two identical tree structures (consider them DOM tree if you want) and a node from the first tree, find and return the same node on the second tree. Assume you have access to a function that can test whether two nodes are the same (E.g. the node in the first tree matches the one in the second tree). Consider ways to optimize your approach.

## Source

In-person interview question using whiteboard

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/median-integer-stream/</summary>

### [CONTENT/DS-n-Algos/ALGO/median-integer-stream/Readme.md](CONTENT/DS-n-Algos/ALGO/median-integer-stream/Readme.md)

# Median of Integer Stream

Given a stream of unsorted integers, find the median element in sorted order at any given time. So, we will be receiving a continuous stream of numbers in some random order and we don't know the stream length in advance. Write a function that finds the median of the already received numbers efficiently at any time. We will be asked to find the median multiple times. Just to recall, median is the middle element in an odd length sorted array, and in the even case it's the average of the middle elements.

## Source

[http://www.ardendertat.com/2011/11/03/programming-interview-questions-13-median-of-integer-stream/](http://www.ardendertat.com/2011/11/03/programming-interview-questions-13-median-of-integer-stream/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/merge-sort/</summary>

### [CONTENT/DS-n-Algos/ALGO/merge-sort/Readme.md](CONTENT/DS-n-Algos/ALGO/merge-sort/Readme.md)

# Merge Sort

Implement the [merge sort algorithm](http://en.wikipedia.org/wiki/Merge_sort).

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/missing-number/</summary>

### [CONTENT/DS-n-Algos/ALGO/missing-number/Readme.md](CONTENT/DS-n-Algos/ALGO/missing-number/Readme.md)

# Missing Number

Write a function that accepts an array of integers in random order of unknown length, but with one number missing. Return the missing number.

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/money-format/</summary>

### [CONTENT/DS-n-Algos/ALGO/money-format/Readme.md](CONTENT/DS-n-Algos/ALGO/money-format/Readme.md)

# Money Formatting

Given an amount of money as a float, format it as a string.

```javascript
formatMoney(2310000.159897); // '2 310 000.16'
formatMoney(1600); // '1 600.00'
```

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/multiples-of-3-and-5/</summary>

### [CONTENT/DS-n-Algos/ALGO/multiples-of-3-and-5/Readme.md](CONTENT/DS-n-Algos/ALGO/multiples-of-3-and-5/Readme.md)

# Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

## Source

[http://projecteuler.net/problem=1](http://projecteuler.net/problem=1)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/next-highest-number/</summary>

### [CONTENT/DS-n-Algos/ALGO/next-highest-number/Readme.md](CONTENT/DS-n-Algos/ALGO/next-highest-number/Readme.md)

# Find Next Higher Number With Same Digits

Given a number, find the next higher number using only the digits in the given number. For example if the given number is 1234, next higher number with same digits is 1243.

## Source

[http://www.ardendertat.com/2012/01/02/programming-interview-questions-24-find-next-higher-number-with-same-digits/](http://www.ardendertat.com/2012/01/02/programming-interview-questions-24-find-next-higher-number-with-same-digits/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/next-palindrome-number/</summary>

### [CONTENT/DS-n-Algos/ALGO/next-palindrome-number/Readme.md](CONTENT/DS-n-Algos/ALGO/next-palindrome-number/Readme.md)

# Find Next Palindrome Number

Given a number, find the next smallest palindrome larger than the number. For example if the number is 125, next smallest palindrome is 131.

## Source

[http://www.ardendertat.com/2011/12/01/programming-interview-questions-19-find-next-palindrome-number/](http://www.ardendertat.com/2011/12/01/programming-interview-questions-19-find-next-palindrome-number/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/number-format/</summary>

### [CONTENT/DS-n-Algos/ALGO/number-format/Readme.md](CONTENT/DS-n-Algos/ALGO/number-format/Readme.md)

# Numeric String

Format any number into a string with "," (commas) in the correct places. E.g. "1,000,000".

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/odd-occuring-element/</summary>

### [CONTENT/DS-n-Algos/ALGO/odd-occuring-element/Readme.md](CONTENT/DS-n-Algos/ALGO/odd-occuring-element/Readme.md)

# Find Odd Occurring Element

Given an integer array, one element occurs odd number of times and all others have even occurrences. Find the element with odd occurrences.

## Source

[http://www.ardendertat.com/2011/12/13/programming-interview-questions-22-find-odd-occurring-element/](http://www.ardendertat.com/2011/12/13/programming-interview-questions-22-find-odd-occurring-element/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/once/</summary>

### [CONTENT/DS-n-Algos/ALGO/once/Readme.md](CONTENT/DS-n-Algos/ALGO/once/Readme.md)

# Once

Write a function that accepts a function as it's only argument and returns a new function that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed `x` number of times before it stops working.

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/prime-number/</summary>

### [CONTENT/DS-n-Algos/ALGO/prime-number/Readme.md](CONTENT/DS-n-Algos/ALGO/prime-number/Readme.md)

# Prime Number

Write a function that accepts a number and return a boolean based on whether it's a prime number.

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/queue/</summary>

### [CONTENT/DS-n-Algos/ALGO/queue/Readme.md](CONTENT/DS-n-Algos/ALGO/queue/Readme.md)

# Basic Queue

Implement a basic queue function with the ability to `add` and `remove` values.

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/quick-sort/</summary>

### [CONTENT/DS-n-Algos/ALGO/quick-sort/Readme.md](CONTENT/DS-n-Algos/ALGO/quick-sort/Readme.md)

# Quick Sort

Implement the [quick sort algorithm](http://en.wikipedia.org/wiki/Quicksort).

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/remove-duplicates-from-string/</summary>

### [CONTENT/DS-n-Algos/ALGO/remove-duplicates-from-string/Readme.md](CONTENT/DS-n-Algos/ALGO/remove-duplicates-from-string/Readme.md)

# Remove Duplicate Characters in String

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is 'tree traversal' the output will be "tre avsl".

## Source

[http://www.ardendertat.com/2012/01/06/programming-interview-questions-25-remove-duplicate-characters-in-string/](http://www.ardendertat.com/2012/01/06/programming-interview-questions-25-remove-duplicate-characters-in-string/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/reverse-words-in-string/</summary>

### [CONTENT/DS-n-Algos/ALGO/reverse-words-in-string/Readme.md](CONTENT/DS-n-Algos/ALGO/reverse-words-in-string/Readme.md)

# Reverse Words in a String

Given an input string, reverse all the words. To clarify, input: "Interviews are awesome!" output: "awesome! are Interviews". Consider all consecutive non-whitespace characters as individual words. If there are multiple spaces between words reduce them to a single white space. Also remove all leading and trailing whitespaces. So, the output for " CS degree", "CS degree", "CS degree ", or " CS degree " are all the same: "degree CS".

## Source

[http://www.ardendertat.com/2011/10/31/programming-interview-questions-12-reverse-words-in-a-string/](http://www.ardendertat.com/2011/10/31/programming-interview-questions-12-reverse-words-in-a-string/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/search-unknown-length-array/</summary>

### [CONTENT/DS-n-Algos/ALGO/search-unknown-length-array/Readme.md](CONTENT/DS-n-Algos/ALGO/search-unknown-length-array/Readme.md)

# Search Unknown Length Array

Given a sorted array of unknown length and a number to search for, return the index of the number in the array. Accessing an element out of bounds throws exception. If the number occurs multiple times, return the index of any occurrence. If it isn't present, return -1.

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/selection-sort/</summary>

### [CONTENT/DS-n-Algos/ALGO/selection-sort/readme.md](CONTENT/DS-n-Algos/ALGO/selection-sort/readme.md)

# Selection Sort

Implement the [selection sort algorithm](http://en.wikipedia.org/wiki/Selection_sort).

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/shortest-fizz-buzz/</summary>

### [CONTENT/DS-n-Algos/ALGO/shortest-fizz-buzz/Readme.md](CONTENT/DS-n-Algos/ALGO/shortest-fizz-buzz/Readme.md)

# Shortest Fizz Buzz

Write a program that prints (to STDOUT) the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

The goal is to write the shortest code possible.

Expected output: [http://cdn.hackerrank.com/fizzbuzz.txt](http://cdn.hackerrank.com/fizzbuzz.txt)

Your output should exactly match the above.

## Source

[https://www.hackerrank.com/challenges/fizzbuzz](https://www.hackerrank.com/challenges/fizzbuzz)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/sorted-array-search/</summary>

### [CONTENT/DS-n-Algos/ALGO/sorted-array-search/Readme.md](CONTENT/DS-n-Algos/ALGO/sorted-array-search/Readme.md)

# Sorted Array Search

Given an array of numbers sorted in ascending order, write a function that will return the index at which the number is found.

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/spiral/</summary>

### [CONTENT/DS-n-Algos/ALGO/spiral/Readme.md](CONTENT/DS-n-Algos/ALGO/spiral/Readme.md)

# Spiral

Write a function that accepts four arguments. The first two arguments are the size of the grid (_h x w_), filled with ascending integers from left to right, top to bottom, starting from 1. The next two arguments are the starting positions, the row (_r_) and column (_c_).

Return an array of integers obtained by spiralling outward anti-clockwise from the _r_ and _c_, starting upward.

```
f(5, 5, 3, 3) // [ 13, 8, 7, 12, 17, 18, 19, 14, 9, 4, 3, 2, 1, 6, 11, 16, 21, 22, 23, 24, 25, 20, 15, 10, 5 ]

f(2, 4, 1, 2) // [ 2, 1, 5, 6, 7, 3, 8, 4 ]
```

**Supporting Content**

The following graphics show the grid in question and the spiral generated, beginning at cell (3, 3).

![Grid 1](input-1.png)

![Grid 2](input-2.png)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/stack/</summary>

### [CONTENT/DS-n-Algos/ALGO/stack/Readme.md](CONTENT/DS-n-Algos/ALGO/stack/Readme.md)

# Basic Stack

Implement a basic stack function with the ability to `add` and `remove` values.

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/string-format/</summary>

### [CONTENT/DS-n-Algos/ALGO/string-format/Readme.md](CONTENT/DS-n-Algos/ALGO/string-format/Readme.md)

# String Format

Create a string formatting function that accepts an input string and a number of arguments to replace positions in the input string.

## Example

```
f('Hello {0} {1}', 'Mr.', 'X') // => 'Hello Mr. X'
f('{1}_{0}', '{1}', '{0}')     // => '{0}_{1}'
```

By [Riga](https://github.com/riga).

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/string-permutations/</summary>

### [CONTENT/DS-n-Algos/ALGO/string-permutations/Readme.md](CONTENT/DS-n-Algos/ALGO/string-permutations/Readme.md)

# All Permutations of a String

Generate all permutations of a given string. (Note: also known as the generating anagrams problem).

## Source

[http://www.ardendertat.com/2011/10/28/programming-interview-questions-11-all-permutations-of-string/](http://www.ardendertat.com/2011/10/28/programming-interview-questions-11-all-permutations-of-string/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/string-rotation/</summary>

### [CONTENT/DS-n-Algos/ALGO/string-rotation/Readme.md](CONTENT/DS-n-Algos/ALGO/string-rotation/Readme.md)

# String Rotation

Find out if a string is a rotation of another string. E.g. `ABCD` is a rotation of `BCDA` but not `ACBD`.

## Source

[Reddit](http://www.reddit.com/r/javascript/comments/1ftyjh/common_code_problems_solved_in_javascript_xpost/cae25ra)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/sum-of-array-plus-one/</summary>

### [CONTENT/DS-n-Algos/ALGO/sum-of-array-plus-one/Readme.md](CONTENT/DS-n-Algos/ALGO/sum-of-array-plus-one/Readme.md)

# Sum of Array Plus One

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

```
plusOneSum([1, 2, 3, 4]); // 14
```

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/throttle/</summary>

### [CONTENT/DS-n-Algos/ALGO/throttle/Readme.md](CONTENT/DS-n-Algos/ALGO/throttle/Readme.md)

# Throttle

Write a function that accepts a function and timeout, `x`, in number of milliseconds. It returns a function that can only be executed once per `x` milliseconds. This can be useful for limiting the number of time and computation heavy function that are run. For example, making AJAX requests to an autocompletion API.

Once written, add a third parameter that will allow the function to be executed immediately if set to true. Otherwise the function will run at the end of the timeout period.

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/transform-word/</summary>

### [CONTENT/DS-n-Algos/ALGO/transform-word/Readme.md](CONTENT/DS-n-Algos/ALGO/transform-word/Readme.md)

# Transform Word

Given a source word, target word and an English dictionary, transform the source word to target by changing/adding/removing 1 character at a time, while all intermediate words being valid English words. Return the transformation chain which has the smallest number of intermediate words.

## Example

```js
transformWord(["cat", "bat", "bet", "bed", "at", "ad", "ed"], "cat", "bed");
```

## Source

[http://www.ardendertat.com/2011/10/17/programming-interview-questions-8-transform-word/](http://www.ardendertat.com/2011/10/17/programming-interview-questions-8-transform-word/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/tree-level-order-print/</summary>

### [CONTENT/DS-n-Algos/ALGO/tree-level-order-print/Readme.md](CONTENT/DS-n-Algos/ALGO/tree-level-order-print/Readme.md)

# Tree Level Order Print

Given a binary tree of integers, print it in level order. The output will contain space between the numbers in the same level, and new line between different levels.

## Source

[http://www.ardendertat.com/2011/12/05/programming-interview-questions-20-tree-level-order-print/](http://www.ardendertat.com/2011/12/05/programming-interview-questions-20-tree-level-order-print/)

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/word-analytics/</summary>

### [CONTENT/DS-n-Algos/ALGO/word-analytics/Readme.md](CONTENT/DS-n-Algos/ALGO/word-analytics/Readme.md)

# Word Analytics

You're a newly hired engineer for a brand-new company that's building a "killer Word-like application". You've been specifically assigned to implement a tool that gives the user some details on common word usage, letter usage, and some other analytics for a given document! More specifically, you must read a given text file (no special formatting, just a plain ASCII text file) and print off the following details:

1. Number of words
2. Number of letters
3. Number of symbols (any non-letter and non-digit character, excluding white spaces)
4. Top three most common words (you may count "small words", such as "it" or "the")
5. Top three most common letters
6. Most common first word of a paragraph (paragraph being defined as a block of text with an empty line above it) (Optional bonus)
7. Number of words only used once (Optional bonus)
8. All letters not used in the document (Optional bonus)

Please note that your tool does not have to be case sensitive, meaning the word "Hello" is the same as "hello" and "HELLO".

_Author:Bryan Guner_

## Formal Inputs & Outputs

### Input Description

As an argument to your program on the command line, you will be given a text file location (such as "C:\Users\nint22\Document.txt" on Windows or "/Users/nint22/Document.txt" on any other sane file system). This file may be empty, but will be guaranteed well-formed (all valid ASCII characters). You can assume that line endings will follow the UNIX-style new-line ending (unlike the Windows carriage-return & new-line format ).

### Output Description

For each analytic feature, you must print the results in a special string format. Simply you will print off 6 to 8 sentences with the following format:

```
"A words", where A is the number of words in the given document
"B letters", where B is the number of letters in the given document
"C symbols", where C is the number of non-letter and non-digit character, excluding white spaces, in the document
"Top three most common words: D, E, F", where D, E, and F are the top three most common words
"Top three most common letters: G, H, I", where G, H, and I are the top three most common letters
"J is the most common first word of all paragraphs", where J is the most common word at the start of all paragraphs in the document (paragraph being defined as a block of text with an empty line above it) (*Optional bonus*)
"Words only used once: K", where K is a comma-delimited list of all words only used once (*Optional bonus*)
"Letters not used in the document: L", where L is a comma-delimited list of all alphabetic characters not in the document (*Optional bonus*)
```

If there are certain lines that have no answers (such as the situation in which a given document has no paragraph structures), simply do not print that line of text. In this example, I've just generated some random Lorem Ipsum text.

## Testing

```
cat huckleberry-finn.txt | node index.js
```

</details><details> <summary>CONTENT/DS-n-Algos/ALGO/word-positions/</summary>

### [CONTENT/DS-n-Algos/ALGO/word-positions/Readme.md](CONTENT/DS-n-Algos/ALGO/word-positions/Readme.md)

# Find Word Positions in Text

Given a text file and a word, find the positions that the word occurs in the file. We'll be asked to find the positions of many words in the same file.

## Source

[http://www.ardendertat.com/2011/12/20/programming-interview-questions-23-find-word-positions-in-text/](http://www.ardendertat.com/2011/12/20/programming-interview-questions-23-find-word-positions-in-text/)

</details><details> <summary>CONTENT/DS-n-Algos/Arrays/All Unique/test/</summary>

### [CONTENT/DS-n-Algos/Arrays/All Unique/test/scrap.md](CONTENT/DS-n-Algos/Arrays/All Unique/test/scrap.md)

./../all-unique.js

</details><details> <summary>CONTENT/DS-n-Algos/Arrays/all/</summary>

### [CONTENT/DS-n-Algos/Arrays/all/all.md](CONTENT/DS-n-Algos/Arrays/all/all.md)

> The Boolean() constructor is used to create Boolean objects.

## Syntax

new Boolean(\[value\])

### Parameters

`value` Optional

The initial value of the `Boolean` object.

### Creating `Boolean` objects with an initial value of `false`

    let bNoParam = new Boolean();
    let bZero = new Boolean(0);
    let bNull = new Boolean(null);
    let bEmptyString = new Boolean('');
    let bfalse = new Boolean(false);

### Creating `Boolean` objects with an initial value of `true`

    let btrue = new Boolean(true);
    let btrueString = new Boolean('true');
    let bfalseString = new Boolean('false');
    let bSuLin = new Boolean('Su Lin');
    let bArrayProto = new Boolean([]);
    let bObjProto = new Boolean({});

# Array.prototype.every()

> The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

The **`every()`** method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

## Syntax

arr.every(callback(element\[, index\[, array\]\])\[, thisArg\])

### Parameters

`callback`

A function to test for each element, taking three arguments:

`element`

The current element being processed in the array.

`index` Optional

The index of the current element being processed in the array.

`array` Optional

The array `every` was called upon.

`thisArg` Optional

A value to use as `this` when executing `callback`.

### Return value

**`true`** if the `callback` function returns a [truthy]

value for all elements, `every` returns `true`.

**Caution**: Calling this method on an empty array will return `true` for any condition!

`callback` is invoked only for array indexes which have assigned values. It is not invoked for indexes which have been deleted, or which have never been assigned values.

`callback` is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `every`, it will be used as callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value. The `this` value ultimately observable by `callback` is determined according to [the usual rules for determining the `this` seen by a function](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/this).

`every` acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns `true`.

### [CONTENT/DS-n-Algos/Arrays/all/Array.prototype.every().md](<CONTENT/DS-n-Algos/Arrays/all/Array.prototype.every().md>)

# Array.prototype.every()

> The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

The **`every()`** method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

## Syntax

arr.every(callback(element\[, index\[, array\]\])\[, thisArg\])

### Parameters

`callback`

A function to test for each element, taking three arguments:

`element`

The current element being processed in the array.

`index` Optional

The index of the current element being processed in the array.

`array` Optional

The array `every` was called upon.

`thisArg` Optional

A value to use as `this` when executing `callback` .

### Return value

**`true`** if the `callback` function returns a [truthy](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/truthy) value for every array element. Otherwise, **`false`**.

## Description

The `every` method executes the provided `callback` function once for each element present in the array until it finds the one where `callback` returns a [falsy](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/falsy) value. If such an element is found, the `every` method immediately returns `false` . Otherwise, if `callback` returns a [truthy](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/truthy) value for all elements, `every` returns `true` .

**Caution**: Calling this method on an empty array will return `true` for any condition!

`callback` is invoked only for array indexes which have assigned values. It is not invoked for indexes which have been deleted, or which have never been assigned values.

`callback` is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `every` , it will be used as callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value. The `this` value ultimately observable by `callback` is determined according to [the usual rules for determining the `this` seen by a function](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/this).

`every` does not mutate the array on which it is called.

The range of elements processed by `every` is set before the first invocation of `callback` . Therefore, `callback` will not run on elements that are appended to the array after the call to `every` begins. If existing elements of the array are changed, their value as passed to `callback` will be the value at the time `every` visits them. Elements that are deleted are not visited.

`every` acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns `true` . (It is [vacuously true](https://en.wikipedia.org/wiki/Vacuous_truth) that all elements of the [empty set](https://en.wikipedia.org/wiki/Empty_set#Properties) satisfy any given condition.)

## Polyfill

`every` was added to the ECMA-262 standard in the 5th edition, and it may not be present in other implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `every` in implementations which do not natively support it.

This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming `Object` and `TypeError` have their original values, and that `callbackfn.call` evaluates to the original value of [ `Function.prototype.call` ](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call).

    if (!Array.prototype.every) {
      Array.prototype.every = function(callbackfn, thisArg) {
        'use strict';
        var T, k;

        if (this == null) {
          throw new TypeError('this is null or not defined');
        }



        var O = Object(this);




        var len = O.length >>> 0;


        if (typeof callbackfn !== 'function' && Object.prototype.toString.call(callbackfn) !== '[object Function]') {
          throw new TypeError();
        }


        if (arguments.length > 1) {
          T = thisArg;
        }


        k = 0;


        while (k < len) {

          var kValue;







          if (k in O) {
            var testResult;


            kValue = O[k];





            if(T) testResult = callbackfn.call(T, kValue, k, O);
            else testResult = callbackfn(kValue,k,O)


            if (!testResult) {
              return false;
            }
          }
          k++;
        }
        return true;
      };
    }

## Examples

### Testing size of all array elements

The following example tests whether all elements in the array are bigger than 10.

    function isBigEnough(element, index, array) {
      return element >= 10;
    }
    [12, 5, 8, 130, 44].every(isBigEnough);
    [12, 54, 18, 130, 44].every(isBigEnough);

### Using arrow functions

[Arrow functions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a shorter syntax for the same test.

    [12, 5, 8, 130, 44].every(x => x >= 10);
    [12, 54, 18, 130, 44].every(x => x >= 10);

### Affecting Initial Array (modifying, appending, and deleting)

The following examples tests the behaviour of the `every` method when the array is modified.

    let arr = [1, 2, 3, 4];
    arr.every( (elem, index, arr) => {
      arr[index+1] -= 1
      console.log( `[${arr}][${index}] -> ${elem}` )
      return elem < 2
    })











    arr = [1, 2, 3];
    arr.every( (elem, index, arr) => {
      arr.push('new')
      console.log( `[${arr}][${index}] -> ${elem}` )
      return elem < 4
    })










    arr = [1, 2, 3, 4];
    arr.every( (elem, index, arr) => {
      arr.pop()
      console.log( `[${arr}][${index}] -> ${elem}` )
      return elem < 4
    })

## Specifications

| Specification                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------- |
| [ECMAScript (ECMA-262)                                                                                                |
| The definition of 'Array.prototype.every' in that specification.](https://tc39.es/ecma262/#sec-array.prototype.every) |

## Browser compatibility

The compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|         | Desktop               | Mobile               | Server                   |
| ------- | --------------------- | -------------------- | ------------------------ | ----------------- | ---------------------- | --------------------- | -------------------------------- | ------------------------------ | ------------------------------ | ------------------------------- | ------------------------- | ----------------------------------------- | --------------------------- |
|         | Chrome                | Edge                 | Firefox                  | Internet Explorer | Opera                  | Safari                | Android webview                  | Chrome for Android             | Firefox for Android            | Opera for Android               | Safari on iOS             | Samsung Internet                          | Node.js                     |
| ---     | ---                   | ---                  | ---                      | ---               | ---                    | ---                   | ---                              | ---                            | ---                            | ---                             | ---                       | ---                                       | ---                         |
| `every` | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1.5 | IE Full support 9 | Opera Full support 9.5 | Safari Full support 3 | WebView Android Full support ≤37 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support 0.1.100 |

#### What happens next?

Our team will review your report. Once we verify the information you have supplied we will update this browser compatability table accordingly.

#### Can I keep track of my report?

You can join the GitHub repository to see updates and commits for this table data:

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

Our goal is to provide accurate, real values for all our compatibility data tables. Notifying MDN of inaccurate data or supplying new data pushes us further towards our goal of providing 100% real values to the developer community.  
Thank you for helping.

Please select the browser or browsers which are affected.

Briefly outline the issue you are highlighting. Minimum 10 and maximum 1, 000 characters.

Browser documentation and release notes are good supporting items to accompany your message. A demo hosted on services like Codepen or JSBin are perfect for providing real examples of your findings.

Connection error: Sorry, we can't seem to reach the server. We are working to fix the problem. Please try again later.

### Legend

Full support

Full support

## See also

- [`Array.prototype.forEach()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Array.prototype.some()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [`Array.prototype.find()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`TypedArray.prototype.every()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every)

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### [CONTENT/DS-n-Algos/Arrays/all/boolean-constructor.md](CONTENT/DS-n-Algos/Arrays/all/boolean-constructor.md)

# Boolean() constructor

> The Boolean() constructor is used to create Boolean objects.

The **`Boolean()`** constructor is used to create [ `Boolean` ](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) objects.

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

## Syntax

new Boolean(\[value\])

### Parameters

`value` Optional

The initial value of the `Boolean` object.

## Examples

### Creating `Boolean` objects with an initial value of `false`

    var bNoParam = new Boolean();
    var bZero = new Boolean(0);
    var bNull = new Boolean(null);
    var bEmptyString = new Boolean('');
    var bfalse = new Boolean(false);

### Creating `Boolean` objects with an initial value of `true`

    var btrue = new Boolean(true);
    var btrueString = new Boolean('true');
    var bfalseString = new Boolean('false');
    var bSuLin = new Boolean('Su Lin');
    var bArrayProto = new Boolean([]);
    var bObjProto = new Boolean({});

## Specifications

| Specification |
| ------------- |

| [ECMAScript (ECMA-262)  
The definition of 'Boolean constructor' in that specification.](https://tc39.es/ecma262/#sec-boolean-constructor) |

## Browser compatibility

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|                         | Desktop               | Mobile               | Server                 |
| ----------------------- | --------------------- | -------------------- | ---------------------- | ----------------- | -------------------- | --------------------- | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------- | ------------------------- | ----------------------------------------- | --------------------------- |
|                         | Chrome                | Edge                 | Firefox                | Internet Explorer | Opera                | Safari                | Android webview                | Chrome for Android             | Firefox for Android            | Opera for Android               | Safari on iOS             | Samsung Internet                          | Node.js                     |
| ---                     | ---                   | ---                  | ---                    | ---               | ---                  | ---                   | ---                            | ---                            | ---                            | ---                             | ---                       | ---                                       | ---                         |
| `Boolean()` constructor | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 3 | Opera Full support 4 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support 0.1.100 |

#### What happens next?

Our team will review your report. Once we verify the information you have supplied we will update this browser compatability table accordingly.

#### Can I keep track of my report?

You can join the GitHub repository to see updates and commits for this table data:

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

Our goal is to provide accurate, real values for all our compatibility data tables. Notifying MDN of inaccurate data or supplying new data pushes us further towards our goal of providing 100% real values to the developer community.  
Thank you for helping.

Please select the browser or browsers which are affected.

Briefly outline the issue you are highlighting. Minimum 10 and maximum 1, 000 characters.

Browser documentation and release notes are good supporting items to accompany your message. A demo hosted on services like Codepen or JSBin are perfect for providing real examples of your findings.

Connection error: Sorry, we can't seem to reach the server. We are working to fix the problem. Please try again later.

### Legend

Full support

Full support

## See also

- [Boolean](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/Boolean)

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)

</details><details> <summary>CONTENT/DS-n-Algos/Arrays/flatten/</summary>

### [CONTENT/DS-n-Algos/Arrays/flatten/flatten1.md](CONTENT/DS-n-Algos/Arrays/flatten/flatten1.md)

```js
function flatten(array) {
  // This is the array we are building out with non-Array elements
  let newArray = [];

  // We are iterating through each element of the array...
  array.forEach(function (element) {
    // ... if it is an array, flatten it, spread each individual element into the new array
    if (Array.isArray(element)) {
      // Recursive case (the element is an array)
      newArray.push(...flatten(element)); // Recursive step (flatten this nested array - at a certain point we will get to our deepest level of nesting and not recurse any more)
      // ... if it is a non-Array element, push it directly into the new array
    } else {
      // Base case (the element is not an array)
      newArray.push(element);
    }
  });

  // Now that we've built up our array with non-Array elements, return it
  return newArray;
}

console.log(flatten([1, "a", ["hello", ["world", "1"]]])); // [1, "a", "hello", "world", "1"]
```

---

```js
// Tracing the call stack:
flatten([1, "a", ["hello", ["world", "1"]]]);
// create newArray = []
// iterate through each element:
// current element: 1
// element is not array, push into newArray
// newArray is now [1]
// current element: "a"
// element is not array, push into newArray
// newArray is now [1, "a"]
// current element: ["hello", ["world", "1"]]
// element is an array, call flatten on it:
flatten(["hello", ["world", "1"]]);
// create newArray = []
// iterate through each element:
// current element: "hello"
// element is not array, push into newArray
// newArray is now ["hello"]
// current element: ["world", "1"]
// element is an array, call flatten on it:
flatten(["world", "1"]);
// create newArray = []
// iterate through each element:
// current element: "world"
// element is not an array, push into newArray
// newArray is now ["world"]
// current element: "1"
// element is not an array, push into newArray
// newArray is now ["world", "1"]
// Finished iterating, return newArray
// spread elements of returned flatten into newArray
// newArray is now ["hello", "world", "1"]
// Finished iterating, return newArray
// spread elements of returned flatten into newArray
// newArray is now [1, "a", "hello", "world", "1"]
// Finished iterating, return newArray
```

### [CONTENT/DS-n-Algos/Arrays/flatten/flatten2.md](CONTENT/DS-n-Algos/Arrays/flatten/flatten2.md)

Flattens an array up to the specified depth.

- Use recursion, decrementing `depth` by 1 for each level of depth.
- Use `Array..reduce()` and `Array..concat()` to merge elements or arrays.
- Base case, for `depth` equal to `1` stops recursion.
- Omit the second argument, `depth` to flatten only to a depth of `1` (single flatten).

```js
function flatten(arr, depth = 1) {
  return arr.reduce((newArr, curEle) => {
    if (depth > 1 && Array.isArray(curEle)) {
      return newArr.concat(flatten(curEle, depth - 1));
    } else {
      return newArr.concat(curEle);
    }
  }, []);
}
console.log("flatten([1, [2], 3, 4], 3): ", flatten([1, [2], 3, 4], 3));
```

```js
flatten([1, "a", ["hello", ["world", "1"]]]);
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```

</details><details> <summary>CONTENT/DS-n-Algos/Arrays/Intersection/</summary>

### [CONTENT/DS-n-Algos/Arrays/Intersection/intersection.md](CONTENT/DS-n-Algos/Arrays/Intersection/intersection.md)

Write a function named intersection(firstArr) that takes in an array and
returns a function. When the function returned by intersection is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.

Example 1:
let abc = intersection(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = intersection(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

**************************************\*\*\***************************************/

function intersection(firstArr) {
return (secondArr) => {

    let common = [];

    for (let i = 0; i < firstArr.length; i++) {
      let el = firstArr[i];
      if (secondArr.indexOf(el) > -1) {
        common.push(el);
      }
    }

    return common;

};
}

</details><details> <summary>CONTENT/DS-n-Algos/Binary-Trees/105-construct-b-tree/</summary>

### [CONTENT/DS-n-Algos/Binary-Trees/105-construct-b-tree/105-with comments.md](CONTENT/DS-n-Algos/Binary-Trees/105-construct-b-tree/105-with comments.md)

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

</details><details> <summary>CONTENT/DS-n-Algos/Binary-Trees/</summary>

### [CONTENT/DS-n-Algos/Binary-Trees/binary-tree-reading.md](CONTENT/DS-n-Algos/Binary-Trees/binary-tree-reading.md)

# Example Binary Tree

### Visual Aid

---

## ![picture alt](https://assets.aaonline.io/data_structures_algorithms/trees/images/graph_a.png)

---

### Example Code

---

```js
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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
```

---

---

# Terms

- tree - graph with no cycles
- binary tree - tree where nodes have at most 2 nodes
- root - the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent
- internal node - a node that has children
- leaf - a node that does not have any children
- path - a series of nodes that can be traveled through edges - for example A, B, E is a path through the above tree

---

# Search Patterns

- Breadth First Search - Check all nodes at a level before moving down a level
  - Think of this of searching horizontally in rows
- Depth First Search - Check the depth as far as it goes for one child, before
  moving on to the next child.
  - Think of this as searching vertically in diagonals
  - Pre-Order Traversal - Access the data of the current node, recursively visit the left sub tree, recursively visit the right sub tree
    - All the way to the left, top down, going right after other options have already been logged.
  - In-Order Traversal - Recursively visit the left sub tree, access the data of the current node, recursively visit the right sub tree
    - In the order they were the "current root", the actual return order of the recursive calls.
  - Post-Order Traversal - Recursively visit the left sub tree, recursively visit the right sub tree, access the data of the current node.
    - Starting with the bottom most nodes working up through the tree

---

# Constraints

- Binary trees have at most two children per node
- Given any node of the tree, the values on the left must be strictly less than that node
- Given any node of the tree, the values on the right must be strictly greater than or equal to that node
- Given these constraints a binary tree is necessarily a sorted data structure
- The worst binary trees devolve into a linked list, the best are height balanced (think branching).

---

# PseudoCode For Insertion

- Create a new node
- Start at the root
  - Check if there is a root
    - If not the root becomes the new node
  - If there is a root check if the value of the new node is equal to, greater then, or less then the value of the root
    - If it is greater or equal to
      - Check to see if there is a node to the right
        - If there is, move to the new node and continue with the node to the right as the subtree root
        - If there is not, add the new node as the right property of the current node
    - If it is smaller
      - Check to see if there is a node to the left
        - If there is, move to the new node and continue with the node to the left as the subtree root
        - If there is not, add the new node as the left property of the current node

---

# PseudoCode For Search Of A single Item

- Start at the root
  - Check if there is a root
    - If not, there is nothing in the tree, so the search is over
  - If there is a root, check if the value of the root is equal to, greater then, or less then the value were looking for;
    - If it is equal to the value
      - We found what we are searching for
    - If it is less than the value
      - Check to see if there is a node to the left
        - If there isn't
          - the value isn't in our tree
        - If there is
          - repeat these steps with the node to the left as the new subtree root
    - If it is greater than the value
      - Check to see if there is a node to the right
        - If there isn't
          - the value isn't in our tree
        - If there is
          - repeat these steps with the node to the right as the new subtree root

---

# PseudoCode For Breadth First Search Traversal

- Create a queue class or use an array
- Create a variable to store the values of the nodes visited
- Place the root in the queue
- Loop as many times as there are items in the queue
  - Dequeue a node
  - If there is a left value to the node dequeued, add it to the queue
  - If there is a right value to the node dequeued, add it to the queue
  - Push the nodes value into the variable that stores nodes visited

---

# PseudoCode For Depth First Search Traversal

## Pre-Order

#### Iterative

- Create a stack class or use an array
- Push the root into the stack
- Create a variable to store the values of the nodes visited
- Do this as long as there is something on the stack
  - Pop a node from the stack
  - Push that nodes value into the variable that stores nodes visited.
  - If there is a node to the right push it into the stack
  - If there is a node to the left push it into the stack
- Return the variable storing the values

#### Recursive

- Create a variable to store the current root
- Push the value of current root to the variable storing the values
- If the current root has a left propety call the function on that the left property
- If the current root has a right propety call the function on that the right property
- Spread the current root, the left values, and the right values

## In-Order

#### Iterative

- Create a stack class or use an array
- Create a variable to store the current root
- Create a variable to store the values of the nodes visited
- Create a loop
  - While the current root exists
    - push the current root to the call stack
    - current root is equal to the left of current root
  - if the stack is empty break out of the loop
  - set a variable to equal the popped value of the stack
  - push that variable into the variable that stores values
  - set the current root to the right of the current loop
- Return the variable storing the values

#### Recursive

- Create a variable to store the current root
- Push the value of current root to the variable storing the values
- If the current root has a left propety call the function on that the left property
- If the current root has a right propety call the function on that the right property
- Spread the the left values, current root ,and the right values

## Post-Order

#### Iterative

- Haven't figured this one out yet.

#### Recursive

- Create a variable to store the current root
- Push the value of current root to the variable storing the values
- If the current root has a left propety call the function on that the left property
- If the current root has a right propety call the function on that the right property
- Spread the the left values, the right values, and current root

---

# Example Binary Search Tree

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

  //Insert a new node

  recursiveInsert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return this;
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

  iterativeInsert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return this;
    }
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode();
      } else {
        while (true) {
          if (val < currentNode.val) {
            if (!currenNodet.left) {
              currentNode.left = new TreeNode();
              return this;
            } else {
              currentNode = currentNode.left;
            }
          } else {
            if (!currentNode.right) {
              currentNode.right = new TreeNode();
              return this;
            } else {
              currentNode = currentNode.right;
            }
          }
        }
      }
    }
  }

  //Search the tree

  searchRecur(val, currentNode = this.root) {
    if (!currentNode) return false;
    if (val < currentNode.val) {
      return this.searchRecur(val, currentNode.left);
    } else if (val > currentNode.val) {
      return this.searchRecur(val, currentNode.right);
    } else {
      return true;
    }
  }

  searchIter(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Maybe works, who knows, pulled it off the internet....

  deleteNodeHelper(root, key) {
    if (root === null) {
      return false;
    }
    if (key < root.val) {
      root.left = deleteNodeHelper(root.left, key);
      return root;
    } else if (key > root.val) {
      root.right = deleteNodeHelper(root.right, key);
      return root;
    } else {
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let currNode = root.right;
      while (currNode.left !== null) {
        currNode = currNode.left;
      }
      root.val = currNode.val;
      root.right = deleteNodeHelper(root.right, currNode.val);
      return root;
    }
  }

  //Recursive Depth First Search

  preOrderTraversal(root) {
    if (!root) return [];
    let left = this.preOrderTraversal(root.left);
    let right = this.preOrderTraversal(root.right);
    return [root.val, ...left, ...right];
  }

  preOrderTraversalV2(root) {
    if (!root) return [];
    let newArray = new Array();
    newArray.push(root.val);
    newArray.push(...this.preOrderTraversalV2(root.left));
    newArray.push(...this.preOrderTraversalV2(root.right));
    return newArray;
  }

  inOrderTraversal(root) {
    if (!root) return [];
    let left = this.inOrderTraversal(root.left);
    let right = this.inOrderTraversal(root.right);
    return [...left, root.val, ...right];
  }

  inOrderTraversalV2(root) {
    if (!root) return [];
    let newArray = new Array();
    newArray.push(...this.inOrderTraversalV2(root.left));
    newArray.push(root.val);
    newArray.push(...this.inOrderTraversalV2(root.right));
    return newArray;
  }

  postOrderTraversal(root) {
    if (!root) return [];
    let left = this.postOrderTraversal(root.left);
    let right = this.postOrderTraversal(root.right);
    return [...left, ...right, root.val];
  }

  postOrderTraversalV2(root) {
    if (!root) return [];
    let newArray = new Array();
    newArray.push(...this.postOrderTraversalV2(root.left));
    newArray.push(...this.postOrderTraversalV2(root.right));
    newArray.push(root.val);
    return newArray;
  }

  // Iterative Depth First Search

  iterativePreOrder(root) {
    let stack = [root];
    let results = [];
    while (stack.length) {
      let current = stack.pop();
      results.push(current);
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
    return results;
  }

  iterativeInOrder(root) {
    let stack = [];
    let current = root;
    let results = [];
    while (true) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      if (!stack.length) break;
      let removed = stack.pop();
      results.push(removed);
      current = current.right;
    }
    return results;
  }

  //To-Do iterativePostOrder

  //Breadth First Search

  breadthFirstSearch(root) {
    let queue = [root];
    let result = [];
    while (queue.length) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.left);
      current.push(result);
    }
    return result;
  }

  // Converting a Sorted Array to a Binary Search Tree

  sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);

    let left = nums.slice(0, mid);
    root.left = sortedArrayToBST(left);

    let right = nums.slice(mid + 1);
    root.right = sortedArrayToBST(right);

    return root;
  }
}
```

</details><details> <summary>CONTENT/DS-n-Algos/Binary-Trees/leetcode110-balanced-bin-tree/</summary>

### [CONTENT/DS-n-Algos/Binary-Trees/leetcode110-balanced-bin-tree/Balanced Binary Tree - LeetCode.md](CONTENT/DS-n-Algos/Binary-Trees/leetcode110-balanced-bin-tree/Balanced Binary Tree - LeetCode.md)

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

[Source](https://leetcode.com/problems/balanced-binary-tree/)

</details><details> <summary>CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/doc/api/</summary>

### [CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/doc/api/dtw.md](CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/doc/api/dtw.md)

# DTW API

**Author:** 

## DTW(\[options\])

Initializes a new instance of the `DTW`. If no options are provided the squared euclidean distance function is used.

**Parameters**

**[options]**: _DTWOptions_, The options to initialize the dynamic time warping instance with.

## class DTWOptions

**Members**

**distanceMetric**: _string_, The distance metric to use: `'manhattan' | 'euclidean' | 'squaredEuclidean'`.

**distanceFunction**: _function_, The distance function to use. The function should accept two numeric arguments and return the numeric distance. e.g. function (a, b) { return a + b; }

## class DTW

**Methods**

## DTW.compute(firstSequence, secondSequence, \[window\])

Computes the optimal match between two provided sequences.

**Parameters**

**firstSequence**: _number[]_, The first sequence.

**secondSequence**: _number[]_, The second sequence.

**[window]**: _number_, The window parameter (for the locality constraint) to use.

**Returns**

_number_, The similarity between the provided temporal sequences.

## DTW.path()

Retrieves the optimal match between two provided sequences.

**Returns**

_number[]_, The array containing the optimal path points.

</details><details> <summary>CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/doc/</summary>

### [CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/doc/dtw-w-comments.md](CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/doc/dtw-w-comments.md)

# DTW.js

```js
var debug = require("debug")("dtw");
var validate = require("./validate");
var matrix = require("./matrix");
var comparison = require("./comparison");

function validateOptions(options) {
  if (typeof options !== "object") {
    throw new TypeError("Invalid options type: expected an object");
  } else if (
    typeof options.distanceMetric !== "string" &&
    typeof options.distanceFunction !== "function"
  ) {
    throw new TypeError(
      "Invalid distance types: expected a string distance type or a distance function"
    );
  } else if (
    typeof options.distanceMetric === "string" &&
    typeof options.distanceFunction === "function"
  ) {
    throw new Error(
      "Invalid parameters: provide either a distance metric or function but not both"
    );
  }

  if (typeof options.distanceMetric === "string") {
    var normalizedDistanceMetric = options.distanceMetric.toLowerCase();
    if (
      normalizedDistanceMetric !== "manhattan" &&
      normalizedDistanceMetric !== "euclidean" &&
      normalizedDistanceMetric !== "squaredeuclidean"
    ) {
      throw new Error(
        "Invalid parameter value: Unknown distance metric '" +
          options.distanceMetric +
          "'"
      );
    }
  }
}

function retrieveDistanceFunction(distanceMetric) {
  var normalizedDistanceMetric = distanceMetric.toLowerCase();
  var distanceFunction = null;
  if (normalizedDistanceMetric === "manhattan") {
    distanceFunction = require("./distanceFunctions/manhattan").distance;
  } else if (normalizedDistanceMetric === "euclidean") {
    distanceFunction = require("./distanceFunctions/euclidean").distance;
  } else if (normalizedDistanceMetric === "squaredeuclidean") {
    distanceFunction = require("./distanceFunctions/squaredEuclidean").distance;
  }

  return distanceFunction;
}

/**
 * Create a DTWOptions object
 * @class DTWOptions
 * @member {string} distanceMetric The distance metric to use: `'manhattan' | 'euclidean' | 'squaredEuclidean'`.
 * @member {function} distanceFunction The distance function to use. The function should accept two numeric arguments and return the numeric distance. e.g. function (a, b) { return a + b; }
 */

/**
 * Create a DTW object
 * @class DTW
 */
/**
 * Initializes a new instance of the `DTW`. If no options are provided the squared euclidean distance function is used.
 * @function DTW
 * @param {DTWOptions} [options] The options to initialize the dynamic time warping instance with.
 */
/**
 * Computes the optimal match between two provided sequences.
 * @method compute
 * @param {number[]} firstSequence The first sequence.
 * @param {number[]} secondSequence The second sequence.
 * @param {number} [window] The window parameter (for the locality constraint) to use.
 * @returns {number} The similarity between the provided temporal sequences.
 */
/**
 * Retrieves the optimal match between two provided sequences.
 * @method path
 * @returns {number[]} The array containing the optimal path points.
 */
var DTW = function (options) {
  var state = {
    distanceCostMatrix: null,
  };
  if (typeof options === "undefined") {
    state.distance = require("./distanceFunctions/squaredEuclidean").distance;
  } else {
    validateOptions(options);
    if (typeof options.distanceMetric === "string") {
      state.distance = retrieveDistanceFunction(options.distanceMetric);
    } else if (typeof options.distanceFunction === "function") {
      state.distance = options.distanceFunction;
    }
  }

  this.compute = function (firstSequence, secondSequence, window) {
    var cost = Number.POSITIVE_INFINITY;
    if (typeof window === "undefined") {
      cost = computeOptimalPath(firstSequence, secondSequence, state);
    } else if (typeof window === "number") {
      cost = computeOptimalPathWithWindow(
        firstSequence,
        secondSequence,
        window,
        state
      );
    } else {
      throw new TypeError("Invalid window parameter type: expected a number");
    }

    return cost;
  };

  this.path = function () {
    var path = null;
    if (state.distanceCostMatrix instanceof Array) {
      path = retrieveOptimalPath(state);
    }

    return path;
  };
};

function validateComputeParameters(s, t) {
  validate.sequence(s, "firstSequence");
  validate.sequence(t, "secondSequence");
}

function computeOptimalPath(s, t, state) {
  debug("> computeOptimalPath");
  validateComputeParameters(s, t);
  var start = new Date().getTime();
  state.m = s.length;
  state.n = t.length;
  var distanceCostMatrix = matrix.create(
    state.m,
    state.n,
    Number.POSITIVE_INFINITY
  );

  distanceCostMatrix[0][0] = state.distance(s[0], t[0]);

  for (var rowIndex = 1; rowIndex < state.m; rowIndex++) {
    var cost = state.distance(s[rowIndex], t[0]);
    distanceCostMatrix[rowIndex][0] =
      cost + distanceCostMatrix[rowIndex - 1][0];
  }

  for (var columnIndex = 1; columnIndex < state.n; columnIndex++) {
    var cost = state.distance(s[0], t[columnIndex]);
    distanceCostMatrix[0][columnIndex] =
      cost + distanceCostMatrix[0][columnIndex - 1];
  }

  for (var rowIndex = 1; rowIndex < state.m; rowIndex++) {
    for (var columnIndex = 1; columnIndex < state.n; columnIndex++) {
      var cost = state.distance(s[rowIndex], t[columnIndex]);
      distanceCostMatrix[rowIndex][columnIndex] =
        cost +
        Math.min(
          distanceCostMatrix[rowIndex - 1][columnIndex], // Insertion
          distanceCostMatrix[rowIndex][columnIndex - 1], // Deletion
          distanceCostMatrix[rowIndex - 1][columnIndex - 1]
        ); // Match
    }
  }

  var end = new Date().getTime();
  var time = end - start;
  debug("< computeOptimalPath (" + time + " ms)");
  state.distanceCostMatrix = distanceCostMatrix;
  state.similarity = distanceCostMatrix[state.m - 1][state.n - 1];
  return state.similarity;
}

function computeOptimalPathWithWindow(s, t, w, state) {
  debug("> computeOptimalPathWithWindow");
  validateComputeParameters(s, t);
  var start = new Date().getTime();
  state.m = s.length;
  state.n = t.length;
  var window = Math.max(w, Math.abs(s.length - t.length));
  var distanceCostMatrix = matrix.create(
    state.m + 1,
    state.n + 1,
    Number.POSITIVE_INFINITY
  );
  distanceCostMatrix[0][0] = 0;

  for (var rowIndex = 1; rowIndex <= state.m; rowIndex++) {
    for (
      var columnIndex = Math.max(1, rowIndex - window);
      columnIndex <= Math.min(state.n, rowIndex + window);
      columnIndex++
    ) {
      var cost = state.distance(s[rowIndex - 1], t[columnIndex - 1]);
      distanceCostMatrix[rowIndex][columnIndex] =
        cost +
        Math.min(
          distanceCostMatrix[rowIndex - 1][columnIndex], // Insertion
          distanceCostMatrix[rowIndex][columnIndex - 1], // Deletion
          distanceCostMatrix[rowIndex - 1][columnIndex - 1]
        ); // Match
    }
  }

  var end = new Date().getTime();
  var time = end - start;
  debug("< computeOptimalPathWithWindow (" + time + " ms)");
  distanceCostMatrix.shift();
  distanceCostMatrix = distanceCostMatrix.map(function (row) {
    return row.slice(1, row.length);
  });
  state.distanceCostMatrix = distanceCostMatrix;
  state.similarity = distanceCostMatrix[state.m - 1][state.n - 1];
  return state.similarity;
}

function retrieveOptimalPath(state) {
  debug("> retrieveOptimalPath");
  var start = new Date().getTime();

  var rowIndex = state.m - 1;
  var columnIndex = state.n - 1;
  var path = [[rowIndex, columnIndex]];
  var epsilon = 1e-14;
  while (rowIndex > 0 || columnIndex > 0) {
    if (rowIndex > 0 && columnIndex > 0) {
      var min = Math.min(
        state.distanceCostMatrix[rowIndex - 1][columnIndex], // Insertion
        state.distanceCostMatrix[rowIndex][columnIndex - 1], // Deletion
        state.distanceCostMatrix[rowIndex - 1][columnIndex - 1]
      ); // Match
      if (
        comparison.nearlyEqual(
          min,
          state.distanceCostMatrix[rowIndex - 1][columnIndex - 1],
          epsilon
        )
      ) {
        rowIndex--;
        columnIndex--;
      } else if (
        comparison.nearlyEqual(
          min,
          state.distanceCostMatrix[rowIndex - 1][columnIndex],
          epsilon
        )
      ) {
        rowIndex--;
      } else if (
        comparison.nearlyEqual(
          min,
          state.distanceCostMatrix[rowIndex][columnIndex - 1],
          epsilon
        )
      ) {
        columnIndex--;
      }
    } else if (rowIndex > 0 && columnIndex === 0) {
      rowIndex--;
    } else if (rowIndex === 0 && columnIndex > 0) {
      columnIndex--;
    }

    path.push([rowIndex, columnIndex]);
  }

  var end = new Date().getTime();
  var time = end - start;
  debug("< retrieveOptimalPath (" + time + " ms)");
  return path.reverse();
}

module.exports = DTW;
```

</details><details> <summary>CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/</summary>

### [CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/Dynamic Time Warping.md](CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/Dynamic Time Warping.md)

# Dynamic Time Warping

> Explanation and Code Implementation

## Explanation and Code Implementation

[![Jeremy Zhang](https://miro.medium.com/fit/c/56/56/0*OHP4EDyFQhdpx4uk.)](https://meatba11.medium.com/?source=post_page-----3933f25fcdd--------------------------------)

Sounds like time traveling or some kind of future technic, however, it is not. Dynamic Time Warping is used to compare the similarity or calculate the distance between two arrays or time series with different length.

Suppose we want to calculate the distance of two equal-length arrays:

a = \[1, 2, 3\]  
b = \[3, 2, 2\]

How to do that? One obvious way is to match up `a` and `b` in 1-to-1 fashion and sum up the total distance of each component. This sounds easy, but what if `a` and `b` have different lengths?

a = \[1, 2, 3\]  
b = \[2, 2, 2, 3, 4\]

How to match them up? Which should map to which? To solve the problem, there comes dynamic time warping. Just as its name indicates, to warp the series so that they can match up.

Before digging into the algorithm, you might have the question that is it useful? Do we really need to compare the distance between two unequal-length time series?

Yes, in a lot of scenarios DTW is playing a key role.

## Sound Pattern Recognition

One use case is to detect the sound pattern of the same kind. Suppose we want to recognise the voice of a person by analysing his sound track, and we are able to collect his sound track of saying `Hello` in one scenario. However, people speak in the same word in different ways, what if he speaks hello in a much slower pace like `Heeeeeeelloooooo` , we will need an algorithm to match up the sound track of different lengths and be able to identify they come from the same person.

![Image for post](https://miro.medium.com/max/60/1*gi1TtOqFCsb2M_U7iAUAag.png?q=20)

![Image for post](https://miro.medium.com/max/2352/1*gi1TtOqFCsb2M_U7iAUAag.png)

## Stock Market

In a stock market, people always hope to be able to predict the future, however using general machine learning algorithms can be exhaustive, as most prediction task requires test and training set to have the same dimension of features. However, if you ever speculate in the stock market, you will know that even the same pattern of a stock can have very different length reflection on klines and indicators.

![Image for post](https://miro.medium.com/max/3832/1*4QUO4Tqm_z-8ydMBGgqmPg.png)

A concise explanation of DTW from wiki,

> In time series analysis, dynamic time warping (DTW) is one of the algorithms for measuring similarity between two temporal sequences, which may vary in speed. DTW has been applied to temporal sequences of video, audio, and graphics data — indeed, any data that can be turned into a linear sequence can be analysed with DTW.

_The idea to compare arrays with different length is to build one-to-many and many-to-one matches so that the total distance can be minimised between the two._

Suppose we have two different arrays red and blue with different length:

![Image for post](https://miro.medium.com/max/1360/1*uFicSZjqkNBfsyrsJw7J9g.jpeg)

Clearly these two series follow the same pattern, but the blue curve is longer than the red. If we apply the one-to-one match, shown in the top, the mapping is not perfectly synced up and the tail of the blue curve is being left out.

DTW overcomes the issue by developing a one-to-many match so that the troughs and peaks with the same pattern are perfectly matched, and there is no left out for both curves(shown in the bottom top).

In general, DTW is a method that calculates an optimal match between two given sequences (e.g. time series) with certain restriction and rules(comes from wiki):

- Every index from the first sequence must be matched with one or more indices from the other sequence and vice versa
- The first index from the first sequence must be matched with the first index from the other sequence (but it does not have to be its only match)
- The last index from the first sequence must be matched with the last index from the other sequence (but it does not have to be its only match)
- The mapping of the indices from the first sequence to indices from the other sequence must be monotonically increasing, and vice versa, i.e. if `j > i` are indices from the first sequence, then there must not be two indices `l > k` in the other sequence, such that index `i` is matched with index `l` and index `j` is matched with index `k` , and vice versa

The optimal match is denoted by the match that satisfies all the restrictions and the rules and that has the minimal cost, where the cost is computed as the sum of absolute differences, for each matched pair of indices, between their values.

To summarise is that _head and tail must be positionally matched, no cross-match and no left out._

The implementation of the algorithm looks extremely concise:

![Image for post](https://miro.medium.com/max/2704/1*fGr2Mj7fEB7tEyqAzcp2LA.png)

where `DTW[i, j]` is the distance between `s[1:i]` and `t[1:j]` with the best alignment.

The key lies in:

DTW\[i, j\] := cost + minimum(DTW\[i-1, j \],  
 DTW\[i , j-1\],  
 DTW\[i-1, j-1\])

Which is saying that the cost of between two arrays with length `i and j` equals _the distance between the tails + the minimum of cost in arrays with length_ `_i-1, j_` _,_ `_i, j-1_` _, and_ `_i-1, j-1_` _._

Put it in python would be:

Example:

![Image for post](https://miro.medium.com/max/1964/1*eogOkXkOUzi6Cq7U9BgiLg.png)

The distance between `a and b` would be the last element of the matrix, which is 2.

## Add Window Constraint

One issue of the above algorithm is that we allow one element in an array to match an unlimited number of elements in the other array(as long as the tail can match in the end), this would cause the mapping to bent over a lot, for example, the following array:

a = \[1, 2, 3\]  
b = \[1, 2, 2, 2, 2, 2, 2, 2, ..., 5\]

To minimise the distance, the element 2 in array `a` would match all the 2 in array `b` , which causes an array `b` to bent severely. To avoid this, we can add a window constraint to limit the number of elements one can match:

![Image for post](https://miro.medium.com/max/2680/1*0_xypte7FHDWJuuBexEvHg.png)

The key difference is that now each element is confined to match elements in range `i — w` and `i + w` . The `w := max(w, abs(n-m))` guarantees all indices can be matched up.

The implementation and example would be:

![Image for post](https://miro.medium.com/max/2236/1*2K6C-3QrRmbbhpe-jt9UQA.png)

There is also contributed packages available on Pypi to use directly. Here I demonstrate an example using [fastdtw](https://pypi.org/project/fastdtw/):

It gives you the distance of two lists and index mapping(the example can extend to a multi-dimension array).

Lastly, you can check out the implementation [here](https://github.com/MJeremy2017/Machine-Learning-Models/tree/master/Dynamic-Time-Warping).

**Reference**:

\[1\] [https://databricks.com/blog/2019/04/30/understanding-dynamic-time-warping.html](https://databricks.com/blog/2019/04/30/understanding-dynamic-time-warping.html)

\[2\] [https://en.wikipedia.org/wiki/Dynamic_time_warping](https://en.wikipedia.org/wiki/Dynamic_time_warping)

[Source](https://towardsdatascience.com/dynamic-time-warping-3933f25fcdd)

</details><details> <summary>CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/ms/</summary>

### [CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/ms/license.md](CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/ms/license.md)

The MIT License (MIT)

Copyright (c) 2016 Zeit, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### [CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/ms/readme.md](CONTENT/DS-n-Algos/Dynamic-Programming/dynamic-time-warping/ms/readme.md)

# ms

[![Build Status](https://travis-ci.org/zeit/ms.svg?branch=master)](https://travis-ci.org/zeit/ms)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/zeit)

Use this package to easily convert various time formats to milliseconds.

## Examples

```js
ms("2 days"); // 172800000
ms("1d"); // 86400000
ms("10h"); // 36000000
ms("2.5 hrs"); // 9000000
ms("2h"); // 7200000
ms("1m"); // 60000
ms("5s"); // 5000
ms("1y"); // 31557600000
ms("100"); // 100
ms("-3 days"); // -259200000
ms("-1h"); // -3600000
ms("-200"); // -200
```

### Convert from Milliseconds

```js
ms(60000); // "1m"
ms(2 * 60000); // "2m"
ms(-3 * 60000); // "-3m"
ms(ms("10 hours")); // "10h"
```

### Time Format Written-Out

```js
ms(60000, { long: true }); // "1 minute"
ms(2 * 60000, { long: true }); // "2 minutes"
ms(-3 * 60000, { long: true }); // "-3 minutes"
ms(ms("10 hours"), { long: true }); // "10 hours"
```

## Features

- Works both in [Node.js](https://nodejs.org) and in the browser
- If a number is supplied to `ms`, a string with a unit is returned
- If a string that contains the number is supplied, it returns it as a number (e.g.: it returns `100` for `'100'`)
- If you pass a string with a number and a valid unit, the number of equivalent milliseconds is returned

## Related Packages

- [ms.macro](https://github.com/knpwrs/ms.macro) - Run `ms` as a macro at build-time.

## Caught a Bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the module you want to test your local development instance of ms, just link it to the dependencies: `npm link ms`. Instead of the default one from npm, Node.js will now use your clone of ms!

As always, you can run the tests using: `npm test`

</details><details> <summary>CONTENT/DS-n-Algos/functions/bindTo/</summary>

### [CONTENT/DS-n-Algos/functions/bindTo/function.apply().md](<CONTENT/DS-n-Algos/functions/bindTo/function.apply().md>)

# Function.prototype.apply()

> The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

The `**apply()**` method calls a function with a given `this` value, and `arguments` provided as an array (or an [array-like object](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)).

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

## Syntax

    func

### Parameters

`thisArg`

The value of `this` provided for the call to `func`.

Note that `this` may not be the actual value seen by the method: if the method is a function in [non-strict mode](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Strict_mode) code, [`null`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) and [`undefined`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) will be replaced with the global object, and primitive values will be boxed. This argument is required.

`argsArray` Optional

An array-like object, specifying the arguments with which `func` should be called, or [`null`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) or [`undefined`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) if no arguments should be provided to the function.

Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for [browser compatibility](#Browser_compatibility) information.

### Return value

The result of calling the function with the specified `**this**` value and arguments.

## Description

**Note:** While the syntax of this function is almost identical to that of [`call()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), the fundamental difference is that `call()` accepts an **argument list**, while `apply()` accepts a **single array of arguments**.

**Note:** When the first argument is undefined or null a similar outcome can be achieved using the array [spread syntax](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

You can assign a different `this` object when calling an existing function. `this` refers to the current object (the calling object). With `apply`, you can write a method once, and then inherit it in another object, without having to rewrite the method for the new object.

`apply` is very similar to [`call()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), except for the type of arguments it supports. You use an arguments array instead of a list of arguments (parameters). With `apply`, you can also use an array literal, for example, `func.apply(this, ['eat', 'bananas'])`, or an [`Array`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) object, for example, `func.apply(this, new Array('eat', 'bananas'))`.

You can also use [`arguments`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions/arguments) for the `argsArray` parameter. [`arguments`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is a local variable of a function. It can be used for all unspecified arguments of the called object. Thus, you do not have to know the arguments of the called object when you use the `apply` method. You can use `arguments` to pass all the arguments to the called object. The called object is then responsible for handling the arguments.

Since ECMAScript 5th Edition, you can also use any kind of object which is array-like. In practice, this means it's going to have a `length` property, and integer ("index") properties in the range `(0..length - 1)`. For example, you could use a [`NodeList`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/NodeList), or a custom object like `{ 'length': 2, '0': 'eat', '1': 'bananas' }`.

**Note:** Many older browsers—including Chrome <17 and Internet Explorer <9—don't accept array-like objects, and will throw an exception.

## Examples

### Using apply to append an array to another

You can use `push` to append an element to an array. And, because `push` accepts a variable number of arguments, you can also push multiple elements at once.

But, if you pass an array to `push`, it will actually add that array as a single element, instead of adding the elements individually. So you end up with an array inside an array.

What if that is not what you want? `concat` does have the desired behaviour in this case, but it does not append to the _existing_ array—it instead creates and returns a new array.

But you wanted to append to the existing array... So what now? Write a loop? Surely not?

`apply` to the rescue!

    const array = ['a', 'b'];
    const elements = [0, 1, 2];
    array.push.apply(array, elements);
    console.info(array);

### Using apply and built-in functions

Clever usage of `apply` allows you to use built-in functions for some tasks that would probably have otherwise been written by looping over the array values.

As an example, here are `Math.max`/`Math.min`, used to find out the maximum/minimum value in an array.

    const numbers = [5, 6, 2, 3, 7];


    let max = Math.max.apply(null, numbers);



    let min = Math.min.apply(null, numbers);


    max = -Infinity, min = +Infinity;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }

But beware: by using `apply` this way, you run the risk of exceeding the JavaScript engine's argument length limit. The consequences of applying a function with too many arguments (that is, more than tens of thousands of arguments) varies across engines. (The JavaScriptCore engine has hard-coded [argument limit of 65536](https://bugs.webkit.org/show_bug.cgi?id=80797).

This is because the limit (and indeed, even the nature of any excessively-large-stack behavior) is unspecified. Some engines will throw an exception. More perniciously, others will arbitrarily limit the number of arguments actually passed to the applied function. To illustrate this latter case: if such an engine had a limit of four arguments (actual limits are of course significantly higher), it would be as if the arguments `5, 6, 2, 3` had been passed to `apply` in the examples above, rather than the full array.

If your value array might grow into the tens of thousands, use a hybrid strategy: apply your function to chunks of the array at a time:

    function minOfArray(arr) {
      let min = Infinity;
      let QUANTUM = 32768;

      for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
        var submin = Math.min.apply(null,
                                    arr.slice(i, Math.min(i+QUANTUM, len)));
        min = Math.min(submin, min);
      }

      return min;
    }

    let min = minOfArray([5, 6, 2, 3, 7]);

### Using apply to chain constructors

You can use `apply` to chain [constructors](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new) for an object (similar to Java).

In the following example we will create a global [`Function`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) method called `construct`, which will enable you to use an array-like object with a constructor instead of an arguments list.

    Function.prototype.construct = function(aArgs) {
      let oNew = Object.create(this.prototype);
      this.apply(oNew, aArgs);
      return oNew;
    };

**Note:** The `Object.create()` method used above is relatively new. For alternative methods, please consider one of the following approaches:

Using [`Object.__proto__`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__):

    Function.prototype.construct = function (aArgs) {
      let oNew = {};
      oNew.__proto__ = this.prototype;
      this.apply(oNew, aArgs);
      return oNew;
    };

Using [closures](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Closures):

    Function.prototype.construct = function(aArgs) {
      let fConstructor = this, fNewConstr = function() {
        fConstructor.apply(this, aArgs);
      };
      fNewConstr.prototype = fConstructor.prototype;
      return new fNewConstr();
    };

Using the [`Function`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) constructor:

    Function.prototype.construct = function (aArgs) {
      let fNewConstr = new Function("");
      fNewConstr.prototype = this.prototype;
      let oNew = new fNewConstr();
      this.apply(oNew, aArgs);
      return oNew;
    };

Example usage:

    function MyConstructor() {
      for (let nProp = 0; nProp < arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp];
      }
    }

    let myArray = [4, 'Hello world!', false];
    let myInstance = MyConstructor.construct(myArray);

    console.log(myInstance.property1);
    console.log(myInstance instanceof MyConstructor);
    console.log(myInstance.constructor);

**Note:** This non-native `Function.construct` method will not work with some native constructors; like [`Date`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), for example. In these cases you have to use the [`Function.prototype.bind`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method.

For example, imagine having an array like the following, to be used with [`Date`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) constructor: `[2012, 11, 4]`; in this case you have to write something like: `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()`.

This is not the best way to do things, and probably not to be used in any production environment.

## Specifications

| Specification |
| ------------- |

| [ECMAScript (ECMA-262)  
The definition of 'Function.prototype.apply' in that specification.](https://tc39.es/ecma262/#sec-function.prototype.apply) |

## Browser compatibility

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|                                                  | Desktop                | Mobile               | Server                 |
| ------------------------------------------------ | ---------------------- | -------------------- | ---------------------- | ------------------- | -------------------- | --------------------- | -------------------------------- | ------------------------------ | ------------------------------ | ------------------------------- | ------------------------- | ----------------------------------------- | ----------------------- |
|                                                  | Chrome                 | Edge                 | Firefox                | Internet Explorer   | Opera                | Safari                | Android webview                  | Chrome for Android             | Firefox for Android            | Opera for Android               | Safari on iOS             | Samsung Internet                          | Node.js                 |
| ---                                              | ---                    | ---                  | ---                    | ---                 | ---                  | ---                   | ---                              | ---                            | ---                            | ---                             | ---                       | ---                                       | ---                     |
| `apply`                                          | Chrome Full support 1  | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 4 | Safari Full support 1 | WebView Android Full support 1   | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| ES 5.1: generic array-like object as `arguments` | Chrome Full support 17 | Edge Full support 12 | Firefox Full support 4 | IE Full support 9   | Opera Full support 5 | Safari Full support 6 | WebView Android Full support ≤37 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 6 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |

#### What happens next?

Our team will review your report. Once we verify the information you have supplied we will update this browser compatability table accordingly.

#### Can I keep track of my report?

You can join the GitHub repository to see updates and commits for this table data:

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

Our goal is to provide accurate, real values for all our compatibility data tables. Notifying MDN of inaccurate data or supplying new data pushes us further towards our goal of providing 100% real values to the developer community.  
Thank you for helping.

Please select the browser or browsers which are affected.

Briefly outline the issue you are highlighting. Minimum 10 and maximum 1,000 characters.

Browser documentation and release notes are good supporting items to accompany your message. A demo hosted on services like Codepen or JSBin are perfect for providing real examples of your findings.

Connection error:Sorry, we can't seem to reach the server. We are working to fix the problem. Please try again later.

### Legend

Full support

Full support

## See also

- [`arguments`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object
- [`Function.prototype.bind()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [`Function.prototype.call()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Functions and function scope](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions)
- [`Reflect.apply()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply)
- [Spread syntax](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

### [CONTENT/DS-n-Algos/functions/bindTo/function.bind().md](<CONTENT/DS-n-Algos/functions/bindTo/function.bind().md>)

# Function.prototype.bind()

> The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

The `**bind()**` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

## Syntax

let boundFunc = func.bind(thisArg\[, arg1\[, arg2\[, ...argN\]\]\])

### Parameters

`thisArg`

The value to be passed as the `this` parameter to the target function `func` when the bound function is called. The value is ignored if the bound function is constructed using the [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. When using `bind` to create a function (supplied as a callback) inside a `setTimeout`, any primitive value passed as `thisArg` is converted to object. If no arguments are provided to `bind` , or if the `thisArg`  is `null` or `undefined`, the `this` of the executing scope is treated as the `thisArg` for the new function.

`arg1, arg2, ...argN` Optional

Arguments to prepend to arguments provided to the bound function when invoking `func`.

### Return value

A copy of the given function with the specified `this` value, and initial arguments (if provided).

## Description

The `bind()` function creates a new **bound function**, which is an _exotic function object_ (a term from ECMAScript 2015) that wraps the original function object. Calling the bound function generally results in the execution of its wrapped function.

A bound function has the following internal properties:

**`[[BoundTargetFunction]]`**

The wrapped function object

`**[[BoundThis]]**`

The value that is always passed as `this` value when calling the wrapped function.

`**[[BoundArguments]]**`

A list of values whose elements are used as the first arguments to any call to the wrapped function.

`**[[Call]]**`

Executes code associated with this object. Invoked via a function call expression. The arguments to the internal method are a `this` value and a list containing the arguments passed to the function by a call expression.

When a bound function is called, it calls internal method `[[Call]]` on `[[BoundTargetFunction]]`, with following arguments `Call(boundThis, ...args)`. Where `boundThis` is `[[BoundThis]]`, `args` is `[[BoundArguments]]`, followed by the arguments passed by the function call.

A bound function may also be constructed using the [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. Doing so acts as though the target function had instead been constructed. The provided `this` value is ignored, while prepended arguments are provided to the emulated function.

## Polyfill

Because older browsers are generally also slower browsers, it is far more critical than most people recognize to create performance polyfills to make the browsing experience in outdated browsers slightly less horrible.

Thus, presented below are two options for `Function.prototype.bind()` polyfills:

1.  The first one is much smaller and more performant, but does not work when using the `new` operator.
2.  The second one is bigger and less performant, but it permits some usage of the `new` operator on bound functions.

Generally, in most code it's very rare to see `new` used on a bound function, so it is generally best to go with the first option.

    if (!Function.prototype.bind) (function(){
      var slice = Array.prototype.slice;
      Function.prototype.bind = function() {
        var thatFunc = this, thatArg = arguments[0];
        var args = slice.call(arguments, 1);
        if (typeof thatFunc !== 'function') {


          throw new TypeError('Function.prototype.bind - ' +
                 'what is trying to be bound is not callable');
        }
        return function(){
          var funcArgs = args.concat(slice.call(arguments))
          return thatFunc.apply(thatArg, funcArgs);
        };
      };
    })();

You can partially work around this by inserting the following code at the beginning of your scripts, allowing use of much of the functionality of `bind()` in implementations that do not natively support it.

    if (!Function.prototype.bind) (function(){
      var ArrayPrototypeSlice = Array.prototype.slice;
      Function.prototype.bind = function(otherThis) {
        if (typeof this !== 'function') {


          throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var baseArgs= ArrayPrototypeSlice.call(arguments, 1),
            baseArgsLength = baseArgs.length,
            fToBind = this,
            fNOP    = function() {},
            fBound  = function() {
              baseArgs.length = baseArgsLength;
              baseArgs.push.apply(baseArgs, arguments);
              return fToBind.apply(
                     fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
              );
            };

        if (this.prototype) {

          fNOP.prototype = this.prototype;
        }
        fBound.prototype = new fNOP();

        return fBound;
      };
    })();

Some of the many differences (there may well be others, as this list does not seriously attempt to be exhaustive) between this algorithm and the specified algorithm are:

- The partial implementation relies on [`Array.prototype.slice()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.prototype.concat()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Function.prototype.call()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) and [`Function.prototype.apply()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), built-in methods to have their original values.
- The partial implementation creates functions that do not have immutable "poison pill" [`caller`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) and `arguments` properties that throw a [`TypeError`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) upon get, set, or deletion. (This could be added if the implementation supports [`Object.defineProperty`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), or partially implemented \[without throw-on-delete behavior\] if the implementation supports the [`__defineGetter__`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) and [`__defineSetter__`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) extensions.)
- The partial implementation creates functions that have a `prototype` property. (Proper bound functions have none.)
- The partial implementation creates bound functions whose [`length`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) property does not agree with that mandated by ECMA-262: it creates functions with `length` of `0`. A full implementation—depending on the length of the target function and the number of pre-specified arguments—may return a non-zero length.
- The partial implementation creates bound functions whose [`name`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property is not derived from the original function name. According to ECMA-262, name of the returned bound function should be "bound " + name of target function (note the space character).

If you choose to use this partial implementation, **you must not rely on those cases where behavior deviates from ECMA-262, 5th edition!** Thankfully, these deviations from the specification rarely (if ever) come up in most coding situations. If you do not understand any of the deviations from the specification above, then it is safe in this particular case to not worry about these noncompliant deviation details.

**If it's absolutely necessary and performance is not a concern**, a far slower (but more specification-compliant solution) can be found at [https://github.com/Raynos/function-bind](https://github.com/Raynos/function-bind).

## Examples

### Creating a bound function

The simplest use of `bind()` is to make a function that, no matter how it is called, is called with a particular `this` value.

A common mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the original object as its `this` (e.g., by using the method in callback-based code).

Without special care, however, the original object is usually lost. Creating a bound function from the function, using the original object, neatly solves this problem:

    this.x = 9;
    const module = {
      x: 81,
      getX: function() { return this.x; }
    };

    module.getX();


    const retrieveX = module.getX;
    retrieveX();





    const boundGetX = retrieveX.bind(module);
    boundGetX();

### Partially applied functions

The next simplest use of `bind()` is to make a function with pre-specified initial arguments.

These arguments (if any) follow the provided `this` value and are then inserted at the start of the arguments passed to the target function, followed by whatever arguments are passed bound function at the time it is called.

    function list() {
      return Array.prototype.slice.call(arguments);
    }

    function addArguments(arg1, arg2) {
      return arg1 + arg2
    }

    const list1 = list(1, 2, 3);


    const result1 = addArguments(1, 2);



    const leadingThirtysevenList = list.bind(null, 37);


    const addThirtySeven = addArguments.bind(null, 37);

    const list2 = leadingThirtysevenList();


    const list3 = leadingThirtysevenList(1, 2, 3);


    const result2 = addThirtySeven(5);


    const result3 = addThirtySeven(5, 10);

### With `setTimeout()`

By default within [`window.setTimeout()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), the `this` keyword will be set to the [`window`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Window) (or `global`) object. When working with class methods that require `this` to refer to class instances, you may explicitly bind `this` to the callback function, in order to maintain the instance.

    function LateBloomer() {
      this.petalCount = Math.floor(Math.random() * 12) + 1;
    }


    LateBloomer.prototype.bloom = function() {
      window.setTimeout(this.declare.bind(this), 1000);
    };

    LateBloomer.prototype.declare = function() {
      console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
    };

    const flower = new LateBloomer();
    flower.bloom();

### Bound functions used as constructors

**Warning:** This section demonstrates JavaScript capabilities and documents some edge cases of the `bind()` method.

The methods shown below are not the best way to do things, and probably should not be used in any production environment.

Bound functions are automatically suitable for use with the [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new) operator to construct new instances created by the target function. When a bound function is used to construct a value, the provided `this` is ignored.

However, provided arguments are still prepended to the constructor call:

    function Point(x, y) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.toString = function() {
      return `${this.x},${this.y}`;
    };

    const p = new Point(1, 2);
    p.toString();







    const YAxisPoint = Point.bind(null, 0);


    const emptyObj = {};
    const YAxisPoint = Point.bind(emptyObj, 0);

    const axisPoint = new YAxisPoint(5);
    axisPoint.toString();

    axisPoint instanceof Point;
    axisPoint instanceof YAxisPoint;
    new YAxisPoint(17, 42) instanceof Point;

Note that you need not do anything special to create a bound function for use with [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new).

The corollary is that you need not do anything special to create a bound function to be called plainly, even if you would rather require the bound function to only be called using [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new).

    YAxisPoint(13);

    `${emptyObj.x},${emptyObj.y}`;

If you wish to support the use of a bound function only using [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new), or only by calling it, the target function must enforce that restriction.

### Creating shortcuts

`bind()` is also helpful in cases where you want to create a shortcut to a function which requires a specific `this` value.

Take [`Array.prototype.slice()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), for example, which you want to use for converting an array-like object to a real array. You could create a shortcut like this:

    const slice = Array.prototype.slice;



    slice.apply(arguments);

With `bind()`, this can be simplified.

In the following piece of code, `slice()` is a bound function to the [`apply()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) function of [`Function.prototype`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype), with the `this` value set to the [`slice()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) function of `Array.prototype`. This means that additional `apply()` calls can be eliminated:

    const unboundSlice = Array.prototype.slice;
    const slice = Function.prototype.apply.bind(unboundSlice);



    slice(arguments);

## Specifications

| Specification |
| ------------- |

| [ECMAScript (ECMA-262)  
The definition of 'Function.prototype.bind' in that specification.](https://tc39.es/ecma262/#sec-function.prototype.bind) |

## Browser compatibility

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|        | Desktop               | Mobile               | Server                 |
| ------ | --------------------- | -------------------- | ---------------------- | ----------------- | ----------------------- | ----------------------- | ------------------------------ | ------------------------------ | ------------------------------ | ----------------------------- | ------------------------- | ----------------------------------------- | ----------------------- |
|        | Chrome                | Edge                 | Firefox                | Internet Explorer | Opera                   | Safari                  | Android webview                | Chrome for Android             | Firefox for Android            | Opera for Android             | Safari on iOS             | Samsung Internet                          | Node.js                 |
| ---    | ---                   | ---                  | ---                    | ---               | ---                     | ---                     | ---                            | ---                            | ---                            | ---                           | ---                       | ---                                       | ---                     |
| `bind` | Chrome Full support 7 | Edge Full support 12 | Firefox Full support 4 | IE Full support 9 | Opera Full support 11.6 | Safari Full support 5.1 | WebView Android Full support 4 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 12 | Safari iOS Full support 6 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |

#### What happens next?

Our team will review your report. Once we verify the information you have supplied we will update this browser compatability table accordingly.

#### Can I keep track of my report?

You can join the GitHub repository to see updates and commits for this table data:

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

Our goal is to provide accurate, real values for all our compatibility data tables. Notifying MDN of inaccurate data or supplying new data pushes us further towards our goal of providing 100% real values to the developer community.  
Thank you for helping.

Please select the browser or browsers which are affected.

Briefly outline the issue you are highlighting. Minimum 10 and maximum 1,000 characters.

Browser documentation and release notes are good supporting items to accompany your message. A demo hosted on services like Codepen or JSBin are perfect for providing real examples of your findings.

Connection error:Sorry, we can't seem to reach the server. We are working to fix the problem. Please try again later.

### Legend

Full support

Full support

## See also

- [`Function.prototype.apply()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [`Function.prototype.call()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Functions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions)

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

</details><details> <summary>CONTENT/DS-n-Algos/functions/MemoizeFunc/</summary>

### [CONTENT/DS-n-Algos/functions/MemoizeFunc/advanced-memoize.md](CONTENT/DS-n-Algos/functions/MemoizeFunc/advanced-memoize.md)

/\*\*

- Memoize a given function by caching the computed result.
- The cache of a memoized function can be cleared by deleting the `cache`
- property of the function.
-
- @param {function} fn The function to be memoized.
-                                          Must be a pure function.
- @param {function(args: Array)} [hasher] A custom hash builder.
-                                          Is JSON.stringify by default.
- @return {function} Returns the memoized function

```js
export function memoize(fn, hasher) {
  return function memoize() {
    if (typeof memoize.cache !== "object") {
      memoize.cache = {};
    }

    const args = [];
    for (let i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    const hash = hasher ? hasher(args) : JSON.stringify(args);
    if (!(hash in memoize.cache)) {
      memoize.cache[hash] = fn.apply(fn, args);
    }
    return memoize.cache[hash];
  };
}
```

/\*\*

- Memoize a given function by caching all results and the arguments,
- and comparing against the arguments of previous results before
- executing again.
- This is less performant than `memoize` which calculates a hash,
- which is very fast to compare. Use `memoizeCompare` only when it is
- not possible to create a unique serializable hash from the function
- arguments.
- The isEqual function must compare two sets of arguments
- and return true when equal (can be a deep equality check for example).
- @param {function} fn
- @param {function(a: _, b: _) : boolean} isEqual
- @returns {function}

```js
export function memoizeCompare(fn, isEqual) {
  const memoize = function memoize() {
    const args = [];
    for (let i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    for (let c = 0; c < memoize.cache.length; c++) {
      const cached = memoize.cache[c];

      if (isEqual(args, cached.args)) {
        // TODO: move this cache entry to the top so recently used entries move up?
        return cached.res;
      }
    }

    const res = fn.apply(fn, args);
    memoize.cache.unshift({ args, res });

    return res;
  };

  memoize.cache = [];

  return memoize;
}
```

/\*\*

- Find the maximum number of arguments expected by a typed function.
- @param {function} fn A typed function
- @return {number} Returns the maximum number of expected arguments.
- Returns -1 when no signatures where found on the function.

```js
export function maxArgumentCount(fn) {
  return Object.keys(fn.signatures || {}).reduce(function (args, signature) {
    const count = (signature.match(/,/g) || []).length + 1;
    return Math.max(args, count);
  }, -1);
}
```

</details><details> <summary>CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/assertion-error/</summary>

### [CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/assertion-error/History.md](CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/assertion-error/History.md)

# 1.1.0 / 2018-01-02

- Add type definitions ([#11](https://github.com/chaijs/assertion-error/pull/11))

# 1.0.1 / 2015-03-04

- Merge pull request #2 from simonzack/master
- fixes `.stack` on firefox

# 1.0.0 / 2013-06-08

- readme: change travis and component urls
- refactor: [*] prepare for move to chaijs gh org

# 0.1.0 / 2013-04-07

- test: use vanilla test runner/assert
- pgk: remove unused deps
- lib: implement
- "Initial commit"

### [CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/assertion-error/README.md](CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/assertion-error/README.md)

# AssertionError [![Build Status](https://travis-ci.org/chaijs/assertion-error.png?branch=master)](https://travis-ci.org/chaijs/assertion-error)

> Error constructor for test and validation frameworks that implements standardized AssertionError specification.

## Installation

### Node.js

`assertion-error` is available on [npm](http://npmjs.org).

    $ npm install assertion-error

### Component

`assertion-error` is available as a [component](https://github.com/component/component).

    $ component install chaijs/assertion-error

## License

(The MIT License)

Copyright (c) 2013 Jake Luer <jake@qualiancy.com> (http://qualiancy.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

</details><details> <summary>CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/chai-spies/</summary>

### [CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/chai-spies/History.md](CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/chai-spies/History.md)

### Note

As of 0.6.0, the History.md file has been deprecated. [Please refer to the full
commit logs available on GitHub](https://github.com/chaijs/chai-spies/commits/master).

---

# 0.6.0 / 2015-04-24

- Merge pull request #21 from stalniy/master
- Added test for anonymous spy object implementation
- Fixed JsDoc for spy.object method
- Implemented support for spy.on and spy.object methods
- Merge pull request #20 from Ryckes/patch-1
- Merge pull request #17 from Ryuno-Ki/master
- Update spy.js
- Update chai-spies.js
- Merge pull request #19 from sateffen/master
- Corrected some spelling mistakes in README.md
- Fixed typo.
- Merge pull request #16 from plaxdan/patch-1
- Add .with to the API docs
- Merge pull request #15 from brandonhorst/master
- Added docs for above/below
- Implemented min/at least and max/at most
- Fixed language of above and below
- Fix the `called` examples
- Merge pull request #10 from pgherveou/patch-1
- 'twice' instead of 'once'
- Merge pull request #9 from pgherveou/master
- Update component.json
- add component.json

# 0.5.1 / 2012-11-15

- fix output of .called(n) assertion error

# 0.5.0 / 2012-11-14

- Merge branch 'feature/arguments'
- browser build
- tests for argument call assertions
- add assertions for argument checking
- add assertion: .with() / .with

# 0.4.0 / 2012-10-09

- Merge pull request #5 from tregusti/feature/return-value
- Make spies have a return value.
- credit where due

# 0.3.0 / 2012-07-11

- Merge branch 'feature/human-stringified' of git://github.com/tregusti/chai-spies into tregusti-feature/human-stringified
- Merge pull request #3 from tregusti/feature/spyname
- Merge pull request #2 from tregusti/feature/wording
- Make spies print out prettier
- Add possibility to specify a name of a spy
- Documentation typo fix.
- More typo fixes
- Fix type in docs
- Corrected textual message

# 0.2.3 / 2012-07-09

- update folio dep version
- one more try
- improve amd wrapper
- browser build improved wrapper
- Merge branch 'refactor/compile'
- browser build
- use folio for build
- cleanup pre-folio

# 0.2.2 / 2012-05-17

- bug - not correctly overwriting above/below
- browser build

# 0.2.1 / 2012-05-17

- spies mimic length of original function

# 0.2.0 / 2012-05-16

- chai 1.0.0 compatibility
- browser build
- tests for 1.0.0 compatibility
- chai 1.0.0 compatibility
- Merge pull request #1 from JamesMaroney/master
- added link to jack project
- small typo fixes

# 0.1.0 / 2012-02-13

- mit license
- readme
- makefile
- more comments
- comments
- browser support
- tests working
- initial commit

### [CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/chai-spies/README.md](CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/chai-spies/README.md)

# Chai Spies

This is an addon plugin for the [chai](https://github.com/chaijs/chai) assertion library. It provides the
most basic function spy ability and tests.

This library is primarily meant to serve as a starting point for anyone interested in developing chai plugins. If
developing a module, you are welcome to use this as a starting point. I also encourage the use of the compile
tools to allow modules to work both in node.js and the browser.

## Installation

#### Node.js

Chai spies are available on npm.

      $ npm install chai-spies

#### Browser

Include `chai-spies.js` after including `chai.js`.

```xml
<script src="chai-spies.js"></script>
```

## Plug In

If you are using `chai-spies` in the browser, there is nothing you need to do. It will detect `chai` in the global
namespace and automatically get used.

If you are using node, here is a useful bit.

```js
const chai = require("chai"),
  spies = require("chai-spies");

chai.use(spies);

const should = chai.should(),
  expect = chai.expect;
```

## Building for the Browser

Currently this package uses [rollup](https://rollupjs.org/) to bundle source code. Just use `npm run build` to build browser version.

## Chai Spies Api Reference

### Creating Spies

In this module, a spy is either an empty function, or a wrapped named function.
Once chai has been extended, you can create a spy through chai's own interface.

```js
function original() {
  // do something cool
}

const spy = chai.spy(original);

// then use in place of original
ee.on("some event", spy);

// or use without original
const spyAgain = chai.spy();
ee.on("some other event", spyAgain);
```

#### spy.on

`spy.on` allows to add spy on existing method of an object

```js
const array = [1, 2, 3];

chai.spy.on(array, "push");

// or multiple spies
chai.spy.on(array, ["push", "pop"]);
```

It's also possible to provide custom implementation of spied method:

```js
chai.spy.on(array, "push", function (...items) {
  // custom implementation of `push` method
});
```

Using arrow functions, it's also easy to replace method implementation with constant:

```js
chai.spy.on(array, "push", () => 5);

// or more readable :)
chai.spy.on(array, "push", (returns) => 5);
```

#### spy.interface

This method allows to create mock (or spy object), basically an interface with fake implementation or without implementation at all:

```js
const eventBus = chai.spy.interface(["on", "off", "emit"]);

// with implementation
const arrayLike = chai.spy.interface({
  push(item) {
    this.__items = this.__items || [];
    return this.__items.push(item);
  },
  // other methods
});

arrayLike.push(5);
```

#### spy.returns (Deprecated)

`chai.spy.returns` is just a simple helper which creates a function that returns constant:

```js
const returnTrue = chai.spy.returns(true);

returnTrue(); // true
```

Better to use arrow function:

```js
const returnTrue = chai.spy((returns) => true);
```

### Sandboxes

Sandbox is a set of spies. Sandbox allows to track methods on objects and restore original methods with on `restore` call.
To create sandbox:

```js
const sandbox = chai.spy.sandbox();

describe("Array", () => {
  let array;

  beforeEach(() => {
    array = [];
    sandbox.on(array, ["push", "pop"]);
  });

  afterEach(() => {
    sandbox.restore(); // restores original methods on `array`
  });

  it("allows to add items", () => {
    array.push(1);

    expect(array.push).to.have.been.called.with(1);
  });
});
```

`chai.spy.on` and `chai.spy.restore` are bound to default sandbox.
So to restore all methods spied by `chai.spy.on`, just call `chai.spy.restore()` (without arguments).

`restore` method accepts 2 optional arguments: object to restore and method or methods to restore. So, this calls are also valid:

```js
const array = [1, 2, 3];

chai.spy.on(array, ["push", "pop"]);

chai.spy.restore(array); // restores all methods on object
chai.spy.restore(array, "push"); // restores only `push` method
```

### Assertions

#### .spy

Asserts that object is a spy.

```js
expect(spy).to.be.spy;
spy.should.be.spy;
```

#### .called

Assert that a spy has been called. Negation passes through.

```js
expect(spy).to.have.been.called();
spy.should.have.been.called();
```

Note that `called` can be used as a chainable method.

#### .with

Assert that a spy has been called with a given argument at least once,
even if more arguments were provided.

```js
spy("foo");
expect(spy).to.have.been.called.with("foo");
spy.should.have.been.called.with("foo");
```

Will also pass for `spy('foo', 'bar')` and `spy(); spy('foo')`.

If used with multiple arguments, assert that a spy has been called
with all the given arguments at least once.

```js
spy("foo", "bar", 1);
expect(spy).to.have.been.called.with("bar", "foo");
spy.should.have.been.called.with("bar", "foo");
```

#### .with.exactly

Similar to .with, but will pass only if the list of arguments is
exactly the same as the one provided.

```js
spy();
spy("foo", "bar");
expect(spy).to.have.been.called.with.exactly("foo", "bar");
spy.should.have.been.called.with.exactly("foo", "bar");
```

Will not pass for `spy('foo')`, `spy('bar')`, `spy('bar'); spy('foo')`, `spy('foo'); spy('bar')`, `spy('bar', 'foo')` or
`spy('foo', 'bar', 1)`.

Can be used for calls with a single argument too.

#### .always.with

Assert that every time the spy has been called the argument list
contained the given arguments.

```js
spy("foo");
spy("foo", "bar");
spy(1, 2, "foo");
expect(spy).to.have.been.called.always.with("foo");
spy.should.have.been.called.always.with("foo");
```

#### .always.with.exactly

Assert that the spy has never been called with a different list of
arguments than the one provided.

```js
spy("foo");
spy("foo");
expect(spy).to.have.been.called.always.with.exactly("foo");
spy.should.have.been.called.always.with.exactly("foo");
```

#### .nth(n).called.with

Asserts that the nth call of the spy has been made with the list of arguments provided. This assertion comes with other three flavors:

- .first.called.with
- .second.called.with
- .third.called.with

```js
spy("foo");
spy("bar");
spy("baz");
spy("foobar");
expect(spy).to.have.been.first.called.with("foo");
spy.should.have.been.first.called.with("foo");
expect(spy).on.nth(5).be.called.with("foobar");
spy.should.on.nth(5).be.called.with("foobar");
```

These assertions requires the spy to be called at least the
number of times required, for example

```js
spy("foo");
spy("bar");
expect(spy).to.have.been.third.called.with("baz");
spy.should.have.been.third.called.with("baz");
```

Won't pass because the spy has not been called a third time.

#### .once

Assert that a spy has been called exactly once.

```js
expect(spy).to.have.been.called.once;
expect(spy).to.not.have.been.called.once;
spy.should.have.been.called.once;
spy.should.not.have.been.called.once;
```

#### .twice

Assert that a spy has been called exactly twice.

```js
expect(spy).to.have.been.called.twice;
expect(spy).to.not.have.been.called.twice;
spy.should.have.been.called.twice;
spy.should.not.have.been.called.twice;
```

#### .exactly(n)

Assert that a spy has been called exactly `n` times.

```js
expect(spy).to.have.been.called.exactly(3);
expect(spy).to.not.have.been.called.exactly(3);
spy.should.have.been.called.exactly(3);
spy.should.not.have.been.called.exactly(3);
```

#### .min(n) / .at.least(n)

Assert that a spy has been called minimum of `n` times.

```js
expect(spy).to.have.been.called.min(3);
expect(spy).to.not.have.been.called.at.least(3);
spy.should.have.been.called.at.least(3);
spy.should.not.have.been.called.min(3);
```

#### .max(n) / .at.most(n)

Assert that a spy has been called maximum of `n` times.

```js
expect(spy).to.have.been.called.max(3);
expect(spy).to.not.have.been.called.at.most(3);
spy.should.have.been.called.at.most(3);
spy.should.not.have.been.called.max(3);
```

#### .above(n) / .gt(n)

Assert that a spy has been called more than `n` times.

```js
expect(spy).to.have.been.called.above(3);
expect(spy).to.not.have.been.called.gt(3);
spy.should.have.been.called.gt(3);
spy.should.not.have.been.called.above(3);
```

#### .below(n) / .lt(n)

Assert that a spy has been called fewer than `n` times.

```js
expect(spy).to.have.been.called.below(3);
expect(spy).to.not.have.been.called.lt(3);
spy.should.have.been.called.lt(3);
spy.should.not.have.been.called.below(3);
```

## Tests

Tests are written using [mocha](http://github.com/visionmedia/mocha) in the BDD interface.
Node tests can be executed using `npm test`. Browser tests can be seen by opening `test/browser/index.html`.

## Contributors

project : chai-spies  
 repo age : 3 years, 2 months  
 active : 26 days  
 commits : 77  
 files : 12  
 authors :  
 48 Jake Luer 62.3%  
 7 Glenn Jorde 9.1%  
 4 Keith Cirkel 5.2%  
 3 = 3.9%  
 3 Sergiy Stotskiy 3.9%  
 2 JamesMaroney 2.6%  
 2 PG Herveou 2.6%  
 2 Ryckes 2.6%  
 1 Veselin Todorov 1.3%  
 1 Steffen 1.3%  
 1 Daniel Walker 1.3%  
 1 Domenic Denicola 1.3%  
 1 Andre Jaenisch 1.3%  
 1 PG 1.3%

## License

(The MIT License)

Copyright (c) 2012 Jake Luer <jake@alogicalparadox.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

### [CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/chai-spies/ReleaseNotes.md](CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/chai-spies/ReleaseNotes.md)

# Release Notes

## Note

## As of 0.6.0, the ReleaseNotes.md file has been deprecated. [Please refer to the release notes available on Github](https://github.com/chaijs/chai-spies/releases).

## 0.6.0 / 2015-04-24

Added `.spy.on` and `.spy.object` to easily make new spies, for example:

```js
// Returns `fs` but with readFile and readFileSync spied on
var fs = chai.spy.object(fs, ["readFile", "readFileSync"]);

// Shortcut for `fs.writeFile = chai.spy(fs.writeFile)`
chai.spy.on(fs, "writeFile");
```

Added new assertions:

- `.called.min(n)/.at.least(n)` to assert a spy has been called a minimum of
  `n` many times.
- `.called.max(n)/.at.most(n)` to assert that a spy has been called at most `n`
  number of times.


### [CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/check-error/README.md](CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/check-error/README.md)

<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png"/> check-error
  </a>
</h1>

<p align=center>
  Error comparison and information related utility for <a href="http://nodejs.org">node</a> and the browser.
</p>

<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a>
  <a href="https://github.com/chaijs/check-error/releases">
    <img
      alt="tag:?"
      src="https://img.shields.io/github/tag/chaijs/check-error.svg?style=flat-square"
    />
  </a>
  <a href="https://travis-ci.org/chaijs/check-error">
    <img
      alt="build:?"
      src="https://img.shields.io/travis/chaijs/check-error/master.svg?style=flat-square"
    />
  </a>
  <a href="https://coveralls.io/r/chaijs/check-error">
    <img
      alt="coverage:?"
      src="https://img.shields.io/coveralls/chaijs/check-error/master.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/check-error">
    <img
      alt="npm:?"
      src="https://img.shields.io/npm/v/check-error.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/check-error">
    <img
      alt="dependencies:?"
      src="https://img.shields.io/npm/dm/check-error.svg?style=flat-square"
    />
  </a>
  <a href="">
    <img
      alt="devDependencies:?"
      src="https://img.shields.io/david/chaijs/check-error.svg?style=flat-square"
    />
  </a>
  <br/>
  <a href="https://saucelabs.com/u/chaijs-check-error">
    <img
      alt="Selenium Test Status"
      src="https://saucelabs.com/browser-matrix/chaijs-check-error.svg"
    />
  </a>
  <br>
  <a href="https://chai-slack.herokuapp.com/">
    <img
      alt="Join the Slack chat"
      src="https://img.shields.io/badge/slack-join%20chat-E2206F.svg?style=flat-square"
    />
  </a>
  <a href="https://gitter.im/chaijs/chai">
    <img
      alt="Join the Gitter chat"
      src="https://img.shields.io/badge/gitter-join%20chat-D0104D.svg?style=flat-square"
    />
  </a>
</p>

## What is Check-Error?

Check-Error is a module which you can use to retrieve an Error's information such as its `message` or `constructor` name and also to check whether two Errors are compatible based on their messages, constructors or even instances.

## Installation

### Node.js

`check-error` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install check-error

### Browsers

You can also use it within the browser; install via npm and use the `check-error.js` file found within the download. For example:

```html
<script src="./node_modules/check-error/check-error.js"></script>
```

## Usage

The primary export of `check-error` is an object which has the following methods:

- `compatibleInstance(err, errorLike)` - Checks if an error is compatible with another `errorLike` object. If `errorLike` is an error instance we do a strict comparison, otherwise we return `false` by default, because instances of objects can only be compatible if they're both error instances.
- `compatibleConstructor(err, errorLike)` - Checks if an error's constructor is compatible with another `errorLike` object. If `err` has the same constructor as `errorLike` or if `err` is an instance of `errorLike`.
- `compatibleMessage(err, errMatcher)` - Checks if an error message is compatible with an `errMatcher` RegExp or String (we check if the message contains the String).
- `getConstructorName(errorLike)` - Retrieves the name of a constructor, an error's constructor or `errorLike` itself if it's not an error instance or constructor.
- `getMessage(err)` - Retrieves the message of an error or `err` itself if it's a String. If `err` or `err.message` is undefined we return an empty String.

```js
var checkError = require("check-error");
```

#### .compatibleInstance(err, errorLike)

```js
var checkError = require("check-error");

var funcThatThrows = function () {
  throw new TypeError("I am a TypeError");
};
var caughtErr;

try {
  funcThatThrows();
} catch (e) {
  caughtErr = e;
}

var sameInstance = caughtErr;

checkError.compatibleInstance(caughtErr, sameInstance); // true
checkError.compatibleInstance(caughtErr, new TypeError("Another error")); // false
```

#### .compatibleConstructor(err, errorLike)

```js
var checkError = require("check-error");

var funcThatThrows = function () {
  throw new TypeError("I am a TypeError");
};
var caughtErr;

try {
  funcThatThrows();
} catch (e) {
  caughtErr = e;
}

checkError.compatibleConstructor(caughtErr, Error); // true
checkError.compatibleConstructor(caughtErr, TypeError); // true
checkError.compatibleConstructor(caughtErr, RangeError); // false
```

#### .compatibleMessage(err, errMatcher)

```js
var checkError = require("check-error");

var funcThatThrows = function () {
  throw new TypeError("I am a TypeError");
};
var caughtErr;

try {
  funcThatThrows();
} catch (e) {
  caughtErr = e;
}

var sameInstance = caughtErr;

checkError.compatibleMessage(caughtErr, /TypeError$/); // true
checkError.compatibleMessage(caughtErr, "I am a"); // true
checkError.compatibleMessage(caughtErr, /unicorn/); // false
checkError.compatibleMessage(caughtErr, "I do not exist"); // false
```

#### .getConstructorName(errorLike)

```js
var checkError = require("check-error");

var funcThatThrows = function () {
  throw new TypeError("I am a TypeError");
};
var caughtErr;

try {
  funcThatThrows();
} catch (e) {
  caughtErr = e;
}

var sameInstance = caughtErr;

checkError.getConstructorName(caughtErr); // 'TypeError'
```

#### .getMessage(err)

```js
var checkError = require("check-error");

var funcThatThrows = function () {
  throw new TypeError("I am a TypeError");
};
var caughtErr;

try {
  funcThatThrows();
} catch (e) {
  caughtErr = e;
}

var sameInstance = caughtErr;

checkError.getMessage(caughtErr); // 'I am a TypeError'
```

</details><details> <summary>CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/deep-eql/</summary>

### [CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/deep-eql/README.md](CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/deep-eql/README.md)

<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png"/> deep-eql
  </a>
</h1>

<p align=center>
  Improved deep equality testing for [node](http://nodejs.org) and the browser.
</p>

<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a><a href="https://github.com/chaijs/deep-eql/releases">
    <img
      alt="tag:?"
      src="https://img.shields.io/github/tag/chaijs/deep-eql.svg?style=flat-square"
    />
  </a><a href="https://travis-ci.org/chaijs/deep-eql">
    <img
      alt="build:?"
      src="https://img.shields.io/travis/chaijs/deep-eql/master.svg?style=flat-square"
    />
  </a><a href="https://coveralls.io/r/chaijs/deep-eql">
    <img
      alt="coverage:?"
      src="https://img.shields.io/coveralls/chaijs/deep-eql/master.svg?style=flat-square"
    />
  </a><a href="https://www.npmjs.com/packages/deep-eql">
    <img
      alt="code quality:?"
      src="https://img.shields.io/codacy/6de187aa62274dbea6e69a3c27e798da.svg?style=flat-square"
    />
  </a><a href="https://www.npmjs.com/packages/deep-eql">
    <img
      alt="dependencies:?"
      src="https://img.shields.io/npm/dm/deep-eql.svg?style=flat-square"
    />
  </a><a href="">
    <img
      alt="devDependencies:?"
      src="https://img.shields.io/david/chaijs/deep-eql.svg?style=flat-square"
    />
  </a><a href="https://github.com/nodejs/LTS#lts-schedule1">
    <img
      alt="Supported Node Version: 4+"
      src="https://img.shields.io/badge/node-4+-43853d.svg?style=flat-square"
    />
  </a>
  <br/>
  <a href="https://saucelabs.com/u/chaijs-deep-eql">
    <img
      alt="Selenium Test Status"
      src="https://saucelabs.com/browser-matrix/chaijs-deep-eql.svg"
    />
  </a>
  <br>
  <a href="https://chai-slack.herokuapp.com/">
    <img
      alt="Join the Slack chat"
      src="https://img.shields.io/badge/slack-join%20chat-E2206F.svg?style=flat-square"
    />
  </a>
  <a href="https://gitter.im/chaijs/deep-eql">
    <img
      alt="Join the Gitter chat"
      src="https://img.shields.io/badge/gitter-join%20chat-D0104D.svg?style=flat-square"
    />
  </a>
</p>

## What is Deep-Eql?

Deep Eql is a module which you can use to determine if two objects are "deeply" equal - that is, rather than having referential equality (`a === b`), this module checks an object's keys recursively, until it finds primitives to check for referential equality. For more on equality in JavaScript, read [the comparison operators article on mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators).

As an example, take the following:

```js
1 === 1 // These are primitives, they hold the same reference - they are strictly equal
1 == '1' // These are two different primitives, through type coercion they hold the same value - they are loosely equal
{ a: 1 } !== { a: 1 } // These are two different objects, they hold different references and so are not strictly equal - even though they hold the same values inside
{ a: 1 } != { a: 1 } // They have the same type, meaning loose equality performs the same check as strict equality - they are still not equal.

var deepEql = require("deep-eql");
deepEql({ a: 1 }, { a: 1 }) === true // deepEql can determine that they share the same keys and those keys share the same values, therefore they are deeply equal!
```

## Installation

### Node.js

`deep-eql` is available on [npm](http://npmjs.org).

    $ npm install deep-eql

## Usage

The primary export of `deep-eql` is function that can be given two objects to compare. It will always return a boolean which can be used to determine if two objects are deeply equal.

### Rules

- Strict equality for non-traversable nodes according to [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is):
  - `eql(NaN, NaN).should.be.true;`
  - `eql(-0, +0).should.be.false;`
- All own and inherited enumerable properties are considered:
  - `eql(Object.create({ foo: { a: 1 } }), Object.create({ foo: { a: 1 } })).should.be.true;`
  - `eql(Object.create({ foo: { a: 1 } }), Object.create({ foo: { a: 2 } })).should.be.false;`
- Arguments are not Arrays:
  - `eql([], arguments).should.be.false;`
  - `eql([], Array.prototype.slice.call(arguments)).should.be.true;`
- Error objects are compared by reference (see https://github.com/chaijs/chai/issues/608):
  - `eql(new Error('msg'), new Error('msg')).should.be.false;`
  - `var err = new Error('msg'); eql(err, err).should.be.true;`

</details><details> <summary>CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/get-func-name/</summary>

### [CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/get-func-name/README.md](CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/get-func-name/README.md)

<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png"/>
    <br>
    get-func-name
  </a>
</h1>

<p align=center>
  Utility for getting a function's name for <a href="http://nodejs.org">node</a> and the browser.
</p>

<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a>
  <a href="https://github.com/chaijs/get-func-name/releases">
    <img
      alt="tag:?"
      src="https://img.shields.io/github/tag/chaijs/get-func-name.svg?style=flat-square"
    />
  </a>
  <a href="https://travis-ci.org/chaijs/get-func-name">
    <img
      alt="build:?"
      src="https://img.shields.io/travis/chaijs/get-func-name/master.svg?style=flat-square"
    />
  </a>
  <a href="https://coveralls.io/r/chaijs/get-func-name">
    <img
      alt="coverage:?"
      src="https://img.shields.io/coveralls/chaijs/get-func-name/master.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/get-func-name">
    <img
      alt="npm:?"
      src="https://img.shields.io/npm/v/get-func-name.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/get-func-name">
    <img
      alt="dependencies:?"
      src="https://img.shields.io/npm/dm/get-func-name.svg?style=flat-square"
    />
  </a>
  <a href="">
    <img
      alt="devDependencies:?"
      src="https://img.shields.io/david/chaijs/get-func-name.svg?style=flat-square"
    />
  </a>
  <br/>
  <a href="https://saucelabs.com/u/chaijs-get-func-name">
    <img
      alt="Selenium Test Status"
      src="https://saucelabs.com/browser-matrix/chaijs-get-func-name.svg"
    />
  </a>
  <br>
  <a href="https://chai-slack.herokuapp.com/">
    <img
      alt="Join the Slack chat"
      src="https://img.shields.io/badge/slack-join%20chat-E2206F.svg?style=flat-square"
    />
  </a>
  <a href="https://gitter.im/chaijs/chai">
    <img
      alt="Join the Gitter chat"
      src="https://img.shields.io/badge/gitter-join%20chat-D0104D.svg?style=flat-square"
    />
  </a>
</p>

## What is get-func-name?

This is a module to retrieve a function's name securely and consistently both in NodeJS and the browser.

## Installation

### Node.js

`get-func-name` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install get-func-name

### Browsers

You can also use it within the browser; install via npm and use the `get-func-name.js` file found within the download. For example:

```html
<script src="./node_modules/get-func-name/get-func-name.js"></script>
```

## Usage

The module `get-func-name` exports the following method:

- `getFuncName(fn)` - Returns the name of a function.

```js
var getFuncName = require("get-func-name");
```

#### .getFuncName(fun)

```js
var getFuncName = require("get-func-name");

var unknownFunction = function myCoolFunction(word) {
  return word + "is cool";
};

var anonymousFunction = (function () {
  return function () {};
})();

getFuncName(unknownFunction); // 'myCoolFunction'
getFuncName(anonymousFunction); // ''
```

</details><details> <summary>CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/pathval/</summary>

### [CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/pathval/README.md](CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/pathval/README.md)

<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png"/> pathval
  </a>
</h1>

<p align=center>
   Tool for Object value retrieval given a string path for <a href="http://nodejs.org">node</a> and the browser.
</p>

<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a>
  <a href="https://github.com/chaijs/pathval/releases">
    <img
      alt="tag:?"
      src="https://img.shields.io/github/tag/chaijs/pathval.svg?style=flat-square"
    />
  </a>
  <a href="https://travis-ci.org/chaijs/pathval">
    <img
      alt="build:?"
      src="https://img.shields.io/travis/chaijs/pathval/master.svg?style=flat-square"
    />
  </a>
  <a href="https://coveralls.io/r/chaijs/pathval">
    <img
      alt="coverage:?"
      src="https://img.shields.io/coveralls/chaijs/pathval/master.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/pathval">
    <img
      alt="npm:?"
      src="https://img.shields.io/npm/v/pathval.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/pathval">
    <img
      alt="dependencies:?"
      src="https://img.shields.io/npm/dm/pathval.svg?style=flat-square"
    />
  </a>
  <a href="">
    <img
      alt="devDependencies:?"
      src="https://img.shields.io/david/chaijs/pathval.svg?style=flat-square"
    />
  </a>
  <br/>
  <a href="https://saucelabs.com/u/chaijs-pathval">
    <img
      alt="Selenium Test Status"
      src="https://saucelabs.com/browser-matrix/chaijs-pathval.svg"
    />
  </a>
  <br>
  <a href="https://chai-slack.herokuapp.com/">
    <img
      alt="Join the Slack chat"
      src="https://img.shields.io/badge/slack-join%20chat-E2206F.svg?style=flat-square"
    />
  </a>
  <a href="https://gitter.im/chaijs/chai">
    <img
      alt="Join the Gitter chat"
      src="https://img.shields.io/badge/gitter-join%20chat-D0104D.svg?style=flat-square"
    />
  </a>
</p>

## What is pathval?

Pathval is a module which you can use to retrieve or set an Object's property for a given `String` path.

## Installation

### Node.js

`pathval` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install pathval

### Browsers

You can also use it within the browser; install via npm and use the `pathval.js` file found within the download. For example:

```html
<script src="./node_modules/pathval/pathval.js"></script>
```

## Usage

The primary export of `pathval` is an object which has the following methods:

- `hasProperty(object, name)` - Checks whether an `object` has `name`d property or numeric array index.
- `getPathInfo(object, path)` - Returns an object with info indicating the value of the `parent` of that path, the `name ` of the property we're retrieving and its `value`.
- `getPathValue(object, path)` - Retrieves the value of a property at a given `path` inside an `object`'.
- `setPathValue(object, path, value)` - Sets the `value` of a property at a given `path` inside an `object`'.

```js
var pathval = require("pathval");
```

#### .hasProperty(object, name)

```js
var pathval = require("pathval");

var obj = { prop: "a value" };
pathval.hasProperty(obj, "prop"); // true
```

#### .getPathInfo(object, path)

```js
var pathval = require("pathval");

var obj = { earth: { country: "Brazil" } };
pathval.getPathInfo(obj, "earth.country"); // { parent: { country: 'Brazil'  }, name: 'country', value: 'Brazil', exists: true }
```

#### .getPathValue(object, path)

```js
var pathval = require("pathval");

var obj = { earth: { country: "Brazil" } };
pathval.getPathValue(obj, "earth.country"); // 'Brazil'
```

#### .setPathValue(object, path, value)

```js
var pathval = require("pathval");

var obj = { earth: { country: "Brazil" } };
pathval.setPathValue(obj, "earth.country", "USA");

obj.earth.country; // 'USA'
```

</details><details> <summary>CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/type-detect/</summary>

### [CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/type-detect/README.md](CONTENT/DS-n-Algos/Graphs/graphs-intro-solution/node_modules/type-detect/README.md)

<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png"/> type-detect
  </a>
</h1>
<br>
<p align=center>
  Improved typeof detection for <a href="http://nodejs.org">node</a> and the browser.
</p>

<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a>
  <a href="https://github.com/chaijs/type-detect/releases">
    <img
      alt="tag:?"
      src="https://img.shields.io/github/tag/chaijs/type-detect.svg?style=flat-square"
    />
  </a>
  <a href="https://travis-ci.org/chaijs/type-detect">
    <img
      alt="build:?"
      src="https://img.shields.io/travis/chaijs/type-detect/master.svg?style=flat-square"
    />
  </a>
  <a href="https://coveralls.io/r/chaijs/type-detect">
    <img
      alt="coverage:?"
      src="https://img.shields.io/coveralls/chaijs/type-detect/master.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/type-detect">
    <img
      alt="npm:?"
      src="https://img.shields.io/npm/v/type-detect.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/type-detect">
    <img
      alt="dependencies:?"
      src="https://img.shields.io/npm/dm/type-detect.svg?style=flat-square"
    />
  </a>
  <a href="">
    <img
      alt="devDependencies:?"
      src="https://img.shields.io/david/chaijs/type-detect.svg?style=flat-square"
    />
  </a>
  <br/>
  <table>
  <tr><th colspan=6>Supported Browsers</th></tr> <tr>
  <th align=center><img src="https://camo.githubusercontent.com/ab586f11dfcb49bf5f2c2fa9adadc5e857de122a/687474703a2f2f73766773686172652e636f6d2f692f3278532e737667" alt=""> Chrome</th>
  <th align=center><img src="https://camo.githubusercontent.com/98cca3108c18dcfaa62667b42046540c6822cdac/687474703a2f2f73766773686172652e636f6d2f692f3279352e737667" alt=""> Edge</th>
  <th align=center><img src="https://camo.githubusercontent.com/acdcb09840a9e1442cbaf1b684f95ab3c3f41cf4/687474703a2f2f73766773686172652e636f6d2f692f3279462e737667" alt=""> Firefox</th>
  <th align=center><img src="https://camo.githubusercontent.com/728f8cb0bee9ed58ab85e39266f1152c53e0dffd/687474703a2f2f73766773686172652e636f6d2f692f3278342e737667" alt=""> Safari</th>
  <th align=center><img src="https://camo.githubusercontent.com/96a2317034dee0040d0a762e7a30c3c650c45aac/687474703a2f2f73766773686172652e636f6d2f692f3279532e737667" alt=""> IE</th>
  </tr><tr>
  <td align=center>✅</td>
  <td align=center>✅</td>
  <td align=center>✅</td>
  <td align=center>✅</td>
  <td align=center>9, 10, 11</td>
  </tr>
  </table>
  <br>
  <a href="https://chai-slack.herokuapp.com/">
    <img
      alt="Join the Slack chat"
      src="https://img.shields.io/badge/slack-join%20chat-E2206F.svg?style=flat-square"
    />
  </a>
  <a href="https://gitter.im/chaijs/chai">
    <img
      alt="Join the Gitter chat"
      src="https://img.shields.io/badge/gitter-join%20chat-D0104D.svg?style=flat-square"
    />
  </a>
</p>

## What is Type-Detect?

Type Detect is a module which you can use to detect the type of a given object. It returns a string representation of the object's type, either using [`typeof`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-typeof-operator) or [`@@toStringTag`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-symbol.tostringtag). It also normalizes some object names for consistency among browsers.

## Why?

The `typeof` operator will only specify primitive values; everything else is `"object"` (including `null`, arrays, regexps, etc). Many developers use `Object.prototype.toString()` - which is a fine alternative and returns many more types (null returns `[object Null]`, Arrays as `[object Array]`, regexps as `[object RegExp]` etc).

Sadly, `Object.prototype.toString` is slow, and buggy. By slow - we mean it is slower than `typeof`. By buggy - we mean that some values (like Promises, the global object, iterators, dataviews, a bunch of HTML elements) all report different things in different browsers.

`type-detect` fixes all of the shortcomings with `Object.prototype.toString`. We have extra code to speed up checks of JS and DOM objects, as much as 20-30x faster for some values. `type-detect` also fixes any consistencies with these objects.

## Installation

### Node.js

`type-detect` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install type-detect

### Browsers

You can also use it within the browser; install via npm and use the `type-detect.js` file found within the download. For example:

```html
<script src="./node_modules/type-detect/type-detect.js"></script>
```

## Usage

The primary export of `type-detect` is function that can serve as a replacement for `typeof`. The results of this function will be more specific than that of native `typeof`.

```js
var type = require("type-detect");
```

#### array

```js
assert(type([]) === "Array");
assert(type(new Array()) === "Array");
```

#### regexp

```js
assert(type(/a-z/gi) === "RegExp");
assert(type(new RegExp("a-z")) === "RegExp");
```

#### function

```js
assert(type(function () {}) === "function");
```

#### arguments

```js
(function () {
  assert(type(arguments) === "Arguments");
})();
```

#### date

```js
assert(type(new Date()) === "Date");
```

#### number

```js
assert(type(1) === "number");
assert(type(1.234) === "number");
assert(type(-1) === "number");
assert(type(-1.234) === "number");
assert(type(Infinity) === "number");
assert(type(NaN) === "number");
assert(type(new Number(1)) === "Number"); // note - the object version has a capital N
```

#### string

```js
assert(type("hello world") === "string");
assert(type(new String("hello")) === "String"); // note - the object version has a capital S
```

#### null

```js
assert(type(null) === "null");
assert(type(undefined) !== "null");
```

#### undefined

```js
assert(type(undefined) === "undefined");
assert(type(null) !== "undefined");
```

#### object

```js
var Noop = function () {};
assert(type({}) === "Object");
assert(type(Noop) !== "Object");
assert(type(new Noop()) === "Object");
assert(type(new Object()) === "Object");
```

#### ECMA6 Types

All new ECMAScript 2015 objects are also supported, such as Promises and Symbols:

```js
assert(type(new Map() === 'Map');
assert(type(new WeakMap()) === 'WeakMap');
assert(type(new Set()) === 'Set');
assert(type(new WeakSet()) === 'WeakSet');
assert(type(Symbol()) === 'symbol');
assert(type(new Promise(callback) === 'Promise');
assert(type(new Int8Array()) === 'Int8Array');
assert(type(new Uint8Array()) === 'Uint8Array');
assert(type(new UInt8ClampedArray()) === 'Uint8ClampedArray');
assert(type(new Int16Array()) === 'Int16Array');
assert(type(new Uint16Array()) === 'Uint16Array');
assert(type(new Int32Array()) === 'Int32Array');
assert(type(new UInt32Array()) === 'Uint32Array');
assert(type(new Float32Array()) === 'Float32Array');
assert(type(new Float64Array()) === 'Float64Array');
assert(type(new ArrayBuffer()) === 'ArrayBuffer');
assert(type(new DataView(arrayBuffer)) === 'DataView');
```

Also, if you use `Symbol.toStringTag` to change an Objects return value of the `toString()` Method, `type()` will return this value, e.g:

```js
var myObject = {};
myObject[Symbol.toStringTag] = "myCustomType";
assert(type(myObject) === "myCustomType");
```

</details><details> <summary>CONTENT/DS-n-Algos/Graphs/</summary>

### [CONTENT/DS-n-Algos/Graphs/graphs.md](CONTENT/DS-n-Algos/Graphs/graphs.md)

# Example Graph

### Visual Aid

---

## ![picture alt](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/images/graphs.png)

---

### Example Code

---

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

---

---

# Basics

- A graph is **any** collection of nodes and edges.
  - Much more relaxed in structure than a tree.
- It doesn't have to have a root node (so not every node can be accessed from a single node)
- It could have cycles (a group of nodes whose paths begin and end at the same node)
- Any number of edges may leave a node

---

# Ways To Reference a Graph Data Structure

## Visual Reference

---

## ![picture alt](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/images/adj_matrix_graph.png)

---

## Adjacency Matrix

---

The row index will corespond to the source of an edge and the column index will correspond to the edges destination.

- When the edges have a direction, `matrix[i][j]` may not be the same as `matrix[j][i]`
- It is common to say that a node is adjacent to itself so matrix[x][x] is true for any node
- Will be O(n^2) space complexity

---

### A 2D Array as the method of storing the location of Nodes

let matrix = [

|       | **A**   | **B**  | **C**  | **D**  | **E**  | **F**  |
| ----- | ------- | ------ | ------ | ------ | ------ | ------ |
| **A** | [True,  | True,  | True,  | False, | True,  | False] |
| **B** | [False, | True,  | False, | False, | False, | False] |
| **C** | [False, | True,  | True,  | True,  | False, | False] |
| **D** | [False, | False, | False, | True,  | False, | False] |
| **E** | [True,  | False, | False, | False, | True,  | False] |
| **F** | [False, | False, | False, | False, | True,  | True]  |

];

---

## Adjacency List

---

Seeks to solve the shortcomings of the matrix implementation. It uses an object where keys represent node labels and values associated with that key are the adjacent nodes.

---

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

# Graph Traversal

## Depth First

---

### With a Node Class

---

#### Node Class Example

- There may not always be a suitable root-like starting point. But in this example all the nodes can be traversed to in some way from the "f" node

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

---

---

#### Recursive Traversal

```js
function depthFirstRecur(node, visited = new Set()) {
  if (visited.has(node.val)) return;

  console.log(node.val);
  visited.add(node.val);

  node.neighbors.forEach((neighbor) => {
    depthFirstRecur(neighbor, visited);
  });
}

depthFirstRecur(f); // starting with f as it is a node that can reach all other nodes
```

#### Iterative Traversal

```js
function depthFirstIter(node) {
  let visited = new Set();
  let stack = [node];

  while (stack.length) {
    let node = stack.pop();

    if (visited.has(node.val)) continue;

    console.log(node.val);
    visited.add(node.val);

    stack.push(...node.neighbors);
  }
}

depthFirstIter(f);
```

---

---

### With an Adjacency List

---

#### Adjacency List Example

Remember that the nodes are stored as strings in an array in an object.

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

---

#### Recursive Example

```js
function depthFirstRecur(node, graph, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach((neighbor) => {
    depthFirstRecur(neighbor, graph, visited);
  });
}

depthFirstRecur("f", graph);
```

---

#### Dynamic Recursive Example

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

</details><details> <summary>CONTENT/DS-n-Algos/Misc/whiteboarding/</summary>

### [CONTENT/DS-n-Algos/Misc/whiteboarding/whiteboarding-problems.md](CONTENT/DS-n-Algos/Misc/whiteboarding/whiteboarding-problems.md)

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

</details><details> <summary>CONTENT/DS-n-Algos/POJOs/</summary>

### [CONTENT/DS-n-Algos/POJOs/utils.md](CONTENT/DS-n-Algos/POJOs/utils.md)

## Clone an object

      clone(x)

Can clone any primitive type, array, and object.
If x has a function clone, this function will be invoked to clone the object.

> param {} x
> return {} clone

```js
export function clone(x) {
  const type = typeof x;
  // immutable primitive types
  if (
    type === "number" ||
    type === "string" ||
    type === "boolean" ||
    x === null ||
    x === undefined
  ) {
    return x;
  }
  // use clone function of the object when available
  if (typeof x.clone === "function") {
    return x.clone();
  }
  // array
  if (Array.isArray(x)) {
    return x.map(function (value) {
      return clone(value);
    });
  }
  if (x instanceof Date) return new Date(x.valueOf());

  // object
  return mapObject(x, clone);
}
```

## Apply map to all properties of an object

> param {Object} object
> param {function} callback
> return {Object} Returns a copy of the object with mapped properties

```js
export function mapObject(object, callback) {
  const clone = {};
  for (const key in object) {
    if (hasOwnProperty(object, key)) {
      clone[key] = callback(object[key]);
    }
  }
  return clone;
}
```

## Extend object a with the properties of object b

> param {Object} a
> param {Object} b
> return {Object} a

```js
export function extend(a, b) {
  for (const prop in b) {
    if (hasOwnProperty(b, prop)) {
      a[prop] = b[prop];
    }
  }
  return a;
}
```

## Deep test equality of all fields in two pairs of arrays or objects.

Compares values and functions strictly (ie. 2 is not the same as '2').

> param {Array | Object} a
> param {Array | Object} b
> returns {boolean}

```js
export function deepStrictEqual(a, b) {
  let prop, i, len;
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (i = 0, len = a.length; i < len; i++) {
      if (!deepStrictEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  } else if (typeof a === "function") {
    return a === b;
  } else if (a instanceof Object) {
    if (Array.isArray(b) || !(b instanceof Object)) {
      return false;
    }
    for (prop in a) {
      // noinspection JSUnfilteredForInLoop
      if (!(prop in b) || !deepStrictEqual(a[prop], b[prop])) {
        return false;
      }
    }
    for (prop in b) {
      // noinspection JSUnfilteredForInLoop
      if (!(prop in a) || !deepStrictEqual(a[prop], b[prop])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
}
```

## Recursively flatten a nested object.

> param {Object} nestedObject
> return {Object} Returns the flattened object

```js
export function deepFlatten(nestedObject) {
  const flattenedObject = {};
  _deepFlatten(nestedObject, flattenedObject);
  return flattenedObject;
}
// helper function used by deepFlatten
function _deepFlatten(nestedObject, flattenedObject) {
  for (const prop in nestedObject) {
    if (hasOwnProperty(nestedObject, prop)) {
      const value = nestedObject[prop];
      if (typeof value === "object" && value !== null) {
        _deepFlatten(value, flattenedObject);
      } else {
        flattenedObject[prop] = value;
      }
    }
  }
}
```

## Test whether the current JavaScript engine supports Object.defineProperty

> returns {boolean} returns true if supported

```js
export function canDefineProperty() {
  // test needed for broken IE8 implementation
  try {
    if (Object.defineProperty) {
      Object.defineProperty({}, "x", { get: function () {} });
      return true;
    }
  } catch (e) {}
  return false;
}
```

## Attach a lazy loading property to a constant.

The given function `fn` is called once when the property is first requested.

> param {Object} object Object where to add the property
> param {string} prop Property name
> param {Function} valueResolver Function returning the property value. Called

                                 without arguments.

```js
export function lazy(object, prop, valueResolver) {
  let _uninitialized = true;
  let _value;
  Object.defineProperty(object, prop, {
    get: function () {
      if (_uninitialized) {
        _value = valueResolver();
        _uninitialized = false;
      }
      return _value;
    },
    set: function (value) {
      _value = value;
      _uninitialized = false;
    },
    configurable: true,
    enumerable: true,
  });
}
```

## Get a nested property from an object

> param {Object} object
> param {string | string[]} path
> returns {Object}

```js
export function get(object, path) {
  if (typeof path === "string") {
    if (isPath(path)) {
      return get(object, path.split("."));
    } else {
      return object[path];
    }
  }
  let child = object;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    child = child ? child[key] : undefined;
  }
  return child;
}
```

## Set a nested property in an object

Mutates the object itself
If the path doesn't exist, it will be created

> param {Object} object
> param {string | string[]} path
> param {} value
> returns {Object}

```js
export function set(object, path, value) {
  if (typeof path === "string") {
    if (isPath(path)) {
      return set(object, path.split("."), value);
    } else {
      object[path] = value;
      return object;
    }
  }
  let child = object;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (child[key] === undefined) {
      child[key] = {};
    }
    child = child[key];
  }
  if (path.length > 0) {
    const lastKey = path[path.length - 1];
    child[lastKey] = value;
  }
  return object;
}
```

</details><details> <summary>CONTENT/DS-n-Algos/Recursion/fibonacci/</summary>

### [CONTENT/DS-n-Algos/Recursion/fibonacci/README.md](CONTENT/DS-n-Algos/Recursion/fibonacci/README.md)

# Fibonacci Number

In mathematics, the Fibonacci numbers are the numbers in the following
integer sequence, called the Fibonacci sequence, and characterized by
the fact that every number after the first two is the sum of the two
preceding ones:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...`

A tiling with squares whose side lengths are successive Fibonacci numbers

![Fibonacci](https://upload.wikimedia.org/wikipedia/commons/d/db/34%2A21-FibonacciBlocks.png)

The Fibonacci spiral: an approximation of the golden spiral created by drawing circular arcs connecting the opposite corners of squares in the Fibonacci tiling;[4] this one uses squares of sizes 1, 1, 2, 3, 5, 8, 13 and 21.

![Fibonacci Spiral](https://upload.wikimedia.org/wikipedia/commons/2/2e/FibonacciSpiral.svg)

Fibonacci_number)

</details><details> <summary>CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/blank/</summary>

### [CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/blank/README.md](CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/blank/README.md)

# Recursion Prompts

### **What is this?**

This is a repository of toy problems to be solved using recursion and JavaScript. While the concept of recursion may not be difficult to grasp, the only way to improve at thinking recursively is by practice. If you need practice, then maybe this repo is for you.

### **A few guidelines:**

- Please refrain from sharing solutions. As crazy as it sounds, giving someone the answer doesn't help them. Instead, give them a question that encourages them to think differently.

  > **Q:** Why does my function keep exceeding the call stack?

  > **A:** What's your base case?

- Don't be afraid to pseudocode your algorithm before writing actual code.

  > Pseudocode helps you focus on the algorithm instead of getting distracted by syntax.

- This repo requires each function call itself recursively and pays no attention to whether inner recursive functions are defined and called.

  > While both are valid uses of recursion, there are important lessons to learn by following the method this repo enforces. Defining inner functions and calling them recursively relies on side effects, while following the more pure approach requires an understanding of how values are passed through the call stack.

- This repo restricts expanding the number of parameters a function accepts.

  > Expanding the number of parameters is a valid approach, but has been restricted here to emphasize certain lessons while learning recursion.

- An attempt was made to order prompts by difficulty, but they don't have to be solved in any particular order.
- Feel free to make pull requests or open issues regarding bugs or suggestions.
- **`Watch`**, **`Star`**, and **`Fork`** this repo. You know you want to.

### **How to use this repo:**

1. Fork this repo and clone it to your local machine
2. Open `SpecRunner.html` in your web browser
3. Code your solutions in `recursion.js`
4. Review the tests in `spec/part1.js` and `spec/part2.js` as necessary
5. Save your work and refresh your browser to check for passing/failing tests

---

### What is recursion?

> Recursion is when a function calls itself until it doesn't. --not helpful person

Is it a true definition? Mostly. Recursion is when a function calls itself. A recursive function can call itself forever, but that's generally not preferred. It's often a good idea to include a condition in the function definition that allows it to stop calling itself. This condition is referred to as a **_base_** case. As a general rule, recursion shouldn't be utilized without an accompanying base case unless an infinite operation is desired. This leaves us with two fundamental conditions every recursive function should include:

- A **`base`** case
- A **`recursive`** case

_What does this all mean?_ Let's consider a silly example:

```javascript
function stepsToZero(n) {
  if (n === 0) {
    /* base case */
    return "Reached zero";
  } else {
    /* recursive case */
    console.log(n + " is not zero");
    return stepsToZero(n - 1);
  }
}
```

This function doesn't do anything meaningful, but hopefully it demonstrates the fundamental idea behind recursion. Simply put, recursion provides us a looping or repeating mechanism. It repeats an operation until a `base` condition is met. Let's step through an invocation of the above function to see how it evaluates.

1. Invoke `stepsToZero(n)` where `n` is the number `2`
2. Is 2 zero?
3. No, print message to console that 2 is not zero
4. Invoke `stepsToZero(n-1)` where `n-1` evaluates to `1`

   > Every recursive call adds a new invocation to the stack on top of the previous invocation

5. Is 1 zero?
6. No, print message that 1 is not zero
7. Invoke `stepsToZero(n-1)` where `n-1` evaluates to `0`
8. Is 0 zero?
9. Yes, return message that reached zero
10. The above return pops the current invocation off the stack
11. Resume the invocation from step 4 where it left off (in-between steps 6 and 7)
12. Return out of the invocation from step 4
13. Resume the initial invocation from step 1 where it left off (in-between steps 3 and 4)
14. Return out of the initial invocation

Note that the value returned from the base case (step 9) gets returned to the previous invocation (step 4) on the stack. Step 4's invocation takes that value and returns it to the invocation that preceded it (step 1). Once the initial invocation is reached, it returns the value to whatever invoked it. Through these steps, you can watch the call stack build up and once the base case is reached, the return value is passed back down as each invocation pops off the stack.

Due to the way the execution stack operates, it's as if each function invocation pauses in time when a recursive call is made. The function that pauses before a recursive call will resume once the recursive call completes. If you've seen the movie [Inception], this model may sound reminiscent to when the characters enter a person's dreams and time slowed. The difference is time doesn't actually slow with recursive invocations; rather, it's a matter of order of operations. If a new invocation enters the execution stack, that invocation must complete before the previous can continue and complete.

### Why use recursion?

Recursion can be elegant, but it can also be dangerous. In some cases, recursion feels like a more natural and readable solution; in others, it ends up being contrived. In most cases, recursion can be avoided entirely and sometimes should in order to minimize the possibility of exceeding the call stack and crashing your app. But keep in mind that code readability is important. If a recursive solution reads more naturally, then it may be the best solution for the given problem.

Recursion isn't unique to any one programming language. As a software engineer, you _will_ encounter recursion and it's important to understand what's happening and how to work with it. It's also important to understand why someone might use it. Recursion is often used when the depth of a thing is unknown or every element of a thing needs to be touched. For example, you might use recursion if you want to find all DOM elements with a specific class name. You may not know how deep the DOM goes and need to touch every element so that none are missed. The same can be said for traversing any structure where all possible paths need to be considered and investigated.

### Divide and Conquer

Recursion is often used in _divide and conquer_ algorithms where problems can be divided into similar subproblems and conquered individually. Consider traversing a tree structure. Each branch may have its own "children" branches. Every branch is essentially just another tree which means, as long as child trees are found, we can recurse on each child.

[inception]: https://en.wikipedia.org/wiki/Inception

</details><details> <summary>CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/my-solutions/</summary>

### [CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/my-solutions/README.md](CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/my-solutions/README.md)

# Recursion Prompts

### **What is this?**

This is a repository of toy problems to be solved using recursion and JavaScript. While the concept of recursion may not be difficult to grasp, the only way to improve at thinking recursively is by practice. If you need practice, then maybe this repo is for you.

### **A few guidelines:**

- Please refrain from sharing solutions. As crazy as it sounds, giving someone the answer doesn't help them. Instead, give them a question that encourages them to think differently.

  > **Q:** Why does my function keep exceeding the call stack?

  > **A:** What's your base case?

- Don't be afraid to pseudocode your algorithm before writing actual code.

  > Pseudocode helps you focus on the algorithm instead of getting distracted by syntax.

- This repo requires each function call itself recursively and pays no attention to whether inner recursive functions are defined and called.

  > While both are valid uses of recursion, there are important lessons to learn by following the method this repo enforces. Defining inner functions and calling them recursively relies on side effects, while following the more pure approach requires an understanding of how values are passed through the call stack.

- This repo restricts expanding the number of parameters a function accepts.

  > Expanding the number of parameters is a valid approach, but has been restricted here to emphasize certain lessons while learning recursion.

- An attempt was made to order prompts by difficulty, but they don't have to be solved in any particular order.
- Feel free to make pull requests or open issues regarding bugs or suggestions.
- **`Watch`**, **`Star`**, and **`Fork`** this repo. You know you want to.

### **How to use this repo:**

1. Fork this repo and clone it to your local machine
2. Open `SpecRunner.html` in your web browser
3. Code your solutions in `recursion.js`
4. Review the tests in `spec/part1.js` and `spec/part2.js` as necessary
5. Save your work and refresh your browser to check for passing/failing tests

---

### What is recursion?

> Recursion is when a function calls itself until it doesn't. --not helpful person

Is it a true definition? Mostly. Recursion is when a function calls itself. A recursive function can call itself forever, but that's generally not preferred. It's often a good idea to include a condition in the function definition that allows it to stop calling itself. This condition is referred to as a **_base_** case. As a general rule, recursion shouldn't be utilized without an accompanying base case unless an infinite operation is desired. This leaves us with two fundamental conditions every recursive function should include:

- A **`base`** case
- A **`recursive`** case

_What does this all mean?_ Let's consider a silly example:

```javascript
function stepsToZero(n) {
  if (n === 0) {
    /* base case */
    return "Reached zero";
  } else {
    /* recursive case */
    console.log(n + " is not zero");
    return stepsToZero(n - 1);
  }
}
```

This function doesn't do anything meaningful, but hopefully it demonstrates the fundamental idea behind recursion. Simply put, recursion provides us a looping or repeating mechanism. It repeats an operation until a `base` condition is met. Let's step through an invocation of the above function to see how it evaluates.

1. Invoke `stepsToZero(n)` where `n` is the number `2`
2. Is 2 zero?
3. No, print message to console that 2 is not zero
4. Invoke `stepsToZero(n-1)` where `n-1` evaluates to `1`

   > Every recursive call adds a new invocation to the stack on top of the previous invocation

5. Is 1 zero?
6. No, print message that 1 is not zero
7. Invoke `stepsToZero(n-1)` where `n-1` evaluates to `0`
8. Is 0 zero?
9. Yes, return message that reached zero
10. The above return pops the current invocation off the stack
11. Resume the invocation from step 4 where it left off (in-between steps 6 and 7)
12. Return out of the invocation from step 4
13. Resume the initial invocation from step 1 where it left off (in-between steps 3 and 4)
14. Return out of the initial invocation

Note that the value returned from the base case (step 9) gets returned to the previous invocation (step 4) on the stack. Step 4's invocation takes that value and returns it to the invocation that preceded it (step 1). Once the initial invocation is reached, it returns the value to whatever invoked it. Through these steps, you can watch the call stack build up and once the base case is reached, the return value is passed back down as each invocation pops off the stack.

Due to the way the execution stack operates, it's as if each function invocation pauses in time when a recursive call is made. The function that pauses before a recursive call will resume once the recursive call completes. If you've seen the movie [Inception], this model may sound reminiscent to when the characters enter a person's dreams and time slowed. The difference is time doesn't actually slow with recursive invocations; rather, it's a matter of order of operations. If a new invocation enters the execution stack, that invocation must complete before the previous can continue and complete.

### Why use recursion?

Recursion can be elegant, but it can also be dangerous. In some cases, recursion feels like a more natural and readable solution; in others, it ends up being contrived. In most cases, recursion can be avoided entirely and sometimes should in order to minimize the possibility of exceeding the call stack and crashing your app. But keep in mind that code readability is important. If a recursive solution reads more naturally, then it may be the best solution for the given problem.

Recursion isn't unique to any one programming language. As a software engineer, you _will_ encounter recursion and it's important to understand what's happening and how to work with it. It's also important to understand why someone might use it. Recursion is often used when the depth of a thing is unknown or every element of a thing needs to be touched. For example, you might use recursion if you want to find all DOM elements with a specific class name. You may not know how deep the DOM goes and need to touch every element so that none are missed. The same can be said for traversing any structure where all possible paths need to be considered and investigated.

### Divide and Conquer

Recursion is often used in _divide and conquer_ algorithms where problems can be divided into similar subproblems and conquered individually. Consider traversing a tree structure. Each branch may have its own "children" branches. Every branch is essentially just another tree which means, as long as child trees are found, we can recurse on each child.

[inception]: https://en.wikipedia.org/wiki/Inception

</details><details> <summary>CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/part-2/</summary>

### [CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/part-2/README.md](CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/part-2/README.md)

#2013-08-more-data-structures

This is a copy of the work I did on a private repo, originally a project from
the [Hack Reactor](http://hackreactor.com) curriculum. This project was worked
on with a pair, and as such is representative of the kind of problems that I've
tackled, but not of my solo work.

For a better perspective on my own work, please see [CoderCombat](https://github.com/tylermcginnis33/CoderCombat).

</details><details> <summary>CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/</summary>

### [CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/README.md](CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/README.md)

# Recursion Practice

---

---

### TODO:

> Implement with jsfiddle so people can see the specs and their code in the same window rather than a combo of editor/browser

---

### **How to use this repo:**

1. Fork this repo and clone it to your local machine
2. Open `SpecRunner.html` in your web browser
3. Code your solutions in `recursion.js`
4. Review the tests in `spec/part1.js` and `spec/part2.js` as necessary
5. Save your work and refresh your browser to check for passing/failing tests

---

### What is recursion?

> Recursion is when a function calls itself until it doesn't. --not helpful person

Is it a true definition? Mostly. Recursion is when a function calls itself. A recursive function can call itself forever, but that's generally not preferred. It's often a good idea to include a condition in the function definition that allows it to stop calling itself. This condition is referred to as a **_base_** case. As a general rule, recursion shouldn't be utilized without an accompanying base case unless an infinite operation is desired. This leaves us with two fundamental conditions every recursive function should include:

- A **`base`** case
- A **`recursive`** case

_What does this all mean?_ Let's consider a silly example:

```javascript
function stepsToZero(n) {
  if (n === 0) {
    /* base case */
    return "Reached zero";
  } else {
    /* recursive case */
    console.log(n + " is not zero");
    return stepsToZero(n - 1);
  }
}
```

This function doesn't do anything meaningful, but hopefully it demonstrates the fundamental idea behind recursion. Simply put, recursion provides us a looping or repeating mechanism. It repeats an operation until a `base` condition is met. Let's step through an invocation of the above function to see how it evaluates.

1. Invoke `stepsToZero(n)` where `n` is the number `2`
2. Is 2 zero?
3. No, print message to console that 2 is not zero
4. Invoke `stepsToZero(n-1)` where `n-1` evaluates to `1`

   > Every recursive call adds a new invocation to the stack on top of the previous invocation

5. Is 1 zero?
6. No, print message that 1 is not zero
7. Invoke `stepsToZero(n-1)` where `n-1` evaluates to `0`
8. Is 0 zero?
9. Yes, return message that reached zero
10. The above return pops the current invocation off the stack
11. Resume the invocation from step 4 where it left off (in-between steps 6 and 7)
12. Return out of the invocation from step 4
13. Resume the initial invocation from step 1 where it left off (in-between steps 3 and 4)
14. Return out of the initial invocation

Note that the value returned from the base case (step 9) gets returned to the previous invocation (step 4) on the stack. Step 4's invocation takes that value and returns it to the invocation that preceded it (step 1). Once the initial invocation is reached, it returns the value to whatever invoked it. Through these steps, you can watch the call stack build up and once the base case is reached, the return value is passed back down as each invocation pops off the stack.

Due to the way the execution stack operates, it's as if each function invocation pauses in time when a recursive call is made. The function that pauses before a recursive call will resume once the recursive call completes. If you've seen the movie [Inception], this model may sound reminiscent to when the characters enter a person's dreams and time slowed. The difference is time doesn't actually slow with recursive invocations; rather, it's a matter of order of operations. If a new invocation enters the execution stack, that invocation must complete before the previous can continue and complete.

### Why use recursion?

Recursion can be elegant, but it can also be dangerous. In some cases, recursion feels like a more natural and readable solution; in others, it ends up being contrived. In most cases, recursion can be avoided entirely and sometimes should in order to minimize the possibility of exceeding the call stack and crashing your app. But keep in mind that code readability is important. If a recursive solution reads more naturally, then it may be the best solution for the given problem.

Recursion isn't unique to any one programming language. As a software engineer, you _will_ encounter recursion and it's important to understand what's happening and how to work with it. It's also important to understand why someone might use it. Recursion is often used when the depth of a thing is unknown or every element of a thing needs to be touched. For example, you might use recursion if you want to find all DOM elements with a specific class name. You may not know how deep the DOM goes and need to touch every element so that none are missed. The same can be said for traversing any structure where all possible paths need to be considered and investigated.

### Divide and Conquer

Recursion is often used in _divide and conquer_ algorithms where problems can be divided into similar subproblems and conquered individually. Consider traversing a tree structure. Each branch may have its own "children" branches. Every branch is essentially just another tree which means, as long as child trees are found, we can recurse on each child.

[inception]: https://en.wikipedia.org/wiki/Inception

> What's the difference and connections between recursion, divide-and-conquer algorithm, dynamic programming, and greedy algorithm? If you haven't made it clear. Doesn't matter! I would give you a brief introduction to kick off this section.

What's the difference and connections between recursion, divide-and-conquer algorithm, dynamic programming, and greedy algorithm? If you haven't made it clear. Doesn't matter! I would give you a brief introduction to kick off this section.

Recursion is a programming technique. It's a way of thinking about solving problems. There're two algorithmic ideas to solve specific problems: divide-and-conquer algorithm and dynamic programming. They're largely based on recursive thinking (although the final version of dynamic programming is rarely recursive, the problem-solving idea is still inseparable from recursion). There's also an algorithmic idea called greedy algorithm which can efficiently solve some more special problems. And it's a subset of dynamic programming algorithms.

The divide-and-conquer algorithm will be explained in this section. Taking the most classic merge sort as an example, it continuously divides the unsorted array into smaller sub-problems. This is the origin of the word **divide and conquer**. Obviously, the sub-problems decomposed by the ranking problem are non-repeating. If some of the sub-problems after decomposition are duplicated (the nature of overlapping sub-problems), then the dynamic programming algorithm is used to solve them!

```
.
├── AUX_MATERIALS
│   ├── recursion-flow.PNG
│   ├── right.html
│   ├── sandbox
│   │   ├── LOs.js
│   │   ├── example2.js
│   │   ├── examples.js
│   │   ├── exponent.js
│   │   ├── factorial.js
│   │   ├── fibonacci.js
│   │   ├── flatten.js
│   │   ├── memoize.js
│   │   ├── recursiveCallStack.js
│   │   ├── recursiveIsEven.js
│   │   ├── recursiveRange.js
│   │   ├── right.html
│   │   ├── sum.js
│   │   └── tabulate.js
│   ├── solved.pdf
│   └── unzolved.pdf
├── README.html
├── README.md
├── blank
│   ├── README.md
│   ├── SpecRunner.html
│   ├── lib
│   │   ├── chai.js
│   │   ├── css
│   │   │   ├── mocha.css
│   │   │   └── right.html
│   │   ├── jquery.js
│   │   ├── mocha.js
│   │   ├── right.html
│   │   ├── sinon.js
│   │   └── testSupport.js
│   ├── right.html
│   ├── spec
│   │   ├── part1.js
│   │   ├── part2.js
│   │   └── right.html
│   ├── src
│   │   ├── recursion.js
│   │   └── right.html
│   └── testing
│       ├── directory1.html
│       ├── left1.html
│       ├── prism.css
│       ├── prism.js
│       ├── right.html
│       ├── right1.html
│       └── starter.html
├── dir.md
├── directory.html
├── images
│   ├── BubbleSort.gif
│   ├── InsertionSort.gif
│   ├── MergeSort.gif
│   ├── QuickSort.gif
│   ├── SLL-diagram.png
│   ├── SelectionSort.gif
│   ├── array-in-memory.png
│   ├── fib_memoized.png
│   ├── fib_tree.png
│   ├── fib_tree_duplicates.png
│   ├── github-repo-menu-bar-wiki.png
│   └── right.html
├── index.html
├── left.html
├── my-solutions
│   ├── README.md
│   ├── SpecRunner.html
│   ├── complete.html
│   ├── lib
│   │   ├── chai.js
│   │   ├── css
│   │   │   ├── mocha.css
│   │   │   └── right.html
│   │   ├── jquery.js
│   │   ├── mocha.js
│   │   ├── right.html
│   │   ├── sinon.js
│   │   └── testSupport.js
│   ├── prism.css
│   ├── prism.js
│   ├── right.html
│   ├── spec
│   │   ├── part1.js
│   │   ├── part2.js
│   │   └── right.html
│   ├── src
│   │   ├── recursion.js
│   │   └── right.html
│   └── style.css
├── part-2
│   ├── README.md
│   ├── SpecRunner.html
│   ├── lib
│   │   ├── jasmine-1.0.0
│   │   │   ├── MIT.LICENSE
│   │   │   ├── jasmine-html.js
│   │   │   ├── jasmine.css
│   │   │   ├── jasmine.js
│   │   │   └── right.html
│   │   ├── right.html
│   │   └── underscore.js
│   ├── right.html
│   ├── solutions
│   │   ├── binarySearchTree.js
│   │   ├── hashTable.js
│   │   ├── hashTableHelpers.js
│   │   ├── linkedList.js
│   │   ├── right.html
│   │   ├── set.js
│   │   └── tree.js
│   ├── spec
│   │   ├── binarySearchTreeSpec.js
│   │   ├── hashTableSpec.js
│   │   ├── linkedListSpec.js
│   │   ├── right.html
│   │   ├── setSpec.js
│   │   └── treeSpec.js
│   └── src
│       ├── binarySearchTree.js
│       ├── hashTable.js
│       ├── hashTableHelpers.js
│       ├── linkedList.js
│       ├── right.html
│       ├── set.js
│       └── tree.js
├── prism.css
├── prism.js
├── right.html
├── style.css
├── tabs
│   ├── right.html
│   ├── tabs.html
│   ├── tabs2.html
│   └── template-files
│       ├── LmfE5ZMlM8QjZWyylbaJdeYzodpJKK3mlCt6sCr3jaw.js
│       ├── about-us-page-template.jpg
│       ├── ad_status.js
│       ├── agency-template.jpg
│       ├── analytics.js
│       ├── application-template.jpg
│       ├── article-template.jpg
│       ├── base.js
│       ├── best-bootstrap-templates-492x492.jpg
│       ├── blog.jpg
│       ├── bootstrap-basic-template-492x492.jpg
│       ├── bootstrap-ecommerce-template-492x492.jpg
│       ├── bootstrap-grid.min.css
│       ├── bootstrap-landing-page-template-492x492.jpg
│       ├── bootstrap-layout-templates-492x492.jpg
│       ├── bootstrap-login-page-template-492x492.jpg
│       ├── bootstrap-one-page-template-492x492.jpg
│       ├── bootstrap-page-templates-492x492.jpg
│       ├── bootstrap-portfolio-template-600x600.jpg
│       ├── bootstrap-reboot.min.css
│       ├── bootstrap-responsive-website-templates-600x600.jpg
│       ├── bootstrap-sample-template-492x492.jpg
│       ├── bootstrap-single-page-template-492x492.jpg
│       ├── bootstrap-starter-template-492x492.jpg
│       ├── bootstrap-templates-examples-492x492.jpg
│       ├── bootstrap-theme-template-492x492.jpg
│       ├── bootstrap.min.css
│       ├── bootstrap.min.js
│       ├── business-template.jpg
│       ├── carousel-template.jpg
│       ├── cast_sender.js
│       ├── coming-soon-template.jpg
│       ├── contact-form-template-1.jpg
│       ├── corporate-template.jpg
│       ├── documentation-template.jpg
│       ├── download-bootstrap-template-492x492.jpg
│       ├── education-template.jpg
│       ├── embed.js
│       ├── error-template.jpg
│       ├── event-template.jpg
│       ├── f(1).txt
│       ├── f.txt
│       ├── faq-template.jpg
│       ├── fbevents.js
│       ├── fetch-polyfill.js
│       ├── footer-template.jpg
│       ├── form-templates.jpg
│       ├── free-html5-bootstrap-templates-600x600.jpg
│       ├── gallery-template.jpg
│       ├── google-maps-template.jpg
│       ├── grid-template.jpg
│       ├── gtm.js
│       ├── hGaQaBeUfGw.html
│       ├── header-template.jpg
│       ├── homepage-template.jpg
│       ├── hotel-template.jpg
│       ├── jarallax.min.js
│       ├── jquery.min.js
│       ├── jquery.touch-swipe.min.js
│       ├── landing-page-template.jpg
│       ├── list-template.jpg
│       ├── magazine-template.jpg
│       ├── map-template.jpg
│       ├── mbr-additional.css
│       ├── menu-template.jpg
│       ├── mobirise-icons.css
│       ├── multi-page-template.jpg
│       ├── navbar-template.jpg
│       ├── navigation-menu.jpg
│       ├── news-template.jpg
│       ├── one-page-1.jpg
│       ├── ootstrap-design-template-492x492.jpg
│       ├── parallax-scrolling-template.jpg
│       ├── parallax-template.jpg
│       ├── personal-website-template.jpg
│       ├── photo-gallery-template.jpg
│       ├── photography-template.jpg
│       ├── popper.min.js
│       ├── premium-bootstrap-templates-492x492.jpg
│       ├── profile-template.jpg
│       ├── real-estate-template.jpg
│       ├── registration-form-template.jpg
│       ├── remote.js
│       ├── restaurant-template.jpg
│       ├── right.html
│       ├── script.js
│       ├── script.min.js
│       ├── shopping-cart.jpg
│       ├── simple-bootstrap-template-492x492.jpg
│       ├── slider-template.jpg
│       ├── slider.jpg
│       ├── smooth-scroll.js
│       ├── social-network-template.jpg
│       ├── store-template.jpg
│       ├── style(1).css
│       ├── style.css
│       ├── tab-template.jpg
│       ├── table-template.jpg
│       ├── tether.min.css
│       ├── tether.min.js
│       ├── travel-template.jpg
│       ├── video-bg-template.jpg
│       ├── video-bg.jpg
│       ├── video-gallery-template.jpg
│       ├── video-template.jpg
│       ├── warren-wong-200912-2000x1304.jpg
│       ├── web-application-template.jpg
│       ├── wedding-template.jpg
│       ├── www-embed-player.js
│       └── www-player-webp.css
└── tree.md

22 directories, 227 files


```

## Recursion in detail

Before introducing divide and conquer algorithm, we must first understand the concept of recursion.

The basic idea of recursion is that a function calls itself directly or indirectly, which transforms the solution of the original problem into many smaller sub-problems of the same nature. All we need is to focus on how to divide the original problem into qualified sub-problems, rather than study how this sub-problem is solved. The difference between recursion and enumeration is that enumeration divides the problem horizontally and then solves the sub-problems one by one, but recursion divides the problem vertically and then solves the sub-problems hierarchily.

The following illustrates my understanding of recursion. **If you don't want to read, please just remember how to answer these questions:**

1.  How to sort a bunch of numbers? Answer: Divided into two halves, first align the left half, then the right half, and finally merge. As for how to arrange the left and right half, please read this sentence again.
2.  How many hairs does Monkey King have? Answer: One plus the rest.
3.  How old are you this year? Answer: One year plus my age of last year, I was born in 1999.

Two of the most important characteristics of recursive code: **end conditions and self-invocation**. Self-invocation is aimed at solving sub-problems, and the end condition defines the answer to the simplest sub-problem.

Actually think about it, **what is the most successful application of recursion? I think it's mathematical induction**. Most of us learned mathematical induction in high school. The usage scenario is probably: we can't figure out a summation formula, but we tried a few small numbers which seemed containing a kinda law, and then we compiled a formula. We ourselves think it shall be the correct answer. However, mathematics is very rigorous. Even if you've tried 10,000 cases which are correct, can you guarantee the 10001th correct? This requires mathematical induction to exert its power. Assuming that the formula we compiled is true at the kth number, furthermore if it is proved correct at the k + 1th, then the formula we have compiled is verified correct.

So what is the connection between mathematical induction and recursion? We just said that the recursive code must have an end condition. If not, it will fall into endless self-calling hell until the memory exhausted. The difficulty of mathematical proof is that you can try to have a finite number of cases, but it is difficult to extend your conclusion to infinity. Here you can see the connection-infinite.

The essence of recursive code is to call itself to solve smaller sub-problems until the end condition is reached. The reason why mathematical induction is useful is to continuously increase our guess by one, and expand the size of the conclusion, without end condition. So by extending the conclusion to infinity, the proof of the correctness of the guess is completed.

### Why learn recursion

First to train the ability to think reversely. Recursive thinking is the thinking of normal people, always looking at the problems in front of them and thinking about solutions, and the solution is the future tense; Recursive thinking forces us to think reversely, see the end of the problem, and treat the problem-solving process as the past tense.

Second, practice analyzing the structure of the problem. When the problem can be broken down into sub problems of the same structure, you can acutely find this feature, and then solve it efficiently.

Third, go beyond the details and look at the problem as a whole. Let's talk about merge and sort. In fact, you can divide the left and right areas without recursion, but the cost is that the code is extremely difficult to understand. Take a look at the code below (merge sorting will be described later. You can understand the meaning here, and appreciate the beauty of recursion).

    void sort(Comparable[] a){
        int N = a.length;
        // So complicated! It shows disrespect for sorting. I refuse to study such code.
        for (int sz = 1; sz < N; sz = sz + sz)
            for (int lo = 0; lo < N - sz; lo += sz + sz)
                merge(a, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, N - 1));
    }

    /* I prefer recursion, simple and beautiful */
    void sort(Comparable[] a, int lo, int hi) {
        if (lo >= hi) return;
        int mid = lo + (hi - lo) / 2;
        sort(a, lo, mid); // soft left part
        sort(a, mid + 1, hi); // soft right part
        merge(a, lo, mid, hi); // merge the two sides
    }

Looks simple and beautiful is one aspect, the key is **very interpretable**: sort the left half, sort the right half, and finally merge the two sides. The non-recursive version looks unintelligible, full of various incomprehensible boundary calculation details, is particularly prone to bugs and difficult to debug. Life is short, i prefer the recursive version.

Obviously, sometimes recursive processing is efficient, such as merge sort, **sometimes inefficient**, such as counting the hair of Monkey King, because the stack consumes extra space but simple inference does not consume space. Example below gives a linked list header and calculate its length:

### Tips for writing recursion

My point of view: **Understand what a function does and believe it can accomplish this task. Don't try to jump into the details.** Do not jump into this function to try to explore more details, otherwise you will fall into infinite details and cannot extricate yourself. The human brain carries tiny sized stack!

Let's start with the simplest example: traversing a binary tree.

Above few lines of code are enough to wipe out any binary tree. What I want to say is that for the recursive function `traverse (root)` , we just need to believe: give it a root node `root` , and it can traverse the whole tree. Since this function is written for this specific purpose, so we just need to dump the left and right nodes of this node to this function, because I believe it can surely complete the task. What about traversing an N-fork tree? It's too simple, exactly the same as a binary tree!

As for pre-order, mid-order, post-order traversal, they are all obvious. For N-fork tree, there is obviously no in-order traversal.

The following **explains a problem from LeetCode in detail**: Given a binary tree and a target value, the values in every node is positive or negative, return the number of paths in the tree that are equal to the target value, let you write the pathSum function:

The problem may seem complicated, but the code is extremely concise, which is the charm of recursion. Let me briefly summarize the **solution process** of this problem:

First of all, it is clear that to solve the problem of recursive tree, you must traverse the entire tree. So the traversal framework of the binary tree (recursively calling the function itself on the left and right children) must appear in the main function pathSum. And then, what should they do for each node? They should see how many eligible paths they and their little children have under their feet. Well, this question is clear.

According to the techniques mentioned earlier, define what each recursive function should do based on the analysis just now:

PathSum function: Give it a node and a target value. It returns the total number of paths in the tree rooted at this node and the target value.

Count function: Give it a node and a target value. It returns a tree rooted at this node, and can make up the total number of paths starting with the node and the target value.

    /* With above tips, comment out the code in detail */
    int pathSum(TreeNode root, int sum) {
        if (root == null) return 0;
        int pathImLeading = count(root, sum); // Number of paths beginning with itself
        int leftPathSum = pathSum(root.left, sum); // The total number of paths on the left (Believe he can figure it out)
        int rightPathSum = pathSum(root.right, sum); // The total number of paths on the right (Believe he can figure it out)
        return leftPathSum + rightPathSum + pathImLeading;
    }
    int count(TreeNode node, int sum) {
        if (node == null) return 0;
        // Can I stand on my own as a separate path?
        int isMe = (node.val == sum) ? 1 : 0;
        // Left brother, how many sum-node.val can you put together?
        int leftBrother = count(node.left, sum - node.val);
        // Right brother, how many sum-node.val can you put together?
        int rightBrother = count(node.right, sum - node.val);
        return  isMe + leftBrother + rightBrother; // all count i can make up
    }

Again, understand what each function can do and trust that they can do it.

In summary, the binary tree traversal framework provided by the PathSum function calls the count function for each node during the traversal. Can you see the pre-order traversal (the order is the same for this question)? The count function is also a binary tree traversal, used to find the target value path starting with this node. Understand it deeply!

## Divide and conquer algorithm

**Merge and sort**, typical divide-and-conquer algorithm; divide-and-conquer, typical recursive structure.

The divide-and-conquer algorithm can go in three steps: decomposition-> solve-> merge

1.  Decompose the original problem into sub-problems with the same structure.
2.  After decomposing to an easy-to-solve boundary, perform a recursive solution.
3.  Combine the solutions of the subproblems into the solutions of the original problem.

To merge and sort, let's call this function `merge_sort` . According to what we said above, we must clarify the responsibility of the function, that is, **sort an incoming array**. OK, can this problem be solved? Of course! Sorting an array is just the same to sorting the two halves of the array separately, and then merging the two halves.

Well, this algorithm is like this, there is no difficulty at all. Remember what I said before, believe in the function's ability, and pass it to him half of the array, then the half of the array is already sorted. Have you found it's a binary tree traversal template? Why it is postorder traversal? Because the routine of our divide-and-conquer algorithm is **decomposition-> solve (bottom)-> merge (backtracking)** Ah, first left and right decomposition, and then processing merge, backtracking is popping stack, which is equivalent to post-order traversal. As for the `merge` function, referring to the merging of two ordered linked lists, they are exactly the same, and the code is directly posted below.

Let's refer to the Java code in book `Algorithm 4` below, which is pretty. This shows that not only algorithmic thinking is important, but coding skills are also very important! Think more and imitate more.

```java
    public class Merge {
        // Do not construct new arrays in the merge function, because the merge function will be called multiple times, affecting performance.Construct a large enough array directly at once, concise and efficient.
        private static Comparable[] aux;

         public static void sort(Comparable[] a) {
            aux = new Comparable[a.length];
            sort(a, 0, a.length - 1);
        }

        private static void sort(Comparable[] a, int lo, int hi) {
            if (lo >= hi) return;
            int mid = lo + (hi - lo) / 2;
            sort(a, lo, mid);
            sort(a, mid + 1, hi);
            merge(a, lo, mid, hi);
        }

        private static void merge(Comparable[] a, int lo, int mid, int hi) {
            int i = lo, j = mid + 1;
            for (int k = lo; k <= hi; k++)
                aux[k] = a[k];
            for (int k = lo; k <= hi; k++) {
                if      (i > mid)              { a[k] = aux[j++]; }
                else if (j > hi)               { a[k] = aux[i++]; }
                else if (less(aux[j], aux[i])) { a[k] = aux[j++]; }
                else                           { a[k] = aux[i++]; }
            }
        }

        private static boolean less(Comparable v, Comparable w) {
            return v.compareTo(w) < 0;
        }
    }
```

LeetCode has a special exercise of the divide-and-conquer algorithm. Copy the link below to web browser and have a try:

https://leetcode.com/tag/divide-and-conquer/

Prompt: write a function that will reverse a string:

var reverse = function(string){  
if(string.length < 2){

}  
var first = string\[0\]  
var last = string\[string.length-1\]; return last +reverse(string.slice(1, string.length-1)) + first; }; reverse('abcdef'); //returns 'fedcba'

**//explain what a recursive function is**

**_A function that calls itself_** is a recursive function.

If a function calls itself… then that function calls itself… then that function calls itself… well… then we have fallen into an infinite loop (a very unproductive place to be). To benefit from recursive calls, we need to be careful to include to give our interpreter a way to break out of the cycle of recursive function calls; we call this a **_base case_**.

The base case in the solution code above is as simple as testing that the length of the argument is less than 2… and if it is, returning the the value of that argument.

Notice how each time we recursively call the reverse function, we are passing it a shorter string argument… so each recursive call is getting us closer to hitting our **_base case_**.

**//visualize the interpreter's path through recursive function calls**

![Image for post](https://miro.medium.com/max/60/1*J4FL6LpLY1AXy_KPFdREKw.png?q=20)

Image for post

![Image for post](https://miro.medium.com/max/1810/1*J4FL6LpLY1AXy_KPFdREKw.png)

Image for post

Slow down and follow the interpreter through its execution of your algorithm (thanks to PythonTutor.com)

Python Tutor is an excellent resource for learning to visualize and trace variable values through the multiple execution contexts of a recursive function's invocation.

_Try it now with these simple steps:_

1.  _copy the solution code from above_
2.  _go over to_ [_http://pythontutor.com/javascript.html#mode=edit_](http://pythontutor.com/javascript.html#mode=edit)
3.  _paste the solution code into the editor_
4.  _click the "Visualize Execution" button_
5.  _progress through the execution with the "forward" button_

**//when can a recursive function help me?**

So if I hope that at this point that you are thinking: there is a **_better_** way to reverse a function, or there is a **_simpler_** way to reverse a string…

First off… **_simpler is better._** Writing good code isn't about being clever or fancy; good code is about writing code that works, that makes sense to as many other minds as possible, that is time efficient, and that is memory efficient (in order of importance). As new programers, the first of these criteria is obvious, and the last two are given way too much weight. It's the second of these criteria that needs to carry much more weight in our minds and deserves the most attention. Recursive functions can be a powerful tool in helping us write clear and simple solutions.

To be clear: recursion is not about being fancy or clever… it is an important skill to wrestle with early because there will be many scenarios when employing recursion will allow for a simpler and more reliable solution than would be possible without recursive functions.

**//more useful example**

Prompt: check to see if a binary-search-tree contains a value

```js
var searchBST = function(tree, num){
if(tree.val === num){

} else if(num > tree.val){

} else{

}
}; var tree = {val: 9,

searchBST(tree, 4) // return false
```

When traversing trees and many other other non-primative data structures, recursion allows us to define a clear algorithm that elegantly handles uncertainty and complexity. Without recursion, it would be impossible to write a single function that could search a binary search tree of any size and state… yet by employing recursion, we can write a concise algorithm that will traverse any binary search tree and determine if it contains a value or not.

Take a moment to analyze how recursion is used in this example by tracing the interpreters path through this solution. Just as we did for the reverse function above, paste this binary search tree code snippet into the editor at [http://pythontutor.com/javascript.html#mode=display](http://pythontutor.com/javascript.html#mode=display)

In this function definition, there are three base cases that will return a value instead of recursively calling the searchBST function… can you find them?

//now go practice using recursion

---

---

[**Big O**](#big-o-) [**Memoization And Tabulation**](#memoization-and-tabulation-) \- [Recursion Videos](#recursion-videos) - [Curating Complexity: A Guide to Big-O Notation](#curating-complexity-a-guide-to-big-o-notation) - [Why Big-O?](#why-big-o) - [Big-O Notation](#big-o-notation) - [Common Complexity Classes](#common-complexity-classes) - [The seven major classes](#the-seven-major-classes) - [Memoization](#memoization) - [Memoizing factorial](#memoizing-factorial) - [Memoizing the Fibonacci generator](#memoizing-the-fibonacci-generator) - [The memoization formula](#the-memoization-formula) - [Tabulation](#tabulation) - [Tabulating the Fibonacci number](#tabulating-the-fibonacci-number) - [Aside: Refactoring for O(1) Space](#aside-refactoring-for-o1-space) - [Analysis of Linear Search](#analysis-of-linear-search) - [Analysis of Binary Search](#analysis-of-binary-search) - [Analysis of the Merge Sort](#analysis-of-the-merge-sort) - [Analysis of Bubble Sort](#analysis-of-bubble-sort) - [LeetCode.com](#leetcodecom) - [Memoization Problems](#memoization-problems) - [Tabulation Problems](#tabulation-problems)

[**Sorting Algorithms**](#sorting-algorithms-) \- [Bubble Sort](#bubble-sort) - [_"But…then…why are we…"_](#_butthenwhy-are-we_) - [The algorithm bubbles up](#the-algorithm-bubbles-up) - [How does a pass of Bubble Sort work?](#how-does-a-pass-of-bubble-sort-work) - [Ending the Bubble Sort](#ending-the-bubble-sort) - [Pseudocode for Bubble Sort](#pseudocode-for-bubble-sort) - [Selection Sort](#selection-sort) - [The algorithm: select the next smallest](#the-algorithm-select-the-next-smallest) - [The pseudocode](#the-pseudocode) - [Insertion Sort](#insertion-sort) - [The algorithm: insert into the sorted region](#the-algorithm-insert-into-the-sorted-region) - [The Steps](#the-steps) - [The pseudocode](#the-pseudocode-1) - [Merge Sort](#merge-sort) - [The algorithm: divide and conquer](#the-algorithm-divide-and-conquer) - [Quick Sort](#quick-sort) - [How does it work?](#how-does-it-work) - [The algorithm: divide and conquer](#the-algorithm-divide-and-conquer-1) - [The pseudocode](#the-pseudocode-2) - [Binary Search](#binary-search) - [The Algorithm: "check the middle and half the search space"](#the-algorithm-check-the-middle-and-half-the-search-space) - [The pseudocode](#the-pseudocode-3) - [Bubble Sort Analysis](#bubble-sort-analysis) - [Time Complexity: O(n2)](#time-complexity-onsup2sup) - [Space Complexity: O(1)](#space-complexity-o1) - [When should you use Bubble Sort?](#when-should-you-use-bubble-sort) - [Selection Sort Analysis](#selection-sort-analysis) - [Selection Sort JS Implementation](#selection-sort-js-implementation) - [Time Complexity Analysis](#time-complexity-analysis) - [Space Complexity Analysis: O(1)](#space-complexity-analysis-o1) - [When should we use Selection Sort?](#when-should-we-use-selection-sort) - [Insertion Sort Analysis](#insertion-sort-analysis) - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis) - [When should you use Insertion Sort?](#when-should-you-use-insertion-sort) - [Merge Sort Analysis](#merge-sort-analysis) - [Full code](#full-code) - [Merging two sorted arrays](#merging-two-sorted-arrays) - [Divide and conquer, step-by-step](#divide-and-conquer-step-by-step) - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis-1) - [Quick Sort Analysis](#quick-sort-analysis) - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis-2) - [Binary Search Analysis](#binary-search-analysis) - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis-3) - [Practice: Bubble Sort](#practice-bubble-sort) - [Practice: Selection Sort](#practice-selection-sort) - [Practice: Insertion Sort](#practice-insertion-sort) - [Practice: Merge Sort](#practice-merge-sort) - [Practice: Quick Sort](#practice-quick-sort-2) - [Practice: Binary Search](#practice-binary-search)

[**Lists, Stacks, and Queues**](#lists-stacks-and-queues-) \- [Linked Lists](#linked-lists) - [What is a Linked List?](#what-is-a-linked-list) - [Types of Linked Lists](#types-of-linked-lists) - [Linked List Methods](#linked-list-methods) - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis-4) - [Time Complexity - Access and Search](#time-complexity-access-and-search) - [Time Complexity - Insertion and Deletion](#time-complexity-insertion-and-deletion) - [Space Complexity](#space-complexity-1) - [Stacks and Queues](#stacks-and-queues) - [What is a Stack?](#what-is-a-stack) - [What is a Queue?](#what-is-a-queue) - [Stack and Queue Properties](#stack-and-queue-properties) - [Stack Methods](#stack-methods) - [Queue Methods](#queue-methods) - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis-5) - [When should we use Stacks and Queues?](#when-should-we-use-stacks-and-queues) -

[**Graphs and Heaps**](#graphs-and-heaps-) \- [Introduction to Heaps](#introduction-to-heaps) - [Binary Heap Implementation](#binary-heap-implementation) - [Heap Sort](#heap-sort) - [In-Place Heap Sort](#in-place-heap-sort) -

---

**The objective of this lesson** is get you comfortable with identifying the time and space complexity of code you see. Being able to diagnose time complexity for algorithms is an essential for interviewing software engineers.

At the end of this, you will be able to

1.  Order the common complexity classes according to their growth rate
2.  Identify the complexity classes of common sort methods
3.  Identify complexity classes of codeable with identifying the time and space complexity of code you see. Being able to diagnose time complexity for algorithms is an essential for interviewing software engineers.

At the end of this, you will be able to

1.  Order the common complexity classes according to their growth rate
2.  Identify the complexity classes of common sort methods
3.  Identify complexity classes of code

---

**The objective of this lesson** is to give you a couple of ways to optimize a computation (algorithm) from a higher complexity class to a lower complexity class. Being able to optimize algorithms is an essential for interviewing software engineers.

At the end of this, you will be able to

1.  Apply memoization to recursive problems to make them less than polynomial time.
2.  Apply tabulation to iterative problems to make them less than polynomial time.\*\* is to give you a couple of ways to optimize a computation (algorithm) from a higher complexity class to a lower complexity class. Being able to optimize algorithms is an essential for interviewing software engineers.

At the end of this, you will be able to

1.  Apply memoization to recursive problems to make them less than polynomial time.
2.  Apply tabulation to iterative problems to make them less than polynomial time.

---

A lot of algorithms that we use in the upcoming days will use recursion. The next two videos are just helpful reminders about recursion so that you can get that thought process back into your brain.

---

Colt Steele provides a very nice, non-mathy introduction to Big-O notation. Please watch this so you can get the easy introduction. Big-O is, by its very nature, math based. It's good to get an understanding before jumping in to math expressions.

[Complete Beginner's Guide to Big O Notation](https://www.youtube.com/embed/kS_gr2_-ws8) by Colt Steele.

---

As software engineers, our goal is not just to solve problems. Rather, our goal is to solve problems efficiently and elegantly. Not all solutions are made equal! In this section we'll explore how to analyze the efficiency of algorithms in terms of their speed (_time complexity_) and memory consumption (_space complexity_).

> In this article, we'll use the word _efficiency_ to describe the amount of resources a program needs to execute. The two resources we are concerned with are _time_ and _space_. Our goal is to _minimize_ the amount of time and space that our programs use.

When you finish this article you will be able to:

- explain why computer scientists use Big-O notation
- simplify a mathematical function into Big-O notation

## Why Big-O?

Let's begin by understanding what method we should _not_ use when describing the efficiency of our algorithms. Most importantly, we'll want to avoid using absolute units of time when describing speed. When the software engineer exclaims, "My function runs in 0.2 seconds, it's so fast!!!", the computer scientist is not impressed. Skeptical, the computer scientist asks the following questions:

1.  What computer did you run it on? _Maybe the credit belongs to the hardware and not the software. Some hardware architectures will be better for certain operations than others._
2.  Were there other background processes running on the computer that could have effected the runtime? _It's hard to control the environment during performance experiments._
3.  Will your code still be performant if we increase the size of the input? _For example, sorting 3 numbers is trivial; but how about a million numbers?_

The job of the software engineer is to focus on the software detail and not necessarily the hardware it will run on. Because we can't answer points 1 and 2 with total certainty, we'll want to avoid using concrete units like "milliseconds" or "seconds" when describing the efficiency of our algorithms. Instead, we'll opt for a more abstract approach that focuses on point 3. This means that we should focus on how the performance of our algorithm is affected by increasing the size of the input. **In other words, how does our performance scale?**

> The argument above focuses on _time_, but a similar argument could also be made for _space_. For example, we should not analyze our code in terms of the amount of absolute kilobytes of memory it uses, because this is dependent on the programming language.

## Big-O Notation

In Computer Science, we use Big-O notation as a tool for describing the efficiency of algorithms with respect to the size of the input argument(s). We use mathematical functions in Big-O notation, so there are a few big picture ideas that we'll want to keep in mind:

1.  The function should be defined in terms of the size of the input(s).
2.  A _smaller_ Big-O function is more desirable than a larger one. Intuitively, we want our algorithms to use a minimal amount of time and space.
3.  Big-O describes the worst-case scenario for our code, also known as the upper bound. We prepare our algorithm for the worst case, because the best case is a luxury that is not guaranteed.
4.  A Big-O function should be simplified to show only its most dominant mathematical term.

The first 3 points are conceptual, so they are easy to swallow. However, point 4 is typically the biggest source of confusion when learning the notation. Before we apply Big-O to our code, we'll need to first understand the underlying math and simplification process.

### Simplifying Math Terms

We want our Big-O notation to describe the performance of our algorithm with respect to the input size and nothing else. Because of this, we should to simplify our Big-O functions using the following rules:

- **Simplify Products:** if the function is a product of many terms, we drop the terms that _don't_ depend on the size of the input.
- **Simplify Sums:** if the function is a sum of many terms, we keep the term with the _largest_ growth rate and drop the other terms.

We'll look at these rules in action, but first we'll define a few things:

- **n** is the size of the input
- **T(f)** refers to an unsimplified mathematical **f**unction
- **O(f)** refers to the Big-O simplified mathematical **f**unction

### Simplifying a Product

If a function consists of a product of many factors, we drop the factors that don't depend on the size of the input, n. The factors that we drop are called constant factors because their size remains consistent as we increase the size of the input. The reasoning behind this simplification is that we make the input large enough, the non-constant factors will overshadow the constant ones. Below are some examples:

| Unsimplified           | Big-O Simplified |
| ---------------------- | ---------------- |
| T( 5 \* n2 )           | O( n2 )          |
| T( 100000 \* n )       | O( n )           |
| T( n / 12 )            | O( n )           |
| T( 42 \* n \* log(n) ) | O( n \* log(n) ) |
| T( 12 )                | O( 1 )           |

Note that in the third example, we can simplify `T( n / 12 )` to `O( n )` because we can rewrite a division into an equivalent multiplication. In other words, `T( n / 12 ) = T( 1/12 * n ) = O( n )`.

### Simplifying a Sum

If the function consists of a sum of many terms, we only need to show the term that grows the fastest, relative to the size of the input. The reasoning behind this simplification is that if we make the input large enough, the fastest growing term will overshadow the other, smaller terms. To understand which term to keep, you'll need to recall the relative size of our common math terms from the previous section. Below are some examples:

| Unsimplified     | Big-O Simplified |
| ---------------- | ---------------- |
| T( n3 + n2 + n ) | O( n3 )          |
| T( log(n) + 2n ) | O( 2n )          |
| T( n + log(n) )  | O( n )           |
| T( n! + 10n )    | O( n! )          |

### Putting it all together

The _product_ and _sum_ rules are all we'll need to Big-O simplify any math functions. We just apply the _product rule_ to drop all constants, then apply the _sum rule_ to select the single most dominant term.

| Unsimplified      | Big-O Simplified |
| ----------------- | ---------------- |
| T( 5n2 + 99n )    | O( n2 )          |
| T( 2n + nlog(n) ) | O( nlog(n) )     |
| T( 2n + 5n1000)   | O( 2n )          |

> Aside: We'll often omit the multiplication symbol in expressions as a form of shorthand. For example, we'll write _O( 5n2 )_ in place of _O( 5 \* n2 )_.

## RECAP

- explained why Big-O is the preferred notation used to describe the efficiency of algorithms
- used the product and sum rules to simplify mathematical functions into Big-O notation

---

Analyzing the efficiency of our code seems like a daunting task because there are many different possibilities in how we may choose to implement something. Luckily, most code we write can be categorized into one of a handful of common complexity classes. In this reading, we'll identify the common classes and explore some of the code characteristics that will lead to these classes.

When you finish this reading, you should be able to:

- name _and_ order the seven common complexity classes
- identify the time complexity class of a given code snippet

## The seven major classes

There are seven complexity classes that we will encounter most often. Below is a list of each complexity class as well as its Big-O notation. This list is ordered from _smallest to largest_. Bear in mind that a "more efficient" algorithm is one with a smaller complexity class, because it requires fewer resources.

| Big-O                      | Complexity Class Name                |
| -------------------------- | ------------------------------------ |
| O(1)                       | constant                             |
| O(log(n))                  | logarithmic                          |
| O(n)                       | linear                               |
| O(n \* log(n))             | loglinear, linearithmic, quasilinear |
| O(nc) - O(n2), O(n3), etc. | polynomial                           |
| O(cn) - O(2n), O(3n), etc. | exponential                          |
| O(n!)                      | factorial                            |

There are more complexity classes that exist, but these are most common. Let's take a closer look at each of these classes to gain some intuition on what behavior their functions define. We'll explore famous algorithms that correspond to these classes further in the course.

For simplicity, we'll provide small, generic code examples that illustrate the complexity, although they may not solve a practical problem.

### O(1) - Constant

Constant complexity means that the algorithm takes roughly the same number of steps for any size input. In a constant time algorithm, there is no relationship between the size of the input and the number of steps required. For example, this means performing the algorithm on a input of size 1 takes the same number of steps as performing it on an input of size 128.

#### Constant growth

The table below shows the growing behavior of a constant function. Notice that the behavior stays _constant_ for all values of n.

| n   | O(1) |
| --- | ---- |
| 1   | ~1   |
| 2   | ~1   |
| 3   | ~1   |
| …   | …    |
| 128 | ~1   |

#### Example Constant code

Below is are two examples of functions that have constant runtimes.

The runtime of the `constant1` function does not depend on the size of the input, because only two arithmetic operations (multiplication and addition) are always performed. The runtime of the `constant2` function also does not depend on the size of the input because one-hundred iterations are always performed, irrespective of the input.

### O(log(n)) - Logarithmic

Typically, the hidden base of O(log(n)) is 2, meaning O(log2(n)). Logarithmic complexity algorithms will usual display a sense of continually "halving" the size of the input. Another tell of a logarithmic algorithm is that we don't have to access every element of the input. O(log2(n)) means that every time we double the size of the input, we only require one additional step. Overall, this means that a large increase of input size will increase the number of steps required by a small amount.

#### Logarithmic growth

The table below shows the growing behavior of a logarithmic runtime function. Notice that doubling the input size will only require only one additional "step".

| n   | O(log2(n)) |
| --- | ---------- |
| 2   | ~1         |
| 4   | ~2         |
| 8   | ~3         |
| 16  | ~4         |
| …   | …          |
| 128 | ~7         |

#### Example logarithmic code

Below is an example of two functions with logarithmic runtimes.

The `logarithmic1` function has O(log(n)) runtime because the recursion will half the argument, n, each time. In other words, if we pass 8 as the original argument, then the recursive chain would be 8 -> 4 -> 2 -> 1. In a similar way, the `logarithmic2` function has O(log(n)) runtime because of the number of iterations in the while loop. The while loop depends on the variable `i`, which will be divided in half each iteration.

### O(n) - Linear

Linear complexity algorithms will access each item of the input "once" (in the Big-O sense). Algorithms that iterate through the input without nested loops or recurse by reducing the size of the input by "one" each time are typically linear.

#### Linear growth

The table below shows the growing behavior of a linear runtime function. Notice that a change in input size leads to similar change in the number of steps.

| n   | O(n) |
| --- | ---- |
| 1   | ~1   |
| 2   | ~2   |
| 3   | ~3   |
| 4   | ~4   |
| …   | …    |
| 128 | ~128 |

#### Example linear code

Below are examples of three functions that each have linear runtime.

The `linear1` function has O(n) runtime because the for loop will iterate n times. The `linear2` function has O(n) runtime because the for loop iterates through the array argument. The `linear3` function has O(n) runtime because each subsequent call in the recursion will decrease the argument by one. In other words, if we pass 8 as the original argument to `linear3`, the recursive chain would be 8 -> 7 -> 6 -> 5 -> … -> 1.

### O(n \* log(n)) - Loglinear

This class is a combination of both linear and logarithmic behavior, so features from both classes are evident. Algorithms the exhibit this behavior use both recursion and iteration. Typically, this means that the recursive calls will halve the input each time (logarithmic), but iterations are also performed on the input (linear).

#### Loglinear growth

The table below shows the growing behavior of a loglinear runtime function.

| n   | O(n \* log2(n)) |
| --- | --------------- |
| 2   | ~2              |
| 4   | ~8              |
| 8   | ~24             |
| …   | …               |
| 128 | ~896            |

#### Example loglinear code

Below is an example of a function with a loglinear runtime.

The `loglinear` function has O(n \* log(n)) runtime because the for loop iterates linearly (n) through the input and the recursive chain behaves logarithmically (log(n)).

### O(nc) - Polynomial

Polynomial complexity refers to complexity of the form O(nc) where `n` is the size of the input and `c` is some fixed constant. For example, O(n3) is a larger/worse function than O(n2), but they belong to the same complexity class. Nested loops are usually the indicator of this complexity class.

#### Polynomial growth

Below are tables showing the growth for O(n2) and O(n3).

| n   | O(n2)   |
| --- | ------- |
| 1   | ~1      |
| 2   | ~4      |
| 3   | ~9      |
| …   | …       |
| 128 | ~16,384 |

| n   | O(n3)      |
| --- | ---------- |
| 1   | ~1         |
| 2   | ~8         |
| 3   | ~27        |
| …   | …          |
| 128 | ~2,097,152 |

#### Example polynomial code

Below are examples of two functions with polynomial runtimes.

The `quadratic` function has O(n2) runtime because there are nested loops. The outer loop iterates n times and the inner loop iterates n times. This leads to n \* n total number of iterations. In a similar way, the `cubic` function has O(n3) runtime because it has triply nested loops that lead to a total of n \* n \* n iterations.

### O(cn) - Exponential

Exponential complexity refers to Big-O functions of the form O(cn) where `n` is the size of the input and `c` is some fixed constant. For example, O(3n) is a larger/worse function than O(2n), but they both belong to the exponential complexity class. A common indicator of this complexity class is recursive code where there is a constant number of recursive calls in each stack frame. The `c` will be the number of recursive calls made in each stack frame. Algorithms with this complexity are considered quite slow.

#### Exponential growth

Below are tables showing the growth for O(2n) and O(3n). Notice how these grow large, quickly.

| n   | O(2n)           |
| --- | --------------- |
| 1   | ~2              |
| 2   | ~4              |
| 3   | ~8              |
| 4   | ~16             |
| …   | …               |
| 128 | ~3.4028 \* 1038 |

| n   | O(3n)           |
| --- | --------------- |
| 1   | ~3              |
| 2   | ~9              |
| 3   | ~27             |
| 3   | ~81             |
| …   | …               |
| 128 | ~1.1790 \* 1061 |

#### Exponential code example

Below are examples of two functions with exponential runtimes.

The `exponential2n` function has O(2n) runtime because each call will make two more recursive calls. The `exponential3n` function has O(3n) runtime because each call will make three more recursive calls.

### O(n!) - Factorial

Recall that `n! = (n) * (n - 1) * (n - 2) * ... * 1`. This complexity is typically the largest/worst that we will end up implementing. An indicator of this complexity class is recursive code that has a variable number of recursive calls in each stack frame. Note that _factorial_ is worse than _exponential_ because _factorial_ algorithms have a _variable_ amount of recursive calls in each stack frame, whereas _exponential_ algorithms have a _constant_ amount of recursive calls in each frame.

#### Factorial growth

Below is a table showing the growth for O(n!). Notice how this has a more aggressive growth than exponential behavior.

| n   | O(n!)            |
| --- | ---------------- |
| 1   | ~1               |
| 2   | ~2               |
| 3   | ~6               |
| 4   | ~24              |
| …   | …                |
| 128 | ~3.8562 \* 10215 |

#### Factorial code example

Below is an example of a function with factorial runtime.

The `factorial` function has O(n!) runtime because the code is _recursive_ but the number of recursive calls made in a single stack frame depends on the input. This contrasts with an _exponential_ function because exponential functions have a _fixed_ number of calls in each stack frame.

You may it difficult to identify the complexity class of a given code snippet, especially if the code falls into the loglinear, exponential, or factorial classes. In the upcoming videos, we'll explain the analysis of these functions in greater detail. For now, you should focus on the _relative order_ of these seven complexity classes!

## RECAP

In this reading, we listed the seven common complexity classes and saw some example code for each. In order of ascending growth, the seven classes are:

1.  Constant
2.  Logarithmic
3.  Linear
4.  Loglinear
5.  Polynomial
6.  Exponential
7.  Factorial

---
