// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push
//   - Pop
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
  // TODO: Implement the Node class!
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  // TODO: Implement the Stack class!
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(node) {
    if (this.length) {
      node.next = this.top;
    } else {
      this.bottom = node;
    }
    this.top = node;
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.length) return null;
    const popped = this.top;
    this.top = this.top.next;
    this.length--;
    if (!this.length) {
      this.top = null;
      this.bottom = null;
    }
    return popped;
  }

  size() {
    return this.length;
  }
}

class StackQueue {
  // TODO: Implement the StackQueue class!
  constructor() {
    this.front = null;
    this.back = null;
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }

    this.inStack.push(new Node(val));
    return this.size();
  }

  dequeue() {
    if (!this.front) {
      return null;
    } else if (this.size() === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }

    if (this.outStack.size() === 0) {
      while (this.inStack.size() > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack.pop();
  }

  size() {
    return this.inStack.size() + this.outStack.size();
  }
}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
