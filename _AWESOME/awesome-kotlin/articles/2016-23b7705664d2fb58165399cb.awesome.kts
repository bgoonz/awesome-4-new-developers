
import link.kotlin.scripts.dsl.Article
import link.kotlin.scripts.dsl.LinkType.*
import link.kotlin.scripts.dsl.LanguageCodes.*
import java.time.LocalDate

// language=Markdown
val body = """
Kotlin compiler version 1.0.x uses reference classes with `volatile` fields when local `var`s are captured by lambdas, local functions, or local classes. This results in a quite severe performance degradation on JVM backend for idiomatic Kotlin code that uses Kotlin's unique (with respect to Java) feature of capturing mutable variables. We are considering to change this implementation strategy in Kotlin 1.1 to use reference classes with non-volatile fields by default. The purpose of this thread is to gather feedback on this proposed change.

The proposed change will not affect non-concurrent code semantics, but it will make it significantly faster on JVM in many cases simply by recompilation with Kotlin 1.1. Most correct concurrent code will likewise continue to work correctly after this change and with improved performance, too. However, we can imagine some cases where existing concurrent code is working correctly with Kotlin 1.0.x as a side effect of this particular implementation strategy, but will cease to operate correctly if the proposes change is implemented in Kotlin 1.1. We cannot figure out a simple way to automatically scan Kotlin open source codebase to see how prevalent those cases in real Kotlin code are, so we need your help in finding those cases to judge the extent of this proposed change. Real-world examples of such code are highly appreciated.

# Links

* The corresponding performance problem is tracked as an issue [https://youtrack.jetbrains.com/issue/KT-14746](https://youtrack.jetbrains.com/issue/KT-14746) It provides some low-level implementation details of what bytecode is generated by Kotlin 1.0.x and how references are implemented.

* Some micro-benchmarking results are presented at [http://www.slideshare.net/intelliyole/kotlin-bytecode-generation-and-runtime-performance](http://www.slideshare.net/intelliyole/kotlin-bytecode-generation-and-runtime-performance) (slide #27) Note, however, that it is does not really show the gravity and the extent of the problem in real-life use-cases.

# FAQ

## What is volatile?

The `volatile` is a JVM modifier that imbues a variable with a special semantics with respect to Java Memory Model (JMM). The semantics for volatile are specified in Chapter 17 of Java Language Specification: [https://docs.oracle.com/javase/specs/jls/se8/html/jls-17.html](https://docs.oracle.com/javase/specs/jls/se8/html/jls-17.html) **TL;DR**: reads and writes of `volatile` variables are considered to be _synchronisation_ actions for concurrent code, providing an alternative inter-thread synchronisation mechanism for writing _lock-free_ code. Volatile variables are optional for correct concurrent code, in the sense that there are many other synchronisation primitives like starting/joining threads, using locks, using futures and various other xxxConcurrent and xxxAtomic classes.

## What are performance problems with volatile / why not everything is volatile?

The possible behaviours of the code that is reading/writing volatile variables are quite constrained by specification, so compiler cannot do many of the typical optimisations that modern compilers usually do. For example, compiler is not allowed to optimize away redundant reads from volatile variables and replace them with a read into register, which has cascading effect on many other code optimisations. Unfortunately, it also affects optimisation of other code around reads and write of volatile variable. Even a single volatile read/write in a piece of a typical code can make a lot of it much less optimised. This is the reason why modern languages choose to treat all variables as non-volatile by default. This enables full scope of code optimisation, unless the programmer who is writing concurrent code explicitly wants to use _lock-free synchronisation_ in their code and marks the corresponding variables as `volatile`. Kotlin follows the same strategy with respect to class variables and provides `@Volatile` annotation in `kotlin.jvm` package in order to make class variables volatile.

## Why captured mutable variables are important?

Captured mutable variables might seem a niche feature of Kotlin at a first glance, since they are not present in Java. Moreover, modern collections / sequence-processing libraries strongly advocate against any kind of mutable state and provide a rich set of filter/map/etc primitives to enable writing even complex logic without any kind of mutable state. Kotlin stdlib is a good example of such a rich library. Moreover, writing your code without mutable variables makes it easy to parallelise. For example, with Java Streams parallelisation is as simple as adding `.parallel()` invocation to your pipeline, unless you are mutating any state, that is.

However, Kotlin's powerful lambdas enable user-defined control constructs that work similarly to the ones built into the language. So, Kotlin can have fewer built-in control constructs and define things like Java's _synchronised_ and _try-with-resources_ as a library instead. This ability relies on capturing local mutable state.

Moreover, when writing complex _single threaded_ (classical) data-processing algorithms one often needs to share some mutable state between several functions. In Java it typically boils down to ???Doer??? class anti-pattern, e.g. in order to implement a hypothetical `compute()` function, you create `Computer` class, in order to implement some `graphSearch` function you create `GraphSearcher` class, etc. It is all a boilerplate code to work around Java limitations. Kotlin's support of local functions lets us get rid of such a boiler plate and write our algorithms directly and _naturally_.

## Work around for performance in Kotlin 1.0.x

What do you do if you have exactly this kind of code where you'd like to use captured mutable state to apply some local functions or lambdas as a part of your algorithm, for example. How do you regain Java speed of this code on JVM? The solution in Kotlin 1.0.x is to write this code in Java style, e.g. ditch idiomatic Kotlin and write the Java boilerplate you typically do to work with mutable state in Java. For example, if you have the following code snippet:

```kotlin
var myVariable = initialValue

// here is the code that uses myVariable in lambdas and local functions
```

you can use the following boilerplate code to regain runtime performance in Kotlin 1.0.x at a cost of extra class file. If you ignore the boilerplate it even looks similar to the original code. Kotlin is such a nice language that even boilerplate code in Kotlin is shorter than in Java :)

```kotlin
with (object {
    var myVariable = initialValue
}) {
    // here is the code that uses myVariable in lambdas and local functions
}
```

However, you should not _actually_ write such code. If you really need that performance, then you should extract your variables into some named class. It is going to require _more_ code, but the resulting code will be easier to read and understand.

"""

Article(
  title = "Non-volatile vs volatile captured refs by default",
  url = "https://discuss.kotlinlang.org/t/non-volatile-vs-volatile-captured-refs-by-default/2122",
  categories = listOf(
    "Kotlin"
  ),
  type = article,
  lang = EN,
  author = "Roman Elizarov",
  date = LocalDate.of(2016, 11, 28),
  body = body
)
