class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(front = null, back = null, length = 0) {
    this.front = front;
    this.back = back;
    this.length = length;
  }

  enqueue(input) {
    if (this.length === 0) {
      this.front = new Node(input);
      this.back = this.front;
      this.length++;
    } else if (this.length >= 1) {
      let prevBack = this.back;
      this.back = new Node(input);
      prevBack.next = this.back;
      this.length++;
    }
    return this.length;
  }

  dequeue() {
    if (this.length !== 0) {
      let tempFront = this.front.value;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
        this.length--;
      } else {
        this.front = this.front.next;
        this.length--;
      }
      return tempFront;
    } else {
      return null;
    }
  }

  size() {
    return this.length;
  }
}
