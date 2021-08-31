//Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

function FindIntersection(strArr) {
  let arr = strArr.map((x) => x.split(","));
  let intersection = arr[0].filter((x) => arr[1].includes(x));
  return intersection.length > 0 ? intersection.join(",") : false;
}
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));

//Sol2: Using Regex
// function FindIntersection(strArr){
//     let arr = strArr.map(x=> x.match(/\d+/g))
//     let intersection = arr[0].filter(x => arr[1].includes(x))
//     return intersection.length > 0 ?  intersection.join(","): false
//    }

//Soln3: Using For loop
//function FindIntersection(strArr) {
//     let arr0 = strArr[0].split(",")
//     let arr1 = strArr[1].split(",")
//   let newarray = [];
//     for(let i=0; i<arr0.length; i++){
//       let newarr0 = arr0[i];

//       for(let j=0; j<arr1.length; j++){
//     let newarr1 = arr1[j];
//       if(newarr0 === newarr1){
//   newarray.push(newarr0);
//   break

//       }
//       }
//     }
//     if(newarray.length === 0 ){
//       return false;

//     }
//     else{
//       return newarray.join(",")
//       }

//   }
