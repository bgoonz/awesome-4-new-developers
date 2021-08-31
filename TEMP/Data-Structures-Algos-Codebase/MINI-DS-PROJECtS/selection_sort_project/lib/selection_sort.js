function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minElementIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minElementIdx]) minElementIdx = j;
    }

    if (i !== minElementIdx) swap(arr, i, minElementIdx);
  }
}

module.exports = {
  selectionSort,
  swap,
};
