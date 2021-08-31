const prompts = require("prompts");

const binarySearchRecusionProject = (
  array,
  value,
  start,
  end,
  iterations = 0
) => {
  if (start >= end)
    return {
      passed: false,
      iterations: iterations + 1,
    };

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === value) {
    return {
      passed: true,
      iterations: iterations + 1,
    };
  } else if (array[mid] < value) {
    return binarySearchRecusionProject(
      array,
      value,
      mid + 1,
      end,
      iterations + 1
    );
  } else {
    return binarySearchRecusionProject(
      array,
      value,
      start,
      mid - 1,
      iterations + 1
    );
  }
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

  const { passed, iterations } = binarySearchRecusionProject(
    list,
    search.value,
    0,
    list.length
  );

  if (passed) {
    console.log(`Value ${search.value} found! Took ${iterations} Iterations.`);
  } else {
    console.log(
      `Value ${search.value} not found! Took ${iterations} Iterations.`
    );
  }
};

main();
