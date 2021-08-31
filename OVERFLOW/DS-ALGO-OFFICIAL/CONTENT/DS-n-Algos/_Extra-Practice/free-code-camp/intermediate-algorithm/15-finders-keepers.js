function findElement(arr, func) {
  const num = arr.filter(func);
  return num[0];
}

console.log(
  findElement([1, 3, 5, 8, 9, 10], (num) => {
    return num % 2 === 0;
  })
);
