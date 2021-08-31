//  We want to write a function exponent(base, power) which takes two numbers,
//    a base and power, and returns the base raised to that power.
//  This problem must be solved recursively.

// Repeating pattern
// repeated multiplication
// if n is negative, turns fraction (numerator of 1)

// Where does the pattern break
// when power equals 0, return 1

// Base Case
// power === 0

// Recursive Case
// power > 0

// Recrusive Step
// 2^5 === 2 * 2 * 2 * 2 * 2 = 32
// 2^3 === 2 * 2 * 2 === 2 * 2^2
// base * exponent(base, power -1)

function exponent(base, power) {
  if (power === 0) {
    return 1;
  }

  if (power < 0) {
    power *= -1;
    return 1 / exponent(base, power);
  } else {
    return base * exponent(base, power - 1);
  }
}

console.log(exponent(2, 0));

// exponent(base, power);   // 1st frame,   base = ,   power =
// exponent(base, power);   // 2nd frame,   base = ,   power =
// exponent(base, power);   // 3rd frame,   base = ,   power =
// exponent(base, power);   // 4th frame,   base = ,   power =
// exponent(base, power);   // 5th frame,   base = ,   power = ,  returns ,    popped off the stack
// 4th frame,     return from 5th frame = ,    returns ,     popped off the stack
// 3rd frame,     return from 4th frame = ,    returns ,     popped off the stack
// 2nd frame,     return from 3rd frame = ,    returns ,     popped off the stack
// 1st frame,     return from 2nd frame = ,    returns ,     popped off the stack
// Final return value:
