/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.

Example

For deposit = 100, rate = 20 and threshold = 170, the output should be depositProfit(deposit, rate, threshold) = 3.

Each year the amount of money on your account increases by 20%. It means that throughout the years your balance would be:

year 0: 100;
year 1: 120;
year 2: 144;
year 3: 172,8.
Thus, it will take 3 years for your balance to pass the threshold, which is the answer.
*/

function depositProfit(deposit, rate, threshold) {
  let amount = deposit;
  let year = 0;
  while (amount < threshold) {
    amount += (amount * 20) / 100;
    year += 1;
  }
  return year;
}

test("deposit Profit", () => {
  expect(depositProfit(100, 20, 170)).toEqual(3);
});
