function maxValue(node, visited = new Set()) {
  if (visited.has(node.val)) return;
  visited.add(node.val);
  for (let neighbor of node.neighbors) {
    maxValue(neighbor, visited);
  }

  return Math.max(...Array.from(visited));
}

function maxValue2(node, visited = new Set()) {
  if (visited.has(node)) return -Infinity;
  visited.add(node);
  let neighborMaxes = node.neighbors.map((neighbor) =>
    maxValue2(neighbor, visited)
  );
  return Math.max(node.val, ...neighborMaxes);
}

module.exports = {
  maxValue,
};
