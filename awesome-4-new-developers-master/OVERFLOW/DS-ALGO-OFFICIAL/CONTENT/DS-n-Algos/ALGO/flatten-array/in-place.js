module.exports = (array) => {
  let i = 0;

  while (i < array.length) {
    if (Array.isArray(array[i])) {
      array.splice(...[i, 1].concat(array[i]));
    } else {
      i += 1;
    }
  }

  return array;
};
