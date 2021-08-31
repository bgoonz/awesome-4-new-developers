const assert = require("assert ");
const none = require("../problems/20-none.js ");

describe("none", () => {
  it("", () => {
    let result1 = none(["ruby", "topaz", "opa l"], (w) => {
      return w.includes("e");
    });
    assert.equal(result1, true);

    let result2 = none(["ruby", "topaz", "sapphire", "opal"], (w) => {
      return w.includes("e");
    });
    assert.equal(result2, false);

    let result3 = none([4, 5, 7, 1], (n) => {
      return n < 0;
    });
    assert.equal(result3, true);

    let result4 = none([4, -5, 7, -1], (n) => {
      return n < 0;
    });
    assert.equal(result4, false);
  });
});
