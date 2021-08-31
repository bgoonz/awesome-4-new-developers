function getDigitFrom(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getIntLength(num) {
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  let maxDigits = getMaxDigits(arr);
  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigitFrom(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

module.exports = {
  radixSort,
};
