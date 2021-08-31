/***********************************************************************
Below we've declared a new object for a car that has a property representing speed.
Write a method within this object named `drive(newSpeed)`. This method should
set the speed to the passed in argument, and then return the present speed.

**Hint**: Use the keyword *this*!

Examples:

car.drive(10); // => returns 10
console.log(car) // => {speed: 10, drive: ƒ}

car.drive(50); // => returns 50
console.log(car) // -> {speed: 50, drive: ƒ}
car.drive( 100 ); // => returns 100
console.log(car) // -> {speed: 100, drive: ƒ}

***********************************************************************/

const car = {
  speed: 0,
  // here we have to use an anonymous function to ensure the context
  // is set correctly when this method is invoked
  drive: function (newSpeed) {
    this.speed = newSpeed;
    return this.speed;
  },
};

module.exports = car;
