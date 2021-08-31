function chunkArrayInGroups(arr, size) {
  // Break it up.
  const splitarr = [];
  for (let i = 0; i < arr.length; i += size) {
    splitarr.push(arr.slice(i, i + size));
  }
  return splitarr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
