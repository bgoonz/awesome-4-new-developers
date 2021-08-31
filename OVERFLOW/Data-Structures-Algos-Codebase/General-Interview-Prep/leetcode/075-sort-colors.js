/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

const sortColors = (colors) => {
  let [low, current, high] = [0, 0, colors.length - 1];
  while (current <= high) {
    if (colors[current] == 2) {
      colors[current] = colors[high];
      colors[high--] = 2;
    }
    if (colors[current] == 0) {
      colors[current++] = colors[low];
      colors[low++] = 0;
    }
    if (colors[current] == 1) {
      current++;
    }
  }
  return colors;
};

test("sortColors", () => {
  expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
});
