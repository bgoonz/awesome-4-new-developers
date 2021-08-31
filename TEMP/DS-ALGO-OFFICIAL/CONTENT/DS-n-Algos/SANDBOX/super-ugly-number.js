// Source : https://leetcode.com/problems/super-ugly-number/
// Author : Bryan Guner

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  var len = primes.length,
    index = [];

  for (var i = 0; i < len; i++) index[i] = 0;

  var ans = [];
  ans.push(1);

  for (var i = 1; i < n; i++) {
    var minNumber = Infinity;

    for (var j = 0; j < len; j++) {
      var item = index[j];
      minNumber = Math.min(minNumber, primes[j] * ans[item]);
    }

    ans[i] = minNumber;

    for (var j = 0; j < len; j++) {
      var item = index[j];
      if (minNumber === primes[j] * ans[item]) index[j]++;
    }
  }

  return ans[n - 1];
};
