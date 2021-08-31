//Function to test if a character is alpha numeric that is faster than a regular
//expression in JavaScript

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

console.log(isAlphaNumeric("A")); //true
console.log(isAlphaNumeric(2)); //true
console.log(isAlphaNumeric("z")); //true
console.log(isAlphaNumeric(" ")); //false
console.log(isAlphaNumeric("!")); //false
