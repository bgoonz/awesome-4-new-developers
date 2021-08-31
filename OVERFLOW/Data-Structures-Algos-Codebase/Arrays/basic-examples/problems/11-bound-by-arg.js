/***********************************************************************
Write a function named `boundByAnArg(function, arg)` that will accept a
function and an argument. When invoked the boundByAnArg function will return a
function that will utilize the original argument passed into boundByAnArg. 

See below for an example:

function iSpy(thing) {
  return "I spy a " + thing;
}

let spyTree = boundByAnArg(iSpy, "tree");
console.log(spyTree()); // prints "I spy a tree"
console.log(spyTree("car")); // prints "I spy a tree"

let spyCar = boundByAnArg(iSpy, "car");
console.log(spyCar()); // prints "I spy a car"
console.log(spyCar("potato")); // prints "I spy a car"

***********************************************************************/

function boundByAnArg(func, arg) {
  return func.bind(null, arg);
}

module.exports = boundByAnArg;
