After working on React and practical stuff, getting to be better JS devs, we suddenly plunge into a breadth of all kinds of computer science-y topics. At first, these might seemingly be unrelated to anything that you might use in the field.

So _why_ do we teach it?

> Although the entire program at Lambda School is called _The CS Program_, six weeks of the program is dedicated to [Computer Science](https://en.wikipedia.org/wiki/Computer_science) topics. That is what this article is about.

This article is a more complete version of the information given in [this short video](https://youtu.be/3WoJ5MSZBJ4).

## Why We Teach Computer Science

### To Generally Improve Problem-Solving Skills

Working as a software developer, much of your career will be spent solving previously-unsolved problems. As you write more and more code, you'll get more practice solving problems.

It's a normal feeling to be presented by a problem from your supervisor or client and have no immediate idea how to solve it. In those cases, it's usually fine to say you need to research a solution before getting back to them. But the more you get used to the sensation of being presented with a problem of unknown difficulty, the more you'll realize that it's just a matter of figuring it out, just like you've done a hundred times before.

### To Practice Solving Really Hard Problems

Sometimes in the course of work, you'll be presented with truly giant and intimidating problem to solve. Flight instincts take over and you just _know_ you _can't do it_. But this is false.

Big, difficult problems are virtually always composed of a lot of small, surmountable problems. (The ones that are not tend to become famous in computer science, like the [Halting Problem](https://en.wikipedia.org/wiki/Halting_problem).)

Take a deep breath, relax, and start breaking the problem into subproblems. Eventually the subproblems will be small enough that you can take them on.

The more you practice this, the better at it you will become.

And, more importantly, the problems that _used_ to be hard, will retrospectively seem to be relatively easy compared to the monsters you've been taking on.

### Sharpen Your Programming Chops

Everything you write, even if it's something you've written before, will help you improve as a programmer. _Practice!_

And we do a lot of programming in the CS portion of the curriculum. The more you do, the better you become.

#### Learn New Languages

In addition to improving your JS skills, we'll tear into new languages! Notably C and Python.

Why learn new languages? This is something you'll have to do over and over throughout your career. Senior software devs are expected to be able to begin productively coding in a new language in about a week, and reach literate status in 2-3 weeks.

The first language you learn is the hardest. The second one is about half as hard to learn, and the third about half again. Our goal is to get those steps at least partly out of the way here at Lambda School so you're more prepared for it when you get out in the field.

Why Python? Python is a very popular, well-formed, and useful language. Although the syntax is farther from JavaScript than C is, it's an easy language to step into. There are a lot of Python shops out there.

*Why C?* Although C was at one time considered a high-level language, it's now considered a low-level language as so many more higher-level languages have been invented since its creation. We teach it because it gives you near-maximal perspective across the spectrum of languages. Low-level, high control, high speed, and minimal room for programming errors defines C programming. After learning it, JavaScript seems (and is) easy to program with.

*Why not C++?* Short answer: there's not enough time. While a really popular language, the nuances of the language are so many that giving adequate coverage to C++ in even three weeks is not possible.

> C gives you enough rope to hang yourself. C++ gives you enough to hang yourself and all your friends.

That said, after learning JS, Python, and C, C++ will be a _lot_ easier to pick up than it would be as a first language.

### Broaden Knowledge

Many solutions to problems will come to you as being related to other problems that you've already solved, even if they're not identical.

> Maybe you want to select random numbers in a range, but never select the same number twice. And you want to get new random numbers in _O(1)_ time. If you'd already implemented an efficient card shuffling algorithm in the past, you might recognize these as the same problem.

As you build the breadth of your knowledge, more and more of these connections will become apparent, and you will find them coming to indirectly apply to many challenges your daily work.

And this part of the program is absolutely about breadth. With the web curriculum, you dove deep into React and JS, but now we're going to use those well-honed skills to branch out and explore more of what the computing world has to offer.

### Learn the Language of Computer Science

Jargon and acronyms abound in Computer Science. While many of these are _du jour_, the deeper concepts survive for decades (and centuries). If you want to operate in the field and communicate effectively with your peers, it's important to know some of the mathematical and theoretical underpinnings of what makes software actually work.

### Learn Computer Architecture

When you first start programming, the computer is a mysterious, black box into which go commands and out of which come results. This can be unsettling, like swimming on the surface of the ocean without knowing what exactly is below you.

Also, it can impair your ability to effectively utilize the computer. If you don't know what it's doing at a low level, you might make choices at a high level that don't make proper use of the low-level components. While this is more of an issue in C/C++ than it is in JavaScript, knowing what is going on deep down will make you a better dev at the high level.

Learning about computer architecture aims to help with these issues. The machine is pretty simple deep down, and once that is laid bare, you'll be more comfortable working with it at any level.

### Learn State Machines and Regular Expressions

A state machine is one of the most basic models of computation. A process exists in a certain state, and different inputs cause it to move to different states. When it arrives at a particular state, it can perform some action, and wait to move to another state.

Many things in CS are modeled as state machines. (And indeed virtually all computational processes you will encounter can be represented by state machines.) NPCs in video games often exist in states. For example, a guard at a door might be in `GUARDING` state until it detects the player, at which point it switches to `CHASE` state.

Sometimes, especially for multi-stage processes in which you don't know which step will be taken next until it happens, a state machine is a useful way of modeling that process.

> Just about everything you do in dev will be a state machine, but the language usually abstracts the gritty details away from you behind functions, loops, and other constructs you have at your disposal.

In what might be a surprise, state machines are closely related to [_regular expressions_](https://en.wikipedia.org/wiki/Regular_expression). These are extremely commonly used to match patterns in strings, and are doubly common in JavaScript.

### Learn Algorithms, Data Structures, and Time Complexity

Knowing what algorithm to implement (or use from a library) can have great impacts on the time it takes for a process you implement to complete. A not-uncommon task at work is to take a job that completes in 5 minutes, and change it to complete in 10 seconds. 

Knowing how to analyze an algorithm can help you figure out what about the process is taking so long to complete.

And knowing the right algorithmic or data structure tool for the job can help you implement the right thing to get the runtime down.

Time complexity also helps you to _not_ overengineer a solution. If you know the difference between _O(n^2)_ and _O(n)_, that's really useful. And if you know that _n_ will never be more than 3, you'll know you might be OK with the easier _O(n^2)_ solution.

## How to Learn Computer Science

### It's A Big Playground

There is a _lot_ to learn in Computer Science. You can't learn it all since field knowledge is being created faster than any one person can learn it; for all intents and purposes, the amount of knowledge you stand to gain is infinite.

But you shouldn't find this to be a daunting task because you get to pick and choose from this larger-than-life selection what it is you want to study next. And you will never run out of options.

Choose things that look interesting, pursue them, and see where they lead. You'll find a lot of connections to a lot of topics that lead a lot of places.

And if you ever feel lost in the infinite ocean of topics out there, remember that you've learned to swim. Pick any subject, read up on it, and implement it. You'll soon find yourself feeling on track.

### You'll Get Out What You Put In

There are some subjects where you need to learn a vast collection of facts and then apply them in a systematic way. Although that statement sounds _computer-y_ on the surface, it does not reflect working in the computer field in the least.

A lot of people new to programming are somewhat surprised to find that software development is a very creative process, and a lot of thought goes into how to design and write your code.

In order to be proficient, you'll need to think beyond the facts presented to you by instructors, books, and tutorials, and learn how to creatively put these pieces together into the software that you're trying to build.

To get good at this, like with everything else, you need practice. If there are stretch goals for the project, implement them if you have time. If you think of alternate stretch goals, talk to the instructor and they'll certainly support you in those goals instead.

Just listening to instruction isn't enough. The more you code, the better you will be.

### Enjoy Solving Problems

Lots of times problem solving might seem like a drag. You might have been hoping for just an easy day at work, but these problems to solve keep coming your way!

It's a subtle change of perspective, but work to convince yourself that a problem to be solved presents an interesting and unique challenge. This might take some forcing at first.

But the secret is this: the more problems you solve, the easier problems become to solve. This is especially true if you remain in the same subfield for a while and build up a massive collection of domain knowledge. 

### Never Stop Learning

Because the field moves fast, you have to keep you chops sharp. This means practicing programming and problem solving, but it also means to keep on top of the latest and greatest things that come out.

This can be a challenge in web dev where a new test platform or framework is invented every week. Some of these are worth exploring; others aren't. There's a bit of a skill to waiting until something graduates from the bleeding edge before deciding it's worth looking into. There simply isn't enough time in the day to keep up with them all. Most of the new frameworks wither on the vine, but a few spring bigger than life.

But even the ones that don't make it might have interesting, alternative approaches to a certain set of problems that are worth adding to your arsenal.

It can be useful to get a newsreader and follow feeds on your favorite sites (reddit, or whichever). Just skimming the headlines gets you an idea of what's new and exciting. You can always read more if it's enticing.

Remember: it's a big computing world out there, yours to pursue as you choose!

# Mission Statement

### The goal of Computer Science is to de-mystify computers and computing and to help students write better code.

#### De-mystify computers and computing:

- Breadth of Technical Knowledge
Students should understand how code works, how computers work, how the internet works, and how they all work together.

- Sense of Scale
Students should be comfortable identifying and measuring complexity and understand techniques for refactoring code for scalability.

#### Write better code:

- Quality
Students code with a consistent eye toward scalability and readability, i.e. code that is efficient and easily maintained.

- Quantity
Students write large quantities of code every day, building the reps needed to overcome difficult challenges and build confidence.

- Diversity
Students tackle a variety of challenges, picking up a versatile set of skills and building comfort with the unknown.