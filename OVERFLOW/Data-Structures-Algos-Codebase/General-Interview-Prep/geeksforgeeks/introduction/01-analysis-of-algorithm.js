/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

const { performance } = require("perf_hooks");

let timed =
  (f) =>
  (...args) => {
    let start = performance.now();
    let ret = f(...args);
    console.log(`${f.name} took ${(performance.now() - start).toFixed(3)}ms`);
    return ret;
  };

// Given a number n, write a function to find sum of first n natural numbers

let func1 = (n) => {
  console.log((n * (n + 1)) / 2);
};
func1 = timed(func1);
func1(1000000); // took 9.458ms

let func2 = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
};
func2 = timed(func2);
func2(1000000); // took 40.455ms

let func3 = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      sum += 1;
    }
  }
  console.log(sum); // took 777150.082ms
};
func3 = timed(func3);
func3(1000000);
