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

/*
Time Complexity: O(n^2)The outer loop i contributes O(n) in isolation. The inner while loop will contribute roughly O(n / 2) on average. The two loops are nested so our total timecomplexity is O(n * n / 2) = O(n^2).Space Complexity: O(1)We use the same amount of memory and create the same amount of variables regardless of the size of our inpuT
*/
