const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let SECRET_NUMBER;
let numAttempts = 5;

askLimit();

function askLimit() {
  rl.question("Enter a number of attempts ", (num) => {
    numAttempts = Number(num);
    askRange();
  });
}

function askRange() {
  rl.question("Enter a max number: ", (max) => {
    rl.question("Enter a min number: ", (min) => {
      console.log(`I'm thinking of number between ${min} and ${max}...`);
      SECRET_NUMBER = randomInRange(Number(min), Number(max));
      askGuess();
    });
  });
}

function askGuess() {
  console.log(numAttempts + " attempts remaining");
  rl.question("Enter a guess: ", (num) => {
    const isCorrect = checkGuess(Number(num));
    numAttempts--;
    if (isCorrect) {
      console.log("YOU WON.");
      rl.close();
    } else if (numAttempts === 0) {
      console.log("You have no more attempts.");
      console.log("YOU LOSE.");
      rl.close();
    } else {
      askGuess();
    }
  });
}

function randomInRange(min, max) {
  let range = max - min;
  return min + Math.floor(Math.random() * (range + 1));
}

function checkGuess(guess) {
  if (guess > SECRET_NUMBER) {
    console.log("Too high.");
    return false;
  } else if (guess < SECRET_NUMBER) {
    console.log("Too low.");
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
}
