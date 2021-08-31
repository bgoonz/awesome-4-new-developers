## Contents
* [Versions](#versions)
* [Development Environments](#development-environments)
* [Running Programs](#running-programs)
* [Comments](#comments)
* [Semicolons](#semicolons)
* [Whitespace, Blocks](#whitespace-blocks)
* [Functions](#functions)
* [Arithmetic Operators](#arithmetic-operators)
* [Variables](#variables)
* [Data Types](#data-types)
* [Arrays/Lists](#arrayslists)
* [Slices](#slices)
* [Objects/Dicts](#objectsdicts)
* [String Formatting](#string-formatting)
* [Booleans and Conditionals](#booleans-and-conditionals)
* [`for` Loops](#for-loops)
* [`while` Loops](#while-loops)
* [`switch` Statement](#switch-statement)
* [`if` Conditionals](#if-conditionals)
* [Classes](#classes)

## Versions

### JavaScript

The standard defining JavaScript (JS) is _ECMAScript_ (ES). Modern browsers and NodeJS support ES6, which has a rich feature set. Older browsers might not support all ES6 features.

The website [caniuse.com](https://caniuse.com/) will show which browsers support specific JS features.

### Python

Python 3.x is the current version, but there are a number of packages and sites running legacy Python 2.

On some systems, you might have to be explicit when you invoke Python about which version you want by running `python2` or `python3`. The `--version` command line switch will tell you which version is running. Example:

```
$ python --version
Python 2.7.10
$ python2 --version
-bash: python2: command not found
$ python3 --version
Python 3.6.5
```

Using `virtualenv` or `pipenv` can really ease development painpoints surrounding the version. See [Development Environments](#development-environments), below.

## Development Environments

### JavaScript

For managing project packages, the classic tool is `npm`. This is slowly being superseded by the newer `yarn` tool. Choose one for a project, and don't mix and match.

### Python

For managing project packages and Python versions, the classic tool is `virtualenv`. This is slowly being superseded by the newer `pipenv` tool.

## Running Programs

### JavaScript

Running from the command line with NodeJS:
```
node program.js arg1 arg2 etc
```

In a web page, a script is referenced with a `<script>` HTML tag:

```html
<script src="program.js"></script>
```

### Python

Running from the command line:

```
python program.py arg1 arg2 etc
```

## Comments

### JavaScript

Single line:

```javascript
// Anything after two forward slashes is a comment
print(2);  // prints 2
```

Multi-line comments:
```javascript
/* Anything between slash-star and
star-slash is a comment */
```

You may not nest multi-line comments.

### Python

Single line:
```python
# Anything after a # is a comment
print(2)  # prints 2
```

Python doesn't directly support multi-line comments, but you can effectively do them by using multi-line strings `"""`:

```python
"""
At this point we wish
to print out some numbers
and see where that gets us
"""
print(1)
print(2)
```

## Semicolons

### JavaScript

Javascript ends statements with semicolons, usually at the end of the line. I can also be effectively used to put multiple statements on the same line, but this is rare.

```javascript
console.log("Hello, world!");

let x = 10; console.log(x);
```

Javascript interpreters will let you get away without using semicolons at ends of lines, but you should use them.

### Python

Python can separate statements by semicolons, though this is rare in practice.

```python
print(1); print(2)   # prints 1, then 2
```

## Whitespace, blocks

### JavaScript

Whitespace has no special meaning. Blocks are declared with squirrely braces `{` and `}`.

```javascript
if (x == 2) {
  console.log("x must be 2")
} else {
  if (x == 3) {
    console.log("x must be 3")
  } else {
    console.log("x must be something else")
  }
}
```

### Python
Indentation level is how blocks are declared. The preferred method is to use spaces, but tabs can also be used.

```python
if x == 2:
  print("x must be 2")
else:
  if x == 3:
    print("x must be 3")
  else:
    print("x must be something else")
```

## Functions

### JavaScript

Define functions as follows:

```javascript
function foobar(x, y, z) {
  console.log(x, y, z);
  return 12;
}
```

An alternate syntax for functions is growing increasingly common, called _arrow functions_:

```javascript
let hello = () => {
  console.log("hello");
  console.log("world");
}

hello(); // prints hello, then world

// Arrow functions with single parameters don't
// need parens around the parameter:
let printNum = x => {
  console.log(x);
}

// If you don't explicitly return a value, the value
// of the last expression in the function is used.
// Also, single-expression functions don't need
// braces around them.
let add = (x, y) => x + y;

console.log(add(4, 5)); // prints 9
```

### Python

Define functions as follows:

```python
def foobar(x, y, z):
  print(x, y, z)
  return 12
```

Python also supports the concept of _lambda functions_, which are simple functions that can do basic operations.

```python
add = lambda x, y: x + y

print(add(4, 5)) # prints 9
```

## Arithmetic Operators

### JavaScript

|Operator|Description
|--|--|
|`+`|Addition|
|`-`|Subtraction|
|`*`|Multiplication|
|`/`|Division|
|`%`|Modulo (remainder)|
|`--`|Pre-decrement, post-decrement|
|`++`|Pre-increment, post-increment|
|`**`|Exponentiation (power)|
|`=`|Assignment|
|`+=`|Addition assignment|
|`-=`|Subtraction assignment|
|`*=`|Multiplication assignment|
|`/=`|Division assignment|
|`%=`|Modulo assignment|

### Python

The pre- and post-increment and decrement are notably absent.

|Operator|Description
|--|--|
|`+`|Addition|
|`-`|Subtraction|
|`*`|Multiplication|
|`/`|Division|
|`%`|Modulo (remainder)|
|`**`|Exponentiation (power)|
|`=`|Assignment|
|`+=`|Addition assignment|
|`-=`|Subtraction assignment|
|`*=`|Multiplication assignment|
|`/=`|Division assignment|
|`%=`|Modulo assignment|


## Variables

### Javascript
Variables are created upon use, but should be created with the `let` or `const` keywords.

```javascript
let x = 10;
const y = 30;
```

`var` is an outdated way of declaring variables in Javascript.

### Python
Variables are created upon use.
```python
x = 10
```

## Data Types

### JavaScript

```javascript
let a = 12;        // number
let b = 1.2;       // number
let c = 'hello';   // string
let d = "world";   // string 
let e = true;      // boolean
let f = null;      // null value
let g = undefined; // undefined value
```

Multi-line strings:

```javascript
let s = `this is a
multi-line string`;
```

Parameterized strings:

```javascript
let x = 12;
console.log(`x is ${x}`); // prints "x is 12"
```

JS is _weakly typed_ so it supports operations on multiple types of data at once.

```javascript
"2" + 4;           // string "24"
parseInt("2") + 4; // number 6
Number("2") + 4;   // number 6
```

### Python

```python
a = 12       # int (integer)
b = 1.2      # float (floating point)
c = 'hello'  # str (string)
d = "world"  # str
e = False    # bool (boolean)
f = None     # null value
```

Multi-line strings:

```python
s = """this is a
multi-line string"""
```

Parameterized strings:

```python
x = 12
print(f'x is {x}')   # prints "x is 12"
```

Python is generally _strongly typed_ so it it will often complain if you try to mix and match types. You can coerce a type with the `int()`, `float()`, `str()`, and `bool()` functions.

```python
"2" + 4        # ERROR: can't mix types
int("2") + 4   # integer 6
"2" + str(4)   # string 24
```


## Arrays/Lists

### JavaScript

In JS, lists are called _arrays_.

Arrays are zero-based.

Creating lists:
```javascript
let a1 = new Array();   // Empty array
let a2 = new Array(10); // Array of 10 elements
let a3 = [];            // Empty array
let a4 = [10, 20, 30];  // Array of 3 elements
let a5 = [1, 2, "b"];   // No problem
```
Accessing:

```javascript
console.log(a4[1]);  // prints 20

a4[0] = 5;   // change from 10 to 5
a4[20] = 99; // OK, makes a new element at index 20
```

Length/number of elements:

```javascript
a4.length; // 3
```

### Python

In Python, arrays are called _lists_.

Lists are zero-based.

Creating lists:
```python
a1 = list()          # Empty list
a2 = list((88, 99))  # List of two elements
a3 = []              # Empty list
a4 = [10, 20, 30]    # List of 3 elements
a5 = [1, 2, "b"]     # No problem
```
Accessing:

```python
print(a4[1])  # prints 20

a4[0] = 5;    # change from 10 to 5
a4[20] = 99;  # ERROR: assignment out of range
```

Length/Number of elements:

```python
len(a4)   # 3
```

#### Slices

In Python, we can access parts of lists or strings using slices.

Creating slices:
```python
a[start:end] # items start through end-1
a[start:]    # items start through the rest of the array
a[:end]      # items from the beginning through end-1
a[:]         # a copy of the whole array
```
Starting from the end:
We can also use negative numbers when creating slices, which just means we start with the index at the end of the array, rather than the index at the beginning of the array.
```python
a[-1]    # last item in the array
a[-2:]   # last two items in the array
a[:-2]   # everything except the last two items
```

#### Tuples

Python supports a read-only type of list called a _tuple_.

```python
x = (1, 2, 3)
print(x[1])  # prints 2

y = (10,)    # A tuple of one element, comma required
```

#### List Comprehensions

Python supports building lists with _list comprehensions_. This is often useful for filtering lists.

```python
a = [1, 2, 3, 4, 5]

# Make a list b that is the same as list a:
b = [i for i in a]  # Pretty boring

# Make a list c that contains only the
# even elements of a:
c = [i for i in a if i % 2 == 0]
```

## Objects/Dicts

### JavaScript

_Objects_ hold data which can be found by a specific key called a _property_.

Creation:
```javascript
let o1 = {};           // empty object
let o2 = {"x": 12};    // one property
let o3 = {y: "hello"}; // property quotes optional

let o4 = {  // common multiline format
  "a": 20,
  "b": 1.2,
  "foo": "hello"
};
```

Access:

```javascript
console.log(o2.x);      // prints 12
console.log(o4["foo"]); // prints hello
```

### Python

_Dicts_ hold information that can be accessed by a _key_.

Unlike objects in JS, a `dict` is its own beast, and is not the same as an object obtained by instantiating a Python class.

Creation:

```python
o1 = {}           # empty dict
o2 = {"x": 12}    # one key
o3 = {y: "hello"} # ERROR: key quotes required,
                  # unless y is a variable
                  # that holds a value you wish
                  # to use as a key

o4 = {  # multiline format
  "a": 20,
  "b": 1.2,
  "foo": "hello"
}
```

Access:

```python
print(o4["a"])  # Prints 20
```

Dot notation does not work with Python dicts.

## String Formatting

### JavaScript

Converting to different number bases:

```javascript
let x = 237;
let x_binary = x.toString(2); // string '11101101'
let x_hex = x.toString(16);   // string 'ed'
```

Controlling floating point precision:
```javascript
let x = 3.1415926535;
let y = x.toFixed(2);  // string '3.14'
```

Padding and justification:
```javascript
let s = "Hello!";
let t = s.padStart(10, ' '); // string '    Hello!' 
let u = s.padEnd(10, ' ');   // string 'Hello!    '

let v = s.padStart(10, '*'); // string '****Hello!' 

// Pad with leading zeroes
(12).toString(2).padStart(8, '0'); // string '00001100'
```

Parameterized strings:
```javascript
let x = 3.1415926;
let y = "Hello";
let z = 67;

// 'x is 3.14, y is "Hello", z is 01000011'
let s = `x is ${x.toFixed(2)}, y is "${y}", z is ${z.toString(2).padStart(8, '0')}`
```

### Python

Python has the printf operator `%` which is tremendously powerful. (If the operands to `%` are numbers, modulo is performed. If the left operand is a string, printf is performed.)

But even `%` is being superseded by the `format` function.

[Tons of details at pyformat.info](https://pyformat.info/).

Also see [printf-style String Formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting) for a reference.

## Booleans and Conditionals

### JavaScript

Literal boolean values:

```javascript
x = true;
y = false;
```

Boolean operators:

|Operator|Definition |
|--|--|
|`==`|Equality|
|`!=`|Inequality|
|`===`|Strict equality|
|`!==`|Strict inequality|
|`<`|Less than|
|`>`|Greater than|
|`<=`|Less than or equal|
|`>=`|Greater than or equal|

The concept of strict equality/inequality applies to items that might normally be converted into a compatible type. The strict tests will consider if the types themselves are the same.

```javascript
0 == "0";  // true
0 === "0"; // false

0 == [];   // true
0 === [];  // false

0 == 0;    // true
0 === 0;   // true
```

Logical operators:
|Operator|Description|
|--|--|
|`!`|Logical inverse, not|
|`&&`|Logical AND|
|`||`|Logical OR|

The not operator `!` can be used to test whether or not a value is "truthy".

```javascript
!0;    // true
!!0;   // false
!1;    // false
!null; // true
!"0";  // false, perhaps unexpectedly
!"x";  // false
```

Example:

```javascript
if (a == 2 && b !== "") {
  // Something complicated
}
```

### Python

Literal boolean values:

```python
x = True
y = False
```

Boolean operators:

|Operator|Definition |
|--|--|
|`==`|Equality|
|`!=`|Inequality|
|`<`|Less than|
|`>`|Greater than|
|`<=`|Less than or equal|
|`>=`|Greater than or equal|

Logical operators:

|Operator|Description|
|--|--|
|`not`|Logical inverse, not|
|`and`|Logical AND|
|`or`|Logical OR|

The `not` operator can be used to test whether or not a value is "truthy".

```python
not 0      # true
not not 0  # false
not 1      # false
not None;  # true
not "0"    # false, perhaps unexpectedly
not "x"    # false
```

Example:

```python
if a == 2 and b != "":
  # Something complicated
```

## `for` Loops

### JavaScript

C-style `for` loops:

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

`for`-`in` loops iterate over the properties of an object or indexes of an array:

```javascript
a = [10, 20, 30];

for (let i in a) {
  console.log(i);    # 0  1  2
  console.log(a[i]); # 10 20 30
}

b = {'x': 77, 'y': 88, 'z': 99};

for (let i in b) {
  console.log(i);    # x  y  z
  console.log(b[i]); # 77 88 99
}
```

`for`-`of` loops access the values within the array (as opposed to the indexes of the array):

```javascript
a = [10, 20, 30];

for (let i of a) {
  console.log(i);  # 10 20 30
}
```

### Python

`for`-`in` loops over an _iteratable_. This can be a list, object, or other type of iterable item.

Counting loops:

```python
# Use the range() function to count:
for i in range(10):
  print(i)   # Prints 0-9

for i in range(20, 30):
  print(i)   # Prints 20-29

for i in range(-10, 20, 3):
  print(i)   # Print every 3rd number from -10 to 19
```

Iterating over other types:

```python
# A list
a = [10, 20, 30]

# Print 10 20 30
for i in a:
  print(i)

# A dict
b = {'x':5, 'y':15, 'z':0}

# Print x y z (the keys of the dict)
for i in b:
  print(i)
```

## `while` Loops

### JavaScript

C-style `while` and `do`-`while`:

```javascript
// Print 10 down to 0:

let x = 10;
while (x >= 0) {
  console.log(x);
  x--;
}

// Print 0 up to 9:
let x = 0;
do {
  console.log(x);
  x++;
while (x < 10);
```

### Python

Python has a `while` loop:

```python
# Print from 10 down through 0
x = 10
while x >= 0:
  print(x)
  x -= 1
```

## `switch` Statement

### JavaScript

JS can switch on various data types:

```javascript
switch(x) {
  case "foo":
    console.log("x is foo, all right");
    break;
  case 23:
    console.log("but here x is 23");
    break;
  default:
    console.log("x is something else entirely");
}
```

### Python

Python doesn't have a `switch` statement. You can use `if`-`elif`-`else` blocks.

A somewhat clumsy approximation of a `switch` can be constructed with a `dict` of functions.

```python
def func1():
  print("case 1 is hit")

def func2():
  print("case 2 is hit")

def func3():
  print("case 3 is hit")

funcs = {
  "alpha": func1,
  "bravo": func2,
  "charlie": func3
};

x = "bravo"
funcs[x]()  # calls func2
```

## `if` Conditionals

### JavaScript

JS uses C-style `if` statements:

```javascript
if (x == 10) {
  console.log("x is 10");
} else if (x == 20) {
  console.log("x is 20");
} else {
  console.log("x is something else");
}
```

### Python

Python notably uses `elif` instead of `else if`.

```python
if x == 10:
  print("x is 10")
elif x == 20:
  print("x is 20")
else:
  print("x is something else")
```

## Classes

### JavaScript

The current object is referred to by `this`.

Pre ES-2015, classes were created using functions. This is now outdated.

```javascript
function Goat(color) {
  this.legs = 4;
  this.color = color;
}

g = new Goat("brown");
```

JS uses prototypal inheritance. Pre ES-2015, this was explicit, and is also outdated:

```javascript
function Creature(type) {
  this.type = type;
}

// Make Goats inherit from Creature:
Goat.prototype = new Creature("mammal");

// Add a method:
Goat.prototype.jump = function () {
  console.log("I'm jumping! Yay!");
};

g = new Goat("red");
g.type;   // "mammal", since Goat inherits from Creature
g.jump(); // "I'm jumping! Yay!"
```

Modern JS introduced the `class` keyword and a syntax more familiar to most other OOP languages. Note that the inheritance model is still prototypal inheritance; it's just that the details are hidden from the developer.

```javascript
class Creature {
  constructor(type) {
    this.type = type;
  }
}

class Goat extends Creature {
  constructor(color) {
    super("mammal");
    this.legs = 4;
    this.color = color;
  }

  jump() {
    console.log("I'm jumping! Yay!");
  }
}

g = new Goat("orange");
g.type;   // "mammal"
g.jump(); // "I'm jumping! Yay!"
```

JS does not support multiple inheritance since each object can only have one prototype object. You have to use a _mix-in_ if you want to achieve similar functionality.

### Python
The current object is referred to by `self`. Note that `self` is explicitly present as the first parameter in object methods.

Python 2 syntax:

```python
class Creature:
  def __init__(self, type): # constructor
    self.type = type

class Goat(Creature):
  def __init__(self, color):
    # call super constructor
    Creature.__init__(self, "mammal")
    self.color = color
  
  def jump(self):
    print("I'm jumping! Yay!")

g = Goat("green")
g.type    # mammal
g.jump()  # I'm jumping! Yay!
```

Python 3 syntax includes the new `super()` keyword to make life easier.

```python
class Creature:
  def __init__(self, type): # constructor
    self.type = type

class Goat(Creature):
  def __init__(self, color):
    # call super constructor
    super().__init__("mammal")  # <-- Nicer!
    self.color = color
  
  def jump(self):
    print("I'm jumping! Yay!")

g = Goat("green")
g.type    # mammal
g.jump()  # I'm jumping! Yay!
```

Python supports multiple inheritance. 