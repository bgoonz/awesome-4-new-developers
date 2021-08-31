// Leetcode 108
// Language: Javascript
// Problem: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Author: Bryan Guner
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  return generate(nums, 0, nums.length - 1);
};

var generate = (nums, start, end) => {
  if (start > end) {
    return null;
  }
  const midIndex = start + parseInt((end - start) / 2);
  const midVal = nums[midIndex];

  const node = new TreeNode(midVal);
  node.left = generate(nums, start, midIndex - 1);
  node.right = generate(nums, midIndex + 1, end);

  return node;
};
