let Queue = function () {
  let someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.length = 0;
  return someInstance;
};

let queueMethods = {
  enqueue: function (value) {
    this.storage[this.length] = value;
    this.length++;
  },

  dequeue: function () {
    let first = this.storage[0];
    delete this.storage[0];
    this.length && this.length--;
    let cnt = 0;
    for (let key in this.storage) {
      this.storage[cnt] = this.storage[key];
      cnt++;
      delete this.storage[key];
    }
    return first;
  },

  size: function () {
    return this.length;
  },
};
