A very common task for software devs is to read and comprehend other people's code and project specifications. This is not a particularly easy thing to do, and requires a different type of focus than regular pleasure reading.

* [Reading Code](#reading-code)
* [Reading Specifications](#reading-specifications)

## Reading Code

Jumping into an existing codebase of hundreds of files and potentially millions of lines can be a daunting task, but needn't be a scary one if you systematically go about understanding the code that you're responsible for.

What you need is a map that describes all the code and how it interrelates. When you first look at the map, it's blank except for where you're standing. But as you explore, you'll fill in the map. Of course, when you're doing this, don't jump around the map randomly; you should explore the area starting from someplace you've already explored. (I.e. look at the functions that this function calls and explore them.)

This map might be a physical drawing. Lots of us use whiteboards to do this.

Some pointers:

* Be ready to take lots of notes. Have a notebook, whether virtual or real.

* Draw diagrams.

* Identify the starting point of the program or module that you're working on.

  * What is the code that gets called first?
  * Which code calls it?

* Figure out which functions and modules call which other functions and modules.

  * For these calls, figure out what data is passed.

* Identify the most important functions. Also identify "helper" functions that are more stand-alone.

* Figure out which functions and modules are responsible for what.

* Be comfortable not knowing some of the codebase. Learn what you need to learn first; leave the rest for another day.


## Reading Specifications

Specifications are documents that describe in minute detail everything that needs to be programmed in order to implement a system. (Ideally they show this. Practically, there are usually details lacking.) Specifications are the final word on how software is supposed to work. If the results don't match the spec, it's a bug.

> Although this is written with an eye toward project specifications, it also applies to algorithm descriptions in books, as well as assignments.

These documents tend to be very information-dense. That is, there are no words wasted in a sentence, which means you'll have to read it at a much slower rate than you might expect. Even now, after reading the previous sentence where you said, "Ok, a lot slower, cool," you might need to slow it down by yet another order of magnitude again.

For example, here is a sentence from Neil Stephenson's famous book _Snow Crash_:

> The whole idea of stealing fantastically dangerous weapons presents the would-be perp with inherent dangers and contradictions: When you are wrestling for possession of a sword, the man with the handle always wins.

And here is a sentence from Thomas Cormen's famous book _Introduction to Algorithms_:

> We define the _height_ of a node in a tree to be the number of edges on the longest simple downward path from the node to a leaf, and we define the height of the tree to be the height of its root.

You might notice that the latter, in additional to being relatively more boring, was much harder to understand. Not only that but the second part of the definition seemingly refers to itself. Most engineers cannot skim this and understand it.

This is a sentence that has to be read _very_ slowly in order to comprehend it. Probably several times. If you find it slow going, it doesn't mean you're bad at it. This information is _meant to be read and comprehended slowly_.


Here are some pointers for getting through this kind of reading:

* Read very slowly.

* Read even slower than that.

* After you finish a couple sentences or a paragraph, quickly summarize them to yourself. Not only does this verify understanding, but also helps cement it.

* Make note of things the sentence says that you don't know. E.g., what does "simple path" mean?

  * Sometimes you can keep reading past, trusting later context to give it meaning.

  * Other times, it prevents further understanding and must be clarified on the spot.

  * If it can wait until later, make note of it and look it up later.

* Make a written outline or summary of what you're reading.

* Draw sample diagrams to test your understanding.

Lastly, here is an excerpt from [RFC 739](https://tools.ietf.org/html/rfc793), the spec for the Transmission Control Protocol, more commonly known as _TCP_ (of TCP/IP fame):

> The checksum field is the 16 bit one's complement of the one's complement sum of all 16 bit words in the header and text. If a segment contains an odd number of header and text octets to be checksummed, the last octet is padded on the right with zeros to form a 16 bit word for checksum purposes.

See if you can make sense of that using the techniques, above. It is expected to take a while.