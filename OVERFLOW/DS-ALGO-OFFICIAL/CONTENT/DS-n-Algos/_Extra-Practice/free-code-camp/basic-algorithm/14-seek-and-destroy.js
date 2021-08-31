function destroyer(arr) {
  // Remove all the values
  const argsArray = Array.from(arguments);
  return argsArray[0].filter((val) => {
    for (let i = 1; i < argsArray.length; i++) {
      return !argsArray.includes(val);
    }
    return true;
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
