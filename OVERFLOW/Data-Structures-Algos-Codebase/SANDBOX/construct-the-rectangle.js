// Source : https://leetcode.com/problems/construct-the-rectangle/
// Author : Bryan Guner

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let mid = Math.ceil(Math.sqrt(area));

  for (; ; mid++) {
    if (area % mid === 0) return [mid, area / mid];
  }
};
