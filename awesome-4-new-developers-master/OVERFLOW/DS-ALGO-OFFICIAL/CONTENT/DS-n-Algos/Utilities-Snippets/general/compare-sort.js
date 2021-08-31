let stringArray = ["Blue", "Humpback", "Beluga"];
let numericStringArray = ["80", "9", "700"];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log("stringArray:", stringArray.join());
console.log("Sorted:", stringArray.sort());

console.log("numberArray:", numberArray.join());
console.log("Sorted without a compare function:", numberArray.sort());
console.log("Sorted with compareNumbers:", numberArray.sort(compareNumbers));

console.log("numericStringArray:", numericStringArray.join());
console.log("Sorted without a compare function:", numericStringArray.sort());
console.log(
  "Sorted with compareNumbers:",
  numericStringArray.sort(compareNumbers)
);

console.log("mixedNumericArray:", mixedNumericArray.join());
console.log("Sorted without a compare function:", mixedNumericArray.sort());
console.log(
  "Sorted with compareNumbers:",
  mixedNumericArray.sort(compareNumbers)
);

/*
stringArray: Blue,Humpback,Beluga
Sorted: [ 'Beluga', 'Blue', 'Humpback' ]
numberArray: 40,1,5,200
Sorted without a compare function: [ 1, 200, 40, 5 ]
Sorted with compareNumbers: [ 1, 5, 40, 200 ]
numericStringArray: 80,9,700
Sorted without a compare function: [ '700', '80', '9' ]
Sorted with compareNumbers: [ '9', '80', '700' ]
mixedNumericArray: 80,9,700,40,1,5,200
Sorted without a compare function: [
  1,   200,   40,
  5,   '700', '80',
  '9'
]
Sorted with compareNumbers: [
  1,     5,    '9',
  40,    '80', 200,
  '700'
]

\___________________________________________________
bryan_dir:general-utils_exitstatus:0 ====>

*/
