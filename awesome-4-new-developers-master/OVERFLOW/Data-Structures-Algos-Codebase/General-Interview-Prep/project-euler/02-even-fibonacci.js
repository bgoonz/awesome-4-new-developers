function fiboEvenSum(n) {
  const arr = [1, 2];
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  arr.forEach((value) => {
    if (value % 2 === 0) {
      sum += value;
    }
  });
  return sum;
}

console.log(fiboEvenSum(10));
