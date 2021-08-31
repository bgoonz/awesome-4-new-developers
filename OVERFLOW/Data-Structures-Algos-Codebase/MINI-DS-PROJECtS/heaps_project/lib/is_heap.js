// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx = 1) {
  if (idx >= array.length) return true;

  const leftChildIdx = idx * 2;
  const rightChildIdx = idx * 2 + 1;
  const leftChildVal = array[idx * 2] || -Infinity;
  const rightChildVal = array[idx * 2 + 1] || -Infinity;

  if (array[idx] > leftChildVal && array[idx] > rightChildVal) {
    return isMaxHeap(array, leftChildIdx) && isMaxHeap(array, rightChildIdx);
  }
  return false;
}

module.exports = {
  isMaxHeap,
};
