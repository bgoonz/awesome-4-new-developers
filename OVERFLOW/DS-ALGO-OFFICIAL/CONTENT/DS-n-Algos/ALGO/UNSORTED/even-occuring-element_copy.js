export default (array) => {
  const hash = {};

  // Loop though the array adding all the elements together in a hash
  array.forEach((num) => {
    hash[num] = hash[num] + 1 || 1;
  });

  // Loop through all the keys in the hash, returning the number if we have an
  // even number of occurances
  for (const i in hash) {
    if (!(hash[i] & 1)) {
      return Number(i);
    }
  }

  return false;
};
