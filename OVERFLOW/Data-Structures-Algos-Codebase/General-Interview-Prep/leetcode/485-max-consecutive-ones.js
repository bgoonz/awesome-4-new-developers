/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 *
 * Example 1:
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 *     The maximum number of consecutive 1s is 3.
 * Note:
 *
 * The input array will only contain 0 and 1.
 * The length of input array is a positive integer and will not exceed 10,000
 */

function maxConsecutiveOnes(value) {
  let maxCount = 0;
  let current = 0;
  for (let index = 0; index < value.length; index++) {
    if (value[index] === 1) {
      current += 1;
    } else {
      maxCount = Math.max(maxCount, current);
      current = 0;
    }
  }
  return Math.max(maxCount, current);
}

test("max Consecutive Ones", () => {
  expect(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3);
});
