const factorial = (n) => {
  if (n === 1) return n;
  for (let i = 0; i < n; i++) {
    factorial(n - 1);
  }
};
