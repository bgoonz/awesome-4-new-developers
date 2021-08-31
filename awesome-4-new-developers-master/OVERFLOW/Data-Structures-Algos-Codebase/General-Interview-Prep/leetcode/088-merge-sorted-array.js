/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1
 * as one sorted array.
 *
 * Note:
 *
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to m + n)
 * to hold additional elements from nums2.
 * Example:
 *
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * Output: [1,2,2,3,5,6]
 */

function mergeSortedArray(nums1, m, nums2, n) {
  let length = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[length--] = nums1[m--];
    } else {
      nums1[length--] = nums2[n--];
    }
  }
  return nums1;
}

test("merge Sorted Array", () => {
  expect(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([
    1, 2, 2, 3, 5, 6,
  ]);
  expect(mergeSortedArray([0], 0, [1], 1)).toEqual([1]);
});
