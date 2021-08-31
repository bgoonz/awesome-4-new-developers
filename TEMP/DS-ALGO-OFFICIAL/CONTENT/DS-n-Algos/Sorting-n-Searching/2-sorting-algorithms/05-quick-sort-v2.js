/*Quick sort works by selecting a pivot point and sorting all the elements in the list
into a group smaller then the pivot and a group larger then the pivot. It does this
recursively until all the subgroups are sorted and then recombines the groups
Avg Case: O(n log(n)) / Worst Case: O(n^2) */

function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = array.filter((ele) => ele < pivot);
  let right = array.filter((ele) => ele >= pivot);

  let leftSort = quickSort(left);
  let rightSort = quickSort(right);

  return [...leftSort, pivot, ...rightSort];
}

/*
vg Case: O(n log(n))The partition step alone is O(n). We are lucky and always choose the median as the pivot. This will halve the array length at every step of the recursionO(log(n)).Worst Case: O(n2)We are unlucky and always choose the min or max as the pivot. This means one partition will contain everything, and the other partition is empty O(n)

*/
