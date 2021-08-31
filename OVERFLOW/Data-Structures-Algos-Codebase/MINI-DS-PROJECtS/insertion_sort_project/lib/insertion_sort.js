function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let el = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
}

module.exports = {
  insertionSort,
};
