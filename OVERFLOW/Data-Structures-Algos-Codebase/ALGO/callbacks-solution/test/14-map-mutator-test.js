const assert = require("assert");
const mapMutator = require("../problems/14-map-mutator.js");

describe("mapMutator", () => {
  it("", () => {
    let arr1 = [4, 2, 6, 5];
    mapMutator(arr1, (el) => {
      return el * 2;
    });
    assert.deepEqual(arr1, [8, 4, 12, 10]);
    let arr2 = [8, 9, 10];
    mapMutator(arr2, (el, i) => {
      return el * i;
    });
    assert.deepEqual(arr2, [0, 9, 20]);
  });
});
