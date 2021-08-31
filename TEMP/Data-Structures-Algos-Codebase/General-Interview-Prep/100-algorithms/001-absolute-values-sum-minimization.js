/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* Given a sorted array of integers a, find an integer x from a such that the value of

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value). If there are several possible answers, output the smallest one.

Example

For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.

For a = [2, 4, 7, 6], the output should be absoluteValuesSumMinimization(a) = 4.

For a = [2, 4, 7, 6, 6], the output should be absoluteValuesSumMinimization(a) = 7.

For a = [2, 4, 7, 6, 6, 8], the output should be absoluteValuesSumMinimization(a) = 7. */

function absoluteValuesSumMinimization(values) {
  const isEven = values.length % 2 === 0;
  return isEven
    ? values[values.length / 2 - 1]
    : values[Math.floor(values.length / 2)];
}

test("absolute Values Sum Minimization", () => {
  expect(absoluteValuesSumMinimization([2, 4, 7])).toEqual(4);
  expect(absoluteValuesSumMinimization([2, 4, 7, 6])).toEqual(4);
  expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6])).toEqual(7);
  expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])).toEqual(8);
});
