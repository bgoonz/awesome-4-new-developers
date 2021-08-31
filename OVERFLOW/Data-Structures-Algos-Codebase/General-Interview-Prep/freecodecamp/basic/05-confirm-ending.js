/**
 * Created by Bryan Guner
 *
 * bryan.guner@gmail.com
 */

/**
 * Program:
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 */

function confirmEnding(str, term) {
  return str.substring(str.length - term.length, str.length) === term;
}

console.log(confirmEnding("Beautiful", "l"));
