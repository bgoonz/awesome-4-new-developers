class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstTraversal(iteratorFunc, order) {
    if (order === "pre-order") {
      iteratorFunc(this.value);
    }
    if (this.left !== null) {
      this.left.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === "in-order") {
      iteratorFunc(this.value);
    }
    if (this.right !== null) {
      this.right.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === "post-order") {
      iteratorFunc(this.value);
    }
  }
  contains(value) {
    let currentValue = this.value;
    if (currentValue === value) {
      return true;
    }
    if (value < currentValue) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    }
    if (value > currentValue) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
  insert(value) {
    //check to see if it is greater/less than current tree
    //else recurse and insert to next branch
    let currentValue = this.value;
    if (value <= currentValue) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    }
    if (value > currentValue) {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    //return 'added the value', value
  }
  //create an array
  //add the current object to array
  //remove object from array
  //call iterator on this.left
  //push this.left into array
  breathSearch(iterator) {
    let storage = [this];
    while (storage.length) {
      let treeNode = storage.shift();
      iterator(treeNode);
      if (treeNode.left) {
        storage.push(treeNode.left);
      }
      if (treeNode.right) {
        storage.push(treeNode.right);
      }
    }
  }
}
let tree = new BST(50);
tree.insert(30);
tree.insert(70);
tree.insert(100);
tree.insert(60);
tree.insert(59);
tree.insert(20);
tree.insert(45);
tree.insert(35);
tree.insert(85);
tree.insert(105);
tree.insert(10);
//tree.contains(99)
let it = (val) => {
  console.log(val);
};
//-------------------------------------------------
let breathConsole = (val) => {
  console.log(val.value);
};
//-------------------------------------------------
//tree.depthFirstTraversal(it, 'post-order')
tree.breathSearch(breathConsole);

//  50
//  /\
// 40 60

/*
  bryan@LAPTOP-F699FFV1:/mnt/c/Users/15512/Google Drive/a-A-September/weeks/week7-outer/week-7/resources/General$ node bst.js
50
30
70
20
45
60
100
10
35
59
85
105
  */
