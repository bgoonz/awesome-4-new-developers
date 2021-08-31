module.exports = function reverseString(string) {
  if (typeof string !== "string") {
    throw new TypeError(
      `reverseString requires a string not a ${typeof string}`
    );
  }
  return [...string].reverse().join("");
};
