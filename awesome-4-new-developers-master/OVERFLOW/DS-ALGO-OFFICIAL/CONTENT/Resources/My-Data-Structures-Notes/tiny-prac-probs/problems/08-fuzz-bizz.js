/******************************************************************************
Write a function fuzzBizz(max) that returns an array of numbers under
the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.

Examples:

fuzzBizz(17) => [ 2, 4, 6, 7, 8, 10, 12, 16 ]
fuzzBizz(30) => [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]
*******************************************************************************/

function fuzzBizz(max) {
  let nums = [];

  for (let i = 0; i < max; i++) {
    if ((i % 2 === 0 || i % 7 === 0) && i % 14 !== 0) {
      nums.push(i);
    }
  }

  return nums;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fuzzBizz;
