/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

function threeSum(value) {
  if (value.length < 3) {
    return [];
  }
  let result = [];
  value = value.sort((a, b) => a - b);
  for (let index = 0; index < value.length; index++) {
    if (index > 0 && value[index] === value[index - 1]) continue;
    let target = -1 * value[index];
    let start = index + 1;
    let end = value.length - 1;
    while (start < end) {
      if (value[start] + value[end] === target) {
        result.push([value[start], value[index], value[end]]);
        while (value[start] === value[start + 1]) start++;
        while (value[end] === value[end - 1]) end--;
        start++;
        end--;
      } else if (value[start] + value[end] < target) {
        start++;
      } else {
        end--;
      }
    }
  }
  return result;
}

console.table(threeSum([-1, 0, 1, 2, -1, -4]));

/* test('three Sum', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual('Ashish')
}); */
