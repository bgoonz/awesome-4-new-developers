// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.length) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    let newTail;
    let node = this.head;
    while (!newTail) {
      if (node.next === this.tail) {
        const oldTail = node.next;
        newTail = node;
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        return oldTail;
      }
      node = node.next;
    }
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    const oldHead = this.head;
    if (!this.length) return undefined;
    if (this.length === 1) {
      this.tail = null;
    }
    this.head = oldHead.next;
    this.length--;
    return oldHead;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let node = this.head;
    if (this.tail.value === target) return true;
    while (node.next !== null) {
      if (node.value === target) return true;
      node = node.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index > this.length) return null;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  // TODO: Implement the set method here
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index >= this.length) return false;
    const prevNode = this.get(index - 1);
    const newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index >= this.length) return undefined;
    const prevNode = this.get(index - 1);
    const toRemove = prevNode.next;
    prevNode.next = toRemove.next;
    this.length--;
    return toRemove;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
