/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

function validParantheses(value) {
  let stack = [];
  let pairsDict = { "(": ")", "{": "}", "[": "]" };

  for (let index = 0; index < value.length; index++) {
    const char = value[index];
    if (pairsDict[char]) {
      stack.push(char);
    } else {
      lastChar = stack[stack.length - 1];
      pairsDict[lastChar] === char ? stack.pop() : stack.push(char);
    }
  }
  return stack.length === 0;
}

test("valid Parantheses", () => {
  expect(validParantheses("{}")).toEqual(true);
  expect(validParantheses("(){}[]")).toEqual(true);
  expect(validParantheses("{]")).toEqual(false);
  expect(validParantheses("([)]")).toEqual(false);
  expect(validParantheses("{[]}")).toEqual(true);
});
