//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
function sumofall(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
console.log(sumofall([10, 5]));

// function sumofall(arr){
//     let count = Math.abs(arr[0]-arr[1])+1
// ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
//     let sum = ((arr[0]+arr[1])*count) / 2
//     return sum
// }
