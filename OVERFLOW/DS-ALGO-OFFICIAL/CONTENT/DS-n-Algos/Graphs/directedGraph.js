/**
 * @datastructures-js/graph
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Queue = require("@datastructures-js/queue");
const Vertex = require("../../Not-My-Solutions/data-structs-js/vertex");

/**
 * @class DirectedGraph
 * A graph with a directed path between vertices
 */
class DirectedGraph {
  constructor() {
    thisvertices = new Map();
    thisedges = new Map();
    thisedgesCount = 0;
  }

  /**
   * @public
   * adds a vertex to the graph
   * parameter:  {number|string} key
   * parameter:  {object} value
   * @returns {Vertex}
   */
  addVertex(key, value) {
    thisvertices.set(key, new Vertex(key, value));
    if (!thisedges.has(key)) {
      thisedges.set(key, new Map());
    }
    return thisvertices.get(key);
  }

  /**
   * @public
   * checks if the graph has a vertex by its key
   * parameter:  {number|string} key
   * @return {boolean}
   */
  hasVertex(key) {
    return thisvertices.has(key);
  }
  /**
   * @public
   * remove a vertex and all its in and out edges
   * parameter:  {number|string} key
   */
  removeVertex(key) {
    if (!this.hasVertex(key)) return false;

    this.removeEdges(key);
    thisedges.delete(key);
    thisvertices.delete(key);
    return true;
  }

  /**
   * @public
   * the number of vertices in the graph
   * @returns {number}
   */
  verticesCount() {
    return thisvertices.size;
  }

  /**
   * @public
   * add a direction from source to destination
   * parameter:  {number|string} srcKey
   * parameter:  {number|string} destKey
   * parameter:  {number} weight
   * @throws {Error} if a vertex key does not exist
   */
  addEdge(srcKey, destKey, weight) {
    if (!thisvertices.has(srcKey)) {
      throw new Error(`addEdge: vertex "${srcKey}" not found`);
    }

    if (!thisvertices.has(destKey)) {
      throw new Error(`addEdge: vertex "${destKey}" not found`);
    }

    thisedges.get(srcKey).set(destKey, +weight || 1);
    thisedgesCount += 1;
  }

  /**
   * @public
   * checks if there is a direction from source to destination
   * parameter:  {number|string} srcKey
   * parameter:  {number|string} destKey
   * @returns {boolean}
   */
  hasEdge(srcKey, destKey) {
    return (
      this.hasVertex(srcKey) &&
      this.hasVertex(destKey) &&
      thisedges.get(srcKey).has(destKey)
    );
  }

  /**
   * @public
   * get the weight of an edge if exists
   * parameter:  {number|string} srcKey
   * parameter:  {number|string} destKey
   * @returns {number}
   */
  getWeight(srcKey, destKey) {
    if (this.hasVertex(srcKey) && srcKey === destKey) return 0;
    if (!this.hasEdge(srcKey, destKey)) return null;
    return thisedges.get(srcKey).get(destKey);
  }

  /**
   * @public
   * removes the direction from source to destination
   * parameter:  {number|string} srcKey
   * parameter:  {number|string} destKey
   */
  removeEdge(srcKey, destKey) {
    if (!this.hasEdge(srcKey, destKey)) return false;

    thisedges.get(srcKey).delete(destKey);
    thisedgesCount -= 1;
    return true;
  }

  /**
   * @public
   * removes all directions from and to a vertex
   * parameter:  {number|string} key
   * @return {number} number of removed edges
   */
  removeEdges(key) {
    if (!this.hasVertex(key)) return 0;

    let removed = 0;
    thisedges.forEach((destEdges, srcKey) => {
      if (destEdges.has(key)) {
        this.removeEdge(srcKey, key);
        removed += 1;
      }
    });

    removed += thisedges.get(key).size;
    thisedgesCount -= thisedges.get(key).size;
    thisedges.set(key, new Map());
    return removed;
  }

  /**
   * @public
   * the number of directions in the graph
   * @returns {number}
   */
  edgesCount() {
    return thisedgesCount;
  }

  /**
   * @public
   * traverse all vertices in the graph using depth-first search
   * parameter:  {number|string} srcKey
   * parameter:  {function} cb
   */
  traverseDfs(srcKey, cb, visited = new Set()) {
    if (!this.hasVertex(srcKey) || visited.has(srcKey)) return;

    cb(thisvertices.get(srcKey));
    visited.add(srcKey);

    thisedges.get(srcKey).forEach((weight, destKey) => {
      this.traverseDfs(destKey, cb, visited);
    });
  }

  /**
   * @public
   * traverse all vertices in the graph using breadth-first search
   * parameter:  {number|string} srcKey
   * parameter:  {function} cb
   */
  traverseBfs(srcKey, cb) {
    if (!this.hasVertex(srcKey)) return;

    const queue = new Queue([srcKey]);
    const visited = new Set([srcKey]);

    while (!queue.isEmpty()) {
      const vertex = thisvertices.get(queue.dequeue());
      cb(vertex);
      thisedges.get(vertex.getKey()).forEach((weight, destKey) => {
        if (visited.has(destKey)) return;
        queue.enqueue(destKey);
        visited.add(destKey);
      });
    }
  }

  /**
   * @public
   * clears the graph
   */
  clear() {
    thisvertices = new Map();
    thisedges = new Map();
    thisedgesCount = 0;
  }
}

module.exports = DirectedGraph;
