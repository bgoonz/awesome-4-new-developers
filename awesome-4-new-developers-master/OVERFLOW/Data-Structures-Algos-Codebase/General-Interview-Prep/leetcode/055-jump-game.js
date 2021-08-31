/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
 * Given an array of non-negative integers, you are initially positioned at the 
  first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that position.
 * 
 * Determine if you are able to reach the last index.
 * 
 * Example 1:
 * 
 * Input: [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * Example 2:
 * 
 * Input: [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum
 *              jump length is 0, which makes it impossible to reach the last index.
 * 
*/

function jumpGame(nums) {
  let dpPositions = new Array(nums.length).fill(false);
  dpPositions[0] = true;
  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (dpPositions[i] && i + nums[i] >= j) {
        dpPositions[j] = true;
        break;
      }
    }
  }
  return dpPositions[nums.length - 1];
}

test("jump Game", () => {
  expect(jumpGame([2, 3, 1, 1, 4])).toEqual(true);
  expect(jumpGame([3, 2, 1, 0, 4])).toEqual(false);
});
