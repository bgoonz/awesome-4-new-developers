// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Author : Bryan Guner

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var ans = 0;

  var len = prices.length;

  var minn = Infinity;

  for (var i = 0; i < len; i++) {
    minn = Math.min(minn, prices[i]);
    ans = Math.max(ans, prices[i] - minn);
  }

  return ans;
};
