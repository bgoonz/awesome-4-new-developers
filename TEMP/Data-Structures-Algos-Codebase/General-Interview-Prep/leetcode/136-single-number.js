/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a non-empty array of integers, every element appears twice
 * except for one. Find that single one.
 *
 * Example 1:
 * Input: [2,2,1]
 * Output: 1
 */

function singleNumber(value) {
  let result = 0;
  for (let i = 0; i < value.length; i++) {
    result = result ^ value[i];
  }
  return result;
}

test("single Number", () => {
  expect(singleNumber([2, 2, 1])).toEqual(1);
});
