// ------------------------
// Instantiate a new graph
var Graph = function () {};
// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this[node] = {};
};
// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return !!this[node];
};
// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  delete this[node];
};
// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  return !!this[fromNode].hasOwnProperty(toNode);
};
// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this[fromNode][toNode] = toNode;
  this[toNode][fromNode] = fromNode;
};
// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];
};
// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  _.each(this, function (vertex, key) {
    cb(key);
  });
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
