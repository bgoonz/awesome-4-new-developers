/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a string text, you want to use the characters of text to form as
 * many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once. Return the maximum number
 * of instances that can be formed.
 *
 * Example 1:
 *
 * Input: text = "nlaebolko"
 * Output: 1
 */

function maximumNumberOfBalloons(value) {
  value = value.split("");
  let map = {};
  for (const char of value) {
    if (map.hasOwnProperty(char)) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }
  return (
    Math.floor(
      Math.min(map["b"], map["a"], map["l"] / 2, map["o"] / 2, map["n"])
    ) || 0
  );
}

test("maximum Number Of Balloons", () => {
  expect(maximumNumberOfBalloons("nlaebolko")).toEqual(1);
});
