/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint
 * stopping you from robbing each of them is that adjacent houses have
 * security system connected and it will automatically contact the police
 * if two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money
 * of each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 *
 * Example 1:
 *
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 *              Total amount you can rob = 1 + 3 = 4.
 * Example 2:
 *
 * Input: [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 *              Total amount you can rob = 2 + 9 + 1 = 12.
 */

function houseRobber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let result = [nums[0], Math.max(nums[0], nums[1])];
  for (let index = 2; index < nums.length; index++) {
    result.push(Math.max(nums[index] + result[index - 2], result[index - 1]));
  }
  return result.pop();
}

test("house Robber", () => {
  expect(houseRobber([2, 7, 9, 3, 1])).toEqual(12);
  expect(houseRobber([1, 2, 3, 1])).toEqual(4);
});
