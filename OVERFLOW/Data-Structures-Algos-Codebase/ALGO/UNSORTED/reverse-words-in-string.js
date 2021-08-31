export default (string) => {
  return string.split(/\s+/g).reverse().join(" ");
};
