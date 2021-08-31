// Tree

"use strict";

{
  class Tree {
    constructor() {
      this.root = { data: null, children: [], isRoot: true };
      this.v = {};
      this.e = [];
      Object.freeze(this);
    }
    addEdge(node, data) {
      const newNode = { data, children: [] };
      this.v[data] = newNode;
      node.children.push(newNode);
      this.e.push([node, newNode]);
      return newNode;
    }
  }

  Object.assign(self, { Tree });

  test();

  function test() {
    const t = new Tree();
    t.addEdge(t.root, "a");
    t.addEdge(t.root, "b");
    t.addEdge(t.root, "c");
    t.addEdge(t.v.a, "a1");
    t.addEdge(t.v.b, "b1");
    t.addEdge(t.v.c, "c1");
    t.addEdge(t.v.a, "a2");
    t.addEdge(t.v.b, "b2");
    t.addEdge(t.v.c, "c2");
    Object.assign(self, { t });
    console.log(t);
  }
}
