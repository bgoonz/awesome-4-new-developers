function breadthFirstArray(root) {
  const queue = [root];
  const vals = [];

  while (queue.length) {
    const node = queue.shift();
    vals.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return vals;
}

module.exports = {
  breadthFirstArray,
};
