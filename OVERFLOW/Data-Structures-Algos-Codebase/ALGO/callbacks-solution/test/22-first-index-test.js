const assert = require("assert");
const firstIndex = require("../problems/22-first-index.js");

describe("firstIndex", () => {
  it("", () => {
    let result1 = firstIndex([3, 7, 8, 10], (n) => {
      return n % 2 === 0;
    });
    assert.equal(result1, 2);

    let result2 = firstIndex(["dog", "cat", "tree"], (s) => {
      return s.length === 3;
    });
    assert.equal(result2, 0);

    let result3 = firstIndex(["canine", "feline", "tree"], (s) => {
      return s.length === 3;
    });
    assert.equal(result3, -1);
  });
});
