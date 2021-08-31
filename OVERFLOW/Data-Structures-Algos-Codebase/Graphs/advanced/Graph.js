// Graph
"use strict";

{
  class Graph {
    constructor() {
      this.nodes = new Set();
      this.edges = new Map();
    }
    addNode(s) {
      this.nodes.add(s);
    }
    addEdge(s1, s2) {
      this.addNode(s1);
      this.addNode(s2);
      let s1Edges = this.edges.get(s1);
      if (!s1Edges) {
        s1Edges = new Set();
        this.edges.set(s1, s1Edges);
      }
      s1Edges.add(s2);
    }
    bfs(node) {
      if (!node) {
        node = [...this.nodes][0];
      }
      const that = this;
      return {
        get [Symbol.iterator]() {
          return () => iterative_bfs(that, node);
        },
      };
      function* iterative_bfs(g, v) {
        const q = [v];
        const marked = new Set();
        marked.add(v);
        while (q.length) {
          const t = q.pop();
          yield t;
          const tEdges = that.edges.get(t);
          for (const adjacentNode of tEdges) {
            if (!marked.has(adjacentNode)) {
              marked.add(adjacentNode);
              q.unshift(adjacentNode);
            }
          }
        }
      }
    }
  }

  Object.assign(self, {
    Graph,
  });

  test_graph();

  function test_graph() {
    const g = new Graph();
    g.addEdge("a", "b");
    g.addEdge("a", "c");
    g.addEdge("a", "d");
    g.addEdge("b", "c");
    g.addEdge("c", "a");
    g.addEdge("d", "a");
    Object.assign(self, {
      g,
    });
    console.log(g);
  }
}
