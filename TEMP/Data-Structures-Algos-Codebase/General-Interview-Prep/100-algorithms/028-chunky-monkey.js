/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function chunkyMonkey(array, n) {
  if (array.length <= n) {
    return [array];
  }
  return [array.slice(0, n)].concat(chunkyMonkey(array.slice(n), n));
}

console.log(JSON.stringify(chunkyMonkey([0, 1, 2, 3, 4, 5], 4)));

// test('chunky Monkey', () => {
//   expect(chunkyMonkey('Ashish')).toEqual('Ashish')
// });
