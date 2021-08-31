// Source : https://leetcode.com/problems/arithmetic-slices/
// Author : Bryan Guner

"use strict";

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  let len = A.length;
  let ans = 0;

  for (let i = 0; i < len; i++) {
    let diff;
    let num = 2;
    for (let j = i + 1; j < len; j++) {
      if (j === i + 1) diff = A[j] - A[i];
      else if (A[j] - A[j - 1] === diff) num++;
      else break;
    }

    ans += num - 2;
  }

  return ans;
};
