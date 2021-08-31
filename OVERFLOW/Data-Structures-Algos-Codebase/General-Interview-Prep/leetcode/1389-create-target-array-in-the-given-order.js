/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given two arrays of integers nums and index. Your task is to create
 * target array under the following rules:
 *
 *  - Initially target array is empty.
 *  - From left to right read nums[i] and index[i], insert at index
 *    index[i] the value nums[i] in target array.
 *  - Repeat the previous step until there are no elements to read
 *    in nums and index.
 *
 * It is guaranteed that the insertion operations will be valid.
 *
 * Example 1:
 * Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
 * Output: [0,4,1,3,2]
 * Explanation:
 * nums       index     target
 * 0            0        [0]
 * 1            1        [0,1]
 * 2            2        [0,1,2]
 * 3            2        [0,1,3,2]
 * 4            1        [0,4,1,3,2]
 */

function createTargetArrayInTheGivenOrder(nums, positions) {
  let result = [];
  for (let index = 0; index < nums.length; index++) {
    result.splice(positions[index], 0, nums[index]);
  }
  return result;
}

test("create Target Array In The Given Order", () => {
  expect(
    createTargetArrayInTheGivenOrder([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])
  ).toEqual([0, 4, 1, 3, 2]);
});
