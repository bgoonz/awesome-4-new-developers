function bouncer(arr) {
  return arr.filter(Boolean);
}
console.log(
  bouncer([8, "Hello", "", false, null, undefined, 9, NaN, "World", 0])
);

//Boolean is a funciton that returns truthy when true and falsy when false.
//Boolean(7) return true, Boolean("") returns false and so on
//This get run once per item in the array and filter only keeps the value which is true

//Solution1:
// function bouncer(arr){
//     let newarray = [];
//     for(let i=0; i<arr.length; i++) {
//     if(arr[i]){
//         newarray.push(arr[i])
//     }
//     }
//     return newarray
// }
