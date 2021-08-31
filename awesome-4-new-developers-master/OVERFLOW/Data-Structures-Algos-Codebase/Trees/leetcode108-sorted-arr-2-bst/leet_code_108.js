// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  let midIdx = Math.floor(nums.length / 2);

  // we use the middle element of the array as our root
  let root = new TreeNode(nums[midIdx]);

  // the root's left subtree is a recursive call on the left side of the array
  root.left = sortedArrayToBST(nums.slice(0, midIdx));

  // the root's right subtree is a recursive call on the right side of the array
  root.right = sortedArrayToBST(nums.slice(midIdx + 1));

  return root;
}
