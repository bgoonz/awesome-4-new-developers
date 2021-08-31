/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * You are given coins of different denominations and a total amount of
 * money amount. Write a function to compute the fewest number of coins
 * that you need to make up that amount. If that amount of money cannot
 * be made up by any combination of the coins, return -1. *
 * You may assume that you have an infinite number of each kind of coin *
 *
 * Example 1: *
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 */

const coinChange = (coins, amount) => {
  let dp = [];
  for (let i = 0; i < amount + 1; i++) {
    dp[i] = Number.MAX_VALUE;
  }
  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};

test("coinChange", () => {
  expect(coinChange([1, 2, 5], 11)).toEqual(3);
});
