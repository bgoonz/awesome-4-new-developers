class Stack {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  pop() {
    this.length && this.length--;
    return this.storage[this.length];
  }

  size() {
    return this.length;
  }
}
