const assert = require("assert");
const suffixCipher = require("../problems/16-suffix-cipher.js");

describe("suffixCipher", () => {
  it("", () => {
    let cipher1 = {
      ly(word) {
        return word.slice(0, -1) + "ee";
      },
      ize(word) {
        return word + "r";
      },
    };
    let actual1 = suffixCipher("quietly and gently visualize", cipher1);
    let expected1 = "quietlee and gentlee visualizer";
    assert.equal(actual1, expected1);
    let cipher2 = {
      tal(word) {
        return word.toUpperCase();
      },
      s(word) {
        return word + "th";
      },
    };
    let actual2 = suffixCipher(
      "incremental progress is very instrumental",
      cipher2
    );
    let expected2 = "INCREMENTAL progressth isth very INSTRUMENTAL";
    assert.equal(actual2, expected2);
  });
});
