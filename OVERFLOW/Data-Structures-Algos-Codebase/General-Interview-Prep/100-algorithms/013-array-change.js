/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be arrayChange(inputArray) = 3. */

function arrayChange(arr) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] >= arr[index + 1]) {
      const difference = arr[index] + 1 - arr[index + 1];
      arr[index + 1] = arr[index] + 1;
      count += difference;
    }
  }
  return count;
}

test("array Change", () => {
  expect(arrayChange([1, 1, 1])).toEqual(3);
});
