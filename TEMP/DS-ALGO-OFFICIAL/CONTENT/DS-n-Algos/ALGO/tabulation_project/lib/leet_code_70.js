// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

const climbStairs = (n) => {
  const dp = new Array(n + 1).fill(0);
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log("climbStairs(20): ", climbStairs(20));
/*
node leet_code_70.js
climbStairs(20):  10946

\___________________________________________________
bryan_dir:lib_exitstatus:0 ====>
*/
//---------------------
/*
Alternatively:
let climbStairs = function(n) {
    let n1 = 1;
    let n2 = 1;
    

    // n1 and n2 stands for how many ways it can reach n taking one step or two steps, such as n - 1 and n - 2
    for(let i = 2; i <= n; i++) {
        let ways = n1 + n2;
        n1 = n2;
        n2 = ways;
    }


    
    return n2;
};

*/
