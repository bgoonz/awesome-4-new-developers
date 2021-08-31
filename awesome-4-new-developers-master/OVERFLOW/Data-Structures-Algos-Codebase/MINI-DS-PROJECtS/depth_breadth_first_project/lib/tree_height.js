function treeHeight(root, height = -1) {
  if (!root) return height;
  height++;
  const left = treeHeight(root.left, height);
  const right = treeHeight(root.right, height);
  const maxHeight = Math.max(left, right);

  return maxHeight;
}

module.exports = {
  treeHeight,
};
