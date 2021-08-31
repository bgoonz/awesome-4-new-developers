// Leetcode 118
// Language: Javascript
// Problem: https://leetcode.com/problems/pascals-triangle/
// Author: Bryan Guner
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const result = [];

  if (numRows <= 0) {
    return result;
  }

  for (let i = 0; i < numRows; i++) {
    const cur = [];
    const pre = i > 0 ? result[i - 1] : [];

    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        cur.push(1);
      } else if (j === i) {
        cur.push(1);
      } else {
        cur.push(pre[j] + pre[j - 1]);
      }
    }

    result.push(cur);
  }

  return result;
};
