function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = array.shift();
  const left = array.filter((el) => el <= pivot);
  const right = array.filter((el) => el > pivot);

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
}

module.exports = {
  quickSort,
};
