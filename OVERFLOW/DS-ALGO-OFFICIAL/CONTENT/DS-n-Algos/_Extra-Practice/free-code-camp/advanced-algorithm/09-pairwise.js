function pairwise(arr, arg) {
  const indicies = [];

  for (let n = 0; n < arr.length; n++) {
    // loop through arr
    if (indicies.indexOf(n) == -1) {
      // check if n is already used
      for (let i = 1; i < arr.length; i++) {
        // loop through arr, not including the first item we started with above
        if (indicies.indexOf(i) == -1 && i != n) {
          // check if i is already used, or if it's the same item as n
          if (arr[n] + arr[i] == arg) {
            // if n and i sum to arg
            indicies.push(n, i); // add to indicies array
            break; // stop checking the rest of the array with this n
          }
        }
      }
    }
  }

  if (indicies.length) {
    // if we have matching pairs
    const unique = new Set(indicies); // double check that values are not repeated (might be unnecessary)
    return [...unique].reduce((a, b) => a + b); // add up the indicies
  } else return 0; // if no matching pairs, return 0
}

console.log(pairwise([], 100));
