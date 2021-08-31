/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array A of non-negative integers, return an array consisting of
 * all the even elements of A, followed by all the odd elements of A.
 *
 * Example 1:
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 */

function sortArrayByParity(nums) {
  return [].concat(
    nums.filter((n) => n % 2 === 0),
    nums.filter((n) => n % 2 !== 0)
  );
}

test("sort Array By Parity", () => {
  expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
});
