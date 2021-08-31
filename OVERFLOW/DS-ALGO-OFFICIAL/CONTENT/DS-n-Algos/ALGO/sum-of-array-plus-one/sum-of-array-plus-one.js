// ES5 method is nice and clean
exports.es5 = (array) => {
  return array.reduce((memo, num) => {
    return memo + num;
  }, array.length);
};

// Without array.reduce method isn't much different
exports.iterative = (array) => {
  let result = array.length;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
};
