const prompts = require("prompts");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(rootNode, newNode) {
    if (rootNode.data > newNode.data) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else {
        return this.insertNode(rootNode.left, newNode);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        return this.insertNode(rootNode.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(rootNode, data) {
    if (rootNode === null) {
      return null;
    } else if (rootNode.data > data) {
      rootNode.left = this.removeNode(rootNode.left, data);
      return rootNode;
    } else if (rootNode.data < data) {
      rootNode.right = this.removeNode(rootNode.right, data);
      return rootNode;
    } else {
      if (rootNode.left === null && rootNode.right === null) {
        return null;
      } else if (rootNode.left === null) {
        return rootNode.right;
      } else if (rootNode.right === null) {
        return rootNode.left;
      } else {
        const foundNode = this.findMinNode(rootNode.right);
        rootNode.data = foundNode.data;

        rootNode.right = this.removeNode(rootNode.right, foundNode.data);
        return rootNode;
      }
    }
  }

  findMinNode(rootNode) {
    if (rootNode.left === null) {
      return rootNode;
    } else {
      return this.findMinNode(rootNode.left);
    }
  }

  findMaxNode(rootNode) {
    if (rootNode.right === null) {
      return rootNode;
    } else {
      return this.findMaxNode(rootNode.right);
    }
  }

  search(rootNode, data) {
    if (rootNode === null) {
      return false;
    } else if (rootNode.data === data) {
      return true;
    } else if (rootNode.data > data) {
      return this.search(rootNode.left, data);
    } else {
      return this.search(rootNode.right, data);
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node);
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

const main = async () => {
  const binarySearchTree = new BinarySearchTree();

  while (true) {
    const userPrompt = await prompts({
      type: "text",
      name: "value",
      message:
        "Would you like to add, search, remove, preorder, postorder \n" +
        "inorder, findmix, or findmax",
    });

    if (!userPrompt || !userPrompt.value) {
      console.log("No value, exiting...");
      process.exit();
    }

    switch (userPrompt.value.toLowerCase()) {
      case "add": {
        const addPrompt = await prompts({
          type: "number",
          name: "value",
          message: "Enter a number to add",
        });

        binarySearchTree.insert(addPrompt.value);
        continue;
      }

      case "inorder": {
        binarySearchTree.inOrder(binarySearchTree.root);
        continue;
      }

      case "preorder": {
        binarySearchTree.preOrder(binarySearchTree.root);
        continue;
      }

      case "postorder": {
        binarySearchTree.postOrder(binarySearchTree.root);
        continue;
      }

      case "search": {
        const searchPrompt = await prompts({
          type: "number",
          name: "value",
          message: "Enter a number to search",
        });

        const found = binarySearchTree.search(
          binarySearchTree.root,
          searchPrompt.value
        );

        if (found) {
          console.log(`Value found ${searchPrompt.value}`);
        } else {
          console.log(`Value not found ${searchPrompt.value}`);
        }
        continue;
      }

      case "remove": {
        const removePrompt = await prompts({
          type: "number",
          name: "value",
          message: "Enter a number to remove",
        });

        binarySearchTree.remove(removePrompt.value);
        continue;
      }

      case "findmin": {
        console.log(
          "The minimum value is: ",
          binarySearchTree.findMinNode(binarySearchTree.root)
        );
        continue;
      }

      case "findmax": {
        console.log(
          "The maximum value is: ",
          binarySearchTree.findMaxNode(binarySearchTree.root)
        );
        continue;
      }
    }
  }
};

main();
