const assert = require("assert");
const xorSelect = require("../problems/17-xor-select.js");

describe("xorSelect", () => {
  it("", () => {
    let isEven = (n) => {
      return n % 2 === 0;
    };

    let isPositive = (n) => {
      return n > 0;
    };

    let result1 = xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive);
    assert.deepEqual(result1, [-2, 1, 3]);

    let longString = (s) => {
      return s.length > 4;
    };

    let startsA = (s) => {
      return s[0] === "a";
    };

    let result2 = xorSelect(
      ["art", "academy", "app", "cat", "buttery"],
      longString,
      startsA
    );
    assert.deepEqual(result2, ["art", "app", "buttery"]);
  });
});
