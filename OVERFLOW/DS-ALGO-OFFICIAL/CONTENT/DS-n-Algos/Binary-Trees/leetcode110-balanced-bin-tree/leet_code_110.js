// View the full problem and run the test cases at:
//  https:///problems/balanced-binary-tree/

const { getHeight } = require("./getHeight");

function isBalanced(root) {
  if (!root) return true;
  let heightDifference =
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return heightDifference && isBalanced(root.left) && isBalanced(root.right);
}
