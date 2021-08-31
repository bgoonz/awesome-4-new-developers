```js


// 1. Creating Arrays
let firstArray = ["a","b","c"];
let secondArray = ["d","e","f"];
// 2. Access an Array Item
console.log(firstArray[0]); // Results: "a"
// 3. Loop over an Array
firstArray.forEach(function(item, index, array){
console.log(item, index);
});
// Results:
// a 0
// b 1
// c 2
// 4. Add new item to END of array
secondArray.push('g');
console.log(secondArray);
// Results: ["d","e","f", "g"]
// 5. Remove item from END of array
secondArray.pop();
console.log(secondArray);
// Results: ["d","e","f"]
// 6. Remove item from FRONT of array
secondArray.shift();
console.log(secondArray);
// Results: ["e","f"]
// 7. Add item to FRONT of array
secondArray.unshift("d");
console.log(secondArray);
// Results: ["d","e","f"]
// 8. Find INDEX of an item in array
let position = secondArray.indexOf('f');
// Results: 2
// 9. Remove Item by Index Position
secondArray.splice(position, 1);
console.log(secondArray);
// Note, the second argument, in this case "1",
// represent the number of array elements to be removed
// Results: ["d","e"]
// 10. Copy an Array
let shallowCopy = secondArray.slice();
console.log(secondArray);
console.log(shallowCopy);
// Results: ShallowCopy === ["d","e"]
// 11. JavaScript properties that BEGIN with a digit MUST be accessed using bracket notation
renderer.3d.setTexture(model, 'character.png'); // a syntax error
renderer['3d'].setTexture(model, 'character.png'); // works properly
// 12. Combine two Arrays
let thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);
// ["a","b","c", "d", "e"];
// 13. Combine all Array elements into a string
console.log(thirdArray.join()); // Results: a,b,c,d,e
console.log(thirdArray.join('')); // Results: abcde
console.log(thirdArray.join('-')); // Results: a-b-c-d-e
// 14. Reversing an Array (in place, i.e. destructive)
console.log(thirdArray.reverse()); // ["e", "d", "c", "b", "a"]
// 15. sort
let unsortedArray = ["Alphabet", "Zoo", "Products", "Computer Science", "Computer"];
console.log(unsortedArray.sort());
// Results: ["Alphabet", "Computer", "Computer Science", "Products", "Zoo" ]



```
