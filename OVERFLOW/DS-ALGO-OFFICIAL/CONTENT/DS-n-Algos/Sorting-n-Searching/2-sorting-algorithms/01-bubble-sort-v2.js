/*Bubble Sort works by taking a pair of elements in an array and moving the smaller
element back in the array. The function recurses until all the elements are in order
O(n^2) */

function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

function bubbleSort(array) {
  let swapped = false;
  while (!swapped) {
    swapped = true;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = false;
      }
    }
  }
  return array;
}
