/* Stack!!
 * A stack is exactly what it sounds like. An element gets added to the top of
 * the stack and only the element on the top may be removed. This is an example
 * of an array implementation of a Stack. So an element can only be added/removed
 * from the end of the array.
 */

// Functions: push, pop, peek, view, length

// Creates a stack constructor
const Stack = (() => {
  class Stack {
    constructor() {
      // The top of the Stack
      this.top = 0;
      // The array representation of the stack
      this.stack = [];
    }

    // Adds a value onto the end of the stack
    push(value) {
      this.stack[this.top] = value;
      this.top++;
    }

    // Removes and returns the value at the end of the stack
    pop() {
      if (this.top === 0) {
        return "Stack is Empty";
      }

      this.top--;
      const result = this.stack[this.top];
      this.stack = this.stack.splice(0, this.top);
      return result;
    }

    // Returns the size of the stack
    size() {
      return this.top;
    }

    // Returns the value at the end of the stack
    peek() {
      return this.stack[this.top - 1];
    }

    // To see all the elements in the stack
    view() {
      for (let i = 0; i < this.top; i++) {
        console.log(this.stack[i]);
      }
    }
  }

  return Stack;
})();

// Implementation
const myStack = new Stack();

myStack.push(1);
myStack.push(5);
myStack.push(76);
myStack.push(69);
myStack.push(32);
myStack.push(54);
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push(55);
console.log(myStack.peek());
myStack.view();
