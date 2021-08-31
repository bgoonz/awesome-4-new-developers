let Stack = function () {
  let someInstance = Object.create(stackMethods);
  // let someInstance = Object.create(Stack.prototype);

  someInstance.length = 0;
  someInstance.storage = {};
  return someInstance;
};

// Stack.prototype.push = function(value) {
//   this.storage[this.length] = value;
//   this.length++;
// };

// Stack.prototype.pop = function() {
//   this.length && this.length--;
//   return this.storage[this.length];
// };

// Stack.prototype.size = function() {
//   return this.length;
// };

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
