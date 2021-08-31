function maxValue(node, visited = new Set()) {
  if (visited.has(node.val)) return -Infinity;
  visited.add(node.val);
  let maxes = [];
  node.neighbors.forEach((neighbor) => {
    maxes.push(maxValue(neighbor, visited, maxes));
  });
  return Math.max(node.val, ...maxes);
}

module.exports = {
  maxValue,
};
