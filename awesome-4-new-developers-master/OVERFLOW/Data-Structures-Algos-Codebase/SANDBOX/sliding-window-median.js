// Source : https://leetcode.com/problems/sliding-window-median/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  let ans = [],
    res = nums.slice(0, k);

  let findMedian = () => {
    if (k & 1) return res[k >> 1];
    else {
      let a = (k >> 1) - 1,
        b = k >> 1;
      return (res[a] + res[b]) / 2;
    }
  };

  res.sort((a, b) => a - b);

  ans.push(findMedian());

  for (let i = k, len = nums.length; i < len; i++) {
    let insertPos = binarySearch2(res, nums[i]);
    res.splice(insertPos, 0, nums[i]);

    let delPos = binarySearch(res, nums[i - k]);
    res.splice(delPos, 1);

    ans.push(findMedian());
  }

  return ans;
};

function binarySearch(a, target) {
  var start = 0,
    end = a.length - 1;

  while (start <= end) {
    var mid = (start + end) >> 1;
    if (a[mid] >= target) end = mid - 1;
    else start = mid + 1;
  }

  return a[start] === target ? start : -1;
}

function binarySearch2(a, target) {
  target += 1;
  var start = 0,
    end = a.length - 1;

  while (start <= end) {
    var mid = (start + end) >> 1;
    if (a[mid] >= target) end = mid - 1;
    else start = mid + 1;
  }

  return start;
}
