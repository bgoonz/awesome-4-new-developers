/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Balanced strings are those who have equal quantity of 'L' and 'R' characters.
 * Given a balanced string s split it in the maximum amount of balanced strings.
 * Return the maximum amount of splitted balanced strings.
 *
 * Example 1:
 * Input: s = "RLRRLLRLRL"
 * Output: 4
 * Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring
 * contains same number of 'L' and 'R'.
 */

function SplitAStringInBalancedStrings(value) {
  let l = 0,
    r = 0,
    c = 0;
  for (let index = 0; index < value.length; index++) {
    if (value[index] === "L") {
      l++;
    } else {
      r++;
    }
    if (l === r) {
      c++;
    }
  }
  return c;
}

test("Split A String In Balanced Strings", () => {
  expect(SplitAStringInBalancedStrings("RLRRLLRLRL")).toEqual(4);
});
