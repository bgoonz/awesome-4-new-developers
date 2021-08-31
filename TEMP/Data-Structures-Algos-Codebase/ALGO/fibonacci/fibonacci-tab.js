function tabulatedFib(n) {
  // create a blank array with n reserved spots
  let table = newArray(n); // seed the first two values
  table[0] = 0;
  table[1] = 1; // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}

console.log(tabulatedFib(7)); // => 13
