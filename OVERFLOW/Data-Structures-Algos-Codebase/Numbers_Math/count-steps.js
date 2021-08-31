/*
- Count number of full steps.
*/
function countSteps(val, step, overflow) {
  val = Math.floor(val / step);

  if (overflow) {
    return val % overflow;
  }

  return val;
}

countSteps(5, 2, 7);
console.log("countSteps( 5, 2, 7 ): ", countSteps(5, 2, 7));
console.log("countSteps(5,2,1): ", countSteps(5, 2, 1));
