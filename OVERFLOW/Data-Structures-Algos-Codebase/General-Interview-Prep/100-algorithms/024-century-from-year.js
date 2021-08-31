/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be centuryFromYear(year) = 20;
For year = 1700, the output should be centuryFromYear(year) = 17.
*/

function centuryFromYear(value) {
  const cent =
    value % 100 === 0 ? Math.floor(value / 100) : Math.floor(value / 100) + 1;
  return cent;
}

test("century From Year", () => {
  expect(centuryFromYear(1905)).toEqual(20);
  expect(centuryFromYear(1700)).toEqual(17);
});
