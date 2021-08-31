function numRegions(graph) {
  let visited = new Set();
  let regions = 0;

  for (let node in graph) {
    if (isNewRegion(node, graph, visited)) regions++;
  }

  return regions;
}

function isNewRegion(node, graph, visited) {
  if (visited.has(node)) return false;

  visited.add(node);

  graph[node].forEach((neighbor) => {
    isNewRegion(neighbor, graph, visited);
  });

  return true;
}

module.exports = {
  numRegions,
};
