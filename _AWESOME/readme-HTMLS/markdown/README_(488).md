[<img src="https://raw.githubusercontent.com/analysis-tools-dev/website/master/static/logo.png" alt="Analysis Tools" width="400" />](http://analysis-tools.dev/)

This repository lists **static analysis tools** for all programming languages, build tools, config files and more.  
The official website, [analysis-tools.dev](https://analysis-tools.dev/) is based on this repository and adds rankings, user comments, and additional resources like videos for each tool.

![CI](https://github.com/analysis-tools-dev/static-analysis/workflows/CI/badge.svg)

## What is Static Analysis?

> Static program analysis is the analysis of computer software that is performed without actually executing programs — [Wikipedia](https://en.wikipedia.org/wiki/Static_program_analysis)

> The most important thing I have done as a programmer in recent years is to aggressively pursue static code analysis. Even more valuable than the hundreds of serious bugs I have prevented with it is the change in mindset about the way I view software reliability and code quality. — [John Carmack (Creator of Doom)](https://www.gamasutra.com/view/news/128836/InDepth_Static_Code_Analysis.php)

## Sponsors

This project would not be possible without the generous support of our sponsors.

<table><tbody><tr class="odd"><td><a href="https://deepcode.ai"><img src="https://raw.githubusercontent.com/analysis-tools-dev/website/master/static/sponsors/deepcode.png" width="200" /></a></td><td><a href="https://codescene.io/"><img src="https://raw.githubusercontent.com/analysis-tools-dev/website/master/static/sponsors/codescene.svg" width="200" /></a></td><td><a href="https://r2c.dev/"><img src="https://raw.githubusercontent.com/analysis-tools-dev/website/master/static/sponsors/r2c.svg" width="200" /></a></td></tr></tbody></table>

If you also want to support this project, head over to our [Github sponsors page](https://github.com/sponsors/analysis-tools-dev).

## Meaning of Symbols:

- :copyright: stands for proprietary software. All other tools are Open Source.
- :information_source: indicates that the community does not recommend to use this tool for new projects anymore. The icon links to the discussion issue.
- :warning: means that this tool was not updated for more than 1 year, or the repo was archived.

Pull requests are very welcome!  
Also check out the sister project, [awesome-dynamic-analysis](https://github.com/mre/awesome-dynamic-analysis).

## Table of Contents

#### [Programming Languages](#programming-languages-1)

Show languages

- [{{ language.name }}](#%7B%7B%20language.tag%20%7D%7D)

#### [Multiple languages](#multiple-languages-1)

#### [Other](#other-1)

{% for (tag, \_) in others %} - [{{ tag.name }}](#%7B%7B%20tag.tag%20%7D%7D) {%- endfor %}

---

## Programming Languages

{%- for (language, linters) in linters %}

## {{ language.name }}

{% for linter in linters -%} - [{{linter.name }}](%7B%7Blinter.homepage%20%7D%7D){% if linter.discussion.is\_some() %} [:information_source:](<%7B%7Blinter.discussion.as_ref().unwrap()%7D%7D>){% endif %}{% if linter.deprecated.is\_some() %} :warning:{% endif %}{% if linter.license == “proprietary” %} :copyright:{% endif %} - {{ linter.description }} {% endfor %}

{%- endfor %}

## Multiple languages

{% for linter in multi -%} - [{{linter.name }}](%7B%7Blinter.homepage%20%7D%7D){% if linter.discussion.is\_some() %} [:information_source:](<%7B%7Blinter.discussion.as_ref().unwrap()%7D%7D>){% endif %}{% if linter.deprecated.is\_some() %} :warning:{% endif %}{% if linter.license == “proprietary” %} :copyright:{% endif %} - {{ linter.description }} {% endfor %}

## Other

{% for (tag, others) in others %}

## {{ tag.name }}

{% for other in others -%} - [{{ other.name }}](%7B%7B%20other.homepage%20%7D%7D){% if other.discussion.is\_some() %} [:information_source:](<%7B%7Bother.discussion.as_ref().unwrap()%7D%7D>){% endif %}{% if other.deprecated.is\_some() %} :warning:{% endif %}{% if other.license == “proprietary” %} :copyright:{% endif %} - {{ other.description }} {% endfor %}

{%- endfor %}

## More Collections

- [Clean code linters](https://github.com/collections/clean-code-linters) - A collection of linters in github collections
- [Code Quality Checker Tools For PHP Projects](https://github.com/collections/code-quality-in-php) - A collection of PHP linters in github collections
- [go-tools](https://github.com/dominikh/go-tools) - A collection of tools and libraries for working with Go code, including linters and static analysis
- [linters](https://github.com/mcandre/linters) - An introduction to static code analysis
- [OWASP Source Code Analysis Tools](https://owasp.org/www-community/Source_Code_Analysis_Tools) - List of tools maintained by the Open Web Application Security Project
- [php-static-analysis-tools](https://github.com/exakat/php-static-analysis-tools) - A reviewed list of useful PHP static analysis tools
- [Wikipedia](http://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis) - A list of tools for static code analysis.

## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Matthias Endler](https://endler.dev) has waived all copyright and related or neighboring rights to this work. The underlying source code used to format and display that content is licensed under the MIT license.

Title image [Designed by Freepik](http://www.freepik.com).
