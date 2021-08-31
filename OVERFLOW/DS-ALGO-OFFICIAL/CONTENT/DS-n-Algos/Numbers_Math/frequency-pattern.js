/* Using an object to collect the frequency of values and compare them. Usually
for arrays or strings. This is a way of avoiding nested loops and O(n^2) time,
simplifying the operation to O(n) time complexity*/

let frequencyCounter = (first, second) => {
  //check the length of the array or string to see if they are equal
  if (first.length !== second.length) return false;

  const obj = {};

  //set the key value pairs of the obj to the elements of the dataset and how many times
  //those elements occured in the dataset.
  for (let ele1 of first) {
    obj[ele1] ? (obj[ele1] += 1) : (obj[ele1] = 1);
  }

  //check the object against the values in the second dataset
  for (let ele2 of second) {
    if (!obj[ele2]) return false;
    obj[ele2] -= 1;
  }

  return true;
};

//O(n^2) Example

let slowFrequencyCounter = (first, second) => {
  if (first.length !== second.length) return false;

  for (let i = 0; i < first.length; i++) {
    let ele = first[i];
    let checker = second.indexOf(ele);
    if (checker === -1) {
      return false;
    }
    second.splice(checker, 1);
  }
  return true;
};
