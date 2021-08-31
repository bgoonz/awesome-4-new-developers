/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as
  the maximum frequency of any one of it's elements.
Find the smallest possible length of a continguous subarray of nums, that has the same degree
  as nums

Input: [1, 2, 2, 3, 1]
Output: 2
Explanation:
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
*/

// my approach was to write a helper method which would handle finding an array's degree
// then loop through the nums array, and for each sub-array:
//    find it's degree
//    if it === the nums degree, and it's less than the currently saved minLength
//    set the minLength equal to the length of that sub-array
// my solution seems to return the correct answer, but times out on LeetCode

var findDegree = function (arr) {
  let numHash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!numHash[arr[i]]) {
      numHash[arr[i]] = 1;
    } else {
      numHash[arr[i]] += 1;
    }
  }
  const counts = Object.values(numHash).sort((a, b) => b - a);
  return counts[0];
};

var findShortestSubArray = function (nums) {
  let degree = findDegree(nums);

  let subs = [];
  let k = 0;
  let minLength = nums.length;
  while (k < nums.length) {
    for (let j = 0; j <= nums.length; j++) {
      let sub = nums.slice(k, j);
      console.log(sub);

      if (sub.length >= degree) {
        let subDeg = findDegree(sub);
        console.log(subDeg);

        if (subDeg === degree && sub.length <= minLength) {
          minLength = sub.length;
          console.log(minLength);
          console.log("match");
        }
      }
    }
    k++;
  }

  return minLength;
};
// console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));

// the accepted solution:
// this does it without the helper function
// in the same for loop where you're finding the degree, you keep track of an
//    element's first and last index.
// take care not to replace the first index if it already exists, but you always
//    want to replace the last index with the most recent occurence
// Then to find the subarray where those numbers exist:
//    iterate over the counts hash map. If the value stored at a key === the max (degree)
//    then you want to find the min length subarray which contains those numbers
//    when you subtract last index from first index, you need to add 1 to account for 0 index

const findShortestSub = function (nums) {
  const counts = {};
  const firstIdxs = {};
  const lastIdxs = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const k = nums[i];
    if (!counts[k]) {
      counts[k] = 1;
    } else {
      counts[k] += 1;
    }
    max = Math.max(max, counts[k]);

    if (firstIdxs[k] === undefined) {
      firstIdxs[k] = i;
    }
    lastIdxs[k] = i;
  }
  let res = nums.length;

  for (let k in counts) {
    if (counts[k] === max) {
      res = Math.min(res, lastIdxs[k] - firstIdxs[k] + 1);
    }
  }
  return res;
};

console.log(findShortestSub([1, 2, 2, 3, 1]));
