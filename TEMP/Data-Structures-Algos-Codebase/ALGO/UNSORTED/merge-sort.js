// Sort the array by breaking it down into smaller chunks
export default function mergeSort(array, compare) {
  // If's not an array or an array of just one element, it's already sorted
  if (!Array.isArray(array) || array.length < 2) {
    return array;
  }

  const length = array.length;
  const middle = Math.floor(length * 0.5);
  const left = array.slice(0, middle);
  const right = array.slice(middle, length);

  // Create a compare func if not passed in
  if (typeof compare !== "function") {
    compare = (a, b) => {
      return a > b ? 1 : -1;
    };
  }

  const merge = (left, right) => {
    const result = [];
    while (left.length || right.length) {
      if (left.length && right.length) {
        if (compare(left[0], right[0]) < 1) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result;
  };

  return merge(mergeSort(left), mergeSort(right));
}
