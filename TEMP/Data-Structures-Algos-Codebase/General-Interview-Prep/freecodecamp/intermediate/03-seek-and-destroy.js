/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments. Remove all elements from the initial array that are of
 * the same value as these arguments.
 *
 * Note
 * You have to use the arguments object.
 */

function seekAndDestroy(value, ...toDestroyArray) {
  return value.filter((e) => toDestroyArray.indexOf(e) === -1);
}

test("seek And Destroy", () => {
  expect(seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
  expect(seekAndDestroy([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
  expect(
    seekAndDestroy(
      [
        "possum",
        "trollo",
        12,
        "safari",
        "hotdog",
        92,
        65,
        "grandma",
        "bugati",
        "trojan",
        "yacht",
      ],
      "yacht",
      "possum",
      "trollo",
      "safari",
      "hotdog",
      "grandma",
      "bugati",
      "trojan"
    )
  ).toEqual([12, 92, 65]);
});
