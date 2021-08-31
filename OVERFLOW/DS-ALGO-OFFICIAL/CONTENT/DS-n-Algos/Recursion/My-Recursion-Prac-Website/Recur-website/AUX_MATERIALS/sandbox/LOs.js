// External Reources

// * What on Earth is Recursion ? - Computerphile
//      https://www.youtube.com/watch?v=Mv9NEXX1VHc)

// * Visulaization of the call stack (written in Python)
//      https://www.cs.usfca.edu/~galles/visualization/RecFact.html

//

// 1. Given a recursive function, identify what is the base case and
//    the recursive case.

// 2.  Explain when a recursive solution is appropriate to solving a problem over
//     an iterative solution.

// 3. Write a recursive function that takes in a number, n, argument and
//    calculates the n-th number of the Fibonacci sequence.

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(4);

// 4. Write a function that calculates a factorial recursively.

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

// factorial(3);

// 5. Write a function that calculates an exponent (positive and negative) recursively.

function exponent(num, power) {
  if (power < 0) {
    return 1 / exponent(num, Math.abs(power));
  }

  if (power === 0) {
    return 1;
  }

  return num * exponent(num, power - 1);
}

exponent(3, 3);

// 6. Write a function that sums all elements of an array recursively.

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let nextSum = sum(arr.slice(1));
  return arr[0] + nextSum;
}

sum([1, 2, 3]);

// 7. Write a function that flattens an arbitrarily nested array into one dimension.

function flatten(arr) {
  let newArray = [];

  arr.forEach(function (contents) {
    if (Array.isArray(contents)) {
      newArray.push(...flatten(contents));
    } else {
      newArray.push(contents);
    }
  });

  return newArray;
}

flatten([1, [2, [3]]]);

// 8. Given a buggy recursive function that causes a
// RangeError: Maximum call stack and examples of correct behavior, debug the function.

function buggySum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let nextSum = buggySum(arr);
  return arr[0] + nextSum;
}

// console.log(buggySum([1, 2, 3]));
