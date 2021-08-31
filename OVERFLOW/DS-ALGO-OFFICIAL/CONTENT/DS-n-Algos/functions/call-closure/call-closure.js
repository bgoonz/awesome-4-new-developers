//Calls closure only after callback is called numTimes... times

function afterC(closure, numTimes) {
  return function () {
    if (--numTimes <= 0) {
      return closure();
    }
  };
}

//---------(testing)--------------
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
