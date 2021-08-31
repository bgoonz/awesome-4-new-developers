// Accepts a number and an array of multiples
export default function sumOfMultiples(number, multiples) {
  return Array(...new Array(number))
    .map((_, index) => {
      return index;
    })
    .filter((number) => {
      return multiples.some((multiple) => {
        return number % multiple === 0;
      });
    })
    .reduce((memo, number) => {
      return memo + number;
    });
}
