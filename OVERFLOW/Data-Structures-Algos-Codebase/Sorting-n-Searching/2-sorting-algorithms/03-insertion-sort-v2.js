/*Insertion sort works by selecting the first unsorted element and placing it into
the sorted section of the array where it is smaller than the one ahead of it and
larger then the one behind it. O(n^2)*/

let insertionSort = (list) => {
  list.forEach((element, i) => {
    let marker = i - 1;
    while (marker >= 0 && element < list[marker]) {
      list[marker + 1] = list[marker];
      marker--;
    }
    list[marker + 1] = element;
  });
  return list;
};
