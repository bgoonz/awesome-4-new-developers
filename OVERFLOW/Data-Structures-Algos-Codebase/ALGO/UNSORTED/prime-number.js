export default (n) => {
  if (n === 2) {
    return true;
  }
  if (n < 2 || !(n & 1)) {
    return false;
  }

  for (let i = 3, l = Math.floor(n ** 0.5); i <= l; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
