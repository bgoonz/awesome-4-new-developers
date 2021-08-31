function maxValue(node, visited = new Set(), curMax = -Infinity) {
  if (visited.has(node.val)) return curMax;

  visited.add(node.val);
  curMax = Math.max(curMax, node.val);

  node.neighbors.forEach((neighbor) => {
    curMax = maxValue(neighbor, visited, curMax);
  });

  return curMax;
}

module.exports = {
  maxValue,
};
