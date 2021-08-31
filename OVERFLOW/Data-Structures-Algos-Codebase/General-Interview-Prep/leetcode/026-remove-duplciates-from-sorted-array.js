/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function removeDuplciatesFromSortedArray(nums) {
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      j++;
    } else {
      nums[i - j] = nums[i];
    }
  }
  console.log(nums);
  return nums.length - j;
}

test("remove Duplciates From Sorted Array", () => {
  expect(removeDuplciatesFromSortedArray([1, 1, 2])).toEqual(2);
  expect(
    removeDuplciatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
  ).toEqual(5);
});
