Use these steps to solve _any_ problem, programming or otherwise.

1. [Understand](#understand)
2. [Plan](#plan)
3. [Execute](#execute)
4. [Reflect](#reflect)

You'll find many problems are made up of sub-problems. You can use these steps
on the main, outer problem, and use them on the inner sub-problems individually,
as well.

When you get to the end of the sequence, if you have the time, use what you have 
learned reflecting on the problem to repeat the steps and iterate on your
solution.

In CS you'll be expected to solve problems you've never seen before _without searching for the answer_. You'll have to use UPER to find the answer yourself. This mirrors the problem-solving skills you'll use every day on the job.

Remember: for most problems, the battle is won or lost with Understand and Plan. Don't undervalue these steps.

--------------------------------

<a name="understand"></a>
## 1. UNDERSTAND: What is the problem asking me to do?

This is where you transcribe the description of the problem from the page
into your head.

When interviewing, it's very important that you do this step aloud!

_(You aren't coding during this step, unless it's small pieces of throwaway
code to test a hypothesis.)_

### Questions

* What are the _inputs_ your code receives?
* What is the range of input?
* How big can the input be (how much data)?
* What are the _outputs_ your code produces?
* What is the range of output?
* How big can the output be (how much data)?
* How performant must the code be?
* What is missing from the task description?
* Are there third-party stakeholders who should be consulted?
* What assumptions are you making?
  * Do these assumptions need to be validated by anyone else on the team?

### Actions

* **[Ask questions!](https://zellwk.com/blog/asking-questions/)** If something is missing or unclear in the spec, get it
  clarified. **This is part of your job as a professional software developer**.
  * Be specific.
    * What errors did you get?
    * What do you think might be wrong?
  * Be clear and concise.
    * Include what you have to.
    * Don't include what you don't.
    * Use unambiguous language.
  * Show what solutions you've attempted so far.
* Don't fear this part of the process. Enjoy it. Think of the problem like a
  curiosity to be explored, not something that is there to antagonize you.
  * Being fearful or antagonized won't do you any favors at work or in an
    interview.
  * Problem solving is the fun part!
* Identify the components of the problem.
  * These are pieces that work together to solve it.
* If stuck, break the problem into smaller sub-problems. Solve those first using
  this very framework.
  * Once they're solved, you can compose them together into the main solution. 
* Rewrite the problem in your own words.
* Diagram how the data flows through the problem.
* _Think like a villain_. What kinds of input might break the program? Where
    is the description of the problem incomplete?
* Run through tests cases in your head or on paper to make sure the results
  are what you think they should be.
* If unable to get answers on something that's unclear in the spec, make your
  best guess, and document your assumptions and decision.

### You're done when

* You could successfuly explain this problem to someone who hasn't seen it
  before. Your explanation should be so thorough that they should be able to
  start planning an implementation themselves.

--------------------------------

<a name="plan"></a>
## 2. PLAN: What steps will I take to solve the problem?

This is where you take your description of the problem and turn it into a
complete, actionable plan to solve that problem.

If you find shortcomings in your understanding of the problem while you're
planning, briefly drop back to Step 1 until the ambiguity is resolved.

If you have not yet completed Step 1, you will end up planning to solve
the wrong problem!

When interviewing, it's very important that you do this step aloud!

_(You aren't coding during this step, unless it's small pieces of throwaway
code to test a hypothesis. Pseudocode should be written during this step,
however.)_

### Questions

* Do you know the answer to a related, similar problem?
  * That is, a problem that has similar inputs and outputs.
  * What does this problem remind you of, if anything?
  * Can that knowledge be brought to bear here?
* Does my plan meet the performance requirements?
  * What's the time complexity?
  * What's the space complexity?
  * How big can my input data be?
* Can sorting the input data ahead of time lead to any improvements in time
  complexity?
* Does recursion help?
  * Is the problem made up of identical subproblems?
  * Can you state the problem with itself in its own definition?
* _Think like a villain_. Does your plan cover the edge cases?

### Actions

* Solve the problem like a human.
  * If you're sorting something, imagine you have a pile of blocks in front
    of you that you must physically sort.
  * Break down the steps you take into small enough pieces for a computer to
    understand.
* Approach the problem from many angles.
* Get a brute-force solution as quickly as possible, even if it's not
  performant enough.
  * It can lead you toward better solutions.
* Come up with as many possible plans of attack as you can.
  * Choose the best one that satisfies performance needs.
* Try to solve a simpler version of the problem.
  * If the input is a 2D array, can you solve it for a 1D array?
  * If you need to count the number of ways you can eat cookies if you can
    eat 1, 2, or 3 at a time, try to solve it for the number of ways if you
    could eat 2 at a time. Or 1 at a time.
  * The solution to the simpler problem can lead to insights on the more
    complex problem.
* List the nouns and verbs in the problem description.
  * Map each one to an algorithm, process, data structure, object, method,
    function, etc.
* Perfect can be the enemy of good.
  * Even if your initial workable solution isn't performant enough, you can
    iterate later.
  * "Premature optimization is the root of all evil."

### You're done when

* You have pseudocode that's detailed enough to convert to real code.
* You are convinced the pseudocode represents a legitimate, working solution.

--------------------------------

<a name="execute"></a>
## 3. EXECUTE: How do I implement those steps?

This is where you take your plan and convert it to actual, working code. This
step isn't necessarily easy, but it's much easier if you do a good job with
Steps 1 and 2, above.

If you find shortcomings in your plan while you're implementing the solution,
briefly drop back to Step 2 until the ambiguity is resolved.

If you have not yet completed Step 2, you will spend far longer on this step
than you have to.

Remember: **Minutes of planning can be saved by hours of debugging!**

### Questions

* _Think like a villain_. Does your implementation robustly handle all inputs
  gracefully?
* What language is best to solve this problem?
  * Best technically?
  * Best for the company?
* What is the best way to split this code into functional modules?
* Are any of the modules reusable for later projects?
* Does this functionality already exist?
  * Are there built-in libraries I can leverage?
  * Are there third-party libraries I can leverage?
    * Are the licenses on those third-party libaries compatible with our
      needs?

### Actions

* Start a source code control repo (e.g. a git repo) immediately if one
  doesn't already exist.
* Convert your pseudocode and outlines into actual code.
* Don't Repeat Yourself (DRY): Remove redundant code as you write it.
* Document code as you write it.
  * Header blocks that contain usage information.
  * Comments where necessary.
* Write code clearly enough that comments aren't typically necessary.
* If comments help clarify or summarize a piece of code to a reader,
  definintely add comments.
* If you write code that's hackish or kludgy, fix it.
  * If you don't have time to fix it, comment it with:
    * Why you couldn't do it the Right Way (time constraints, etc.)
    * What needs to be done to make it Right.
* Follow the style guide for the company.
  * If no style guide is available, follow the style of the existing
    codebase.
  * If there is no existing style guide or codebase, choose the best one you
    can find.
* Write unit tests as required.
* Write end-to-end tests as required.

### You're done when

* The program works on good data.
* The program doesn't fail on bad data or edge cases.
* The program passes all tests.

--------------------------------

<a name="reflect"></a>
## 4. REFLECT: Is this implementation as good as I can make it?

### Questions

* Does your solution work in all cases?
  * Main case?
  * Edge cases?
* Is the solution performant enough?
* Is the code documented appropriately?
* In retrospect, what would have done differently? What will you do
  differently next time?
  * What went right?
  * What went wrong?

### Actions

* Document or implement any changes that still need to be made to the code.
* Document or remove any redundant code that should be refactored.
* Remove unused code.
* Document future shortcomings that will need to be addressed in the medium
  or long term.
* Identify and document algorithms that should be replaced with algorithms
  with better time complexity.
* Identify and document or remove redundant or unnecessary computation.
* Document any embarrasing code that needs to be fixed.
  * Why you couldn't do it the Right Way (time constraints, etc.)
  * What needs to be done to make it Right.

### You're done when

* You can't think of anything else to reflect upon.

--------------------------------

Inspired by [[Polya's Problem Solving Techniques]].