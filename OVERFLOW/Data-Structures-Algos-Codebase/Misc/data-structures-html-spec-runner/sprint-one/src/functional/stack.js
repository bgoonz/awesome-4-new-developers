let Stack = function () {
  let someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let length = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function () {
    length && length--;
    return storage[length];
  };

  someInstance.size = function () {
    return length;
  };

  return someInstance;
};
