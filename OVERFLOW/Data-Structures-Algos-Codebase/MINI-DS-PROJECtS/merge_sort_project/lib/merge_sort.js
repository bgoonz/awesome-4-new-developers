function merge(array1, array2) {
  const merged = [];
  while (array1.length > 0 && array2.length > 0) {
    merged.push(array1[0] < array2[0] ? array1.shift() : array2.shift());
  }
  return [...merged, ...array1, ...array2];
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

module.exports = {
  merge,
  mergeSort,
};
