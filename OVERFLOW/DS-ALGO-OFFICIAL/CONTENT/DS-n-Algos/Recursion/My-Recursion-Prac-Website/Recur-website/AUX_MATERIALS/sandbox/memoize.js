function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

function fibMemo(
  n,
  memo = {
    1: 1,
    2: 1,
  }
) {
  if (n in memo) {
    return memo[n];
  }

  let result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = result;
  return memo[n];
}

// Setting the memo when the base case is reached
// (I like the above approach better since we already know we can hardcode those
// two values, but this will work the same.)
function fibMemo(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n === 1 || n === 2) {
    memo[n] = 1;
    return 1;
  }

  let result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = result;
  return memo[n];
}
