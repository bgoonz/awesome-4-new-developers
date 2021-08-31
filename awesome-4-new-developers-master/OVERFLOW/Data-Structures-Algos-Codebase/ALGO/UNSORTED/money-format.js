export default (value) => {
  const remaining = value - ~~value;
  let string = `${~~value}`;
  let length = string.length;
  let places = 0;

  while (--length) {
    places += 1;
    // At every third position we want to insert a comma
    if (places % 3 === 0) {
      string = `${string.substr(0, length)},${string.substr(length)}`;
    }
  }

  return `$${string}${remaining.toFixed(2).slice(1)}`;
};
