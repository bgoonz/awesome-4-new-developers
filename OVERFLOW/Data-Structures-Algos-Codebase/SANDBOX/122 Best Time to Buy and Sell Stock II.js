// Leetcode 122
// Language: Javascript
// Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Author: Bryan Guner
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  if (prices === null || prices.length === 0) {
    return 0;
  }

  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      profit += diff;
    }
  }

  return profit;
};
