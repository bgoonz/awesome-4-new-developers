//  We want to write a function recursiveIsEven(num) which takes a number,
//    and returns true if num is even, false otherwise.
//  This problem must be solved recursively.

// Repeating pattern
//      not recursive: num % 2 === 0
// mod(%) shows us remainders from division
// repeated subtraction

// Where does the pattern break or change
//  if num > 0, when num < 2
//  if num < 0, num > -2

// Base Case
//  if (num >= 0 && num <= 2) if else (num <= 0 && num >= -2)

// Recursive Case
// if (num < -2 || num > 2)

// Recrusive Step
// if (num > 2) then recuresiveIsEven( num - 2)
// if(num < 2) then recuresiveIsEven( num + 2)

function recursiveIsEven(num) {
  if (num < 0) {
    // if num is negative
    num = num * -1;
  }

  if (num < 2) {
    // base case
    return num === 0;
  }

  return recursiveIsEven(num - 2); // recursive step
}

console.log(recursiveIsEven(-9));

// recursiveIsEven(num);   // 1st frame,   num = -9
// recursiveIsEven(num);   // 2nd frame,   num = 7
// recursiveIsEven(num);   // 3rd frame,   num = 5
// recursiveIsEven(num);   // 4th frame,   num = 3
// recursiveIsEven(num);   // 5th frame,   num = 1,  returns false,    popped off the stack
// 4th frame,     return from 5th frame = false,    returns false,     popped off the stack
// 3rd frame,     return from 4th frame = false,    returns false,     popped off the stack
// 2nd frame,     return from 3rd frame = false,    returns false,     popped off the stack
// 1st frame,     return from 2nd frame = false,    returns false,     popped off the stack
// Final return value: false
