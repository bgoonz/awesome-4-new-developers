module.exports = (array, compare) => {
  // Not an array, empty or array of 1 is already sorted
  if (!Array.isArray(array) || array.length < 2) {
    return array;
  }

  const swap = (array, first, second) => {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
  };

  // Create a compare func if not passed in
  if (typeof compare !== "function") {
    compare = (a, b) => {
      return a > b ? 1 : -1;
    };
  }

  let i, l;

  for (i = 0; i < array.length; i++) {
    l = i;
    while (l-- && compare(array[l], array[l + 1]) > 0) {
      swap(array, l, l + 1);
    }
  }

  return array;
};
