function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

function fibTab(n) {
  let table = [0, 1, 1];

  while (table.length - 1 < n) {
    table.push(table[table.length - 1] + table[table.length - 2]);
  }

  return table[n];
}
