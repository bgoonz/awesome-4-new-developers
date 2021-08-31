/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string s, int numRows);
 * Example 1:
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 */

function zigZagConversion(s, numRows) {
  s = s.split("");
  let currentElement = 0;
  r = [];
  while (currentElement < s.length) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
    }
    if (currentElement === s.length) {
      return r.join();
    }
  }
}

test("zigZag Conversion", () => {
  expect(zigZagConversion("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
});
