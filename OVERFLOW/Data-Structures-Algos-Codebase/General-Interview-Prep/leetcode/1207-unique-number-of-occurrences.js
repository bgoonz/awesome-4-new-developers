/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array of integers arr, write a function that returns true if
 * and only if the number of occurrences of each value in the array is unique.
 *
 * Example 1:
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two
 * values have the same number of occurrences.
 */

function uniqueNumberOfOccurrences(nums) {
  let map = {};
  for (let index = 0; index < nums.length; index++) {
    map[nums[index]] = (map[nums[index]] || 0) + 1;
  }
  return (
    Object.values(map).length === Array.from(new Set(Object.values(map))).length
  );
}

test("unique Number Of Occurrences", () => {
  expect(uniqueNumberOfOccurrences([1, 2, 2, 1, 1, 3])).toEqual(true);
  expect(uniqueNumberOfOccurrences([1, 2])).toEqual(false);
  expect(uniqueNumberOfOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toEqual(
    true
  );
});
