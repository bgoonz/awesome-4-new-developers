/*Selection sort works by searching the entire array for the next smallest element.
It swaps the next smallest element with the first unsorted element. By doing this
it only searches the unsorted portion of the list. O(n^2)*/

function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(list, min, i);
    }
  }
  return list;
}
