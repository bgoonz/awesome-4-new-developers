function minCoinChange(coins, amount) {
  const cache = [];

  const minChange = (value) => {
    if (!value) {
      return [];
    }
    if (cache[value]) {
      return cache[value];
    }
    let min = [];
    let newMin;
    let newAmount;

    coins.forEach((coin) => {
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = minChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        // console.log('new Min ' + min + ' for ' + amount);
      }
    });

    return (cache[value] = min);
  };
  return minChange(amount);
}
module.exports = minCoinChange;
