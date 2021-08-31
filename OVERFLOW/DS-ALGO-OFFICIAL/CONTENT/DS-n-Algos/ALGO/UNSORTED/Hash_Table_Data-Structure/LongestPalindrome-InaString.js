//Find the longest substring which is palindrome. Return null if the length is less than 2.
// function longestPalindrome(s) {
//     let arr = [];
//     let _s = s.split('');
//     for (let i = 0; i < _s.length; i++) {
//         for (let j = 0; j < _s.length; j++) {
//             let word = _s.slice(0, j + 1).join('');
//             let rev_word = _s.slice(0, j + 1).reverse().join('');
//             if (word === rev_word) {
//                 arr.push(word)
//             }
//         }
//         _s.splice(0, 1)
//     }
//     let _arr = arr.sort((a, b) => a.length - b.length);
//     for (let i = 0; i < _arr.length; i++) {
//         if (_arr[i].length>2 && _arr[arr.length - 1].length === _arr[i].length) {
//             return _arr[i]
//         }
//     }
//     return null;
//     }
console.log(longestPalindrome("hellosanasmith")); //saanaas
console.log(longestPalindrome("abcdef")); //null
function longestPalindrome(str) {
  const arr = str.split("");
  const endArr = [];
  for (var i = 0; i < arr.length; i++) {
    let temp = "";
    temp = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      temp += arr[j];
      if (temp.length > 2 && temp === temp.split("").reverse().join("")) {
        endArr.push(temp);
      }
    }
  }

  let count = 0;
  let longestPalindrome = "";
  for (var i = 0; i < endArr.length; i++) {
    if (count >= endArr[i].length) {
      longestPalindrome = endArr[i - 1];
    } else {
      count = endArr[i].length;
    }
  }
  return longestPalindrome;
}
