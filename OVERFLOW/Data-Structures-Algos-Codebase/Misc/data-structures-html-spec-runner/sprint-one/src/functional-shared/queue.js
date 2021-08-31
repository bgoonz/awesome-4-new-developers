let Queue = function () {
  let someInstance = {
    storage: {},
    length: 0,
  };

  _.extend(someInstance, queueMethods);

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
    let cnt = 0;
    this.length && this.length--;
    for (let key in this.storage) {
      this.storage[cnt] = this.storage[key];
      delete this.storage[key];
      cnt++;
    }
    return first;
  },

  size: function () {
    return this.length;
  },
};
