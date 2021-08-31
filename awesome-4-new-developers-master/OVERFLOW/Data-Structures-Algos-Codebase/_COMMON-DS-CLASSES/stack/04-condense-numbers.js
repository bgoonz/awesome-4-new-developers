/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function randomSequence(n) {
  let sequence = [];
  for (let index = 0; index < n; index++) {
    const num = Math.floor(Math.random() * 10);
    sequence.push(num);
  }
  return sequence.join("");
}

function condenseNumbers(value) {
  let sequence = value.split("");
  let stack = [sequence.pop()];
  while (sequence.length > 0) {
    const left = sequence.pop();
    const right = stack.pop();
    if (left !== right) {
      stack.push(right);
      stack.push(left);
    }
  }

  // put everthing back to first stack to undo reversed order
  while (stack.length > 0) {
    sequence.push(stack.pop());
  }
  return sequence.join("");
}

test("condense Numbers", () => {
  expect(condenseNumbers("54322346")).toEqual("56");
});
