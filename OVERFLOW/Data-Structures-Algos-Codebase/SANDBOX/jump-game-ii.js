// Source : https://leetcode.com/problems/jump-game-ii/
// Author : Bryan Guner

function binarySearch(a, start, end, target) {
  while (start <= end) {
    var mid = ~~((start + end) >> 1);
    if (a[mid] > target) end = mid - 1;
    else if (a[mid] < target) start = mid + 1;
    else return mid;
  }
  return start;
}

var jump = function (nums) {
  var dp = [],
    end = 0;

  for (var i = 0, len = nums.length; i < len; i++) dp[i] = i ? -1 : 0;

  nums.forEach(function (item, index) {
    var tmp = binarySearch(dp, 0, end, index);
    dp[tmp + 1] = Math.max(dp[tmp + 1], index + item);
    end = tmp + 1;
  });

  return binarySearch(dp, 0, end, len - 1);
};
