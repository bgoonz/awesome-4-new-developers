export default (fn, times) => {
  // Set times to one if nothing is passed through and keep track of the
  // latest return value to return when we run out of execution times.
  let memo;
  times = times || 1;

  // Return the function that will be executed.
  return function (...args) {
    if (!times) {
      return memo;
    }

    // Set memo to the result of the function and decrement the number of
    // executions.
    memo = fn.apply(this, args);
    times -= 1;

    // If there are no more execution times, set the function to `null` so
    // it can be garbage collected and return the memo.
    times || (fn = null);
    return memo;
  };
};
