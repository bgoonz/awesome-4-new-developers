find = (set, fn) => {
  for (const item of set) {
    if (fn(item)) return item;
  }
};
