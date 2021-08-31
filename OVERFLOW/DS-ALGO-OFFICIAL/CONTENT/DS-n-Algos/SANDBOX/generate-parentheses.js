// Source : https://leetcode.com/problems/generate-parentheses/
// Author : Bryan Guner

/**
 * @param {number} n
 * @return {string[]}
 */

var ans;

function dfs(s, left, right, n) {
  if (left === n && right === n) {
    ans.push(s);
    return;
  }

  if (left + 1 <= n) dfs(s + "(", left + 1, right, n);

  if (right + 1 <= n && right + 1 <= left) dfs(s + ")", left, right + 1, n);
}

var generateParenthesis = function (n) {
  ans = [];
  dfs("", 0, 0, n);
  return ans;
};
