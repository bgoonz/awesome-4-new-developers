function steamrollArray(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((done, curr) => done.concat(steamrollArray(curr)), []);
  } else {
    return arr;
  }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
