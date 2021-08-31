class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  addEdges(srcValue, destValue) {
    this.addVertex(srcValue);
    this.addVertex(destValue);
    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }
  buildGraph(edges) {
    for (let edge of edges) {
      if (edge.length === 1) {
        this.addVertex(edge[0]); // if we have a vertex with no edges
      } else {
        this.addEdges(edge[0], edge[1]);
      }
    }
    return this.adjList;
  }
  breadthFirstTraversal(startingVertex) {
    const visited = new Set();
    const vertices = [];
    const queue = [startingVertex];
    while (queue.length) {
      let currentVertex = queue.shift();
      if (visited.has(currentVertex)) continue;
      visited.add(currentVertex);
      vertices.push(currentVertex);
      queue.push(...this.adjList[currentVertex]);
    }
    return vertices;
  }
  depthFirstTraversalIterative(startingVertex) {
    const visited = new Set();
    const vertices = [];
    const stack = [startingVertex];
    while (stack.length) {
      let currentVertex = stack.pop();
      if (visited.has(currentVertex)) continue;
      visited.add(currentVertex);
      vertices.push(currentVertex);
      stack.push(...this.adjList[currentVertex]);
    }
    return vertices;
  }
  depthFirstTraversalRecursive(
    startingVertex,
    visited = new Set(),
    vertices = []
  ) {
    if (visited.has(startingVertex)) return;
    visited.add(startingVertex);
    vertices.push(startingVertex);
    for (let neighbor of this.adjList[startingVertex]) {
      this.depthFirstTraversalRecursive(neighbor, visited, vertices);
    }
    return vertices;
  }
}
module.exports = {
  Graph,
};
//---------------------------(testing)---------------------------
/* 
const di = {
  a: ['b', 'c', 'd'],
  b: ['a', 'c', 'e'],
  c: ['a', 'b', 'f', 'g'],
  d: ['a', 'g'],
  g: ['d', 'c', 'f'],
  e: ['b'],
  f: ['c', 'g']
}
const edges = 
[['a', 'b'],
['a', 'c'],
['a', 'd'],
['d', 'g'],
['b', 'c'],
['b', 'e'],
['c', 'f'],
['c', 'g'],
['f', 'g']]
const graph = new Graph();
console.log(graph.buildGraph(edges))
console.log(graph.breadthFirstTraversal('a')); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
console.log(graph.depthFirstTraversalIterative('a')); // [ 'a', 'd', 'g', 'f', 'c', 'b', 'e' ]
console.log(graph.depthFirstTraversalRecursive('a')); // [ 'a', 'b', 'c', 'f', 'g', 'd', 'e' ]
*/
