function waysToReturnChange(denominations, numOfCoins, amount) {
  if (amount === 0) return 1; // Perfect!
  if (amount < 0) return 0; // No solution exists for negative amount
  if (numOfCoins < 0 && amount > 0) return 0; // We don't have coins left!
  console.log(
    `checking ways to make ${amount} with ${denominations.slice(numOfCoins)}`
  );
  return (
    waysToReturnChange(
      denominations,
      numOfCoins,
      amount - denominations[numOfCoins]
    ) + waysToReturnChange(denominations, numOfCoins - 1, amount)
  );
}

function waysToReturnMemoize(amount, denominations) {
  // intialize an array of zeros with indices up to amount
  const waysOfDoingNcents = [];
  for (let i = 0; i <= amount; i++) {
    waysOfDoingNcents[i] = 0;
  }
  // there is 1 way to renturn 0 cents
  waysOfDoingNcents[0] = 1;

  //  can only start returning change with coins in our denominations
  denominations.forEach((coin) => {
    //  start bottom up, each time reducing change amout with curr coin.
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      const higherAmountRemainder = higherAmount - coin;
      // ways to create change is equivalent to reducing the problem to a known problem
      // and gaining all the ways to solve for smaller problems
      waysOfDoingNcents[higherAmount] +=
        waysOfDoingNcents[higherAmountRemainder];
    }
  });

  return waysOfDoingNcents[amount];
}
const denominations = [1, 2, 3];
const amount = 4;
console.time("answer time");
console.log(
  waysToReturnChange(denominations, denominations.length - 1, amount)
);
console.timeEnd("answer time");
console.time("answer time1");
console.log(waysToReturnMemoize(amount, denominations));
console.timeEnd("answer time1");
/*
node memo-coin-change.js
checking ways to make 4 with 3
checking ways to make 1 with 3
checking ways to make 1 with 2,3
checking ways to make 1 with 1,2,3
checking ways to make 4 with 2,3
checking ways to make 2 with 2,3
checking ways to make 2 with 1,2,3
checking ways to make 1 with 1,2,3
node memo-coin-change.js
checking ways to make 4 with 3
checking ways to make 1 with 3
checking ways to make 1 with 2,3
checking ways to make 1 with 1,2,3
checking ways to make 4 with 2,3
checking ways to make 2 with 2,3
checking ways to make 2 with 1,2,3
checking ways to make 1 with 1,2,3
checking ways to make 4 with 1,2,3
checking ways to make 3 with 1,2,3
checking ways to make 2 with 1,2,3
checking ways to make 1 with 1,2,3
4
answer time: 24.948ms
4
answer time1: 0.386ms
\___________________________________________________
bryan_dir:coinchange-memoized_exitstatus:0 ====>
checking ways to make 4 with 1,2,3
checking ways to make 3 with 1,2,3
checking ways to make 2 with 1,2,3
checking ways to make 1 with 1,2,3
4
answer time: 24.948ms
4
answer time1: 0.386ms
\___________________________________________________
bryan_dir:coinchange-memoized_exitstatus:0 ====>
*/
