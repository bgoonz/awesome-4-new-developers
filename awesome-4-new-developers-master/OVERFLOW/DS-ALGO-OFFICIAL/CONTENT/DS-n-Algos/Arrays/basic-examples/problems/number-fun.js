function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new TypeError("Number out of range from 1 to 1000000");
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal,
};
