module.exports = (totalRooms) => {
  const findDivisors = (number) => {
    const divisors = [];
    let iterator = number;

    while (iterator--) {
      if (number % iterator === 0) {
        divisors.push(iterator);
      }
    }

    return divisors;
  };

  // Returns true or false based on whether the number is found in the sum of
  // array subsets.
  const isSubsetSum = (number, array) => {
    let hasSubset = false;

    (function findSubset(total, numbers) {
      !hasSubset && (hasSubset = total === number);

      if (hasSubset || total > number) {
        return;
      }

      numbers.forEach((num, index) => {
        return findSubset(
          total + num,
          numbers.slice(0, index).concat(numbers.slice(index + 1))
        );
      });
    })(0, array);

    return hasSubset;
  };

  // Need a simple helper method that returns the sum of an array.
  const sumArray = (array) => {
    return array.reduce((memo, num) => {
      return memo + num;
    }, 0);
  };

  // Find the room using the provided functions.
  let divisors;

  for (let room = 0; room <= totalRooms; room++) {
    divisors = findDivisors(room);

    // The sum of all the divisors must be greater than the number.
    if (sumArray(divisors) > room && !isSubsetSum(room, divisors)) {
      return room;
    }
  }

  return 0; // No room number found.
};
