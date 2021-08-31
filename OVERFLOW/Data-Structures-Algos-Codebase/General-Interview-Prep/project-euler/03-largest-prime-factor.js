function largestPrimeFactor(number) {
  const factors = [];
  let d = 2;
  while (number > 1) {
    if (number % d === 0) {
      factors.push(d);
      number /= d;
    }
    d += 1;
  }
  return Math.max(...factors);
}

console.log(largestPrimeFactor(13195));
