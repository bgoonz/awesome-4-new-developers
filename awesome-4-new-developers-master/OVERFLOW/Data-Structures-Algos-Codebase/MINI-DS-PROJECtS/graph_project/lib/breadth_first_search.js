function breadthFirstSearch(startingNode, targetVal) {
  const queue = [startingNode];
  const visited = new Set();

  while (queue.length) {
    const curNode = queue.shift();
    if (curNode.val === targetVal) return curNode;
    visited.add(curNode);
    curNode.neighbors.forEach((node) => {
      if (!visited.has(node)) queue.push(node);
    });
  }

  return null;
}

module.exports = {
  breadthFirstSearch,
};
