function sumRecursive(arr) {
  // base case: when no elements in array, sum of all elements is 0
  if (!arr.length) return 0;
  return arr.pop() + sumRecursive(arr);
}

// O(n) time
// O(n) space (amount of stack frames)

console.log(sumRecursive([2, 3, 4])); // 9

// There are many ways you can shuffle a collection.
// Imagine shuffling a deck of cards, how do you know when to stop shuffling?
// This implementation is moving cards n number of times where n is the length of the array
Array.prototype.shuffle = function () {
  // const arr = this.slice(); // duplicate if returning a new array
  for (let i = 0; i < this.length; i++) {
    const randomIndex = Math.floor(Math.random() * this.length);
    [this[i], this[randomIndex]] = [this[randomIndex], this[i]];
    // [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return this;
  // return arr;
};

// O(n) time
// O(1) space (if not returning a new array, O(n) if returning a new array)
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle());

// Without using sets
function pairSum(arr, k) {
  const seen = {};
  arr.forEach((ele) => {
    seen[ele] = false;
  });
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const possiblePair = k - num;
    if (seen.hasOwnProperty(possiblePair)) {
      //Determines whether an object has a property with the specified name.
      if (possiblePair === Math.min(possiblePair, num)) {
        seen[possiblePair] = true;
      } else {
        seen[num] = true;
      }
    } else {
      delete seen[num];
    }
  }
  const res = [];
  for (let num in seen) {
    if (seen[num]) {
      res.push([Number(num), k - num]);
    }
  }
  return res;
}

// Using Sets
function pairSumWithSets(arr, k) {
  const set = new Set(arr);
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const possiblePair = k - num;
    if (set.has(possiblePair)) {
      seen.add(Math.min(possiblePair, num));
    }
  }
  const res = [];
  seen.forEach((num) => {
    res.push([num, k - num]);
  });
  return res;
}

// O(n) time
// O(n) space

console.log(pairSum([3, 5, 6, 2], 8)); // [[3, 5], [2, 6]]

function bSearch(arr, target) {
  // array is sorted
  if (arr.length === 0) return null;
  const midIdx = Math.floor(arr.length / 2);
  const mid = arr[midIdx];

  if (mid === target) return midIdx;
  else if (target < mid) {
    const left = arr.slice(0, midIdx);
    return bSearch(left, target);
  } else if (target > mid) {
    const right = arr.slice(midIdx + 1);
    const rightBSearch = bSearch(right, target);
    if (rightBSearch === null) return null;
    else return rightBSearch + midIdx + 1;
  }
}

// O(log n * log n) time (because slicing array each time and length of array is changing with log n)
// O(n) space because all the lengths of all arrays add up to n

console.log(bSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); // 6
console.log(bSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)); // null

function longestPalindrome(str) {
  let maxLongest = 0;
  let res;
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        for (let k = j; k >= i; k--) {
          if (i === k && j - i > maxLongest) {
            res = [i, j];
            maxLongest = j - i;
          }
          const incr = j - k;
          if (str[i + incr] !== str[j - incr]) {
            break;
          }
        }
      }
    }
  }
  return res;
}

// O(n ^ 3) time
// O(1) space

console.log(longestPalindrome("acapella")); // [0, 2]
console.log(longestPalindrome("racecar")); // [0, 6]
console.log(longestPalindrome("hello")); // not a palindrome so can return many different pairs

function productifyWithoutDivision(arr) {
  const res = [];

  let beforeProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    res[i] = beforeProduct;
    beforeProduct = beforeProduct * arr[i];
  }

  let afterProduct = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    res[j] = res[j] * afterProduct;
    afterProduct = afterProduct * arr[j];
  }

  return res;
}

// O(n) time
// O(n) space

console.log(productifyWithoutDivision([3, 4, 5])); // [20, 15, 12]

function moveZeroes(arr) {
  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer2 > pointer1) {
    while (arr[pointer1] !== 0 && pointer1 < pointer2) {
      pointer1++;
    }
    while (arr[pointer2] === 0 && pointer2 > pointer1) {
      pointer2--;
    }
    [arr[pointer1], arr[pointer2]] = [arr[pointer2], arr[pointer1]];
  }
  return arr;
}

// O(n) time
// may seem like an O(n ^2) time, but look carefully! The pointers will
// be reassigned to the each point in the array only once.

// O(1) space

console.log(moveZeroes([1, 2, 0, 3, 4, 0, 5, 6, 0])); // [1, 2, 6, 3, 4, 5, 0, 0, 0]
