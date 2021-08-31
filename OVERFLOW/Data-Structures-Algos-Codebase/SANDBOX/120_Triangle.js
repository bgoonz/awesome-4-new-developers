// Leetcode 120
// Language: Javascript
// Problem: https://leetcode.com/problems/triangle/
// Author:
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {
  let curLvlIndex = 0;
  let cur = triangle[curLvlIndex];
  let next;

  while (curLvlIndex < triangle.length - 1) {
    next = triangle[curLvlIndex + 1];

    for (let i = 0; i < next.length; i++) {
      let a;
      let b;
      if (i === 0) {
        b = Infinity;
      } else {
        b = cur[i - 1];
      }

      if (i < cur.length) {
        a = cur[i];
      } else {
        a = Infinity;
      }

      next[i] += Math.min(a, b);
    }
    cur = next;
    curLvlIndex++;
  }

  return Math.min.apply(null, cur);
};
