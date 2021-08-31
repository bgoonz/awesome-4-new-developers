Have you ever written a function that used a list for a default argument value, only to have weird things happen?

```python
def foo(a=[]):
    # ... do something with `a` here ...
    return a
```

And it's not just with lists--the problem manifests with any _mutable_ data type when it is used as a default argument value.

Here's what happening, and here's how to fix it.

Check out these two pieces of identical code, one in Python and one in JS.

The code is supposed to append `1` to whatever array you pass in. And return it. And if you don't pass an array, it sets the array to empty by default:

```python
def foo(a=[]):   # BAD
    a.append(1)
    return a

x = foo()
print(x)

y = foo()
print(y)

z = foo()
print(z)
```

and JS:

```javascript
function foo(a=[]) {
    a.push(1);
    return a;
}

let x = foo();
console.log(x);

let y = foo();
console.log(y);

let z = foo();
console.log(z);
```

If I run them, look at the output of the JS, which is as-expected:

```
$ node default.js
[ 1 ]
[ 1 ]
[ 1 ]
```

and look at the output of Python, which is not expected!

```
$ python default.py
[1]
[1, 1]
[1, 1, 1]
```

What's going on?

This all has to do with _when_ the default value is created.

Javascript creates the default empty `[]` _when the function is called_. So each time you call it, it makes a new empty array. Every call returns a different array.

Python creates the default empty `[]` _when the function is *loaded*_. So it gets created once only when the program is first read into memory, and that's it. There's only one default list no matter how many times you call the function. And so `foo()` is returning _the same list_ every time you call it with no arguments. This is why another `1` gets added on each call--`.append(1)` is happening to the same list every time.

Indeed, if you run this in Python:

```
foo() is foo()
```

You'll get `True`, since the same list is being returned.

The fix is to use `None` as a substitute, and then take special action to create a new list on the spot.

```def foo(a=None):  # GOOD
    if a is None:
        a = []   # Make a new list right now, every time the function is called with no args
    a.append(1)
    return a


x = foo()
print(x)

y = foo()
print(y)

z = foo()
print(z)

x is y  # False, they're different lists, like we wanted
y is z  # False, they're different lists, like we wanted
```

And then we get good output:

```
$ python3 default_good.py
[1]
[1]
[1]
```

Now, if we had a function that used an _immutable_ value as a default argument, we have no problem even though the same process is happening.

```python
def foo(a="hello!"):
    return a
```

In that code, there's only one `"hello!"`. It gets created when the program is first loaded, and never again. All calls to the function return the same `"hello!"`.

So how is that OK, but it's not OK with a list?

It's because we only ever notice there's a problem when we modify the data. And since we can't modify `"hello!"`, there won't be a problem.

Put another way, we simply don't care if variables are pointing to the same `"hello!"` or to different `"hello!"`s. We cannot tell the difference.

But with something mutable like a list, we certainly can tell, but only after we mutate it and see if it only affects one variable, or if it affects them all.
