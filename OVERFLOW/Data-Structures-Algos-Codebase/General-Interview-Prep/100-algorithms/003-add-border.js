/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc", "ded"]

the output should be

addBorder(picture) = ["*****",
                  "*abc*",
                  "*ded*",
                  "*****"] 
*/

function addBorder(values) {
  const wall = "*".repeat(values[0].length + 2);
  values = values.map((str) => `*${str}*`);
  values.push(wall);
  values.unshift(wall);
  return values;
}

test("add Border", () => {
  expect(addBorder(["abc", "ded"])).toEqual([
    "*****",
    "*abc*",
    "*ded*",
    "*****",
  ]);
});
