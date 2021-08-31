![Open Source Society University (OSSU)](http://i.imgur.com/kYYCXtC.png)

### Open Source Society University

Path to a free self-taught education in Computer Science!

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Open Source Society University - Computer Science](https://img.shields.io/badge/OSSU-computer--science-blue.svg)](https://github.com/ossu/computer-science)

# Contents

- [Summary](#summary)
- [Community](#community)
- [Curriculum](#curriculum)
- [Code of conduct](#code-of-conduct)
- [Team](#team)

# Summary

The OSSU curriculum is a **complete education in computer science** using online materials. It’s not merely for career training or professional development. It’s for those who want a proper, _well-rounded_ grounding in concepts fundamental to all computing disciplines, and for those who have the discipline, will, and (most importantly!) good habits to obtain this education largely on their own, but with support from a worldwide community of fellow learners.

It is designed according to the degree requirements of undergraduate computer science majors, minus general education (non-CS) requirements, as it is assumed most of the people following this curriculum are already educated outside the field of CS. The courses themselves are among the very best in the world, often coming from Harvard, Princeton, MIT, etc., but specifically chosen to meet the following criteria.

**Courses must**: - Be open for enrollment - Run regularly (ideally in self-paced format, otherwise running multiple times per year) - Be of generally high quality in teaching materials and pedagogical principles - Match the curricular standards of the [CS 2013](CURRICULAR_GUIDELINES.md): Curriculum Guidelines for Undergraduate Degree Programs in Computer Science

When no course meets the above criteria, the coursework is supplemented with a book. When there are courses or books that don’t fit into the curriculum but are otherwise of high quality, they belong in [extras/courses](extras/courses.md) or [extras/readings](extras/readings.md).

**Organization**. The curriculum is designed as follows: - _Intro CS_: for students to try out CS and see if it’s right for them - _Core CS_: corresponds roughly to the first three years of a computer science curriculum, taking classes that all majors would be required to take - _Advanced CS_: corresponds roughly to the final year of a computer science curriculum, taking electives according to the student’s interests - _Final Project_: a project for students to validate, consolidate, and display their knowledge, to be evaluated by their peers worldwide

**Duration**. It is possible to finish within about 2 years if you plan carefully and devote roughly 20 hours/week to your studies. Learners can use [this spread](https://docs.google.com/spreadsheets/d/1bkUU90y4rKYQHwY5AR2iX6iiPTrPEsYs75GkCAkrgm4/copy) to estimate their end date. Make a copy and input your start date and expected hours per week in the `Timeline` sheet. As you work through courses you can enter your actual course completion dates in the `Curriculum Data` sheet and get updated completion estimates.

**Cost**. All or nearly all course material is available for free. However, some courses may charge money for assignments/tests/projects to be graded. Note that both [Coursera](https://learner.coursera.help/hc/en-us/articles/209819033-Apply-for-Financial-Aid) and [edX](https://courses.edx.org/financial-assistance/) offer financial aid.

Decide how much or how little to spend based on your own time and budget; just remember that you can’t purchase success!

**Process**. Students can work through the curriculum alone or in groups, in order or out of order. - We recommend doing all courses in Core CS, only skipping a course when you are certain that you’ve already learned the material previously. - For simplicity, we recommend working through courses (especially Core CS) in order from top to bottom, as they have already been [topologically sorted](https://en.wikipedia.org/wiki/Topological_sorting) by their prerequisites. - Courses in Advanced CS are electives. Choose one subject (e.g. Advanced programming) you want to become an expert in and take all the courses under that heading. You can also create your own custom subject, but we recommend getting validation from the community on the subject you choose.

**Content policy**. If you plan on showing off some of your coursework publicly, you must share only files that you are allowed to. _Do NOT disrespect the code of conduct_ that you signed in the beginning of each course!

**[How to contribute](CONTRIBUTING.md)**

**[Getting help](HELP.md)** (Details about our FAQ and chatroom)

# Community

- We have a discord server! [![Discord](https://img.shields.io/discord/744385009028431943.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/wuytwK5s9h) This should be your first stop to talk with other OSSU students. Why don’t you introduce yourself right now? [Join the OSSU Discord](https://discord.gg/wuytwK5s9h)
- You can also interact through GitHub issues. If there is a problem with a course, or a change needs to be made to the curriculum, this is the place to start the conversation. Read more [here](CONTRIBUTING.md).
- Subscribe to our [newsletter](https://tinyletter.com/OpenSourceSocietyUniversity).
- Add **Open Source Society University** to your [Linkedin](https://www.linkedin.com/school/11272443/) profile!
- Note: There is an unmaintained and deprecated firebase app that you might find when searching OSSU. You can safely ignore it. Read more in the [FAQ](./FAQ.md#why-is-the-firebase-ossu-app-different-or-broken).

# Curriculum

**Curriculum version**: `8.0.0` (see [CHANGELOG](CHANGELOG.md))

- [Prerequisites](#prerequisites)
- [Intro CS](#intro-cs)
  - [Introduction to Programming](#introduction-to-programming)
  - [Introduction to Computer Science](#introduction-to-computer-science)
- [Core CS](#core-cs)
  - [Core programming](#core-programming)
  - [Core math](#core-math)
  - [CS Tools](#cs-tools)
  - [Core systems](#core-systems)
  - [Core theory](#core-theory)
  - [Core applications](#core-applications)
  - [Core security](#core-security)
- [Advanced CS](#advanced-cs)
  - [Advanced programming](#advanced-programming)
  - [Advanced systems](#advanced-systems)
  - [Advanced theory](#advanced-theory)
  - [Advanced math](#advanced-math)
- [Final project](#final-project)

---

## Prerequisites

- [Core CS](#core-cs) assumes the student has already taken [high school math](https://github.com/ossu/computer-science/blob/master/FAQ.md#how-can-i-review-the-math-prerequisites), including algebra, geometry, and pre-calculus.
- [Advanced CS](#advanced-cs) assumes the student has already taken the entirety of Core CS and is knowledgeable enough now to decide which electives to take.
- Note that [Advanced systems](#advanced-systems) assumes the student has taken a basic physics course (e.g. AP Physics in high school).

## Intro CS

### Introduction to Programming

If you’ve never written a for-loop, or don’t know what a string is in programming, start here. This course is self-paced, allowing you to adjust the number of hours you spend per week to meet your needs.

**Topics covered**: `simple programs` `simple data structures`

<table><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th><th style="text-align: center;">Discussion</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://www.py4e.com/lessons">Python for Everybody</a></td><td style="text-align: center;">10 weeks</td><td style="text-align: center;">10 hours/week</td><td style="text-align: center;">none</td><td style="text-align: center;"><a href="https://discord.gg/syA242Z">chat</a></td></tr></tbody></table>

### Introduction to Computer Science

This course will introduce you to the world of computer science. Students who have been introduced to programming, either from the courses above or through study elsewhere, should take this course for a flavor of the material to come. If you finish the course wanting more, Computer Science is likely for you!

**Topics covered**: `computation` `imperative programming` `basic data structures and algorithms` `and more`

<table style="width:99%;"><colgroup><col style="width: 15%" /><col style="width: 21%" /><col style="width: 21%" /><col style="width: 21%" /><col style="width: 21%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th><th style="text-align: center;">Discussion</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-10">Introduction to Computer Science and Programming using Python</a> (<a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/">alt</a>)</td><td style="text-align: center;">9 weeks</td><td style="text-align: center;">15 hours/week</td><td style="text-align: center;"><a href="https://www.khanacademy.org/math/algebra-home">high school algebra</a></td><td style="text-align: center;"><a href="https://discord.gg/jvchSm9">chat</a></td></tr></tbody></table>

## Core CS

All coursework under Core CS is **required**, unless otherwise indicated.

### Core programming

**Topics covered**: `functional programming` `design for testing` `program requirements` `common design patterns` `unit testing` `object-oriented design` `static typing` `dynamic typing` `ML-family languages (via Standard ML)` `Lisp-family languages (via Racket)` `Ruby` `and more`

The How to Code courses are based on the textbook [How to Design Programs](https://htdp.org/2003-09-26/). The First Edition is available for free online and includes problem sets and solutions. Students are encouraged to do these assignments.

<table style="width:99%;"><colgroup><col style="width: 15%" /><col style="width: 21%" /><col style="width: 21%" /><col style="width: 21%" /><col style="width: 21%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th><th style="text-align: center;">Discussion</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://www.edx.org/course/how-to-code-simple-data">How to Code - Simple Data</a></td><td style="text-align: center;">7 weeks</td><td style="text-align: center;">8-10 hours/week</td><td style="text-align: center;">none</td><td style="text-align: center;"><a href="https://discord.gg/RfqAmGJ">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.edx.org/course/how-to-code-complex-data">How to Code - Complex Data</a></td><td style="text-align: center;">6 weeks</td><td style="text-align: center;">8-10 hours/week</td><td style="text-align: center;">How to Code: Simple Data</td><td style="text-align: center;"><a href="https://discord.gg/kczJzpm">chat</a></td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.coursera.org/learn/programming-languages">Programming Languages, Part A</a></td><td style="text-align: center;">5 weeks</td><td style="text-align: center;">4-8 hours/week</td><td style="text-align: center;">How to Code (<a href="https://www.coursera.org/lecture/programming-languages/recommended-background-k1yuh">Hear instructor</a>)</td><td style="text-align: center;"><a href="https://discord.gg/8BkJtXN">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.coursera.org/learn/programming-languages-part-b">Programming Languages, Part B</a></td><td style="text-align: center;">3 weeks</td><td style="text-align: center;">4-8 hours/week</td><td style="text-align: center;">Programming Languages, Part A</td><td style="text-align: center;"><a href="https://discord.gg/EeA7VR9">chat</a></td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.coursera.org/learn/programming-languages-part-c">Programming Languages, Part C</a></td><td style="text-align: center;">3 weeks</td><td style="text-align: center;">4-8 hours/week</td><td style="text-align: center;">Programming Languages, Part B</td><td style="text-align: center;"><a href="https://discord.gg/8EZUVbA">chat</a></td></tr></tbody></table>

### Core Math

Discrete math (Math for CS) is a prerequisite and closely related to the study of algorithms and data structures. Calculus both prepares students for discrete math and helps students develop mathematical maturity.

**Topics covered**: `discrete mathematics` `mathematical proofs` `basic statistics` `O-notation` `discrete probability` `and more`

<table style="width:98%;"><colgroup><col style="width: 13%" /><col style="width: 17%" /><col style="width: 17%" /><col style="width: 17%" /><col style="width: 17%" /><col style="width: 17%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Notes</th><th style="text-align: center;">Prerequisites</th><th style="text-align: center;">Discussion</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://openlearninglibrary.mit.edu/courses/course-v1:MITx+18.01.1x+2T2019/about">Calculus 1A: Differentiation</a> (<a href="https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/index.htm">alt</a>)</td><td style="text-align: center;">13 weeks</td><td style="text-align: center;">6-10 hours/week</td><td style="text-align: center;">The alternate covers this and the following 2 courses</td><td style="text-align: center;"><a href="FAQ.md#how-can-i-review-the-math-prerequisites">high school math</a></td><td style="text-align: center;"><a href="https://discord.gg/mPCt45F">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://openlearninglibrary.mit.edu/courses/course-v1:MITx+18.01.2x+3T2019/about">Calculus 1B: Integration</a></td><td style="text-align: center;">13 weeks</td><td style="text-align: center;">5-10 hours/week</td><td style="text-align: center;">-</td><td style="text-align: center;">Calculus 1A</td><td style="text-align: center;"><a href="https://discord.gg/sddAsZg">chat</a></td></tr><tr class="odd"><td style="text-align: left;"><a href="https://openlearninglibrary.mit.edu/courses/course-v1:MITx+18.01.3x+1T2020/about">Calculus 1C: Coordinate Systems &amp; Infinite Series</a></td><td style="text-align: center;">6 weeks</td><td style="text-align: center;">5-10 hours/week</td><td style="text-align: center;">-</td><td style="text-align: center;">Calculus 1B</td><td style="text-align: center;"><a href="https://discord.gg/FNEcNNq">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://openlearninglibrary.mit.edu/courses/course-v1:OCW+6.042J+2T2019/about">Mathematics for Computer Science</a> (<a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/index.htm">alt</a>)</td><td style="text-align: center;">13 weeks</td><td style="text-align: center;">5 hours/week</td><td style="text-align: center;">An alternate version with solutions to the problem sets is <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2005/assignments/">here</a>. Students struggling can consider the <a href="https://www.coursera.org/specializations/discrete-mathematics">Discrete Mathematics Specialization</a> first. It is more interactive but less comprehensive, and costs money to unlock full interactivity.</td><td style="text-align: center;">Calculus 1C</td><td style="text-align: center;"><a href="https://discord.gg/EuTzNbF">chat</a></td></tr></tbody></table>

### CS Tools

Understanding theory is important, but you will also be expected to create programs. There are a number of tools that are widely used to make that process easier. Learn them now to ease your future work writing programs.

**Topics covered**: `terminals and shell scripting` `vim` `command line environments` `version control` `and more`

<table><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th><th style="text-align: center;">Discussion</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://missing.csail.mit.edu/">The Missing Semester of Your CS Education</a></td><td style="text-align: center;">2 weeks</td><td style="text-align: center;">12 hours/week</td><td style="text-align: center;">-</td><td style="text-align: center;"><a href="https://discord.gg/5FvKycS">chat</a></td></tr></tbody></table>

### Core systems

**Topics covered**: `procedural programming` `manual memory management` `boolean algebra` `gate logic` `memory` `computer architecture` `assembly` `machine language` `virtual machines` `high-level languages` `compilers` `operating systems` `network protocols` `and more`

<table style="width:98%;"><colgroup><col style="width: 13%" /><col style="width: 17%" /><col style="width: 17%" /><col style="width: 17%" /><col style="width: 17%" /><col style="width: 17%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Additional Text / Assignments</th><th style="text-align: center;">Prerequisites</th><th style="text-align: center;">Discussion</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://www.coursera.org/learn/build-a-computer">Build a Modern Computer from First Principles: From Nand to Tetris</a> (<a href="http://www.nand2tetris.org/">alt</a>)</td><td style="text-align: center;">6 weeks</td><td style="text-align: center;">7-13 hours/week</td><td style="text-align: center;">-</td><td style="text-align: center;">C-like programming language</td><td style="text-align: center;"><a href="https://discord.gg/vxB2DRV">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.coursera.org/learn/nand2tetris2">Build a Modern Computer from First Principles: Nand to Tetris Part II</a></td><td style="text-align: center;">6 weeks</td><td style="text-align: center;">12-18 hours/week</td><td style="text-align: center;">-</td><td style="text-align: center;">one of <a href="https://user-images.githubusercontent.com/2046800/35426340-f6ce6358-026a-11e8-8bbb-4e95ac36b1d7.png">these programming languages</a>, From Nand to Tetris Part I</td><td style="text-align: center;"><a href="https://discord.gg/AsUXcPu">chat</a></td></tr><tr class="odd"><td style="text-align: left;"><a href="http://pages.cs.wisc.edu/~remzi/Classes/537/Spring2018/">Operating Systems: Three Easy Pieces</a></td><td style="text-align: center;">10-12 weeks</td><td style="text-align: center;">6-10 hours/week</td><td style="text-align: center;">-</td><td style="text-align: center;">algorithms, <a href="https://hackr.io/tutorials/learn-c?sort=upvotes&amp;type_tags%5B%5D=1">familiarity with C</a> is useful</td><td style="text-align: center;"><a href="https://discord.gg/wZNgpep">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="http://gaia.cs.umass.edu/kurose_ross/online_lectures.htm">Computer Networking: a Top-Down Approach</a></td><td style="text-align: center;">8 weeks</td><td style="text-align: center;">4–12 hours/week</td><td style="text-align: center;"><a href="http://gaia.cs.umass.edu/kurose_ross/wireshark.htm">Wireshark Labs</a></td><td style="text-align: center;">algebra, probability, basic CS</td><td style="text-align: center;"><a href="https://discord.gg/MJ9YXyV">chat</a></td></tr></tbody></table>

### Core theory

**Topics covered**: `divide and conquer` `sorting and searching` `randomized algorithms` `graph search` `shortest paths` `data structures` `greedy algorithms` `minimum spanning trees` `dynamic programming` `NP-completeness` `and more`

<table style="width:99%;"><colgroup><col style="width: 15%" /><col style="width: 21%" /><col style="width: 21%" /><col style="width: 21%" /><col style="width: 21%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th><th style="text-align: center;">Discussion</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://www.coursera.org/learn/algorithms-divide-conquer">Divide and Conquer, Sorting and Searching, and Randomized Algorithms</a></td><td style="text-align: center;">4 weeks</td><td style="text-align: center;">4-8 hours/week</td><td style="text-align: center;">any programming language, Mathematics for Computer Science</td><td style="text-align: center;"><a href="https://discord.gg/mKRS7tY">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.coursera.org/learn/algorithms-graphs-data-structures">Graph Search, Shortest Paths, and Data Structures</a></td><td style="text-align: center;">4 weeks</td><td style="text-align: center;">4-8 hours/week</td><td style="text-align: center;">Divide and Conquer, Sorting and Searching, and Randomized Algorithms</td><td style="text-align: center;"><a href="https://discord.gg/Qstqe4t">chat</a></td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.coursera.org/learn/algorithms-greedy">Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming</a></td><td style="text-align: center;">4 weeks</td><td style="text-align: center;">4-8 hours/week</td><td style="text-align: center;">Graph Search, Shortest Paths, and Data Structures</td><td style="text-align: center;"><a href="https://discord.gg/dWVvjuz">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.coursera.org/learn/algorithms-npcomplete">Shortest Paths Revisited, NP-Complete Problems and What To Do About Them</a></td><td style="text-align: center;">4 weeks</td><td style="text-align: center;">4-8 hours/week</td><td style="text-align: center;">Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming</td><td style="text-align: center;"><a href="https://discord.gg/dYuY78u">chat</a></td></tr></tbody></table>

### Core Security

**Topics covered** `Confidentiality, Integrity, Availability` `Secure Design` `Defensive Programming` `Threats and Attacks` `Network Security` `Cryptography` `and more`

Note: **_These courses are provisionally recommended_**. There is an open [Request For Comment](https://github.com/ossu/computer-science/issues/639) on security course selection. Contributors are encouraged to compare the various courses in the RFC and offer feedback.

<table><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th><th style="text-align: center;">Discussion</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://www.coursera.org/learn/information-security-data">Information Security: Context and Introduction</a></td><td style="text-align: center;">5 weeks</td><td style="text-align: center;">3 hours/week</td><td style="text-align: center;">-</td><td style="text-align: center;"><a href="https://discord.gg/8h6Rz8g">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.coursera.org/learn/secure-coding-principles">Principles of Secure Coding</a></td><td style="text-align: center;">4 weeks</td><td style="text-align: center;">4 hours/week</td><td style="text-align: center;">-</td><td style="text-align: center;"><a href="https://discord.gg/5gMdeSK">chat</a></td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.coursera.org/learn/identifying-security-vulnerabilities">Identifying Security Vulnerabilities</a></td><td style="text-align: center;">4 weeks</td><td style="text-align: center;">4 hours/week</td><td style="text-align: center;">-</td><td style="text-align: center;"><a href="https://discord.gg/V78MjUS">chat</a></td></tr></tbody></table>

Choose **one** of the following: Courses | Duration | Effort | Prerequisites | Discussion :– | :–: | :–: | :–: | :–: [Identifying Security Vulnerabilities in C/C++Programming](https://www.coursera.org/learn/identifying-security-vulnerabilities-c-programming) | 4 weeks | 5 hours/week | - | [chat](https://discord.gg/Vbxce7A) [Exploiting and Securing Vulnerabilities in Java Applications](https://www.coursera.org/learn/exploiting-securing-vulnerabilities-java-applications) | 4 weeks | 5 hours/week | - | [chat](https://discord.gg/QxC22rR)

### Core applications

**Topics covered**: `Agile methodology` `REST` `software specifications` `refactoring` `relational databases` `transaction processing` `data modeling` `neural networks` `supervised learning` `unsupervised learning` `OpenGL` `raytracing` `and more`

<table style="width:99%;"><colgroup><col style="width: 15%" /><col style="width: 21%" /><col style="width: 21%" /><col style="width: 21%" /><col style="width: 21%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th><th style="text-align: center;">Discussion</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://www.edx.org/course/modeling-and-theory">Databases: Modeling and Theory</a></td><td style="text-align: center;">2 weeks</td><td style="text-align: center;">10 hours/week</td><td style="text-align: center;">core programming</td><td style="text-align: center;"><a href="https://discord.gg/pMFqNf4">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.edx.org/course/databases-5-sql">Databases: Relational Databases and SQL</a></td><td style="text-align: center;">2 weeks</td><td style="text-align: center;">10 hours/week</td><td style="text-align: center;">core programming</td><td style="text-align: center;"><a href="https://discord.gg/P8SPPyF">chat</a></td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.edx.org/course/semistructured-data">Databases: Semistructured Data</a></td><td style="text-align: center;">2 weeks</td><td style="text-align: center;">10 hours/week</td><td style="text-align: center;">core programming</td><td style="text-align: center;"><a href="https://discord.gg/duCJ3GN">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.coursera.org/learn/machine-learning">Machine Learning</a></td><td style="text-align: center;">11 weeks</td><td style="text-align: center;">4-6 hours/week</td><td style="text-align: center;">linear algebra</td><td style="text-align: center;"><a href="https://discord.gg/NcXHDjy">chat</a></td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.edx.org/course/computer-graphics-uc-san-diegox-cse167x">Computer Graphics</a></td><td style="text-align: center;">6 weeks</td><td style="text-align: center;">12 hours/week</td><td style="text-align: center;">C++ or Java, linear algebra</td><td style="text-align: center;"><a href="https://discord.gg/68WqMNV">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.edx.org/course/software-engineering-introduction-ubcx-softeng1x">Software Engineering: Introduction</a></td><td style="text-align: center;">6 weeks</td><td style="text-align: center;">8-10 hours/week</td><td style="text-align: center;">Core Programming, and a <a href="FAQ.md#why-require-experience-with-a-sizable-project-before-the-Software-Engineering-courses">sizable project</a></td><td style="text-align: center;"><a href="https://discord.gg/5Qtcwtz">chat</a></td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.edx.org/course/software-development-capstone-project-ubcx-softengprjx">Software Development Capstone Project</a></td><td style="text-align: center;">6-7 weeks</td><td style="text-align: center;">8-10 hours/week</td><td style="text-align: center;">Software Engineering: Introduction</td><td style="text-align: center;"><a href="https://discord.gg/2FAujEZ">chat</a></td></tr></tbody></table>

## Advanced CS

After completing **every required course** in Core CS, students should choose a subset of courses from Advanced CS based on interest. Not every course from a subcategory needs to be taken. But students should take _every_ course that is relevant to the field they intend to go into.

### Advanced programming

**Topics covered**: `debugging theory and practice` `goal-oriented programming` `parallel computing` `object-oriented analysis and design` `UML` `large-scale software architecture and design` `and more`

<table style="width:98%;"><colgroup><col style="width: 20%" /><col style="width: 26%" /><col style="width: 26%" /><col style="width: 26%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://www.coursera.org/learn/parprog1">Parallel Programming</a></td><td style="text-align: center;">4 weeks</td><td style="text-align: center;">6-8 hours/week</td><td style="text-align: center;">Scala programming</td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.edx.org/course/compilers">Compilers</a></td><td style="text-align: center;">9 weeks</td><td style="text-align: center;">6-8 hours/week</td><td style="text-align: center;">none</td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.seas.upenn.edu/~cis194/fall16/">Introduction to Haskell</a></td><td style="text-align: center;">14 weeks</td><td style="text-align: center;">-</td><td style="text-align: center;">-</td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.let.rug.nl/bos/lpn//lpnpage.php?pageid=online">Learn Prolog Now!</a> (<a href="https://github.com/ossu/computer-science/files/6085884/lpn.pdf">alt</a>)*</td><td style="text-align: center;">12 weeks</td><td style="text-align: center;">-</td><td style="text-align: center;">-</td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.udacity.com/course/software-debugging--cs259">Software Debugging</a></td><td style="text-align: center;">8 weeks</td><td style="text-align: center;">6 hours/week</td><td style="text-align: center;">Python, object-oriented programming</td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.udacity.com/course/software-testing--cs258">Software Testing</a></td><td style="text-align: center;">4 weeks</td><td style="text-align: center;">6 hours/week</td><td style="text-align: center;">Python, programming experience</td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.udacity.com/course/software-architecture-design--ud821">Software Architecture &amp; Design</a></td><td style="text-align: center;">8 weeks</td><td style="text-align: center;">6 hours/week</td><td style="text-align: center;">software engineering in Java</td></tr></tbody></table>

(\*) book by Blackburn, Bos, Striegnitz (compiled from [source](https://github.com/LearnPrologNow/lpn), redistributed under [CC license](http://creativecommons.org/licenses/by-sa/4.0/))

### Advanced systems

**Topics covered**: `digital signaling` `combinational logic` `CMOS technologies` `sequential logic` `finite state machines` `processor instruction sets` `caches` `pipelining` `virtualization` `parallel processing` `virtual memory` `synchronization primitives` `system call interface` `and more`

<table style="width:98%;"><colgroup><col style="width: 20%" /><col style="width: 26%" /><col style="width: 26%" /><col style="width: 26%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://www.edx.org/course/computation-structures-part-1-digital-circuits">Computation Structures 1: Digital Circuits</a></td><td style="text-align: center;">10 weeks</td><td style="text-align: center;">6 hours/week</td><td style="text-align: center;"><a href="https://www.coursera.org/learn/nand2tetris2">Nand2Tetris II</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.edx.org/course/computation-structures-2-computer-architecture-2">Computation Structures 2: Computer Architecture</a></td><td style="text-align: center;">10 weeks</td><td style="text-align: center;">6 hours/week</td><td style="text-align: center;">Computation Structures 1</td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.edx.org/course/computation-structures-3-computer-organization-2">Computation Structures 3: Computer Organization</a></td><td style="text-align: center;">10 weeks</td><td style="text-align: center;">6 hours/week</td><td style="text-align: center;">Computation Structures 2</td></tr></tbody></table>

### Advanced theory

**Topics covered**: `formal languages` `Turing machines` `computability` `event-driven concurrency` `automata` `distributed shared memory` `consensus algorithms` `state machine replication` `computational geometry theory` `propositional logic` `relational logic` `Herbrand logic` `game trees` `and more`

<table style="width:98%;"><colgroup><col style="width: 20%" /><col style="width: 26%" /><col style="width: 26%" /><col style="width: 26%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="http://aduni.org/courses/theory/index.php?view=cw">Theory of Computation</a> (<a href="https://www.youtube.com/playlist?list=PLTke5lHMAdSNmi57H0DOTzClHPK6UwSTN">Lectures</a>)</td><td style="text-align: center;">8 weeks</td><td style="text-align: center;">10 hours/week</td><td style="text-align: center;">discrete mathematics, logic, algorithms</td></tr><tr class="even"><td style="text-align: left;"><a href="https://www.edx.org/course/computational-geometry-tsinghuax-70240183x">Computational Geometry</a></td><td style="text-align: center;">16 weeks</td><td style="text-align: center;">8 hours/week</td><td style="text-align: center;">algorithms, C++</td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.coursera.org/learn/game-theory-1">Game Theory</a></td><td style="text-align: center;">8 weeks</td><td style="text-align: center;">3 hours/week</td><td style="text-align: center;">mathematical thinking, probability, calculus</td></tr></tbody></table>

### Advanced math

<table><thead><tr class="header"><th style="text-align: left;">Courses</th><th style="text-align: center;">Duration</th><th style="text-align: center;">Effort</th><th style="text-align: center;">Prerequisites</th><th style="text-align: center;">Discussion</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">Essence of Linear Algebra</a></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td style="text-align: center;"><a href="FAQ.md#how-can-i-review-the-math-prerequisites">high school math</a></td><td style="text-align: center;"><a href="https://discord.gg/m6wHbP6">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/">Linear Algebra</a></td><td style="text-align: center;">14 weeks</td><td style="text-align: center;">12 hours/week</td><td style="text-align: center;">Essence of Linear Algebra</td><td style="text-align: center;"><a href="https://discord.gg/k7nSWJH">chat</a></td></tr><tr class="odd"><td style="text-align: left;"><a href="https://www.coursera.org/learn/logic-introduction">Introduction to Logic</a></td><td style="text-align: center;">10 weeks</td><td style="text-align: center;">4-8 hours/week</td><td style="text-align: center;"><a href="https://www.youtube.com/playlist?list=PL5KkMZvBpo5AH_5GpxMiryJT6Dkj32H6N">set theory</a></td><td style="text-align: center;"><a href="https://discord.gg/MbM2Gg5">chat</a></td></tr><tr class="even"><td style="text-align: left;"><a href="https://projects.iq.harvard.edu/stat110/home">Probability</a></td><td style="text-align: center;">24 weeks</td><td style="text-align: center;">12 hours/week</td><td style="text-align: center;"><a href="https://www.edx.org/course/calculus-1b-integration">Differentiation and Integration</a></td><td style="text-align: center;"><a href="https://discord.gg/UVjs9BU">chat</a></td></tr></tbody></table>

## Final project

OSS University is project-focused. The assignments and exams for each course are to prepare you to use your knowledge to solve real-world problems.

After you’ve gotten through all of Core CS and the parts of Advanced CS relevant to you, you should think about a problem that you can solve using the knowledge you’ve acquired. Not only does real project work look great on a resume, but the project will also validate and consolidate your knowledge. You can create something entirely new, or you can find an existing project that needs help via websites like [CodeTriage](https://www.codetriage.com/) or [First Timers Only](http://www.firsttimersonly.com/).

Students who would like more guidance in creating a project may choose to use a series of project oriented courses. Here is a sample of options (many more are available, at this point you should be capable of identifying a series that is interesting and relevant to you): Courses | Duration | Effort | Prerequisites :– | :–: | :–: | :–: [Fullstack Open](https://fullstackopen.com/en) | 12 weeks | 6 hours/week | programming [Modern Robotics (Specialization)](https://www.coursera.org/specializations/modernrobotics) | 26 weeks | 2-5 hours/week | freshman-level physics, linear algebra, calculus, [linear ordinary differential equations](https://www.khanacademy.org/math/differential-equations) [Data Mining (Specialization)](https://www.coursera.org/specializations/data-mining) | 30 weeks | 2-5 hours/week | machine learning [Big Data (Specialization)](https://www.coursera.org/specializations/big-data) | 30 weeks | 3-5 hours/week | none [Internet of Things (Specialization)](https://www.coursera.org/specializations/internet-of-things) | 30 weeks | 1-5 hours/week | strong programming [Cloud Computing (Specialization)](https://www.coursera.org/specializations/cloud-computing) | 30 weeks | 2-6 hours/week | C++ programming [Data Science (Specialization)](https://www.coursera.org/specializations/jhu-data-science) | 43 weeks | 1-6 hours/week | none [Functional Programming in Scala (Specialization)](https://www.coursera.org/specializations/scala) | 29 weeks | 4-5 hours/week | One year programming experience [Game Design and Development with Unity 2020 (Specialization)](https://www.coursera.org/specializations/game-design-and-development) | 6 months | 5 hours/week | programming, interactive design

### Evaluation

Upon completing your final project: - Submit your project’s information to [PROJECTS](PROJECTS.md) via a pull request. - Put the OSSU-CS badge in the README of your repository! [![Open Source Society University - Computer Science](https://img.shields.io/badge/OSSU-computer--science-blue.svg)](https://github.com/ossu/computer-science)

- Markdown: `[![Open Source Society University - Computer Science](https://img.shields.io/badge/OSSU-computer--science-blue.svg)](https://github.com/ossu/computer-science)`
- HTML: `<a href="https://github.com/ossu/computer-science"><img alt="Open Source Society University - Computer Science" src="https://img.shields.io/badge/OSSU-computer--science-blue.svg"></a>`
- Use our [community](#community) channels to announce it to your fellow students.

Solicit feedback from your OSSU peers. You will not be “graded” in the traditional sense — everyone has their own measurements for what they consider a success. The purpose of the evaluation is to act as your first announcement to the world that you are a computer scientist and to get experience listening to feedback — both positive and negative.

The final project evaluation has a second purpose: to evaluate whether OSSU, through its community and curriculum, is successful in its mission to guide independent learners in obtaining a world-class computer science education.

### Cooperative work

You can create this project alone or with other students! **We love cooperative work**! Use our [channels](#community) to communicate with other fellows to combine and create new projects!

### Which programming languages should I use?

My friend, here is the best part of liberty! You can use **any** language that you want to complete the final project.

The important thing is to **internalize** the core concepts and to be able to use them with whatever tool (programming language) that you wish.

## Congratulations

After completing the requirements of the curriculum above, you will have completed the equivalent of a full bachelor’s degree in Computer Science. Congratulations!

What is next for you? The possibilities are boundless and overlapping:

- Look for a job as a developer!
- Check out the [readings](extras/readings.md) for classic books you can read that will sharpen your skills and expand your knowledge.
- Join a local developer meetup (e.g. via [meetup.com](https://www.meetup.com/)).
- Pay attention to emerging technologies in the world of software development:
  - Explore the **actor model** through [Elixir](http://elixir-lang.org/), a new functional programming language for the web based on the battle-tested Erlang Virtual Machine!
  - Explore **borrowing and lifetimes** through [Rust](https://www.rust-lang.org/), a systems language which achieves memory- and thread-safety without a garbage collector!
  - Explore **dependent type systems** through [Idris](https://www.idris-lang.org/), a new Haskell-inspired language with unprecedented support for type-driven development.

![keep learning](http://i.imgur.com/REQK0VU.jpg)

# Code of conduct

[OSSU’s code of conduct](https://github.com/ossu/code-of-conduct).

## How to show your progress

1.  Create an account in [Trello](https://trello.com/).
2.  Copy [this](https://trello.com/b/IScNSzsI/ossu-compsci) board to your personal account. See how to copy a board [here](https://help.trello.com/article/802-copying-cards-lists-or-boards).

Now that you have a copy of our official board, you just need to pass the cards to the `Doing` column or `Done` column as you progress in your study.

We also have **labels** to help you have more control through the process. The meaning of each of these labels is:

- `Main Curriculum`: cards with that label represent courses that are listed in our curriculum.
- `Extra Resources`: cards with that label represent courses that were added by the student.
- `Doing`: cards with that label represent courses the student is current doing.
- `Done`: cards with that label represent courses finished by the student. Those cards should also have the link for at least one project/article built with the knowledge acquired in such course.
- `Section`: cards with that label represent the section that we have in our curriculum. Those cards with the `Section` label are only to help the organization of the Done column. You should put the _Course’s cards_ below its respective _Section’s card_.

The intention of this board is to provide our students a way to track their progress, and also the ability to show their progress through a public page for friends, family, employers, etc. You can change the status of your board to be _public_ or _private_.

# Team

- **[Eric Douglas](https://github.com/ericdouglas)**: founder of OSSU
- **[Josh Hanson](https://github.com/joshmhanson)**: lead technical maintainer
- **[Waciuma Wanjohi](https://github.com/waciumawanjohi)**: lead academic maintainer
- **[Contributors](https://github.com/ossu/computer-science/graphs/contributors)**
