const assert = require("assert");

const fibonacci = require("../problems/01-recursive-fibonacci.js");
const factorial = require("../problems/02-recursive-factorial.js");
const exponent = require("../problems/03-recursive-exponent.js");
const sum = require("../problems/04-recursive-sum.js");
const flatten = require("../problems/05-recursive-flatten.js");

describe("fibonacci()", function () {
  it("should satisfy the examples from the problem", function () {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(4), 3);
    assert.equal(fibonacci(10), 55);
  });

  it("should return the expected nth Fibonacci number", function () {
    assert.equal(fibonacci(5), 5);
    assert.equal(fibonacci(20), 6765);
  });
});

describe("factorial()", function () {
  it("should satisfy the examples from the problem", function () {
    assert.equal(factorial(1), 1);
    assert.equal(factorial(3), 6);
    assert.equal(factorial(5), 120);
  });

  it("should return the expected factorial for a given number", function () {
    assert.equal(factorial(2), 2);
    assert.equal(factorial(6), 720);
    assert.equal(factorial(10), 3628800);
  });
});

describe("exponent()", function () {
  it("should satisfy the examples from the problem", function () {
    assert.equal(exponent(3, 2), 9);
    assert.equal(exponent(2, -2), 0.25);
    assert.equal(exponent(5, 5), 3125);
  });

  it("should return the expected exponent solutions", function () {
    assert.equal(exponent(3, 3), 27);
    assert.equal(exponent(-2, 2), 4);
    assert.equal(exponent(0, 10), 0);
    assert.equal(exponent(10, 10), 10000000000);
  });
});

describe("sum()", function () {
  it("should satisfy the examples from the problem", function () {
    assert.equal(sum([1, 2, 3]), 6);
    assert.equal(sum([0, 1, -3]), -2);
    assert.equal(sum([1, 2, 3, 4, 5]), 15);
  });

  it("should return the sum of all the input array's members", function () {
    assert.equal(sum([5, 4, 3, 2, 1]), 15);
    assert.equal(sum([0, 0, 1, 0, 0]), 1);
    assert.equal(sum([-1, -1, -1, -1]), -4);
    assert.equal(sum([99, 100, 101]), 300);
  });
});

describe("flatten()", function () {
  it("should satisfy the examples from the problem", function () {
    assert.deepEqual(flatten([]), []);
    assert.deepEqual(flatten([1, 2]), [1, 2]);
    assert.deepEqual(flatten([1, [2, [3]]]), [1, 2, 3]);
  });

  it("should return the all the nested array contents in a single array", function () {
    assert.deepEqual(flatten([[[[]]]]), []);
    assert.deepEqual(
      flatten([
        [1, 2],
        [3, [4, 5]],
      ]),
      [1, 2, 3, 4, 5]
    );
    assert.deepEqual(flatten([[[1, 2]], [[3, 4]]]), [1, 2, 3, 4]);
  });
});
