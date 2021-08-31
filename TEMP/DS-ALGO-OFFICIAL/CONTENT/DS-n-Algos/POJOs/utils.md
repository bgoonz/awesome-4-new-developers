## Clone an object

      clone(x)

Can clone any primitive type, array, and object.
If x has a function clone, this function will be invoked to clone the object.

> param {} x
> return {} clone

```js
export function clone(x) {
  const type = typeof x;
  // immutable primitive types
  if (
    type === "number" ||
    type === "string" ||
    type === "boolean" ||
    x === null ||
    x === undefined
  ) {
    return x;
  }
  // use clone function of the object when available
  if (typeof x.clone === "function") {
    return x.clone();
  }
  // array
  if (Array.isArray(x)) {
    return x.map(function (value) {
      return clone(value);
    });
  }
  if (x instanceof Date) return new Date(x.valueOf());

  // object
  return mapObject(x, clone);
}
```

## Apply map to all properties of an object

> param {Object} object
> param {function} callback
> return {Object} Returns a copy of the object with mapped properties

```js
export function mapObject(object, callback) {
  const clone = {};
  for (const key in object) {
    if (hasOwnProperty(object, key)) {
      clone[key] = callback(object[key]);
    }
  }
  return clone;
}
```

## Extend object a with the properties of object b

> param {Object} a
> param {Object} b
> return {Object} a

```js
export function extend(a, b) {
  for (const prop in b) {
    if (hasOwnProperty(b, prop)) {
      a[prop] = b[prop];
    }
  }
  return a;
}
```

## Deep test equality of all fields in two pairs of arrays or objects.

Compares values and functions strictly (ie. 2 is not the same as '2').

> param {Array | Object} a
> param {Array | Object} b
> returns {boolean}

```js
export function deepStrictEqual(a, b) {
  let prop, i, len;
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (i = 0, len = a.length; i < len; i++) {
      if (!deepStrictEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  } else if (typeof a === "function") {
    return a === b;
  } else if (a instanceof Object) {
    if (Array.isArray(b) || !(b instanceof Object)) {
      return false;
    }
    for (prop in a) {
      // noinspection JSUnfilteredForInLoop
      if (!(prop in b) || !deepStrictEqual(a[prop], b[prop])) {
        return false;
      }
    }
    for (prop in b) {
      // noinspection JSUnfilteredForInLoop
      if (!(prop in a) || !deepStrictEqual(a[prop], b[prop])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
}
```

## Recursively flatten a nested object.

> param {Object} nestedObject
> return {Object} Returns the flattened object

```js
export function deepFlatten(nestedObject) {
  const flattenedObject = {};
  _deepFlatten(nestedObject, flattenedObject);
  return flattenedObject;
}
// helper function used by deepFlatten
function _deepFlatten(nestedObject, flattenedObject) {
  for (const prop in nestedObject) {
    if (hasOwnProperty(nestedObject, prop)) {
      const value = nestedObject[prop];
      if (typeof value === "object" && value !== null) {
        _deepFlatten(value, flattenedObject);
      } else {
        flattenedObject[prop] = value;
      }
    }
  }
}
```

## Test whether the current JavaScript engine supports Object.defineProperty

> returns {boolean} returns true if supported

```js
export function canDefineProperty() {
  // test needed for broken IE8 implementation
  try {
    if (Object.defineProperty) {
      Object.defineProperty({}, "x", { get: function () {} });
      return true;
    }
  } catch (e) {}
  return false;
}
```

## Attach a lazy loading property to a constant.

The given function `fn` is called once when the property is first requested.

> param {Object} object Object where to add the property
> param {string} prop Property name
> param {Function} valueResolver Function returning the property value. Called

                                 without arguments.

```js
export function lazy(object, prop, valueResolver) {
  let _uninitialized = true;
  let _value;
  Object.defineProperty(object, prop, {
    get: function () {
      if (_uninitialized) {
        _value = valueResolver();
        _uninitialized = false;
      }
      return _value;
    },
    set: function (value) {
      _value = value;
      _uninitialized = false;
    },
    configurable: true,
    enumerable: true,
  });
}
```

## Get a nested property from an object

> param {Object} object
> param {string | string[]} path
> returns {Object}

```js
export function get(object, path) {
  if (typeof path === "string") {
    if (isPath(path)) {
      return get(object, path.split("."));
    } else {
      return object[path];
    }
  }
  let child = object;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    child = child ? child[key] : undefined;
  }
  return child;
}
```

## Set a nested property in an object

Mutates the object itself
If the path doesn't exist, it will be created

> param {Object} object
> param {string | string[]} path
> param {} value
> returns {Object}

```js
export function set(object, path, value) {
  if (typeof path === "string") {
    if (isPath(path)) {
      return set(object, path.split("."), value);
    } else {
      object[path] = value;
      return object;
    }
  }
  let child = object;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (child[key] === undefined) {
      child[key] = {};
    }
    child = child[key];
  }
  if (path.length > 0) {
    const lastKey = path[path.length - 1];
    child[lastKey] = value;
  }
  return object;
}
```
