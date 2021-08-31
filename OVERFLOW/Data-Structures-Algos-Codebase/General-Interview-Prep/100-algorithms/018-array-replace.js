/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

Input/Output 
*/

function arrayReplace(array, elemToReplace, substitutionElem) {
  array.forEach((element, index) => {
    if (element === elemToReplace) {
      array[index] = substitutionElem;
    }
  });
  return array;
}

test("array Replace", () => {
  expect(arrayReplace([1, 2, 1], 1, 3)).toEqual([3, 2, 3]);
});
