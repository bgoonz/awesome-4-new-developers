//  We want to write a function recursiveSum(array) which takes an array
//    of numbers and returns the sum of all elements of the array.
//  This problem must be solved recursively.

// Repeating pattern
//  Adding elements in the array

// Where does the pattern break
// When we're at the last element

// Base Case
// when arr.length === 1

// Recursive Case
// when arr.length > 1

// Recrusive Step
// recursiveSum(arr.slice(1))

function recursiveSum(array) {
  if (array.length === 1) {
    return array[0];
  }

  return array[0] + recursiveSum(array.slice(1));
}

const array = [2, 4, 3, 6];

recursiveSum(array);

// recursiveSum(array);   // 1st frame,   array = ,   newArray =
// recursiveSum(array);   // 2nd frame,   array = ,    newArray =
// recursiveSum(array);   // 3rd frame,   array = ,     newArray =
// recursiveSum(array);   // 4th frame,   array = ,      returns ,    popped off the stack
// 3rd frame,     sum= ,    returns ,     popped off the stack
// 2nd frame,     sum= ,    returns ,     popped off the stack
// 1st frame,     sum= ,    returns ,     popped off the stack
// Final return value:

console.log(recursiveSum(array));
