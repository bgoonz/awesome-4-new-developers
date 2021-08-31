/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */
const QueueNode = require("../models/list-node");

class Queue {
  constructor() {
    this.front = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    let node = new QueueNode(data);
    if (this.isEmpty()) {
      this.front = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }

  dequeue() {
    if (this.front === null) {
      return null;
    }
    let result = this.front.data;
    if (this.front === this.tail) {
      this.front = null;
      this.tail = null;
    } else {
      this.front = this.front.next;
    }
    this.size -= 1;
    return result;
  }
}

// let qq = new Queue()
// qq.enqueue("A")
// qq.enqueue("S")
// qq.enqueue("H")
// qq.enqueue("I")
// qq.enqueue("S")
// qq.enqueue("H")

// while(!qq.isEmpty()){
//   console.log(qq.dequeue())
// }

module.exports = Queue;
