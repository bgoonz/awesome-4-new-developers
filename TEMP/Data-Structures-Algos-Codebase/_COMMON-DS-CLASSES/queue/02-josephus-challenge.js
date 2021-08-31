/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

// Write a function that accepts and array of choices and an integer n. You should cycle through the choices starting
// at the beginning and counting up to N. Every time N is reached one choice should be removed. Continue this process
// couting to N and removing the choice at that count until one choice is left. Return that choice.
// [A, B, C, D, E, F] n = 3 returns B
// [A, B, C, D, E, F] n = 4 returns F

const Queue = require("./01-queue-using-linked-list");

function josephusChallenge(choices, n) {
  let qq = new Queue();
  for (const choice of choices) {
    qq.enqueue(choice);
  }
  qq.enqueue(qq.dequeue());
  let count = 1;
  while (qq.size > 1) {
    const choice = qq.dequeue();
    if (count % n !== 0) {
      qq.enqueue(choice);
    } else {
      console.log("Removed ->" + choice);
    }
    count += 1;
  }
  return qq.dequeue();
}

test("josephus Challenge", () => {
  expect(josephusChallenge("ABCDEF", 3)).toEqual("B");
  expect(josephusChallenge("ABCDEF", 4)).toEqual("F");
});
