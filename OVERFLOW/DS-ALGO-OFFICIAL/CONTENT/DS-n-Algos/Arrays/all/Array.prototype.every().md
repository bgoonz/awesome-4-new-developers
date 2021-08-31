# Array.prototype.every()

> The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

The **`every()`** method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

## Syntax

arr.every(callback(element\[, index\[, array\]\])\[, thisArg\])

### Parameters

`callback`

A function to test for each element, taking three arguments:

`element`

The current element being processed in the array.

`index` Optional

The index of the current element being processed in the array.

`array` Optional

The array `every` was called upon.

`thisArg` Optional

A value to use as `this` when executing `callback` .

### Return value

**`true`** if the `callback` function returns a [truthy](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/truthy) value for every array element. Otherwise, **`false`**.

## Description

The `every` method executes the provided `callback` function once for each element present in the array until it finds the one where `callback` returns a [falsy](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/falsy) value. If such an element is found, the `every` method immediately returns `false` . Otherwise, if `callback` returns a [truthy](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/truthy) value for all elements, `every` returns `true` .

**Caution**: Calling this method on an empty array will return `true` for any condition!

`callback` is invoked only for array indexes which have assigned values. It is not invoked for indexes which have been deleted, or which have never been assigned values.

`callback` is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `every` , it will be used as callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value. The `this` value ultimately observable by `callback` is determined according to [the usual rules for determining the `this` seen by a function](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/this).

`every` does not mutate the array on which it is called.

The range of elements processed by `every` is set before the first invocation of `callback` . Therefore, `callback` will not run on elements that are appended to the array after the call to `every` begins. If existing elements of the array are changed, their value as passed to `callback` will be the value at the time `every` visits them. Elements that are deleted are not visited.

`every` acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns `true` . (It is [vacuously true](https://en.wikipedia.org/wiki/Vacuous_truth) that all elements of the [empty set](https://en.wikipedia.org/wiki/Empty_set#Properties) satisfy any given condition.)

## Polyfill

`every` was added to the ECMA-262 standard in the 5th edition, and it may not be present in other implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `every` in implementations which do not natively support it.

This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming `Object` and `TypeError` have their original values, and that `callbackfn.call` evaluates to the original value of [ `Function.prototype.call` ](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call).

    if (!Array.prototype.every) {
      Array.prototype.every = function(callbackfn, thisArg) {
        'use strict';
        var T, k;

        if (this == null) {
          throw new TypeError('this is null or not defined');
        }



        var O = Object(this);




        var len = O.length >>> 0;


        if (typeof callbackfn !== 'function' && Object.prototype.toString.call(callbackfn) !== '[object Function]') {
          throw new TypeError();
        }


        if (arguments.length > 1) {
          T = thisArg;
        }


        k = 0;


        while (k < len) {

          var kValue;







          if (k in O) {
            var testResult;


            kValue = O[k];





            if(T) testResult = callbackfn.call(T, kValue, k, O);
            else testResult = callbackfn(kValue,k,O)


            if (!testResult) {
              return false;
            }
          }
          k++;
        }
        return true;
      };
    }

## Examples

### Testing size of all array elements

The following example tests whether all elements in the array are bigger than 10.

    function isBigEnough(element, index, array) {
      return element >= 10;
    }
    [12, 5, 8, 130, 44].every(isBigEnough);
    [12, 54, 18, 130, 44].every(isBigEnough);

### Using arrow functions

[Arrow functions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a shorter syntax for the same test.

    [12, 5, 8, 130, 44].every(x => x >= 10);
    [12, 54, 18, 130, 44].every(x => x >= 10);

### Affecting Initial Array (modifying, appending, and deleting)

The following examples tests the behaviour of the `every` method when the array is modified.

    let arr = [1, 2, 3, 4];
    arr.every( (elem, index, arr) => {
      arr[index+1] -= 1
      console.log( `[${arr}][${index}] -> ${elem}` )
      return elem < 2
    })











    arr = [1, 2, 3];
    arr.every( (elem, index, arr) => {
      arr.push('new')
      console.log( `[${arr}][${index}] -> ${elem}` )
      return elem < 4
    })










    arr = [1, 2, 3, 4];
    arr.every( (elem, index, arr) => {
      arr.pop()
      console.log( `[${arr}][${index}] -> ${elem}` )
      return elem < 4
    })

## Specifications

| Specification                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------- |
| [ECMAScript (ECMA-262)                                                                                                |
| The definition of 'Array.prototype.every' in that specification.](https://tc39.es/ecma262/#sec-array.prototype.every) |

## Browser compatibility

The compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|         | Desktop               | Mobile               | Server                   |
| ------- | --------------------- | -------------------- | ------------------------ | ----------------- | ---------------------- | --------------------- | -------------------------------- | ------------------------------ | ------------------------------ | ------------------------------- | ------------------------- | ----------------------------------------- | --------------------------- |
|         | Chrome                | Edge                 | Firefox                  | Internet Explorer | Opera                  | Safari                | Android webview                  | Chrome for Android             | Firefox for Android            | Opera for Android               | Safari on iOS             | Samsung Internet                          | Node.js                     |
| ---     | ---                   | ---                  | ---                      | ---               | ---                    | ---                   | ---                              | ---                            | ---                            | ---                             | ---                       | ---                                       | ---                         |
| `every` | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1.5 | IE Full support 9 | Opera Full support 9.5 | Safari Full support 3 | WebView Android Full support ≤37 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support 0.1.100 |

#### What happens next?

Our team will review your report. Once we verify the information you have supplied we will update this browser compatability table accordingly.

#### Can I keep track of my report?

You can join the GitHub repository to see updates and commits for this table data:

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

Our goal is to provide accurate, real values for all our compatibility data tables. Notifying MDN of inaccurate data or supplying new data pushes us further towards our goal of providing 100% real values to the developer community.  
Thank you for helping.

Please select the browser or browsers which are affected.

Briefly outline the issue you are highlighting. Minimum 10 and maximum 1, 000 characters.

Browser documentation and release notes are good supporting items to accompany your message. A demo hosted on services like Codepen or JSBin are perfect for providing real examples of your findings.

Connection error: Sorry, we can't seem to reach the server. We are working to fix the problem. Please try again later.

### Legend

Full support

Full support

## See also

- [`Array.prototype.forEach()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Array.prototype.some()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [`Array.prototype.find()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`TypedArray.prototype.every()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every)

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
