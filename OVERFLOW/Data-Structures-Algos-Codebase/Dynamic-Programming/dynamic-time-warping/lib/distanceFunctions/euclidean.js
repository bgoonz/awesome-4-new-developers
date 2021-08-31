const distance = (x, y) => {
  const difference = x - y;
  const euclideanDistance = Math.sqrt(difference * difference);
  return euclideanDistance;
};

module.exports = {
  distance: distance,
};
