// Source : https://leetcode.com/problems/counting-bits/
// Author : Bryan Guner

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var ans = Array(num + 1);
  for (var i = 0; i <= num; i++) ans[i] = hammingWeight(i);

  return ans;
};

var hammingWeight = function (n) {
  n = ((n & 0xaaaaaaaa) >>> 1) + (n & 0x55555555);
  n = ((n & 0xcccccccc) >>> 2) + (n & 0x33333333);
  n = ((n & 0xf0f0f0f0) >>> 4) + (n & 0x0f0f0f0f);
  n = ((n & 0xff00ff00) >>> 8) + (n & 0x00ff00ff);
  n = ((n & 0xffff0000) >>> 16) + (n & 0x0000ffff);
  return n;
};
