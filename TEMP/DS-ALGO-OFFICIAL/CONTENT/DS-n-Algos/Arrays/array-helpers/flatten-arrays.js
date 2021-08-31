/*Simple Function to flatten an array into a single layer */
const flatten = (array) =>
  array.reduce((accum, ele) => {
    return accum.concat(Array.isArray(ele) ? flatten(ele) : ele);
  }, []);
