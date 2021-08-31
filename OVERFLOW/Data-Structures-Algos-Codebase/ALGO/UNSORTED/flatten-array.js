// Create a new flattened array
exports.newArray = function flatten(input) {
  const output = [];

  for (let i = 0; i < input.length; i++) {
    // Using Array.isArray for new browsers, in older browsers this can be done
    // using `Object.prototype.toString.call(input[i]) === '[object Array]'`
    if (Array.isArray(input[i])) {
      output.push(...flatten(input[i]));
    } else {
      output.push(input[i]);
    }
  }

  return output;
};

// In place array flatten
export function inPlace(array) {
  let i = 0;

  while (i < array.length) {
    if (Array.isArray(array[i])) {
      array.splice(...[i, 1].concat(array[i]));
    } else {
      i += 1;
    }
  }

  return array;
}

// Flatten array using es6 reduce method
exports.es6 = function flatten(array) {
  return array.reduce((arr, val) => {
    return arr.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
};
