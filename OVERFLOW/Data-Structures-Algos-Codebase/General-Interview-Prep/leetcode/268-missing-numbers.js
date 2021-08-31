/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 *
 * Example 1:
 * Input: [3,0,1]
 * Output: 2
 *
 * Example 2:
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 */

function missingNumbers(value) {
  let target = 0;
  for (let index = 1; index <= value.length; index++) {
    target += index;
  }

  for (let index = 0; index < value.length; index++) {
    target -= value[index];
  }

  return target;
}

test("missing Numbers", () => {
  expect(missingNumbers([3, 0, 1])).toEqual(2);
  expect(missingNumbers([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8);
});
