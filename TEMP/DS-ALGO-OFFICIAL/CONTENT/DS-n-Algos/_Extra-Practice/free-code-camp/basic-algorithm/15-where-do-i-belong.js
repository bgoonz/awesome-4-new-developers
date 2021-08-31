function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => {
    return a - b;
  });
  return arr.indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
