"use strict";

function memorize(fn) {
  let memorized = false;

  let result = undefined;
  return () => {
    if (memorized) {
      return result;
    } else {
      result = fn();
      memorized = true;
      // Allow to clean up memory for fn
      // and all dependent resources
      fn = undefined;
      return result;
    }
  };
}
