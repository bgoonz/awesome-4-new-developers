/*Function to check how many times an alpha-numeric character occurs in a string.
Case insensitive. */

let isAlphaNumeric = (char) => {
  char = char.toString();
  let id = char.charCodeAt(0);
  if (
    !(id > 47 && id < 58) && // if not numeric(0-9)
    !(id > 64 && id < 91) && // if not letter(A-Z)
    !(id > 96 && id < 123) // if not letter(a-z)
  ) {
    return false;
  }
  return true;
};

let countChars = (string) => {
  let obj = {};
  for (let char of string) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] !== undefined ? ++obj[char] : (obj[char] = 1);
    }
  }
  return obj;
};
