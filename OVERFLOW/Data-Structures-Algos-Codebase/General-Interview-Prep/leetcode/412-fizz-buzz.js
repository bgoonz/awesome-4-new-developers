/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Write a program that outputs the string representation of numbers from 1 to n.
 *
 * But for multiples of three it should output “Fizz” instead of the number and
 * for the multiples of five output “Buzz”. For numbers which are multiples of
 * both three and five output “FizzBuzz”.
 */

function fizzBuzz(value) {
  let result = [];
  let index = 1;
  while (index <= value) {
    if (index % 3 === 0 && index % 5 === 0) {
      result.push("FizzBuzz");
    } else if (index % 3 === 0) {
      result.push("Fizz");
    } else if (index % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(index.toString());
    }
    index++;
  }
  return result;
}

test("fizz Buzz", () => {
  expect(fizzBuzz(15)).toEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
});
