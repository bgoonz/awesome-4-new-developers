[Readme](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/README.md)

[readme part 2](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/readme-p2.md)

[readme part 3](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/readme-p3.md)

[readme part 4](https://github.com/bgoonz/DS-ALGO-OFFICIAL/blob/master/readme-p4.md)

---

## Self-Similarity

> Recursion is the root of computation since it trades description for time.—Alan Perlis, [Epigrams in Programming](http://www.cs.yale.edu/homes/perlis-alan/quotes.html)

In [Arrays and Destructuring Arguments](#arraysanddestructuring), we worked with the basic idea that putting an array together with a literal array expression was the reverse or opposite of taking it apart with a destructuring assignment.

We saw that the basic idea that putting an array together with a literal array expression was the reverse or opposite of taking it apart with a destructuring assignment.

Let's be more specific. Some data structures, like lists, can obviously be seen as a collection of items. Some are empty, some have three items, some forty-two, some contain numbers, some contain strings, some a mixture of elements, there are all kinds of lists.

But we can also define a list by describing a rule for building lists. One of the simplest, and longest-standing in computer science, is to say that a list is:

0.  Empty, or;
1.  Consists of an element concatenated with a list .

Let's convert our rules to array literals. The first rule is simple: `[]` is a list. How about the second rule? We can express that using a spread. Given an element `e` and a list `list` , `[e, ...list]` is a list. We can test this manually by building up a list:

Thanks to the parallel between array literals + spreads with destructuring + rests, we can also use the same rules to decompose lists:

For the purpose of this exploration, we will presume the following:[1](#fn1)

Armed with our definition of an empty list and with what we've already learned, we can build a great many functions that operate on arrays. We know that we can get the length of an array using its `.length` . But as an exercise, how would we write a `length` function using just what we have already?

First, we pick what we call a _terminal case_. What is the length of an empty array? `0` . So let's start our function with the observation that if an array is empty, the length is `0` :

We need something for when the array isn't empty. If an array is not empty, and we break it into two pieces, `first` and `rest` , the length of our array is going to be `length(first) + length(rest)` . Well, the length of `first` is `1` , there's just one element at the front. But we don't know the length of `rest` . If only there was a function we could call… Like `length` !

Let's try it!

Our `length` function is _recursive_, it calls itself. This makes sense because our definition of a list is recursive, and if a list is self-similar, it is natural to create an algorithm that is also self-similar.

### linear recursion

"Recursion" sometimes seems like an elaborate party trick. There's even a joke about this:

> When promising students are trying to choose between pure mathematics and applied engineering, they are given a two-part aptitude test. In the first part, they are led to a laboratory bench and told to follow the instructions printed on the card. They find a bunsen burner, a sparker, a tap, an empty beaker, a stand, and a card with the instructions "boil water."

> Of course, all the students know what to do: They fill the beaker with water, place the stand on the burner and the beaker on the stand, then they turn the burner on and use the sparker to ignite the flame. After a bit the water boils, and they turn off the burner and are lead to a second bench.

> Once again, there is a card that reads, "boil water." But this time, the beaker is on the stand over the burner, as left behind by the previous student. The engineers light the burner immediately. Whereas the mathematicians take the beaker off the stand and empty it, thus reducing the situation to a problem they have already solved.

There is more to recursive solutions that simply functions that invoke themselves. Recursive algorithms follow the "divide and conquer" strategy for solving a problem:

0.  Divide the problem into smaller problems
1.  If a smaller problem is solvable, solve the small problem
2.  If a smaller problem is not solvable, divide and conquer that problem
3.  When all small problems have been solved, compose the solutions into one big solution

The big elements of divide and conquer are a method for decomposing a problem into smaller problems, a test for the smallest possible problem, and a means of putting the pieces back together. Our solutions are a little simpler in that we don't really break a problem down into multiple pieces, we break a piece off the problem that may or may not be solvable, and solve that before sticking it onto a solution for the rest of the problem.

This simpler form of "divide and conquer" is called _linear recursion_. It's very useful and simple to understand. Let's take another example. Sometimes we want to _flatten_ an array, that is, an array of arrays needs to be turned into one array of elements that aren't arrays.[2](#fn2)

We already know how to divide arrays into smaller pieces. How do we decide whether a smaller problem is solvable? We need a test for the terminal case. Happily, there is something along these lines provided for us:

The usual "terminal case" will be that flattening an empty array will produce an empty array. The next terminal case is that if an element isn't an array, we don't flatten it, and can put it together with the rest of our solution directly. Whereas if an element is an array, we'll flatten it and put it together with the rest of our solution.

So our first cut at a `flatten` function will look like this:

Once again, the solution directly displays the important elements: Dividing a problem into subproblems, detecting terminal cases, solving the terminal cases, and composing a solution from the solved portions.

### mapping

Another common problem is applying a function to every element of an array. JavaScript has a built-in function for this, but let's write our own using linear recursion.

If we want to square each number in a list, we could write:

And if we wanted to "truthify" each element in a list, we could write:

This specific case of linear recursion is called "mapping," and it is not necessary to constantly write out the same pattern again and again. Functions can take functions as arguments, so let's "extract" the thing to do to each element and separate it from the business of taking an array apart, doing the thing, and putting the array back together.

Given the signature:

We can write it out using a ternary operator. Even in this small function, we can identify the terminal condition, the piece being broken off, and recomposing the solution.

### folding

With the exception of the `length` example at the beginning, our examples so far all involve rebuilding a solution using spreads. But they needn't. A function to compute the sum of the squares of a list of numbers might look like this:

There are two differences between `sumSquares` and our maps above:

0.  Given the terminal case of an empty list, we return a `0` instead of an empty list, and;
1.  We catenate the square of each element to the result of applying `sumSquares` to the rest of the elements.

Let's rewrite `mapWith` so that we can use it to sum squares.

And now we supply a function that does slightly more than our mapping functions:

Our `foldWith` function is a generalization of our `mapWith` function. We can represent a map as a fold, we just need to supply the array rebuilding code:

And if we like, we can write `mapWith` using `foldWith` :

And to return to our first example, our version of `length` can be written as a fold:

### summary

Linear recursion is a basic building block of algorithms. Its basic form parallels the way linear data structures like lists are constructed: This helps make it understandable. Its specialized cases of mapping and folding are especially useful and can be used to build other functions. And finally, while folding is a special case of linear recursion, mapping is a special case of folding.

---

1.  Well, actually, this does not work for arrays that contain `undefined` as a value, but we are not going to see that in our examples. A more robust implementation would be `(array) => array.length === 0` , but we are doing backflips to keep this within a very small and contrived playground.[↩](#fnref1)
2.  `flatten` is a very simple [unfold](https://en.wikipedia.org/wiki/Anamorphism), a function that takes a seed value and turns it into an array. Unfolds can be thought of a "path" through a data structure, and flattening a tree is equivalent to a depth-first traverse.[↩](#fnref2)

---

**Memoization** is a design pattern used to reduce the overall number of calculations that can occur in algorithms that use recursive strategies to solve.

Recall that recursion solves a large problem by dividing it into smaller sub-problems that are more manageable. Memoization will store the results of the sub-problems in some other data structure, meaning that you avoid duplicate calculations and only "solve" each subproblem once. There are two features that comprise memoization:

- the function is recursive
- the additional data structure used is typically an object (we refer to this as the memo!)

This is a trade-off between the time it takes to run an algorithm (without memoization) and the memory used to run the algorithm (with memoization). Usually memoization is a good trade-off when dealing with large data or calculations.

You cannot always apply this technique to recursive problems. The problem must have an "overlapping subproblem structure" for memoization to be effective.

Here's an example of a problem that has such a structure:

> Using pennies, nickels, dimes, and quarters, what is the smallest combination of coins that total 27 cents?

You'll explore this exact problem in depth later on. For now, here is some food for thought. Along the way to calculating the smallest coin combination of 27 cents, you should also calculate the smallest coin combination of say, 25 cents as a component of that problem. This is the essence of an overlapping subproblem structure.

## Memoizing factorial

Here's an example of a function that computes the factorial of the number passed into it.

From this plain `factorial` above, it is clear that every time you call `factorial(6)` you should get the same result of `720` each time. The code is somewhat inefficient because you must go down the full recursive stack for each top level call to `factorial(6)`. It would be great if you could store the result of `factorial(6)` the first time you calculate it, then on subsequent calls to `factorial(6)` you simply fetch the stored result in constant time. You can accomplish exactly this by memoizing with an object!

The `memo` object above will map an argument of `factorial` to its return value. That is, the keys will be arguments and their values will be the corresponding results returned. By using the memo, you are able to avoid duplicate recursive calls!

Here's some food for thought: By the time your first call to `factorial(6)` returns, you will not have just the argument `6` stored in the memo. Rather, you will have _all_ arguments 2 to 6 stored in the memo.

Hopefully you sense the efficiency you can get by memoizing your functions, but maybe you are not convinced by the last example for two reasons:

- You didn't improve the speed of the algorithm by an order of Big-O (it is still O(n)).
- The code uses some global variable, so it's kind of ugly.

Both of those points are true, so take a look at a more advanced example that benefits from memoization.

## Memoizing the Fibonacci generator

Here's a _naive_ implementation of a function that calculates the Fibonacci number for a given input.

Before you optimize this, ask yourself what complexity class it falls into in the first place.

The time complexity of this function is not super intuitive to describe because the code branches twice recursively. Fret not! You'll find it useful to visualize the calls needed to do this with a tree. When reasoning about the time complexity for recursive functions, draw a tree that helps you see the calls. Every node of the tree represents a call of the recursion:

![fib_tree](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/fib_tree.png)

fib_tree

In general, the height of this tree will be `n`. You derive this by following the path going straight down the left side of the tree. You can also see that each internal node leads to two more nodes. Overall, this means that the tree will have roughly 2n nodes which is the same as saying that the `fib` function has an exponential time complexity of 2n. That is very slow! See for yourself, try running `fib(50)` - you'll be waiting for quite a while (it took 3 minutes on the author's machine).

Okay. So the `fib` function is slow. Is there anyway to speed it up? Take a look at the tree above. Can you find any repetitive regions of the tree?

![fib_tree_duplicates](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/fib_tree_duplicates.png)

fib_tree_duplicates

As the `n` grows bigger, the number of duplicate sub-trees grows exponentially. Luckily you can fix this using memoization by using a similar object strategy as before. You can use some JavaScript default arguments to clean things up:

The code above can calculate the 50th Fibonacci number almost instantly! Thanks to the `memo` object, you only need to explore a subtree fully once. Visually, the `fastFib` recursion has this structure:

![fib_memoized](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/fib_memoized.png)

fib_memoized

You can see the marked nodes (function calls) that access the memo in green. It's easy to see that this version of the Fibonacci generator will do far less computations as `n` grows larger! In fact, this memoization has brought the time complexity down to linear `O(n)` time because the tree only branches on the left side. This is an enormous gain if you recall the complexity class hierarchy.

## The memoization formula

Now that you understand memoization, when should you apply it? Memoization is useful when attacking recursive problems that have many overlapping sub-problems. You'll find it most useful to draw out the visual tree first. If you notice duplicate sub-trees, time to memoize. Here are the hard and fast rules you can use to memoize a slow function:

1.  Write the unoptimized, brute force recursion and make sure it works.
2.  Add the memo object as an additional argument to the function. The keys will represent unique arguments to the function, and their values will represent the results for those arguments.
3.  Add a base case condition to the function that returns the stored value if the function's argument is in the memo.
4.  Before you return the result of the recursive case, store it in the memo as a value and make the function's argument it's key.

## What you learned

You learned a secret to possibly changing an algorithm of one complexity class to a lower complexity class by using memory to store intermediate results. This is a powerful technique to use to make sure your programs that must do recursive calculations can benefit from running much faster.

---

Now that you are familiar with _memoization_, you can explore a related method of algorithmic optimization: **Tabulation**. There are two main features that comprise the Tabulation strategy:

- the function is iterative and _not_ recursive
- the additional data structure used is typically an array, commonly referred to as the table

Many problems that can be solved with memoization can also be solved with tabulation as long as you convert the recursion to iteration. The first example is the canonical example of recursion, calculating the Fibonacci number for an input. However, in the example, you'll see the iteration version of it for a fresh start!

## Tabulating the Fibonacci number

Tabulation is all about creating a table (array) and filling it out with elements. In general, you will complete the table by filling entries from "left to right". This means that the first entry of the table (first element of the array) will correspond to the smallest subproblem. Naturally, the final entry of the table (last element of the array) will correspond to the largest problem, which is also the final answer.

Here's a way to use tabulation to store the intermediary calculations so that later calculations can refer back to the table.

When you initialized the table and seeded the first two values, it looked like this:

| i          | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| ---------- | --- | --- | --- | --- | --- | --- | --- | --- |
| `table[i]` | `0` | `1` |     |     |     |     |     |     |

After the loop finishes, the final table will be:

| i          | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7    |
| ---------- | --- | --- | --- | --- | --- | --- | --- | ---- |
| `table[i]` | `0` | `1` | `1` | `2` | `3` | `5` | `8` | `13` |

Similar to the previous `memo`, by the time the function completes, the `table` will contain the final solution as well as all sub-solutions calculated along the way.

To compute the complexity class of this `tabulatedFib` is very straightforward since the code is iterative. The dominant operation in the function is the loop used to fill out the entire table. The length of the table is roughly `n` elements long, so the algorithm will have an _O(n)_ runtime. The space taken by our algorithm is also _O(n)_ due to the size of the table. Overall, this should be a satisfying solution for the efficiency of the algorithm.

## Aside: Refactoring for O(1) Space

You may notice that you can cut down on the space used by the function. At any point of the loop, the calculation really only need the previous two subproblems' results. There is little utility to storing the full array. This refactor is easy to do by using two variables:

Bam! You now have O(n) runtime and O(1) space. This is the most optimal algorithm for calculating a Fibonacci number. Note that this strategy is a pared down form of tabulation, since it uses only the last two values.

### The Tabulation Formula

Here are the general guidelines for implementing the tabulation strategy. This is just a general recipe, so adjust for taste depending on your problem:

1.  Create the table array based off of the size of the input, which isn't always straightforward if you have multiple input values
2.  Initialize some values in the table that "answer" the trivially small subproblem usually by initializing the first entry (or entries) of the table
3.  Iterate through the array and fill in remaining entries, using previous entries in the table to perform the current calculation
4.  Your final answer is (usually) the last entry in the table

## What you learned

You learned another way of possibly changing an algorithm of one complexity class to a lower complexity class by using memory to store intermediate results. This is a powerful technique to use to make sure your programs that must do iterative calculations can benefit from running much faster.

---

Consider the following search algorithm known as **linear search**.

Most Big-O analysis is done on the "worst-case scenario" and provides an upper bound. In the worst case analysis, you calculate the upper bound on running time of an algorithm. You must know the case that causes the maximum number of operations to be executed.

For _linear search_, the worst case happens when the element to be searched (`term` in the above code) is not present in the array. When `term` is not present, the `search` function compares it with all the elements of `array` one by one. Therefore, the worst-case time complexity of linear search would be O(n).

---

Consider the following search algorithm known as the **binary search**. This kind of search only works if the array is already sorted.

For the _binary search_, you cut the search space in half every time. This means that it reduces the number of searches you must do by half, every time. That means the number of steps it takes to get to the desired item (if it exists in the array), in the worst case takes the same amount of steps for every number within a range defined by the powers of 2.

- 7 -> 4 -> 2 -> 1
- 8 -> 4 -> 2 -> 1
- 9 -> 5 -> 3 -> 2 -> 1
- 15 -> 8 -> 4 -> 2 -> 1
- 16 -> 8 -> 4 -> 2 -> 1
- 17 -> 9 -> 5 -> 3 -> 2 -> 1
- 31 -> 16 -> 8 -> 4 -> 2 -> 1
- 32 -> 16 -> 8 -> 4 -> 2 -> 1
- 33 -> 17 -> 9 -> 5 -> 3 -> 2 -> 1

So, for any number of items in the sorted array between 2n-1 and 2n, it takes _n_ number of steps. That means if you have _k_ items in the array, then it will take _log**2**k_.

Binary searches are _O_(_log**2**n_).

---

Consider the following divide-and-conquer sort method known as the **merge sort**.

For the _merge sort_, you cut the sort space in half every time. In each of those halves, you have to loop through the number of items in the array. That means that, for the worst case, you get that same _log**2**n_ but it must be multiplied by the number of elements in the array, _n_.

Merge sorts are _O_(_n\*log**2**n_).

---

Consider the following sort algorithm known as the **bubble sort**.

For the _bubble sort_, the worst case is the same as the best case because it always makes nested loops. So, the outer loop loops the number of times of the items in the array. For each one of those loops, the inner loop loops again a number of times for the items in the array. So, if there are _n_ values in the array, then a loop inside a loop is _n_ \* _n_. So, this is O(n2). That's polynomial, which ain't that good.

---

use the LeetCode platform to check your work rather than relying on local mocha tests. If you don't already have an account at LeetCode.com, please click https://leetcode.com/accounts/signup/ to sign up for a free account.

After you sign up for the account, please verify the account with the email address that you used so that you can actually run your solution on LeetCode.com.

In the projects, you will see files that are named "leet_code\_«number».js". When you open those, you will see a link in the file that you can use to go directly to the corresponding problem on LeetCode.com.

Use the local JavaScript file in Visual Studio Code to collaborate on the solution. Then, you can run the proposed solution in the LeetCode.com code runner to validate its correctness.

---

This project contains two test-driven problems and one problem on LeetCode.com.

- Clone the project from https://github.com/appacademy-starters/algorithms-memoization-project.
- `cd` into the project folder
- `npm install` to install dependencies in the project root directory
- `npx test` to run the specs
- You can view the test cases in `/test/test.js`. Your job is to write code in the `/lib` files to pass all specs.
  - In `problems.js`, you will write code to make the `lucasNumberMemo` and `minChange` functions pass.
  - In `leet_code_518.js`, you will use that file as a scratch pad to work on the LeetCode.com problem at https://leetcode.com/problems/coin-change-2/.

---

This project contains two test-driven problems and one problem on LeetCode.com.

- Clone the project from https://github.com/appacademy-starters/algorithms-tabulation-project.
- `cd` into the project folder
- `npm install` to install dependencies in the project root directory
- `npx test` to run the specs
- You can view the test cases in `/test/test.js`. Your job is to write code in the `/lib` files to pass all specs.
  - In `problems.js`, you will write code to make the `stepper`, `maxNonAdjacentSum`, and `minChange` functions pass.
  - In `leet_code_64.js`, you will use that file as a scratch pad to work on the LeetCode.com problem at https://leetcode.com/problems/minimum-path-sum/.
  - In `leet_code_70.js`, you will use that file as a scratch pad to work on the LeetCode.com problem at https://leetcode.com/problems/climbing-stairs/.

---

---

**The objective of this lesson** is for you to get experience implementing common sorting algorithms that will come up during a lot of interviews. It is also important for you to understand how different sorting algorithms behave when given output.

At the end of this, you will be able to

1.  Explain the complexity of and write a function that performs `bubble sort` on an array of numbers.
2.  Explain the complexity of and write a function that performs `selection sort` on an array of numbers.
3.  Explain the complexity of and write a function that performs `insertion sort` on an array of numbers.
4.  Explain the complexity of and write a function that performs `merge sort` on an array of numbers.
5.  Explain the complexity of and write a function that performs `quick sort` on an array of numbers.
6.  Explain the complexity of and write a function that performs a binary search on a sorted array of numbers.nce implementing common sorting algorithms that will come up during a lot of interviews. It is also important for you to understand how different sorting algorithms behave when given output.

At the end of this, you will be able to

1.  Explain the complexity of and write a function that performs `bubble sort` on an array of numbers.
2.  Explain the complexity of and write a function that performs `selection sort` on an array of numbers.
3.  Explain the complexity of and write a function that performs `insertion sort` on an array of numbers.
4.  Explain the complexity of and write a function that performs `merge sort` on an array of numbers.
5.  Explain the complexity of and write a function that performs `quick sort` on an array of numbers.
6.  Explain the complexity of and write a function that performs a binary search on a sorted array of numbers.

---

Bubble Sort is generally the first major sorting algorithm to come up in most introductory programming courses. Learning about this algorithm is useful educationally, as it provides a good introduction to the challenges you face when tasked with converting unsorted data into sorted data, such as conducting logical comparisons, making swaps while iterating, and making optimizations. It's also quite simple to implement, and can be done quickly.

Bubble Sort is _almost never_ a good choice in production. simply because:

- It is not efficient
- It is not commonly used
- There is a stigma attached to using it

## _"But…then…why are we…"_

It is _quite useful_ as an educational base for you, and as a conversational base for you while interviewing, because you can discuss how other more elegant and efficient algorithms improve upon it. Taking naive code and improving upon it by weighing the technical tradeoffs of your other options is 100% the name of the game when trying to level yourself up from a junior engineer to a senior engineer.

## The algorithm bubbles up

As you progress through the algorithms and data structures of this course, you'll eventually notice that there are some recurring funny terms. "Bubbling up" is one of those terms.

When someone writes that an item in a collection "bubbles up," you should infer that:

- The item is _in motion_
- The item is moving _in some direction_
- The item _has some final resting destination_

When invoking Bubble Sort to sort an array of integers in ascending order, the largest integers will "bubble up" to the "top" (the end) of the array, one at a time.

The largest values are captured, put into motion in the direction defined by the desired sort (ascending right now), and traverse the array until they arrive at their end destination. See if you can observe this behavior in the following animation (courtesy http://visualgo.net):

![bubble sort](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/BubbleSort.gif)

bubble sort

As the algorithm iterates through the array, it compares each element to the element's right neighbor. If the current element is larger than its neighbor, the algorithm swaps them. This continues until all elements in the array are sorted.

## How does a pass of Bubble Sort work?

Bubble sort works by performing multiple _passes_ to move elements closer to their final positions. A single pass will iterate through the entire array once.

A pass works by scanning the array from left to right, two elements at a time, and checking if they are ordered correctly. To be ordered correctly the first element must be less than or equal to the second. If the two elements are not ordered properly, then we swap them to correct their order. Afterwards, it scans the next two numbers and continue repeat this process until we have gone through the entire array.

See one pass of bubble sort on the array `[2, 8, 5, 2, 6]`. On each step the elements currently being scanned are in **bold**.

- \[**2**, **8**, 5, 2, 6\] - ordered, so leave them alone
- \[2, **8**, **5**, 2, 6\] - not ordered, so swap
- \[2, 5, **8**, **2**, 6\] - not ordered, so swap
- \[2, 5, 2, **8**, **6**\] - not ordered, so swap
- \[2, 5, 2, 6, 8\] - the first pass is complete

Because at least one swap occurred, the algorithm knows that it wasn't sorted. It needs to make another pass. It starts over again at the first entry and goes to the next-to-last entry doing the comparisons, again. It only needs to go to the next-to-last entry because the previous "bubbling" put the largest entry in the last position.

- \[**2**, **5**, 2, 6, 8\] - ordered, so leave them alone
- \[2, **5**, **2**, 6, 8\] - not ordered, so swap
- \[2, 2, **5**, **6**, 8\] - ordered, so leave them alone
- \[2, 2, 5, 6, 8\] - the second pass is complete

Because at least one swap occurred, the algorithm knows that it wasn't sorted. Now, it can bubble from the first position to the last-2 position because the last two values are sorted.

- \[**2**, **2**, 5, 6, 8\] - ordered, so leave them alone
- \[2, **2**, **5**, 6, 8\] - ordered, so leave them alone
- \[2, 2, 5, 6, 8\] - the third pass is complete

No swap occurred, so the Bubble Sort stops.

## Ending the Bubble Sort

During Bubble Sort, you can tell if the array is in sorted order by checking if a swap was made during the previous pass performed. If a swap was not performed during the previous pass, then the array must be totally sorted and the algorithm can stop.

You're probably wondering why that makes sense. Recall that a pass of Bubble Sort checks if any adjacent elements are **out of order** and swaps them if they are. If we don't make any swaps during a pass, then everything must be already **in order**, so our job is done. Let that marinate for a bit.

## Pseudocode for Bubble Sort

---

Selection Sort is very similar to Bubble Sort. The major difference between the two is that Bubble Sort bubbles the _largest_ elements up to the end of the array, while Selection Sort selects the _smallest_ elements of the array and directly places them at the beginning of the array in sorted position. Selection sort will utilize swapping just as bubble sort did. Let's carefully break this sorting algorithm down.

## The algorithm: select the next smallest

Selection sort works by maintaining a sorted region on the left side of the input array; this sorted region will grow by one element with every "pass" of the algorithm. A single "pass" of selection sort will select the next smallest element of unsorted region of the array and move it to the sorted region. Because a single pass of selection sort will move an element of the unsorted region into the sorted region, this means a single pass will shrink the unsorted region by 1 element whilst increasing the sorted region by 1 element. Selection sort is complete when the sorted region spans the entire array and the unsorted region is empty!

![selection sort](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/SelectionSort.gif)

selection sort

The algorithm can be summarized as the following:

1.  Set MIN to location 0
2.  Search the minimum element in the list
3.  Swap with value at location MIN
4.  Increment MIN to point to next element
5.  Repeat until list is sorted

## The pseudocode

In pseudocode, the Selection Sort can be written as this.

---

With Bubble Sort and Selection Sort now in your tool box, you're starting to get some experience points under your belt! Time to learn one more "naive" sorting algorithm before you get to the efficient sorting algorithms.

## The algorithm: insert into the sorted region

Insertion Sort is similar to Selection Sort in that it gradually builds up a larger and larger sorted region at the left-most end of the array.

However, Insertion Sort differs from Selection Sort because this algorithm does not focus on searching for the right element to place (the next smallest in our Selection Sort) on each pass through the array. Instead, it focuses on sorting each element in the order they appear from left to right, regardless of their value, and inserting them in the most appropriate position in the sorted region.

See if you can observe the behavior described above in the following animation:

![insertion sort](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/InsertionSort.gif)

insertion sort

## The Steps

Insertion Sort grows a sorted array on the left side of the input array by:

1.  If it is the first element, it is already sorted. return 1;
2.  Pick next element
3.  Compare with all elements in the sorted sub-list
4.  Shift all the elements in the sorted sub-list that is greater than the value to be sorted
5.  Insert the value
6.  Repeat until list is sorted

These steps are easy to confuse with selection sort, so you'll want to watch the video lecture and drawing that accompanies this reading as always!

## The pseudocode

---

You've explored a few sorting algorithms already, all of them being quite slow with a runtime of O(n2). It's time to level up and learn your first time-efficient sorting algorithm! You'll explore **merge sort** in detail soon, but first, you should jot down some key ideas for now. The following points are not steps to an algorithm yet; rather, they are ideas that will motivate how you can derive this algorithm.

- it is easy to merge elements of two sorted arrays into a single sorted array
- you can consider an array containing only a single element as already trivially sorted
- you can also consider an empty array as trivially sorted

## The algorithm: divide and conquer

You're going to need a helper function that solves the first major point from above. How might you merge two sorted arrays? In other words you want a `merge` function that will behave like so:

Once you have that, you get to the "divide and conquer" bit.

The algorithm for merge sort is actually _really_ simple.

1.  if there is only one element in the list, it is already sorted. return that array.
2.  otherwise, divide the list recursively into two halves until it can no more be divided.
3.  merge the smaller lists into new list in sorted order.

The process is visualized below. When elements are moved to the bottom of the picture, they are going through the `merge` step:

![merge sort](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/MergeSort.gif)

merge sort

The pseudocode for the algorithm is as follows.

---

Quick Sort has a similar "divide and conquer" strategy to Merge Sort. Here are a few key ideas that will motivate the design:

- it is easy to sort elements of an array relative to a particular target value
- an array of 0 or 1 elements is already trivially sorted

Regarding that first point, for example given `[7, 3, 8, 9, 2]` and a target of `5`, we know `[3, 2]` are numbers less than `5` and `[7, 8, 9]` are numbers greater than `5`.

## How does it work?

In general, the strategy is to divide the input array into two subarrays: one with the smaller elements, and one with the larger elements. Then, it recursively operates on the two new subarrays. It continues this process until of dividing into smaller arrays until it reaches subarrays of length 1 or smaller. As you have seen with Merge Sort, arrays of such length are automatically sorted.

The steps, when discussed on a high level, are simple:

1.  choose an element called "the pivot", how that's done is up to the implementation
2.  take two variables to point left and right of the list excluding pivot
3.  left points to the low index
4.  right points to the high
5.  while value at left is less than pivot move right
6.  while value at right is greater than pivot move left
7.  if both step 5 and step 6 does not match swap left and right
8.  if left ≥ right, the point where they met is new pivot
9.  repeat, recursively calling this for smaller and smaller arrays

Before we move forward, see if you can observe the behavior described above in the following animation:

![quick sort](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/QuickSort.gif)

quick sort

## The algorithm: divide and conquer

Formally, we want to partition elements of an array relative to a pivot value. That is, we want elements less than the pivot to be separated from elements that are greater than or equal to the pivot. Our goal is to create a function with this behavior:

### Partition

Seems simple enough! Let's implement it in JavaScript:

You don't have to use an explicit `partition` helper function in your Quick Sort implementation; however, we will borrow heavily from this pattern. As you design algorithms, it helps to think about key patterns in isolation, although your solution may not feature that exact helper. Some would say we like to divide and conquer.

## The pseudocode

It is _so_ small, this algorithm. It's amazing that it performs so well with so little code!

---

We've explored many ways to sort arrays so far, but why did we go through all of that trouble? By sorting elements of an array, we are organizing the data in a way that gives us a quick way to look up elements later on. For simplicity, we have been using arrays of numbers up until this point. However, these sorting concepts can be generalized to other data types. For example, it would be easy to modify our comparison-based sorting algorithms to sort strings: instead of leveraging facts like `0 < 1`, we can say `'A' < 'B'`.

Think of a dictionary. A dictionary contains alphabetically sorted words and their definitions. A dictionary is pretty much only useful if it is ordered in this way. Let's say you wanted to look up the definition of "stupendous." What steps might you take?

- you open up the dictionary at the roughly middle page
  - you land in the "m" section
- you know "s" comes somewhere after "m" in the book, so you disregard all pages before the "m" section. Instead, you flip to the roughly middle page between "m" and "z"
  - you land in the "u" section
- you know "s" comes somewhere before "u", so you can disregard all pages after the "u" section. Instead, you flip to the roughly middle page between the previous "m" page and "u"
- …

You are essentially using the `binarySearch` algorithm in the real world.

## The Algorithm: "check the middle and half the search space"

Formally, our `binarySearch` will seek to solve the following problem:

Programmatically, we want to satisfy the following behavior:

Before we move on, really internalize the fact that `binarySearch` will only work on **sorted** arrays! Obviously we can search any array, sorted or unsorted, in `O(n)` time. But now our goal is be able to search the array with a sub-linear time complexity (less than `O(n)`).

## The pseudocode

---

Bubble Sort manipulates the array by swapping the position of two elements. To implement Bubble Sort in JS, you'll need to perform this operation. It helps to have a function to do that. A key detail in this function is that you need an extra variable to store one of the elements since you will be overwriting them in the array:

Note that the swap function does not create or return a new array. It mutates the original array:

### Bubble Sort JS Implementation

Take a look at the snippet below and try to understand how it corresponds to the conceptual understanding of the algorithm. Scroll down to the commented version when you get stuck.

## Time Complexity: O(n2)

Picture the worst case scenario where the input array is completely unsorted. Say it's sorted in fully decreasing order, but the goal is to sort it in increasing order:

- n is the length of the input array
- The inner `for` loop along contributes _O(n)_ in isolation
- The outer while loop contributes _O(n)_ in isolation because a single iteration of the while loop will bring one element to its final resting position. In other words, it keeps running the while loop until the array is fully sorted. To fully sort the array we will need to bring all `n` elements into their final resting positions.
- Those two loops are nested so the total time complexity is O(n \* n) = O(n2).

It's worth mentioning that the best case scenario is when the input array is already fully sorted. This will cause our for loop to conduct a single pass without performing any swap, so the `while` loop will not trigger further iterations. This means best case time complexity is _O(n)_ for bubble sort. This best case linear time is probably the only advantage of bubble sort. Programmers are usually interested only in the worst-case analysis and ignore best-case analysis.

## Space Complexity: O(1)

Bubble Sort is a constant space, O(1), algorithm. The amount of memory consumed by the algorithm does not increase relative to the size of the input array. It uses the same amount of memory and create the same amount of variables regardless of the size of the input, making this algorithm quite space efficient. The space efficiency mostly comes from the fact that it mutates the input array in-place. This is known as a **destructive sort** because it "destroys" the positions of the values in the array.

## When should you use Bubble Sort?

Nearly never, but it may be a good choice in the following list of special cases:

- When sorting really small arrays where run time will be negligible no matter what algorithm you choose.
- When sorting arrays that you expect to already be nearly sorted.
- At parties

---

Since a component of Selection Sort requires us to locate the smallest value in the array, let's focus on that pattern in isolation:

Pretty basic code right? We won't use this explicit helper function to solve selection sort, however we will borrow from this pattern soon.

## Selection Sort JS Implementation

We'll also utilize the classic swap pattern that we introduced in the bubble sort. To refresh:

Now for the punchline! Take a look at the snippet below and try to understand how it corresponds to our conceptual understanding of the selection sort algorithm. Scroll down to the commented version when you get stuck.

## Time Complexity Analysis

Selection Sort runtime is O(n2) because:

- `n` is the length of the input array
- The outer loop i contributes O(n) in isolation, this is plain to see
- The inner loop j is more complicated, it will make one less iteration for every iteration of i.
  - for example, let's say we have an array of 10 elements, `n = 10`.
  - the first full cycle of `j` will have 9 iterations
  - the second full cycle of `j` will have 8 iterations
  - the third full cycle of `j` will have 7 iterations
  - …
  - the last full cycle of `j` will have 1 iteration
  - This means that the inner loop j will contribute roughly O(n / 2) on average
- The two loops are nested so our total time complexity is O(n \* n / 2) = O(n2)

You'll notice that during this analysis we said something silly like O(n / 2). In some analyses such as this one, we'll prefer to drop the constants only at the end of the sketch so you understand the logical steps we took to derive a complicated time complexity.

## Space Complexity Analysis: O(1)

The amount of memory consumed by the algorithm does not increase relative to the size of the input array. We use the same amount of memory and create the same amount of variables regardless of the size of our input. A quick indicator of this is the fact that we don't create any arrays.

## When should we use Selection Sort?

There is really only one use case where Selection Sort becomes superior to Bubble Sort. Both algorithms are quadratic in time and constant in space, but the point at which they differ is in the _number of swaps_ they make.

Bubble Sort, in the worst case, invokes a swap on every single comparison. Selection Sort only swaps once our inner loop has completely finished traversing the array. Therefore, Selection Sort is optimized to make the least possible number of swaps.

Selection Sort becomes advantageous when making a swap is the most expensive operation in your system. You will likely rarely encounter this scenario, but in a situation where you've built (or have inherited) a system with suboptimal write speed ability, for instance, maybe you're sorting data in a specialized database tuned strictly for fast read speeds at the expense of slow write speeds, using Selection Sort would save you a ton of expensive operations that could potential crash your system under peak load.

Though in industry this situation is very rare, the insights above make for a fantastic conversational piece when weighing technical tradeoffs while strategizing solutions in an interview setting. This commentary may help deliver the impression that you are well-versed in system design and technical analysis, a key indicator that someone is prepared for a senior level position.

---

Take a look at the snippet below and try to understand how it corresponds to our conceptual understanding of the Insertion Sort algorithm. Scroll down to the commented version when you get stuck:

There are a few key pieces to point out in the above solution before moving forward:

1.  The outer `for` loop starts at the 1st index, not the 0th index, and moves to the right.
2.  The inner `for` loop starts immediately to the left of the current element, and moves to the left.
3.  The condition for the inner `for` loop is complicated, and behaves similarly to a while loop!
    - It continues iterating to the left toward `j = 0`, _only while_ the `currElement` is less than `arr[j]`.
    - It does this over and over until it finds the proper place to insert `currElement`, and then we exit the inner loop!
4.  When shifting elements in the sorted region to the right, it _does not_ replace the value at their old index! If the input array is `[1, 2, 4, 3]`, and `currElement` is `3`, after comparing `4` and `3`, but before inserting `3` between `2` and `4`, the array will look like this: `[1, 2, 4, 4]`.

If you are currently scratching your head, that is perfectly okay because when this one clicks, it clicks for good.

If you're struggling, you should try taking out a pen and paper and step through the solution provided above one step at a time. Keep track of `i`, `j`, `currElement`, `arr[j]`, and the input `arr` itself _at every step_. After going through this a few times, you'll have your "ah HA!" moment.

## Time and Space Complexity Analysis

Insertion Sort runtime is O(n2) because:

In the **worst case scenario** where our input array is entirely unsorted, since this algorithm contains a nested loop, its run time behaves similarly to `bubbleSort` and `selectionSort`. In this case, we are forced to make a comparison at each iteration of the inner loop. Not convinced? Let's derive the complexity. We'll use much of the same argument as we did in `selectionSort`. Say we had the worst case scenario where are input array is sorted in full decreasing order, but we wanted to sort it in increasing order:

- `n` is the length of the input array
- The outer loop i contributes O(n) in isolation, this is plain to see
- The inner loop j is more complicated. We know j will iterate until it finds an appropriate place to insert the `currElement` into the sorted region. However, since we are discussing the case where the data is already in decreasing order, the element must travel the maximum distance to find it's insertion point! We know this insertion point to be index 0, since every `currElement` will be the next smallest of the array. So:
  - the 1st element travels 1 distance to be inserted
  - the 2nd element travels 2 distance to be inserted
  - the 3rd element travels 3 distance to be inserted
  - …
  - the n-1th element travels n-1 distance to be inserted
  - This means that our inner loop j will contribute roughly O(n / 2) on average
- The two loops are nested so our total time complexity is O(n \* n / 2) = O(n2)

### Space Complexity: O(1)

The amount of memory consumed by the algorithm does not increase relative to the size of the input array. We use the same amount of memory and create the same amount of variables regardless of the size of our input. A quick indicator of this is the fact that we don't create any arrays.

## When should you use Insertion Sort?

Insertion Sort has one advantage that makes it absolutely supreme in one special case. Insertion Sort is what's known as an "online" algorithm. Online algorithms are great when you're dealing with _streaming data_, because they can sort the data live _as it is received_.

If you must sort a set of data that is ever-incoming, for example, maybe you are sorting the most relevant posts in a social media feed so that those posts that are most likely to impact the site's audience always appear at the top of the feed, an online algorithm like Insertion Sort is a great option.

Insertion Sort works well in this situation because the left side of the array is always sorted, and in the case of nearly sorted arrays, it can run in linear time. The absolute best case scenario for Insertion Sort is when there is only one unsorted element, and it is located all the way to the right of the array.

Well, if you have data constantly being pushed to the array, it will always be added to the right side. If you keep your algorithm constantly running, the left side will always be sorted. Now you have linear time sort.

Otherwise, Insertion Sort is, in general, useful in all the same situations as Bubble Sort. It's a good option when:

- You are sorting really small arrays where run time will be negligible no matter what algorithm we choose.
- You are sorting an array that you expect to already be nearly sorted.

---

You needed to come up with two pieces of code to make merge sort work.

## Full code

## Merging two sorted arrays

Merging two sorted arrays is simple. Since both arrays are sorted, we know the smallest numbers to always be at the front of the arrays. We can construct the new array by comparing the first elements of both input arrays. We remove the smaller element from it's respective array and add it to our new array. Do this until both input arrays are empty:

Remember the following about JavaScript to understand the above code.

- `0` is considered a falsey value, meaning it acts like `false` when used in Boolean expressions. All other numbers are truthy.
- `Infinity` is a value that is guaranteed to be greater than any other quantity
- `shift` is an array method that removes and returns the first element

Here's the annotated version.

By using `Infinity` as the default element when an array is empty, we are able to elegantly handle the scenario where one array empties before the other. We know that any actual element will be less than `Infinity` so we will continually take the other element into our merged array.

In other words, we can safely handle this edge case:

Nice! We now have a way to merge two sorted arrays into a single sorted array. It's worth mentioning that `merge` will have a `O(n)` runtime where `n` is the combined length of the two input arrays. This is what we meant when we said it was "easy" to merge two sorted arrays; linear time is fast! We'll find fact this useful later.

## Divide and conquer, step-by-step

Now that we satisfied the merge idea, let's handle the second point. That is, we say an array of 1 or 0 elements is already sorted. This will be the base case of our recursion. Let's begin adding this code:

If our base case pertains to an array of a very small size, then the design of our recursive case should make progress toward hitting this base scenario. In other words, we should recursively call `mergeSort` on smaller and smaller arrays. A logical way to do this is to take the input array and split it into left and right halves.

Here is the part of the recursion where we do a lot of hand waving and we take things on faith. We know that `mergeSort` will take in an array and return the sorted version; we assume that it works. That means the two recursive calls will return the `sortedLeft` and `sortedRight` halves.

Okay, so we have two sorted arrays. We want to return one sorted array. So `merge` them! Using the `merge` function we designed earlier:

Wow. that's it. Notice how light the implementation of `mergeSort` is. Much of the heavy lifting (the actually comparisons) is done by the `merge` helper.

`mergeSort` is a classic example of a "Divide and Conquer" algorithm. In other words, we keep breaking the array into smaller and smaller sub arrays. This is the same as saying we take the problem and break it down into smaller and smaller subproblems. We do this until the subproblems are so small that we trivially know the answer to them (an array length 0 or 1 is already sorted). Once we have those subanswers we can combine to reconstruct the larger problems that we previously divided (merge the left and right subarrays).

## Time and Space Complexity Analysis

### Time Complexity: O(n log(n))

- `n` is the length of the input array
- We must calculate how many recursive calls we make. The number of recursive calls is the number of times we must split the array to reach the base case. Since we split in half each time, the number of recursive calls is `O(log(n))`.
  - for example, say we had an array of length `32`
  - then the length would change as `32 -> 16 -> 8 -> 4 -> 2 -> 1`, we have to split 5 times before reaching the base case, `log(32) = 5`
  - in our algorithm, **log(n)** describes how many times we must halve **n** until the quantity reaches 1.
- Besides the recursive calls, we must consider the while loop within the `merge` function, which contributes `O(n)` in isolation
- We call `merge` in every recursive `mergeSort` call, so the total complexity is **O(n \* log(n))**

### Space Complexity: O(n)

Merge Sort is the first non-O(1) space sorting algorithm we've seen thus far.

The larger the size of our input array, the greater the number of subarrays we must create in memory. These are not free! They each take up finite space, and we will need a new subarray for each element in the original input. Therefore, Merge Sort has a linear space complexity, O(n).

### When should you use Merge Sort?

Unless we, the engineers, have access in advance to some unique, exploitable insight about our dataset, it turns out that O(n log n) time is _the best_ we can do when sorting unknown datasets.

That means that Merge Sort is fast! It's way faster than Bubble Sort, Selection Sort, and Insertion Sort. However, due to its linear space complexity, we must always weigh the trade off between speed and memory consumption when making the choice to use Merge Sort. Consider the following:

- If you have unlimited memory available, use it, it's fast!
- If you have a decent amount of memory available and a medium sized dataset, run some tests first, but use it!
- In other cases, maybe you should consider other options.

---

Let's begin structuring the recursion. The base case of any recursive problem is where the input is so trivial, we immediately know the answer without calculation. If our problem is to sort an array, what is the trivial array? An array of 1 or 0 elements! Let's establish the code:

If our base case pertains to an array of a very small size, then the design of our recursive case should make progress toward hitting this base scenario. In other words, we should recursively call `quickSort` on smaller and smaller arrays. This is very similar to our previous `mergeSort`, except we don't just split the array down the middle. Instead we should arbitrarily choose an element of the array as a pivot and partition the remaining elements relative to this pivot:

Here is what to notice about the partition step above: 1. the pivot is an element of the array; we arbitrarily chose the first element 2. we removed the pivot from the master array before we filter into the left and right partitions

Now that we have the two subarrays of `left` and `right` we have our subproblems! To solve these subproblems we must sort the subarrays. I wish we had a function that sorts an array…oh wait we do, `quickSort`! Recursively:

Okay, so we have the two sorted partitions. This means we have the two subsolutions. But how do we put them together? Think about how we partitioned them in the first place. Everything in `leftSorted` is **guaranteed** to be less than everything in `rightSorted`. On top of that, `pivot` should be placed after the last element in `leftSorted`, but before the first element in `rightSorted`. So all we need to do is to combine the elements in the order "left, pivot, right"!

That last `concat` line is a bit clunky. Bonus JS Lesson: we can use the spread `...` operator to elegantly concatenate arrays. In general:

Utilizing that spread pattern gives us this final implementation:

### Quicksort Sort JS Implementation

That code was so clean we should show it again. Here's the complete code for your reference, for when you `ctrl+F "quicksort"` the night before an interview:

## Time and Space Complexity Analysis

Here is a summary of the complexity.

### Time Complexity

- Avg Case: O(n log(n))
- Worst Case: O(n2)

The runtime analysis of `quickSort` is more complex than `mergeSort`

- `n` is the length of the input array
- The partition step alone is `O(n)`
- We must calculate how many recursive calls we make. The number of recursive calls is the number of times we must split the array to reach the base case. This is dependent on how we choose the pivot. Let's analyze the best and worst case:
  - **Best Case:** We are lucky and always choose the median as the pivot. This means the left and right partitions will have equal length. This will halve the array length at every step of the recursion. We benefit from this halving with `O(log(n))` recursive calls to reach the base case.
  - **Worst Case:** We are unlucky and always choose the min or max as the pivot. This means one partition will contain everything, and the other partition is empty. This will decrease the array length by 1 at every step of the recursion. We suffer from `O(n)` recursive calls to reach the base case.
- The partition step occurs in every recursive call, so our total complexities are:
  - **Best Case:** O(n \* log(n))
  - **Worst Case:** O(n2)

Although we typically take the worst case when describing Big-O for an algorithm, much research on `quickSort` has shown the worst case to be an exceedingly rare occurrence even if we choose the pivot at random. Because of this we still consider `quickSort` an efficient algorithm. This is a common interview talking point, so you should be familiar with the relationship between the choice of pivot and efficiency of the algorithm.

Just in case: A somewhat common question a student may ask when studying `quickSort` is, "If the median is the best pivot, why don't we always just choose the median when we partition?" Don't overthink this. To know the median of an array, it must be sorted in the first place.

### Space Complexity

Our implementation of `quickSort` uses `O(n)` space because of the partition arrays we create. There is an in-place version of `quickSort` that uses `O(log(n))` space. `O(log(n))` space is not huge benefit over `O(n)`. You'll also find our version of `quickSort` as easier to remember, easier to implement. Just know that a `O(logn)` space `quickSort` exists.

### When should you use Quick Sort?

- When you are in a pinch and need to throw down an efficient sort (on average). The recursive code is light and simple to implement; much smaller than `mergeSort`.
- When constant space is important to you, use the in-place version. This will of course trade off some simplicity of implementation.

If you know some constraints about dataset you can make some modifications to optimize pivot choice. Here's some food for thought. Our implementation of `quickSort` will always take the first element as the pivot. This means we will suffer from the worst case time complexity in the event that we are given an already sorted array (ironic isn't it?). If you know your input data to be mostly already sorted, randomize the choice of pivot - this is a very easy change. Bam. Solved like a true engineer.

---

We'll implement binary search recursively. As always, we start with a base case that captures the scenario of the input array being so trivial, that we know the answer without further calculation. If we are given an empty array and a target, we can be certain that the target is not inside of the array:

Now for our recursive case. If we want to get a time complexity less than `O(n)`, we must avoid touching all `n` elements. Adopting our dictionary strategy, let's find the middle element and grab references to the left and right halves of the sorted array:

It's worth pointing out that the left and right halves do not contain the middle element we chose.

Here is where we leverage the sorted property of the array. If the target is less than the middle, then the target must be in the left half of the array. If the target is greater than the middle, then the target must be in the right half of the array. So we can narrow our search to one of these halves, and ignore the other. Luckily we have a function that can search the half, its `binarySearch`:

We know `binarySeach` will return the correct Boolean, so we just pass that result up by returning it ourselves. However, something is lacking in our code. It is only possible to get a false from the literal `return false` line, but there is no `return true`. Looking at our conditionals, we handle the cases where the target is less than middle or the target is greater than the middle, but what if the product is **equal** to the middle? If the target is equal to the middle, then we found the target and should `return true`! This is easy to add with an `else`:

To wrap up, we have confidence of our base case will eventually be hit because we are continually halving the array. We halve the array until it's length is 0 or we actually find the target.

### Binary Search JS Implementation

Here is the code again for your quick reference:

## Time and Space Complexity Analysis

The complexity analysis of this algorithm is easier to explain through visuals, so we **highly encourage** you to watch the lecture that accompanies this reading. In any case, here is a summary of the complexity:

### Time Complexity: O(log(n))

- `n` is the length of the input array
- We have no loops, so we must only consider the number of recursive calls it takes to hit the base case
- The number of recursive calls is the number of times we must halve the array until it's length becomes 0. This number can be described by `log(n)`
  - for example, say we had an array of 8 elements, `n = 8`
  - the length would halve as `8 -> 4 -> 2 -> 1`
  - it takes 3 calls, `log(8) = 3`

### Space Complexity: O(n)

Our implementation uses `n` space due to half arrays we create using slice. Note that JavaScript `slice` creates a new array, so it requires additional memory to be allocated.

### When should we use Binary Search?

Use this algorithm when the input data is sorted!!! This is a heavy requirement, but if you have it, you'll have an insanely fast algorithm. Of course, you can use one of your high-functioning sorting algorithms to sort the input and _then_ perform the binary search!

---

This project contains a skeleton for you to implement Bubble Sort. In the file **lib/bubble_sort.js**, you should implement the Bubble Sort. This is a description of how the Bubble Sort works (and is also in the code file).

## Instructions

- Clone the project from https://github.com/appacademy-starters/algorithms-bubble-sort-starter.
- `cd` into the project folder
- `npm install` to install dependencies in the project root directory
- `npm test` to run the specs
- You can view the test cases in `/test/test.js`. Your job is to write code in the `/lib/bubble_sort.js` that implements the Bubble Sort.

---

This project contains a skeleton for you to implement Selection Sort. In the file **lib/selection_sort.js**, you should implement the Selection Sort. You can use the same `swap` function from Bubble Sort; however, try to implement it on your own, first.

The algorithm can be summarized as the following:

1.  Set MIN to location 0
2.  Search the minimum element in the list
3.  Swap with value at location MIN
4.  Increment MIN to point to next element
5.  Repeat until list is sorted

This is a description of how the Selection Sort works (and is also in the code file).

## Instructions

- Clone the project from https://github.com/appacademy-starters/algorithms-selection-sort-starter.
- `cd` into the project folder
- `npm install` to install dependencies in the project root directory
- `npm test` to run the specs
- You can view the test cases in `/test/test.js`. Your job is to write code in the `/lib/selection_sort.js` that implements the Selection Sort.

---

This project contains a skeleton for you to implement Insertion Sort. In the file **lib/insertion_sort.js**, you should implement the Insertion Sort.

The algorithm can be summarized as the following:

1.  If it is the first element, it is already sorted. return 1;
2.  Pick next element
3.  Compare with all elements in the sorted sub-list
4.  Shift all the elements in the sorted sub-list that is greater than the value to be sorted
5.  Insert the value
6.  Repeat until list is sorted

This is a description of how the Insertion Sort works (and is also in the code file).

## Instructions

- Clone the project from https://github.com/appacademy-starters/algorithms-insertion-sort-starter.
- `cd` into the project folder
- `npm install` to install dependencies in the project root directory
- `npm test` to run the specs
- You can view the test cases in `/test/test.js`. Your job is to write code in the `/lib/insertion_sort.js` that implements the Insertion Sort.

---

This project contains a skeleton for you to implement Merge Sort. In the file **lib/merge_sort.js**, you should implement the Merge Sort.

The algorithm can be summarized as the following:

1.  if there is only one element in the list, it is already sorted. return that array.
2.  otherwise, divide the list recursively into two halves until it can no more be divided.
3.  merge the smaller lists into new list in sorted order.

This is a description of how the Merge Sort works (and is also in the code file).

## Instructions

- Clone the project from https://github.com/appacademy-starters/algorithms-merge-sort-starter.
- `cd` into the project folder
- `npm install` to install dependencies in the project root directory
- `npm test` to run the specs
- You can view the test cases in `/test/test.js`. Your job is to write code in the `/lib/merge_sort.js` that implements the Merge Sort.

---

This project contains a skeleton for you to implement Quick Sort. In the file **lib/quick_sort.js**, you should implement the Quick Sort. This is a description of how the Quick Sort works (and is also in the code file).

## Instructions

- Clone the project from https://github.com/appacademy-starters/algorithms-quick-sort-starter.
- `cd` into the project folder
- `npm install` to install dependencies in the project root directory
- `npm test` to run the specs
- You can view the test cases in `/test/test.js`. Your job is to write code in the `/lib/quick_sort.js` that implements the Quick Sort.

---

This project contains a skeleton for you to implement Binary Search. In the file **lib/binary_search.js**, you should implement the Binary Search and its cousin Binary Search Index.

The Binary Search algorithm can be summarized as the following:

1.  If the array is empty, then return false
2.  Check the value in the middle of the array against the target value
3.  If the value is equal to the target value, then return true
4.  If the value is less than the target value, then return the binary search on the left half of the array for the target
5.  If the value is greater than the target value, then return the binary search on the right half of the array for the target

This is a description of how the Binary Search works (and is also in the code file).

Then you need to adapt that to return _the index_ of the found item rather than a Boolean value. The pseudocode is also in the code file.

## Instructions

- Clone the project from https://github.com/appacademy-starters/algorithms-binary-search-starter.
- `cd` into the project folder
- `npm install` to install dependencies in the project root directory
- `npm test` to run the specs
- You can view the test cases in `/test/test.js`. Your job is to write code in the `/lib/binary_search.js` that implements the Binary Search and Binary Search Index.

---

---

**The objective of this lesson** is for you to become comfortable with implementing common data structures. This is important because questions about data structures are incredibly likely to be interview questions for software engineers from junior to senior levels. Moreover, understanding how different data structures work will influence the libraries and frameworks that you choose when writing software.

When you are done, you will be able to:

1.  Explain and implement a List.
2.  Explain and implement a Stack.
3.  Explain and implement a Queue.me comfortable with implementing common data structures. This is important because questions about data structures are incredibly likely to be interview questions for software engineers from junior to senior levels. Moreover, understanding how different data structures work will influence the libraries and frameworks that you choose when writing software.

When you are done, you will be able to:

1.  Explain and implement a List.
2.  Explain and implement a Stack.
3.  Explain and implement a Queue.

---

In the university setting, it's common for Linked Lists to appear early on in an undergraduate's Computer Science coursework. While they don't always have the most practical real-world applications in industry, Linked Lists make for an important and effective educational tool in helping develop a student's mental model on what data structures actually are to begin with.

Linked lists are simple. They have many compelling, reoccurring edge cases to consider that emphasize to the student the need for care and intent while implementing data structures. They can be applied as the underlying data structure while implementing a variety of other prevalent abstract data types, such as Lists, Stacks, and Queues, and they have a level of versatility high enough to clearly illustrate the value of the Object Oriented Programming paradigm.

They also come up in software engineering interviews quite often.

## What is a Linked List?

A Linked List data structure represents a linear sequence of "vertices" (or "nodes"), and tracks three important properties.

**Linked List Properties:**

| Property | Description                                         |
| -------- | --------------------------------------------------- |
| `head`   | The first node in the list.                         |
| `tail`   | The last node in the list.                          |
| `length` | The number of nodes in the list; the list's length. |

The data being tracked by a particular Linked List does not live inside the Linked List instance itself. Instead, each vertex is actually an instance of an even simpler, smaller data structure, often referred to as a "Node".

Depending on the type of Linked List (there are many), Node instances track some very important properties as well.

**Linked List Node Properties:**

| Property   | Description                                            |
| ---------- | ------------------------------------------------------ |
| `value`    | The actual value this node represents.                 |
| `next`     | The next node in the list (relative to this node).     |
| `previous` | The previous node in the list (relative to this node). |

**NOTE:** The `previous` property is for Doubly Linked Lists only!

Linked Lists contain _ordered_ data, just like arrays. The first node in the list is, indeed, first. From the perspective of the very first node in the list, the _next_ node is the second node. From the perspective of the second node in the list, the _previous_ node is the first node, and the _next_ node is the third node. And so it goes.

#### _"So…this sounds a lot like an Array…"_

Admittedly, this does _sound_ a lot like an Array so far, and that's because Arrays and Linked Lists are both implementations of the List ADT. However, there is an incredibly important distinction to be made between Arrays and Linked Lists, and that is how they _physically store_ their data. (As opposed to how they _represent_ the order of their data.)

Recall that Arrays contain _contiguous_ data. Each element of an array is actually stored _next to_ it's neighboring element _in the actual hardware of your machine_, in a single continuous block in memory.

![Array in Memory](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/array-in-memory.png)

_An Array's contiguous data being stored in a continuous block of addresses in memory._

Unlike Arrays, Linked Lists contain _non-contiguous_ data. Though Linked Lists _represent_ data that is ordered linearly, that mental model is just that - an interpretation of the _representation_ of information, not reality.

In reality, in the actual hardware of your machine, whether it be in disk or in memory, a Linked List's Nodes are not stored in a single continuous block of addresses. Rather, Linked List Nodes live at randomly distributed addresses throughout your machine! The only reason we know which node comes next in the list is because we've assigned its reference to the current node's `next` pointer.

![Array in Memory](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/SLL-diagram.png)

_A Singly Linked List's non-contiguous data (Nodes) being stored at randomly distributed addresses in memory._

For this reason, Linked List Nodes have _no indices_, and no _random access_. Without random access, we do not have the ability to look up an individual Linked List Node in constant time. Instead, to find a particular Node, we have to start at the very first Node and iterate through the Linked List one node at a time, checking each Node's _next_ Node until we find the one we're interested in.

So when implementing a Linked List, we actually must implement both the Linked List class _and_ the Node class. Since the actual data lives in the Nodes, it's simpler to implement the Node class first.

## Types of Linked Lists

There are four flavors of Linked List you should be familiar with when walking into your job interviews.

**Linked List Types:**

| List Type         | Description                                                                                                     | Directionality                |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Singly Linked     | Nodes have a single pointer connecting them in a single direction.                                              | Head→Tail                     |
| Doubly Linked     | Nodes have two pointers connecting them bi-directionally.                                                       | Head⇄Tail                     |
| Multiply Linked   | Nodes have two or more pointers, providing a variety of potential node orderings.                               | Head⇄Tail, A→Z, Jan→Dec, etc. |
| Circularly Linked | Final node's `next` pointer points to the first node, creating a non-linear, circular version of a Linked List. | Head→Tail→Head→Tail           |

**NOTE:** These Linked List types are not always mutually exclusive.

For instance:

- Any type of Linked List can be implemented Circularly (e.g. A Circular Doubly Linked List).
- A Doubly Linked List is actually just a special case of a Multiply Linked List.

You are most likely to encounter Singly and Doubly Linked Lists in your upcoming job search, so we are going to focus exclusively on those two moving forward. However, in more senior level interviews, it is very valuable to have some familiarity with the other types of Linked Lists. Though you may not actually code them out, _you will win extra points by illustrating your ability to weigh the tradeoffs of your technical decisions_ by discussing how your choice of Linked List type may affect the efficiency of the solutions you propose.

## Linked List Methods

Linked Lists are great foundation builders when learning about data structures because they share a number of similar methods (and edge cases) with many other common data structures. You will find that many of the concepts discussed here will repeat themselves as we dive into some of the more complex non-linear data structures later on, like Trees and Graphs.

In the project that follows, we will implement the following Linked List methods:

| Type      | Name         | Description                                                         | Returns             |
| --------- | ------------ | ------------------------------------------------------------------- | ------------------- |
| Insertion | `addToTail`  | Adds a new node to the tail of the Linked List.                     | Updated Linked List |
| Insertion | `addToHead`  | Adds a new node to the head of the Linked List.                     | Updated Linked List |
| Insertion | `insertAt`   | Inserts a new node at the "index", or position, specified.          | Boolean             |
| Deletion  | `removeTail` | Removes the node at the tail of the Linked List.                    | Removed node        |
| Deletion  | `removeHead` | Removes the node at the head of the Linked List.                    | Removed node        |
| Deletion  | `removeFrom` | Removes the node at the "index", or position, specified.            | Removed node        |
| Search    | `contains`   | Searches the Linked List for a node with the value specified.       | Boolean             |
| Access    | `get`        | Gets the node at the "index", or position, specified.               | Node at index       |
| Access    | `set`        | Updates the value of a node at the "index", or position, specified. | Boolean             |
| Meta      | `size`       | Returns the current size of the Linked List.                        | Integer             |

## Time and Space Complexity Analysis

Before we begin our analysis, here is a quick summary of the Time and Space constraints of each Linked List Operation. The complexities below apply to both Singly and Doubly Linked Lists:

| Data Structure Operation | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity (Worst) |
| ------------------------ | --------------------- | ----------------------- | ------------------------ |
| Access                   | `Θ(n)`                | `O(n)`                  | `O(n)`                   |
| Search                   | `Θ(n)`                | `O(n)`                  | `O(n)`                   |
| Insertion                | `Θ(1)`                | `O(1)`                  | `O(n)`                   |
| Deletion                 | `Θ(1)`                | `O(1)`                  | `O(n)`                   |

Before moving forward, see if you can reason to yourself why each operation has the time and space complexity listed above!

## Time Complexity - Access and Search:

### Scenarios:

1.  We have a Linked List, and we'd like to find the 8th item in the list.
2.  We have a Linked List of sorted alphabet letters, and we'd like to see if the letter "Q" is inside that list.

### Discussion:

Unlike Arrays, Linked Lists Nodes are not stored contiguously in memory, and thereby do not have an indexed set of memory addresses at which we can quickly lookup individual nodes in constant time. Instead, we must begin at the head of the list (or possibly at the tail, if we have a Doubly Linked List), and iterate through the list until we arrive at the node of interest.

In Scenario 1, we'll know we're there because we've iterated 8 times. In Scenario 2, we'll know we're there because, while iterating, we've checked each node's value and found one that matches our target value, "Q".

In the worst case scenario, we may have to traverse the entire Linked List until we arrive at the final node. This makes both Access & Search **Linear Time** operations.

## Time Complexity - Insertion and Deletion:

### Scenarios:

1.  We have an empty Linked List, and we'd like to insert our first node.
2.  We have a Linked List, and we'd like to insert or delete a node at the Head or Tail.
3.  We have a Linked List, and we'd like to insert or delete a node from somewhere in the middle of the list.

### Discussion:

Since we have our Linked List Nodes stored in a non-contiguous manner that relies on pointers to keep track of where the next and previous nodes live, Linked Lists liberate us from the linear time nature of Array insertions and deletions. We no longer have to adjust the position at which each node/element is stored after making an insertion at a particular position in the list. Instead, if we want to insert a new node at position `i`, we can simply:

1.  Create a new node.
2.  Set the new node's `next` and `previous` pointers to the nodes that live at positions `i` and `i - 1`, respectively.
3.  Adjust the `next` pointer of the node that lives at position `i - 1` to point to the new node.
4.  Adjust the `previous` pointer of the node that lives at position `i` to point to the new node.

And we're done, in Constant Time. No iterating across the entire list necessary.

"But hold on one second," you may be thinking. "In order to insert a new node in the middle of the list, don't we have to lookup its position? Doesn't that take linear time?!"

Yes, it is tempting to call insertion or deletion in the middle of a Linked List a linear time operation since there is lookup involved. However, it's usually the case that you'll already have a reference to the node where your desired insertion or deletion will occur.

For this reason, we separate the Access time complexity from the Insertion/Deletion time complexity, and formally state that Insertion and Deletion in a Linked List are **Constant Time** across the board.

### NOTE:

Without a reference to the node at which an insertion or deletion will occur, due to linear time lookup, an insertion or deletion _in the middle_ of a Linked List will still take Linear Time, sum total.

## Space Complexity:

### Scenarios:

1.  We're given a Linked List, and need to operate on it.
2.  We've decided to create a new Linked List as part of strategy to solve some problem.

### Discussion:

It's obvious that Linked Lists have one node for every one item in the list, and for that reason we know that Linked Lists take up Linear Space in memory. However, when asked in an interview setting what the Space Complexity _of your solution_ to a problem is, it's important to recognize the difference between the two scenarios above.

In Scenario 1, we _are not_ creating a new Linked List. We simply need to operate on the one given. Since we are not storing a _new_ node for every node represented in the Linked List we are provided, our solution is _not necessarily_ linear in space.

In Scenario 2, we _are_ creating a new Linked List. If the number of nodes we create is linearly correlated to the size of our input data, we are now operating in Linear Space.

### NOTE:

Linked Lists can be traversed both iteratively and recursively. _If you choose to traverse a Linked List recursively_, there will be a recursive function call added to the call stack for every node in the Linked List. Even if you're provided the Linked List, as in Scenario 1, you will still use Linear Space in the call stack, and that counts.

---

Stacks and Queues aren't really "data structures" by the strict definition of the term. The more appropriate terminology would be to call them abstract data types (ADTs), meaning that their definitions are more conceptual and related to the rules governing their user-facing behaviors rather than their core implementations.

For the sake of simplicity, we'll refer to them as data structures and ADTs interchangeably throughout the course, but the distinction is an important one to be familiar with as you level up as an engineer.

Now that that's out of the way, Stacks and Queues represent a linear collection of nodes or values. In this way, they are quite similar to the Linked List data structure we discussed in the previous section. In fact, you can even use a modified version of a Linked List to implement each of them. (Hint, hint.)

These two ADTs are similar to each other as well, but each obey their own special rule regarding the order with which Nodes can be added and removed from the structure.

Since we've covered Linked Lists in great length, these two data structures will be quick and easy. Let's break them down individually in the next couple of sections.

## What is a Stack?

Stacks are a Last In First Out (LIFO) data structure. The last Node added to a stack is always the first Node to be removed, and as a result, the first Node added is always the last Node removed.

The name Stack actually comes from this characteristic, as it is helpful to visualize the data structure as a vertical stack of items. Personally, I like to think of a Stack as a stack of plates, or a stack of sheets of paper. This seems to make them more approachable, because the analogy relates to something in our everyday lives.

If you can imagine adding items to, or removing items from, a Stack of…literally anything…you'll realize that every (sane) person naturally obeys the LIFO rule.

We add things to the _top_ of a stack. We remove things from the _top_ of a stack. We never add things to, or remove things from, the _bottom_ of the stack. That's just crazy.

Note: We can use JavaScript Arrays to implement a basic stack. `Array#push` adds to the top of the stack and `Array#pop` will remove from the top of the stack. In the exercise that follows, we'll build our own Stack class from scratch (without using any arrays). In an interview setting, your evaluator may be okay with you using an array as a stack.

## What is a Queue?

Queues are a First In First Out (FIFO) data structure. The first Node added to the queue is always the first Node to be removed.

The name Queue comes from this characteristic, as it is helpful to visualize this data structure as a horizontal line of items with a beginning and an end. Personally, I like to think of a Queue as the line one waits on for an amusement park, at a grocery store checkout, or to see the teller at a bank.

If you can imagine a queue of humans waiting…again, for literally anything…you'll realize that _most_ people (the civil ones) naturally obey the FIFO rule.

People add themselves to the _back_ of a queue, wait their turn in line, and make their way toward the _front_. People exit from the _front_ of a queue, but only when they have made their way to being first in line.

We never add ourselves to the front of a queue (unless there is no one else in line), otherwise we would be "cutting" the line, and other humans don't seem to appreciate that.

Note: We can use JavaScript Arrays to implement a basic queue. `Array#push` adds to the back (enqueue) and `Array#shift` will remove from the front (dequeue). In the exercise that follows, we'll build our own Queue class from scratch (without using any arrays). In an interview setting, your evaluator may be okay with you using an array as a queue.

**Translator: [CarrieOn](https://github.com/CarrieOn)**

**Author: [labuladong](https://github.com/labuladong)**

It's easy to reverse a single linked list using iteration, however it's kind of difficult to come up with a recursive solution. Furthermore, if only part of a linked list needs reversed, can you nail it with **recursion**?

If you haven't known how to **recursively reverse a single linked list**, no worry, we will start right here and guide you step by step to a deeper level.

To reverse part of a linked list means we only reverse elements in a specific interval and leave others untouched.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/pictures/reverse_linked_list/title.png)

Note: **Index starts from 1**. Two loops needed if solve via iteration: use one for-loop to find the mth element, and then use another for-loop to reverse elements between m and n. While in recursive solution, no loop at all.

Though iterative solution looks simple, you have to be careful with the details. On the contrary, recursive solution is quite elegant. Let's start reversing a whole single linked list in the recursive way.

### 1\. Recursively reverse a whole single Linked List

You may have already known the solution below.

Do you feel lost in trying to understand code above? Well, you are not the only one. This algorithm is often used to show how clever and elegant recursion can be. Let's dig into the code together.

For recursion, **the most important thing is to clarify the definition of the recursive function**. Specifically, we define `reverse` as follows:

**Input a node `head` , we will reverse the list starting from `head` , and return the new head node.**

After clarifying the definition, we look back at the problem. For example, we want to reverse the list below:

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/pictures/reverse_linked_list/1.jpg)

So after calling `reverse(head)` , recursion happens:

Did you just step into the messy details in recursion? Oops, it's a wrong way, step back now! Focus on the recursion definition (which tells you what it does) to understand how recursive code works the wonder.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/pictures/reverse_linked_list/2.jpg)

After executing `reverse(head.next)` , the whole linked list becomes this:

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/pictures/reverse_linked_list/3.jpg)

According to the definition of the recursive function, `reverse` needs to return the new head node, so we use variable `last` to mark it.

Let's continue cracking the next piece of code:

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/pictures/reverse_linked_list/4.jpg)

Last work to do：

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/pictures/reverse_linked_list/5.jpg)

The whole linked list is successfully reversed now. Amazing, isn't it?

Last but not the least, there are two things in recursion you need to pay attention to:

1.  Recursion needs a base case.

`java if(head.next == null) return head;`

2.  After reversion, the new head is `last`, and the former `head` becomes the last node, don't forget to point its tail to null.

`java head.next = null;`

After understanding above, now we can proceed further, the problem below is actually an extend to the above solution.

### 2\. Reverse first N nodes

This time we will implement a funtion below:

Take below as an example, call `reverseN(head, 3)` :

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/pictures/reverse_linked_list/6.jpg)

The idea is similar to reversing the whole linked list, only a few modifications needed:

Main differences:

1.  Base case `n == 1`, if reverse only one element, then new head is itself, meanwhile **remember to mark the successor node**.
2.  In previouse solution, we set `head.next` directly to null, because after reversing the whole list, head becoms the last node. But now `head` may not be the last node after reversion, so we need mark `successor` (the (n+1)th node), and link it to `head` after reversion.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/pictures/reverse_linked_list/7.jpg)

OK, now we are pretty close to reversing part of the linked list.

### 3\. Reverse part of a linked list

Given an interval `[m,n]` (index starts from 1), only reverse elements in this section.

First, if `m == 1` , it is equal to reversing the first `n` elements as we discussed just now.

What if `m != 1` ? If we take the index of the `head` as 1, then we need to reverse from the `mth` element. And what if we take the index of the `head.next` as 1? Then compared to `head.next` , the reverse section should start from `(m-1)th` element. And what about `head.next.next` …

Different from iteration, this is how we think in the recursive way, so our code should be:

## Stack and Queue Properties

Stacks and Queues are so similar in composition that we can discuss their properties together. They track the following three properties:

**Stack Properties | Queue Properties:**

| Stack Property | Description                                           | Queue Property | Description                                           |
| -------------- | ----------------------------------------------------- | -------------- | ----------------------------------------------------- |
| `top`          | The first node in the Stack                           | `front`        | The first node in the Queue.                          |
| —-             | Stacks do not have an equivalent                      | `back`         | The last node in the Queue.                           |
| `length`       | The number of nodes in the Stack; the Stack's length. | `length`       | The number of nodes in the Queue; the Queue's length. |

Notice that rather than having a `head` and a `tail` like Linked Lists, Stacks have a `top`, and Queues have a `front` and a `back` instead. Stacks don't have the equivalent of a `tail` because you only ever push or pop things off the top of Stacks. These properties are essentially the same; pointers to the end points of the respective List ADT where important actions way take place. The differences in naming conventions are strictly for human comprehension.

---

Similarly to Linked Lists, the values stored inside a Stack or a Queue are actually contained within Stack Node and Queue Node instances. Stack, Queue, and Singly Linked List Nodes are all identical, but just as a reminder and for the sake of completion, these List Nodes track the following two properties:

**Stack & Queue Node Properties:**

| Property | Description                                         |
| -------- | --------------------------------------------------- |
| `value`  | The actual value this node represents.              |
| `next`   | The next node in the Stack (relative to this node). |

## Stack Methods

In the exercise that follows, we will implement a Stack data structure along with the following Stack methods:

| Type      | Name   | Description                               | Returns                        |
| --------- | ------ | ----------------------------------------- | ------------------------------ |
| Insertion | `push` | Adds a Node to the top of the Stack.      | Integer - New size of stack    |
| Deletion  | `pop`  | Removes a Node from the top of the Stack. | Node removed from top of Stack |
| Meta      | `size` | Returns the current size of the Stack.    | Integer                        |

## Queue Methods

In the exercise that follows, we will implement a Queue data structure along with the following Queue methods:

| Type      | Name      | Description                                 | Returns                          |
| --------- | --------- | ------------------------------------------- | -------------------------------- |
| Insertion | `enqueue` | Adds a Node to the front of the Queue.      | Integer - New size of Queue      |
| Deletion  | `dequeue` | Removes a Node from the front of the Queue. | Node removed from front of Queue |
| Meta      | `size`    | Returns the current size of the Queue.      | Integer                          |

## Time and Space Complexity Analysis

Before we begin our analysis, here is a quick summary of the Time and Space constraints of each Stack Operation.

| Data Structure Operation | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity (Worst) |
| ------------------------ | --------------------- | ----------------------- | ------------------------ |
| Access                   | `Θ(n)`                | `O(n)`                  | `O(n)`                   |
| Search                   | `Θ(n)`                | `O(n)`                  | `O(n)`                   |
| Insertion                | `Θ(1)`                | `O(1)`                  | `O(n)`                   |
| Deletion                 | `Θ(1)`                | `O(1)`                  | `O(n)`                   |

Before moving forward, see if you can reason to yourself why each operation has the time and space complexity listed above!

#### Time Complexity - Access and Search:

When the Stack ADT was first conceived, its inventor definitely did not prioritize searching and accessing individual Nodes or values in the list. The same idea applies for the Queue ADT. There are certainly better data structures for speedy search and lookup, and if these operations are a priority for your use case, it would be best to choose something else!

Search and Access are both linear time operations for Stacks and Queues, and that shouldn't be too unclear. Both ADTs are nearly identical to Linked Lists in this way. The only way to find a Node somewhere in the middle of a Stack or a Queue, is to start at the `top` (or the `back`) and traverse downward (or forward) toward the `bottom` (or `front`) one node at a time via each Node's `next` property.

This is a linear time operation, O(n).

#### Time Complexity - Insertion and Deletion:

For Stacks and Queues, insertion and deletion is what it's all about. If there is one feature a Stack absolutely must have, it's constant time insertion and removal to and from the `top` of the Stack (FIFO). The same applies for Queues, but with insertion occurring at the `back` and removal occurring at the `front` (LIFO).

Think about it. When you add a plate to the top of a stack of plates, do you have to iterate through all of the other plates first to do so? Of course not. You simply add your plate to the top of the stack, and that's that. The concept is the same for removal.

Therefore, Stacks and Queues have constant time Insertion and Deletion via their `push` and `pop` or `enqueue` and `dequeue` methods, O(1).

#### Space Complexity:

The space complexity of Stacks and Queues is very simple. Whether we are instantiating a new instance of a Stack or Queue to store a set of data, or we are using a Stack or Queue as part of a strategy to solve some problem, Stacks and Queues always store one Node for each value they receive as input.

For this reason, we always consider Stacks and Queues to have a linear space complexity, O(n).

## When should we use Stacks and Queues?

At this point, we've done a lot of work understanding the ins and outs of Stacks and Queues, but we still haven't really discussed what we can use them for. The answer is actually…a lot!

For one, Stacks and Queues can be used as intermediate data structures while implementing some of the more complicated data structures and methods we'll see in some of our upcoming sections.

For example, the implementation of the breadth-first Tree traversal algorithm takes advantage of a Queue instance, and the depth-first Graph traversal algorithm exploits the benefits of a Stack instance.

Additionally, Stacks and Queues serve as the essential underlying data structures to a wide variety of applications you use all the time. Just to name a few:

#### Stacks:

- The Call Stack is a Stack data structure, and is used to manage the order of function invocations in your code.
- Browser History is often implemented using a Stack, with one great example being the browser history object in the very popular React Router module.
- Undo/Redo functionality in just about any application. For example:
  - When you're coding in your text editor, each of the actions you take on your keyboard are recorded by `push`ing that event to a Stack.
  - When you hit \[cmd + z\] to undo your most recent action, that event is `pop`ed off the Stack, because the last event that occured should be the first one to be undone (LIFO).
  - When you hit \[cmd + y\] to redo your most recent action, that event is `push`ed back onto the Stack.

#### Queues:

- Printers use a Queue to manage incoming jobs to ensure that documents are printed in the order they are received.
- Chat rooms, online video games, and customer service phone lines use a Queue to ensure that patrons are served in the order they arrive.
  - In the case of a Chat Room, to be admitted to a size-limited room.
  - In the case of an Online Multi-Player Game, players wait in a lobby until there is enough space and it is their turn to be admitted to a game.
  - In the case of a Customer Service Phone Line…you get the point.
- As a more advanced use case, Queues are often used as components or services in the system design of a service-oriented architecture. A very popular and easy to use example of this is Amazon's Simple Queue Service (SQS), which is a part of their Amazon Web Services (AWS) offering.
  - You would add this service to your system between two other services, one that is sending information for processing, and one that is receiving information to be processed, when the volume of incoming requests is high and the integrity of the order with which those requests are processed must be maintained.

---

---

**The objective of this lesson** is for you to become comfortable with implementing common data structures. This is important because questions about data structures are incredibly likely to be interview questions for software engineers from junior to senior levels. Moreover, understanding how different data structures work will influence the libraries and frameworks that you choose when writing software.

When you are done, you will be able to:

1.  Explain and implement a Heap.
2.  Explain and implement a Graph.table with implementing common data structures. This is important because questions about data structures are incredibly likely to be interview questions for software engineers from junior to senior levels. Moreover, understanding how different data structures work will influence the libraries and frameworks that you choose when writing software.

When you are done, you will be able to:

1.  Explain and implement a Heap.
2.  Explain and implement a Graph.

---

Let's explore the **Heap** data structure! In particular, we'll explore **Binary Heaps**. A binary heap is a type of binary tree. However, a heap is not a binary _search_ tree. A heap is a partially ordered data structure, whereas a BST has full order. In a heap, the root of the tree will be the maximum (max heap) or the minimum (min heap). Below is an example of a max heap:

![max_heap](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/max_heap.png)

max_heap

Notice that the heap above does not follow search tree property where all values to the left of a node are less and all values to the right are greater or equal. Instead, the max heap invariant is:

- given any node, its children must be less than or equal to the node

This constraint makes heaps much more relaxed in structure compared to a search tree. There is no guaranteed order among "siblings" or "cousins" in a heap. The relationship only flows down the tree from parent to child. In other words, in a max heap, a node will be greater than all of it's children, it's grandchildren, its great-grandchildren, and so on. A consequence of this is the root being the absolute maximum of the entire tree. We'll be exploring max heaps together, but these arguments are symmetric for a min heap.

### Complete Trees

We'll eventually implement a max heap together, but first we'll need to take a quick detour. Our design goal is to implement a data structure with efficient operations. Since a heap is a type of binary tree, recall the circumstances where we had a "best case" binary tree. We'll need to ensure our heap has minimal height, that is, it must be a balanced tree!

Our heap implementation will not only be balanced, but it will also be **complete**. To clarify, **every complete tree is also a balanced tree**, but not every balanced tree is also complete. Our definition of a complete tree is:

- a tree where all levels have the maximal number of nodes, except the bottom the level
- AND the bottom level has all nodes filled as far left as possible

Here are few examples of the definition:

![complete_tree](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/complete_tree.png)

complete_tree

Notice that the tree is on the right fails the second point of our definition because there is a gap in the last level. Informally, you can think about a complete tree as packing its nodes as closely together as possible. This line of thinking will come into play when we code heaps later.

### When to Use Heaps?

Heaps are the most useful when attacking problems that require you to "partially sort" data. This usually takes form in problems that have us calculate the largest or smallest n numbers of a collection. For example: What if you were asked to find the largest 5 numbers in an array in linear time, O(n)? The fastest sorting algorithms are O(n logn), so none of those algorithms will be good enough. However, we can use a heap to solve this problem in linear time.

We'll analyze this in depth when we implement a heap in the next section!

One of the most common uses of a binary heap is to implement a "[priority queue](https://en.wikipedia.org/wiki/Priority_queue)". We learned before that a queue is a FIFO (First In, First Out) data structure. With a priority queue, items are removed from the queue based on a priority number. The priority number is used to place the items into the heap and pull them out in the correct priority order!

---

## Binary Heap Implementation

Now that we are familiar with the structure of a heap, let's implement one! What may be surprising is that the usual way to implement a heap is by simply using an array. That is, we won't need to create a node class with pointers. Instead, each index of the array will represent a node, with the root being at index 1. We'll avoid using index 0 of the array so our math works out nicely. From this point, we'll use the following rules to interpret the array as a heap:

- index `i` represents a node in the heap
- the left child of node `i` can be found at index `2 * i`
- the right child of code `i` can be found at index `2 * i + 1`

In other words, the array `[null, 42, 32, 24, 30, 9, 20, 18, 2, 7]` represents the heap below. Take a moment to analyze how the array indices work out to represent left and right children.

![max_heap](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/heaps/images/max_heap.png)

max_heap

Pretty clever math right? We can also describe the relationship from child to parent node. Say we are given a node at index `i` in the heap, then it's parent is found at index `Math.floor(i / 2)`.

It's useful to visualize heap algorithms using the classic image of nodes and edges, but we'll translate that into array index operations.

### Insert

What's a heap if we can't add data into it? We'll need a `insert` method that will add a new value into the heap without voiding our heap property. In our `MaxHeap`, the property states that a node must be greater than its children.

#### Visualizing our heap as a tree of nodes:

1.  We begin an insertion by adding the new node to the bottom leaf level of the heap, preferring to place the new node as far left in the level as possible. This ensures the tree remains complete.
2.  Placing the new node there may momentarily break our heap property, so we need to restore it by moving the node up the tree into a legal position. Restoring the heap property is a matter of continually swapping the new node with it's parent while it's parent contains a smaller value. We refer to this process as `siftUp`

#### Translating that into array operations:

1.  `push` the new value to the end of the array
2.  continually swap that value toward the front of the array (following our child-parent index rules) until heap property is restored

### DeleteMax

This is the "fetch" operation of a heap. Since we maintain heap property throughout, the root of the heap will always be the maximum value. We want to delete and return the root, whilst keeping the heap property.

#### Visualizing our heap as a tree of nodes:

1.  We begin the deletion by saving a reference to the root value (the max) to return later. We then locate the right most node of the bottom level and copy it's value into the root of the tree. We easily delete the duplicate node at the leaf level. This ensures the tree remains complete.
2.  Copying that value into the root may momentarily break our heap property, so we need to restore it by moving the node down the tree into a legal position. Restoring the heap property is a matter of continually swapping the node with the greater of it's two children. We refer to this process as `siftDown`.

#### Translating that into array operations:

1.  The root is at index 1, so save it to return later. The right most node of the bottom level would just be the very last element of the array. Copy the last element into index 1, and pop off the last element (since it now appears at the root).
2.  Continually swap the new root toward the back of the array (following our parent-child index rules) until heap property is restored. A node can have two children, so we should always prefer to swap with the greater child.

### Time Complexity Analysis

- insert: `O(log(n))`
- deleteMax: `O(log(n))`

Recall that our heap will be a complete/balanced tree. This means it's height is `log(n)` where `n` is the number of items. Both `insert` and `deleteMax` have a time complexity of `log(n)` because of `siftUp` and `siftDown` respectively. In worst case `insert`, we will have to `siftUp` a leaf all the way to the root of the tree. In the worst case `deleteMax`, we will have to `siftDown` the new root all the way down to the leaf level. In either case, we'll have to traverse the full height of the tree, `log(n)`.

#### Array Heapify Analysis

Now that we have established `O(log(n))` for a single insertion, let's analyze the time complexity for turning an array into a heap (we call this heapify, coming in the next project :)). The algorithm itself is simple, just perform an `insert` for every element. Since there are `n` elements and each insert requires `log(n)` time, our total complexity for heapify is `O(nlog(n))`… Or is it? There is actually a tighter bound on heapify. The proof requires some math that you won't find valuable in your job search, but do understand that the true time complexity of heapify is amortized `O(n)`. Amortized refers to the fact that our analysis is about performance over many insertions.

### Space Complexity Analysis

- `O(n)`, since we use a single array to store heap data.heap, let's implement one! What may be surprising is that the usual way to implement a heap is by simply using an array. That is, we won't need to create a node class with pointers. Instead, each index of the array will represent a node, with the root being at index 1. We'll avoid using index 0 of the array so our math works out nicely. From this point, we'll use the following rules to interpret the array as a heap:
- index `i` represents a node in the heap
- the left child of node `i` can be found at index `2 * i`
- the right child of code `i` can be found at index `2 * i + 1`

In other words, the array `[null, 42, 32, 24, 30, 9, 20, 18, 2, 7]` represents the heap below. Take a moment to analyze how the array indices work out to represent left and right children.

![max_heap](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/heaps/images/max_heap.png)

max_heap

Pretty clever math right? We can also describe the relationship from child to parent node. Say we are given a node at index `i` in the heap, then it's parent is found at index `Math.floor(i / 2)`.

It's useful to visualize heap algorithms using the classic image of nodes and edges, but we'll translate that into array index operations.

### Insert

What's a heap if we can't add data into it? We'll need a `insert` method that will add a new value into the heap without voiding our heap property. In our `MaxHeap`, the property states that a node must be greater than its children.

#### Visualizing our heap as a tree of nodes:

1.  We begin an insertion by adding the new node to the bottom leaf level of the heap, preferring to place the new node as far left in the level as possible. This ensures the tree remains complete.
2.  Placing the new node there may momentarily break our heap property, so we need to restore it by moving the node up the tree into a legal position. Restoring the heap property is a matter of continually swapping the new node with it's parent while it's parent contains a smaller value. We refer to this process as `siftUp`

#### Translating that into array operations:

1.  `push` the new value to the end of the array
2.  continually swap that value toward the front of the array (following our child-parent index rules) until heap property is restored

### DeleteMax

This is the "fetch" operation of a heap. Since we maintain heap property throughout, the root of the heap will always be the maximum value. We want to delete and return the root, whilst keeping the heap property.

#### Visualizing our heap as a tree of nodes:

1.  We begin the deletion by saving a reference to the root value (the max) to return later. We then locate the right most node of the bottom level and copy it's value into the root of the tree. We easily delete the duplicate node at the leaf level. This ensures the tree remains complete.
2.  Copying that value into the root may momentarily break our heap property, so we need to restore it by moving the node down the tree into a legal position. Restoring the heap property is a matter of continually swapping the node with the greater of it's two children. We refer to this process as `siftDown`.

#### Translating that into array operations:

1.  The root is at index 1, so save it to return later. The right most node of the bottom level would just be the very last element of the array. Copy the last element into index 1, and pop off the last element (since it now appears at the root).
2.  Continually swap the new root toward the back of the array (following our parent-child index rules) until heap property is restored. A node can have two children, so we should always prefer to swap with the greater child.

### Time Complexity Analysis

- insert: `O(log(n))`
- deleteMax: `O(log(n))`

Recall that our heap will be a complete/balanced tree. This means it's height is `log(n)` where `n` is the number of items. Both `insert` and `deleteMax` have a time complexity of `log(n)` because of `siftUp` and `siftDown` respectively. In worst case `insert`, we will have to `siftUp` a leaf all the way to the root of the tree. In the worst case `deleteMax`, we will have to `siftDown` the new root all the way down to the leaf level. In either case, we'll have to traverse the full height of the tree, `log(n)`.

#### Array Heapify Analysis

Now that we have established `O(log(n))` for a single insertion, let's analyze the time complexity for turning an array into a heap (we call this heapify, coming in the next project :)). The algorithm itself is simple, just perform an `insert` for every element. Since there are `n` elements and each insert requires `log(n)` time, our total complexity for heapify is `O(nlog(n))`… Or is it? There is actually a tighter bound on heapify. The proof requires some math that you won't find valuable in your job search, but do understand that the true time complexity of heapify is amortized `O(n)`. Amortized refers to the fact that our analysis is about performance over many insertions.

### Space Complexity Analysis

- `O(n)`, since we use a single array to store heap data.

---

## Heap Sort

We've emphasized heavily that heaps are a _partially ordered_ data structure. However, we can still leverage heaps in a sorting algorithm to end up with fully sorted array. The strategy is simple using our previous `MaxHeap` implementation:

1.  build the heap: `insert` all elements of the array into a `MaxHeap`
2.  construct the sorted list: continue to `deleteMax` until the heap is empty, every deletion will return the next element in decreasing order

The code is straightforward:

### Time Complexity Analysis: O(nlog(n))

- `n` is the size of the input array
- step-1 requires `O(n)` time as previously discussed
- step-2's while loop requires `n` steps in isolation and each `deleteMax` will require `log(n)` steps to restore max heap property (due to sifting-down). This means step 2 costs `O(nlog(n))`
- the total time complexity of the algorithm is `O(n + nlog(n)) = O(nlog(n))`

### Space Complexity Analysis:

So `heapSort` performs as fast as our other efficient sorting algorithms, but how does it fair in space complexity? Our implementation above requires an extra `O(n)` amount of space because the heap is maintained separately from the input array. If we can figure out a way to do all of these heap operations in-place we can get constant `O(1)` space! Let's work on this now.

## In-Place Heap Sort

The in-place algorithm will have the same 2 steps, but it will differ in the implementation details. Since we need to have all operations take place in a single array, we're going to have to denote two regions of the array. That is, we'll need a heap region and a sorted region. We begin by turning the entire region into a heap. Then we continually delete max to get the next element in increasing order. As the heap region shrinks, the sorted region will grow.

### Heapify

Let's focus on designing step-1 as an in-place algorithm. In other words, we'll need to reorder elements of the input array so they follow max heap property. This is usually refered to as `heapify`. Our `heapify` will use much of the same logic as `MaxHeap#siftDown`.

We weren't kidding when we said this would be similar to `MaxHeap#siftDown`. If you are not convinced, flip to the previous section and take a look! The few differences we want to emphasize are:

- Given a node at index `i`, it's left index is `2 * i + 1` and it's right index is `2 * i + 2`
  - Using these as our child index formulas will allow us to avoid using a placeholder element at index 0. The root of the heap will be at index 0.
- The parameter `n` represents the number of nodes in the heap
  - You may feel that `array.length` also represents the number of nodes in the heap. That is true, but only in step-1. Later we will need to dynamically state the size of the heap. Remember, we are trying to do this without creating any extra arrays. We'll need to separate the heap and sorted regions of the array and `n` will dictate the end of the heap.
- We created a separate `swap` helper function.
  - Nothing fancy here. Swapping will be valuable in step-2 of the algorithm as well, so we'll want to keep our code DRY (don't repeat yourself).

To correctly convert the input array into a heap, we'll need to call `heapify` on children nodes before their parents. This is easy to do, just call `heapify` on each element right-to-left in the array:

Nice! Now the elements of the array have been moved around to obey max heap property.

### Construct the Sorted Array

To put everything together, we'll need to continually "delete max" from our heap. From our previous lecture, we learned the steps for deletion are to swap the last node of the heap into the root and then sift the new root down to restore max heap property. We'll follow the same logic here, except we'll need to account for the sorted region of the array. The array will contain the heap region in the front and the sorted region at the rear:

You'll definitely want to watch the lecture that follows this reading to get a visual of how the array is divided into the heap and sorted regions.

### [CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/tree.md](CONTENT/DS-n-Algos/Recursion/My-Recursion-Prac-Website/Recur-website/tree.md)

.
├── AUX_MATERIALS
│   ├── recursion-flow.PNG
│   ├── right.html
│   ├── sandbox
│   │   ├── LOs.js
│   │   ├── example2.js
│   │   ├── examples.js
│   │   ├── exponent.js
│   │   ├── factorial.js
│   │   ├── fibonacci.js
│   │   ├── flatten.js
│   │   ├── memoize.js
│   │   ├── recursiveCallStack.js
│   │   ├── recursiveIsEven.js
│   │   ├── recursiveRange.js
│   │   ├── right.html
│   │   ├── sum.js
│   │   └── tabulate.js
│   ├── solved.pdf
│   └── unzolved.pdf
├── README.html
├── README.md
├── blank
│   ├── README.md
│   ├── SpecRunner.html
│   ├── lib
│   │   ├── chai.js
│   │   ├── css
│   │   │   ├── mocha.css
│   │   │   └── right.html
│   │   ├── jquery.js
│   │   ├── mocha.js
│   │   ├── right.html
│   │   ├── sinon.js
│   │   └── testSupport.js
│   ├── right.html
│   ├── spec
│   │   ├── part1.js
│   │   ├── part2.js
│   │   └── right.html
│   ├── src
│   │   ├── recursion.js
│   │   └── right.html
│   └── testing
│   ├── directory1.html
│   ├── left1.html
│   ├── prism.css
│   ├── prism.js
│   ├── right.html
│   ├── right1.html
│   └── starter.html
├── dir.md
├── directory.html
├── images
│   ├── BubbleSort.gif
│   ├── InsertionSort.gif
│   ├── MergeSort.gif
│   ├── QuickSort.gif
│   ├── SLL-diagram.png
│   ├── SelectionSort.gif
│   ├── array-in-memory.png
│   ├── fib_memoized.png
│   ├── fib_tree.png
│   ├── fib_tree_duplicates.png
│   ├── github-repo-menu-bar-wiki.png
│   └── right.html
├── index.html
├── left.html
├── my-solutions
│   ├── README.md
│   ├── SpecRunner.html
│   ├── complete.html
│   ├── lib
│   │   ├── chai.js
│   │   ├── css
│   │   │   ├── mocha.css
│   │   │   └── right.html
│   │   ├── jquery.js
│   │   ├── mocha.js
│   │   ├── right.html
│   │   ├── sinon.js
│   │   └── testSupport.js
│   ├── prism.css
│   ├── prism.js
│   ├── right.html
│   ├── spec
│   │   ├── part1.js
│   │   ├── part2.js
│   │   └── right.html
│   ├── src
│   │   ├── recursion.js
│   │   └── right.html
│   └── style.css
├── part-2
│   ├── README.md
│   ├── SpecRunner.html
│   ├── lib
│   │   ├── jasmine-1.0.0
│   │   │   ├── MIT.LICENSE
│   │   │   ├── jasmine-html.js
│   │   │   ├── jasmine.css
│   │   │   ├── jasmine.js
│   │   │   └── right.html
│   │   ├── right.html
│   │   └── underscore.js
│   ├── right.html
│   ├── solutions
│   │   ├── binarySearchTree.js
│   │   ├── hashTable.js
│   │   ├── hashTableHelpers.js
│   │   ├── linkedList.js
│   │   ├── right.html
│   │   ├── set.js
│   │   └── tree.js
│   ├── spec
│   │   ├── binarySearchTreeSpec.js
│   │   ├── hashTableSpec.js
│   │   ├── linkedListSpec.js
│   │   ├── right.html
│   │   ├── setSpec.js
│   │   └── treeSpec.js
│   └── src
│   ├── binarySearchTree.js
│   ├── hashTable.js
│   ├── hashTableHelpers.js
│   ├── linkedList.js
│   ├── right.html
│   ├── set.js
│   └── tree.js
├── prism.css
├── prism.js
├── right.html
├── style.css
├── tabs
│   ├── right.html
│   ├── tabs.html
│   ├── tabs2.html
│   └── template-files
│   ├── LmfE5ZMlM8QjZWyylbaJdeYzodpJKK3mlCt6sCr3jaw.js
│   ├── about-us-page-template.jpg
│   ├── ad_status.js
│   ├── agency-template.jpg
│   ├── analytics.js
│   ├── application-template.jpg
│   ├── article-template.jpg
│   ├── base.js
│   ├── best-bootstrap-templates-492x492.jpg
│   ├── blog.jpg
│   ├── bootstrap-basic-template-492x492.jpg
│   ├── bootstrap-ecommerce-template-492x492.jpg
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-landing-page-template-492x492.jpg
│   ├── bootstrap-layout-templates-492x492.jpg
│   ├── bootstrap-login-page-template-492x492.jpg
│   ├── bootstrap-one-page-template-492x492.jpg
│   ├── bootstrap-page-templates-492x492.jpg
│   ├── bootstrap-portfolio-template-600x600.jpg
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-responsive-website-templates-600x600.jpg
│   ├── bootstrap-sample-template-492x492.jpg
│   ├── bootstrap-single-page-template-492x492.jpg
│   ├── bootstrap-starter-template-492x492.jpg
│   ├── bootstrap-templates-examples-492x492.jpg
│   ├── bootstrap-theme-template-492x492.jpg
│   ├── bootstrap.min.css
│   ├── bootstrap.min.js
│   ├── business-template.jpg
│   ├── carousel-template.jpg
│   ├── cast_sender.js
│   ├── coming-soon-template.jpg
│   ├── contact-form-template-1.jpg
│   ├── corporate-template.jpg
│   ├── documentation-template.jpg
│   ├── download-bootstrap-template-492x492.jpg
│   ├── education-template.jpg
│   ├── embed.js
│   ├── error-template.jpg
│   ├── event-template.jpg
│   ├── f(1).txt
│   ├── f.txt
│   ├── faq-template.jpg
│   ├── fbevents.js
│   ├── fetch-polyfill.js
│   ├── footer-template.jpg
│   ├── form-templates.jpg
│   ├── free-html5-bootstrap-templates-600x600.jpg
│   ├── gallery-template.jpg
│   ├── google-maps-template.jpg
│   ├── grid-template.jpg
│   ├── gtm.js
│   ├── hGaQaBeUfGw.html
│   ├── header-template.jpg
│   ├── homepage-template.jpg
│   ├── hotel-template.jpg
│   ├── jarallax.min.js
│   ├── jquery.min.js
│   ├── jquery.touch-swipe.min.js
│   ├── landing-page-template.jpg
│   ├── list-template.jpg
│   ├── magazine-template.jpg
│   ├── map-template.jpg
│   ├── mbr-additional.css
│   ├── menu-template.jpg
│   ├── mobirise-icons.css
│   ├── multi-page-template.jpg
│   ├── navbar-template.jpg
│   ├── navigation-menu.jpg
│   ├── news-template.jpg
│   ├── one-page-1.jpg
│   ├── ootstrap-design-template-492x492.jpg
│   ├── parallax-scrolling-template.jpg
│   ├── parallax-template.jpg
│   ├── personal-website-template.jpg
│   ├── photo-gallery-template.jpg
│   ├── photography-template.jpg
│   ├── popper.min.js
│   ├── premium-bootstrap-templates-492x492.jpg
│   ├── profile-template.jpg
│   ├── real-estate-template.jpg
│   ├── registration-form-template.jpg
│   ├── remote.js
│   ├── restaurant-template.jpg
│   ├── right.html
│   ├── script.js
│   ├── script.min.js
│   ├── shopping-cart.jpg
│   ├── simple-bootstrap-template-492x492.jpg
│   ├── slider-template.jpg
│   ├── slider.jpg
│   ├── smooth-scroll.js
│   ├── social-network-template.jpg
│   ├── store-template.jpg
│   ├── style(1).css
│   ├── style.css
│   ├── tab-template.jpg
│   ├── table-template.jpg
│   ├── tether.min.css
│   ├── tether.min.js
│   ├── travel-template.jpg
│   ├── video-bg-template.jpg
│   ├── video-bg.jpg
│   ├── video-gallery-template.jpg
│   ├── video-template.jpg
│   ├── warren-wong-200912-2000x1304.jpg
│   ├── web-application-template.jpg
│   ├── wedding-template.jpg
│   ├── www-embed-player.js
│   └── www-player-webp.css
└── tree.md

22 directories, 227 files

</details><details> <summary>CONTENT/DS-n-Algos/SANDBOX/</summary>

### [CONTENT/DS-n-Algos/SANDBOX/LEETCODE.md](CONTENT/DS-n-Algos/SANDBOX/LEETCODE.md)

# Leetcode Patterns

## Table of Contents

- [Background](#background)
- [Preface](#preface)
- [Notes](#notes)
- [Question List](#question-list)
- [Solutions](#solutions)
- [Leetcode Discuss](#leetcode-discuss)
- [Tips to Consider](#tips-to-consider)
- [Suggestions](#suggestions)
- [Acknowledgements](#acknowledgements)

## Background

This repo is intended for any individual wanting to improve their problem
solving skills for software engineering interviews.

Problems are grouped under their respective subtopic, in order to focus on
repeatedly applying common patterns rather than randomly tackling questions.

All questions are available on [leetcode.com] with some requiring [leetcode premium].

## Preface

It is highly recommended to read chapters 1, 2, 3, 4, 8, and 10 of [Cracking The Coding Interview]
to familiarize yourself with the following data structures and their operations:

- Arrays
- Maps
- Linked Lists
- Queues
- Heaps
- Stacks
- Trees
- Graphs

In addition, you should have a good grasp on common algorithms such as:

- Breadth-first search
- Depth-first search
- Binary search
- Recursion

## Notes

[This pdf] contains useful information for the built-in data structures in Java.

Other useful methods to know include [`substring()`](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#substring-int-int-), [`toCharArray()`](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#toCharArray--), [`Math.max()`](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html#max-int-int-),
[`Math.min()`](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html#min-int-int-), and [`Arrays.fill()`](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#fill-int:A-int-).

## Question List

The entire question list can be found here:
https://seanprashad.com/leetcode-patterns/.

In addition to viewing the question list, companies that have previously asked
the question in the past 6 months (_as of January 2020_) will be listed. You can
also use the checkboxes to mark which questions you've completed!

## Solutions

Solutions written in Java can be found in the [solutions] branch.

## Leetcode Discuss

[Leetcode discuss] is an amazing resource and features previous interview
questions, as well as compensation and general career advice.

## Tips to Consider

```
If input array is sorted then
    - Binary search
    - Two pointers

If asked for all permutations/subsets then
    - Backtracking

If given a tree then
    - DFS
    - BFS

If given a graph then
    - DFS
    - BFS

If given a linked list then
    - Two pointers

If recursion is banned then
    - Stack

If asked for maximum/minumum subarray/subset/options then
    - Dynamic programming

If asked for top/least K items then
    - Heap

If asked for common strings then
    - Map
    - Trie

Else
    - Map/Set for O(1) time & O(n) space
    - Sort input for O(nlogn) time and O(1) space
```

## Suggestions

Think a question should/shouldn't be included? Wish there was another feature?
Feel free to open an [issue] with your suggestion!

## Acknowledgements

This list is heavily inspired from [Grokking the Coding Interview] with
additional problems extracted from the [Blind 75 list] and this medium article
on [14 patterns to ace any coding interview question].

[leetcode.com]: https://leetcode.com
[leetcode premium]: https://leetcode.com/subscribe/
[this pdf]: https://drive.google.com/open?id=1ao4ZA28zzBttDkuS6MLQI52gDs_CJZEm
[cracking the coding interview]: http://www.crackingthecodinginterview.com/contents.html
[here]: https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed
[topcoder]: https://www.topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/
[back to back swe youtube channel]: https://www.youtube.com/watch?v=jgiZlGzXMBw
[solutions]: https://github.com/SeanPrashad/leetcode-patterns/tree/solutions
[leetcode discuss]: https://leetcode.com/discuss/interview-question
[grokking the coding interview]: https://www.educative.io/courses/grokking-the-coding-interview
[issue]: https://github.com/SeanPrashad/leetcode-patterns/issues/new
[blind 75 list]: https://www.teamblind.com/article/New-Year-Gift---Curated-List-of-Top-100-LeetCode-Questions-to-Save-Your-Time-OaM1orEU?utm_source=share&utm_medium=ios_app

[14 patterns to ace any coding interview question]: https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed ---
Difficulty: Medium
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
"Math": https://leetcode.com/tag/math
Similar Questions:
"Multiply Strings": https://leetcode.com/problems/multiply-strings
"Add Binary": https://leetcode.com/problems/add-binary
"Sum of Two Integers": https://leetcode.com/problems/sum-of-two-integers
"Add Strings": https://leetcode.com/problems/add-strings
"Add Two Numbers II": https://leetcode.com/problems/add-two-numbers-ii

---

## [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)

### Problem:

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

### Solution:

Mind the last carry.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  const prehead = new ListNode()
  let p = prehead
  let carry = 0

  for (let p1 = l1, p2 = l2: p1 || p2 || carry > 0; p = p.next) {
    let sum = carry
    if (p1) {
      sum += p1.val
      p1 = p1.next
    }
    if (p2) {
      sum += p2.val
      p2 = p2.next
    }
    carry = sum / 10 | 0
    p.next = new ListNode(sum % 10)
  }

  return prehead.next
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
"Binary Search": https://leetcode.com/tag/binary-search
"Divide and Conquer": https://leetcode.com/tag/divide-and-conquer

---

## [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)

### Problem:

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:

```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

Example 2:

```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

### Solution:

O(log (m+n)) means half of the sequence is ruled out on each loop. So obviously we need binary search.

To do it on two sorted arrays, we need a formula to guide division.

Let `nums3` be the sorted array combining all the items in `nums1` and `nums2`.

If `nums2[j-1] <= nums1[i] <= nums2[j]`, then we know `nums1[i]` is at `num3[i+j]`. Same goes `nums1[i-1] <= nums2[j] <= nums1[i]`.

Let `k` be `⌊(m+n-1)/2⌋`. We need to find `nums3[k]` (and also `nums3[k+1]` if m+n is even).

Let `i + j = k`, if we find `nums2[j-1] <= nums1[i] <= nums2[j]` or `nums1[i-1] <= nums2[j] <= nums1[i]`, then we got `k`.

Otherwise, if `nums1[i] <= nums2[j]` then we know `nums1[i] < nums2[j-1]` (because we did not find `k`).

- There are `i` items before `nums1[i]`, and `j-1` items brefor `nums2[j-1]`, which means `nums1[0...i]` are before `nums3[i+j-1]`. So we now know `nums1[0...i] < nums3[k]`. They can be safely discarded.

- We Also have `nums1[i] < nums2[j]`, which means `nums2[j...n)` are after `nums3[i+j]`. So `nums2[j...n) > nums3[k]`.

Same goes `nums1[i-1] <= nums2[j] <= nums1[i]`.

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function (nums1, nums2) {
  const mid = ((nums1.length + nums2.length - 1) / 2) | 0;

  if ((nums1.length + nums2.length) % 2 === 0) {
    return (_find(nums1, nums2, mid) + _find(nums1, nums2, mid + 1)) / 2;
  }

  return _find(nums1, nums2, mid);
};

function _find(nums1, nums2, k) {
  if (nums1.length > nums2.length) {
    // So that the `i` below is always smalller than k,
    // which makes `j` always non-negative
    [nums1, nums2] = [nums2, nums1];
  }
  let s1 = 0;
  let s2 = 0;
  let e1 = nums1.length;
  let e2 = nums2.length;

  while (s1 < e1 || s2 < e2) {
    const i = s1 + (((e1 - s1) / 2) | 0);
    const j = k - i;
    const ni = i >= e1 ? Infinity : nums1[i];
    const nj = j >= e2 ? Infinity : nums2[j];
    const ni_1 = i <= 0 ? -Infinity : nums1[i - 1];
    const nj_1 = j <= 0 ? -Infinity : nums2[j - 1];

    if (nj_1 <= ni && ni <= nj) {
      return ni;
    }

    if (ni_1 <= nj && nj <= ni) {
      return nj;
    }

    if (ni <= nj) {
      s1 = i + 1;
      e2 = j;
    } else {
      s2 = j + 1;
      e1 = i;
    }
  }
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"String": https://leetcode.com/tag/string

---

## [6. ZigZag Conversion](https://leetcode.com/problems/zigzag-conversion/description/)

### Problem:

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

**Example 1:**

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

**Example 2:**

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
```

### Solution:

Squeeze the zigzag pattern horizontally to form a matrix. Now deal with the odd and even columns respectively.

For example let numRows be 5, if we list out the indecies:

```
row
 1    00    08    16
 2    01 07 09 15 17
 3    02 06 10 14 18
 4    03 05 11 13 19
 5    04    12    20
```

First calculate the matrix width:

```
pairs = floor( len(s) / (numRows + numRows - 2) )
width = pairs * 2 + ceil( (len(s) - pairs * (numRows + numRows - 2)) / numRows )
```

We can easily make a observation that the direction of odd and even columns and different.

Let the first column be index 0 and let i be the current position at column col.

We need to count the items between matrix[row][col] and matrix[row][col+1], exclusive.

```
next_i = i + (numRows - row) + (numRows - row), if col is even && 1 < row < numRows
next_i = i + row - 2 + row, if col is odd && 1 < row < numRows
```

If row == 1 or row == numRows, skip the odd columns.

```
next_i = i + numRows + (numRows - 2), if col is even && (row == 1 || row == numRows)
```

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function (s, numRows) {
  if (numRows <= 1) {
    return s;
  }

  const pairs = Math.floor(s.length / (numRows + numRows - 2));
  const width =
    pairs * 2 +
    Math.ceil((s.length - pairs * (numRows + numRows - 2)) / numRows);

  let result = "";

  for (let row = 1; row <= numRows; row++) {
    let i = row - 1;
    result += s[i] || "";
    for (let col = 0; col < width; col++) {
      if (row === 1 || row === numRows) {
        if (col % 2 === 0) {
          i += numRows + (numRows - 2);
        } else {
          continue;
        }
      } else {
        if (col % 2 === 0) {
          i += numRows - row + (numRows - row);
        } else {
          i += row - 2 + row;
        }
      }
      result += s[i] || "";
    }
  }

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Math": https://leetcode.com/tag/math
Similar Questions:
"String to Integer (atoi)": https://leetcode.com/problems/string-to-integer-atoi

---

## [7. Reverse Integer](https://leetcode.com/problems/reverse-integer/description/)

### Problem:

Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**

```
Input: 123
Output: 321
```

**Example 2:**

```
Input: -123
Output: -321
```

**Example 3:**

```
Input: 120
Output: 21
```

**Note:**
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

### Solution:

#### ONE

This is a JavaScript specific solution. It is esay to write but slow to run because it generates O(n) space. This could end up a huge array.

```javascript
/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
  let n = Math.abs(x).toString().split("").reverse().join("");
  if (n > 2147483647) {
    return 0;
  }
  return (x < 0 ? -1 : 1) * n;
};
```

#### TWO

Pure mathamatical solution.

```javascript
/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
  let result = 0;
  while (x) {
    result = result * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  return Math.abs(result) > 2147483647 ? 0 : result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Math": https://leetcode.com/tag/math
"String": https://leetcode.com/tag/string
Similar Questions:
"Reverse Integer": https://leetcode.com/problems/reverse-integer
"Valid Number": https://leetcode.com/problems/valid-number

---

## [8. String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/description/)

### Problem:

Implement `atoi` which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

**Note:**

Only the space character `' '` is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

**Example 1:**

```
Input: "42"
Output: 42
```

**Example 2:**

```
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
```

**Example 3:**

```
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
```

**Example 4:**

```
Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical
             digit or a +/- sign. Therefore no valid conversion could be performed.
```

**Example 5:**

```
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
```

### Solution:

#### ONE

```javascript
/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function (str) {
  return Math.min(2147483647, Math.max(-2147483648, parseInt(str))) || 0;
};
```

#### TWO

Looks like `Number()` is faster than `parseInt()`.

```javascript
/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function (str) {
  return Math.min(
    2147483647,
    Math.max(-2147483648, (/^ *[-+]?\d+/.exec(str) || [0])[0])
  );
};
```

#### THREE

General solution.

```javascript
/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function (str) {
  let sign = 1;
  let i = 0;

  while (i < str.length) {
    const cc = str.charCodeAt(i++);
    if (cc === 45) {
      // -
      sign = -1;
      break;
    } else if (cc === 43) {
      // +
      break;
    } else if (cc >= 48 && cc <= 57) {
      // 0-9
      i--;
      break;
    } else if (cc !== 32) {
      // space
      return 0;
    }
  }

  let result = 0;
  while (i < str.length) {
    const digit = str.charCodeAt(i++) - 48;
    if (digit < 0 || digit > 9) {
      break;
    }
    result = result * 10 + digit;
  }

  return Math.min(2147483647, Math.max(-2147483648, result * sign));
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Math": https://leetcode.com/tag/math
Similar Questions:
"Palindrome Linked List": https://leetcode.com/problems/palindrome-linked-list

---

## [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)

### Problem:

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

**Example 1:**

```
Input: 121
Output: true
```

**Example 2:**

```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Follow up:**

Coud you solve it without converting the integer to a string?

### Solution:

#### ONE

Easy to write but slow since it generates an array.

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  return x == String(x).split("").reverse().join("");
};
```

#### TWO

A bit faster.

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  const s = String(x);
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
};
```

#### THREE

General solution. Combining [7. Reverse Integer](./007.%20Reverse%20Integer.md).

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  return x === reverse(x);
};

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  let result = 0;
  while (x) {
    result = result * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  return result;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"String": https://leetcode.com/tag/string
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Wildcard Matching": https://leetcode.com/problems/wildcard-matching

---

## [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/description/)

### Problem:

Given an input string (`s`) and a pattern (`p`), implement regular expression matching with support for `'.'` and `'*'`.

```
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
```

The matching should cover the **entire** input string (not partial).

**Note:**

`s` could be empty and contains only lowercase letters `a-z`.
`p` could be empty and contains only lowercase letters `a-z`, and characters like `.` or `*`.

**Example 1:**

```
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**

```
Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**

```
Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

**Example 4:**

```
Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
```

**Example 5:**

```
Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
```

### Solution:

#### ONE

Cheating with real RegExp matching.

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function (s, p) {
  if (p[0] === "*") {
    return false;
  }
  return new RegExp(`^${p}$`).test(s);
};
```

#### TWO

Let f(i, j) be the matching result of s[0...i) and p[0...j).

```javascript
f(0, j) =
    j == 0 || // empty
    p[j-1] == '*' && f(i, j-2) // matches 0 time, which matches empty string

f(i, 0) = false // pattern must cover the entire input string

f(i, j) =
    if p[j-1] == '.'
        f(i-1, j-1)
    else if p[j-1] == '*'
        f(i, j-2) || // matches 0 time
        f(i-1, j) && (s[i-1] == p[j-2] || p[j-2] == '.') // matches 1 or multiple times
    else
        f(i-1, j-1) && s[i-1] == p[j-1]
```

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function (s, p) {
  if (p[0] === "*") {
    return false;
  }

  const dp = [[true]];

  for (let j = 2; j <= p.length; j++) {
    dp[0][j] = p[j - 1] === "*" && dp[0][j - 2];
  }

  for (let i = 1; i <= s.length; i++) {
    dp[i] = [];
    for (let j = 1; j <= p.length; j++) {
      switch (p[j - 1]) {
        case ".":
          dp[i][j] = dp[i - 1][j - 1];
          break;
        case "*":
          dp[i][j] =
            dp[i][j - 2] ||
            (dp[i - 1][j] && (p[j - 2] === "." || s[i - 1] === p[j - 2]));
          break;
        default:
          dp[i][j] = dp[i - 1][j - 1] && s[i - 1] === p[j - 1];
      }
    }
  }

  return !!dp[s.length][p.length];
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
"Trapping Rain Water": https://leetcode.com/problems/trapping-rain-water

---

## [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)

### Problem:

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

### Solution:

Greedy Algorithm.

If we look at the simple brute force approach, where we choose one point at a time and calculate all the possible areas with other points on the right, it is easy to make a observation that we are narrowing down the horizontal distance.

Greedy Algorithm can help us skip some of the conditions. It is base on a fact that the area between two columns are determined by the shorter one.

Let's say we have pointer `l` and `r` at the begin and end of a distance, and the area is `area(l, r)`, how should we narrow down the distance?

If `height[l] < height[r]`, we know that the height of the area will never be greater than `height[l]` if we keep `l`. Now if we get rid of `r`, the area can only get smaller since the distance is shorter, and the height is at most `height[l]`.

Here we conclude rule NO.1: Get rid of the smaller one.

What if `height[l] == height[r]`? It is safe to get rid of both. We do not need any of them to constrain the max height of the rest points.

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  let max = 0;
  for (let l = 0, r = height.length - 1; l < r; l++, r--) {
    max = Math.max(max, (r - l) * Math.min(height[l], height[r]));
    if (height[l] < height[r]) {
      r++;
    } else {
      l--;
    }
  }
  return max;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Math": https://leetcode.com/tag/math
"String": https://leetcode.com/tag/string
Similar Questions:
"Roman to Integer": https://leetcode.com/problems/roman-to-integer
"Integer to English Words": https://leetcode.com/problems/integer-to-english-words

---

## [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/description/)

### Problem:

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, two is written as `II` in Roman numeral, just two one's added together. Twelve is written as, `XII`, which is simply `X` + `II`. The number twenty seven is written as `XXVII`, which is `XX` + `V` + `II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

**Example 1:**

```
Input: 3
Output: "III"
```

**Example 2:**

```
Input: 4
Output: "IV"
```

**Example 3:**

```
Input: 9
Output: "IX"
```

**Example 4:**

```
Input: 58
Output: "LVIII"
Explanation: C = 100, L = 50, XXX = 30 and III = 3.
```

**Example 5:**

```
Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

### Solution:

Treat 4, 40, 400 and 9, 90, 900 specially.

```javascript
/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function (num) {
  const e = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const s = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";
  for (let i = 0; num; i++) {
    const d = e[i];
    const v = s[i];
    while (num >= d) {
      num -= d;
      result += v;
    }
  }
  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Math": https://leetcode.com/tag/math
"String": https://leetcode.com/tag/string
Similar Questions:
"Integer to Roman": https://leetcode.com/problems/integer-to-roman

---

## [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)

### Problem:

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, two is written as `II` in Roman numeral, just two one's added together. Twelve is written as, `XII`, which is simply `X` + `II`. The number twenty seven is written as `XXVII`, which is `XX` + `V` + `II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

**Example 1:**

```
Input: "III"
Output: 3
```

**Example 2:**

```
Input: "IV"
Output: 4
```

**Example 3:**

```
Input: "IX"
Output: 9
```

**Example 4:**

```
Input: "LVIII"
Output: 58
Explanation: C = 100, L = 50, XXX = 30 and III = 3.
```

**Example 5:**

```
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

### Solution:

Normally we just add up the digits, except when the digit is greater than its left (e.g. IV). In that case we need to fallback and remove the last digit then combine the two as new digit. That is why we subtract the last digit twice.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  const rdigit = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0, lastDigit = Infinity; i < s.length; i++) {
    let digit = rdigit[s[i]];
    result += digit <= lastDigit ? digit : digit - lastDigit * 2;
    lastDigit = digit;
  }
  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"String": https://leetcode.com/tag/string

---

## [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

### Problem:

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Note:**

All given inputs are in lowercase letters `a-z`.

### Solution:

#### ONE

JavaScript specific solution. Get the min len then narrow down the prefix.

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
  if (strs.length > 0) {
    let minLen = Math.min(...strs.map((s) => s.length));
    const anyStr = strs[0];
    while (minLen) {
      const prefix = anyStr.slice(0, minLen--);
      if (strs.every((s) => s.startsWith(prefix))) {
        return prefix;
      }
    }
  }
  return "";
};
```

#### TWO

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
  if (strs.length <= 0) {
    return "";
  }

  let i = 0;
  while (strs.every((s) => s[i] && s[i] === strs[0][i])) {
    i++;
  }
  return strs[0].slice(0, i);
};
```

#### THREE

General solution. Build up the prefix.

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length > 0) {
    for (let i = 0; ; i++) {
      const c = strs[0][i];
      if (!c) {
        return prefix;
      }
      for (let j = 0; j < strs.length; j++) {
        if (strs[j][i] !== c) {
          return prefix;
        }
      }
      prefix += c;
    }
  }
  return prefix;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
"Two Sum": https://leetcode.com/problems/two-sum
"3Sum Closest": https://leetcode.com/problems/3sum-closest
"4Sum": https://leetcode.com/problems/4sum
"3Sum Smaller": https://leetcode.com/problems/3sum-smaller

---

## [15. 3Sum](https://leetcode.com/problems/3sum/description/)

### Problem:

Given an array `nums` of _n_ integers, are there elements _a_, _b_, _c_ in `nums` such that _a_ + _b_ + _c_ = 0? Find all unique triplets in the array which gives the sum of zero.

**Note:**

The solution set must not contain duplicate triplets.

**Example:**

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

### Solution:

To simplify the problem, sort the nums first.

If `sorted[0] > 0` or `sorted[last] < 0`, return an empty set.

From i = `0` to `len(sorted) - 2`, pick `sorted[i]` as the first number of a possible triplet result.

Let `l = i + 1`, `r = len(sorted) - 1`, we want to narrow them down to enumerate all possible combinations.

- `l++` if `sorted[i] + sorted[l] + sorted[r] > 0`.
- `r--` if `sorted[i] + sorted[l] + sorted[r] < 0`.

Skip any duplicate number as we iterate to avoid duplicate triplets.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function (nums) {
  const len = nums.length;
  const sorted = nums.sort((a, b) => a - b);
  const result = [];

  if (sorted[0] > 0 || sorted[len - 1] < 0) {
    return result;
  }

  for (let i = 0; i < len - 2; i++) {
    if (sorted[i] > 0) {
      break;
    }

    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }

    const twoSum = 0 - sorted[i];

    for (let l = i + 1, r = len - 1; l < r; ) {
      const diff = twoSum - sorted[l] - sorted[r];
      if (diff > 0) {
        l++;
      } else if (diff < 0) {
        r--;
      } else {
        result.push([sorted[i], sorted[l], sorted[r]]);
        while (++l < r && sorted[l] === sorted[l - 1]);
        while (--r > l && sorted[r] === sorted[r + 1]);
      }
    }
  }

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
"3Sum": https://leetcode.com/problems/3sum
"3Sum Smaller": https://leetcode.com/problems/3sum-smaller

---

## [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/description/)

### Problem:

Given an array `nums` of _n_ integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.

**Example:**

```
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

### Solution:

Simplified version of [15. 3Sum](./015.%203Sum.md).

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function (nums, target) {
  const len = nums.length;
  const sorted = nums.sort((a, b) => a - b);

  let minDiff = Infinity;

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }

    const twoSum = target - sorted[i];

    for (let l = i + 1, r = len - 1; l < r; ) {
      const diff = twoSum - sorted[l] - sorted[r];
      if (diff === 0) {
        return target;
      } else {
        if (diff > 0) {
          l++;
        } else {
          r--;
        }

        if (Math.abs(diff) < Math.abs(minDiff)) {
          minDiff = diff;
        }
      }
    }
  }

  return target - minDiff;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"String": https://leetcode.com/tag/string
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Generate Parentheses": https://leetcode.com/problems/generate-parentheses
"Combination Sum": https://leetcode.com/problems/combination-sum
"Binary Watch": https://leetcode.com/problems/binary-watch

---

## [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)

### Problem:

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![200px-Telephone-keypad2](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

**Example:**

```
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**Note:**

Although the above answer is in lexicographical order, your answer could be in any order you want.

### Solution:

#### ONE

JavaScript specific optimization.

`Array.prototype.push` accepts arbitrary arguments which enables tighter loops.

Also, appending string is faster than prepending.

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (digits) {
  if (digits.length <= 0) {
    return [];
  }

  const letters = [
    ,
    ,
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];

  let result = [""];

  for (let i = 0; i < digits.length; i++) {
    const arr = letters[digits[i]];
    let newResult = [];
    arr.forEach((c) => newResult.push(...result.map((r) => r + c)));
    result = newResult;
  }

  return result;
};
```

#### TWO

General recursive DFS solution.

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (digits) {
  const letters = [
    ,
    ,
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const result = [];
  if (digits.length > 0) {
    dfs(digits, 0, "", letters, result);
  }
  return result;
};

function dfs(digits, idigit, path, letters, result) {
  if (idigit >= digits.length) {
    result.push(path);
    return;
  }
  const str = letters[digits[idigit]];
  for (let i = 0; i < str.length; i++) {
    dfs(digits, idigit + 1, path + str[i], letters, result);
  }
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Hash Table": https://leetcode.com/tag/hash-table
"Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
"Two Sum": https://leetcode.com/problems/two-sum
"3Sum": https://leetcode.com/problems/3sum
"4Sum II": https://leetcode.com/problems/4sum-ii

---

## [18. 4Sum](https://leetcode.com/problems/4sum/description/)

### Problem:

Given an array `nums` of _n_ integers and an integer `target`, are there elements _a_, _b_, _c_, and _d_ in `nums` such that _a_ + _b_ + _c_ + _d_ = `target`? Find all unique quadruplets in the array which gives the sum of `target`.

**Note:**

The solution set must not contain duplicate quadruplets.

**Example:**

```
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

### Solution:

Like [15. 3Sum](./015.%203Sum.md) and [16. 3Sum Closest](./016.%203Sum%20Closest.md). Wrap one more loop.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function (nums, target) {
  const len = nums.length;
  const sorted = nums.sort((a, b) => a - b);
  const result = [];

  for (let k = 0; k < len - 3; k++) {
    if (k > 0 && sorted[k] === sorted[k - 1]) {
      continue;
    }

    const threeSum = target - sorted[k];

    for (let i = k + 1; i < len - 2; i++) {
      if (i > k + 1 && sorted[i] === sorted[i - 1]) {
        continue;
      }

      const twoSum = threeSum - sorted[i];

      for (let l = i + 1, r = len - 1; l < r; ) {
        const diff = twoSum - sorted[l] - sorted[r];
        if (diff > 0) {
          l++;
        } else if (diff < 0) {
          r--;
        } else {
          result.push([sorted[k], sorted[i], sorted[l], sorted[r]]);
          while (++l < r && sorted[l] === sorted[l - 1]);
          while (--r > l && sorted[r] === sorted[r + 1]);
        }
      }
    }
  }

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
"Two Pointers": https://leetcode.com/tag/two-pointers

---

## [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

### Problem:

Given a linked list, remove the _n_-th node from the end of list and return its head.

**Example:**

```
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
```

**Note:**

Given _n_ will always be valid.

**Follow up:**

Could you do this in one pass?

### Solution:

Set a pointer `p1` for iterating, and `p2` which is `n` nodes behind, pointing at the (n+1)-th node from the end of list.

Boundaries that should be awared of:

- `p2` could be one node before `head`, which means the `head` should be removed.
- `p2` could be larger than the length of the list (Though the description says `n` will always be valid, we take care of it anyway).
- It should be `p1.next` touches the end rather than `p1` because we want `p1` pointing at the last node.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function (head, n) {
  let p1 = head;
  while (p1 && n--) {
    p1 = p1.next;
  }

  if (!p1) {
    return n ? head : head.next;
  }

  let p2 = head;
  while (p1.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  p2.next = p2.next.next;

  return head;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"String": https://leetcode.com/tag/string
"Stack": https://leetcode.com/tag/stack
Similar Questions:
"Generate Parentheses": https://leetcode.com/problems/generate-parentheses
"Longest Valid Parentheses": https://leetcode.com/problems/longest-valid-parentheses
"Remove Invalid Parentheses": https://leetcode.com/problems/remove-invalid-parentheses

---

## [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

### Problem:

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

**Example 1:**

```
Input: "()"
Output: true
```

**Example 2:**

```
Input: "()[]{}"
Output: true
```

**Example 3:**

```
Input: "(]"
Output: false
```

**Example 4:**

```
Input: "([)]"
Output: false
```

**Example 5:**

```
Input: "{[]}"
Output: true
```

### Solution:

Stack 101.

Whenever we meet a close bracket, we want to compare it to the last open bracket.

That is why we use stack to store open brackets: first in, last out.

And since there is only bracket characters, the last open bracket happens to be the last character.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  const stack = [];
  const pairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (const c of s) {
    const open = pairs[c];
    if (open) {
      if (stack.pop() !== open) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length <= 0;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
"Merge k Sorted Lists": https://leetcode.com/problems/merge-k-sorted-lists
"Merge Sorted Array": https://leetcode.com/problems/merge-sorted-array
"Sort List": https://leetcode.com/problems/sort-list
"Shortest Word Distance II": https://leetcode.com/problems/shortest-word-distance-ii

---

## [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)

### Problem:

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

### Solution:

Keep tracking the head of two lists and keep moving the pointer of smaller one to the next node.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function (l1, l2) {
  let prehead = { next: null };
  let p = prehead;
  let p1 = l1;
  let p2 = l2;
  while (p1 && p2) {
    let pSel;
    if (p1.val < p2.val) {
      pSel = p1;
      p1 = p1.next;
    } else {
      pSel = p2;
      p2 = p2.next;
    }
    p.next = pSel;
    p = pSel;
  }

  p.next = p1 || p2;

  return prehead.next;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"String": https://leetcode.com/tag/string
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Letter Combinations of a Phone Number": https://leetcode.com/problems/letter-combinations-of-a-phone-number
"Valid Parentheses": https://leetcode.com/problems/valid-parentheses

---

## [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/description/)

### Problem:

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

### Solution:

#### ONE

Recursive DFS backtracking.

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function (n) {
  const result = [];
  if (n > 0) {
    dfs(n, 0, 0, "", result);
  }
  return result;
};

function dfs(n, nopen, nclose, path, result) {
  if (path.length === n * 2) {
    result.push(path);
    return;
  }

  if (nopen < n) {
    dfs(n, nopen + 1, nclose, path + "(", result);
  }

  if (nclose < nopen) {
    dfs(n, nopen, nclose + 1, path + ")", result);
  }
}
```

#### TWO

BFS.

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function (n) {
  if (n <= 0) {
    return [];
  }

  const queue = [
    {
      path: "(",
      open: 1,
      close: 0,
    },
  ];

  while (true) {
    const { path, open, close } = queue.shift();
    if (open + close === n * 2) {
      queue.unshift({ path, open, close });
      break;
    }

    if (open < n) {
      queue.push({
        path: path + "(",
        open: open + 1,
        close,
      });
    }

    if (close < open) {
      queue.push({
        path: path + ")",
        open,
        close: close + 1,
      });
    }
  }

  return queue.map((x) => x.path);
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
"Divide and Conquer": https://leetcode.com/tag/divide-and-conquer
"Heap": https://leetcode.com/tag/heap
Similar Questions:
"Merge Two Sorted Lists": https://leetcode.com/problems/merge-two-sorted-lists
"Ugly Number II": https://leetcode.com/problems/ugly-number-ii

---

## [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/description/)

### Problem:

Merge _k_ sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

**Example:**

```
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
```

### Solution:

#### ONE

Extend the idea of [21. Merge Two Sorted Lists](./021.%20Merge%20Two%20Sorted%20Lists.md) and compare N items at a time.

This is slow as it reaches O(N^2).

#### TWO

Priority Queue. O(N \* log(K)).

Since JavaScript does not provide a standard built-in Priority Queue data structure, it is challenging to implement an efficient one barehanded.

#### THREE

Divide and conquer. Also O(N \* log(K)).

Divide N lists into ceil(N/2) pairs and merge your way up.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function (lists) {
  while (lists.length > 1) {
    lists.unshift(mergeTwoLists(lists.pop(), lists.pop()));
  }
  return lists[0] || [];
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  let prehead = { next: null };
  let p = prehead;
  let p1 = l1;
  let p2 = l2;
  while (p1 && p2) {
    let pSel;
    if (p1.val < p2.val) {
      pSel = p1;
      p1 = p1.next;
    } else {
      pSel = p2;
      p2 = p2.next;
    }
    p.next = pSel;
    p = pSel;
  }

  p.next = p1 || p2;

  return prehead.next;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
"Reverse Nodes in k-Group": https://leetcode.com/problems/reverse-nodes-in-k-group

---

## [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

### Problem:

Given a linked list, swap every two adjacent nodes and return its head.

**Example:**

```
Given 1->2->3->4, you should return the list as 2->1->4->3.
```

**Note:**

- Your algorithm should use only constant extra space.
- You may **not** modify the values in the list's nodes, only nodes itself may be changed.

### Solution:

1. Draw the nodes down on paper to reason about the relationships.
2. Pointing to every active node is an easy way to keep on track.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let swapPairs = function (head) {
  const prehead = { next: head };

  for (let p = prehead; p.next !== null && p.next.next !== null; ) {
    const p1 = p.next;
    const p2 = p1.next;
    p1.next = p2.next;
    p2.next = p1;
    p.next = p2;
    p = p1;
  }

  return prehead.next;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
"Swap Nodes in Pairs": https://leetcode.com/problems/swap-nodes-in-pairs

---

## [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/description/)

### Problem:

Given a linked list, reverse the nodes of a linked list _k_ at a time and return its modified list.

_k_ is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of _k_ then left-out nodes in the end should remain as it is.

**Example:**

Given this linked list: `1->2->3->4->5`

For _k_ = 2, you should return: `2->1->4->3->5`

For _k_ = 3, you should return: `3->2->1->4->5`

**Note:**

- Only constant extra memory is allowed.
- You may not alter the values in the list's nodes, only nodes itself may be changed.

### Solution:

1. Find the end node of a portion that needs to be reversed.
2. Get the next node of the end node.
3. Reverse the portion using the next node as edge(null) pointer.
4. Connect it back to the main linked list.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let reverseKGroup = function (head, k) {
  const prehead = { next: head };
  let p = prehead;
  while (true) {
    let n = k;
    let pEndNext = p.next;
    while (pEndNext && n) {
      pEndNext = pEndNext.next;
      n--;
    }

    if (n !== 0) {
      break;
    }

    const nextp = p.next; // The first node will be the last after reverse
    p.next = reverseLinkList(p.next, pEndNext);
    p = nextp;
  }

  return prehead.next;
};

function reverseLinkList(head, nullNode = null) {
  let prev = nullNode;
  let curr = head;
  while (curr !== nullNode) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
"Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
"Remove Element": https://leetcode.com/problems/remove-element
"Remove Duplicates from Sorted Array II": https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii

---

## [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

### Problem:

Given a sorted array _nums_, remove the duplicates [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) such that each element appear only _once_ and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array in-place** with O(1) extra memory.

**Example 1:**

```
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
```

**Example 2:**

```
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
```

**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by **reference**, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

### Solution:

The result array can only be shorter. That is why we can build the array in-place with the new length.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[len++] = nums[i];
    }
  }
  return len;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
"Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
"Remove Duplicates from Sorted Array": https://leetcode.com/problems/remove-duplicates-from-sorted-array
"Remove Linked List Elements": https://leetcode.com/problems/remove-linked-list-elements
"Move Zeroes": https://leetcode.com/problems/move-zeroes

---

## [27. Remove Element](https://leetcode.com/problems/remove-element/description/)

### Problem:

Given an array _nums_ and a value _val_, remove all instances of that value [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array in-place** with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

**Example 1:**

```
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
```

**Example 2:**

```
Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.
```

**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by **reference**, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

### Solution:

The order does not matter. So just take the last number to fill the vacancy.

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      nums[i--] = nums[--len];
    }
  }
  return len;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Math": https://leetcode.com/tag/math
"Binary Search": https://leetcode.com/tag/binary-search

---

## [29. Divide Two Integers](https://leetcode.com/problems/divide-two-integers/description/)

### Problem:

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing `dividend` by `divisor`.

The integer division should truncate toward zero.

**Example 1:**

```
Input: dividend = 10, divisor = 3
Output: 3
```

**Example 2:**

```
Input: dividend = 7, divisor = -3
Output: -2
```

**Note:**

- Both dividend and divisor will be 32-bit signed integers.
- The divisor will never be 0.
- Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

### Solution:

Every decimal number can be represented as `a0*2^0 + a1*2^1 + a2*2^2 + ... + an*2^n`.

Replace multiplication and division with binary shifting.

```javascript
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function (dividend, divisor) {
  if (
    divisor === 0 ||
    (divisor === -1 && dividend < -2147483647) ||
    dividend > 2147483647 ||
    dividend < -2147483648
  ) {
    return 2147483647;
  }

  const isNegative =
    (dividend < 0 && divisor >= 0) || (dividend >= 0 && divisor < 0);
  const pDividend = Math.abs(dividend);
  const pDivisor = Math.abs(divisor);

  if (dividend === 0 || pDividend < pDivisor) {
    return 0;
  }

  let doubling = pDivisor;
  let count = 1;
  while (doubling < pDividend && !(doubling & (1 << 30))) {
    doubling <<= 1;
    count <<= 1;
  }
  if (doubling > pDividend) {
    doubling >>>= 1;
    count >>>= 1;
  }

  const result = count + divide(pDividend - doubling, pDivisor);
  return isNegative ? -result : result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
Similar Questions:
"Permutations": https://leetcode.com/problems/permutations
"Permutations II": https://leetcode.com/problems/permutations-ii
"Permutation Sequence": https://leetcode.com/problems/permutation-sequence
"Palindrome Permutation II": https://leetcode.com/problems/palindrome-permutation-ii

---

## [31. Next Permutation](https://leetcode.com/problems/next-permutation/description/)

### Problem:

Implement **next permutation**, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be **in-place** and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

`1,2,3` → `1,3,2`  
`3,2,1` → `1,2,3`  
`1,1,5` → `1,5,1`

### Solution:

Observe a few longer examples and the pattern is self-evident.

Divide the list into two parts. The first half must be incremental and the second half must be decremental.

Reverse the second half and find the smallest number in it that is greater the last number of the first half.

Swap the two.

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function (nums) {
  const len = nums.length;
  if (len <= 1) {
    return;
  }

  for (let i = len - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      let t;
      for (let s = i, e = len - 1; s < e; s++, e--) {
        t = nums[s];
        nums[s] = nums[e];
        nums[e] = t;
      }

      let j = len - 1;
      while (nums[j] <= nums[i - 1]) {
        j--;
      }

      t = nums[j];
      nums[j] = nums[i - 1];
      nums[i - 1] = t;

      break;
    }
  }

  if (i === 0) {
    nums.reverse();
  }
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
"Search in Rotated Sorted Array II": https://leetcode.com/problems/search-in-rotated-sorted-array-ii
"Find Minimum in Rotated Sorted Array": https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

---

## [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)

### Problem:

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`).

You are given a target value to search. If found in the array return its index, otherwise return `-1`.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of *O*(log *n*).

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

### Solution:

Obviously the problem requires binary search.

The core idea of binary search is to pick the middle item and then decide to keep which half.

The precondition of it is the array must be sorted.

But take a closer look and we realize that only one of the two halves needs to be sorted. This is sufficient for us to know if the target is in that half. If not, then it must be in the other.

Whenever we choose a pivot, it must be in one of the two sorted parts of the rotated array.

- If the pivot is in the left part. We know that the begin of the left part to the pivot are sorted.
- Otherwise the pivot is in the right part. We know that the end of the right part to the pivot are sorted.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function (nums, target) {
  let s = 0;
  let e = nums.length - 1;

  while (s <= e) {
    const p = ((e + s) / 2) | 0;
    const pivot = nums[p];

    if (pivot === target) {
      return p;
    }

    if (pivot < nums[e]) {
      // right half is sorted
      if (target > pivot && target <= nums[e]) {
        // target is inside the right half
        s = p + 1;
      } else {
        e = p - 1;
      }
    } else {
      // left half is sorted
      if (target < pivot && target >= nums[s]) {
        // target is inside the left half
        e = p - 1;
      } else {
        s = p + 1;
      }
    }
  }

  return -1;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
"First Bad Version": https://leetcode.com/problems/first-bad-version

---

## [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

### Problem:

Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value.

Your algorithm's runtime complexity must be in the order of _O_(log _n_).

If the target is not found in the array, return `[-1, -1]`.

**Example 1:**

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

### Solution:

Implement two variations of binary search to get the first and last matching positions.

They are basically the same as simple binary search except when we got the match, we mark the index and keep moving forward.

If we want to get the first, we dump the right half. Vice versa.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function (nums, target) {
  let s = 0;
  let e = nums.length - 1;

  const first = searchFirst(nums, target, 0, nums.length - 1);

  if (first === -1) {
    return [-1, -1];
  }

  return [first, searchLast(nums, target, first, nums.length - 1)];
};

function searchFirst(nums, target, s, e) {
  let result = -1;

  while (s <= e) {
    const p = ((s + e) / 2) | 0;
    const diff = nums[p] - target;
    if (diff === 0) {
      result = p;
      e = p - 1;
    } else if (diff > 0) {
      e = p - 1;
    } else {
      s = s + 1;
    }
  }

  return result;
}

function searchLast(nums, target, s, e) {
  let result = -1;

  while (s <= e) {
    const p = ((s + e) / 2) | 0;
    const diff = nums[p] - target;
    if (diff === 0) {
      result = p;
      s = p + 1;
    } else if (diff > 0) {
      e = p - 1;
    } else {
      s = s + 1;
    }
  }

  return result;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
"Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
"First Bad Version": https://leetcode.com/problems/first-bad-version

---

## [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)

### Problem:

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

**Example 1:**

```
Input: [1,3,5,6], 5
Output: 2
```

**Example 2:**

```
Input: [1,3,5,6], 2
Output: 1
```

**Example 3:**

```
Input: [1,3,5,6], 7
Output: 4
```

**Example 4:**

```
Input: [1,3,5,6], 0
Output: 0
```

### Solution:

Same as simple binary search except it returns the start index when does not find a match.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
  let s = 0;
  let e = nums.length - 1;

  while (s <= e) {
    const p = ((s + e) / 2) | 0;
    const diff = nums[p] - target;
    if (diff === 0) {
      return p;
    } else if (diff < 0) {
      s = p + 1;
    } else {
      e = p - 1;
    }
  }

  return s;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Hash Table": https://leetcode.com/tag/hash-table
Similar Questions:
"Sudoku Solver": https://leetcode.com/problems/sudoku-solver

---

## [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/)

### Problem:

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the 9 `3x3` sub-boxes of the grid must contain the digits `1-9` without repetition.

![250px-Sudoku-by-L2G-20050714.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character `'.'`.

**Example 1:**

```
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
```

**Example 2:**

```
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.
- The given board contain only digits `1-9` and the character `'.'`.
- The given board size is always `9x9`.

### Solution:

Scan the board once.

```javascript
/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function (board) {
  if (!board || board.length !== 9) {
    return false;
  }

  const newArray = () => [];
  const col = board.map(newArray);
  const row = board.map(newArray);
  const sub = board.map(newArray);

  for (let r = 0; r < 9; r++) {
    if (board[r].length !== 9) {
      return false;
    }

    for (let c = 0; c < 9; c++) {
      const num = board[r][c];
      const subOffset = 3 * ((r / 3) | 0) + ((c / 3) | 0);
      if (num !== ".") {
        if (
          !(num >= 1 && num <= 9) ||
          row[r][num] ||
          col[c][num] ||
          sub[subOffset][num]
        ) {
          return false;
        }
        row[r][num] = true;
        col[c][num] = true;
        sub[subOffset][num] = true;
      }
    }
  }

  return true;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Hash Table": https://leetcode.com/tag/hash-table
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Valid Sudoku": https://leetcode.com/problems/valid-sudoku

---

## [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/description/)

### Problem:

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy **all of the following rules**:

1. Each of the digits `1-9` must occur exactly once in each row.
2. Each of the digits `1-9` must occur exactly once in each column.
3. Each of the the digits `1-9` must occur exactly once in each of the 9 `3x3` sub-boxes of the grid.

Empty cells are indicated by the character `'.'`.

![250px-Sudoku-by-L2G-20050714.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)  
A sudoku puzzle...

![250px-Sudoku-by-L2G-20050714_solution.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)  
...and its solution numbers marked in red.

**Note:**

- The given board contain only digits `1-9` and the character `'.'`.
- You may assume that the given Sudoku puzzle will have a single unique solution.
- The given board size is always `9x9`.

### Solution:

DFS + backtracking.

Just like [36. Valid Sudoku](./036.%20Valid%20Sudoku.md) but instead of validating the board with three tables, we use these three tables to get all the valid numbers at a position. This is super fast as it skips a lot of redundant comparisons.

Every time we reach a position, we pick a possible solution and move on to the next position, which is an identical problem.

If the next position fails, we come back and try the next possible solution of the current position.

If all possible solutions fail, we just dump the current position and go back to the last position.

```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let solveSudoku = function (board) {
  const newArray = () => [];
  const col = board.map(newArray);
  const row = board.map(newArray);
  const sub = board.map(newArray);

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = +board[r][c];
      if (num) {
        const subOffset = 3 * ((r / 3) | 0) + ((c / 3) | 0);
        row[r][num] = true;
        col[c][num] = true;
        sub[subOffset][num] = true;
      }
    }
  }

  dfs(board, col, row, sub, 0);
};

function dfs(board, col, row, sub, pos) {
  if (pos >= 81) {
    return true;
  }

  const r = (pos / 9) | 0;
  const c = pos % 9;

  if (board[r][c] !== ".") {
    return dfs(board, col, row, sub, pos + 1);
  }

  const subOffset = 3 * ((r / 3) | 0) + ((c / 3) | 0);

  for (let num = 1; num <= 9; num++) {
    if (!(row[r][num] || col[c][num] || sub[subOffset][num])) {
      row[r][num] = true;
      col[c][num] = true;
      sub[subOffset][num] = true;

      if (dfs(board, col, row, sub, pos + 1)) {
        board[r][c] = num + "";
        return true;
      } else {
        row[r][num] = false;
        col[c][num] = false;
        sub[subOffset][num] = false;
      }
    }
  }

  return false;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"String": https://leetcode.com/tag/string
Similar Questions:
"Encode and Decode Strings": https://leetcode.com/problems/encode-and-decode-strings
"String Compression": https://leetcode.com/problems/string-compression

---

## [38. Count and Say](https://leetcode.com/problems/count-and-say/description/)

### Problem:

The count-and-say sequence is the sequence of integers with the first five terms as following:

```
1.     1
2.     11
3.     21
4.     1211
5.     111221
```

`1` is read off as `"one 1"` or `11`.
`11` is read off as `"two 1s"` or `21`.
`21` is read off as `"one 2`, then `one 1"` or `1211`.

Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

```
Input: 1
Output: "1"
```

Example 2:

```
Input: 4
Output: "1211"
```

### Solution:

Just loop and grow the sequence.

#### ONE

JavaScript specific.

```javascript
/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function (n) {
  let num = "1";

  while (--n > 0) {
    num = num
      .match(/(\d)\1*/g)
      .map((x) => x.length + x[0])
      .join("");
  }

  return num;
};
```

#### TWO

General solution.

```javascript
/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function (n) {
  let num = "1";

  while (--n > 0) {
    let newNum = "";
    for (let i = 0, accu = 1; i < num.length; i++, accu++) {
      if (num[i] !== num[i + 1]) {
        newNum += accu + num[i];
        accu = 0;
      }
    }
    num = newNum;
  }

  return num;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Letter Combinations of a Phone Number": https://leetcode.com/problems/letter-combinations-of-a-phone-number
"Combination Sum II": https://leetcode.com/problems/combination-sum-ii
"Combinations": https://leetcode.com/problems/combinations
"Combination Sum III": https://leetcode.com/problems/combination-sum-iii
"Factor Combinations": https://leetcode.com/problems/factor-combinations
"Combination Sum IV": https://leetcode.com/problems/combination-sum-iv

---

## [39. Combination Sum](https://leetcode.com/problems/combination-sum/description/)

### Problem:

Given a **set** of candidate numbers (`candidates`) **(without duplicates)** and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

The **same** repeated number may be chosen from `candidates` unlimited number of times.

**Note:**

- All numbers (including `target`) will be positive integers.
- The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
```

**Example 2:**

```
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

### Solution:

DFS + Backtracking.

To prevent duplications, only loop the right side of the candidates.

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function (candidates, target) {
  return dfs(candidates, target, [], [], 0);
};

function dfs(candidates, target, result, path, start) {
  for (let i = start; i < candidates.length; i++) {
    const cand = candidates[i];

    if (cand > target) {
      continue;
    }

    path.push(cand);
    if (cand === target) {
      result.push(path.slice());
    } else {
      dfs(candidates, target - cand, result, path, i);
    }
    path.pop(cand);
  }

  return result;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Combination Sum": https://leetcode.com/problems/combination-sum

---

## [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/description/)

### Problem:

Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note:**

- All numbers (including `target`) will be positive integers.
- The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

**Example 2:**

```
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
```

### Solution:

Mostly the same as [39. Combination Sum](./039.%20Combination%20Sum.md).

Now the candidates might have duplicate numbers, so we need to sort it.

We can also safely return when number is larger than the target.

To prvent duplicate results, stop searching if the current number is same as the last.

Notice the number at `start` is immune by the rule because we assume that the current group of candidates begins at `start`.

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function (candidates, target) {
  return dfs(
    candidates.sort((a, b) => a - b),
    target,
    [],
    [],
    0
  );
};

function dfs(candidates, target, result, path, start) {
  for (let i = start; i < candidates.length; i++) {
    const cand = candidates[i];

    if (cand > target) {
      return result;
    }

    if (i > start && cand === candidates[i - 1]) {
      continue;
    }

    path.push(cand);
    if (cand === target) {
      result.push(path.slice());
    } else {
      dfs(candidates, target - cand, result, path, i + 1);
    }
    path.pop();
  }

  return result;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
Similar Questions:
"Missing Number": https://leetcode.com/problems/missing-number
"Find the Duplicate Number": https://leetcode.com/problems/find-the-duplicate-number
"Find All Numbers Disappeared in an Array": https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
"Couples Holding Hands": https://leetcode.com/problems/couples-holding-hands

---

## [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/description/)

### Problem:

Given an unsorted integer array, find the smallest missing positive integer.

**Example 1:**

```
Input: [1,2,0]
Output: 3
```

**Example 2:**

```
Input: [3,4,-1,1]
Output: 2
```

**Example 3:**

```
Input: [7,8,9,11,12]
Output: 1
```

**Note:**

Your algorithm should run in _O_(_n_) time and uses constant extra space.

### Solution:

The last requirement is why this problem is marked "hard". Though the solution feels like cheating: it modifies the array to mark numbers.

So the algorithm still requires _O_(_n_) space but _O_(_1_) **extra** space.

The core idea of the solution is, if the length of the array is n, then the smallest missing positive integer must be within [1, n+1].

Consider an edge-case scenario where the array is `[1,2,...,n]`. The smallest missing positive integer is `n+1`.

Now if one of these integers is missing in the array, that integer **is** the smallest missing positive integer.

If more than one are missing, pick the smallest.

So here we reuse the array and keep trying to put integer `k` into the slot indexed `k-1` (via swapping).

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function (nums) {
  const n = nums.length;

  for (let i = 1; i < n; i++) {
    while (nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      const t = nums[i];
      nums[i] = nums[t - 1];
      nums[t - 1] = t;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
"Two Pointers": https://leetcode.com/tag/two-pointers
"Stack": https://leetcode.com/tag/stack
Similar Questions:
"Container With Most Water": https://leetcode.com/problems/container-with-most-water
"Product of Array Except Self": https://leetcode.com/problems/product-of-array-except-self
"Trapping Rain Water II": https://leetcode.com/problems/trapping-rain-water-ii
"Pour Water": https://leetcode.com/problems/pour-water

---

## [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

### Problem:

Given _n_ non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

![rainwatertrap.png](http://www.leetcode.com/static/images/problemset/rainwatertrap.png)
The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. **Thanks Marcos** for contributing this image!

**Example:**

```
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

### Solution:

Well explained by Leetcode official: <https://leetcode.com/articles/trapping-rain-water/> .

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
let trap = function (height) {
  let i = 0;
  let j = height.length - 1;
  let lMax = 0;
  let rMax = 0;
  let result = 0;

  while (i < j) {
    const left = height[i];
    const right = height[j];
    if (left < right) {
      if (left < lMax) {
        result += lMax - left;
      } else {
        lMax = left;
      }
      i++;
    } else {
      if (right < rMax) {
        result += rMax - right;
      } else {
        rMax = right;
      }
      j--;
    }
  }

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Math": https://leetcode.com/tag/math
"String": https://leetcode.com/tag/string
Similar Questions:
"Add Two Numbers": https://leetcode.com/problems/add-two-numbers
"Plus One": https://leetcode.com/problems/plus-one
"Add Binary": https://leetcode.com/problems/add-binary
"Add Strings": https://leetcode.com/problems/add-strings

---

## [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/description/)

### Problem:

Given two non-negative integers `num1` and `num2` represented as strings, return the product of `num1` and `num2`, also represented as a string.

**Example 1:**

```
Input: num1 = "2", num2 = "3"
Output: "6"
```

**Example 2:**

```
Input: num1 = "123", num2 = "456"
Output: "56088"
```

**Note:**

1. The length of both `num1` and `num2` is < 110.
2. Both `num1` and `num2` contain only digits `0-9`.
3. Both `num1` and `num2` do not contain any leading zero, except the number 0 itself.
4. You **must not use any built-in BigInteger library** or **convert the inputs to integer** directly.

### Solution:

Same as we do multiplication on a paper.

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply = function (num1, num2) {
  const result = [];

  for (i = num1.length - 1; i >= 0; i--) {
    for (j = num2.length - 1; j >= 0; j--) {
      const sum = num1[i] * num2[j] + (result[i + j + 1] || 0);
      result[i + j] = ((sum / 10) | 0) + (result[i + j] || 0);
      result[i + j + 1] = sum % 10;
    }
  }

  return result.join("").replace(/^0+(?=[0-9])/, "");
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
"Greedy": https://leetcode.com/tag/greedy
Similar Questions:
"Jump Game": https://leetcode.com/problems/jump-game

---

## [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/description/)

### Problem:

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

**Example:**

```
Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Note:**

You can assume that you can always reach the last index.

### Solution:

Greedy. Always pick the one that would allow to jump to the rightest.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
let jump = function (nums) {
  const len = nums.length;
  let jump = 0;
  for (let l = 0, r = 1; r < len; jump++) {
    let rNext = r;
    for (let i = l; i < r; i++) {
      const rNextAtmp = i + nums[i] + 1;
      if (rNextAtmp > rNext) {
        rNext = rNextAtmp;
      }
    }
    l = r;
    r = rNext;
  }
  return jump;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Next Permutation": https://leetcode.com/problems/next-permutation
"Permutations II": https://leetcode.com/problems/permutations-ii
"Permutation Sequence": https://leetcode.com/problems/permutation-sequence
"Combinations": https://leetcode.com/problems/combinations

---

## [46. Permutations](https://leetcode.com/problems/permutations/description/)

### Problem:

Given a collection of **distinct** integers, return all possible permutations.

**Example:**

```
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

### Solution:

One position at a time, pick a number from the unused set and put it in that position (by swapping). Then move on to the next.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function (nums) {
  const result = [];
  _permute(nums, 0, result);
  return result;
};

function _permute(nums, start, result) {
  if (start === nums.length) {
    return result.push(nums.slice());
  }

  const begin = nums[start];
  for (let i = start; i < nums.length; i++) {
    const next = nums[i];

    nums[start] = next;
    nums[i] = begin;

    _permute(nums, start + 1, result);

    nums[start] = begin;
    nums[i] = next;
  }
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Next Permutation": https://leetcode.com/problems/next-permutation
"Permutations": https://leetcode.com/problems/permutations
"Palindrome Permutation II": https://leetcode.com/problems/palindrome-permutation-ii

---

## [47. Permutations II](https://leetcode.com/problems/permutations-ii/description/)

### Problem:

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

**Example:**

```
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

### Solution:

Same as [46. Permutations](./046.%20Permutations.md). To avoid duplication, when picking a number for a position, only pick the unused. Either sort the `nums` or use a set to mark.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permuteUnique = function (nums) {
  const result = [];
  _permuteUnique(nums, 0, result);
  return result;
};

function _permuteUnique(nums, start, result) {
  if (start === nums.length) {
    result.push(nums.slice());
  }

  const used = new Set();
  const begin = nums[start];
  for (let i = start; i < nums.length; i++) {
    const next = nums[i];

    if (used.has(next)) {
      continue;
    }

    used.add(next);

    nums[start] = next;
    nums[i] = begin;

    _permuteUnique(nums, start + 1, result);

    nums[start] = begin;
    nums[i] = next;
  }
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array

---

## [48. Rotate Image](https://leetcode.com/problems/rotate-image/description/)

### Problem:

You are given an _n_ x _n_ 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

**Note:**

You have to rotate the image [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm), which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example 1:**

```
Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

**Example 2:**

```
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

### Solution:

Outside-in. Rotate one square at a time.

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function (matrix) {
  if (!matrix || matrix.length <= 0) {
    return;
  }
  const width = matrix.length;
  const halfWidthFloor = Math.floor(width / 2);
  const halfWidthCeil = Math.ceil(width / 2);
  for (let i = 0; i < halfWidthFloor; i++) {
    const iend = width - 1 - i;
    for (let j = 0; j < halfWidthCeil; j++) {
      const jend = width - 1 - j;
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[jend][i];
      matrix[jend][i] = matrix[iend][jend];
      matrix[iend][jend] = matrix[j][iend];
      matrix[j][iend] = tmp;
    }
  }
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Hash Table": https://leetcode.com/tag/hash-table
"String": https://leetcode.com/tag/string
Similar Questions:
"Valid Anagram": https://leetcode.com/problems/valid-anagram
"Group Shifted Strings": https://leetcode.com/problems/group-shifted-strings

---

## [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

### Problem:

Given an array of strings, group anagrams together.

**Example:**

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

**Note:**

- All inputs will be in lowercase.
- The order of your output does not matter.

### Solution:

It's all about hashing the words.

#### ONE

Sort each word to get the key.

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
  let result = {};
  for (let i = 0; i < strs.length; i++) {
    const hash = strs[i].split("").sort().join("");
    result[hash] = result[hash] || [];
    result[hash].push(strs[i]);
  }
  return Object.values(result);
};
```

#### TWO

Use the product of prime numbers to generate unique keys.

```javascript
const prime = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101,
];

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
  const result = {};
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    let hash = 1;
    for (let k = 0; k < word.length; k++) {
      hash *= prime[word.charCodeAt(k) - 97];
    }
    result[hash] = result[hash] || [];
    result[hash].push(word);
  }
  return Object.values(result);
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Math": https://leetcode.com/tag/math
"Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
"Sqrt(x)": https://leetcode.com/problems/sqrtx
"Super Pow": https://leetcode.com/problems/super-pow

---

## [50. Pow(x, n)](https://leetcode.com/problems/powx-n/description/)

### Problem:

Implement [pow(_x_, _n_)](http://www.cplusplus.com/reference/valarray/pow/), which calculates *x* raised to the power _n_ (xn).

**Example 1:**

```
Input: 2.00000, 10
Output: 1024.00000
```

**Example 2:**

```
Input: 2.10000, 3
Output: 9.26100
```

**Example 3:**

```
Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
```

**Note:**

- -100.0 < _x_ < 100.0
- _n_ is a 32-bit signed integer, within the range [−231, 231 − 1]

### Solution:

```
x^n = x^(n/2) * x^(n/2), if n is even
x^n = x^((n-1)/2) * x^((n-1)/2) * x, if n is odd
```

Corner cases:

- n == 0
- n < 0

Note here we can not use any bitwise operator, `n = -2^31` might overflow.

```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  if (n === -1) {
    return 1 / x;
  }
  if (n % 2 === 0) {
    const res = myPow(x, n / 2);
    return res * res;
  }
  const res = myPow(x, (n - 1) / 2);
  return x * res * res;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"N-Queens II": https://leetcode.com/problems/n-queens-ii

---

## [51. N-Queens](https://leetcode.com/problems/n-queens/description/)

### Problem:

The _n_-queens puzzle is the problem of placing _n_ queens on an *n*×*n* chessboard such that no two queens attack each other.

![8-queens.png](https://leetcode.com/static/images/problemset/8-queens.png)

Given an integer _n_, return all distinct solutions to the _n_-queens puzzle.

Each solution contains a distinct board configuration of the _n_-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space respectively.

**Example:**

```
Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
```

### Solution:

Allocate a `n`-length array `queens`. Each item represents a queen coordinate on the borad. Let index `i` be the row index, and `queens[i]` be the column index (or vice versa).

Now use the permutation algorithm from [46. Permutations](./046.%20Permutations.md) to generate all possible queen positions, then test for diagonal.

#### ONE

```javascript
/**
 * @param {number} n
 * @return {string[][]}
 */
let solveNQueens = function (n) {
  const result = [];
  const queens = [...new Array(n)].map((_, i) => i);
  _solveNQueens(queens, 0, result);
  return result;
};

function _solveNQueens(queens, iStart, result) {
  if (iStart === queens.length) {
    for (let i = 0; i < queens.length; i += 1) {
      for (let j = i + 1; j < queens.length; j += 1) {
        if (Math.abs(i - j) === Math.abs(queens[i] - queens[j])) {
          return;
        }
      }
    }
    return result.push(_genBoard(queens));
  }

  const start = queens[iStart];
  for (let i = iStart; i < queens.length; i++) {
    const next = queens[i];

    queens[iStart] = next;
    queens[i] = start;

    _solveNQueens(queens, iStart + 1, result);

    queens[iStart] = start;
    queens[i] = next;
  }
}

function _genBoard(queens) {
  const board = [];
  for (let i = 0; i < queens.length; i++) {
    let row = "";
    for (let j = 0; j < queens.length; j++) {
      row += queens[i] === j ? "Q" : ".";
    }
    board.push(row);
  }
  return board;
}
```

This is slow because we test diagonal in the end. We can do a tree pruning by moving it right before diving into the next recursion.

#### TWO

```javascript
/**
 * @param {number} n
 * @return {string[][]}
 */
let solveNQueens = function (n) {
  const result = [];
  const queens = [...new Array(n)].map((_, i) => i);
  _solveNQueens(queens, 0, result);
  return result;
};

function _solveNQueens(queens, iStart, result) {
  if (iStart === queens.length) {
    return result.push(_genBoard(queens));
  }

  const start = queens[iStart];
  for (let i = iStart; i < queens.length; i++) {
    const next = queens[i];

    queens[iStart] = next;
    queens[i] = start;

    if (_testDiagonal(queens, iStart)) {
      _solveNQueens(queens, iStart + 1, result);
    }

    queens[iStart] = start;
    queens[i] = next;
  }
}

function _testDiagonal(queens, iStart) {
  for (let i = 0; i < iStart; i++) {
    if (Math.abs(queens[iStart] - queens[i]) === iStart - i) {
      return false;
    }
  }
  return true;
}

function _genBoard(queens) {
  const board = [];
  for (let i = 0; i < queens.length; i++) {
    let row = "";
    for (let j = 0; j < queens.length; j++) {
      row += queens[i] === j ? "Q" : ".";
    }
    board.push(row);
  }
  return board;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"N-Queens": https://leetcode.com/problems/n-queens

---

## [52. N-Queens II](https://leetcode.com/problems/n-queens-ii/description/)

### Problem:

The _n_-queens puzzle is the problem of placing _n_ queens on an *n*×*n* chessboard such that no two queens attack each other.

![8-queens.png](https://leetcode.com/static/images/problemset/8-queens.png)

Given an integer *n*, return the number of distinct solutions to the *n*-queens puzzle.

**Example:**

```
Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
```

### Solution:

Just modify [51. N-Queens](051.%20N-Queens.md).

```javascript
/**
 * @param {number} n
 * @return {string[][]}
 */
let totalNQueens = function (n) {
  return _totalNQueens(
    [...new Array(n)].map((_, i) => i),
    0
  );
};

function _totalNQueens(queens, iStart, result) {
  if (iStart === queens.length) {
    return 1;
  }

  let count = 0;

  const start = queens[iStart];
  for (let i = iStart; i < queens.length; i++) {
    const next = queens[i];

    queens[iStart] = next;
    queens[i] = start;

    if (_testDiagonal(queens, iStart)) {
      count += _totalNQueens(queens, iStart + 1, result);
    }

    queens[iStart] = start;
    queens[i] = next;
  }

  return count;
}

function _testDiagonal(queens, iStart) {
  for (let i = 0; i < iStart; i++) {
    if (Math.abs(queens[iStart] - queens[i]) === iStart - i) {
      return false;
    }
  }
  return true;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
"Divide and Conquer": https://leetcode.com/tag/divide-and-conquer
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
"Best Time to Buy and Sell Stock": https://leetcode.com/problems/best-time-to-buy-and-sell-stock
"Maximum Product Subarray": https://leetcode.com/problems/maximum-product-subarray
"Degree of an Array": https://leetcode.com/problems/degree-of-an-array

---

## [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)

### Problem:

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example:**

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

**Follow up:**

If you have figured out the O(_n_) solution, try coding another solution using the divide and conquer approach, which is more subtle.

### Solution:

DP.

Define `f(i)` to be the largest sum of a contiguous subarray that ends with `nums[i]`.

If `f(i-1)` is negative, then `nums[i]` must be greater than `f(i-1) + nums[i]`.

```
f(0) = nums[0]
f(i) = max( f(i-1), 0 ) + nums[i]
```

Then return the largest one.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  const len = nums.length;
  if (len <= 0) {
    return 0;
  }
  const dp = [nums[0]];
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i];
  }
  return Math.max(...dp);
};
```

We can also compress the dp array:

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  let dp = nums[0];
  let max = dp || 0;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, (dp = Math.max(dp, 0) + nums[i]));
  }
  return max;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
Similar Questions:
"Spiral Matrix II": https://leetcode.com/problems/spiral-matrix-ii

---

## [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/description/)

### Problem:

Given a matrix of _m_ x _n_ elements (_m_ rows, _n_ columns), return all elements of the matrix in spiral order.

**Example 1:**

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
```

**Example 2:**

```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

### Solution:

Loop outside-in. Break each cycle into four stages. Note that the last two stages need at least two rows/columns.

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function (matrix) {
  const result = [];
  const height = matrix.length;
  if (height <= 1) {
    return matrix[0] || result;
  }
  const width = matrix[0].length;
  if (width <= 0) {
    return result;
  }

  const end = ((Math.min(width, height) + 1) / 2) | 0;
  for (let start = 0; start < end; start++) {
    const rowEnd = height - start - 1;
    const colEnd = width - start - 1;
    for (let col = start; col <= colEnd; col++) {
      result.push(matrix[start][col]);
    }
    for (let row = start + 1; row <= rowEnd; row++) {
      result.push(matrix[row][colEnd]);
    }
    if (rowEnd > start) {
      for (let col = colEnd - 1; col >= start; col--) {
        result.push(matrix[rowEnd][col]);
      }
    }
    if (colEnd > start) {
      for (let row = rowEnd - 1; row > start; row--) {
        result.push(matrix[row][start]);
      }
    }
  }
  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Greedy": https://leetcode.com/tag/greedy
Similar Questions:
"Jump Game II": https://leetcode.com/problems/jump-game-ii

---

## [55. Jump Game](https://leetcode.com/problems/jump-game/description/)

### Problem:

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

**Example 1:**

```
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```

### Solution:

#### ONE

See [45. Jump Game II](./045.%20Jump%20Game%20II.md). If the range does not expand at some point, we know it is stuck.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function (nums) {
  for (let l = 0, r = 1; r < nums.length; ) {
    let rNext = r;
    for (let i = l; i < r; i++) {
      const rNextAtmp = i + nums[i] + 1;
      if (rNextAtmp > rNext) {
        rNext = rNextAtmp;
      }
    }
    if (rNext <= r) {
      return false;
    }
    l = r;
    r = rNext;
  }
  return true;
};
```

#### TWO

If we view it backward, and if the range of `nums[n-2]` covers `nums[n-1]`, then we can safely make `n-2` the new destination point, and so on.

If `nums[0]` can cover the last destination point, it is good.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function (nums) {
  let des = nums.length - 1;
  for (let i = des - 1; i > 0; i--) {
    if (nums[i] + i >= des) {
      des = i;
    }
  }
  return nums[0] >= des;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Sort": https://leetcode.com/tag/sort
Similar Questions:
"Insert Interval": https://leetcode.com/problems/insert-interval
"Meeting Rooms": https://leetcode.com/problems/meeting-rooms
"Meeting Rooms II": https://leetcode.com/problems/meeting-rooms-ii
"Teemo Attacking": https://leetcode.com/problems/teemo-attacking
"Add Bold Tag in String": https://leetcode.com/problems/add-bold-tag-in-string
"Range Module": https://leetcode.com/problems/range-module
"Employee Free Time": https://leetcode.com/problems/employee-free-time
"Partition Labels": https://leetcode.com/problems/partition-labels

---

## [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/description/)

### Problem:

Given a collection of intervals, merge all overlapping intervals.

**Example 1:**

```
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

**Example 2:**

```
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
```

### Solution:

Sort then merge.

```javascript
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
let merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a.start - b.start || a.end - b.end);
  let last = new Interval(intervals[0].start, intervals[0].end);
  const result = [last];
  for (let i = 1; i < intervals.length; i++) {
    const { start, end } = intervals[i];
    if (start > last.end) {
      last = new Interval(start, end);
      result.push(last);
    } else if (end > last.end) {
      last.end = end;
    }
  }
  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
"Sort": https://leetcode.com/tag/sort
Similar Questions:
"Merge Intervals": https://leetcode.com/problems/merge-intervals
"Range Module": https://leetcode.com/problems/range-module

---

## [57. Insert Interval](https://leetcode.com/problems/insert-interval/description/)

### Problem:

Given a set of _non-overlapping_ intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

**Example 1:**

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:**

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

### Solution:

The logic of the solution is pretty straight forward. Just need to carefully think through all the edge cases. It is better to choose readability over performance.

```javascript
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
let insert = function (intervals, newInterval) {
  const result = [];
  const p = new Interval(newInterval.start, newInterval.end);
  for (let i = 0; i < intervals.length; i++) {
    const { start, end } = intervals[i];
    if (start > p.end) {
      break;
    }

    if (end < p.start) {
      result.push(intervals[i]);
      continue;
    }

    if (start < p.start) {
      p.start = start;
    }

    if (end > p.end) {
      p.end = end;
    }
  }
  return [...result, p, ...intervals.slice(i)];
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"String": https://leetcode.com/tag/string

---

## [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)

### Problem:

Given a string s consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

```
Input: "Hello World"
Output: 5
```

### Solution:

JavaScript specific solutions:

#### ONE

```javascript
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
  return (/\w+$/.exec(s) || [""])[0].length;
};
```

#### TWO

Super fast. `split` will guarantee that there is at least one item in the resulted array.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};
```

#### THREE

General solution.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
  let end = s.length - 1;
  while (end >= 0 && s[end] === " ") {
    end--;
  }

  let start = end;
  while (start >= 0 && s[start] !== " ") {
    start--;
  }

  return end - start;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
Similar Questions:
"Spiral Matrix": https://leetcode.com/problems/spiral-matrix

---

## [59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/description/)

### Problem:

Given a positive integer _n_, generate a square matrix filled with elements from 1 to *n*2 in spiral order.

**Example:**

```
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

### Solution:

Straight-forward.

```javascript
/**
 * @param {number} n
 * @return {number[][]}
 */
let generateMatrix = function (n) {
  const matrix = [...new Array(n)].map(() => []);
  const halfN = ((n + 1) / 2) | 0;
  let count = 1;
  for (let start = 0; start < halfN; start++) {
    const end = n - start - 1;
    for (let col = start; col <= end; col++) {
      matrix[start][col] = count++;
    }
    for (let row = start + 1; row <= end; row++) {
      matrix[row][end] = count++;
    }
    for (let col = end - 1; col >= start; col--) {
      matrix[end][col] = count++;
    }
    for (let row = end - 1; row > start; row--) {
      matrix[row][start] = count++;
    }
  }
  return matrix;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Math": https://leetcode.com/tag/math
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Next Permutation": https://leetcode.com/problems/next-permutation
"Permutations": https://leetcode.com/problems/permutations

---

## [60. Permutation Sequence](https://leetcode.com/problems/permutation-sequence/description/)

### Problem:

The set `[1,2,3,...,*n*]` contains a total of _n_! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for _n_ = 3:

1. `"123"`
2. `"132"`
3. `"213"`
4. `"231"`
5. `"312"`
6. `"321"`

Given _n_ and _k_, return the *k*th permutation sequence.

**Note:**

- Given _n_ will be between 1 and 9 inclusive.
- Given *k* will be between 1 and _n_! inclusive.

**Example 1:**

```
Input: n = 3, k = 3
Output: "213"
```

**Example 2:**

```
Input: n = 4, k = 9
Output: "2314"
```

### Solution:

The order of the sequence is fixed hence can be calculated. We can view the process as picking digits from a sorted set `[1...n]`.

Each digit appears `(n-1)!` times in `result[0]`. And for a fixed `result[0]` each digit appears `(n-2)!` times in `result[1]`. So on.

We also need `k--` to convert `k` into index so that `k <= (n-1)!` maps `0` (and get `1` from the set).

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
let getPermutation = function (n, k) {
  const digits = [];
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    digits.push(i);
    factorial *= i;
  }

  k--;

  let result = "";
  while (n > 0) {
    factorial /= n;
    result += digits.splice((k / factorial) | 0, 1)[0];
    k %= factorial;
    n--;
  }

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
"Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
"Rotate Array": https://leetcode.com/problems/rotate-array
"Split Linked List in Parts": https://leetcode.com/problems/split-linked-list-in-parts

---

## [61. Rotate List](https://leetcode.com/problems/rotate-list/description/)

### Problem:

Given a linked list, rotate the list to the right by _k_ places, where _k_ is non-negative.

**Example 1:**

```
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
```

**Example 2:**

```
Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
```

### Solution:

Classic two-pointers chasing except the `k` could be larger than the length of this list.

We first attempt to locate the right pointer while also recording the length of the list.

If we hit the end of list and still do not have the right pointer, we know `k` is larger than the length.

Locate the right pointer again with `k % len`.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = function (head, k) {
  if (head === null || k <= 0) {
    return head;
  }

  let right = head;
  let len = 0;
  let kk = k;
  while (right !== null && kk > 0) {
    right = right.next;
    kk--;
    len++;
  }

  if (kk > 0) {
    right = head;
    kk = k % len;
    while (kk--) {
      right = right.next;
    }
  }

  if (right !== null) {
    let left = head;
    while (right.next !== null) {
      left = left.next;
      right = right.next;
    }
    right.next = head;
    head = left.next;
    left.next = null;
  }

  return head;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
"Unique Paths II": https://leetcode.com/problems/unique-paths-ii
"Minimum Path Sum": https://leetcode.com/problems/minimum-path-sum
"Dungeon Game": https://leetcode.com/problems/dungeon-game

---

## [62. Unique Paths](https://leetcode.com/problems/unique-paths/description/)

### Problem:

A robot is located at the top-left corner of a _m_ x _n_ grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![robot_maze.png](https://leetcode.com/static/images/problemset/robot_maze.png)

Above is a 7 x 3 grid. How many possible unique paths are there?

**Note:** _m_ and _n_ will be at most 100.

**Example 1:**

```
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
```

**Example 2:**

```
Input: m = 7, n = 3
Output: 28
```

### Solution:

DP.

Define `f(i, j)` to be the number of total unique paths from `(0, 0)` to `(i, j)`.

```
f(i, 0) = 1
f(0, j) = 1
f(i, j) = f(i-1, j) + f(i, j-1)
```

Only two previous states are dependant. Use dynamic array to reduce memory allocation.

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let uniquePaths = function (m, n) {
  const dp = new Array(m).fill(1);
  while (--n > 0) {
    for (let i = 1; i < m; i++) {
      dp[i] += dp[i - 1];
    }
  }
  return dp[m - 1] || 1;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
"Unique Paths": https://leetcode.com/problems/unique-paths
"Dungeon Game": https://leetcode.com/problems/dungeon-game
"Cherry Pickup": https://leetcode.com/problems/cherry-pickup

---

## [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/description/)

### Problem:

Given a _m_ x _n_ grid filled with non-negative numbers, find a path from top left to bottom right which _minimizes_ the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.

**Example:**

```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```

### Solution:

Define `f(i, j)` to be the min sum from `(0, 0)` to `(i, j)`.

```
f(0, 0) = grid[0][0]
f(0, j) = f(0, j-1) + grid[0][j], j > 0
f(i, 0) = f(i-1, 0) + grid[i][0], i > 0
f(i, j) = min( f(i-1, j), f(i, j-1) ) + grid[i][j], j > 0 && i > 0
```

Only two previous states are dependant. Use dynamic array to reduce memory allocation.

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum = function (grid) {
  const height = grid.length;
  if (height <= 0) {
    return 0;
  }
  const width = grid[0].length;
  if (width <= 0) {
    return 0;
  }

  const dp = new Array(width).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < height; i++) {
    dp[0] += grid[i][0];
    for (let j = 1; j < width; j++) {
      dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
    }
  }

  return dp[width - 1] || 0;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Math": https://leetcode.com/tag/math
"String": https://leetcode.com/tag/string
Similar Questions:
"String to Integer (atoi)": https://leetcode.com/problems/string-to-integer-atoi

---

## [65. Valid Number](https://leetcode.com/problems/valid-number/description/)

### Problem:

Validate if a given string is numeric.

Some examples:  
`"0"` => `true`  
`" 0.1 "` => `true`  
`"abc"` => `false`  
`"1 a"` => `false`  
`"2e10"` => `true`

**Note:** It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.

**Update (2015-02-10):**
The signature of the `C++` function had been updated. If you still see your function signature accepts a `const char *` argument, please click the reload button to reset your code definition.

### Solution:

JavaScript specific solutions:

#### ONE

- `Math.abs` will first convert the argument to number.
- `Math.abs(' ') === 0`.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
let isNumber = function (s) {
  return !!s.trim() && Math.abs(s) >= 0;
};
```

#### TWO

- `isNaN` will first convert the argument to number.
- `isNaN(' ') === false`.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
let isNumber = function (s) {
  return !!s.trim() && !isNaN(s);
};
```

#### THREE

General solution. Take a look at the [ECMA Spec](https://www.ecma-international.org/ecma-262/8.0/#sec-literals-numeric-literals).

Similary, we can define our own syntax, which requires a few changes:

```
SignedDecimalLiteral::
  DecimalLiteral
  + DecimalLiteral
  - DecimalLiteral

DecimalLiteral::
  DecimalDigits . [DecimalDigits] [ExponentPart]
  . DecimalDigits [ExponentPart]
  DecimalDigits [ExponentPart]

DecimalDigits::
  DecimalDigit
  DecimalDigits DecimalDigit

DecimalDigit:: one of
  0123456789

ExponentPart::
  ExponentIndicator SignedInteger

ExponentIndicator::one of
  eE

SignedInteger::
  DecimalDigits
  + DecimalDigits
  - DecimalDigits
```

Now implement the parser. It is much easier now because we have a clear mental map of the syntax.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
let isNumber = function (s) {
  let start = 0;
  while (s[start] === " ") {
    start++;
  }
  if (s[start] === "+" || s[start] === "-") {
    start++;
  }
  let nextIndex = parseDecimalLiteral(s, start);
  while (s[nextIndex] === " ") {
    nextIndex++;
  }
  return nextIndex === s.length;
};

/**
 * @param {string} s
 * @param {number} start - start index
 * @return {number} next index, -1 means error
 */
function parseDecimalLiteral(s, start) {
  let nextIndex = -1;
  if (s[start] === ".") {
    nextIndex = parseDecimalDigits(s, start + 1);
    if (nextIndex === -1) {
      return -1;
    }
  } else {
    nextIndex = parseDecimalDigits(s, start);
    if (nextIndex === -1) {
      return -1;
    }

    if (s[nextIndex] === ".") {
      const optNextIndex = parseDecimalDigits(s, ++nextIndex);
      if (optNextIndex !== -1) {
        nextIndex = optNextIndex;
      }
    }
  }

  const optNextIndex = parseExponentPart(s, nextIndex);
  return optNextIndex === -1 ? nextIndex : optNextIndex;
}

/**
 * @param {string} s
 * @param {number} start - start index
 * @return {number} next index, -1 means error
 */
function parseDecimalDigits(s, start) {
  if (start === s.length) {
    return -1;
  }

  for (let i = start; i < s.length; i++) {
    const digit = s.charCodeAt(i) - 48;
    if (!(digit >= 0 && digit <= 9)) {
      return i === start ? -1 : i;
    }
  }
  return s.length;
}

/**
 * @param {string} s
 * @param {number} start - start index
 * @return {number} next index, -1 means error
 */
function parseDecimalIntegerLiteral(s, start) {
  if (start === s.length) {
    return -1;
  }

  let nextIndex = start;
  if (s[start] === "0") {
    nextIndex++;
  }

  const digit = s.charCodeAt(nextIndex) - 48;
  if (!(digit > 0 && digit <= 9)) {
    return nextIndex === start ? -1 : nextIndex;
  }
  nextIndex++;

  const optNextIndex = parseDecimalDigits(s, nextIndex);
  return optNextIndex === -1 ? nextIndex : optNextIndex;
}

/**
 * @param {string} s
 * @param {number} start - start index
 * @return {number} next index, -1 means error
 */
function parseExponentPart(s, start) {
  if (s[start] !== "e" && s[start] !== "E") {
    return -1;
  }

  let nextIndex = start + 1;
  if (s[nextIndex] === "+" || s[nextIndex] === "-") {
    nextIndex++;
  }

  return parseDecimalDigits(s, nextIndex);
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
"Math": https://leetcode.com/tag/math
Similar Questions:
"Multiply Strings": https://leetcode.com/problems/multiply-strings
"Add Binary": https://leetcode.com/problems/add-binary
"Plus One Linked List": https://leetcode.com/problems/plus-one-linked-list

---

## [66. Plus One](https://leetcode.com/problems/plus-one/description/)

### Problem:

Given a **non-empty** array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

**Example 2:**

```
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

### Solution:

#### ONE

JavaScript specific solution. Note that `unshift` is much slower that expanding.

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  return [1, ...digits];
};
```

#### TWO

General solution.

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  for (let i = digits.length; i > 0; i--) {
    digits[i] = digits[i - 1];
  }
  digits[0] = 1;

  return digits;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"String": https://leetcode.com/tag/string

---

## [68. Text Justification](https://leetcode.com/problems/text-justification/description/)

### Problem:

Given an array of words and a width *maxWidth*, format the text such that each line has exactly _maxWidth_ characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces `' '` when necessary so that each line has exactly _maxWidth_ characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no **extra** space is inserted between words.

**Note:**

- A word is defined as a character sequence consisting of non-space characters only.
- Each word's length is guaranteed to be greater than 0 and not exceed _maxWidth_.
- The input array `words` contains at least one word.

**Example 1:**

```
Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
```

**Example 2:**

```
Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.
```

**Example 3:**

```
Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
```

### Solution:

- Count the current line width (plus 1 space between each two words).
- When a line is full:
  - If there is only one word, pad spaces at the end.
  - Otherwise calculate the gap length using `Math.ceil`.
- Handle the last line.

```javascript
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
let fullJustify = function (words, maxWidth) {
  let start = 0;
  let end = 1;
  let lineLen = words[start].length;
  const result = [];

  while (end < words.length) {
    const newLen = words[end].length + 1 + lineLen;
    if (newLen <= maxWidth) {
      lineLen = newLen;
    } else {
      let line = "";
      let nWords = end - start;
      if (nWords === 1) {
        line = words[start].padEnd(maxWidth);
      } else {
        let nSpaces = maxWidth - (lineLen - (nWords - 1));
        for (let i = start; i < end; i++) {
          const gap = Math.ceil(nSpaces / (end - i - 1));
          line += words[i] + " ".repeat(gap);
          nSpaces -= gap;
        }
      }
      result.push(line);
      start = end;
      lineLen = words[start].length;
    }
    end++;
  }

  let lastline = words[start];
  for (let i = start + 1; i < end; i++) {
    lastline += " " + words[i];
  }
  result.push(lastline.padEnd(maxWidth));

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Math": https://leetcode.com/tag/math
"Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
"Pow(x, n)": https://leetcode.com/problems/powx-n
"Valid Perfect Square": https://leetcode.com/problems/valid-perfect-square

---

## [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/description/)

### Problem:

Implement `int sqrt(int x)`.

Compute and return the square root of _x_, where *x* is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

**Example 1:**

```
Input: 4
Output: 2
```

**Example 2:**

```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since
             the decimal part is truncated, 2 is returned.
```

### Solution:

Binary Search. The square root of x is within [0...(x+1)/2].

```javascript
/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
  let max = Math.round(x / 2);
  let min = 0;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const diff = mid * mid - x;
    if (diff > 0) {
      max = mid - 1;
    } else if (diff < 0) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return max;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"String": https://leetcode.com/tag/string
"Stack": https://leetcode.com/tag/stack

---

## [71. Simplify Path](https://leetcode.com/problems/simplify-path/description/)

### Problem:

Given an absolute path for a file (Unix-style), simplify it.

For example,
**path** = `"/home/"`, => `"/home"`
**path** = `"/a/./b/../../c/"`, => `"/c"`

**Corner Cases:**

- Did you consider the case where **path** = `"/../"`?
  In this case, you should return `"/"`.
- Another corner case is the path might contain multiple slashes `'/'` together, such as `"/home//foo/"`.
  In this case, you should ignore redundant slashes and return `"/home/foo"`.

### Solution:

Use stack to handle `/../`.

#### ONE

RegExp matching.

```javascript
/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function (path) {
  return (
    "/" +
    (path.match(/[^\/]+/g) || [])
      .reduce((stack, p) => {
        if (p === "..") {
          stack.pop();
        } else if (p !== ".") {
          stack.push(p);
        }
        return stack;
      }, [])
      .join("/")
  );
};
```

#### TWO

Direct search.

```javascript
/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function (path) {
  const len = path.length;
  const stack = [];
  let e = 0;
  while (e < len) {
    while (e < len && path[e] === "/") {
      e++;
    }
    const s = e;
    while (e < len && path[e] !== "/") {
      e++;
    }
    if (s < e) {
      const p = path.slice(s, e);
      if (p === "..") {
        stack.pop();
      } else if (p !== ".") {
        stack.push(p);
      }
    }
  }
  return "/" + stack.join("/");
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"String": https://leetcode.com/tag/string
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
"One Edit Distance": https://leetcode.com/problems/one-edit-distance
"Delete Operation for Two Strings": https://leetcode.com/problems/delete-operation-for-two-strings
"Minimum ASCII Delete Sum for Two Strings": https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings

---

## [72. Edit Distance](https://leetcode.com/problems/edit-distance/description/)

### Problem:

Given two words _word1_ and _word2_, find the minimum number of operations required to convert _word1_ to _word2_.

You have the following 3 operations permitted on a word:

1. Insert a character
2. Delete a character
3. Replace a character

**Example 1:**

```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

**Example 2:**

```
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

### Solution:

DP.

Define `f(i, j)` to be the min edit distance from `word1[0...i)` to `word2[0...j)`.

```javascript
f(0, 0) = 0
f(0, j) = f(0, j-1) + 1 // can only insert
f(i, 0) = f(i-1, 0) + 1 // can only delete
f(i, j) = min(
  f(i, j-1) + 1 // insert
  f(i-1, j) + 1 // delete
  f(i-1, j-1) + (word1[i-1] !== word2[j-1] ? 1 : 0) // replace or do nothing
)
```

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
let minDistance = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;

  if (len1 <= 0 || len2 <= 0) {
    return len1 + len2;
  }

  const dp = [];

  for (let i = 0; i <= len1; i++) {
    dp[i] = [i];
  }

  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      dp[i][j] = Math.min(
        dp[i][j - 1] + 1,
        dp[i - 1][j] + 1,
        dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1)
      );
    }
  }

  return dp[len1][len2];
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
Similar Questions:
"Game of Life": https://leetcode.com/problems/game-of-life

---

## [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/description/)

### Problem:

Given a _m_ x _n_ matrix, if an element is 0, set its entire row and column to 0. Do it [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm).

**Example 1:**

```
Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

**Example 2:**

```
Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

**Follow up:**

- A straight forward solution using O(_m\*\*n_) space is probably a bad idea.
- A simple improvement uses O(_m_ + _n_) space, but still not the best solution.
- Could you devise a constant space solution?

### Solution:

- O(_m\*\*n_) space solution: Copy a new matrix.
- O(_m_ + _n_) space solution: Use extra arrays to store rows and columns that need to be set 0.
- Constant space solutions:

#### ONE

Instead of allocating extra arrays. Just use the first row and column.

First scan through the first row and column to see if they need be set 0. If so, mark and do it in the end.

Now scan the matrix and set 0 to the first row and column whenever a 0 is met.

Walk the matrix again and set 0 according to the first row and column.

Finally set the first row and column to 0 if needed.

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function (matrix) {
  const height = matrix.length;
  if (height <= 0) {
    return;
  }
  const width = matrix[0].length;
  if (width <= 0) {
    return;
  }

  const shouldClearFirstRow = matrix[0].some((x) => x === 0);
  const shouldClearFirstCol = matrix.some((row) => row[0] === 0);

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < height; i++) {
    if (matrix[i][0] === 0) {
      matrix[i].fill(0);
    }
  }

  for (let j = 1; j < width; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < height; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (shouldClearFirstRow) {
    matrix[0].fill(0);
  }

  if (shouldClearFirstCol) {
    for (let i = 0; i < height; i++) {
      matrix[i][0] = 0;
    }
  }
};
```

#### TWO

Use `NaN` to mark cells that need to be set 0.

Still constant space just a bit slower due to repeatedly setting overlapping `NaN`s.

```
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function(matrix) {
  const height = matrix.length
  if (height <= 0) { return }
  const width = matrix[0].length
  if (width <= 0) { return }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] !== 0) { continue }

      for (let jj = 0; jj < width; jj++) {
        if (matrix[i][jj] !== 0) {
          matrix[i][jj] = NaN
        }
      }

      for (let ii = 0; ii < height; ii++) {
        if (matrix[ii][j] !== 0) {
          matrix[ii][j] = NaN
        }
      }
    }
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (isNaN(matrix[i][j])) {
        matrix[i][j] = 0
      }
    }
  }
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
"Search a 2D Matrix II": https://leetcode.com/problems/search-a-2d-matrix-ii

---

## [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)

### Problem:

Write an efficient algorithm that searches for a value in an _m_ x _n_ matrix. This matrix has the following properties:

- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.

**Example 1:**

```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
```

**Example 2:**

```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
```

### Solution:

#### ONE

Search from top-left to bottom-right. O(_n_).

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function (matrix, target) {
  const height = matrix.length;
  if (height <= 0) {
    return false;
  }
  const width = matrix[0].length;
  if (width <= 0) {
    return false;
  }

  let i = 0;
  let j = width - 1;
  while (i < height && j >= 0) {
    const diff = matrix[i][j] - target;
    if (diff > 0) {
      j--;
    } else if (diff < 0) {
      i++;
    } else {
      return true;
    }
  }

  return false;
};
```

#### TWO

Binary search. O(log*n*).

View the matrix as an sorted array that is cut into `n` slices.

Take the algorithm from [35. Search Insert Position](./035.%20Search%20Insert%20Position.md).

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function (matrix, target) {
  const height = matrix.length;
  if (height <= 0) {
    return false;
  }
  const width = matrix[0].length;
  if (width <= 0) {
    return false;
  }

  let s = 0;
  let e = width * height - 1;
  while (s <= e) {
    const mid = Math.floor((s + e) / 2);
    const diff = matrix[Math.floor(mid / width)][mid % width] - target;
    if (diff < 0) {
      s = mid + 1;
    } else if (diff > 0) {
      e = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Two Pointers": https://leetcode.com/tag/two-pointers
"Sort": https://leetcode.com/tag/sort
Similar Questions:
"Sort List": https://leetcode.com/problems/sort-list
"Wiggle Sort": https://leetcode.com/problems/wiggle-sort
"Wiggle Sort II": https://leetcode.com/problems/wiggle-sort-ii

---

## [75. Sort Colors](https://leetcode.com/problems/sort-colors/description/)

### Problem:

Given an array with _n_ objects colored red, white or blue, sort them **in-place**so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

**Note:** You are not suppose to use the library's sort function for this problem.

**Example:**

```
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Follow up:**

- A rather straight forward solution is a two-pass algorithm using counting sort.
  First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
- Could you come up with a one-pass algorithm using only constant space?

### Solution:

One-pass algorithm.

Take the idea of the partition algorithm from quick sort. Use `1` as pivot.

Count the number of sorted `0`s and `2`s so that we know where to swap.

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = function (nums) {
  const len = nums.length;
  let zeroEnd = 0;
  let twoStart = len - 1;
  let i = 0;
  while (i <= twoStart) {
    if (nums[i] === 0 && i !== zeroEnd) {
      const t = nums[i];
      nums[i] = nums[zeroEnd];
      nums[zeroEnd] = t;
      zeroEnd++;
    } else if (nums[i] === 2 && i !== twoStart) {
      const t = nums[i];
      nums[i] = nums[twoStart];
      nums[twoStart] = t;
      twoStart--;
    } else {
      i++;
    }
  }
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Combination Sum": https://leetcode.com/problems/combination-sum
"Permutations": https://leetcode.com/problems/permutations

---

## [77. Combinations](https://leetcode.com/problems/combinations/description/)

### Problem:

Given two integers _n_ and _k_, return all possible combinations of _k_ numbers out of 1 ... _n_.

**Example:**

```
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

### Solution:

Basic DFS + Backtracking.

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let combine = function (n, k) {
  const result = [];
  _combine(1, [], n, k, result);
  return result;
};

function _combine(cur, path, n, k, result) {
  if (path.length === k) {
    return result.push(path.slice());
  }

  while (cur <= n) {
    path.push(cur);
    _combine(++cur, path, n, k, result);
    path.pop();
  }
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Backtracking": https://leetcode.com/tag/backtracking
"Bit Manipulation": https://leetcode.com/tag/bit-manipulation
Similar Questions:
"Subsets II": https://leetcode.com/problems/subsets-ii
"Generalized Abbreviation": https://leetcode.com/problems/generalized-abbreviation
"Letter Case Permutation": https://leetcode.com/problems/letter-case-permutation

---

## [78. Subsets](https://leetcode.com/problems/subsets/description/)

### Problem:

Given a set of **distinct** integers, _nums_, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

**Example:**

```
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

### Solution:

#### ONE

BFS.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function (nums) {
  return nums.reduce(
    (result, num) => result.concat(result.map((r) => [...r, num])),
    [[]]
  );
};
```

Or more imperative. Loop backward to avoid crossing the boundary.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function (nums) {
  const result = [[]];
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = result.length - 1; j >= 0; j--) {
      result.push([nums[i], ...result[j]]);
    }
  }
  return result;
};
```

#### TWO

DFS + Backtracking.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function (nums) {
  const result = [];
  _subsets(nums, 0, [], result);
  return result;
};

function _subsets(nums, start, path, result) {
  result.push(path.slice());
  while (start < nums.length) {
    path.push(nums[start]);
    _subsets(nums, ++start, path, result);
    path.pop();
  }
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Word Search II": https://leetcode.com/problems/word-search-ii

---

## [79. Word Search](https://leetcode.com/problems/word-search/description/)

### Problem:

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

**Example:**

```
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
```

### Solution:

DFS + Backtracking. Replace the cell with `NaN` before proceeding to the next level and restore when backtracking.

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function (board, word) {
  const height = board.length;
  if (height <= 0) {
    return false;
  }
  const width = board[0].length;
  if (width <= 0) {
    return false;
  }

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (
        board[row][col] === word[0] &&
        _exist(
          board,
          word,
          0,
          [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
          ],
          row,
          col
        )
      ) {
        return true;
      }
    }
  }

  return false;
};

function _exist(board, word, iWord, directions, row, col) {
  if (iWord === word.length) {
    return true;
  }

  if (!board[row] || word[iWord] !== board[row][col]) {
    return false;
  }

  const cell = board[row][col];
  board[row][col] = NaN;

  for (let i = directions.length - 1; i >= 0; i--) {
    if (
      _exist(
        board,
        word,
        iWord + 1,
        directions,
        row + directions[i][0],
        col + directions[i][1]
      )
    ) {
      return true;
    }
  }

  board[row][col] = cell;

  return false;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
"Remove Duplicates from Sorted Array": https://leetcode.com/problems/remove-duplicates-from-sorted-array

---

## [80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)

### Problem:

Given a sorted array _nums_, remove the duplicates [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) such that duplicates appeared at most *twice* and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array in-place** with O(1) extra memory.

**Example 1:**

```
Given nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.
```

**Example 2:**

```
Given nums = [0,0,1,1,1,1,2,3,3],

Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

It doesn't matter what values are set beyond the returned length.
```

**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by **reference**, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

### Solution:

Similar to [26. Remove Duplicates from Sorted Array](./026.%20Remove%20Duplicates%20from%20Sorted%20Array.md).

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[len - 2]) {
      nums[len++] = nums[i];
    }
  }
  return len;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
"Search in Rotated Sorted Array": https://leetcode.com/problems/search-in-rotated-sorted-array

---

## [81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/)

### Problem:

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,0,1,2,2,5,6]` might become `[2,5,6,0,0,1,2]`).

You are given a target value to search. If found in the array return `true`, otherwise return `false`.

**Example 1:**

```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

**Example 2:**

```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```

**Follow up:**

- This is a follow up problem to [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/), where `nums` may contain duplicates.
- Would this affect the run-time complexity? How and why?

### Solution:

See [33. Search in Rotated Sorted Array](./033.%20Search%20in%20Rotated%20Sorted%20Array.md). The code is basically the same. Except with duplicates we can not tell which way to jump when `pivot == nums[e]`. The only thing we can do is to ditch `nums[e]`. SO worst case `O(*n*)`.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
let search = function (nums, target) {
  let s = 0;
  let e = nums.length - 1;

  while (s <= e) {
    const p = ((e + s) / 2) | 0;
    const pivot = nums[p];

    if (target === pivot) {
      return true;
    }

    if (pivot < nums[e]) {
      if (target > nums[p] && target <= nums[e]) {
        s = p + 1;
      } else {
        e = p - 1;
      }
    } else if (pivot > nums[e]) {
      if (target < nums[p] && target >= nums[s]) {
        e = p - 1;
      } else {
        s = p + 1;
      }
    } else {
      e--;
    }
  }

  return false;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
"Remove Duplicates from Sorted List": https://leetcode.com/problems/remove-duplicates-from-sorted-list

---

## [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/)

### Problem:

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only _distinct_ numbers from the original list.

**Example 1:**

```
Input: 1->2->3->3->4->4->5
Output: 1->2->5
```

**Example 2:**

```
Input: 1->1->1->2->3
Output: 2->3
```

### Solution:

`p1` points to the current node. `p` points to the node before `p1` so that we can ditch `p1` if needed.

The list is sorted so we only need `dupVal` to keep the latest duplicate value.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
  if (!head) {
    return null;
  }
  const prehead = { next: head };

  let p = prehead;
  let dupVal = NaN;

  for (let p1 = head; p1; p1 = p1.next) {
    if (p1.val === dupVal) {
      p.next = p1.next;
    } else if (p1.next && p1.val === p1.next.val) {
      p.next = p1.next;
      dupVal = p1.val;
    } else {
      p = p1;
    }
  }

  return prehead.next;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
"Remove Duplicates from Sorted List II": https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii

---

## [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/)

### Problem:

Given a sorted linked list, delete all duplicates such that each element appear only _once_.

**Example 1:**

```
Input: 1->1->2
Output: 1->2
```

**Example 2:**

```
Input: 1->1->2->3->3
Output: 1->2->3
```

### Solution:

#### ONE

Just like [82. Remove Duplicates from Sorted List II](./082.%20Remove%20Duplicates%20from%20Sorted%20List%20II.md) except keeping the first duplicate node.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
  if (!head) {
    return null;
  }
  const prehead = { next: head };

  let p = prehead;
  let dupVal = NaN;

  for (let p1 = head; p1; p1 = p1.next) {
    if (p1.val === dupVal) {
      p.next = p1.next;
    } else {
      if (p1.next && p1.val === p1.next.val) {
        dupVal = p1.val;
      }
      p = p1;
    }
  }

  return prehead.next;
};
```

#### TWO

Just compare the next node. This is way more faster.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
  if (!head) {
    return null;
  }

  let p = head;
  while (p) {
    if (p.next && p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }

  return head;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
"Stack": https://leetcode.com/tag/stack
Similar Questions:
"Maximal Rectangle": https://leetcode.com/problems/maximal-rectangle

---

## [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/description/)

### Problem:

Given _n_ non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

![histogram.png](https://leetcode.com/static/images/problemset/histogram.png)

Above is a histogram where width of each bar is 1, given height = `[2,1,5,6,2,3]`.

![histogram_area.png](https://leetcode.com/static/images/problemset/histogram_area.png)

The largest rectangle is shown in the shaded area, which has area = `10` unit.

**Example:**

```
Input: [2,1,5,6,2,3]
Output: 10
```

### Solution:

The height of a rectangle is determined by the lowest bar inside of it. So the core idea is, for each bar, assume it is the lowest bar and see how far it can expand. Then we have `len(heights)` rectangles. Return the max area.

For a bar `b` whose height is `h`, find the closest bar `b1` on the left that is lower than `h`, and `b2` on the right. The area of the rectangle is `h * (i2 - i1 - 1)`.

Notice that if we just loop the bars from left to right, `b1` and `b2` of each bar may overlap.

| index |    height    |     width     |       area       |
| :---: | :----------: | :-----------: | :--------------: |
|  `i`  | `heights[i]` | `i2 - i1 - 1` | `height * width` |
|   0   |      2       |  1 - -1 - 1   |        2         |
|   1   |      1       |  6 - -1 - 1   |        6         |
|   2   |      5       |   4 - 1 - 1   |        10        |
|   3   |      6       |   4 - 2 - 1   |        6         |
|   4   |      2       |   6 - 1 - 1   |        8         |
|   5   |      3       |   6 - 4 - 1   |        3         |

Observe how `i1` and `i2` changes depending on the height.

To reduce O(_n^2_) to O(_n_), we use a stack to store incremental `b`s. Because `b1` and `b2` are both lower than `b`, whenever we reach a bar that is lower than the top of the stack, we know it's a `b2`. So stack top is a `b`. Second top is a `b1`. Keep popping the `b` to calculate areas until `b2` is no longer lower than stack top.

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
let largestRectangleArea = function (heights) {
  const stack = [-1];
  let max = 0;
  for (let i2 = 0; i2 <= heights.length; i2++) {
    while ((heights[i2] || 0) < heights[stack[stack.length - 1]]) {
      const i = stack.pop();
      const i1 = stack[stack.length - 1];
      max = Math.max(max, heights[i] * (i2 - i1 - 1));
    }
    stack.push(i2);
  }
  return max;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"Array": https://leetcode.com/tag/array
"Hash Table": https://leetcode.com/tag/hash-table
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming
"Stack": https://leetcode.com/tag/stack
Similar Questions:
"Largest Rectangle in Histogram": https://leetcode.com/problems/largest-rectangle-in-histogram
"Maximal Square": https://leetcode.com/problems/maximal-square

---

## [85. Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/description/)

### Problem:

Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

**Example:**

```
Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6
```

### Solution:

#### ONE

View every row as a base line then we just have to solve `height(matrix)` times the problem of [84. Largest Rectangle in Histogram](084.%20Largest%20Rectangle%20in%20Histogram.md).

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
let maximalRectangle = function (matrix) {
  const height = matrix.length;
  if (height <= 0) {
    return 0;
  }
  const width = matrix[0].length;
  if (width <= 0) {
    return 0;
  }

  const heights = [];
  let max = 0;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      heights[col] = ((heights[col] || 0) + 1) * matrix[row][col];
    }
    max = Math.max(max, largestRectangleArea(heights));
  }

  return max;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const stack = [-1];
  let max = 0;
  for (let i2 = 0; i2 <= heights.length; i2++) {
    while ((heights[i2] || 0) < heights[stack[stack.length - 1]]) {
      const i = stack.pop();
      const i1 = stack[stack.length - 1];
      max = Math.max(max, heights[i] * (i2 - i1 - 1));
    }
    stack.push(i2);
  }
  return max;
}
```

#### TWO

Same idea as above. Use DP to cache accumulated states.

Pick a pivot point `(row, col)` and assume it is on the base line. The adjoining `1`s above `(row, col)` makes up the height of the rectangle. The width of the rectangle is determined by how many ajoining bars are taller than the pivot bar.

So for the rectangle whose bottom pivot is `(row, col)`:

- Define `area(row, col)` to be the area.
- Define `height(row, col)` to be the height.
- Define `left(row, col)` to be the `col` value of the bottom-left corner.
- Define `right(row, col)` to be the `col` value of the bottom-right corner.

Also:

- Define `conLeft(row, col)` to be the `col` value of the leftmost cell of the consecutive `1`s on the left of `(row, col)`.
- Define `conRight(row, col)` to be the `col` value of the rightmost cell of the consecutive `1`s on the right of `(row, col)`.

With `conLeft` and `conRight` we can know if the rectangle on `(row, col)` shrinks comparing to `(row-1, col)`.

```javascript
if matrix[row][col] == 1
  height(row, col) = height(row-1, col) + 1

  // see how long this horizontal line can get
  conLeft(row, col) = conLeft(row, col-1)
  conRight(row, col) = conRight(row, col+1)

  // width can only be shorter
  left(row, col) = max( left(row-1, col), conLeft(row, col) )
  right(row, col) = min( right(row-1, col), conRight(row, col) )

if matrix[row][col] == 0
  height(row, col) = 0
  conLeft(row, col) = col + 1
  conRight(row, col) = col - 1
  left(row, col) = 0 // back to leftmost position
  right(row, col) = matrix.width // back to rightmost position

area(row, col) = (right(row, col) - left(row, col) + 1) * height(row, col)
```

We only need to keep the last state. Use dynamic arrays to reduce space complexity.

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
let maximalRectangle = function (matrix) {
  const height = matrix.length;
  if (height <= 0) {
    return 0;
  }
  const width = matrix[0].length;
  if (width <= 0) {
    return 0;
  }

  const heights = new Array(width).fill(0);
  const lefts = new Array(width).fill(0);
  const rights = new Array(width).fill(width);

  let max = 0;

  for (let row = 0; row < height; row++) {
    let conLeft = 0;
    let conRight = width - 1;
    for (let col = 0; col < width; col++) {
      if (matrix[row][col] === "1") {
        heights[col] = heights[col] + 1;
        lefts[col] = Math.max(lefts[col], conLeft);
      } else {
        heights[col] = 0;
        lefts[col] = 0;
        conLeft = col + 1;
      }
    }

    for (let col = width - 1; col >= 0; col--) {
      if (matrix[row][col] === "1") {
        rights[col] = Math.min(rights[col], conRight);
      } else {
        rights[col] = width;
        conRight = col - 1;
      }
    }

    for (let col = 0; col < width; col++) {
      max = Math.max(max, (rights[col] - lefts[col] + 1) * heights[col]);
    }
  }

  return max;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
"Two Pointers": https://leetcode.com/tag/two-pointers

---

## [86. Partition List](https://leetcode.com/problems/partition-list/description/)

### Problem:

Given a linked list and a value _x_, partition it such that all nodes less than _x_ come before nodes greater than or equal to _x_.

You should preserve the original relative order of the nodes in each of the two partitions.

**Example:**

```
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
```

### Solution:

Take the second part out as a new list and connect it back.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
let partition = function (head, x) {
  const prehead1 = { next: head };
  let p1 = prehead1;
  let ptail1 = prehead1;

  const prehead2 = { next: null };
  let p2 = prehead2;

  while (p1) {
    const next = p1.next;
    if (next && next.val >= x) {
      p1.next = next.next;
      p2.next = next;
      p2 = next;
    } else {
      ptail1 = p1;
      p1 = p1.next;
    }
  }

  p2.next = null;
  ptail1.next = prehead2.next;

  return prehead1.next;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Array": https://leetcode.com/tag/array
"Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
"Merge Two Sorted Lists": https://leetcode.com/problems/merge-two-sorted-lists

---

## [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/)

### Problem:

Given two sorted integer arrays _nums1_ and _nums2_, merge _nums2_ into _nums1_ as one sorted array.

**Note:**

- The number of elements initialized in _nums1_ and _nums2_ are _m_ and _n_ respectively.
- You may assume that _nums1_ has enough space (size that is greater or equal to _m_ + _n_) to hold additional elements from _nums2_.

**Example:**

```
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
```

### Solution:

Loop backward and keep picking the larger one. `nums1` is guaranteed longer than `nums2` so just use `n` as boundary.

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
  let len = m-- + n--;
  while (n >= 0) {
    nums1[--len] = nums1[m] >= nums2[n] ? nums1[m--] : nums2[n--];
  }
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"1-bit and 2-bit Characters": https://leetcode.com/problems/1-bit-and-2-bit-characters

---

## [89. Gray Code](https://leetcode.com/problems/gray-code/description/)

### Problem:

The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer _n_ representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

**Example 1:**

```
Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.

00 - 0
10 - 2
11 - 3
01 - 1
```

**Example 2:**

```
Input: 0
Output: [0]
Explanation: We define the gray code sequence to begin with 0.
             A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
             Therefore, for n = 0 the gray code sequence is [0].
```

### Solution:

```
0: [  0                                   ]
1: [  0,   1                              ]
2: [ 00,  01,  11,  10                    ]
3: [000, 001, 011, 010, 110, 111, 101, 100]
```

The pattern is self-evident. Reverse the result set and prepend '1' to each item.

Use bitwise shift to speed up the calculation. It is unlikely to overflow since the result set is exponential.

```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
let grayCode = function (n) {
  const result = [0];
  for (let level = 0; level < n; level++) {
    const prefix = 1 << level;
    for (let i = result.length - 1; i >= 0; i--) {
      result.push(result[i] + prefix);
    }
  }
  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"Subsets": https://leetcode.com/problems/subsets

---

## [90. Subsets II](https://leetcode.com/problems/subsets-ii/description/)

### Problem:

Given a collection of integers that might contain duplicates, **nums**, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

**Example:**

```
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```

### Solution:

See [78. Subsets](./078.%20Subsets.md). Except:

1. Sort input to group duplicates.
2. Only consider each duplicate once, that is, when it is at the first slot.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsetsWithDup = function (nums) {
  const result = [];
  _subsetsWithDup(nums.sort(), 0, [], result);
  return result;
};

function _subsetsWithDup(nums, start, path, result) {
  result.push(path.slice());
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }
    path.push(nums[i]);
    _subsetsWithDup(nums, i + 1, path, result);
    path.pop();
  }
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"String": https://leetcode.com/tag/string
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
"Decode Ways II": https://leetcode.com/problems/decode-ways-ii

---

## [91. Decode Ways](https://leetcode.com/problems/decode-ways/description/)

### Problem:

A message containing letters from `A-Z` is being encoded to numbers using the following mapping:

```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```

Given a **non-empty** string containing only digits, determine the total number of ways to decode it.

**Example 1:**

```
Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
```

**Example 2:**

```
Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

### Solution:

Define `f(i)` to be the number of ways to decode `s[0...i]`.

Note that there could be `'0'`.

```
f(0) = 1, if s[i] !== '0'
f(i) = 0, if s.length <= 0 || s[i] === '0'
f(i) = f(i-1), if i > 0 && s[i] !== '0'
       +
       f(i-2), if i > 0 && s[i-1] !== '0' && s[i-1] * 10 + s[i] <= 26
```

Only need to store the last two states. Init `f(-1) = 1` for easy calculation.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
let numDecodings = function (s) {
  let dp = s[0] > 0 ? 1 : 0;
  let dp_1 = dp;
  let dp_2 = 1;

  for (let i = 1; i < s.length; i++) {
    dp = 0;
    if (s[i] !== "0") {
      dp += dp_1;
    }
    if (s[i - 1] !== "0" && s[i - 1] + s[i] <= 26) {
      dp += dp_2;
    }
    dp_2 = dp_1;
    dp_1 = dp;
  }

  return dp;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
"Reverse Linked List": https://leetcode.com/problems/reverse-linked-list

---

## [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/description/)

### Problem:

Reverse a linked list from position _m_ to _n_. Do it in one-pass.

**Note:**1 ≤ _m_ ≤ _n_ ≤ length of list.

**Example:**

```
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
```

### Solution:

Break the list into 3 parts.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
let reverseBetween = function (head, m, n) {
  if (m === n) {
    return head;
  }

  const prehead = { next: head };
  n = n - m;

  let l1tail = prehead;
  while (--m > 0) {
    l1tail = l1tail.next;
  }

  let l2prehead = l1tail;
  let l2head = l2prehead.next;
  let l2tail = l2head;
  while (n-- > 0) {
    const next = l2head.next;
    l2head.next = l2prehead;
    l2prehead = l2head;
    l2head = next;
  }

  l2tail.next = l2head.next; // l3head
  l2head.next = l2prehead;
  l1tail.next = l2head;

  return prehead.next;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"String": https://leetcode.com/tag/string
"Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
"IP to CIDR": https://leetcode.com/problems/ip-to-cidr

---

## [93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/description/)

### Problem:

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

**Example:**

```
Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
```

### Solution:

Backtracking. Note that leading `'0'` is not allowed except just `'0'`.

```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
let restoreIpAddresses = function (s, i = 0, path = [], result = []) {
  if (i === s.length) {
    if (path.length === 4) {
      result.push(path.join("."));
    }
    return result;
  }

  const digit = s.charCodeAt(i) - 48;

  if (i === 0) {
    path[0] = digit;
    restoreIpAddresses(s, i + 1, path, result);
    path[0] = 0;
    return result;
  }

  const sum = path[path.length - 1] * 10 + digit;

  if (digit < sum && sum <= 255) {
    path[path.length - 1] = sum;
    restoreIpAddresses(s, i + 1, path, result);
    path[path.length - 1] = (sum - digit) / 10;
  }

  if (path.length < 4) {
    path.push(digit);
    restoreIpAddresses(s, i + 1, path, result);
    path.pop();
  }

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Hard
Related Topics:
"String": https://leetcode.com/tag/string
"Dynamic Programming": https://leetcode.com/tag/dynamic-programming

---

## [97. Interleaving String](https://leetcode.com/problems/interleaving-string/description/)

### Problem:

Given _s1_, _s2_, _s3_, find whether _s3_ is formed by the interleaving of _s1_ and _s2_.

**Example 1:**

```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
```

**Example 2:**

```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
```

### Solution:

Define `f(i, j)` to be whether `s3[0...i+j-1)` can be formed by the interleaving of `s1[0...i)` and `s2[0...j)`.

```javascript
f(i, j) = true, i <= 0 || j <= 0 // meaningless, skipped
f(i, j) = f(i-1, j) && s1[i-1] == s3[i+j-1] || f(i, j-1) && s2[j-1] == s3[i+j-1], 0 < i <= len(s1), 0 < j <= len(s2)
```

Dynamic array can be used.

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
let isInterleave = function (s1, s2, s3) {
  const len1 = s1.length;
  const len2 = s2.length;
  const len3 = s3.length;
  if (len1 + len2 !== len3) {
    return false;
  }
  if (len1 <= 0) {
    return s2 === s3;
  }
  if (len2 <= 0) {
    return s1 === s3;
  }

  const dp = [];
  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      dp[j] =
        ((i <= 0 || dp[j]) && s1[i - 1] === s3[i + j - 1]) ||
        ((j <= 0 || dp[j - 1]) && s2[j - 1] === s3[i + j - 1]);
    }
  }
  return dp[len2];
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search

---

## [100. Same Tree](https://leetcode.com/problems/same-tree/description/)

### Problem:

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

**Example 1:**

```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```

**Example 2:**

```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```

**Example 3:**

```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```

### Solution:

The code should be self-evident.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = function (p, q) {
  return (
    (p === null && q === null) ||
    (p !== null &&
      q !== null &&
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right))
  );
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search

---

## [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)

### Problem:

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree `[1,2,2,3,4,4,3]` is symmetric:

```
1
   / \
  2   2
 / \ / \
3  4 4  3
```

But the following `[1,2,2,null,3,null,3]` is not:

```
1
   / \
  2   2
   \   \
   3    3
```

Note:
Bonus points if you could solve it both recursively and iteratively.

### Solution:

#### ONE

The result of pre-order and post-order traversal on a symmetric tree should be the same.

So just like [100. Same Tree](./100.%20Same%20Tree.md). Except one is pre-order traversal and the other is post-order.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function (root) {
  return root === null || isSymmetricTree(root.left, root.right);
};

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSymmetricTree(p, q) {
  return (
    (p === null && q === null) ||
    (p !== null &&
      q !== null &&
      p.val === q.val &&
      isSymmetricTree(p.left, q.right) &&
      isSymmetricTree(p.right, q.left))
  );
}
```

#### TWO

Level order traversal. Check symmetry before entering the next level.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  const queue = [NaN, root];

  while (queue.length > 1) {
    const node = queue.shift();
    if (node !== node) {
      for (let i = 0, j = queue.length - 1; i <= j; i++, j--) {
        if (
          (queue[i] === null && queue[j] !== null) ||
          (queue[i] !== null && queue[j] === null) ||
          (queue[i] !== null &&
            queue[j] !== null &&
            queue[i].val !== queue[j].val)
        ) {
          return false;
        }
      }
      queue.push(NaN);
    } else {
      if (node !== null) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  return true;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
"Binary Tree Zigzag Level Order Traversal": https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
"Binary Tree Level Order Traversal II": https://leetcode.com/problems/binary-tree-level-order-traversal-ii
"Minimum Depth of Binary Tree": https://leetcode.com/problems/minimum-depth-of-binary-tree
"Binary Tree Vertical Order Traversal": https://leetcode.com/problems/binary-tree-vertical-order-traversal
"Average of Levels in Binary Tree": https://leetcode.com/problems/average-of-levels-in-binary-tree
"N-ary Tree Level Order Traversal": https://leetcode.com/problems/n-ary-tree-level-order-traversal

---

## [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)

### Problem:

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
3
   / \
  9  20
    /  \
   15   7
```

return its level order traversal as:

```
[
  [3],
  [9,20],
  [15,7]
]
```

### Solution:

The code should be self-evident.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [NaN, root];
  while (queue.length > 1) {
    const node = queue.shift();
    if (node !== node) {
      result.push(queue.map((n) => n.val));
      queue.push(NaN);
    } else {
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Stack": https://leetcode.com/tag/stack
"Tree": https://leetcode.com/tag/tree
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
"Binary Tree Level Order Traversal": https://leetcode.com/problems/binary-tree-level-order-traversal

---

## [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/)

### Problem:

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
3
   / \
  9  20
    /  \
   15   7
```

return its zigzag level order traversal as:

```
[
  [3],
  [20,9],
  [15,7]
]
```

### Solution:

Reverse the level when pushing to the reuslt.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [NaN, root];
  let zipzag = false;
  while (queue.length > 1) {
    const node = queue.shift();
    if (node !== node) {
      if ((zipzag = !zipzag)) {
        result.push(queue.map((n) => n.val));
      } else {
        result.push(queue.map((n) => n.val).reverse());
      }
      queue.push(NaN);
    } else {
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Balanced Binary Tree": https://leetcode.com/problems/balanced-binary-tree
"Minimum Depth of Binary Tree": https://leetcode.com/problems/minimum-depth-of-binary-tree
"Maximum Depth of N-ary Tree": https://leetcode.com/problems/maximum-depth-of-n-ary-tree

---

## [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

### Problem:

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Note:** A leaf is a node with no children.

**Example:**

Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its depth = 3.

### Solution:

The code should be self-evident.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function (root) {
  return root === null
    ? 0
    : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Construct Binary Tree from Inorder and Postorder Traversal": https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal

---

## [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/)

### Problem:

Given preorder and inorder traversal of a tree, construct the binary tree.

**Note:**
You may assume that duplicates do not exist in the tree.

For example, given

```
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
```

Return the following binary tree:

```
    3
   / \
  9  20
    /  \
   15   7
```

### Solution:

Pattern of preorder traversal result: `pre(root) = root + pre(root.left) + pre(root.right)`

Pattern of inorder traversal result: `in(root) = in(root.left) + root + in(root.right)`

There are no duplicates so get the first item in preorder result, pinpoint it in inorder result. Then we know the size of left and right subtree.

Repeat the process on subtrees.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = function (preorder, inorder) {
  return _buildTree(preorder, inorder, 0, preorder.length, 0, inorder.length);
};

function _buildTree(preorder, inorder, pStart, pEnd, iStart, iEnd) {
  if (pStart >= pEnd || iStart >= iEnd) {
    return null;
  }
  const val = preorder[pStart];
  const node = new TreeNode(val);
  for (let i = iStart; i < iEnd; i++) {
    if (val === inorder[i]) {
      node.left = _buildTree(
        preorder,
        inorder,
        pStart + 1,
        i - iStart + (pStart + 1),
        iStart,
        i
      );
      node.right = _buildTree(
        preorder,
        inorder,
        i + 1 - iEnd + pEnd,
        pEnd,
        i + 1,
        iEnd
      );
      break;
    }
  }
  return node;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Medium
Related Topics:
"Array": https://leetcode.com/tag/array
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Construct Binary Tree from Preorder and Inorder Traversal": https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal

---

## [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/)

### Problem:

Given inorder and postorder traversal of a tree, construct the binary tree.

**Note:**
You may assume that duplicates do not exist in the tree.

For example, given

```
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
```

Return the following binary tree:

```
    3
   / \
  9  20
    /  \
   15   7
```

### Solution:

Pattern of inorder traversal result: `in(root) = in(root.left) + root + in(root.right)`

Pattern of postorder traversal result: `post(root) = post(root.left) + post(root.right) + root`

There are no duplicates so get the first item in preorder result, pinpoint it in inorder result. Then we know the size of left and right subtree.

Repeat the process on subtrees.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let buildTree = function (inorder, postorder) {
  return _buildTree(postorder, inorder, 0, postorder.length, 0, inorder.length);
};

function _buildTree(postorder, inorder, pStart, pEnd, iStart, iEnd) {
  if (pStart >= pEnd || iStart >= iEnd) {
    return null;
  }
  const val = postorder[pEnd - 1];
  const node = new TreeNode(val);
  for (let i = iStart; i < iEnd; i++) {
    if (val === inorder[i]) {
      node.left = _buildTree(
        postorder,
        inorder,
        pStart,
        i - iStart + pStart,
        iStart,
        i
      );
      node.right = _buildTree(
        postorder,
        inorder,
        i + 1 - iEnd + (pEnd - 1),
        pEnd - 1,
        i + 1,
        iEnd
      );
      break;
    }
  }
  return node;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
"Binary Tree Level Order Traversal": https://leetcode.com/problems/binary-tree-level-order-traversal
"Average of Levels in Binary Tree": https://leetcode.com/problems/average-of-levels-in-binary-tree

---

## [107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/)

### Problem:

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its bottom-up level order traversal as:

```
[
  [15,7],
  [9,20],
  [3]
]
```

### Solution:

See [102. Binary Tree Level Order Traversal](./102.%20Binary%20Tree%20Level%20Order%20Traversal.md).

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [NaN, root];
  while (queue.length > 1) {
    const node = queue.shift();
    if (node !== node) {
      result.unshift(queue.map((n) => n.val));
      queue.push(NaN);
    } else {
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
};
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
"Maximum Depth of Binary Tree": https://leetcode.com/problems/maximum-depth-of-binary-tree

---

## [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/description/)

### Problem:

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of _every_ node never differ by more than 1.

**Example 1:**

Given the following tree `[3,9,20,null,null,15,7]`:

```
    3
   / \
  9  20
    /  \
   15   7
```

Return true.

**Example 2:**

Given the following tree `[1,2,2,3,3,null,null,4,4]`:

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

Return false.

### Solution:

Get the depth of subtrees and compare. Prune the DFS tree by returning `-1`.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isBalanced = function (root) {
  return getDepth(root) >= 0;
};

function getDepth(root) {
  if (!root) {
    return 0;
  }
  const leftDepth = getDepth(root.left);
  if (leftDepth < 0) {
    return -1;
  }
  const rightDepth = getDepth(root.right);
  if (rightDepth < 0) {
    return -1;
  }
  return Math.abs(leftDepth - rightDepth) <= 1
    ? Math.max(leftDepth, rightDepth) + 1
    : -1;
}
```

_Template generated via [Leetmark](https://github.com/crimx/crx-leetmark)._

---

Difficulty: Easy
Related Topics:
"Tree": https://leetcode.com/tag/tree
"Depth-first Search": https://leetcode.com/tag/depth-first-search
"Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
"Binary Tree Level Order Traversal": https://leetcode.com/problems/binary-tree-level-order-traversal
"Maximum Depth of Binary Tree": https://leetcode.com/problems/maximum-depth-of-binary-tree

---

## [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)

### Problem:

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.

**Example:**

Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its minimum depth = 2.

### Solution:

Ignore `null` children.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (root.left !== null && root.right !== null) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  } else if (root.left !== null) {
    return minDepth(root.left) + 1;
  } else {
    return minDepth(root.right) + 1;
  }
};
```
