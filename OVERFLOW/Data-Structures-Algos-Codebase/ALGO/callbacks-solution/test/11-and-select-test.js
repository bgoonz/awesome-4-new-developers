const assert = require("assert");
const andSelect = require("../problems/11-and-select.js");

describe("andSelect", () => {
  it("", () => {
    let isEven = (n) => {
      return n % 2 === 0;
    };

    let isPositive = (n) => {
      return n > 0;
    };

    const actual1 = andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive);
    const expected1 = [8, 6, 12];
    assert.deepEqual(actual1, expected1);

    let isUpperCase = (s) => {
      return s === s.toUpperCase();
    };

    let startsWithA = (s) => {
      return s[0].toUpperCase() === "A";
    };
    const actual2 = andSelect(
      ["ants", "APPLES", "ART", "BACON", "arm"],
      isUpperCase,
      startsWithA
    );
    const expected2 = ["APPLES", "ART"];
    assert.deepEqual(actual2, expected2);
  });
});
