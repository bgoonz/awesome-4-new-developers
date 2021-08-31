/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Design and implement a TwoSum class. It should support the following operations: add and find.
 *
 * add - Add the number to an internal data structure.
 * find - Find if there exists any pair of numbers which sum is equal to the value.
 *
 * Example 1:
 *
 * add(1); add(3); add(5);
 * find(4) -> true
 * find(7) -> false
 *
 * Example 2:
 *
 * add(3); add(1); add(2);
 * find(3) -> true
 * find(6) -> false
 */

const TwoSum = function () {
  this.map = {};
};

TwoSum.prototype.add = function (number) {
  if (this.map[number]) {
    this.map[number] += 1;
  } else {
    this.map[number] = 1;
  }
};

TwoSum.prototype.find = function (value) {
  for (const key in this.map) {
    const currentNumber = key - 0;
    const complement = value - currentNumber;
    if (
      this.map[complement] &&
      (currentNumber !== complement || this.map[complement] > 1)
    ) {
      return true;
    }
  }
  return false;
};

test("two Sum III", () => {
  const twoSum = new TwoSum();
  twoSum.add(3);
  twoSum.add(1);
  twoSum.add(2);
  expect(twoSum.find(6)).toEqual(false);
});
