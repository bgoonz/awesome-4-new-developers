let countChange = (money, coins) => {
  function countChangeSub(money, coins, n) {
    if (money == 0) return 1;
    if (money < 0 || coins.length == n) return 0;
    let countSubArr =
      countChangeSub(money - coins[n], coins, n) +
      countChangeSub(money, coins, n + 1);
    return countSubArr;
  }
  return countChangeSub(money, coins, 0);
};

console.log("countChange(23,[1,2,5]): ", countChange(23, [1, 2, 5])); //countChange(23,[1,2,5]):  36
