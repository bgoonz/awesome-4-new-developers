function smallestCommons(arr) {
  //this awesome solution by https://forum.freecodecamp.com/u/JanEgbers
  //smallest common multiple of both numbers in arr that is evenly divisible by range arr[0] to arr[1]
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let mltple = max;

  for (let i = max; i >= min; i--) {
    //iterate down from max
    console.log("i: ", i);
    //if max is evenly divided, move on; if not, increase the multiple by one unit of max, then check i again
    if (mltple % i !== 0) {
      mltple += max; //check the next-up candidate for scm
      i = max; //restart loop with new mltple value
      console.log(mltple, max);
    }
  }

  return mltple;
}

console.log(smallestCommons([1, 5]));
