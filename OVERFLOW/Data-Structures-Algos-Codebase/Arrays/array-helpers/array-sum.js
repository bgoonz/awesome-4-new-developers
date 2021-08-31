let reduce2Sum = (arr) => {
  let sum = arr.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue);
  }, 0);
  return sum;
};
const m = [1, 43, 656, 8, 54, 908, 4, 5, 23, 78, 435, 89, 45, 476, 89];
const n = [234, 56, 90, 675, 56, 786, 90, 564, 8, 657, 87, 64, 354, 2, 75];
const q = [34, 76, 76, 564, 34, 32, 16, 67, 25, 98, 90, 345, 235, 64, 134, 76];
reduce2Sum(m);
console.log("reduce2Sum( m ): ", reduce2Sum(m));
reduce2Sum(n);
console.log("reduce2Sum( n ): ", reduce2Sum(n));
reduce2Sum(q);
console.log("reduce2Sum( q ): ", reduce2Sum(q));
/*
reduce2Sum( m ): 2914
reduce2Sum( n ): 3798
reduce2Sum( q ): 1966

\ ___________________________________________________
bryan_dir: array - helpers_exitstatus: 0 === =>
*/
