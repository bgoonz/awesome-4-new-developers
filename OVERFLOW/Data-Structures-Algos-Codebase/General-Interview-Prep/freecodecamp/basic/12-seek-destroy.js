/**
 * Created by Bryan Guner
 *
 * bryan.guner@gmail.com
 */

/**
 * Problem:
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 */

function destroyer(...args) {
  const itemsToRemove = Array.from(args).slice(1);
  return args[0].filter((item) => {
    return !itemsToRemove.includes(item);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
