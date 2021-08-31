// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

const climbStairs = (n) => {
  let table = new Array(n + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < n; i++) {
    table[i + 1] += table[i];
    if (i + 2 <= n) table[i + 2] += table[i];
  }

  return table[n];
};
