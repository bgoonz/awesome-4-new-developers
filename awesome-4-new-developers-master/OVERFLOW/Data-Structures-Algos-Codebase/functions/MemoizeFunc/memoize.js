//his function accepts another function as an argument and returns a function.
//To use this function, we call the memoize passing the function we want to memoize as an argument.
/*
memoizedFunction = memoize(funtionToMemoize)
memoizedFunction(args)
*/
function memoize(fn) {
  return function () {
    let args = Array.prototype.slice.call(arguments);
    fn.cache = fn.cache || {};

    if (fn.cache[args]) {
      console.log("cached");
      return fn.cache[args];
    } else {
      console.log("calculated");
      return (fn.cache[args] = fn.apply(this, args));
    }
  };
}

//EX.)
function sqrt(arg) {
  return Math.sqrt(arg);
}
const memoizedSqrt = memoize(sqrt);
//memoizedSqrt is now a memoized version of sqrt

console.log("memoizedSqrt(4) : ", memoizedSqrt(4));

console.log("memoizedSqrt(9) : ", memoizedSqrt(9));

console.log("memoizedSqrt(25) : ", memoizedSqrt(25));

//--------------------------------------------------------

//! AGAIN:

console.log("memoizedSqrt(4) : ", memoizedSqrt(4));

console.log("memoizedSqrt(9) : ", memoizedSqrt(9));

console.log("memoizedSqrt(25) : ", memoizedSqrt(25));

//----------------------------------------------------------\

/*
bryan @LAPTOP - F699FFV1: /mnt/c / Users / 15512 / Google Drive / a - A - September / Non--Exploration / my - smippets - all / my - snippets / MemoizeFunc$ node memoize.js
calculated
memoizedSqrt(4) :  2 
calculated
memoizedSqrt(9) :  3 
calculated
memoizedSqrt(25) :  5
cached
memoizedSqrt(4) :  2 
cached
memoizedSqrt(9) :  3
cached
memoizedSqrt(25) :  5
*/
