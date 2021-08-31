function sym() {
  //spread operator args to array object
  const arr = [...arguments];

  function findDiff(a, b) {
    // get items in a not in b
    const filtered = (a, b) => [...a].filter((n) => b.indexOf(n) < 0);
    //filter each array against the other and concat
    return filtered(a, b).concat(filtered(b, a));
  }

  // get difference of all arguments with reduce
  const symDiff = arr.reduce(findDiff, []);

  // get unique elements from set of differences
  const unique = new Set(symDiff);

  // spread operator turns set to array
  return [...unique];
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
