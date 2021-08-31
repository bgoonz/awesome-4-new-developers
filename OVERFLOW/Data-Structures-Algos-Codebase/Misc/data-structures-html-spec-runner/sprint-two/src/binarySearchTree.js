var BinarySearchTree = function (value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = Object.create(BinarySearchTree.prototype);
  obj.right = Object.create(BinarySearchTree.prototype);
  return obj;
};

BinarySearchTree.prototype.insert = function (node) {
  if (Object.keys(this).length) {
    if (this.value < node) {
      this.right.insert(node);
    } else {
      this.left.insert(node);
    }
  } else {
    this.value = node;
    this.left = Object.create(BinarySearchTree.prototype);
    this.right = Object.create(BinarySearchTree.prototype);
  }
};

BinarySearchTree.prototype.contains = function (target) {
  if (this.value < target) {
    return this.right.contains(target);
  }
  if (this.value > target) {
    return this.left.contains(target);
  }
  return this.value === target;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  if (Object.keys(this).length) {
    callback(this.value);
    this.left.depthFirstLog(callback);
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(log(n))
 */
