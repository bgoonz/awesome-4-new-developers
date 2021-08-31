/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an integer n, return any array containing n unique integers such that they add up to 0
 *
 * Example 1:
 *
 * Input: n = 5
 * Output: [-7,-1,1,3,4]
 * Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4]
 */

function findNUniqueIntegersSumUpToZero(n) {
  let result = n % 2 === 0 ? [n, -n] : [0];
  for (let index = 1; index < n / 2; index++) {
    result.push(index, -index);
  }
  return result;
}

test("find N Unique Integers Sum Up To Zero", () => {
  expect(findNUniqueIntegersSumUpToZero(5)).toEqual([0, 1, -1, 2, -2]);
});
