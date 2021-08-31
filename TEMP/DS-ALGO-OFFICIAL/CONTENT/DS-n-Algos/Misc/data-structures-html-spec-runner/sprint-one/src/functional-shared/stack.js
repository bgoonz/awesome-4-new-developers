let Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {
    length: 0,
    storage: {},
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

let stackMethods = {
  push: function (value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function () {
    this.length && this.length--;
    return this.storage[this.length];
  },
  size: function () {
    return this.length;
  },
};
