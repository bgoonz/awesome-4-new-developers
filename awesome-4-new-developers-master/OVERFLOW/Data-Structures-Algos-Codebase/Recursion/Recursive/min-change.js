function minChange(coins, amount, memo = {}) {
  if (amount === 0) return 0;
  if (memo[amount]) return memo[amount];
  let potentialCoins = [];
  coins.forEach((coin) => {
    if (coin <= amount) {
      potentialCoins.push(minChange(coins, amount - coin, memo) + 1);
    }
  });
  return (memo[amount] = Math.min(...potentialCoins));
}
