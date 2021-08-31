const m = [1, 43, 656, 8, 54, 908, 4, 5, 23, 78, 435, 89, 45, 476, 89];
const n = [234, 56, 90, 675, 56, 786, 90, 564, 8, 657, 87, 64, 354, 2, 75];
const q = [34, 76, 76, 564, 34, 32, 16, 67, 25, 98, 90, 345, 235, 64, 134, 76];

function objSum(obj) {
  return Object.keys(obj).reduce((sum, key) => (sum += obj[key] || 0), 0);
}

function memoize(fn) {
  return function () {
    let args = Array.prototype.slice.call(arguments);
    fn.cache = fn.cache || {};
    if (fn.cache[args]) {
      console.log("cached");
      console.log("fn.cache: ", fn.cache);
      console.log("objSum( fn.cache[ args ] ): ", objSum(fn.cache[args]));
      return objSum(fn.cache);
    } else {
      console.log("calculated");
      console.log(
        " fn.cache[ args ] = fn.apply( this, args ): ",
        (fn.cache[args] = fn.apply(this, args))
      );
      fn.cache[args] = fn.apply(this, args);
      console.log("calculated : fn.cache: ", fn.cache);
      return fn.cache;
    }
  };
}
let reduce2Sum = (arr) => {
  let sum = arr.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue);
  }, 0);
  return sum;
};
const memoizedArrSum = memoize(reduce2Sum);
memoizedArrSum(m);
console.log("memoizedArrSum(m): ", memoizedArrSum(m));
memoizedArrSum(n);
console.log("memoizedArrSum( n): ", memoizedArrSum(n));
memoizedArrSum(q);
console.log("memoizedArrSum( q ): ", memoizedArrSum(q));

//--------------------------(output)---------------------------------------

/*
node sum - of -arr - sums.js
calculated
fn.cache[ args ] = fn.apply( this, args ): 2914
calculated: fn.cache: {
  '1,43,656,8,54,908,4,5,23,78,435,89,45,476,89': 2914
}
cached
fn.cache: {
  '1,43,656,8,54,908,4,5,23,78,435,89,45,476,89': 2914
}
objSum( fn.cache[ args ] ): 0
memoizedArrSum( m ): 2914
calculated
fn.cache[ args ] = fn.apply( this, args ): 3798
calculated: fn.cache: {
  '1,43,656,8,54,908,4,5,23,78,435,89,45,476,89': 2914,
  '234,56,90,675,56,786,90,564,8,657,87,64,354,2,75': 3798
}
cached
fn.cache: {
  '1,43,656,8,54,908,4,5,23,78,435,89,45,476,89': 2914,
  '234,56,90,675,56,786,90,564,8,657,87,64,354,2,75': 3798
}
objSum( fn.cache[ args ] ): 0
memoizedArrSum( n ): 6712
calculated
fn.cache[ args ] = fn.apply( this, args ): 1966
calculated: fn.cache: {
  '1,43,656,8,54,908,4,5,23,78,435,89,45,476,89': 2914,
  '234,56,90,675,56,786,90,564,8,657,87,64,354,2,75': 3798,
  '34,76,76,564,34,32,16,67,25,98,90,345,235,64,134,76': 1966
}
cached
fn.cache: {
  '1,43,656,8,54,908,4,5,23,78,435,89,45,476,89': 2914,
  '234,56,90,675,56,786,90,564,8,657,87,64,354,2,75': 3798,
  '34,76,76,564,34,32,16,67,25,98,90,345,235,64,134,76': 1966
}
objSum( fn.cache[ args ] ): 0
memoizedArrSum( q ): 8678

\ ___________________________________________________
bryan_dir: array - helpers_exitstatus: 0 === =>

*/
