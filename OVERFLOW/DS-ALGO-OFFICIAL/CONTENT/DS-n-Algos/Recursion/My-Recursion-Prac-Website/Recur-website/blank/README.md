# Recursion Prompts

### **What is this?**

This is a repository of toy problems to be solved using recursion and JavaScript. While the concept of recursion may not be difficult to grasp, the only way to improve at thinking recursively is by practice. If you need practice, then maybe this repo is for you.

### **A few guidelines:**

- Please refrain from sharing solutions. As crazy as it sounds, giving someone the answer doesn't help them. Instead, give them a question that encourages them to think differently.

  > **Q:** Why does my function keep exceeding the call stack?

  > **A:** What's your base case?

- Don't be afraid to pseudocode your algorithm before writing actual code.

  > Pseudocode helps you focus on the algorithm instead of getting distracted by syntax.

- This repo requires each function call itself recursively and pays no attention to whether inner recursive functions are defined and called.

  > While both are valid uses of recursion, there are important lessons to learn by following the method this repo enforces. Defining inner functions and calling them recursively relies on side effects, while following the more pure approach requires an understanding of how values are passed through the call stack.

- This repo restricts expanding the number of parameters a function accepts.

  > Expanding the number of parameters is a valid approach, but has been restricted here to emphasize certain lessons while learning recursion.

- An attempt was made to order prompts by difficulty, but they don't have to be solved in any particular order.
- Feel free to make pull requests or open issues regarding bugs or suggestions.
- **`Watch`**, **`Star`**, and **`Fork`** this repo. You know you want to.

### **How to use this repo:**

1. Fork this repo and clone it to your local machine
2. Open `SpecRunner.html` in your web browser
3. Code your solutions in `recursion.js`
4. Review the tests in `spec/part1.js` and `spec/part2.js` as necessary
5. Save your work and refresh your browser to check for passing/failing tests

---

### What is recursion?

> Recursion is when a function calls itself until it doesn't. --not helpful person

Is it a true definition? Mostly. Recursion is when a function calls itself. A recursive function can call itself forever, but that's generally not preferred. It's often a good idea to include a condition in the function definition that allows it to stop calling itself. This condition is referred to as a **_base_** case. As a general rule, recursion shouldn't be utilized without an accompanying base case unless an infinite operation is desired. This leaves us with two fundamental conditions every recursive function should include:

- A **`base`** case
- A **`recursive`** case

_What does this all mean?_ Let's consider a silly example:

```javascript
function stepsToZero(n) {
  if (n === 0) {
    /* base case */
    return "Reached zero";
  } else {
    /* recursive case */
    console.log(n + " is not zero");
    return stepsToZero(n - 1);
  }
}
```

This function doesn't do anything meaningful, but hopefully it demonstrates the fundamental idea behind recursion. Simply put, recursion provides us a looping or repeating mechanism. It repeats an operation until a `base` condition is met. Let's step through an invocation of the above function to see how it evaluates.

1. Invoke `stepsToZero(n)` where `n` is the number `2`
2. Is 2 zero?
3. No, print message to console that 2 is not zero
4. Invoke `stepsToZero(n-1)` where `n-1` evaluates to `1`

   > Every recursive call adds a new invocation to the stack on top of the previous invocation

5. Is 1 zero?
6. No, print message that 1 is not zero
7. Invoke `stepsToZero(n-1)` where `n-1` evaluates to `0`
8. Is 0 zero?
9. Yes, return message that reached zero
10. The above return pops the current invocation off the stack
11. Resume the invocation from step 4 where it left off (in-between steps 6 and 7)
12. Return out of the invocation from step 4
13. Resume the initial invocation from step 1 where it left off (in-between steps 3 and 4)
14. Return out of the initial invocation

Note that the value returned from the base case (step 9) gets returned to the previous invocation (step 4) on the stack. Step 4's invocation takes that value and returns it to the invocation that preceded it (step 1). Once the initial invocation is reached, it returns the value to whatever invoked it. Through these steps, you can watch the call stack build up and once the base case is reached, the return value is passed back down as each invocation pops off the stack.

Due to the way the execution stack operates, it's as if each function invocation pauses in time when a recursive call is made. The function that pauses before a recursive call will resume once the recursive call completes. If you've seen the movie [Inception], this model may sound reminiscent to when the characters enter a person's dreams and time slowed. The difference is time doesn't actually slow with recursive invocations; rather, it's a matter of order of operations. If a new invocation enters the execution stack, that invocation must complete before the previous can continue and complete.

### Why use recursion?

Recursion can be elegant, but it can also be dangerous. In some cases, recursion feels like a more natural and readable solution; in others, it ends up being contrived. In most cases, recursion can be avoided entirely and sometimes should in order to minimize the possibility of exceeding the call stack and crashing your app. But keep in mind that code readability is important. If a recursive solution reads more naturally, then it may be the best solution for the given problem.

Recursion isn't unique to any one programming language. As a software engineer, you _will_ encounter recursion and it's important to understand what's happening and how to work with it. It's also important to understand why someone might use it. Recursion is often used when the depth of a thing is unknown or every element of a thing needs to be touched. For example, you might use recursion if you want to find all DOM elements with a specific class name. You may not know how deep the DOM goes and need to touch every element so that none are missed. The same can be said for traversing any structure where all possible paths need to be considered and investigated.

### Divide and Conquer

Recursion is often used in _divide and conquer_ algorithms where problems can be divided into similar subproblems and conquered individually. Consider traversing a tree structure. Each branch may have its own "children" branches. Every branch is essentially just another tree which means, as long as child trees are found, we can recurse on each child.

[inception]: https://en.wikipedia.org/wiki/Inception
