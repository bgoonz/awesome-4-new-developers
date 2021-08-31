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

  insert(val) {
    const node = new TreeNode(val);
    if (!this.root) return (this.root = node);

    let curRoot = this.root;
    let prevRoot = this.root;
    while (curRoot) {
      prevRoot = curRoot;
      if (val < curRoot.val) {
        curRoot = curRoot.left;
        if (!curRoot) {
          prevRoot.left = node;
          return;
        }
      } else {
        curRoot = curRoot.right;
        if (!curRoot) {
          prevRoot.right = node;
          return;
        }
      }
    }
  }

  searchRecur(val, root = this.root) {
    if (!root) return false;

    if (val < root.val) return this.searchRecur(val, root.left);
    if (val > root.val) return this.searchRecur(val, root.right);

    return true;
  }

  searchIter(val) {
    let curNode = this.root;

    while (curNode) {
      if (val === curNode.val) {
        return true;
      } else if (val < curNode.val) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }

    return false;
  }
}

module.exports = {
  TreeNode,
  BST,
};
