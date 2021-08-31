/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be arrayMaxConsecutiveSum(inputArray, k) = 8. All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8
*/

function arrayMaxConsecutiveSum(array, n) {
  let sum = 0;
  let max = 0;
  for (let index = 0; index < n; index++) {
    sum += array[index];
  }
  max = sum;
  for (let index = n; index < array.length; index++) {
    sum = array[index] + sum - array[index - n];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));

// test('array Max Consecutive Sum', () => {
//   expect(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)).toEqual(8)
// })
