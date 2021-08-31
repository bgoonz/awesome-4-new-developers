Being an effective dev means being able to quickly get help finding solutions. Back in the day, this meant knowing whom to talk to and which books to crack open to which page.

Though those techniques still have their place and time, they have been superseded by the much faster and more effective Internet search engine.

But not being able to craft an effective search will hold you back against your peers who can. In this article, we'll look at some techniques for getting the results you want in the minimum amount of time.

## General Search Advice

* Type the error message you got into the search bar.
  * It might help to strip out strings specific to your work, e.g. the name of your app.
  * Use the first error you got. The other ones might be a consequence of the first error, and therefore not as relevant.

* If there's not a match on your first page of search results, try a different search.
  * If the results were too general and off-topic, add words more specific to your search to narrow results.
  * If the results were too specific and off-topic, remove words from your search to broaden results.

* When you click through to a page, first give it a quick skim for relevance. If it looks promising, read in more details.

* If you find an answer on StackOverflow, look at the comments below the answer to see if there are any updates.

* Check the date on the page you've gone to in order to make sure it's not completely out of date.

* On a page with a threaded answer to a question, read though the thread to get as much information as you can about the problem. Different perspectives bring multiple solutions to a problem.

* Add the language or framework to your search term to help narrow it.

* After you find an answer, don't hastily steal it and blindly implement it. Take a minute or two to understand _why_ and _how_ the solution works.

* Don't copy and paste from StackOverflow without understanding the code. It's not likely to work without modification, and without stopping to comprehend what you're adding to your code, it could make matters worse.
  * If you want maximum learning, read the StackOverflow answer, and write a description of what it does. Take a five-minute break. Then re-implement the code on your own from your description.

* If you find a great resource, *bookmark it*. Nothing is more frustrating than spending 10 minutes coming up with the simple, magical search term you used to find it last time.

* Learn to doubt the reputability of sources. Even though StackOverflow is entirely produced by mere mortals, at least an army of mere mortals fact-checks them. And even then, they could be wrong. Stand-alone blogs without comment sections deserve even more scrutiny.

## Google-specific Tricks

Google has all kinds of features you might not be aware of to help improve your search results.

* Mandatory search terms can be specified with double quotes, even if just a single word. `"reactjs" overview` will return pages that definitely have `reactjs` in them, and _probably_ have `overview` in them.
  * This can also be used for multi-word matches, like `javascript "syntax error"`.

* Mandatory non-terms: if you have something that you deliberate want left out of a match, you can preface them with a minus sign, e.g. `react -nuclear`.

* Verbatim matching: if you click *Tools*, then *All Results* and select *Verbatim*, Google will match pages with exactly the terms you specify.
  * If Google is incorrectly second-guessing what you meant, this feature might help.

* Advanced search: under *Settings*, then *Advanced Search*, you can set all kinds of parameters including
which sites are searched, date ranges, file types, and licenses.

* Restrict dates to recent: click *Tools* then *Any Time*, you can select a maximum age for the results.
  * If you're getting a lot of outdated results from 15 years ago, this might help.

* Restrict to a specific site: use `site:` in front of the domain: `react site:stackoverflow.com`.
