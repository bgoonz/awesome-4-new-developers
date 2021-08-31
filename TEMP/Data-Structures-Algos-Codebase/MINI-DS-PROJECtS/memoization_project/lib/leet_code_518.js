// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function (amount, coins, memo = {}) {
  let memoKey = amount + "_" + coins;
  if (memoKey in memo) return memo[memoKey];
  if (amount === 0) return 1;
  if (amount < 0 || coins.length === 0) return 0;

  let variations = 0;
  let nextAmount = amount;
  while (nextAmount >= 0) {
    variations += change(nextAmount, coins.slice(0, -1), memo);
    nextAmount -= coins[coins.length - 1];
  }
  memo[memoKey] = variations;
  return variations;
};
