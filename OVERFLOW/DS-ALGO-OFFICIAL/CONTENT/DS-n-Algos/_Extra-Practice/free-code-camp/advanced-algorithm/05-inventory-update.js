function updateInventory(arr1, arr2) {
  let present = false;
  // go through each item in arr2 to check for presence of items in arr1
  arr2.forEach((newInv) => {
    // indicator if product is present
    present = false;
    // for each item in arr2, go through each item in arr1
    arr1.forEach((curInv) => {
      // if product is already present, update the quantity
      if (newInv[1] === curInv[1]) {
        curInv[0] += newInv[0];
        present = true;
      }
    });
    // if not already present, add the quantity and product
    if (present === false) arr1.push(newInv);
  });

  // return the sorted inventory in alphabetical order
  return arr1.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
  });
}

// Example inventory lists
const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
