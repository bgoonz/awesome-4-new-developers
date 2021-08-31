/**
 * Created by Bryan Guner
 *
 * bryan.guner@gmail.com
 */

/**
 * Program:
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 * For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
 * The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
 * Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
 */

function mutation(arr) {
  return !(
    arr[1]
      .toLowerCase()
      .split("")
      .filter((item) => {
        return arr[0].toLowerCase().indexOf(item) === -1;
      }).length > 0
  );
}

console.log(mutation(["floor", "for"]));
