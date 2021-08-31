/*******************************************************************************
Write a function evenRange(start, end) that returns an array containing all even
numbers between 'start' and 'end' in sequential order.

Examples:

evenRange(13, 20) => [ 14, 16, 18, 20 ]
evenRange(4, 11) => [ 4, 6, 8, 10 ]
evenRange(8, 5) => []
*******************************************************************************/

function evenRange(start, end) {
  var array = [];

  for (var i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }

  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenRange;
