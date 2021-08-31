/**
 * Created by Bryan Guner
 *
 * bryan.guner@gmail.com
 */

/**
 * Problem:
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
  // Use regex \w to remove any word character from string. Word character to alphanumeric characters
  const regex = /\W/g;

  const decodedString = str.split("").map((item) => {
    const codeOfItem = item.charCodeAt();
    if (regex.test(item)) {
      return item.charCodeAt();
    }
    if (codeOfItem > 77) {
      return codeOfItem - 13;
    }
    if (codeOfItem < 78) {
      return codeOfItem + 13;
    }
  });

  // Spread operator allows you to pass array or string where array literals are expected
  return String.fromCharCode(...decodedString);
}

// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));
