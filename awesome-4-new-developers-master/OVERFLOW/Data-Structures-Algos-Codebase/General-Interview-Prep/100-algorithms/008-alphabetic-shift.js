/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(values) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  values = values.split("").map((a) => {
    const index = alphabets.indexOf(a);
    return a !== "z" ? alphabets[index + 1] : alphabets[0];
  });
  return values.join("");
}

test("alphabetic Shift", () => {
  expect(alphabeticShift("crazy")).toEqual("dsbaz");
});
