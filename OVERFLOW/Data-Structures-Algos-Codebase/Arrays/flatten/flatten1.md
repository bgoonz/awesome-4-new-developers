```js
function flatten(array) {
  // This is the array we are building out with non-Array elements
  let newArray = [];

  // We are iterating through each element of the array...
  array.forEach(function (element) {
    // ... if it is an array, flatten it, spread each individual element into the new array
    if (Array.isArray(element)) {
      // Recursive case (the element is an array)
      newArray.push(...flatten(element)); // Recursive step (flatten this nested array - at a certain point we will get to our deepest level of nesting and not recurse any more)
      // ... if it is a non-Array element, push it directly into the new array
    } else {
      // Base case (the element is not an array)
      newArray.push(element);
    }
  });

  // Now that we've built up our array with non-Array elements, return it
  return newArray;
}

console.log(flatten([1, "a", ["hello", ["world", "1"]]])); // [1, "a", "hello", "world", "1"]
```

---

```js
// Tracing the call stack:
flatten([1, "a", ["hello", ["world", "1"]]]);
// create newArray = []
// iterate through each element:
// current element: 1
// element is not array, push into newArray
// newArray is now [1]
// current element: "a"
// element is not array, push into newArray
// newArray is now [1, "a"]
// current element: ["hello", ["world", "1"]]
// element is an array, call flatten on it:
flatten(["hello", ["world", "1"]]);
// create newArray = []
// iterate through each element:
// current element: "hello"
// element is not array, push into newArray
// newArray is now ["hello"]
// current element: ["world", "1"]
// element is an array, call flatten on it:
flatten(["world", "1"]);
// create newArray = []
// iterate through each element:
// current element: "world"
// element is not an array, push into newArray
// newArray is now ["world"]
// current element: "1"
// element is not an array, push into newArray
// newArray is now ["world", "1"]
// Finished iterating, return newArray
// spread elements of returned flatten into newArray
// newArray is now ["hello", "world", "1"]
// Finished iterating, return newArray
// spread elements of returned flatten into newArray
// newArray is now [1, "a", "hello", "world", "1"]
// Finished iterating, return newArray
```
