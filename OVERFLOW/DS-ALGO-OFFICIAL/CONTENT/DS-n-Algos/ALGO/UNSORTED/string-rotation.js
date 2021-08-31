export default (a, b) => {
  return a.length === b.length && (a + a).includes(b);
};
