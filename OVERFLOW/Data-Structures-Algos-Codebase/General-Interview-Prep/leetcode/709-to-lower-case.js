/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Implement function ToLowerCase() that has a string parameter str,
 * and returns the same string in lowercase.
 *
 * Example 1:
 * Input: "Hello"
 * Output: "hello"
 */

function toLowerCase(value) {
  let result = [];
  for (let index = 0; index < value.length; index++) {
    if (value.charCodeAt(index) >= 65 && value.charCodeAt(index) < 90) {
      result.push(String.fromCharCode(value.charCodeAt(index) + 32));
    } else {
      result.push(value[index]);
    }
  }
  return result.join("");
}

test("to Lower Case", () => {
  expect(toLowerCase("Ashish")).toEqual("ashish");
});
