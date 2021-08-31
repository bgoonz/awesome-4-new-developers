/**
 * Created by Bryan Guner
 *
 * bryan.guner@gmail.com
 */

/**
 * Program:
 * We'll pass you an array of two numbers.
 * Return the sum of those two numbers and all numbers between them.
 * The lowest number will not always come first.
 */

function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
