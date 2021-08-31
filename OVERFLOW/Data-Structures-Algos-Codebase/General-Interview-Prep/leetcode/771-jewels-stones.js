/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * You're given strings J representing the types of stones that are jewels,
 * and S representing the stones you have.  Each character in S is a type
 * of stone you have.  You want to know how many of the stones you have
 * are also jewels.
 *
 * The letters in J are guaranteed distinct, and all characters in J and S
 * are letters. Letters are case sensitive, so "a" is considered a different
 * type of stone from "A".
 *
 * Example 1:
 * Input: J = "aA", S = "aAAbbbb"
 * Output: 3
 */

function jewelsStones(j, s) {
  j = j.split("");
  let numberOfJewels = 0;
  for (let index = 0; index < s.length; index++) {
    if (j.indexOf(s[index]) > -1) {
      numberOfJewels += 1;
    }
  }
  return numberOfJewels;
}

test("jewels Stones", () => {
  expect(jewelsStones("aA", "aAAbbbb")).toEqual(3);
});
