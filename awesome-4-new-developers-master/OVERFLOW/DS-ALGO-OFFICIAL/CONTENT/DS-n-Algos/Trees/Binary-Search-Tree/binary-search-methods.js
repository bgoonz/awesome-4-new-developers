function recurBSearch(array, target) {
  if (array.length === 0) {
    return false;
  }
  const midIdx = Math.floor(array.length / 2);
  const midEl = array[midIdx];
  const leftHalf = array.slice(0, midIdx);
  const rightHalf = array.slice(midIdx + 1);
  if (target < midEl) {
    return recurBSearch(leftHalf, target);
  } else if (target > midEl) {
    return recurBSearch(rightHalf, target);
  } else {
    return true;
  }
}
function iterBSearch(array, target) {
  let lowerIdx = 0;
  let upperIdx = array.length - 1;
  let midIdx;
  while (lowerIdx <= upperIdx) {
    midIdx = Math.floor((lowerIdx + upperIdx) / 2);
    if (array[midIdx] < target) {
      lowerIdx = midIdx + 1;
    } else if (array[midIdx] > target) {
      upperIdx = midIdx - 1;
    } else {
      return true;
    }
  }
  return false;
}
function recurBSearchIdx(array, target) {
  if (!array.length) return -1;
  const midIdx = Math.floor(array.length / 2);
  const midEl = array[midIdx];
  const leftHalf = array.slice(0, midIdx);
  const rightHalf = array.slice(midIdx + 1);
  if (target < midEl) {
    return recurBSearchIdx(leftHalf, target);
  } else if (target > midEl) {
    const idxShift = recurBSearchIdx(rightHalf, target);
    if (idxShift === -1) {
      return -1;
    } else {
      return idxShift + midIdx + 1;
    }
  } else {
    return midIdx;
  }
}
function recurBSearchIdxV2(array, target, lo = 0, hi = array.length - 1) {
  if (lo === hi && array[lo] !== target) {
    return -1;
  }
  let midIdx = Math.floor((lo + hi) / 2);
  if (target < array[midIdx]) {
    return recurBSearchIdxV2(array, target, lo, midIdx);
  } else if (target > array[midIdx]) {
    return recurBSearchIdxV2(array, target, midIdx + 1, hi);
  } else {
    return midIdx;
  }
}
function iterBSearchIdx(array, target) {
  let lowerIdx = 0;
  let upperIdx = array.length - 1;
  let midIdx;
  while (lowerIdx <= upperIdx) {
    midIdx = Math.floor((lowerIdx + upperIdx) / 2);
    if (array[midIdx] < target) {
      lowerIdx = midIdx + 1;
    } else if (array[midIdx] > target) {
      upperIdx = midIdx - 1;
    } else {
      return midIdx;
    }
  }
  return -1;
}
module.exports = {
  recurBSearch,
  iterBSearch,
  recurBSearchIdx,
  recurBSearchIdxV2,
  iterBSearchIdx,
};
