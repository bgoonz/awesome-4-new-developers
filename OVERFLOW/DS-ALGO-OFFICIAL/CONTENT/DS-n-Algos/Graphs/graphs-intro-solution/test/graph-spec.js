let chai = require("chai");
chai.use(require("chai-spies"));
const { expect, spy } = chai;

const { Graph } = require("../problems/graph");

describe("Graph Implementation", () => {
  describe("#constructor()", () => {
    it("should initialize an `adjList` to an empty object", () => {
      let graph = new Graph();
      expect(graph).to.have.property("adjList");
      expect(graph.adjList).to.eql({});
    });
  });

  describe("#addVertex(vertex)", () => {
    context("when the vertex is not in the graph", () => {
      it("should initialize a value of a new vertex as an empty array", () => {
        let graph = new Graph();
        graph.addVertex("c");
        expect(graph.adjList).to.eql({
          c: [],
        });
      });
    });

    context("when the vertex is already in the graph", () => {
      it("should not add the vertex", () => {
        let graph = new Graph();
        graph.addVertex("c");
        graph.addVertex("a");
        graph.adjList["c"] = ["a"];
        graph.adjList["a"] = ["c"];
        graph.addVertex("c"); // second entry
        expect(graph.adjList).to.eql({
          c: ["a"],
          a: ["c"],
        });
      });
    });
  });

  describe("#addEdges(edge1, edge2)", () => {
    context("when the graph does not include the edges", () => {
      it("should add the edges into the graph first", () => {
        let graph = new Graph();
        graph.addEdges("f", "a");
        expect(graph.adjList).to.eql({
          f: ["a"],
          a: ["f"],
        });
        graph.addEdges("f", "b");
        expect(graph.adjList).to.eql({
          f: ["a", "b"],
          a: ["f"],
          b: ["f"],
        });
      });
    });
    context("when the graph includes the edges", () => {
      beforeEach(() => {
        graph = new Graph();
        graph.addVertex("f");
        graph.addVertex("a");
        graph.addVertex("b");
      });
      it("should add the edges as neighbors", () => {
        let graph = new Graph();
        graph.addEdges("f", "a");
        expect(graph.adjList).to.eql({
          f: ["a"],
          a: ["f"],
        });
        graph.addEdges("f", "b");
        expect(graph.adjList).to.eql({
          f: ["a", "b"],
          a: ["f"],
          b: ["f"],
        });
      });
    });
  });

  describe("#buildGraph(edgeList)", () => {
    context("takes an edge list as an argument and builds a graph", () => {
      it("should call `#addvertex` and `#addEdge`", () => {
        const edges = [
          ["a", "b"],
          ["a", "c"],
          ["a", "d"],
          ["d", "g"],
          ["b", "c"],
          ["b", "e"],
          ["c", "f"],
          ["c", "g"],
          ["f", "g"],
        ];

        let graph = new Graph();

        const graph1 = {
          a: ["b", "c", "d"],
          b: ["a", "c", "e"],
          c: ["a", "b", "f", "g"],
          d: ["a", "g"],
          g: ["d", "c", "f"],
          e: ["b"],
          f: ["c", "g"],
        };

        expect(graph.buildGraph(edges)).to.eql(graph1);
      });
    });
  });

  describe("#breadthFirstTraversal(startingVertex)", () => {
    let graph;
    const edges = [
      ["a", "b"],
      ["a", "c"],
      ["a", "d"],
      ["d", "g"],
      ["b", "c"],
      ["b", "e"],
      ["c", "f"],
      ["c", "g"],
      ["f", "g"],
      ["h"],
    ];
    beforeEach(() => {
      graph = new Graph();
      for (let edge of edges) {
        if (edge.length === 1) {
          graph.addVertex(edge[0]);
        } else {
          graph.addEdges(edge[0], edge[1]);
        }
      }
    });
    it("should not be recursive", () => {
      spy.on(graph, "breadthFirstTraversal");
      graph.breadthFirstTraversal("a");
      expect(graph.breadthFirstTraversal).to.have.been.called.once;
    });

    it("should return an array of vertices visited in a bfs order", () => {
      expect(graph.breadthFirstTraversal("a")).to.have.ordered.members([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
      ]);
    });
  });

  describe("#depthFirstTraversalIterative(startingVertex)", () => {
    let graph;
    const edges = [
      ["a", "b"],
      ["a", "c"],
      ["a", "d"],
      ["d", "g"],
      ["b", "c"],
      ["b", "e"],
      ["c", "f"],
      ["c", "g"],
      ["f", "g"],
      ["h"],
    ];
    beforeEach(() => {
      graph = new Graph();
      for (let edge of edges) {
        if (edge.length === 1) {
          graph.addVertex(edge[0]);
        } else {
          graph.addEdges(edge[0], edge[1]);
        }
      }
    });
    it("should not be recursive", () => {
      spy.on(graph, "depthFirstTraversalIterative");
      graph.depthFirstTraversalIterative("a");
      expect(graph.depthFirstTraversalIterative).to.have.been.called.once;
    });

    it("should return an array of vertices visited in a dfs order", () => {
      expect(graph.depthFirstTraversalIterative("a")).to.have.ordered.members([
        "a",
        "d",
        "g",
        "f",
        "c",
        "b",
        "e",
      ]);
    });
  });

  describe("#DepthFirstTraversalRecursive(startingVertex)", () => {
    let graph;
    const edges = [
      ["a", "b"],
      ["a", "c"],
      ["a", "d"],
      ["d", "g"],
      ["b", "c"],
      ["b", "e"],
      ["c", "f"],
      ["c", "g"],
      ["f", "g"],
      ["h"],
    ];
    beforeEach(() => {
      graph = new Graph();
      for (let edge of edges) {
        if (edge.length === 1) {
          graph.addVertex(edge[0]);
        } else {
          graph.addEdges(edge[0], edge[1]);
        }
      }
    });
    it("should be recursive", () => {
      spy.on(graph, "depthFirstTraversalRecursive");
      graph.depthFirstTraversalRecursive("a");
      expect(graph.depthFirstTraversalRecursive).to.have.been.called.above(1);
    });

    it("should return an array of vertices visited in a dfs order", () => {
      expect(graph.depthFirstTraversalRecursive("a")).to.have.ordered.members([
        "a",
        "b",
        "c",
        "f",
        "g",
        "d",
        "e",
      ]);
    });
  });
});
