//Use `Array.reduce()` to add each value to an accumulator,
//initialized with a value of `0`, divide by the `length` of the array.

function average(...nums) {
  return (
    nums.reduce((acc, val) => {
      return acc + val;
    }, 0) / nums.length
  );
}
console.log(
  "average(...[1, 2, 3, 10, 20, 6]) <==> average(1, 2, 3, 10, 20, 6): ",
  average(...[1, 2, 3, 10, 20, 6])
);
console.log("average(1, 2, 3, 4, 5, 6): ", average(1, 2, 3, 4, 5, 6));

/*
average(...[1, 2, 3, 10, 20, 6]) <==> average(1, 2, 3, 10, 20, 6):  7
average(1, 2, 3, 4, 5, 6):  3.5
*/
