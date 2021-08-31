/*Merge sort works by recursively halving the array until it is comprised of
only arrays of on or less elements. It then sorts those arrays and combines
them back together. O(n log(n))*/

function merge(array1, array2) {
  let newArr = [];
  while (array1.length && array2.length) {
    array1[0] < array2[0]
      ? result.push(array1.shift())
      : result.push(array1.shift());
  }
  return [...newArr, ...array1, ...array2];
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}
