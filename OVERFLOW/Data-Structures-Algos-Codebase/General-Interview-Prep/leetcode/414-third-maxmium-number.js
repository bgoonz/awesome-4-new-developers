/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a non-empty array of integers, return the third maximum number
 * in this array. If it does not exist, return the maximum number. The
 * time complexity must be in O(n).
 *
 * Example 1:
 * Input: [3, 2, 1]
 * Output: 1
 * Explanation: The third maximum is 1.
 */

function thirdMaxmiumNumber(value) {
  value = Array.from(new Set(value));
  if (value.length < 3) return Math.max(...value);
  let firstMax = -Infinity,
    secondMax = -Infinity,
    thirdMax = -Infinity;
  for (let index = 0; index < value.length; index++) {
    const currentNumber = value[index];
    if (currentNumber < secondMax && currentNumber > thirdMax) {
      thirdMax = currentNumber;
    }
    if (currentNumber < firstMax && currentNumber > thirdMax) {
      thirdMax = secondMax;
      secondMax = currentNumber;
    }
    if (currentNumber > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = currentNumber;
    }
  }
  return thirdMax;
}

test("third Maxmium Number", () => {
  expect(thirdMaxmiumNumber([5, 2, 2])).toEqual(5);
  expect(thirdMaxmiumNumber([3, 2, 1])).toEqual(1);
  expect(thirdMaxmiumNumber([1, 2])).toEqual(2);
  expect(thirdMaxmiumNumber([2, 2, 3, 1])).toEqual(1);
  expect(thirdMaxmiumNumber([1, 2, -2147483648])).toEqual(-2147483648);
});
