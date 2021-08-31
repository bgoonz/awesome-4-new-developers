## Interpreted language vs compiled language

Interpreted languages don’t run at the machine code level. They are interpreted by another program that executes the instructions. Sometimes interpreted programs are compiled to *bytecode* and the bytecode is what is interpreted, which allows the programs to be smaller and run more quickly.

Compiled languages are converted to machine code to execute directly on the CPU. This makes them typically much faster than interpreted programs.

*[Technically any language could be compiled or interpreted, but there are some languages that typically get compiled (Go, C, C++, etc.) and some that typically get interpreted (Java, Python, JavaScript, etc.)]*


## Stack vs heap

*[This specific question, “stack vs. heap” is about where a language allocates memory for different types of objects. It’s not directly about the stack data structure or heap data structure.]*

When a program executes, the stack is used to hold local variables and function arguments. When a function gets called, a new stack frame is allocated on top of the stack with just enough room to hold all the local variables and arguments to the function. When the function returns, its stack frame is popped from the stack and the variables are forgotten. (Which is OK, because they were only needed for as long as the function was active.)

The heap is used for longer-term storage. Objects that were allocated with new or dynamically allocated another way go on the heap. Constant strings and global variables go there, as well.


## Recursion

Recursion is when a function calls itself.

It typically keeps calling itself until a *base case* is met that causes it to no longer call itself. (i.e. when the work is done.)

Problems that are composed of identical independent subproblems are good candidates for recursive solutions. (e.g a binary search tree is made up of smaller binary search trees, so traversing them has a nice recursive solution.)


## Object oriented design

* https://en.wikipedia.org/wiki/Object-oriented_design


## Design patterns (singleton, factory)

* https://en.wikipedia.org/wiki/Singleton_pattern
* https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)


## S.O.L.I.D. principles

* https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)

## Data Structures, Algorithms

TBD