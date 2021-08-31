// Implement Merge Sort

function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
    let el1 = array1.length ? array1[0] : Infinity;
    let el2 = array2.length ? array2[0] : Infinity;

    el1 < el2 ? merged.push(array1.shift()) : merged.push(array2.shift());
  }

  return merged;
}

merge([1, 5, 10, 15], [0, 2, 3, 7, 10]);

function mergeSort(array) {
  if (array.length <= 1) return array;

  let midIdx = Math.floor(array.length / 2);
  let left = array.slice(0, midIdx);
  let right = array.slice(midIdx);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

module.exports = {
  merge,
  mergeSort,
};
