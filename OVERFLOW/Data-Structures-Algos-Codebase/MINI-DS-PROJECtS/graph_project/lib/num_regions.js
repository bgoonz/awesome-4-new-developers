function numRegions(graph) {
  const visited = new Set();
  let connected = new Set();
  let regions = 0;

  for (let node in graph) {
    if (visited.has(node)) continue;
    visited.add(node);
    if (!connected.has(node)) {
      let connected = new Set();
      connected.add(node);
      regions++;
    }

    graph[node].forEach((neighbor) => {
      connected.add(neighbor);
    });
  }
  return regions;
}

module.exports = {
  numRegions,
};
