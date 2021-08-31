export function iterative(number) {
  const string = `${number}`.split(".");
  let length = string[0].length;
  let places = 0;

  while (--length) {
    places += 1;
    // At every third position we want to insert a comma
    if (places % 3 === 0) {
      string[0] = `${string[0].substr(0, length)},${string[0].substr(length)}`;
    }
  }

  return string.join(".");
}

export function regexp(number) {
  const string = `${number}`.split(".");

  string[0] = string[0].replace(/(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,");

  return string.join(".");
}
