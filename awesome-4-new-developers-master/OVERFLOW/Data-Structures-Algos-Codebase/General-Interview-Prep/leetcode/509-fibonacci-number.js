/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * The Fibonacci numbers, commonly denoted F(n) form a sequence,
 * called the Fibonacci sequence, such that each number is the sum
 * of the two preceding ones, starting from 0 and 1. That is,
 *
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), for N > 1.
 * Given N, calculate F(N).
 *
 * Example 1:
 *
 * Input: 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 */

function fibonacciNumber(value) {
  if (value === 0) return 0;
  let fibo = [1, 1];
  for (let index = 2; index < value; index++) {
    fibo.push(fibo[index - 1] + fibo[index - 2]);
  }
  return fibo.pop();
}
//0,1,1,2,3
test("fibonacci Number", () => {
  expect(fibonacciNumber(4)).toEqual(3);
});
