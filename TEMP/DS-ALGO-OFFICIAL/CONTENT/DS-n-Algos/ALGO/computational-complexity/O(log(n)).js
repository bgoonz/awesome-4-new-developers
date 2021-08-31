const splitInHalf = (n) => {
  if (n <= 1) return n;
  return splitInHalf(n / 2);
};
