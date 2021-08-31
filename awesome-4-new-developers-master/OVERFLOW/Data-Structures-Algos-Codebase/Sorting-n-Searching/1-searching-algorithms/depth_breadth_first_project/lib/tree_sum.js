function treeSum(root) {
  if (!root) return 0;
  let queue = [root];
  let res = 0;
  while (queue.length) {
    let node = queue.pop();
    res += node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return res;
}

module.exports = {
  treeSum,
};
