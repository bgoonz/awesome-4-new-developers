/***********************************************************************
Write a function named `boundfuncTimer(obj, func, time)` that will accept an object,
a function to call upon that object, and a number representing milliseconds.

The `boundfuncTimer` should use the global.setTimeout function to invoke the
passed in function on the object in `time` amount of seconds. 

There are no specs for this problem - try it in the console yourself to
test your answer!

**Hint**: use Function#bind()!

Examples:

const dog = {
  age: 1
};

const cat = {
  age: 5
};

function growOlder () {
  this.age++;
  console.log(this.age)
}

boundfuncTimer(dog, growOlder, 5000); // in 5 seconds prints: 2
boundfuncTimer(cat, growOlder, 7000); // in 7 seconds prints: 6


***********************************************************************/

function boundfuncTimer(obj, func, time) {
  setTimeout(func.bind(obj), time);
}

module.exports = boundfuncTimer;
