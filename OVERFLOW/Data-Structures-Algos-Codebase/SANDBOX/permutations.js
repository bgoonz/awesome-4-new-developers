// Source : https://leetcode.com/problems/permutations/
// Author : Bryan Guner

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var ans, res, hash, len;

function dfs(num, nums) {
  if (num === len) {
    var tmp = res.map(function (item) {
      return item;
    });

    ans.push(tmp);
    return;
  }

  for (var i = 0; i < len; i++) {
    if (hash[i]) continue;
    hash[i] = true;
    res.push(nums[i]);
    dfs(num + 1, nums);
    hash[i] = false;
    res.pop();
  }
}

var permute = function (nums) {
  (len = nums.length), (ans = []), (res = []), (hash = []);

  dfs(0, nums);
  return ans;
};
