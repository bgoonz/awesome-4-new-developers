/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function constructTheRectangle(area) {
  let width = Math.floor(Math.sqrt(area));
  while (width > 0) {
    let length = area / width;
    if (Number.isInteger(length)) {
      return [length, width];
    }
    width--;
  }
}

test("construct The Rectangle", () => {
  expect(constructTheRectangle(4)).toEqual([2, 2]);
});
