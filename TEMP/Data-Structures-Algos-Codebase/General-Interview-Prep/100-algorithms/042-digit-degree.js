/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

Example

For n = 5, the output should be digitDegree(n) = 0;
For n = 100, the output should be digitDegree(n) = 1. 1 + 0 + 0 = 1.
For n = 91, the output should be digitDegree(n) = 2. 9 + 1 = 10 -> 1 + 0 = 1.
*/

function digitDegree(num) {
  let count = 0;
  let currentNumber = num;
  if (currentNumber < 10) {
    return count;
  } else {
    while (currentNumber > 9) {
      count += 1;
      currentNumber = getDigit(currentNumber);
      if (currentNumber < 10) {
        break;
      }
    }
  }
  return count;
}

function getDigit(value) {
  let num = value
    .toString()
    .split("")
    .map((digit) => parseInt(digit));
  return num.reduce((a, b) => a + b);
}

console.log(digitDegree(91));
// test('digit Degree', () => {
//   expect(digitDegree('Ashish')).toEqual('Ashish')
// });
