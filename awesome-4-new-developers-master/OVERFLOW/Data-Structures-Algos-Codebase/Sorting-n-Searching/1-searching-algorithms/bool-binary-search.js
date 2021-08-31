/*O(log n) */

function binarySearch(array, target) {
  if (array.length === 0) {
    return false;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx + 1);

  return target < array[midIdx]
    ? binarySearch(leftHalf, target)
    : target > array[midIdx]
    ? binarySearch(rightHalf, target)
    : true;
}
