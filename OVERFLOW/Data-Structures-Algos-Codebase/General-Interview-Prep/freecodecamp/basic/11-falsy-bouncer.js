/**
 * Created by Bryan Guner
 *
 * bryan.guner@gmail.com
 */

/**
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */

function bouncer(arr) {
  return arr.filter((item) => {
    return Boolean(item);
  });
}

console.log(bouncer([7, "ate", "", false, 9]));
