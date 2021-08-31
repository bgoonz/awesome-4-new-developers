/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function strStr(haystack, needle) {
  if (needle === "") return 0;
  for (let i in haystack) {
    if (
      haystack[i] === needle[0] &&
      haystack.substring(i, Number(i) + needle.length) === needle
    ) {
      return Number(i);
    }
  }
  return -1;
}

test("implement strStr()", () => {
  expect(strStr("hello", "ll")).toEqual(2);
  expect(strStr("a", "a")).toEqual(0);
  expect(strStr("aaa", "aaaa")).toEqual(-1);
  expect(strStr("mississippi", "issip")).toEqual(4);
});
