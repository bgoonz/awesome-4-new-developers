var makeTree = function () {
  var newTree = {};
  newTree.value = undefined;
  newTree.parent = null;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (val) {
  var child = makeTree();
  child.value = val;
  this.children.push(child);
  child.parent = this;
};

treeMethods.contains = function (val) {
  var found = false;
  _.each(this.children, function (child) {
    child.value === val && (found = true);
  });

  treeMethods.removeFromParent = function (i) {
    this.children[i].parent = null;
    this.children.splice(i, 1);
  };

  return found;
};
