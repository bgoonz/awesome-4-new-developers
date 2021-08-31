const assert = require("assert");
const chainMap = require("../problems/09-chain-map.js");

describe("chainMap", () => {
  it("", () => {
    let add5 = (n) => {
      return n + 5;
    };

    let half = (n) => {
      return n / 2;
    };

    let square = (n) => {
      return n * n;
    };

    assert.equal(chainMap(25, add5), 30);
    assert.equal(chainMap(25, add5, half), 15);
    assert.equal(chainMap(25, add5, half, square), 225);
    assert.equal(chainMap(4, square, half), 8);
    assert.equal(chainMap(4, half, square), 4);
  });
});
