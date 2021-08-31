/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.

The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.

As pixel's value is an integer, all fractions should be rounded down.

Example

For

image = [[1, 1, 1], 
        [1, 7, 1], 
        [1, 1, 1]]
the output should be boxBlur(image) = [[1]].

In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = rounded down = 1.


*/

function boxBlur(array) {
  let result = [];
  for (let i = 0; i < array.length - 2; i++) {
    let line = [];
    for (let j = 0; j < array[i].length - 2; j++) {
      let sum = 0;
      let count = 0;
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          sum += array[x][y];
          count += 1;
        }
      }
      line.push(sum / count);
    }
    result.push(line);
  }
  return result;
}

console.log(
  JSON.stringify(
    boxBlur([
      [36, 0, 18, 9],
      [27, 54, 9, 0],
      [81, 63, 72, 45],
    ])
  )
);

// test('box Blur', () => {
//   expect(boxBlur([[36,0,18,9], [27,54,9,0], [81,63,72,45]])).toEqual([[40,30]])
// });
