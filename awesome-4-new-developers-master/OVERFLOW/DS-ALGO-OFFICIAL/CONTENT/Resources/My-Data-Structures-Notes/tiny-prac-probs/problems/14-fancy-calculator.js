/***********************************************************************
Below we've declared a new object for a calculator that has a property
representing the total. This time around we'll make our calculator a bit
fancier! Let's first add some new functionality.

Write two methods within this object named:
1. modulo(num) - sets the total to the remainder of division with the arg number
2. squared() - multiplies the total by its self

Each of the above methods should return the total.

Example:
fancyCalculator.setTotal(5) // => returns 5
fancyCalculator.squared() // => returns 25
fancyCalculator.modulo(4) // => returns 1
fancyCalculator.total // => returns 1
***********************************************************************/

const fancyCalculator = {
  total: 0,
  setTotal: function (num) {
    this.total = num;
    return this.total;
  },
  modulo: function (num) {
    this.total %= num;
    return this.total;
  },
  squared: function () {
    this.total *= this.total;
    return this.total;
  },
};

module.exports = fancyCalculator;
