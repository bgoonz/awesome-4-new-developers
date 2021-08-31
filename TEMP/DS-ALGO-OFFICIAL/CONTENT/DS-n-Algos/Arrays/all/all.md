> The Boolean() constructor is used to create Boolean objects.

## Syntax

new Boolean(\[value\])

### Parameters

`value` Optional

The initial value of the `Boolean` object.

### Creating `Boolean` objects with an initial value of `false`

    let bNoParam = new Boolean();
    let bZero = new Boolean(0);
    let bNull = new Boolean(null);
    let bEmptyString = new Boolean('');
    let bfalse = new Boolean(false);

### Creating `Boolean` objects with an initial value of `true`

    let btrue = new Boolean(true);
    let btrueString = new Boolean('true');
    let bfalseString = new Boolean('false');
    let bSuLin = new Boolean('Su Lin');
    let bArrayProto = new Boolean([]);
    let bObjProto = new Boolean({});

# Array.prototype.every()

> The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

The **`every()`** method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

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

A value to use as `this` when executing `callback`.

### Return value

**`true`** if the `callback` function returns a [truthy]

value for all elements, `every` returns `true`.

**Caution**: Calling this method on an empty array will return `true` for any condition!

`callback` is invoked only for array indexes which have assigned values. It is not invoked for indexes which have been deleted, or which have never been assigned values.

`callback` is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `every`, it will be used as callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value. The `this` value ultimately observable by `callback` is determined according to [the usual rules for determining the `this` seen by a function](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/this).

`every` acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns `true`.
