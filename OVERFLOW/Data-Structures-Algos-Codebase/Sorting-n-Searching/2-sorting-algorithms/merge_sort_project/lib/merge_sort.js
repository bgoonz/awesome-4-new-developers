function merge(array1, array2) {
  let sorted = [];
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      sorted.push(array1.shift());
    } else {
      sorted.push(array2.shift());
    }
  }
  return sorted.concat(array1).concat(array2);
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}

module.exports = {
  merge,
  mergeSort,
};

console.log(mergeSort([3, 1, 2, 8]));

/*

Time Complexity: O(n log(n))Since we split the array in half each time, the number of recursive calls is O(log(n)). The while loop within the merge function contributes O(n) in isolation andwe call that for every recursive mergeSort call.Space Complexity: O(n)We will create a new subarray for each element in the original input
*/
