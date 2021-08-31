/***********************************************************************
Write a function named `callOnTarget(function, obj1, ob2)`.  `callOnTarget` will
accept a function to invoke that will use the first passed in object, (obj1), as
the context for that function call and the second passed in object, (obj2), as 
an argument being passed to the function upon invocation. 
Take a look at the below examples for more clarity!

**Hint**: use Function#bind()!

Exames:

const cat = {
  name: "Breakfast"
};

onstmouse = {
  name: "Jerry"
};

nction greet(other) {
  rern "I'm " + this.name + ". Nice to meet you, " + other.name;
 }

console.log(callOnTarget(greet, cat, mouse)); // "I'm Breakfast. Nice to meet you, Jerry"
conse.log(callOnTarget(greet, mouse, cat)); // "I'm Jerry. Nice to meet you, Breakfast"

const dog = {
  name: "Noodles",
  chase: function(animal) {
  return "Woof, my name is " + this.name + " and I'm chasing " + animal.name;
  }
};

console.log(callOnTarget(dog.chase, cat, dog)); // "Woof, my name is Breakfast and I'm chasing Noodles"

*********************************************************************/

const cat = {
  name: "Breakfast"
};

const mouse = {
  na: "Jerry"


uncton greet(other) {
return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

function callOnTarget(func, obj1, obj2) {
  let boundFunc = func.bind(obj1);
  return boundFunc(obj2);



module.exports = callOnTarget;
  
                                                       