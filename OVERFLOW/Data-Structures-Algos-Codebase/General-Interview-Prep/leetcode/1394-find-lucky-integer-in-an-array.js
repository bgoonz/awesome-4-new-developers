/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array of integers arr, a lucky integer is an integer
 * which has a frequency in the array equal to its value. Return
 * a lucky integer in the array. If there are multiple lucky
 * integers return the largest of them. If there is no lucky
 * integer return -1.
 *
 * Example 1:
 *
 * Input: arr = [2,2,3,4]
 * Output: 2
 * Explanation: The only lucky number in the array is 2 because
 * frequency[2] == 2.
 */

function findLuckyIntegerInAnArray(nums) {
  let cache = {};
  let luckies = [];
  for (const num of nums) {
    cache[num] = (cache[num] || 0) + 1;
  }
  for (const key in cache) {
    if (Number(key) === cache[key]) {
      luckies.push(cache[key]);
    }
  }
  return luckies.length > 0 ? Math.max(...luckies) : -1;
}

test("find Lucky Integer In An Array", () => {
  expect(findLuckyIntegerInAnArray([2, 2, 3, 4])).toEqual(2);
});
