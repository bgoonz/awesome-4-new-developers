function binarySearch(array, target) {
  if (!array.length) return false;

  const midIdx = Math.floor(array.length / 2);
  const midEl = array[midIdx];
  if (midEl === target) {
    return true;
  } else if (midEl > target) {
    return binarySearch(array.slice(0, midIdx), target);
  } else {
    return binarySearch(array.slice(midIdx + 1), target);
  }
}

function binarySearchIndex(array, target) {
  if (!array.length) return -1;

  const midIdx = Math.floor(array.length / 2);
  const midEl = array[midIdx];
  if (midEl === target) {
    return midIdx;
  } else if (midEl > target) {
    return binarySearchIndex(array.slice(0, midIdx), target);
  } else {
    const idxShift = binarySearchIndex(array.slice(midIdx + 1), target);
    return idxShift === -1 ? -1 : midIdx + 1 + idxShift;
  }
}

module.exports = {
  binarySearch,
  binarySearchIndex,
};
