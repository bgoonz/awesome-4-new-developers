## The Attempt is What Matters

These are tough problems, and a lot of you won't complete them in the time allotted. If you get the right answer, great. If not, that's fine too, _as long as you made the attempt_. Whether you get it right or not doesn't matter remotely as much as the time you spend trying to get the answer.

Every minute you work on a problem is 5 experience points. Getting the right answer is 0 experience points.

For the CS challenges, you don't need to pass the test. You just need to work on it.

## Remember UPER!

Remember [UPER](https://github.com/LambdaSchool/CS-Wiki/wiki/Lambda-Problem-Solving-Framework)!

Read the problem description slowly and carefully. Way more slowly and carefully than you need to. A mistake during _Understanding the Problem_ will result in a wrong answer.

The _Planning_ phase is equally important.

## Write Comments

While in the Planning phase, write comments in the editor and then turn them into code, leaving the comments behind for posterity.

If hiring managers ask you to complete a code challenge, they will grade you partially on how well-commented your code is.

That doesn't mean "tons of comments". It means "good, concise comments in the right places". 

## Use Whitespace

If strategically adding a blank line makes your code more readable, do it. Good coders are able to recognize logically-connected "paragraphs" in their code and put whitespace between them to increase readability.

## Try to use your core track language

It will help you keep the rust off.

## Remember the time complexities of various data structures

|Time Complexity to Access|Python|Swift|Obj-C|Kotlin|Java|
|:-:|:-:|:-:|:-:|:-:|:-:|
|`O(1)`|`dict`, `set`|`Dictionary`, `Set`|`NSDictionary`, `NSSet`|`HashMap`, `Array`|`HashMap`, `ArrayList`|
|`O(n)`|`list`|`Array`|`NSArray`|`LinkedList`|`LinkedList`|

Just because `O(1)` is performant doesn't mean it's always the right tool for the job. Use the right tool for the job!

## Get Familiar with the HackerRank UI and Process

This is a sticking point for many students. HackerRank has an interesting UI and it takes some getting used to. Their tests also have a consistent format and structure that you should explore and take the time to get familiar with.

* [Click here for a short HackerRank demo video](https://youtu.be/hWrxLqwplkc)

### Function input and output

The "input" is what gets passed to your function. This is likely different than the sample input they provide (that you might add to the `custom input` box). If you expand the main routine in the source code, you'll see how they parse the input and pass it to your function.

The "output" is what your function returns. Examine the spec for exactly what this.

Your function won't be tested on anything it `print()`s. Usefully, however, printed output appears in the `Debugging output` section at the bottom of the page after you run.

### Figure out what gets passed to your function

If you're having trouble figuring out exactly what your function gets passed to it, try this:

* Add a line of code to your function to print the parameter(s)
* Put the given sample case into the `custom input` box
* Run the program
* Check the output in the `Debugging Output` in the section at the bottom