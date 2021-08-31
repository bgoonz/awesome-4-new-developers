# Example Binary Tree

### Visual Aid

---

## ![picture alt](https://assets.aaonline.io/data_structures_algorithms/trees/images/graph_a.png)

---

### Example Code

---

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
```

---

---

# Terms

- tree - graph with no cycles
- binary tree - tree where nodes have at most 2 nodes
- root - the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent
- internal node - a node that has children
- leaf - a node that does not have any children
- path - a series of nodes that can be traveled through edges - for example A, B, E is a path through the above tree

---

# Search Patterns

- Breadth First Search - Check all nodes at a level before moving down a level
  - Think of this of searching horizontally in rows
- Depth First Search - Check the depth as far as it goes for one child, before
  moving on to the next child.
  - Think of this as searching vertically in diagonals
  - Pre-Order Traversal - Access the data of the current node, recursively visit the left sub tree, recursively visit the right sub tree
    - All the way to the left, top down, going right after other options have already been logged.
  - In-Order Traversal - Recursively visit the left sub tree, access the data of the current node, recursively visit the right sub tree
    - In the order they were the "current root", the actual return order of the recursive calls.
  - Post-Order Traversal - Recursively visit the left sub tree, recursively visit the right sub tree, access the data of the current node.
    - Starting with the bottom most nodes working up through the tree

---

# Constraints

- Binary trees have at most two children per node
- Given any node of the tree, the values on the left must be strictly less than that node
- Given any node of the tree, the values on the right must be strictly greater than or equal to that node
- Given these constraints a binary tree is necessarily a sorted data structure
- The worst binary trees devolve into a linked list, the best are height balanced (think branching).

---

# PseudoCode For Insertion

- Create a new node
- Start at the root
  - Check if there is a root
    - If not the root becomes the new node
  - If there is a root check if the value of the new node is equal to, greater then, or less then the value of the root
    - If it is greater or equal to
      - Check to see if there is a node to the right
        - If there is, move to the new node and continue with the node to the right as the subtree root
        - If there is not, add the new node as the right property of the current node
    - If it is smaller
      - Check to see if there is a node to the left
        - If there is, move to the new node and continue with the node to the left as the subtree root
        - If there is not, add the new node as the left property of the current node

---

# PseudoCode For Search Of A single Item

- Start at the root
  - Check if there is a root
    - If not, there is nothing in the tree, so the search is over
  - If there is a root, check if the value of the root is equal to, greater then, or less then the value were looking for;
    - If it is equal to the value
      - We found what we are searching for
    - If it is less than the value
      - Check to see if there is a node to the left
        - If there isn't
          - the value isn't in our tree
        - If there is
          - repeat these steps with the node to the left as the new subtree root
    - If it is greater than the value
      - Check to see if there is a node to the right
        - If there isn't
          - the value isn't in our tree
        - If there is
          - repeat these steps with the node to the right as the new subtree root

---

# PseudoCode For Breadth First Search Traversal

- Create a queue class or use an array
- Create a variable to store the values of the nodes visited
- Place the root in the queue
- Loop as many times as there are items in the queue
  - Dequeue a node
  - If there is a left value to the node dequeued, add it to the queue
  - If there is a right value to the node dequeued, add it to the queue
  - Push the nodes value into the variable that stores nodes visited

---

# PseudoCode For Depth First Search Traversal

## Pre-Order

#### Iterative

- Create a stack class or use an array
- Push the root into the stack
- Create a variable to store the values of the nodes visited
- Do this as long as there is something on the stack
  - Pop a node from the stack
  - Push that nodes value into the variable that stores nodes visited.
  - If there is a node to the right push it into the stack
  - If there is a node to the left push it into the stack
- Return the variable storing the values

#### Recursive

- Create a variable to store the current root
- Push the value of current root to the variable storing the values
- If the current root has a left propety call the function on that the left property
- If the current root has a right propety call the function on that the right property
- Spread the current root, the left values, and the right values

## In-Order

#### Iterative

- Create a stack class or use an array
- Create a variable to store the current root
- Create a variable to store the values of the nodes visited
- Create a loop
  - While the current root exists
    - push the current root to the call stack
    - current root is equal to the left of current root
  - if the stack is empty break out of the loop
  - set a variable to equal the popped value of the stack
  - push that variable into the variable that stores values
  - set the current root to the right of the current loop
- Return the variable storing the values

#### Recursive

- Create a variable to store the current root
- Push the value of current root to the variable storing the values
- If the current root has a left propety call the function on that the left property
- If the current root has a right propety call the function on that the right property
- Spread the the left values, current root ,and the right values

## Post-Order

#### Iterative

- Haven't figured this one out yet.

#### Recursive

- Create a variable to store the current root
- Push the value of current root to the variable storing the values
- If the current root has a left propety call the function on that the left property
- If the current root has a right propety call the function on that the right property
- Spread the the left values, the right values, and current root

---

# Example Binary Search Tree

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

  //Insert a new node

  recursiveInsert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return this;
    }
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  iterativeInsert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return this;
    }
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode();
      } else {
        while (true) {
          if (val < currentNode.val) {
            if (!currenNodet.left) {
              currentNode.left = new TreeNode();
              return this;
            } else {
              currentNode = currentNode.left;
            }
          } else {
            if (!currentNode.right) {
              currentNode.right = new TreeNode();
              return this;
            } else {
              currentNode = currentNode.right;
            }
          }
        }
      }
    }
  }

  //Search the tree

  searchRecur(val, currentNode = this.root) {
    if (!currentNode) return false;
    if (val < currentNode.val) {
      return this.searchRecur(val, currentNode.left);
    } else if (val > currentNode.val) {
      return this.searchRecur(val, currentNode.right);
    } else {
      return true;
    }
  }

  searchIter(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Maybe works, who knows, pulled it off the internet....

  deleteNodeHelper(root, key) {
    if (root === null) {
      return false;
    }
    if (key < root.val) {
      root.left = deleteNodeHelper(root.left, key);
      return root;
    } else if (key > root.val) {
      root.right = deleteNodeHelper(root.right, key);
      return root;
    } else {
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let currNode = root.right;
      while (currNode.left !== null) {
        currNode = currNode.left;
      }
      root.val = currNode.val;
      root.right = deleteNodeHelper(root.right, currNode.val);
      return root;
    }
  }

  //Recursive Depth First Search

  preOrderTraversal(root) {
    if (!root) return [];
    let left = this.preOrderTraversal(root.left);
    let right = this.preOrderTraversal(root.right);
    return [root.val, ...left, ...right];
  }

  preOrderTraversalV2(root) {
    if (!root) return [];
    let newArray = new Array();
    newArray.push(root.val);
    newArray.push(...this.preOrderTraversalV2(root.left));
    newArray.push(...this.preOrderTraversalV2(root.right));
    return newArray;
  }

  inOrderTraversal(root) {
    if (!root) return [];
    let left = this.inOrderTraversal(root.left);
    let right = this.inOrderTraversal(root.right);
    return [...left, root.val, ...right];
  }

  inOrderTraversalV2(root) {
    if (!root) return [];
    let newArray = new Array();
    newArray.push(...this.inOrderTraversalV2(root.left));
    newArray.push(root.val);
    newArray.push(...this.inOrderTraversalV2(root.right));
    return newArray;
  }

  postOrderTraversal(root) {
    if (!root) return [];
    let left = this.postOrderTraversal(root.left);
    let right = this.postOrderTraversal(root.right);
    return [...left, ...right, root.val];
  }

  postOrderTraversalV2(root) {
    if (!root) return [];
    let newArray = new Array();
    newArray.push(...this.postOrderTraversalV2(root.left));
    newArray.push(...this.postOrderTraversalV2(root.right));
    newArray.push(root.val);
    return newArray;
  }

  // Iterative Depth First Search

  iterativePreOrder(root) {
    let stack = [root];
    let results = [];
    while (stack.length) {
      let current = stack.pop();
      results.push(current);
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
    return results;
  }

  iterativeInOrder(root) {
    let stack = [];
    let current = root;
    let results = [];
    while (true) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      if (!stack.length) break;
      let removed = stack.pop();
      results.push(removed);
      current = current.right;
    }
    return results;
  }

  //To-Do iterativePostOrder

  //Breadth First Search

  breadthFirstSearch(root) {
    let queue = [root];
    let result = [];
    while (queue.length) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.left);
      current.push(result);
    }
    return result;
  }

  // Converting a Sorted Array to a Binary Search Tree

  sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);

    let left = nums.slice(0, mid);
    root.left = sortedArrayToBST(left);

    let right = nums.slice(mid + 1);
    root.right = sortedArrayToBST(right);

    return root;
  }
}
```
