/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an array of size n, find the majority element. The majority
 * element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element
 * always exist in the array.
 *
 * Example 1:
 *
 * Input: [3,2,3]
 * Output: 3
 */

function majorityElement(value) {
  let map = {};
  let required = Math.floor(value.length / 2);
  for (let index = 0; index < value.length; index++) {
    map[value[index]] = (map[value[index]] || 0) + 1;
    if (map[value[index]] > required) {
      return value[index];
    }
  }
}

test("majority Element", () => {
  expect(majorityElement([3, 2, 3])).toEqual(3);
});
