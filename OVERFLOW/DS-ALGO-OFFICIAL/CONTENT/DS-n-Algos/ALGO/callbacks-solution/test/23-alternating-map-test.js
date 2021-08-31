const assert = require("assert");
const alternatingMap = require("../problems/23-alternating-map.js");

describe("alternatingMap", () => {
  it("", () => {
    const triple = (n) => {
      return 3 * n;
    };

    const half = (n) => {
      return n / 2;
    };

    const actual1 = alternatingMap([7, 3, 2, 9, 8], triple, half);
    const expected1 = [21, 1.5, 6, 4.5, 24];
    assert.deepEqual(actual1, expected1);

    const yell = (s) => {
      return s.toUpperCase() + "!";
    };

    const whisper = (s) => {
      return ".." + s.toLowerCase() + "..";
    };

    const actual2 = alternatingMap(
      ["hEy", "EVERYone", "whats", "uP??"],
      yell,
      whisper
    );
    const expected2 = ["HEY!", "..everyone..", "WHATS!", "..up??.."];
    assert.deepEqual(actual2, expected2);
  });
});
