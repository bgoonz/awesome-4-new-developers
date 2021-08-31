// return no of total permutations without repeated consecutive letters; each character in string is unique
// eg. for aab: 2 (aba and aba)
// this solution adapted from forum post by: https://forum.freecodecamp.com/u/adigo

// to swap characters in a string
function swap(index1, index2, arr) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// to check if characters repeat in string
function checkRepeats(str) {
  const regex = /(\w)\1+/g;
  return regex.test(str);
}

/* Heap's algorithm: https://en.wikipedia.org/wiki/Heap%27s_algorithm */
function makePermutations(n, arr, result) {
  if (n == 1) {
    // output a permutation if it has no repeats
    if (!checkRepeats(arr.join(""))) {
      result.push(arr.join(""));
    }
  } else {
    for (let i = 0; i < n - 1; i++) {
      makePermutations(n - 1, arr, result);
      if (n % 2 === 0) {
        swap(i, n - 1, arr);
      } else {
        swap(0, n - 1, arr);
      }
    }
    makePermutations(n - 1, arr, result);
  }
  return result;
}

function permAlone(str) {
  const input = str.split("");
  const result = [];
  return makePermutations(input.length, input, result).length;
}

permAlone("aab");

console.log(permAlone("aab"));
