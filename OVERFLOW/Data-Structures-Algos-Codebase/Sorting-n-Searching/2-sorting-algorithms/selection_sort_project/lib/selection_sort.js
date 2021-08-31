function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(arr, i, minIdx);
  }
  return arr;
}

module.exports = {
  selectionSort,
  swap,
};

/*
Time Complexity: O(n^2)The outer loop i contributes O(n) in isolation. The inner loop j will contribute roughly O(n / 2) on average. The two loops are nested so our total time complexityis O(n * n / 2) = O(n^2).Space Complexity: O(1)We use the same amount of memory and create the same amount of variables regardless of the size of our input.
*/
