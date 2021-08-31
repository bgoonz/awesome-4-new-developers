# Function.prototype.bind()

> The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

The `**bind()**` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

## Syntax

let boundFunc = func.bind(thisArg\[, arg1\[, arg2\[, ...argN\]\]\])

### Parameters

`thisArg`

The value to be passed as the `this` parameter to the target function `func` when the bound function is called. The value is ignored if the bound function is constructed using the [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. When using `bind` to create a function (supplied as a callback) inside a `setTimeout`, any primitive value passed as `thisArg` is converted to object. If no arguments are provided to `bind` , or if the `thisArg`  is `null` or `undefined`, the `this` of the executing scope is treated as the `thisArg` for the new function.

`arg1, arg2, ...argN` Optional

Arguments to prepend to arguments provided to the bound function when invoking `func`.

### Return value

A copy of the given function with the specified `this` value, and initial arguments (if provided).

## Description

The `bind()` function creates a new **bound function**, which is an _exotic function object_ (a term from ECMAScript 2015) that wraps the original function object. Calling the bound function generally results in the execution of its wrapped function.

A bound function has the following internal properties:

**`[[BoundTargetFunction]]`**

The wrapped function object

`**[[BoundThis]]**`

The value that is always passed as `this` value when calling the wrapped function.

`**[[BoundArguments]]**`

A list of values whose elements are used as the first arguments to any call to the wrapped function.

`**[[Call]]**`

Executes code associated with this object. Invoked via a function call expression. The arguments to the internal method are a `this` value and a list containing the arguments passed to the function by a call expression.

When a bound function is called, it calls internal method `[[Call]]` on `[[BoundTargetFunction]]`, with following arguments `Call(boundThis, ...args)`. Where `boundThis` is `[[BoundThis]]`, `args` is `[[BoundArguments]]`, followed by the arguments passed by the function call.

A bound function may also be constructed using the [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. Doing so acts as though the target function had instead been constructed. The provided `this` value is ignored, while prepended arguments are provided to the emulated function.

## Polyfill

Because older browsers are generally also slower browsers, it is far more critical than most people recognize to create performance polyfills to make the browsing experience in outdated browsers slightly less horrible.

Thus, presented below are two options for `Function.prototype.bind()` polyfills:

1.  The first one is much smaller and more performant, but does not work when using the `new` operator.
2.  The second one is bigger and less performant, but it permits some usage of the `new` operator on bound functions.

Generally, in most code it's very rare to see `new` used on a bound function, so it is generally best to go with the first option.

    if (!Function.prototype.bind) (function(){
      var slice = Array.prototype.slice;
      Function.prototype.bind = function() {
        var thatFunc = this, thatArg = arguments[0];
        var args = slice.call(arguments, 1);
        if (typeof thatFunc !== 'function') {


          throw new TypeError('Function.prototype.bind - ' +
                 'what is trying to be bound is not callable');
        }
        return function(){
          var funcArgs = args.concat(slice.call(arguments))
          return thatFunc.apply(thatArg, funcArgs);
        };
      };
    })();

You can partially work around this by inserting the following code at the beginning of your scripts, allowing use of much of the functionality of `bind()` in implementations that do not natively support it.

    if (!Function.prototype.bind) (function(){
      var ArrayPrototypeSlice = Array.prototype.slice;
      Function.prototype.bind = function(otherThis) {
        if (typeof this !== 'function') {


          throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var baseArgs= ArrayPrototypeSlice.call(arguments, 1),
            baseArgsLength = baseArgs.length,
            fToBind = this,
            fNOP    = function() {},
            fBound  = function() {
              baseArgs.length = baseArgsLength;
              baseArgs.push.apply(baseArgs, arguments);
              return fToBind.apply(
                     fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
              );
            };

        if (this.prototype) {

          fNOP.prototype = this.prototype;
        }
        fBound.prototype = new fNOP();

        return fBound;
      };
    })();

Some of the many differences (there may well be others, as this list does not seriously attempt to be exhaustive) between this algorithm and the specified algorithm are:

- The partial implementation relies on [`Array.prototype.slice()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.prototype.concat()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Function.prototype.call()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) and [`Function.prototype.apply()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), built-in methods to have their original values.
- The partial implementation creates functions that do not have immutable "poison pill" [`caller`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) and `arguments` properties that throw a [`TypeError`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) upon get, set, or deletion. (This could be added if the implementation supports [`Object.defineProperty`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), or partially implemented \[without throw-on-delete behavior\] if the implementation supports the [`__defineGetter__`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) and [`__defineSetter__`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) extensions.)
- The partial implementation creates functions that have a `prototype` property. (Proper bound functions have none.)
- The partial implementation creates bound functions whose [`length`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) property does not agree with that mandated by ECMA-262: it creates functions with `length` of `0`. A full implementation—depending on the length of the target function and the number of pre-specified arguments—may return a non-zero length.
- The partial implementation creates bound functions whose [`name`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property is not derived from the original function name. According to ECMA-262, name of the returned bound function should be "bound " + name of target function (note the space character).

If you choose to use this partial implementation, **you must not rely on those cases where behavior deviates from ECMA-262, 5th edition!** Thankfully, these deviations from the specification rarely (if ever) come up in most coding situations. If you do not understand any of the deviations from the specification above, then it is safe in this particular case to not worry about these noncompliant deviation details.

**If it's absolutely necessary and performance is not a concern**, a far slower (but more specification-compliant solution) can be found at [https://github.com/Raynos/function-bind](https://github.com/Raynos/function-bind).

## Examples

### Creating a bound function

The simplest use of `bind()` is to make a function that, no matter how it is called, is called with a particular `this` value.

A common mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the original object as its `this` (e.g., by using the method in callback-based code).

Without special care, however, the original object is usually lost. Creating a bound function from the function, using the original object, neatly solves this problem:

    this.x = 9;
    const module = {
      x: 81,
      getX: function() { return this.x; }
    };

    module.getX();


    const retrieveX = module.getX;
    retrieveX();





    const boundGetX = retrieveX.bind(module);
    boundGetX();

### Partially applied functions

The next simplest use of `bind()` is to make a function with pre-specified initial arguments.

These arguments (if any) follow the provided `this` value and are then inserted at the start of the arguments passed to the target function, followed by whatever arguments are passed bound function at the time it is called.

    function list() {
      return Array.prototype.slice.call(arguments);
    }

    function addArguments(arg1, arg2) {
      return arg1 + arg2
    }

    const list1 = list(1, 2, 3);


    const result1 = addArguments(1, 2);



    const leadingThirtysevenList = list.bind(null, 37);


    const addThirtySeven = addArguments.bind(null, 37);

    const list2 = leadingThirtysevenList();


    const list3 = leadingThirtysevenList(1, 2, 3);


    const result2 = addThirtySeven(5);


    const result3 = addThirtySeven(5, 10);

### With `setTimeout()`

By default within [`window.setTimeout()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), the `this` keyword will be set to the [`window`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Window) (or `global`) object. When working with class methods that require `this` to refer to class instances, you may explicitly bind `this` to the callback function, in order to maintain the instance.

    function LateBloomer() {
      this.petalCount = Math.floor(Math.random() * 12) + 1;
    }


    LateBloomer.prototype.bloom = function() {
      window.setTimeout(this.declare.bind(this), 1000);
    };

    LateBloomer.prototype.declare = function() {
      console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
    };

    const flower = new LateBloomer();
    flower.bloom();

### Bound functions used as constructors

**Warning:** This section demonstrates JavaScript capabilities and documents some edge cases of the `bind()` method.

The methods shown below are not the best way to do things, and probably should not be used in any production environment.

Bound functions are automatically suitable for use with the [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new) operator to construct new instances created by the target function. When a bound function is used to construct a value, the provided `this` is ignored.

However, provided arguments are still prepended to the constructor call:

    function Point(x, y) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.toString = function() {
      return `${this.x},${this.y}`;
    };

    const p = new Point(1, 2);
    p.toString();







    const YAxisPoint = Point.bind(null, 0);


    const emptyObj = {};
    const YAxisPoint = Point.bind(emptyObj, 0);

    const axisPoint = new YAxisPoint(5);
    axisPoint.toString();

    axisPoint instanceof Point;
    axisPoint instanceof YAxisPoint;
    new YAxisPoint(17, 42) instanceof Point;

Note that you need not do anything special to create a bound function for use with [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new).

The corollary is that you need not do anything special to create a bound function to be called plainly, even if you would rather require the bound function to only be called using [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new).

    YAxisPoint(13);

    `${emptyObj.x},${emptyObj.y}`;

If you wish to support the use of a bound function only using [`new`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new), or only by calling it, the target function must enforce that restriction.

### Creating shortcuts

`bind()` is also helpful in cases where you want to create a shortcut to a function which requires a specific `this` value.

Take [`Array.prototype.slice()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), for example, which you want to use for converting an array-like object to a real array. You could create a shortcut like this:

    const slice = Array.prototype.slice;



    slice.apply(arguments);

With `bind()`, this can be simplified.

In the following piece of code, `slice()` is a bound function to the [`apply()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) function of [`Function.prototype`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype), with the `this` value set to the [`slice()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) function of `Array.prototype`. This means that additional `apply()` calls can be eliminated:

    const unboundSlice = Array.prototype.slice;
    const slice = Function.prototype.apply.bind(unboundSlice);



    slice(arguments);

## Specifications

| Specification |
| ------------- |

| [ECMAScript (ECMA-262)  
The definition of 'Function.prototype.bind' in that specification.](https://tc39.es/ecma262/#sec-function.prototype.bind) |

## Browser compatibility

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|        | Desktop               | Mobile               | Server                 |
| ------ | --------------------- | -------------------- | ---------------------- | ----------------- | ----------------------- | ----------------------- | ------------------------------ | ------------------------------ | ------------------------------ | ----------------------------- | ------------------------- | ----------------------------------------- | ----------------------- |
|        | Chrome                | Edge                 | Firefox                | Internet Explorer | Opera                   | Safari                  | Android webview                | Chrome for Android             | Firefox for Android            | Opera for Android             | Safari on iOS             | Samsung Internet                          | Node.js                 |
| ---    | ---                   | ---                  | ---                    | ---               | ---                     | ---                     | ---                            | ---                            | ---                            | ---                           | ---                       | ---                                       | ---                     |
| `bind` | Chrome Full support 7 | Edge Full support 12 | Firefox Full support 4 | IE Full support 9 | Opera Full support 11.6 | Safari Full support 5.1 | WebView Android Full support 4 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 12 | Safari iOS Full support 6 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |

#### What happens next?

Our team will review your report. Once we verify the information you have supplied we will update this browser compatability table accordingly.

#### Can I keep track of my report?

You can join the GitHub repository to see updates and commits for this table data:

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

Our goal is to provide accurate, real values for all our compatibility data tables. Notifying MDN of inaccurate data or supplying new data pushes us further towards our goal of providing 100% real values to the developer community.  
Thank you for helping.

Please select the browser or browsers which are affected.

Briefly outline the issue you are highlighting. Minimum 10 and maximum 1,000 characters.

Browser documentation and release notes are good supporting items to accompany your message. A demo hosted on services like Codepen or JSBin are perfect for providing real examples of your findings.

Connection error:Sorry, we can't seem to reach the server. We are working to fix the problem. Please try again later.

### Legend

Full support

Full support

## See also

- [`Function.prototype.apply()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [`Function.prototype.call()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Functions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions)

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
