// Source : https://leetcode.com/problems/range-sum-query-mutable/
// Author : Bryan Guner

/**
 * @constructor
 * @param {number[]} nums
 */

// Runtime: 196 ms
// Your runtime beats 100.00% of javascript submissions.
// use Binary Indexed Tree

function lowbit(x) {
  return x & -x;
}

var NumArray = function (nums) {
  this.len = nums.length;
  this.sum = [];
  this.nums = [];
  for (var i = 0; i <= this.len; i++) this.sum[i] = this.nums[i] = 0;

  for (var i = 0; i < this.len; i++) this.update(i, nums[i]);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  var add = val - this.nums[index];

  this.nums[index] = val;

  for (var i = index + 1; i <= this.len; i += lowbit(i)) this.sum[i] += add;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  var that = this;
  function getSum(index) {
    var ans = 0;
    for (var i = index; i; i -= lowbit(i)) ans += that.sum[i];
    return ans;
  }

  return getSum(j + 1) - getSum(i + 1 - 1);
};
