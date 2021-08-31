/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
 *
 * Example
 *
 * For
 *
 * a = [[1, 2, 3],
 *      [4, 5, 6],
 *      [7, 8, 9]]
 * the output should be
 *
 * rotateImage(a) =
 *     [[7, 4, 1],
 *      [8, 5, 2],
 *      [9, 6, 3]]
 */

function rotateImage(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = a[i][j];
      a[i][j] = a[j][i];
      a[j][i] = temp;
    }
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[0].length / 2; j++) {
      let temp = a[i][j];
      a[i][j] = a[i][a[0].length - 1 - j];
      a[i][a[0].length - 1 - j] = temp;
    }
  }
  return a;
}

test("rotate Image", () => {
  expect(
    rotateImage([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]);
});
