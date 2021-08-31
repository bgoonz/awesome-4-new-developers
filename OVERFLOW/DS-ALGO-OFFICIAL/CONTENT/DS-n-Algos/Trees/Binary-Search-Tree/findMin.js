function findMin(root) {
  if (!root) return null;

  while (root.left) root = root.left;
  return root;
}

module.exports = {
  findMin,
};
