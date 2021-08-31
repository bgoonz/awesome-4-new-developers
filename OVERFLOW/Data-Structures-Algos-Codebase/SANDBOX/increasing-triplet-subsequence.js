// Source : https://leetcode.com/problems/increasing-triplet-subsequence/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  var first, second, first2, second2;

  for (var i = 0, len = nums.length; i < len; i++) {
    var item = nums[i];

    if (first === undefined) {
      first = item;
    } else if (second === undefined) {
      if (item > first) second = item;
      else first = item;
    } else {
      if (item > second) return true;
      else if (item > first && item < second) second = item;
      else {
        if (first2 === undefined) first2 = item;
        else if (second2 === undefined) {
          if (item > first2) {
            second2 = item;
            first = first2;
            second = second2;
            first2 = second2 = undefined;
          } else first2 = item;
        }
      }
    }
  }

  return false;
};
