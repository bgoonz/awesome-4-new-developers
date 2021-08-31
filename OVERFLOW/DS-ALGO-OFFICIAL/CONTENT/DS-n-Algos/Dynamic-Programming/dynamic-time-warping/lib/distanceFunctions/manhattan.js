const distance = (x, y) => {
  const difference = x - y;
  const manhattanDistance = Math.abs(difference);
  return manhattanDistance;
};

module.exports = {
  distance: distance,
};
