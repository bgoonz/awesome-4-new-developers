/**
 * Created by Bryan Guner
 *
 * bryan.guner@gmail.com
 */

/**
 * Program:
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and
 * returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
  const newarr = [];
  for (let i = 0; i < arr.length; i += size) {
    newarr.push(arr.slice(i, i + size));
  }
  return newarr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));
