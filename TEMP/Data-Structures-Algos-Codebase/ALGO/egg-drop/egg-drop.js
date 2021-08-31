// Egg drop
// Recursion
// Optimal substructure
// floors and eggs
// Drop an egg from a floor.
// What's the minimum number of drops to
// determine the floor at which eggs break?
// ed(f, e)
// we have e eggs and drop 1 at floor x
// if egg breaks then
// x - 1 floors and e - 1 eggs left
// if egg doesn't break then
// f - x floors and e eggs left
// So we want the minimum number of trials
// ( in the worst case )
// So we need the max of the two possibilities
// And minimize it over the number of floors
// because what else to minimize over ?
// So dt(f, e) = 1 + min(max(dt(x - 1, e - 1), dt(f - x, e))): x in [1...f]
// So recursion and memoization

"use strict";
{
  Object.assign(self, {
    edr,
    edm,
  });

  test_ed();

  function edr(n, k) {
    const trials =
      1 +
      Math.min(
        ...Array(k + 1)
          .join(".")
          .split("")
          .map((_, i) => i)
          .map((x) => Math.max(edr(n - 1, x - 1), edr(n, k - x)))
      );
    return trials;
  }

  function edm(n, k, m = {}) {
    const key = `${n},${k}`;
    if (k <= 1 || n <= 1) {
      return k;
    }
    if (Number.isInteger(m[key])) {
      return m[key];
    } else {
      const trials = Array(k + 1)
        .join(".")
        .split("")
        .map((_, i) => i + 1)
        .map((x) => Math.max(edm(n - 1, x - 1, m), edm(n, k - x, m)));
      const minTrials = 1 + Math.min(...trials);
      return (m[key] = minTrials);
    }
  }

  function test_ed() {
    console.log("Testing Egg Drop");
    const tests = [
      [2, 36, 8],
      [5, 1000, 11],
    ];
    tests.forEach(([n, k, r]) =>
      console.log(
        edm(n, k) == r
          ? `EDM ${n} ${k} == ${r} passed`
          : `EDM ${n} ${k} == ${r} failed`
      )
    );
  }
}
