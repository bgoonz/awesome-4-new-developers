/*

Returns  true  if the  function returns  true  for at least one element in a collection,  false  otherwise.

- Use  Array.some()  to test if any elements in the collection return  true  based on  fn .
- Omit the second argument,  fn , to use  Boolean  as a default.
*/

const any = (arr, func = Boolean) => arr.some(func);

any([0, 1, 2, 0], (x) => x >= 2); // true
any([0, 0, 1, 0]); // true
