---
layout: default
title: Contributing a Guide
permalink: contributing
---

# Contributing a Guide

The guides site uses [jekyll](https://github.com/mojombo/jekyll) to power the site and all the documents are written using [markdown](http://daringfireball.net/projects/markdown/). To contribute a guide, you just need to follow these simple steps.

1. Fork the [repository on github](https://github.com/railsgirls/railsgirls.github.com) by clicking on the "Fork" button.
2. Do a `git clone` of your fork.

## If you want to add a new guide:

- Create a file named `YYYY-MM-DD-guide_name.markdown` inside the `_posts` directory of your fork.
- In this file, you'll need to add some YAML front matter at the top of the file so it looks like the following example, taken from this guide that you are currently viewing:

    <pre>
    ---
    layout: default
    title: Contributing a Guide
    permalink: contributing
    ---</pre>

You can follow the structure of our [Rails Girls App Tutorial](https://github.com/railsgirls/railsgirls.github.com/blob/master/_posts/2012-04-18-app.markdown).

## If you want to improve an existing guide:
Make the change in the file you want to change! You don't need to make a new file if you want to change something in an existing file.

## Then...

1. Commit this new guide to your git repo.
2. After you commit, push that to your fork.
3. You can now open a pull request explaining your guide. That's it!

Thanks so much for taking the time to help us make Rails Girls awesome.
