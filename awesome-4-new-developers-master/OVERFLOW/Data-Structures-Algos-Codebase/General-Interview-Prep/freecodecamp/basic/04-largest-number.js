/**
 * Created by Bryan Guner
 *
 * bryan.guner@gmail.com
 */

/**
 * Program:
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 */

function getLongestWordLength(str) {
  return str
    .split(" ")
    .reduce(
      (longest, index) => (longest.length > index.length ? longest : index),
      0
    ).length;
}

console.log(
  getLongestWordLength(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  )
);
