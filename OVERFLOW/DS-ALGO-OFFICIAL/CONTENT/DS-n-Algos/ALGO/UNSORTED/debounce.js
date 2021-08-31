export default (fn, delay, execAsap) => {
  let timeout; // Keep a reference to the timeout outside the function

  return function () {
    // Keep the functions execution context and arguments in tact
    const that = this;

    const args = arguments;

    // If we already have a function ready to execute, clear it
    // Else if we are allowed to execute immediately, call the function
    if (timeout) {
      clearTimeout(timeout);
    } else if (execAsap) {
      fn.apply(that, args);
    }

    timeout = setTimeout(() => {
      execAsap || fn.apply(that, args);
      timeout = null;
    }, delay || 100);
  };
};
