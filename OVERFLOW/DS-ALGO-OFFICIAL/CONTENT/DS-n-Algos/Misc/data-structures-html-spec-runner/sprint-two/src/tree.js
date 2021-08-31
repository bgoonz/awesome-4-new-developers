var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = {};

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var keys = Object.keys(this.children).length;
  // this.children[keys] = Object.create(treeMethods);
  this.children[keys] = {};
  _.extend(this.children[keys], treeMethods);
  this.children[keys].value = value;
  this.children[keys].children = {};
};

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  }

  for (var k in this.children) {
    if (this.children[k].value === target) {
      return true;
    }
    if (Object.keys(this.children[k].children).length) {
      if (this.children[k].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
