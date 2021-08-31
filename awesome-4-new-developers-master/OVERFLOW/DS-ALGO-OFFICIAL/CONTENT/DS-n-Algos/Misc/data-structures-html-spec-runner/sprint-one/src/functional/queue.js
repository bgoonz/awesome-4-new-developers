let Queue = function () {
  let someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let first = 0;
  let last = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function () {
    let dequeued = storage[first];
    delete storage[first];
    let num = 0;
    for (var q in storage) {
      storage[num] = storage[q];
      delete storage[q];
      num++;
    }
    last && last--;
    return dequeued;
  };

  someInstance.size = function () {
    return last;
  };

  return someInstance;
};
