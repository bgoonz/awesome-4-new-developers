/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
returns an object with an ingredients property and a function named `addIngredients`.

The ingredients property will be set to an array containing all of the parameters
initially passed in to the `smoothieMachine` function when it was invoked. 
The `addIngredients` method on the object returned by the `smoothieMachine` function 
will accept any number of passed in parameters and will return a string listing
all the smoothie ingredients.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1.addIngredients("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1.addIngredients("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1.addIngredients("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2.addIngredients("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

const smoothieMachine = (...ingredients) => {
  return {
    ingredients: [...ingredients],
    addIngredients: function (...moreIngredients) {
      this.ingredients.push(...moreIngredients);

      return "I'm having a smoothie with " + this.ingredients.join(" and ");
    },
  };
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = smoothieMachine;
