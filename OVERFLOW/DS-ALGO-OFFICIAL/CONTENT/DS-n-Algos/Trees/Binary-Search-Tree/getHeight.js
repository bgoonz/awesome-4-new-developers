function getHeight(root) {
  if (!root) return -1;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

module.exports = {
  getHeight,
};
