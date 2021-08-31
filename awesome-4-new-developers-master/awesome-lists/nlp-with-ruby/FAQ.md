# Frequently (not yet) Asked Questions

## What is Awesome Ruby NLP list?

This list is the _first systematic_ attempt to enlist NLP and CL related
resources for Ruby. It's based on other earlier attempts
e.g. https://github.com/diasks2/ruby-nlp. We strive to provide a list of only
working high quality libraries. Read [why](motivation.md) this list is vital for
the Ruby community.

## Why use Ruby for NLP?

Everybody uses Python! Nobody hires Ruby developers for NLP tasks.

To avoid a long discussion we can simply postulate: Ruby and Python are great
programming languages, both very appealing to the community, but with different
history. Everything written in Ruby could have been written in Python.

Nevertheless we have our personal preferences like dogs over cats,
tea over coffee etc. That's why you can choose the language which matches
your mindset and does not break your mind to get compliant with a programming
language.

Take Ruby if you're happy with it. Use Python if you like it more. Do whatever
you want and pay for your decisions!

And if you still hesitate look at this great
[talk](https://www.youtube.com/watch?v=0D3KfnbTdWw) by Jim Weirich.

## Wait ... but Ruby is so slow?

Ruby **IS** comparable in terms of processing speed with other high level
scripting programming languages like Lua, Perl, Python etc.

Please look at this comparison:
https://benchmarksgame-team.pages.debian.net/benchmarksgame/faster/ruby.html

## Hm ... but would I find suitable libraries?

Python has more! Eventually...

Please look at the current [list](https://github.com/arbox/nlp-with-ruby),
Ruby is equipped with all important libraries.

## Can I write NLP application on the Google's scale with Ruby?

The answer is simple and sounds "NO". Not in pure Ruby. But you can be very
efficient and use Ruby bindings for Java, C and C++ based libraries.
And sometimes buying newer hardware can be cheaper than writing everything in
C++. It's definitely your choice!

## How do you call list items?

Every library list item has the naming after the Ruby library. The name is
the exact wording of the `gem install lib` statement (or `gem 'lib'` in your
`Gemfile`) to facilitate search and memoization. That's why the appropriate item
is called `treat` and not `Treat`.

<!--- Links --->

[motivation]: https://github.com/arbox/nlp-with-ruby/blob/master/motivation.md
