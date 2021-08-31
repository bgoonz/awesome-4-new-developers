/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

const StackNode = require("../models/list-node");

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.top === null;
  }

  length() {
    return this.size;
  }

  pop() {
    if (!this.isEmpty()) {
      let result = this.top.data;
      this.top = this.top.next;
      this.size -= 1;
      return result;
    }
  }

  push(value) {
    if (this.isEmpty()) {
      let node = new StackNode(value);
      this.top = node;
    } else {
      let node = new StackNode(value);
      node.next = this.top;
      this.top = node;
    }
    this.size += 1;
  }

  peek() {
    return this.top.data;
  }
}

const log = console.log;
let stack = new Stack();
stack.push(2);
stack.push(10);
log(stack.peek());
stack.pop();
log(stack.peek());

// test('linked List Stack', () => {
//   expect(linkedListStack('Ashish')).toEqual('Ashish')
// });
