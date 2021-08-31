function change(coins, amount) {
  const combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1;

  coins.forEach((coin) => {
    for (let j = coin; j < amount + 1; j++) {
      combinations[j] += combinations[j - coin];
    }
  });

  return combinations[amount];
}

function minimumCoins(coins, amount) {
  // minimumCoins[i] will store the minimum coins needed for amount i
  const minimumCoins = new Array(amount + 1).fill(0);

  minimumCoins[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    minimumCoins[i] = Number.MAX_SAFE_INTEGER;
  }
  for (let i = 1; i < amount + 1; i++) {
    coins.forEach((coin) => {
      if (coin <= i) {
        const subRes = minimumCoins[i - coin];
        if (
          subRes !== Number.MAX_SAFE_INTEGER &&
          subRes + 1 < minimumCoins[i]
        ) {
          minimumCoins[i] = subRes + 1;
        }
      }
    });
  }
  return minimumCoins[amount];
}

function main() {
  const amount = 12;
  const coins = [2, 4, 5];
  console.log(
    "Number of combinations of getting change for " +
      amount +
      " is: " +
      change(coins, amount)
  );
  console.log(
    "Minimum number of coins required for amount :" +
      amount +
      " is: " +
      minimumCoins(coins, amount)
  );
}

main();
