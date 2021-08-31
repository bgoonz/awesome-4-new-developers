const assert = require("assert");
const multiMap = require("../problems/03-multi-map.js");

describe("multiMap", () => {
  it("", () => {
    let result1 = multiMap(7, 2, (n) => {
      return n * 10;
    });
    assert.equal(result1, 700);

    let result2 = multiMap(7, 3, (n) => {
      return n * 10;
    });
    assert.equal(result2, 7000);

    let result3 = multiMap("hi", 5, (s) => {
      return s + "!";
    });
    assert.equal(result3, "hi!!!!!");
  });
});
