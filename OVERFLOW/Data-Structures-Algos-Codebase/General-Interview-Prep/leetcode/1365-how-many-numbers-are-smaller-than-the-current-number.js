/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given the array nums, for each nums[i] find out how many numbers
 * in the array are smaller than it. That is, for each nums[i] you
 * have to count the number of valid j's such that j != i and nums[j]
 * < nums[i].
 *
 * Example 1:
 * Input: nums = [8,1,2,2,3]
 * Output: [4,0,1,1,3]
 * Explanation:
 * For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
 * For nums[1]=1 does not exist any smaller number than it.
 * For nums[2]=2 there exist one smaller number than it (1).
 * For nums[3]=2 there exist one smaller number than it (1).
 * For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
 */

function howManyNumbersAreSmallerThanTheCurrentNumber(value) {
  let result = new Array(value.length).fill(0);
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (value[i] !== value[j] && value[j] < value[i]) {
        result[i] += 1;
      }
    }
  }
  return result;
}

test("how Many Numbers Are Smaller Than The Current Number", () => {
  expect(howManyNumbersAreSmallerThanTheCurrentNumber([8, 1, 2, 2, 3])).toEqual(
    [4, 0, 1, 1, 3]
  );
});
