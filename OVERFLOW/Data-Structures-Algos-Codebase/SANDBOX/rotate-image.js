// Source : https://leetcode.com/problems/rotate-image/
// Author : Bryan Guner

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  var len = matrix.length,
    tmp = [];

  for (var i = 0; i < len; i++) {
    tmp[i] = [];
    for (var j = 0; j < len; j++) tmp[i][j] = matrix[i][j];
  }

  for (var i = 0; i < len; i++)
    for (var j = 0; j < len; j++) matrix[i][j] = tmp[len - j - 1][i];
};
