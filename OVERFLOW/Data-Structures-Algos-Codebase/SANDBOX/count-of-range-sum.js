// Source : https://leetcode.com/problems/count-of-range-sum/
// Author : Bryan Guner

var ans;

var wlower, wupper;

function merge(left, right) {
  ans += getAns(left, right);

  var tmp = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) tmp.push(left.shift());
    else tmp.push(right.shift());
  }

  return tmp.concat(left, right);
}

function mergeSort(a) {
  if (a.length === 1) return a;

  var mid = ~~(a.length / 2),
    left = a.slice(0, mid),
    right = a.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  wlower = lower;
  wupper = upper;

  var arr = [];

  arr.push(0);

  nums.forEach(function (item) {
    var last = arr[arr.length - 1];
    arr.push(last + item);
  });

  ans = 0;

  mergeSort(arr);

  return ans;
};

function getAns(a, b) {
  var sum = 0;

  var lena = a.length;
  var lenb = b.length;

  var start = 0;
  var end = 0;

  for (var i = 0; i < lenb; i++) {
    // to get start
    while (b[i] - a[start] >= wlower) {
      start++;
    }

    // to get end
    while (b[i] - a[end] > wupper) {
      end++;
    }

    sum += start - end;
  }

  return sum;
}
