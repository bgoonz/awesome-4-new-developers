class Node {
  constructor(value) {
    this.value = value;
    this.next = "null";
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  pop() {
    if (this.length !== 0) {
      let currentTop = this.top.value;
      if (this.length >= 2) {
        let temp = this.top.next;
        this.top = temp;
        this.length--;
      } else {
        this.top = null;
        this.length--;
      }
      return currentTop;
    } else {
      return null;
    }
  }

  push(ele) {
    if (this.length === 0) {
      this.top = new Node(ele);
      this.top.value = ele;
      this.length++;
    } else {
      let temp = this.top;
      this.top = new Node(ele);
      this.top.next = temp;
      this.length++;
    }
    return this.length;
  }

  size() {
    return this.length;
  }
}
