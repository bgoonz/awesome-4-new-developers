/***********************************************************************
Below we've declared a new object for a calculator that has a property
representing the total - which is currently set to 0.

Write four methods within this object named:
1. add(num) - add the num arg to the total
2. subtract(num) - subtract the num arg from the total
3. divide(num) - divide the total by the num arg
4. multiply(num) - multiply the total by the num arg

Each of the above methods should return the total.

Examples:

calculator.add(50); // => returns 50
calculator.subtract(35); // => returns 15
calculator.multiply(10); // => returns 150
calculator.divide(5); // => returns 30
calculator.total // => returns 30

***********************************************************************/

const calculator = {
  total: 0,
  add: function (num) {
    this.total += num;
    return this.total;
  },
  subtract: function (num) {
    this.total -= num;
    return this.total;
  },
  divide: function (num) {
    this.total /= num;
    return this.total;
  },
  multiply: function (num) {
    this.total *= num;
    return this.total;
  },
};

module.exports = calculator;
