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
    this.length ? (this.tail.next = newNode) : (this.head = newNode);
    this.tail = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (this.length === 0) return undefined;
    const removedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = this.get(this.length - 2);
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return removedTail;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);
    this.length ? (newNode.next = this.head) : (this.tail = newNode);
    this.head = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (this.length === 0) return undefined;
    const removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return removedHead;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let curEl = this.head;
    while (curEl) {
      if (curEl.value === target) break;
      curEl = curEl.next;
    }
    return !!curEl;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let curEl = this.head;
    for (let i = 0; i < index; i++) {
      curEl = curEl.next;
    }
    return curEl;
  }

  // TODO: Implement the set method here
  set(index, val) {
    const el = this.get(index);
    if (el) {
      el.value = val;
      return true;
    } else {
      return false;
    }
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) {
      this.addToHead(val);
    } else {
      const prevNode = this.get(index - 1);
      const newNode = new Node(val);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      return this.removeHead();
    } else if (index === this.length - 1) {
      return this.removeTail();
    } else {
      const prevNode = this.get(index - 1);
      const removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
