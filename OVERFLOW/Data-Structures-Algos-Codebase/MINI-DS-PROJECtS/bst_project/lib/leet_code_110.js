// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

function isBalanced(root) {
  if (!root) return true;

  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(node) {
  if (!node) {
    return -1;
  } else {
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }
}
