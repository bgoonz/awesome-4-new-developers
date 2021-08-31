/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

class Stack {
  constructor() {
    this.data = new Array(10);
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  length() {
    return this.size;
  }

  pop() {
    if (!this.isEmpty()) {
      let result = this.data[this.size - 1];
      this.data[this.size - 1] = null;
      this.size -= 1;
      return result;
    }
  }

  push(value) {
    this.data[this.size] = value;
    this.size += 1;
  }

  peek() {
    return this.data[this.size - 1];
  }
}

const log = console.log;
let stack = new Stack();
stack.push(2);
stack.push(10);
log(stack.pop());
log(stack.peek());

// test('linked List Stack', () => {
//   expect(linkedListStack('Ashish')).toEqual('Ashish')
// });
