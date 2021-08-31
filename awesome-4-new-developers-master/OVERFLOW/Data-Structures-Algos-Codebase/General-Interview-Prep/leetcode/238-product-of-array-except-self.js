/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
  Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the 
  product of all the elements of nums except nums[i].

  Example:

  Input:  [1,2,3,4]
  Output: [24,12,8,6]
  Note: Please solve it without division and in O(n).
*/

function productOfArrayExceptSelf(nums) {
  let res = [1],
    back = 1;
  for (let index = 1; index < nums.length; index++) {
    res[index] = res[index - 1] * nums[index - 1];
  }
  for (let index = nums.length - 2; index >= 0; index--) {
    back = back * nums[index + 1];
    res[index] = res[index] * back;
  }
  return res;
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));

// test('product Of Array Except Self', () => {
//   expect(productOfArrayExceptSelf([1,2,3,4])).toEqual([24,12,8,6])
// });
