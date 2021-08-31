//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these argument

function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  return arr.filter((num) => !args.includes(num)); //froms new array
}

// function destroyer(arr, ...valueToRemove){
//     return arr.filter(num=>!valueToRemove.includes(num))
// }
console.log(destroyer([1, 2, 3, 4], 3));
