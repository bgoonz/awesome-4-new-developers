module.exports = (string) => {
  return string.split(/\s+/g).reverse().join(" ");
};
