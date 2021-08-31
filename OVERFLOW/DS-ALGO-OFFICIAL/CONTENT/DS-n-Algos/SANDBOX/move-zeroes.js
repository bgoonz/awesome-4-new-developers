// Source : https://leetcode.com/problems/move-zeroes/
// Author : Bryan Guner

var moveZeroes = function (nums) {
  for (var i = nums.length; i--; ) {
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};
