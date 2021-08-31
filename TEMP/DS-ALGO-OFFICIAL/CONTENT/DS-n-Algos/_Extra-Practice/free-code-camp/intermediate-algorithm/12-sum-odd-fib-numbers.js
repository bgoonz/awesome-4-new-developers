//create array of Fibonacci numbers with num as the length
//find all odd Fibonacci numbers less than or equal to num
//sum array of odd Fibonacci numbers
//Fibonacci numbers after 1, 1, are sum of all two previous

//First pass...
function sumFibs(num) {
  const fib = [1, 1];
  for (var i = 1; i <= num; i++) {
    fib.push(fib[i] + fib[i - 1]);
  }
  let sum = 0;
  for (i in fib) {
    if (fib[i] <= num && fib[i] % 2 != 0) {
      sum = sum + fib[i];
    }
  }
  return sum;
}

//Can combine the two for loops:
function sumFibsTwo(num) {
  const fib = [1, 1];
  let tot = 2;
  for (let i = 1; i <= num; i++) {
    const fibnum = fib[i] + fib[i - 1];
    fib.push(fibnum);
    if (fibnum <= num && fibnum % 2 != 0) {
      tot += fibnum;
    }
  }
  return tot;
}

console.log(sumFibs(4));

/* Other ways to go about it:
function (n-1, n-2) generates fib[n], recursive
replace values in original array to continuously store only 2 values
*/
