/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

function avgValue(array) {
  let total = 0;

  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];
    total += num;
  }
  let avg = total / array.length;
  return avg;
}

module.exports = avgValue;
