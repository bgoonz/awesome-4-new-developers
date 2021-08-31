What's going on with JS prototypes and with the [argument](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) objects? Especially when we have to slice it like this:

```javascript
var args = Array.prototype.slice.call(arguments);
```

## Question 1

**Why in MDN are things described as `Array.prototype.slice()` and then used as `var sliced = a.slice(1, 3);`? What's the deal with `Array.prototype`?**

The answer gets into prototypal inheritance, a JS feature. A new `Array` is an `Object`, but it doesn't actually have a `slice()` method directly on it.

```javascript
let a = new Array();       // a is [], no problem

a.hasOwnProperty('slice'); // FALSE! (why?)

a.slice;                   // is [Function: slice]--what? I thought it didn't have that property!
```

What gives? I asked if it had the property, it said no, and then I asked what the property was, and it told me it was a function. 

_"Do you, or do you not, have that property? May I remind you that you're under oath."_

The answer is that `a` doesn't have a `slice`, but `Array`'s `prototype` object _does_.

And if a property can't be found on an object (like `a`), then it looks for it in that object's prototype, which is found in its constructor's `prototype` property, namely `Array.prototype`.

When you make a new array with `new` or just in an expression like `a = [];`, it makes the new array object and sets `a` to reference it. But it doesn't attach any of the methods like `slice` to it. What it _does_ do is set `a`'s prototype to reference the object in `Array.prototype`.

Let's have a quick look to see if we can find `slice` there:

```javascript
Array.prototype.hasOwnProperty('slice');  // TRUE

Array.prototype.slice;  // it's a function: [Function: slice]
```

Bingo.

Then, the magic. If you say `a.slice`, JS first looks to see if `a` has a `slice` property. If it does, great, use it. If it doesn't, _look at a's prototype object to see if it's there_.

And remember, `a`'s prototype object is pointed to by `Array.prototype`.

So JS looks there, and that's where it finds `slice`.

And that's why `a.slice` is valid even though `a` doesn't have its own `slice` property.

If that's still a bit mysterious, [check out my blog on prototypal inheritance](http://beej.us/blog/data/javascript-prototypes-inheritance/) in JavaScript.


## Question 2

**I get that `Array.prototype.slice.call(obj);` is used to convert an array-like object into an array, but I'm not getting the function of `Array`, `prototype`, `call`. I know that `call` changes what `this` refers to, but...**

Be sure you understand the answer to Question 1 before tackling this one.

Let's first take a look at how `call()` works. Every function has a `call()` function built in.

> Technically, the `call()` function is `Function.prototype.call`! That's how every function "has" it automatically, because it's in the function's constructor's `prototype`.

You can take any function and call it with the `call()` method.

```javascript
myFunction();

// equivalent to:

myFunction.call();
```

Why would you do that? _Because `call()` allows you to specify what `this` will be inside the function_. If you don't pass anything as the first argument to `call()`, `this` will be `undefined` inside the function. If you pass an object, `this` will refer to that object.

```javascript
let myObj = {"name": "myobject"};

myFunction.call(myObj); // Inside myFunction, this == myObj
```

Let's have an example with an actual class:

```javascript
class Foo {
  printThis() {
    console.log(this);
  }
}

let f = new Foo();

f.printThis();  // Prints "Foo {}" since f is a Foo object

f.hasOwnProperty('printThis'); // FALSE--it's on Foo.prototype

Foo.hasOwnProperty('printThis'); // FALSE--it's on Foo.prototype

Foo.prototype.hasOwnProperty('printThis'); // TRUE, there it is

Foo.prototype.printThis.call();  // Prints "undefined"

Foo.prototype.printThis.call(f); // Prints "Foo {}" since f is a Foo object

// that last line is equivalent to:

f.printThis();  // Prints "Foo {}" since f is a Foo object
```

See how `printThis` is on `Foo`'s `prototype`? We can call it from there with `call()`... but if we don't specify a parameter `this` is undefined in the function.

So why can't we just `arguments.slice()`? Why do we have to `Array.prototype.slice.call(arguments)`?

The answer is that `arguments` is just an array-like, it's not an `Array`. So its prototype is not `Array.prototype` (which is where `slice` lives). Its prototype is something else, and it has no `slice` anywhere.

```javascript
function Bar() {
  console.log(arguments.hasOwnProperty('slice'));
  console.log(arguments.slice);
}

Bar();  // Prints "false", "undefined". There is no slice.
```
When you call `Array.prototype.slice(arguments)`, then `arguments` becomes `this` inside the `slice()` function. It's just like if you'd called `arguments.slice()` (but we can't do that because arguments isn't an `Array`).

And `arguments` despite not being a real `Array` still has enough Array-like functionality to be treated like one in general and also by the `slice()` function.

Hope that helps!
