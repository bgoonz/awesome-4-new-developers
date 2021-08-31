// Leetcode 111
// Language: Javascript
// Problem: https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Author: Bryan Guner
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
const minDepth = (root) => {
  if (root === null) {
    return 0;
  }

  const queue = [];

  queue.push(root);

  let height = 1;

  let curLvlCnt = 1;
  let nextLvlCnt = 0;

  while (queue.length !== 0) {
    const node = queue.shift();

    curLvlCnt--;

    if (node.left) {
      queue.push(node.left);
      nextLvlCnt++;
    }
    if (node.right) {
      queue.push(node.right);
      nextLvlCnt++;
    }

    if (node.left === null && node.right === null) {
      return height;
    }

    if (curLvlCnt === 0) {
      height++;
      curLvlCnt = nextLvlCnt;
      nextLvlCnt = 0;
    }
  }

  return height;
};
