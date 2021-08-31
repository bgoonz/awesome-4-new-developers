const assert = require("assert");
const one = require("../problems/18-one.js");

describe("one", () => {
  it("", () => {
    let result1 = one(["x", "y", "z"], (el) => {
      return el === "a";
    });
    assert.equal(result1, false);

    let result2 = one(["x", "a", "y", "z"], (el) => {
      return el === "a";
    });
    assert.equal(result2, true);

    let result3 = one(["x", "a", "y", "a", "z"], (el) => {
      return el === "a";
    });
    assert.equal(result3, false);

    let result4 = one(["apple", "dog"], (el) => {
      return el.length > 3;
    });
    assert.equal(result4, true);

    let result5 = one(["apple", "dog", "pear"], (el) => {
      return el.length > 3;
    });
    assert.equal(result5, false);

    let result6 = one(["apple", "dog", "food", "cat"], (el, idx) => {
      return el.length === idx;
    });
    assert.equal(result6, true);
  });
});
