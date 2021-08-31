There are only two ways to make change for 6 cents, but f(6) = 3. f gives the number of ways of making 5 cents and
adding a penny, plus the number of ways of making 1 cent and adding a nickel. When changing money, we would like
"1 penny, l nickel" and "l nickel, l penny" to be considered as just one way of making change for 6 cents.
We can fix this by adding each type of coin in turn; we will not be able to count different orderings twice if there are
no different orderings.
By increasing the dimension of the recurrence relation. we keep track of enough information to actually solve the
problem.

---

> The boundary cases assert that there is exactly one way to make change for 0 cents using a positive number of coins.
> but there are no ways to make change for negative amounts, or using no coins.

---

In the non-boundary case. the number of ways of making change using the first k types of coin is the number of ways
that don't use that coin, together with the number of ways that do.

First. the number of ways of making change using only the first type of coin. (which is always assumed to be I in this
sort of problem so that change can be made for any integral amount). is always exactly 1.

---

```js
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
  var waysOfDoingNcents = [];
  for (var i = 0; i <= amount; i++) {
    waysOfDoingNcents[i] = 0;
  }
  // there is 1 way to renturn 0 cents
  waysOfDoingNcents[0] = 1;
  for (var j = 0; j < denominations.length; j++) {
    //  can only start returning change with coins in our denominations
    var coin = denominations[j];
    //  start bottom up, each time reducing change amout with curr coin.
    for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
      var higherAmountRemainder = higherAmount - coin;
      // ways to create change is equivalent to reducing the problem to a known problem
      // and gaining all the ways to solve for smaller problems
      waysOfDoingNcents[higherAmount] +=
        waysOfDoingNcents[higherAmountRemainder];
    }
  }
  return waysOfDoingNcents[amount];
}
var denominations = [1, 2, 3];
var amount = 4;
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
```
