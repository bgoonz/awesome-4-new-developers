const isSubset = (bigSet, smallSet) => {
  if (bigSet.size < smallSet.size) return false;
  for (const item of smallSet) {
    if (!bigSet.has(item)) return false;
  }
  return true;
};
