function getReverse(value) {
  let reverse = 0;
  let digit = value;
  while (digit > 0) {
    const remainder = digit % 10;
    reverse = reverse * 10 + remainder;
    digit = Math.floor(digit / 10);
  }
  return reverse;
}

function largestPalindromeProduct() {
  let largest = 0;
  const floor = 100;
  const ceiling = 999;
  for (let i = ceiling - 1; i > floor; i--) {
    for (let j = ceiling; j > floor; j--) {
      const product = i * j;
      if (product === getReverse(product)) {
        if (product > largest) {
          largest = product;
        }
      }
    }
  }
  return largest;
}

const result = largestPalindromeProduct();
console.log(result);
