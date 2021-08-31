```js
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

    // console.log("VAL::::::" ,val)
    // console.log("ROOT VAL:::::", root.val)
    let found = false;
    if (val < root.val) {
      found = this.searchRecur(val, root.left);
    } else {
      found = this.searchRecur(val, root.right);
    }

    return found;

    //     value :7

    //     searchRecur (7, 5)
    //           10
    //       5       16
    //    1    7         16
    // postOrder.push(...postOrderArray(roo.left));
    // postOrder.push(...postOrderArray(roo.right));
    // postOrder.push(roo.val);

    // if (val < root.val) {
    //    // console.log("ROOOT LEFT:::", root.left)
    //    // console.log("VALUE:::", val)
    //     if (root.left=== val) {

    //         return true;
    //     } else {
    //         return this.searchRecur(val, root.left);
    //     }
    // }else {
    //     if (root.right === val) {
    //         return true;
    //     } else {
    //         return this.searchRecur(val, root.right);
    //     }
    // }

    // return false;
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

/*
    BST
    #constructor()
      ✓ should initialize the `root` property to null
    #insert(val)
      ✓ should insert a TreeNode with the given value into the BST
      when the BST is empty
        ✓ should correctly insert a TreeNode with the given val as the root
    #searchRecur(val)
      ✓ should return false if the BST is empty
      ✓ should be recursive
      when the val is contained in the BST
        ✓ should return true
      when the val is not contained in the BST
        ✓ should return false
    #searchIter(val)
      ✓ should return false if the BST is empty
      ✓ should be iterative, not recursive
      when the val is contained in the BST
        ✓ should return true
      when the val is not contained in the BST
        ✓ should return false

  findMin()
    when the tree is empty
      ✓ should return null
    when the root has no children
      ✓ should return the root
    when the root only has right children
      ✓ should return the root
    when the root has left children
      ✓ should return the leftmost child of the root

  getHeight()
    ✓ should return -1 for an empty root
    ✓ should correctly return the height of a balanced tree
    ✓ should correctly return the height of an unbalanced tree
*/

module.exports = {
  TreeNode,
  BST,
};
```

---

```js

```

---

```js

```
