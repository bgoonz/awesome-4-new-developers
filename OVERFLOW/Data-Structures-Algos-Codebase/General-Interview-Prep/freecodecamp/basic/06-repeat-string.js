/**
 * Created by Bryan Guner
 *
 * bryan.guner@gmail.com
 */

/**
 * Repeat a given string (first argument) num times (second argument).
 * Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
  let fullString = "";
  while (num > 0) {
    fullString += str;
    num--;
  }
  return fullString;
}

console.log(repeatStringNumTimes("*", 8));
