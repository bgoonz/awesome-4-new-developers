/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function getHighestAndLowestWeather(array) {
  let lowest = array[0];
  let highest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > highest) {
      highest = array[i];
    }
    if (array[i] < lowest) {
      lowest = array[i];
    }
  }
  return { lowest, highest };
}

test("weekly Weather", () => {
  expect(getHighestAndLowestWeather([2, 10, 40, 30, 1, 33])).toEqual({
    lowest: 1,
    highest: 40,
  });
});
