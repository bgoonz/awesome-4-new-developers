let makeChange = (total) => {
  let coins = [1, 2, 5, 10, 20, 50, 100, 200];
  let count = 0;
  //Had to use var to escape block scope
  for (let a = total; a >= 0; a -= coins[coins.length - 1]) {
    for (let b = a; b >= 0; b -= coins[coins.length - 2]) {
      for (let c = b; c >= 0; c -= coins[coins.length - 3]) {
        for (let d = c; d >= 0; d -= coins[coins.length - 4]) {
          for (let e = d; e >= 0; e -= coins[coins.length - 5]) {
            for (let f = e; f >= 0; f -= coins[coins.length - 6]) {
              for (let g = f; g >= 0; g -= coins[coins.length - 7]) {
                count++;
              }
            }
          }
        }
      }
    }
  }
  return count;
};

console.log("makeChange(200): ", makeChange(200)); //makeChange(200):  73682
