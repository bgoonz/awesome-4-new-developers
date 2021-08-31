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

class Tree {
  constructor() {
    this.root = null;
  }

  // visit every node in the tree and return value
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

  sum() {
    return this._sum(this.root);
  }

  _sum(current) {
    if (current === null) {
      return 0;
    }
    return current.data + this._sum(current.left) + this._sum(current.right);
  }

  contains(value) {
    return this._contains(this.root, value);
  }

  _contains(current, value) {
    if (current === null) {
      return false;
    }
    if (current.data === value) {
      return true;
    }
    return (
      this._contains(current.left, value) ||
      this._contains(current.right, value)
    );
  }

  // return total number of nodes
  size() {
    return this._size(this.root);
  }

  _size(current) {
    if (current === null) {
      return 0;
    }
    return 1 + this._size(current.left) + this._size(current.right);
  }

  // return total number of leaf nodes
  leaves() {
    return this._leaves(this.root);
  }

  _leaves(current) {
    if (current === null) {
      return 0;
    }
    if (current.left === null && current.right === null) {
      return 1;
    }
    return this._leaves(current.left) + this._leaves(current.right);
  }

  min() {
    return this._min(this.root);
  }

  _min(current) {
    if (current === null) {
      return undefined;
    }
    let leftMin = this._min(current.left);
    let rightMin = this._min(current.right);
    let res = current.data;
    if (leftMin < rightMin) {
      res = leftMin;
    }
    if (rightMin < leftMin) {
      res = rightMin;
    }
    if (current.data < leftMin && current.data < rightMin) {
      res = current.data;
    }
    return res;
  }

  max() {
    return this._max(this.root);
  }

  _max(current) {
    if (current === null) {
      return undefined;
    }
    let leftMin = this._min(current.left);
    let rightMin = this._min(current.right);
    let res = current.data;
    if (current.data > leftMin && current.data > rightMin) {
      res = current.data;
    } else if (leftMin > rightMin) {
      res = leftMin;
    } else {
      res = rightMin;
    }
    return res;
  }

  height() {
    return this._height(this.root);
  }

  _height(current) {
    if (current === null) {
      return 0;
    }
    let leftHeight = this._height(current.left);
    let rightHeight = this._height(current.right);
    if (leftHeight > rightHeight) {
      return 1 + leftHeight;
    } else {
      return 1 + rightHeight;
    }
  }
}

const n1 = new TreeNode(60);
const n2 = new TreeNode(50);
const n3 = new TreeNode(20);
const n4 = new TreeNode(30);
const n5 = new TreeNode(40);
const tree = new Tree();
tree.root = n1;
n1.left = n2;
n1.right = n3;
n2.left = n4;
n3.right = n5;

const log = console.log;
log(tree.collect());
log(tree.sum());
log(tree.contains(30));
log(tree.size());
log(tree.leaves());
log("Min value ->" + tree.min());
log("Max value ->" + tree.max());
log("Height ->" + tree.height());
// test('tree', () => {
//   expect(tree('Ashish')).toEqual('Ashish')
// })
