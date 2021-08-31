function radixSort(arr) {
  if (!(arr instanceof Array)) return null;

  const maxDigits = getMaxDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from(
      {
        length: 10,
      },
      () => []
    );
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigitFrom(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }

  return arr;
}

const getDigitFrom = (num, place) =>
  Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

const getIntLength = (num) =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

const getMaxDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    const currentIntDigits = getIntLength(nums[i]);
    if (currentIntDigits > maxDigits) maxDigits = currentIntDigits;
  }
  return maxDigits;
};

module.exports = {
  radixSort,
};
