function uniteUnique(arr) {
  const united = [];
  for (let i = 0; i < arguments.length; i++) {
    //iterate through arguments arrays
    for (let a = 0; a < arguments[i].length; a++) {
      //iterate through each argument array
      united.push(arguments[i][a]);
    }
  }
  return (arr = [...new Set(united)]); //new Set returns set of unique values, spread operator transforms it into array
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
