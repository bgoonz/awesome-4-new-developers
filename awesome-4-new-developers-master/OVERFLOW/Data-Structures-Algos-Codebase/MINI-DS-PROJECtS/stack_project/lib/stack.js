// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length) {
      newNode.next = this.top;
    } else {
      this.bottom = newNode;
    }
    this.top = newNode;
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.length) return null;
    const popped = this.top.value;
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

exports.Node = Node;
exports.Stack = Stack;
