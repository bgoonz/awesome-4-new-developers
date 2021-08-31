/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a string date representing a Gregorian calendar date
 * formatted as YYYY-MM-DD, return the day number of the year.
 *
 * Example 1:
 *
 * Input: date = "2019-01-09"
 * Output: 9
 * Explanation: Given date is the 9th day of the year in 2019.
 */

function dayOfTheYear(date) {
  const map = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const day = Number(date.split("-")[2]);
  let res = day;

  for (let index = 0; index < Number(month) - 1; index++) {
    res += map[index];
  }

  if (month > 2) {
    if (year % 400 === 0) {
      return res + 1;
    }
    if (year % 100 === 0) {
      return res;
    }
    if (year % 4 === 0) {
      return res + 1;
    }
  }
  return res;
}

test("day Of The Year", () => {
  expect(dayOfTheYear("2019-01-09")).toEqual(9);
  expect(dayOfTheYear("2019-02-10")).toEqual(41);
  expect(dayOfTheYear("2003-03-01")).toEqual(60);
  expect(dayOfTheYear("2004-03-01")).toEqual(61);
});
