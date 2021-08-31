const allUnique = (array) => {
  let valuesSoFar = [];
  for (let i = 0; i < array.length; ++i) {
    let value = array[i];
    if (valuesSoFar.indexOf(value) !== -1) {
      return false;
    }
    valuesSoFar.push(value);
  }
  return true;
};

module.exports = allUnique;
