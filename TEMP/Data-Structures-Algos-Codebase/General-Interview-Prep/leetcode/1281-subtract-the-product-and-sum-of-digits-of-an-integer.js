/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an integer number n, return the difference between the product
 * of its digits and the sum of its digits.
 *
 *
 * Example 1:
 *
 * Input: n = 234
 * Output: 15
 * Explanation:
 * Product of digits = 2 * 3 * 4 = 24
 * Sum of digits = 2 + 3 + 4 = 9
 * Result = 24 - 9 = 15
 */

function subtractTheProductAndSumOfDigitsOfAnInteger(num) {
  let sum = 0;
  let product = 1;
  while (num > 0) {
    sum += num % 10;
    product *= num % 10;
    num = Math.floor(num / 10);
  }
  return product - sum;
}

test("subtract The Product And Sum Of Digits Of An Integer", () => {
  //expect(subtractTheProductAndSumOfDigitsOfAnInteger(234)).toEqual(15)
  //expect(subtractTheProductAndSumOfDigitsOfAnInteger(4421)).toEqual(21)
  expect(subtractTheProductAndSumOfDigitsOfAnInteger(643)).toEqual(59);
});
