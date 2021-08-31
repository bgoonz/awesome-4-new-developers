/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
  Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

  Example 1:

  Input: [2,3,-2,4]
  Output: 6
  Explanation: [2,3] has the largest product 6.
  Example 2:

  Input: [-2,0,-1]
  Output: 0
  Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

function maximumProductSubarray(value) {
  let min = [1];
  let max = [1];
  for (let index = 0; index < value.length - 1; index++) {
    const currentNum = value[index];
    if (value[index] < 0) {
      max[index + 1] = Math.max(currentNum * min[index], currentNum);
      min[index + 1] = Math.min(currentNum * max[index], currentNum);
    } else {
      max[index + 1] = Math.max(currentNum * max[index], currentNum);
      min[index + 1] = Math.min(currentNum * min[index], currentNum);
    }
  }
  max[0] = -Infinity;
  return Math.max(...max);
}

console.table(maximumProductSubarray([2, 3, -2, 4]));
/* 
test('maximum Product Subarray', () => {
  expect(maximumProductSubarray([2,3,-2,4])).toEqual(6)
}); */
