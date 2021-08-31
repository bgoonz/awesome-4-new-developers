//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.Base pairs are a pair of AT and CG.
function pairing(str) {
  const paired = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return str.split("").map((x) => [x, paired[x]]);
}
console.log(pairing("ATCGA")); //[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

//OR Using Switch statement
// function pairElement(str) {
//     var empty = [];
//     function search(char) {
//       switch(char){
//         case "A":
//        empty.push(["A","T"]);
//        break
//      case "T":
//        empty.push(["T","A"]);
//        break
//        case "G":
//        empty.push(["G","C"])
//        break
//        case "C":
//        empty.push(["C","G"])
//       }}
//     for(let i=0; i<str.length; i++){
//     search(str[i])
//     }
//     return empty
//     }
