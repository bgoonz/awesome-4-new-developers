function depthFirstSearch(root, targetVal) {
  if (root.val === targetVal) return root;
  const left = root.left ? depthFirstSearch(root.left, targetVal) : null;
  if (left) return left;
  const right = root.right ? depthFirstSearch(root.right, targetVal) : null;
  if (right) return right;
  return null;
}

module.exports = {
  depthFirstSearch,
};
