function lucas(n) {
  return n === 1 ? 2 : n === 2 ? 1 : lucas(n - 1) + fib(n - 2);
}
