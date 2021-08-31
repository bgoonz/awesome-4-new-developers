// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  const midIdx = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[midIdx]);

  if (midIdx === 0) return root;
  root.left = sortedArrayToBST(nums.slice(0, midIdx));
  root.right = sortedArrayToBST(nums.slice(midIdx + 1));

  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
