/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // => 9
exponent(2, -2); // => 1/4 (or 0.25)
factorial(5, 5); // => 3,125
***********************************************************************/
//base case: power === 1
//recursive step: power -1
//recursive case:
//num * exponent(num, power - 1)
// if power is negative
function exponent(num, power) {
  //if power is 0
  if (power < 0) {
    return 1 / exponent(num, Math.abs(power));
  }
  if (power === 1) {
    return num;
  }
  return num * exponent(num, power - 1);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = exponent;
