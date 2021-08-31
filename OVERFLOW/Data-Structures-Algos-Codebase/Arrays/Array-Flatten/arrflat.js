module.exports = (arr) => {
  return flat(arr, []);
};

function flat(arr, res) {
  let i = 0,
    cur;
  const len = arr.length;
  for (; i < len; i++) {
    cur = arr[i];
    if (Array.isArray(cur)) {
      return flat(cur, res);
    } else {
      return res.push(cur);
    }
  }
  return res;
}
