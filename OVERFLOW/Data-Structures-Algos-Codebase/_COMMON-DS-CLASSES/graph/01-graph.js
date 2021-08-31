/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

class Graph {
  constructor() {
    this.edges = {};
  }

  addNode(node) {
    if (!this.edges[node]) {
      this.edges[node] = [];
    }
  }

  addBidirectionalEdge(n1, n2) {
    this.addEdge(n1, n2);
    this.addEdge(n2, n1);
  }

  addEdge(start, end) {
    this.edges[start].push(end);
  }

  getNeighbours(start) {
    return this.edges[start];
  }
}

const gg = new Graph();
gg.addNode("Rajasthan");
gg.addNode("Gujrat");
gg.addNode("Uttar Pradesh");
gg.addNode("Madhya Pradesh");
gg.addNode("Maharashtra");

gg.addBidirectionalEdge("Rajasthan", "Gujrat");
gg.addBidirectionalEdge("Rajasthan", "Uttar Pradesh");
gg.addBidirectionalEdge("Gujrat", "Uttar Pradesh");
gg.addBidirectionalEdge("Gujrat", "Maharashtra");
gg.addBidirectionalEdge("Gujrat", "Madhya Pradesh");
gg.addBidirectionalEdge("Uttar Pradesh", "Madhya Pradesh");
gg.addBidirectionalEdge("Maharashtra", "Madhya Pradesh");

console.log("Neighbour(Rajasthan) -> " + gg.getNeighbours("Rajasthan"));
console.log("Neighbour(Gujrat) -> " + gg.getNeighbours("Gujrat"));
console.log(
  "Neighbour(Madhya Pradesh) -> " + gg.getNeighbours("Madhya Pradesh")
);

function breadthFirstSearch() {
  let cityGraph = ["Rajasthan"];

  let visited = {};

  while (cityGraph.length > 0) {
    let node = cityGraph.shift();
    console.log(node);
    visited[node] = true;
    for (let neighbour of gg.getNeighbours(node)) {
      if (!visited[neighbour]) {
        cityGraph.push(neighbour);
        visited[neighbour] = true;
      }
    }
  }
}

function depthFirstSearch() {
  let cityGraph = ["Rajasthan"];

  let visited = {};

  while (cityGraph.length > 0) {
    let node = cityGraph.pop();
    console.log(node);
    visited[node] = true;
    for (let neighbour of gg.getNeighbours(node)) {
      if (!visited[neighbour]) {
        cityGraph.push(neighbour);
        visited[neighbour] = true;
      }
    }
  }
}

console.log("");
console.log("Breadth first ->");
breadthFirstSearch();
console.log("");
console.log("Depth first ->");
depthFirstSearch();
