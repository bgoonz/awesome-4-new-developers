/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Write a program to count the number of days between two dates.
 * The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.
 *
 * Example 1:
 * Input: date1 = "2019-06-29", date2 = "2019-06-30"
 * Output: 1
 *
 * Example 2:
 * Input: date1 = "2020-01-15", date2 = "2019-12-31"
 * Output: 15
 */

function numberOfDaysBetweenTwoDates(date1, date2) {
  return Math.round(
    Math.abs(new Date(date2).getTime() - new Date(date1).getTime()) /
      (60 * 60 * 24 * 1000)
  );
}

test("number Of Days Between Two Dates", () => {
  expect(numberOfDaysBetweenTwoDates("2019-06-29", "2019-06-30")).toEqual(1);
  expect(numberOfDaysBetweenTwoDates("2020-01-15", "2019-12-31")).toEqual(15);
});
