/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
All four trainers have solved the task correctly, so the answer is (3 + 6 + 4 + 5) / 4 = 4.5. Each CodeFights Company Bot is trained by engineers from that specific company. The way it works is that a representative group of engineers from each company is identified as trainers before the bot goes live, and they CodeFight against the bot during a training phase. The current training algorithm is definitely more complex, but let's assume it works this way:

For each trainer we collect two pieces of information per task [answerTime, correctness], where correctness is 1 if the answer was correct, -1 if the answer was wrong, and 0 if no answer was given. In this case, the bot's correct answer time for a given task would be the average of the answer times from the trainers who answered correctly. Given all of the training information for a specific task, calculate the bot's answer time.

Example

For

trainingData = [[3, 1], [6, 1], [4, 1], [5, 1]] the output should be companyBotStrategy(trainingData) = 4.5.

For

trainingData = [[4, 1], [4, -1], [0, 0], [6, 1]] the output should be companyBotStrategy(trainingData) = 5.0.

Only the 1st and the 4th trainers (1-based) submitted correct solutions, so the answer is (4 + 6) / 2 = 5.0.

For

trainingData = [[4, -1], [0, 0], [5, -1]] the output should be companyBotStrategy(trainingData) = 0.0.

No correct answers were given for the task.
 */

function companyBotStrategy(array) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index][1] === 1) {
      result.push(array[index][0]);
    }
  }
  result = result.length > 0 ? result : [0.0];
  return result.reduce((a, sum) => a + sum) / result.length;
}

test("company Bot Strategy", () => {
  expect(
    companyBotStrategy([
      [4, 1],
      [4, -1],
      [0, 0],
      [6, 1],
    ])
  ).toEqual(5);
});
