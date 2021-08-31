const prompts = require("prompts");

const binarySearch = (array, value) => {
  let start = 0;
  let end = array.length - 1;
  let iterations = 0;

  while (start <= end) {
    iterations++;
    const mid = Math.floor((start + end) / 2);

    if (array[mid] === value) {
      return {
        passed: true,
        iterations,
      };
    } else if (array[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return {
    passed: false,
    iterations,
  };
};

const main = async () => {
  const list = [];

  for (let i = 1; i < 100001; i++) {
    list.push(i);
  }

  let search = await prompts({
    type: "number",
    name: "value",
    message:
      "The array has the values 1-100000 located inside of it \n" +
      "Search for values that are, or are not located in the array, to see if \n" +
      "They are found, and see how many iterations it took.",
  });

  const { passed, iterations } = binarySearch(list, search.value);

  if (passed) {
    console.log(`Value ${search.value} found! Took ${iterations} Iterations.`);
  } else {
    console.log(
      `Value ${search.value} not found! Took ${iterations} Iterations.`
    );
  }
};

main();
