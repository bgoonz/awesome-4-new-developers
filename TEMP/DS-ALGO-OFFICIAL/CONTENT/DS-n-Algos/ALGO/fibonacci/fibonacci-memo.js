const fibonacci = (
  n,
  memo = {
    0: 0,
    1: 1,
  }
) => {
  if (n in memo) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};
