const distance = (x, y) => {
  const difference = x - y;
  const squaredEuclideanDistance = difference * difference;
  return squaredEuclideanDistance;
};

module.exports = {
  distance: distance,
};
