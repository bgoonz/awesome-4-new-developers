/*
 - Returns a random integer within the range `low .. high` inclusive.
 -
 - parameter:  {Number} low
 -        The lower bound on the range.
 - parameter:  {Number} high
 -        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + Math.random() * (high - low));
}
