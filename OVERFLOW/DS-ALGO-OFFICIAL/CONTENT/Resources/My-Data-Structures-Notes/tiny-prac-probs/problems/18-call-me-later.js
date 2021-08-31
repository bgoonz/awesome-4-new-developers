/***********************************************************************
Below we have provided a function named 'callCenter(name)' that when invoked
returns an object with a name property and sayHello method.

let judy = callCenter("Judy");
judy.sayHello(); // prints "Hello this is Judy"

You will be writing a method on the object returned by callCenter that will be
named callMeLater(time). The callMeLater function will intake a time in
milliseconds and will invoke the `sayHello` method after the number of
milliseconds has passed.

This can be accomplished using the global.setTimeout function to invoke the
sayHello function in `time` amount of milliseconds. Be warned though: using the
global.setTimeout will be setting the *context* of the function it invoked as the
global object. If you  find yourself with the incorrect context when `sayHello`
is eventually invoked think about how you can ensure the context for sayHello will
always be the same.

There are no specs for this problem - run the below examples until everything 
runs correctly!

Example 1:
let judy = callCenter("Judy");
judy.sayHello(); // prints "Hello this is Judy"
judy.callMeLater(1000); // waits one second then prints "Hello this is Judy"

Example 2:
let melan = callCenter("Melan");
melan.sayHello(); // prints "Hello this is Melan"
melan.callMeLater(1000); // waits one second then prints "Hello this is Melan"


***********************************************************************/

const callCenter = (name) => {
  return {
    name: name,
    sayHello: function () {
      console.log("Hello this is " + this.name);
    },
    callMeLater: function (time) {
      return setTimeout(this.sayHello.bind(this), time);
    },
  };
};

// module.exports = boundfuncTimer;
