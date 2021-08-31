// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(list) {
  let length = list.length;
  for (let i = 0; i < length - 1; i++) {
    let minPos = i;

    for (let j = i + 1; j < length; j++) {
      if (list[j] < list[minPos]) {
        minPos = j;
      }
    }

    if (minPos !== i) {
      swap(list, minPos, i);
    }
  }
}
module.exports = {
  selectionSort,
  swap,
};
