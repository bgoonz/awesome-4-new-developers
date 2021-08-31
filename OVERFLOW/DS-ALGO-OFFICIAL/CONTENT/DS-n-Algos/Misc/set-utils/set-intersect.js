const intersect = (sets) => {
  if (sets.length === 0) return new Set();
  if (sets.length === 1) return new Set(sets[0]);
  let minSize = Infinity;
  let minIndex = -1;
  for (let i = 0; i < sets.length; i++) {
    const size = sets[i].size;
    if (size < minSize) {
      minIndex = i;
      minSize = size;
    }
  }
  const current = new Set(sets[minIndex]);
  for (let i = 0; i < sets.length; i++) {
    if (i === minIndex) continue;
    const set = sets[i];
    for (const item of current) {
      if (!set.has(item)) {
        current.delete(item);
      }
    }
  }
  return current;
};
