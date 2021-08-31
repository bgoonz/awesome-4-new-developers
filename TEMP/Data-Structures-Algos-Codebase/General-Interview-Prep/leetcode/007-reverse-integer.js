/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function reverseInteger(value) {
  const valueStr = value.toString().split("");
  let joined = parseInt(valueStr.reverse().join(""));
  if (valueStr[valueStr.length - 1] === "-") {
    joined *= -1;
  }
  if (joined < Math.pow(2, 31) * -1 || joined > Math.pow(2, 31) - 1) return 0;
  return joined;
}

test("reverse Integer", () => {
  expect(reverseInteger(-123)).toEqual(-321);
});
