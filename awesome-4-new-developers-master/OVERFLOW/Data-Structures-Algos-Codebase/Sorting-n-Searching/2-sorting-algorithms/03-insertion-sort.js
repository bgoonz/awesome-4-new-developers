// Implement Insertion Sort

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let val = list[i];
    let pos = i;
    // console.trace("1");
    while (pos > 0 && list[pos - 1] > val) {
      // console.trace("2");
      list[pos] = list[pos - 1];
      pos -= 1;
    }
    list[pos] = val;
  }
}
let array = [2, -1, 4, 3, 7, 3];
insertionSort(array);
module.exports = {
  insertionSort,
};
