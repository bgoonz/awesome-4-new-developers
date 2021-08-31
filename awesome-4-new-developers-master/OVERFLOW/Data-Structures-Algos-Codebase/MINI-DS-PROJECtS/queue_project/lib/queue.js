// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
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

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.front = newNode;
      this.back = newNode;
    }
    this.back.next = newNode;
    this.back = newNode;
    this.length++;
    return this.length;
  }

  dequeue() {
    if (!this.length) return null;

    const removed = this.front;
    this.front = this.front.next;
    this.length--;
    if (!this.length) {
      this.front = null;
      this.back = null;
    }
    return removed.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
