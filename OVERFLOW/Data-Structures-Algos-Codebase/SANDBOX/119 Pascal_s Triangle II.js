// Leetcode 119
// Language: Javascript
// Problem: https://leetcode.com/problems/pascals-triangle-ii/
// Author: Bryan Guner
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  if (rowIndex === null || rowIndex < 0) {
    return [];
  }

  let result = [1];

  for (let i = 1; i <= rowIndex; i++) {
    const cur = [];

    for (let j = 0; j <= i; j++) {
      cur[j] = (result[j - 1] || 0) + (result[j] || 0);
    }

    result = cur;
  }

  return result;
};
