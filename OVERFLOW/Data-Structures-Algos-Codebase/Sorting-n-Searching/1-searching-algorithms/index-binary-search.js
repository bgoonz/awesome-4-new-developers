/* O(log n) */

function binarySearchIndex(array, target) {
  if (!array.length) return -1;

  const midIdx = Math.floor(array.length / 2);
  const midEl = array[midIdx];

  if (target < midEl) {
    return binarySearchIndex(array.slice(0, midIdx), target);
  } else if (target > midEl) {
    const idxShift = binarySearchIndex(array.slice(midIdx + 1), target);
    return idxShift === -1 ? -1 : idxShift + midIdx + 1;
  } else {
    return midIdx;
  }
}
