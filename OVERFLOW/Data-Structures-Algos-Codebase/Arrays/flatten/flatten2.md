Flattens an array up to the specified depth.

- Use recursion, decrementing `depth` by 1 for each level of depth.
- Use `Array..reduce()` and `Array..concat()` to merge elements or arrays.
- Base case, for `depth` equal to `1` stops recursion.
- Omit the second argument, `depth` to flatten only to a depth of `1` (single flatten).

```js
function flatten(arr, depth = 1) {
  return arr.reduce((newArr, curEle) => {
    if (depth > 1 && Array.isArray(curEle)) {
      return newArr.concat(flatten(curEle, depth - 1));
    } else {
      return newArr.concat(curEle);
    }
  }, []);
}
console.log("flatten([1, [2], 3, 4], 3): ", flatten([1, [2], 3, 4], 3));
```

```js
flatten([1, "a", ["hello", ["world", "1"]]]);
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
