/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a fixed length array arr of integers, duplicate each occurrence of zero,
 * shifting the remaining elements to the right.
 *
 * Note that elements beyond the length of the original array are not written.
 *
 * Do the above modifications to the input array in place, do not return anything
 * from your function.
 *
 * Example 1:
 * Input: [1,0,2,3,0,4,5,0]
 * Output: null
 * Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
 */

function duplicateZeros(value) {
  let queue = [];
  for (let index = 0; index < value.length; index++) {
    const current = value[index];
    if (queue.length) {
      queue.push(current);
      value[index] = queue.shift();
    }
    if (current === 0) {
      queue.push(current);
    }
  }
  return value;
}

test("duplicate Zeros", () => {
  expect(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])).toEqual([
    1, 0, 0, 2, 3, 0, 0, 4,
  ]);
});
