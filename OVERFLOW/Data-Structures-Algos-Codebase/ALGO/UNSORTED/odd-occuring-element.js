export default (array) => {
  return array.reduce((memo, number) => {
    return memo ^ number;
  }, 0);
};
