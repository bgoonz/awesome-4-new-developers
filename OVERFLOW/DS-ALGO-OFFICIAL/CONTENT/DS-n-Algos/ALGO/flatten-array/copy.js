module.exports = function flatten(array) {
  const copy = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      copy.push(...flatten(array[i]));
    } else {
      copy.push(array[i]);
    }
  }

  return copy;
};
