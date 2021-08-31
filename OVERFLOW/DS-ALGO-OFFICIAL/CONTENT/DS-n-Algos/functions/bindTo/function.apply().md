# Function.prototype.apply()

> The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

The `**apply()**` method calls a function with a given `this` value, and `arguments` provided as an array (or an [array-like object](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)).

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

## Syntax

    func

### Parameters

`thisArg`

The value of `this` provided for the call to `func`.

Note that `this` may not be the actual value seen by the method: if the method is a function in [non-strict mode](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Strict_mode) code, [`null`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) and [`undefined`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) will be replaced with the global object, and primitive values will be boxed. This argument is required.

`argsArray` Optional

An array-like object, specifying the arguments with which `func` should be called, or [`null`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) or [`undefined`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) if no arguments should be provided to the function.

Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for [browser compatibility](#Browser_compatibility) information.

### Return value

The result of calling the function with the specified `**this**` value and arguments.

## Description

**Note:** While the syntax of this function is almost identical to that of [`call()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), the fundamental difference is that `call()` accepts an **argument list**, while `apply()` accepts a **single array of arguments**.

**Note:** When the first argument is undefined or null a similar outcome can be achieved using the array [spread syntax](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

You can assign a different `this` object when calling an existing function. `this` refers to the current object (the calling object). With `apply`, you can write a method once, and then inherit it in another object, without having to rewrite the method for the new object.

`apply` is very similar to [`call()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), except for the type of arguments it supports. You use an arguments array instead of a list of arguments (parameters). With `apply`, you can also use an array literal, for example, `func.apply(this, ['eat', 'bananas'])`, or an [`Array`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) object, for example, `func.apply(this, new Array('eat', 'bananas'))`.

You can also use [`arguments`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions/arguments) for the `argsArray` parameter. [`arguments`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is a local variable of a function. It can be used for all unspecified arguments of the called object. Thus, you do not have to know the arguments of the called object when you use the `apply` method. You can use `arguments` to pass all the arguments to the called object. The called object is then responsible for handling the arguments.

Since ECMAScript 5th Edition, you can also use any kind of object which is array-like. In practice, this means it's going to have a `length` property, and integer ("index") properties in the range `(0..length - 1)`. For example, you could use a [`NodeList`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/NodeList), or a custom object like `{ 'length': 2, '0': 'eat', '1': 'bananas' }`.

**Note:** Many older browsers—including Chrome <17 and Internet Explorer <9—don't accept array-like objects, and will throw an exception.

## Examples

### Using apply to append an array to another

You can use `push` to append an element to an array. And, because `push` accepts a variable number of arguments, you can also push multiple elements at once.

But, if you pass an array to `push`, it will actually add that array as a single element, instead of adding the elements individually. So you end up with an array inside an array.

What if that is not what you want? `concat` does have the desired behaviour in this case, but it does not append to the _existing_ array—it instead creates and returns a new array.

But you wanted to append to the existing array... So what now? Write a loop? Surely not?

`apply` to the rescue!

    const array = ['a', 'b'];
    const elements = [0, 1, 2];
    array.push.apply(array, elements);
    console.info(array);

### Using apply and built-in functions

Clever usage of `apply` allows you to use built-in functions for some tasks that would probably have otherwise been written by looping over the array values.

As an example, here are `Math.max`/`Math.min`, used to find out the maximum/minimum value in an array.

    const numbers = [5, 6, 2, 3, 7];


    let max = Math.max.apply(null, numbers);



    let min = Math.min.apply(null, numbers);


    max = -Infinity, min = +Infinity;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }

But beware: by using `apply` this way, you run the risk of exceeding the JavaScript engine's argument length limit. The consequences of applying a function with too many arguments (that is, more than tens of thousands of arguments) varies across engines. (The JavaScriptCore engine has hard-coded [argument limit of 65536](https://bugs.webkit.org/show_bug.cgi?id=80797).

This is because the limit (and indeed, even the nature of any excessively-large-stack behavior) is unspecified. Some engines will throw an exception. More perniciously, others will arbitrarily limit the number of arguments actually passed to the applied function. To illustrate this latter case: if such an engine had a limit of four arguments (actual limits are of course significantly higher), it would be as if the arguments `5, 6, 2, 3` had been passed to `apply` in the examples above, rather than the full array.

If your value array might grow into the tens of thousands, use a hybrid strategy: apply your function to chunks of the array at a time:

    function minOfArray(arr) {
      let min = Infinity;
      let QUANTUM = 32768;

      for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
        var submin = Math.min.apply(null,
                                    arr.slice(i, Math.min(i+QUANTUM, len)));
        min = Math.min(submin, min);
      }

      return min;
    }

    let min = minOfArray([5, 6, 2, 3, 7]);

### Using apply to chain constructors

You can use `apply` to chain [constructors](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/new) for an object (similar to Java).

In the following example we will create a global [`Function`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) method called `construct`, which will enable you to use an array-like object with a constructor instead of an arguments list.

    Function.prototype.construct = function(aArgs) {
      let oNew = Object.create(this.prototype);
      this.apply(oNew, aArgs);
      return oNew;
    };

**Note:** The `Object.create()` method used above is relatively new. For alternative methods, please consider one of the following approaches:

Using [`Object.__proto__`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__):

    Function.prototype.construct = function (aArgs) {
      let oNew = {};
      oNew.__proto__ = this.prototype;
      this.apply(oNew, aArgs);
      return oNew;
    };

Using [closures](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Closures):

    Function.prototype.construct = function(aArgs) {
      let fConstructor = this, fNewConstr = function() {
        fConstructor.apply(this, aArgs);
      };
      fNewConstr.prototype = fConstructor.prototype;
      return new fNewConstr();
    };

Using the [`Function`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) constructor:

    Function.prototype.construct = function (aArgs) {
      let fNewConstr = new Function("");
      fNewConstr.prototype = this.prototype;
      let oNew = new fNewConstr();
      this.apply(oNew, aArgs);
      return oNew;
    };

Example usage:

    function MyConstructor() {
      for (let nProp = 0; nProp < arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp];
      }
    }

    let myArray = [4, 'Hello world!', false];
    let myInstance = MyConstructor.construct(myArray);

    console.log(myInstance.property1);
    console.log(myInstance instanceof MyConstructor);
    console.log(myInstance.constructor);

**Note:** This non-native `Function.construct` method will not work with some native constructors; like [`Date`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), for example. In these cases you have to use the [`Function.prototype.bind`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method.

For example, imagine having an array like the following, to be used with [`Date`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) constructor: `[2012, 11, 4]`; in this case you have to write something like: `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()`.

This is not the best way to do things, and probably not to be used in any production environment.

## Specifications

| Specification |
| ------------- |

| [ECMAScript (ECMA-262)  
The definition of 'Function.prototype.apply' in that specification.](https://tc39.es/ecma262/#sec-function.prototype.apply) |

## Browser compatibility

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|                                                  | Desktop                | Mobile               | Server                 |
| ------------------------------------------------ | ---------------------- | -------------------- | ---------------------- | ------------------- | -------------------- | --------------------- | -------------------------------- | ------------------------------ | ------------------------------ | ------------------------------- | ------------------------- | ----------------------------------------- | ----------------------- |
|                                                  | Chrome                 | Edge                 | Firefox                | Internet Explorer   | Opera                | Safari                | Android webview                  | Chrome for Android             | Firefox for Android            | Opera for Android               | Safari on iOS             | Samsung Internet                          | Node.js                 |
| ---                                              | ---                    | ---                  | ---                    | ---                 | ---                  | ---                   | ---                              | ---                            | ---                            | ---                             | ---                       | ---                                       | ---                     |
| `apply`                                          | Chrome Full support 1  | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 4 | Safari Full support 1 | WebView Android Full support 1   | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| ES 5.1: generic array-like object as `arguments` | Chrome Full support 17 | Edge Full support 12 | Firefox Full support 4 | IE Full support 9   | Opera Full support 5 | Safari Full support 6 | WebView Android Full support ≤37 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 6 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |

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

- [`arguments`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object
- [`Function.prototype.bind()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [`Function.prototype.call()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Functions and function scope](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions)
- [`Reflect.apply()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply)
- [Spread syntax](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
