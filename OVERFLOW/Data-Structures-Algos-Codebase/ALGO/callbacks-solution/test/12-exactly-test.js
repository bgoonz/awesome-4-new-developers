const assert = require("assert");
const exactly = require("../problems/12-exactly.js");

describe("exactly", () => {
  it("", () => {
    let result1 = exactly([18, 5, 32, 7, 100], 3, (n) => {
      return n % 2 === 0;
    });
    assert.equal(result1, true);

    let result2 = exactly([18, 5, 32, 7, 100], 2, (n) => {
      return n % 2 === 0;
    });
    assert.equal(result2, false);

    let result3 = exactly(
      ["follow", "the", "yellow", "brick", "road"],
      1,
      (str) => {
        return str.includes("x");
      }
    );
    assert.equal(result3, false);

    let result4 = exactly(
      ["follow", "the", "yellow", "brick", "road"],
      0,
      (str) => {
        return str.includes("x");
      }
    );
    assert.equal(result4, true);
  });
});
