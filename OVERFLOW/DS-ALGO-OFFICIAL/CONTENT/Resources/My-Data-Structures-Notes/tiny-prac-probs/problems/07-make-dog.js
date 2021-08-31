/***********************************************************************
Below we've declared a function named `makeDog` for you that will return an object
representing a dog.

You will be writing two new methods on the object returned by `makeDog` below. 
These two methods wil be: changeName(newName) and speak(word).
The speak function will intake a word and then return a sentence with the name
of the dog saying that word. The changeName function will intake a newName and
will set the dog object's name to be the passed in name. See below for examples:


Examples:
let dog1 = makeDog(); // returns an object 
console.log( dog1.name ); // Jet
console.log( dog1.speak( "hello" ) ); // Jet says hello
console.log(dog1.changeName("Freyja")); // Freyja
console.log(dog1.name); // Freyja
console.log(dog1.speak("hello")); // Freyja says hello

let dog2 = makeDog();
console.log(dog2.name); // Jet

***********************************************************************/

function makeDog() {
  return {
    name: "Jet",
    // here we have to use an anonymous function to ensure the context
    // is set correctly when this method is invoked
    speak: function (word) {
      return this.name + " says " + word;
    },
    changeName: function (newName) {
      this.name = newName;
      return this.name;
    },
  };
}

module.exports = makeDog;
