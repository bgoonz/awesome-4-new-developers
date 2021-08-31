function treeSum(root) {
  if (!root) return 0;

  return root.val + treeSum(root.left) + treeSum(root.right);
}

module.exports = {
  treeSum,
};
