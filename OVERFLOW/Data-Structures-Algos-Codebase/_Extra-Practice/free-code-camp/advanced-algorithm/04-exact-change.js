function checkCashRegister(price, cash, cid) {
  // set up vars
  const currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };
  const change = [];
  let difference = cash - price;

  // if difference === cid, denoms don't matter
  const cidVal = [];
  cid.forEach((n) => cidVal.push(n[1]));
  const cidSum = cidVal.reduce((a, b) => a + b);
  if (difference === cidSum) {
    return "Closed";
  } else {
    // loop backwards through cid highest to lowest
    for (let i = cid.length - 1; i >= 0; i--) {
      let acc = 0;
      var cash = cid[i][1]; // amount of cash
      const name = cid[i][0]; // name of currency
      const denom = currency[name]; // will access value
      // while denomination of this type exists and difference is greater than one unit, add this denomination
      while (cash / denom >= 1 && difference >= denom) {
        acc += denom;
        cash = cash - denom;
        difference = (difference - denom).toFixed(2);
      }
      // on loop break, will add accumulated denom, if any of that type
      if (acc > 0) {
        change.push([name, acc]);
      }
      // continues through remainder of cid
    }

    // if all difference is accounted for and there was enough cid
    if (difference == 0) {
      return change;
    }
    // if not all difference was accounted for
    else if (difference > 0) {
      return "Insufficient Funds";
    }
  }
}

console.log(
  checkCashRegister(3.26, 100.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0],
  ])
);
