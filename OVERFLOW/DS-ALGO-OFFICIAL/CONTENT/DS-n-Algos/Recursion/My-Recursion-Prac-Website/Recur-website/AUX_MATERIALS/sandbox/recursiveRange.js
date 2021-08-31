//  We want to write a function recursiveRange(num1, num2) which takes two numbers,
//    and returns an array of all integers between the two numbers (inclusive). This
//    This should be an inclusive range.
//  This problem must be solved recursively.

// Repeating pattern
//  incrementing from smaller numbner to larger number

// Where does the pattern break or change
//  when we reach the larger number

// Base Case
//  if num1 == num2 then return the array

// Recursive Case
//  if(num1 < num2) increment

// Recrusive Step
//  recursiveRange(num1+1, num2)

function recursiveRange(num1, num2) {
  if (num1 === num2) {
    // base case
    return [num2];
  } else if (num1 > num2) {
    return recursiveRange(num2, num1);
  }

  let range = [num1];
  range = range.concat(recursiveRange(num1 + 1, num2)); // recursive step
  console.log(range);
  return range;
}

console.log(recursiveRange(2, 6));

// recursiveRange(num1, num2);   // 1st frame,   num1 = 2,   num2 = 6
// recursiveRange(num1, num2);   // 2nd frame,   num1 = 3,   num2 = 6
// recursiveRange(num1, num2);   // 3rd frame,   num1 = 4,   num2 = 6
// recursiveRange(num1, num2);   // 4th frame,   num1 = 5,   num2 = 6
// recursiveRange(num1, num2);   // 5th frame,   num1 = 6,   num2 = 6,  returns [6],    popped off the stack
// 4th frame,     return from 5th frame = [6],    returns [5,6],     popped off the stack
// 3rd frame,     return from 4th frame = [5,6],    returns [4,5,6],     popped off the stack
// 2nd frame,     return from 3rd frame = [4,5,6],    returns [3,4,5,6],     popped off the stack
// 1st frame,     return from 2nd frame = [3,4,5,6],    returns [2,3,4,5,6],     popped off the stack
// Final return value: [2,3,4,5,6]

// function rangeOfNumbers(num1, num2) {
//     if (num1 - num2 == 0) {
return [num1];
//     } else if (num1 <= num2) {
var nums = rangeOfNumbers(num1, num2 - 1);
//         nums.push(num2);
//         return nums;
//     }
