class Queue {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  enqueue(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  dequeue() {
    let first = this.storage[0];
    delete this.storage[0];

    this.length && this.length--;

    let cnt = 0;
    for (let k in this.storage) {
      this.storage[cnt] = this.storage[k];
      delete this.storage[k];
      cnt++;
    }

    return first;
  }

  size() {
    return this.length;
  }
}
