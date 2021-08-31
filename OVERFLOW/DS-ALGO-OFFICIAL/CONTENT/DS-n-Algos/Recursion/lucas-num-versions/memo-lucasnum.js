function lucas(
  n,
  memo = {
    0: 2,
    1: 1,
  }
) {
  if (n in memo) return memo[n];
  memo[n] = lucas(n - 1, memo) + lucas(n - 2, memo);
  return memo[n];
}
