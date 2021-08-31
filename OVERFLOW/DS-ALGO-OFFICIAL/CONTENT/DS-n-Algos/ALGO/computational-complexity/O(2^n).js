const twoN = (n) => {
  if (n == 1) return n;
  twoN(n - 1);
  twoN(n - 1);
};
