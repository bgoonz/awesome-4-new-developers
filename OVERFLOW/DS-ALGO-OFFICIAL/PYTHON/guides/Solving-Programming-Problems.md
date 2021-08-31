"What do we solve, and how do we solve it?"

## Get a clear understanding of the problem and requirements

* The Goals
  * What are you trying to solve? What is the benefit?
* The Problem
  * Write pseudocode.
  * Manually work through some examples.
* The Data
  * How does the data flow from one component to another?
    * Draw diagrams.

If you make any assumptions about what the problem is, write those down.

* Get clarification from interested parties.

You should be able to describe the problem in your own terms.

Future-proofing

* Imagine how the problem requirements are likely to change in the future and
  keep those in mind as you implement the solution.

"What do we solve" is about the complete description of the problem.

## Break down the problem

Top Down design: start with a high-level description and break it down.

* **Build a shed**

becomes:

* Build a shed
  * **Build a foundation**
  * **Build a floor**
  * **Build 4 walls**
  * **Build a roof**

becomes:

* Build a shed
  * Build a foundation
    * **Flatten terrain**
    * **Lay down blocks**
  * Build a floor
    * **Build framing**
    * **Add subfloor**
    * **Add floor**
  * Build 4 walls
    * **Build framing**
    * **Install windows**
      * **Frame**
      * **Install sill**
      * **Install glass**
    * **Install door**
      * **Frame**
      * **Install threshold**
      * **Install door**
  * Build a roof

And so on. Keep breaking down tasks until their implementation become obvious.
This might be to the level of `for` loops, if need be.

## Inspiration and Exploration

What does it remind you of?

* Are there similar problems you've solved in the past?

Try small things

* Write "toy" programs to see if they get you close to your goal

Reach out

* Existing code samples
* Documentation
* Google

## Testing

* Keep an eye open for corner and edge cases, especially.

* Does it run quickly enough?
  * Can you make small changes to speed it up?
  * Do you have to revamp the algorithm to get a decrease in time complexity?

## Post-Mortem

When you're done, take a look back at the solution and see what works well and
what doesn't. This helps with future implementations of any problem.

## Example

Write a program that converts a CSV file to JSON.

### Understand the problem

So far, the problem statement isn't nearly clear enough.

* What's in the CSV file?
* What's in each record?
* What's in each field?
* How big is the CSV file?
* How many fields does it have?
* How many records?
* Do all the fields need to be converted?
* Do all the records need to be converted?
* If not, how many need to be converted?
* Are any fields blank or missing?
* Does the CSV file have a header?
* If so, do we use those names for the fields in JSON?
* If not, what is the mapping between CSV fields and JSON property names?
* Does the JSON need to be human-readable (pretty-printed)?

These (and more!) are all valid questions to ask, and should be asked.

Answers from the client:

* The CSV file contains store name, location, and sales figures.
* There is one record per store, one store per record.
* Fields listed below.
* The file is 1.8 TB in size.
* There are 120,000 records.
* Don't know how many will be in the result set.
* The only fields we need are store name, zipcode, and total sales.
* Only the records that have total sales greater than $10 million need to be
  outputted.
* Don't know if any fields are blank.
* Don't know if the file has a header.
* Fields names listed below can be used for JSON property names.
* Don't care if the JSON is human-readable.

Fields:

Field name| 
:-:|
name|
addr1|
addr2|
city|
state|
zip|
country|
total sales|
hourly_sales_1_1|
hourly_sales_1_2|
hourly_sales_1_3|
hourly_sales_1_4|
hourly_sales_1_5|
hourly_sales_1_6|
hourly_sales_1_7|
hourly_sales_1_8|
hourly_sales_1_9|
hourly_sales_1_10|
hourly_sales_1_11|
hourly_sales_1_12|
hourly_sales_2_1|
hourly_sales_2_2|
hourly_sales_2_3|
hourly_sales_2_4|
hourly_sales_2_5|
hourly_sales_2_6|
hourly_sales_2_7|
hourly_sales_2_8|
hourly_sales_2_9|
hourly_sales_2_10|
hourly_sales_2_11|
hourly_sales_2_12|
_[... 4365 fields omitted ...]_|
hourly_sales_365_1|
hourly_sales_365_2|
hourly_sales_365_3|
hourly_sales_365_4|
hourly_sales_365_5|
hourly_sales_365_6|
hourly_sales_365_7|
hourly_sales_365_8|
hourly_sales_365_9|
hourly_sales_365_10|
hourly_sales_365_11|
hourly_sales_365_12|

There are 12 fields per every day of the year per store. Apparently this is
where the 1.8 GB comes from.

This leads to a number of other questions you'll need to explore.

* `total sales` has a space in it. Replace with `_`?
  * _[Client answers "Sure".]_
* Do the `total sales` fields have dollar signs or commas in them?
  * _[Client answers "Don't know".]_
* Is there a header?
* Are any of the important fields blank or invalid?

And some conclusions:

* We can't load the whole CSV into memory at once (it's too big), so we'll have
  to process it a line at a time.

We can't understand the problem fully without answering our questions, above.
Visually inspecting 120,000 rows is a nonstarter. So we _might_ have to write
some special software just to inspect it. Or might not.

#### Subproblem: Determine if there is a header

An attempt to load the CSV file into an editor simply causes it to hang because
it's so large. What else can we do?

Some quick googling shows that the Unix `head` command can show you just the
first line of a file.

`head -1 file.csv` produces:

```
7|SuperMart|123 SW Manfredjinsinjin St|Ste 12|Portland|OR|97204|United States|$12,211,682.20|[remaining fields omitted for brevity]
```

Answers:

* This first row is clearly data, and not a header. There is no header.
* There are dollar signs and commas in the `total sales` field.

Surprises:

* The fields are separated by pipes `|` and not commas.

New question:

* What's the `7` out front? Clearly the `name` is the second field, not the
  first like the data dictionary, above, says. You ask the client.
  * _[Client says "ignore it".]_

#### Subproblem: Are Any of the Important Fields Blank or Invalid?

We could write a program that looks for unparseable numbers in `total sales`, or
missing numbers or `name`s.

But we're going to be writing a program to process the file anyway, and we might
as well check then.

#### Subproblem: How many records in the result set?

The source data is 1.8 TB and 120,000 records, but we know we're only keeping a
few of the fields and our result set will be a lot smaller.

Even if we have to output all 120,000 records, that doesn't seem like such a
hardship.

We'll just be content not caring about the answer to this one.

#### Rewrite the problem statement in your own terms

Let's try this:

> Write a program that parses a giant CSV file and extracts records for which
> the `total sales` field is more than `10000000`. Save the `name`, `zip`, and
> `total sales`. In the JSON, `total_sales` should have an underscore. It
> doesn't matter if the JSON is human-readable or not.

Much clearer. Not 100% complete, but we'll do that next.

### Top Down Design

Write a CSV to JSON converter:

* CSV reader
  * Open the file
  * Read all the lines
  * Close file
* JSON writer
  * Open the file
  * Write all the records
  * Close the file

But here we have trouble brewing. We know we can't read the entire file at once,
so we have to nest some of this. Take two:

* CSV reader/JSON writer
  * Open the CSV file
  * Open the JSON file
  * Process lines
  * Close the JSON file
  * Close the CSV file

Better... Drill down.

* CSV reader/JSON writer
  * Open the CSV file
  * Open the JSON file
  * Process lines
    * **Read a line from the CSV**
    * **Decide if we keep the line**
    * **Write a record to the JSON file**
  * Close the JSON file
  * Close the CSV file

More: 

* CSV reader/JSON writer
  * Open the CSV file
  * Open the JSON file
  * Process lines
    * Read a line from the CSV
      * **Keep the `name`, `zip`, and `total sales` fields**
    * Decide if we keep the record
      * **Parse the `total sales` field**
      * **If greater than 10,000,000:**
        * **Write a record to the JSON file**
  * Close the JSON file
  * Close the CSV file

  At this point, we're practically writing pseudocode. Translate it to whatever
  language you want.

  Depending on the language, we might have a lot of this stuff written for us
  already. Googling things like `how do I read a CSV file in Python` might give
  some good ideas.

  Notice how much time we spent in the researching-the-problem phase versus the
  programming design phase. It's difficult to _overplan_ for a project.