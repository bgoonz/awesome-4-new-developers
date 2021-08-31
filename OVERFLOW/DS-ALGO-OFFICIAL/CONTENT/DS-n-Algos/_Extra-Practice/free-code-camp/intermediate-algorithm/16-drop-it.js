function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      //first instance of true
      return arr.slice(i);
    }
  }
  return []; //if all false
}

console.log(
  dropElements([1, 2, 3, 4], (n) => {
    return n > 5;
  })
);
