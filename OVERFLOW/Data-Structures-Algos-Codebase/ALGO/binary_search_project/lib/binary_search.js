function binarySearch(array, target) {
  if (!array.length) return false;
  let mid = Math.floor(array.length / 2);
  if (array[mid] === target) return true;
  if (target < array[mid]) {
    return binarySearch(array.slice(0, mid), target);
  } else {
    return binarySearch(array.slice(mid + 1), target);
  }
}

function binarySearchIndex(array, target) {
  if (!array.length) return -1;
  let mid = Math.floor(array.length / 2);
  if (array[mid] === target) return mid;
  if (target < array[mid]) {
    return binarySearchIndex(array.slice(0, mid), target);
  } else {
    const res = binarySearchIndex(array.slice(mid + 1), target);
    return res === -1 ? res : mid + 1 + res;
  }
}
module.exports = {
  binarySearch,
  binarySearchIndex,
};
