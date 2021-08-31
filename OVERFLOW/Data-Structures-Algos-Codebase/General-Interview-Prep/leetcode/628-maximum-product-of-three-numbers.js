/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an integer array, find three numbers whose product is
 * maximum and output the maximum product.
 *
 * Example 1:
 *
 * Input: [1,2,3]
 * Output: 6
 *
 *
 * Example 2:
 *
 * Input: [1,2,3,4]
 * Output: 24
 */

function maximumProductOfThreeNumbers(value) {
  value = value.sort((a, b) => a - b);
  let maxForNeg = value[0] * value[1] * value[value.length - 1];
  let maxForPositive = value
    .slice(value.length - 3, value.length)
    .reduce((t, c) => (t *= c));
  return maxForNeg > maxForPositive ? maxForNeg : maxForPositive;
}

test("maximum Product Of Three Numbers", () => {
  expect(maximumProductOfThreeNumbers([1, 2, 3, 4])).toEqual(24);
});
