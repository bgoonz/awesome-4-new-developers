// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx = 1) {
  if (array[idx] === undefined) return true;
  let left = array[idx * 2];
  let right = array[idx * 2 + 1];
  if (left === undefined) left = -Infinity;
  if (right === undefined) right = -Infinity;
  return (
    array[idx] > left &&
    array[idx] > right &&
    isMaxHeap(array, idx * 2) &&
    isMaxHeap(array, idx * 2 + 1)
  );
}

module.exports = {
  isMaxHeap,
};
