const assert = require("assert");
const minValueCallback = require("../problems/13-min-value-callback.js");

describe("minValueCallback", () => {
  it("", () => {
    assert.equal(minValueCallback([64, 25, 49, 9, 100]), 9);
    assert.equal(minValueCallback([64, 25, 49, 9, 100], Math.sqrt), 3);
  });
});
