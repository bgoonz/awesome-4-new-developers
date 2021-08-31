/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this._add(this.root, value);
    }
  }

  _add(current, value) {
    if (value < current.data && current.left === null) {
      current.left = new TreeNode(value);
    } else if (value > current.data && current.right === null) {
      current.right = new TreeNode(value);
    } else if (value < current.data) {
      this._add(current.left, value);
    } else {
      this._add(current.right, value);
    }
  }

  collect() {
    return this._collect(this.root, []);
  }

  _collect(current, result) {
    if (current === null) {
      return result;
    }
    result.push(current.data);
    this._collect(current.left, result);
    this._collect(current.right, result);
    return result;
  }

  contains(value) {
    return this._contains(this.root, value);
  }

  _contains(node, value) {
    if (node === null) {
      return false;
    }
    if (value === node.data) {
      return true;
    }
    if (value < node.data) {
      this._contains(node.left, value);
    }
    if (value > node.data) {
      this._contains(node.right, value);
    }
  }
}

let tree = new BinarySearchTree();
tree.add(4);
tree.add(2);
tree.add(6);
tree.add(1);
tree.add(3);
tree.add(5);
tree.add(7);
console.log(tree.collect());
