// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3.
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end

// Tabulation
function stepper(nums) {
  const table = new Array(nums.length + 1).fill(false);
  table[0] = true;

  for (let numIdx = 0; numIdx < nums.length; numIdx++) {
    if (table[numIdx]) {
      for (
        let tableIdx = numIdx + 1;
        tableIdx <= numIdx + nums[numIdx];
        tableIdx++
      ) {
        table[tableIdx] = true;
        if (table[table.length - 1]) return true;
      }
    }
  }

  return false;
}

// Memoization
function stepper(nums, memo = {}) {
  if (nums in memo) return memo[nums]; // Can use nums.length as key to save space complexity
  if (nums.length === 0) return true;
  for (let nextStep = 1; nextStep <= nums[0]; nextStep++) {
    if (stepper(nums.slice(nextStep), memo)) {
      memo[nums] = true;
      return true;
    }
  }
  memo[nums] = false;
  return false;
}

// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6

// Tabulation
function maxNonAdjacentSum(nums) {
  if (nums.length === 0) return 0;
  let table = new Array(nums.length).fill(0);
  table[0] = nums[0];

  for (let i = 1; i < table.length; i++) {
    const useNum = nums[i] + (table[i - 2] || 0);
    const skipNum = table[i - 1];
    table[i] = Math.max(useNum, skipNum);
  }

  return table[table.length - 1];
}

// Memoization
function maxNonAdjacentSum(nums, memo = {}) {
  if (nums in memo) return memo[nums];
  if (nums.length === 0) return 0;

  const sums = [];
  nums.forEach((num, idx) => {
    sums.push(num + maxNonAdjacentSum(nums.slice(idx + 2), memo));
  });
  memo[nums] = Math.max(...sums);
  return memo[nums];
}

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
  let table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  coins.forEach((coin) => {
    for (let val = 0; val < table.length; val++) {
      for (let timesUsed = 0; timesUsed * coin <= val; timesUsed++) {
        let valNeeded = val - timesUsed * coin;
        let coinsUsed = table[valNeeded] + timesUsed;
        if (coinsUsed < table[val]) table[val] = coinsUsed;
      }
    }
  });
  return table[table.length - 1];
}

module.exports = {
  stepper,
  maxNonAdjacentSum,
  minChange,
};
