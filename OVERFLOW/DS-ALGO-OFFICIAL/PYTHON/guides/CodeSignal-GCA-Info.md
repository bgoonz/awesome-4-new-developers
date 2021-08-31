The test is four problems, which are CodeSignal/HackerRank/Leetcode-style programming challenges. Problem 1 is generally the easiest, progressing to the hardest with problem 4.

The result score is between 300 and 850 (best). 650 is about the low end for Junior Dev.

This test is about your problem-solving skill, not about your Googling skill. You are expected to ponder the problems and come up with your own solution. Pasting solutions in from elsewhere and trying to make them work is prohibited. Even googling for another solution is prohibited. (You can, however, search for syntax help.)

For this reason, you should practice this skill throughout CS. **CS is all about using UPER to solve problems you've never seen before without Googling, and the GCA measures this skill**.

## Background

Since GCA is designed to measure skills that are important for almost all software developers, CodeSignal has aimed to find the common denominator between three different sources of data.

1. What are the most common topics taught in different CS programs at 4-year Universities in the US?
2. What are the most common topics covered during technical interviews at successful US-based companies?
3. What are the most common questions asked on StackOverflow that are about general programming and not specialized domain knowledge?

CodeSignal has used MIT OCW, EdX, Coursera, and Udacity course catalogs as a source for #1. They've used the book _Cracking the Coding Interview_, CodeSignal Interview Practice Mode, Leetcode, CareerCup, and Glassdoor Interview Questions sections to identify #2. And StackOverflow public API for #3.

## How to Practice

Do the coursework in Lambda CS.

* Try to generally restrict your searching to syntax unless otherwise directed
* Don't search for problem solutions for the sprint challenges; syntax only
* Same for the GCA, proctor-enforced

Additional, optional resources:

* Go to the [CodeSignal Arcade](https://app.codesignal.com/arcade) and solve questions in _The Core_ without looking up the answer. If you look up the answer, it doesn't count.
  * Solve the first 50 problems
    * Except spend your earned coins to skip _Corner of 0s and 1s_
    * Some of these are challenging--feel free to buy your way ahead if you need to come back to a hard problem later
  * Keep solving more for more practice.
  * Once you get a few hundred coins, unlock the interview practice and other things in the main menu.

* Head over to Leetcode and tackle the easy and medium [leetcode algorithms](https://leetcode.com/problemset/algorithms/) problems, or problems on your site of choice.

* Take the [GCA Practice Test](https://app.codesignal.com/standardized-test/GgvonNCksGzjey46c) (24-hour cooldown).

## Scoring

If you get 100% of the tests passing on a submission for a set of problems, you'll get a base score, listed in the table below. This base score is modified up or down based on a variety of factors.

### Score Modifiers

The score is modified ±12 points based on three factors:

* Number of attempts
  * Your score will be modded if you make more or fewer than the average number of submissions for a particular problem.
  * Running the tests doesn't count as a submission. You must click the `Submit` button for it to count.
* Time taken
  * Your score will be modded if you take longer or shorter than the average amount of time to solve a problem.
* Code quality
  * Your code quality will be automatically judged based on a variety of factors, e.g.: consistent spacing and indentation.

Again, the most the base score will change as determined by these factors is ±12 points.

Strategy recommendation: don't worry about the modifiers. Just concentrate on UPER and solving the problem.

### Partial Credit

If you submit and pass fewer than 100% of the tests, you'll receive partial credit for the submission depending on how many tests you did pass. In other words, you won't achieve the base score for that problem, but will get part way toward the base score.

### Scoring Table

If you get 100% of tests passing for the listed questions in the left column, your base score is in the center. On the right is the modifier range, ±12 points from the base score.

|Correct Answers|Base Score|Modifier Range|
|:-:|:-:|:-:|
`1 . . .`|662|650-674|
`. 2 . .`|700|688-712|
`1 2 . .`|712|700-724|
`. . 3 .`|731|719-743|
`1 . 3 .`|743|731-755|
`. 2 3 .`|750|738-762|
`1 2 3 .`|763|751-775|
`. . . 4`|780|768-792|
`1 . . 4`|792|780-804|
`. 2 . 4`|799|787-811|
`. . 3 4`|805|793-817|
`1 2 . 4`|812|800-824|
`1 . 3 4`|818|806-830|
`. 2 3 4`|825|813-837|
`1 2 3 4`|837|825-849|

For example, if you get questions 1, 2, and 3 100% correct, but you make a lot of incorrect submissions and take longer than average, you'll to score closer to 751. If you get them correct in the first submission in record time, you'll score closer to 775.

Strategy recommendation: Choose the problem that looks the easiest to tackle first. This is likely question 1, but read them all to find out.

## Implementation, Problem-Solving, and Speed Ratings

In addition to the numeric score, additional ratings are presented. Lambda does not use these ratings, but they are included for your information.

Speed is your rating compared to the average speed to solve the problems.

The other two ratings are determined by which problems are solved, as shown below:

|Solved Tasks|Implementation|Problem-Solving|
|-|-|-|
|`1 . . .`|Low|Low|
|`. 2 . .`|Fair|Fair|
|`1 2 . .`|Fair|Fair|
|`1 2 3 .`|Good|Average|
|`1 2 . 4`|Good|Good|
|`1 2 3 4`|Excellent|Excellent|

## Question 1

_NOTE: these aren't definitive or complete lists! They don't say _exactly_ what will be on the test, and the test questions might require more or less knowledge than listed. The information below is included to give you an idea of the relative difficulty of each question._

### Expected Knowledge

* Working with numbers.
  * Basic operations with numbers.
* Basic string manipulation.
  * Splitting a string into substrings.
  * Modifying the elements of a string.
* Basic array manipulation.
  * Iterating over an array.

### Can Include

* Tasks that require a combination of 2 to 3 basic concepts. For example:
  * Iterating over an array and taking into account some condition.
  * Splitting a string by some condition.
* Should usually be solvable using one loop.
* The task description should clearly state the implementation steps.

## Question 2

### Expected Knowledge

* Working with numbers.
  * Basic operations with numbers.
  * Splitting numbers into digits.
* Basic string manipulation.
  * Splitting a string into substrings.
  * Comparing strings.
  * Modifying the elements of a string. – Concatenating strings.
  * Reversing a string.
* Basic array manipulation.
  * Iterating over an array.
  * Modifying the elements of an array.
  * Reversing an array.

### Can Include

* Tasks that require a combination of 3 to 5 basic concepts. For example:
  * Splitting a string into substrings, modifying each substring and comparing with other strings.
  * Iterating over an array to produce two new arrays given some conditions, modifying the second array and appending it to the beginning of the first array.
* Should usually be solvable using one to two nested loops.
* The task description should clearly state the implementation steps.

## Question 3

### Expected Knowledge

* Includes everything from the previous task.
* Splitting a task into smaller subtasks/functions.
* Manipulating two-dimensional arrays.
  * Iterating over the elements in a particular order.
  * Modifying values.
  * Swapping rows/columns.
* Using hashmaps.
  * Using built in hashmaps to store strings or integers as keys.

### Can Include

* Implementing a specific comparator for strings.
* Implementing a specific merge function for arrays.
* Other implementation challenges that clearly explain what needs to be done and require translating the instructions into code.

## Question 4

### Expected Knowledge

* Includes everything from previous tasks.
* Working with trees.
  * Storing and traversing trees.
  * Transforming trees.
* Understanding hashmaps.
  * Solving tasks that require understanding the implementation of hashmaps.
* Fundamentals of discrete mathematics.
* Brute-force search.
  * Checking all possible solutions to find the optimal solution.

### Can Include

* Tasks that require noticing an application of a certain algorithm, data-structure or technique.
* Optimizing some queries with the help of data structures like hashmaps or sets.
* Algorithms on trees like finding the longest path of a tree.

## Rules

* [GCA Setup and Proctoring Rules](https://support.codesignal.com/hc/en-us/articles/360051960134-General-Coding-Assessment-Rules-and-Setup)
* Additional clarifications to the rules:  
  * Using scratch paper is allowed, but make it obvious (and maybe even say) that you're scribbling.
  * Using an off-screen whiteboard is allowed, but make it obvious that's what you're doing.
  * Recommend _against_ referring to written notes since the proctor won't know what you're looking at.
    * Scan or take photos of your relevant notes so you can view them on-screen.
  * Prohibited: PythonTutor or any other external IDE, editor, debugger, or environment.
    * Exception: You **may** open a simple Python REPL in a terminal to quickly test commands or look up syntax.

## Testing Link

* **SIGN IN WITH YOUR LAMBDASTUDENTS EMAIL!** If you're not sure, go to your CodeSignal profile and make sure it's set as your primary email.
  * **IF YOU DON'T, YOUR ATTEMPT WON'T COUNT!**
* There is a 2-week cooldown (measured down to the minute of your previous submission).
* [Take the GCA Now](https://app.codesignal.com/get-certified?invite=TGy6wcugpm4LMFEQX)
  * If this link fails, DM `@Beej` on Slack to get it updated.

## See Also

* [What to Expect on the GCA](https://support.codesignal.com/hc/en-us/articles/360040370853-What-is-the-structure-of-the-General-Coding-Assessment-) including a link to the [practice test](https://app.codesignal.com/standardized-test/GgvonNCksGzjey46c)
* [Lambda's GCA HOWTO and FAQ](https://www.notion.so/lambdaschool/GCA-CodeSignal-Assessment-dc9f9d7a5ef24c40a309ad132c672e69)
