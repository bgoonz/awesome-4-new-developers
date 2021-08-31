// Dynamic programming - factorial

"use strict";
{
  const memory = [1, 1];

  Object.assign(self, {
    factorial_naive,
    factorial_recursive,
    factorial_dp,
  });

  test_factorial();

  function test_factorial() {
    const tests = [
      [10, 3628800],
      [4, 24],
      [12, 479001600],
      [1, 1],
      [2, 2],
      [0, 1],
    ];
    console.log(
      tests
        .map(([a, r]) =>
          factorial_naive(a) == r
            ? `Naive passed ${a} ${r}`
            : `Naive failed ${a} ${r}`
        )
        .join(`\n`)
    );
    console.log(
      tests
        .map(([a, r]) =>
          factorial_recursive(a) == r
            ? `Recursive passed ${a} ${r}`
            : `Recursive failed ${a} ${r}`
        )
        .join(`\n`)
    );
    console.log(
      tests
        .map(([a, r]) =>
          factorial_dp(a) == r ? `DP passed ${a} ${r}` : `DP failed ${a} ${r}`
        )
        .join(`\n`)
    );
  }

  function factorial_naive(n) {
    if (n <= 1) {
      return 1;
    } else {
      let result = n;
      while (n > 1) {
        n -= 1;
        result *= n;
      }
      return result;
    }
  }

  function factorial_recursive(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial_recursive(n - 1);
  }

  function factorial_dp(n) {
    if (Number.isInteger(memory[n])) {
      return memory[n];
    } else {
      if (n <= 1) {
        return 1;
      }
      memory[n] = n * factorial_dp(n - 1);
      return memory[n];
    }
  }
}
