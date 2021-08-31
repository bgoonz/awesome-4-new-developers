class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(val, root = this.root) {
    let newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    if (newNode.val < root.val) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insert(val, root.left);
      }
    }
    if (newNode.val >= root.val) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insert(val, root.right);
      }
    }
  }
  searchRecur(val, root = this.root) {
    if (!root) {
      return false;
    }
    if (root.val === val) {
      return true;
    }
    let found = false;
    if (val < root.val) {
      found = this.searchRecur(val, root.left);
    } else {
      found = this.searchRecur(val, root.right);
    }
    return found;
  }
  searchIter(val) {
    if (!this.root) {
      return false;
    }
    let found = false;
    let curr = this.root;
    while (!found) {
      if (!curr) {
        return false;
      }
      if (val === curr.val) {
        found = true;
        return true;
      }
      if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }
}
module.exports = {
  TreeNode,
  BST,
};
