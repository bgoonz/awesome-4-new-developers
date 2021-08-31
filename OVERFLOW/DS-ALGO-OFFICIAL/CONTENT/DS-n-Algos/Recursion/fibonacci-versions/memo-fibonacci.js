function fib(
  n,
  memo = {
    0: 1,
    1: 1,
  }
) {
  if (n in memo) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
