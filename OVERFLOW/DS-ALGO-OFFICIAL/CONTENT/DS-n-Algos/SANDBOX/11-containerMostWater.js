/**
 * The idea is from https://leetcode.com/discuss/41527/simple-and-fast-c-c-with-explanation
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let start = 0;
  let end = height.length - 1;
  let area = 0;

  while (start < end) {
    const minHeight = Math.min(height[start], height[end]);
    area = Math.max(area, minHeight * (end - start));
    while (start < end && height[start] <= minHeight) {
      start++;
    }
    while (start < end && height[end] <= minHeight) {
      end--;
    }
  }

  return area;
};
