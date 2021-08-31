/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array arr of integers, check if there exists two integers N and M
 * such that N is the double of M ( i.e. N = 2 * M).
 *
 * More formally check if there exists two indices i and j such that :
 *
 * i != j
 * 0 <= i, j < arr.length
 * arr[i] == 2 * arr[j]
 *
 * Example 1:
 *
 * Input: arr = [10,2,5,3]
 * Output: true
 * Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
 */

function checkIfNAndItsDoubleExist(nums) {
  let map = {};
  for (const num of nums) {
    if (map[num] > -Infinity) return true;
    map[num * 2] = num;
    map[num / 2] = num;
  }
  return false;
}

test("check If N And Its Double Exist", () => {
  expect(checkIfNAndItsDoubleExist([10, 2, 5, 3])).toEqual(true);
});
