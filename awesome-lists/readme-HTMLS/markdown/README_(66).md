# GitHub Cheat Sheet [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A collection of cool hidden and not so hidden features of Git and GitHub. This cheat sheet was inspired by [Zach Holman](https://github.com/holman)’s [Git and GitHub Secrets](http://confreaks.tv/videos/aloharuby2012-git-and-github-secrets) talk at Aloha Ruby Conference 2012 ([slides](https://speakerdeck.com/holman/git-and-github-secrets)) and his [More Git and GitHub Secrets](https://vimeo.com/72955426) talk at WDCNZ 2013 ([slides](https://speakerdeck.com/holman/more-git-and-github-secrets)).

_Shortlink: [`http://git.io/sheet`](http://git.io/sheet)_

_Read this in other languages: [English](README.md), [한국어](README.ko.md), [日本語](README.ja.md), [简体中文](README.zh-cn.md), [正體中文](README.zh-tw.md)._

## Table of Contents

- [GitHub](#github)
  - [Ignore Whitespace](#ignore-whitespace)
  - [Adjust Tab Space](#adjust-tab-space)
  - [Commit History by Author](#commit-history-by-author)
  - [Cloning a Repository](#cloning-a-repository)
  - [Branch](#branch)
    - [Compare all Branches to Another Branch](#compare-all-branches-to-another-branch)
    - [Comparing Branches](#comparing-branches)
    - [Compare Branches across Forked Repositories](#compare-branches-across-forked-repositories)
  - [Gists](#gists)
  - [Git.io](#gitio)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
  - [Line Highlighting in Repositories](#line-highlighting-in-repositories)
  - [Closing Issues via Commit Messages](#closing-issues-via-commit-messages)
  - [Cross-Link Issues](#cross-link-issues)
  - [Locking Conversations](#locking-conversations)
  - [CI Status on Pull Requests](#ci-status-on-pull-requests)
  - [Filters](#filters)
  - [Syntax Highlighting in Markdown Files](#syntax-highlighting-in-markdown-files)
  - [Emojis](#emojis)
  - [Images/GIFs](#imagesgifs)
    - [Embedding Images in GitHub Wiki](#embedding-images-in-github-wiki)
  - [Quick Quoting](#quick-quoting)
  - [Pasting Clipboard Image to Comments](#pasting-clipboard-image-to-comments)
  - [Quick Licensing](#quick-licensing)
  - [Task Lists](#task-lists)
    - [Task Lists in Markdown Documents](#task-lists-in-markdown-documents)
  - [Relative Links](#relative-links)
  - [Metadata and Plugin Support for GitHub Pages](#metadata-and-plugin-support-for-github-pages)
  - [Viewing YAML Metadata in your Documents](#viewing-yaml-metadata-in-your-documents)
  - [Rendering Tabular Data](#rendering-tabular-data)
  - [Rendering PDF](#rendering-pdf)
  - [Revert a Pull Request](#revert-a-pull-request)
  - [Diffs](#diffs)
    - [Rendered Prose Diffs](#rendered-prose-diffs)
    - [Diffable Maps](#diffable-maps)
    - [Expanding Context in Diffs](#expanding-context-in-diffs)
    - [Diff or Patch of Pull Request](#diff-or-patch-of-pull-request)
    - [Rendering and diffing images](#rendering-and-diffing-images)
  - [Hub](#hub)
  - [Contribution Guidelines](#contribution-guidelines)
    - [CONTRIBUTING file](#contributing-file)
    - [ISSUE_TEMPLATE file](#issue_template-file)
    - [PULL_REQUEST_TEMPLATE file](#pull_request_template-file)
  - [Octicons](#octicons)
  - [GitHub Student Developer Pack](#github-student-developer-pack)
  - [GitHub Resources](#github-resources)
    - [GitHub Talks](#github-talks)
  - [SSH keys](#ssh-keys)
  - [Profile Image](#profile-image)
  - [Repository Templates](#repository-templates)
- [Git](#git)
  - [Remove All Deleted Files from the Working Tree](#remove-all-deleted-files-from-the-working-tree)
  - [Previous Branch](#previous-branch)
  - [Stripspace](#stripspace)
  - [Checking out Pull Requests](#checking-out-pull-requests)
  - [Empty Commits](#empty-commits)
  - [Styled Git Status](#styled-git-status)
  - [Styled Git Log](#styled-git-log)
  - [Git Query](#git-query)
  - [Git Grep](#git-grep)
  - [Merged Branches](#merged-branches)
  - [Fixup and Autosquash](#fixup-and-autosquash)
  - [Web Server for Browsing Local Repositories](#web-server-for-browsing-local-repositories)
  - [Git Configurations](#git-configurations)
    - [Aliases](#aliases)
    - [Auto-Correct](#auto-correct)
    - [Color](#color)
  - [Git Resources](#git-resources)
    - [Git Books](#git-books)
    - [Git Videos](#git-videos)
    - [Git Articles](#git-articles)

## GitHub

### Ignore Whitespace

Adding `?w=1` to any diff URL will remove any changes only in whitespace, enabling you to see only the code that has changed.

![Diff without whitespace](https://camo.githubusercontent.com/797184940defadec00393e6559b835358a863eeb/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f626c6f672f323031312f736563726574732f776869746573706163652e706e67)

[_Read more about GitHub secrets._](https://github.com/blog/967-github-secrets)

### Adjust Tab Space

Adding `?ts=4` to a diff or file URL will display tab characters as 4 spaces wide instead of the default 8. The number after `ts` can be adjusted to suit your preference. This does not work on Gists, or raw file views, but a [Chrome extension](https://chrome.google.com/webstore/detail/tab-size-on-github/ofjbgncegkdemndciafljngjbdpfmbkn) can automate this.

Here is a Go source file before adding `?ts=4`:

![Before, tab space example](http://i.imgur.com/GIT1Fr0.png)

…and this is after adding `?ts=4`:

![After, tab space example](http://i.imgur.com/70FL4H9.png)

### Commit History by Author

To view all commits on a repo by author add `?author={user}` to the URL.

    https://github.com/rails/rails/commits/master?author=dhh

![DHH commit history](http://i.imgur.com/S7AE29b.png)

[_Read more about the differences between commits views._](https://help.github.com/articles/differences-between-commit-views/)

### Cloning a Repository

When cloning a repository the `.git` can be left off the end.

    $ git clone https://github.com/tiimgreen/github-cheat-sheet

[_Read more about the Git `clone` command._](http://git-scm.com/docs/git-clone)

### Branch

#### Compare all Branches to Another Branch

If you go to the repo’s [Branches](https://github.com/tiimgreen/github-cheat-sheet/branches) page, next to the Commits button:

    https://github.com/{user}/{repo}/branches

… you would see a list of all branches which are not merged into the main branch.

From here you can access the compare page or delete a branch with a click of a button.

![Compare branches not merged into master in rails/rails repo - https://github.com/rails/rails/branches](http://i.imgur.com/0FEe30z.png)

#### Comparing Branches

To use GitHub to compare branches, change the URL to look like this:

    https://github.com/{user}/{repo}/compare/{range}

where `{range} = master...4-1-stable`

For example:

    https://github.com/rails/rails/compare/master...4-1-stable

![Rails branch compare example](http://i.imgur.com/tIRCOsK.png)

`{range}` can be changed to things like:

    https://github.com/rails/rails/compare/master@{1.day.ago}...master
    https://github.com/rails/rails/compare/master@{2014-10-04}...master

_Here, dates are in the format `YYYY-MM-DD`_

![Another compare example](http://i.imgur.com/5dtzESz.png)

Branches can also be compared in `diff` and `patch` views:

    https://github.com/rails/rails/compare/master...4-1-stable.diff
    https://github.com/rails/rails/compare/master...4-1-stable.patch

[_Read more about comparing commits across time._](https://help.github.com/articles/comparing-commits-across-time/)

#### Compare Branches across Forked Repositories

To use GitHub to compare branches across forked repositories, change the URL to look like this:

    https://github.com/{user}/{repo}/compare/{foreign-user}:{branch}...{own-branch}

For example:

    https://github.com/rails/rails/compare/byroot:master...master

![Forked branch compare](http://i.imgur.com/Q1W6qcB.png)

### Gists

[Gists](https://gist.github.com/) are an easy way to work with small bits of code without creating a fully fledged repository.

![Gist](http://i.imgur.com/VkKI1LC.png?1)

Add `.pibb` to the end of any Gist URL ([like this](https://gist.github.com/tiimgreen/10545817.pibb)) in order to get the _HTML-only_ version suitable for embedding in any other site.

Gists can be treated as a repository so they can be cloned like any other:

    $ git clone https://gist.github.com/tiimgreen/10545817

![Gists](http://i.imgur.com/BcFzabp.png)

This means you also can modify and push updates to Gists:

    $ git commit
    $ git push
    Username for 'https://gist.github.com':
    Password for 'https://tiimgreen@gist.github.com':

However, Gists do not support directories. All files need to be added to the repository root. [_Read more about creating Gists._](https://help.github.com/articles/creating-gists/)

### Git.io

[Git.io](http://git.io) is a simple URL shortener for GitHub.

![Git.io](http://i.imgur.com/6JUfbcG.png?1)

You can also use it via pure HTTP using Curl:

    $ curl -i http://git.io -F "url=https://github.com/..."
    HTTP/1.1 201 Created
    Location: http://git.io/abc123

    $ curl -i http://git.io/abc123
    HTTP/1.1 302 Found
    Location: https://github.com/...

[_Read more about Git.io._](https://github.com/blog/985-git-io-github-url-shortener)

### Keyboard Shortcuts

When on a repository page, keyboard shortcuts allow you to navigate easily.

- Pressing `t` will bring up a file explorer.
- Pressing `w` will bring up the branch selector.
- Pressing `s` will focus the search field for the current repository. Pressing ↓ to select the “All GitHub” option changes the field to search all of GitHub.
- Pressing `l` will edit labels on existing Issues.
- Pressing `y` **when looking at a file** (e.g., `https://github.com/tiimgreen/github-cheat-sheet/blob/master/README.md`) will change your URL to one which, in effect, freezes the page you are looking at. If this code changes, you will still be able to see what you saw at that current time.

To see all of the shortcuts for the current page press `?`:

![Keyboard shortcuts](http://i.imgur.com/y5ZfNEm.png)

[Read more about search syntax you can use.](https://help.github.com/articles/search-syntax/)

### Line Highlighting in Repositories

Either adding, e.g., `#L52` to the end of a code file URL or simply clicking the line number will highlight that line number.

It also works with ranges, e.g., `#L53-L60`, to select ranges, hold `shift` and click two lines:

    https://github.com/rails/rails/blob/master/activemodel/lib/active_model.rb#L53-L60

![Line Highlighting](http://i.imgur.com/8AhjrCz.png)

### Closing Issues via Commit Messages

If a particular commit fixes an issue, any of the keywords `fix/fixes/fixed`, `close/closes/closed` or `resolve/resolves/resolved`, followed by the issue number, will close the issue once it is committed to the repository’s default branch.

    $ git commit -m "Fix screwup, fixes #12"

This closes the issue and references the closing commit.

![Closing Repo](http://i.imgur.com/Uh1gZdx.png)

[_Read more about closing Issues via commit messages._](https://help.github.com/articles/closing-issues-via-commit-messages/)

### Cross-Link Issues

If you want to link to another issue in the same repository, simply type hash `#` then the issue number, and it will be auto-linked.

To link to an issue in another repository, `{user}/{repo}#ISSUE_NUMBER`, e.g., `tiimgreen/toc#12`.

![Cross-Link Issues](https://camo.githubusercontent.com/447e39ab8d96b553cadc8d31799100190df230a8/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f626c6f672f323031312f736563726574732f7265666572656e6365732e706e67)

### Locking Conversations

Pull Requests and Issues can now be locked by owners or collaborators of the repo.

![Lock conversation](https://cloud.githubusercontent.com/assets/2723/3221693/bf54dd44-f00d-11e3-8eb6-bb51e825bc2c.png)

This means that users who are not collaborators on the project will no longer be able to comment.

![Comments locked](https://cloud.githubusercontent.com/assets/2723/3221775/d6e513b0-f00e-11e3-9721-2131cb37c906.png)

[_Read more about locking conversations._](https://github.com/blog/1847-locking-conversations)

### CI Status on Pull Requests

If set up correctly, every time you receive a Pull Request, [Travis CI](https://travis-ci.org/) will build that Pull Request just like it would every time you make a new commit. Read more about how to [get started with Travis CI](http://docs.travis-ci.com/user/getting-started/).

[![Travis CI status](https://cloud.githubusercontent.com/assets/1687642/2700187/3a88838c-c410-11e3-9a46-e65e2a0458cd.png)](https://github.com/octokit/octokit.rb/pull/452)

[_Read more about the commit status API._](https://github.com/blog/1227-commit-status-api)

### Filters

Both issues and pull requests allow filtering in the user interface.

For the Rails repo: https://github.com/rails/rails/issues, the following filter is built by selecting the label “activerecord”:

`is:issue label:activerecord`

But, you can also find all issues that are NOT labeled activerecord:

`is:issue -label:activerecord`

Additionally, this also works for pull requests:

`is:pr -label:activerecord`

Github has tabs for displaying open or closed issues and pull requests but you can also see merged pull requests. Just put the following in the filter:

`is:merged`

[_Read more about searching issues._](https://help.github.com/articles/searching-issues/)

Finally, github now allows you to filter by the Status API’s status.

Pull requests with only successful statuses:

`status:success`

[_Read more about searching on the Status API._](https://github.com/blog/2014-filter-pull-requests-by-status)

### Syntax Highlighting in Markdown Files

For example, to syntax highlight Ruby code in your Markdown files write:

    ```ruby
    require 'tabbit'
    table = Tabbit.new('Name', 'Email')
    table.add_row('Tim Green', 'tiimgreen@gmail.com')
    puts table.to_s
    ```

This will produce:

    require 'tabbit'
    table = Tabbit.new('Name', 'Email')
    table.add_row('Tim Green', 'tiimgreen@gmail.com')
    puts table.to_s

GitHub uses [Linguist](https://github.com/github/linguist) to perform language detection and syntax highlighting. You can find out which keywords are valid by perusing the [languages YAML file](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

[_Read more about GitHub Flavored Markdown._](https://help.github.com/articles/github-flavored-markdown/)

### Emojis

Emojis can be added to Pull Requests, Issues, commit messages, repository descriptions, etc. using `:name_of_emoji:`.

The full list of supported Emojis on GitHub can be found at [emoji-cheat-sheet.com](http://www.emoji-cheat-sheet.com/) or [scotch-io/All-Github-Emoji-Icons](https://github.com/scotch-io/All-Github-Emoji-Icons). A handy emoji search engine can be found at [emoji.muan.co](http://emoji.muan.co/).

The top 5 used Emojis on GitHub are:

1.  `:shipit:`
2.  `:sparkles:`
3.  `:-1:`
4.  `:+1:`
5.  `:clap:`

### Images/GIFs

Images and GIFs can be added to comments, READMEs etc.:

    ![Alt Text](http://www.sheawong.com/wp-content/uploads/2013/08/keephatin.gif)

Raw images from the repo can be used by calling them directly.:

    ![Alt Text](https://github.com/{user}/{repo}/raw/master/path/to/image.gif)

![Peter don’t care](http://www.sheawong.com/wp-content/uploads/2013/08/keephatin.gif)

All images are cached on GitHub, so if your host goes down, the image will remain available.

#### Embedding Images in GitHub Wiki

There are multiple ways of embedding images in Wiki pages. There’s the standard Markdown syntax (shown above). But there’s also a syntax that allows things like specifying the height or width of the image:

    [[ http://www.sheawong.com/wp-content/uploads/2013/08/keephatin.gif | height = 100px ]]

Which produces:

![Just a screenshot](http://i.imgur.com/J5bMf7S.png)

### Quick Quoting

When on a comment thread and you want to quote something someone previously said, highlight the text and press `r`, this will copy it into your text box in the block-quote format.

![Quick Quote](https://f.cloud.github.com/assets/296432/124483/b0fa6204-6ef0-11e2-83c3-256c37fa7abc.gif)

[_Read more about quick quoting._](https://github.com/blog/1399-quick-quotes)

### Pasting Clipboard Image to Comments

_(Works on Chrome browsers only)_

After taking a screenshot and adding it to the clipboard (mac: `cmd-ctrl-shift-4`), you can simply paste (`cmd-v / ctrl-v`) the image into the comment section and it will be auto-uploaded to github.

![Pasting Clipboard Image to Comments](https://cloud.githubusercontent.com/assets/39191/5794265/39c9b65a-9f1b-11e4-9bc7-04e41f59ea5f.png)

[_Read more about issue attachments._](https://help.github.com/articles/issue-attachments/)

### Quick Licensing

When creating a repository, GitHub gives you the option of adding in a pre-made license:

![License](http://i.imgur.com/Chqj4Fg.png)

You can also add them to existing repositories by creating a new file through the web interface. When the name `LICENSE` is typed in you will get an option to use a template:

![License](http://i.imgur.com/fTjQict.png)

Also works for `.gitignore`.

[_Read more about open source licensing._](https://help.github.com/articles/open-source-licensing/)

### Task Lists

In Issues and Pull requests check boxes can be added with the following syntax (notice the space):

    - [ ] Be awesome
    - [ ] Prepare dinner
      - [ ] Research recipe
      - [ ] Buy ingredients
      - [ ] Cook recipe
    - [ ] Sleep

![Task List](http://i.imgur.com/jJBXhsY.png)

When they are clicked, they will be updated in the pure Markdown:

    - [x] Be awesome
    - [ ] Prepare dinner
      - [x] Research recipe
      - [x] Buy ingredients
      - [ ] Cook recipe
    - [ ] Sleep

[_Read more about task lists._](https://help.github.com/articles/writing-on-github/#task-lists)

#### Task Lists in Markdown Documents

In full Markdown documents **read-only** checklists can now be added using the following syntax:

    - [ ] Mercury
    - [x] Venus
    - [x] Earth
      - [x] Moon
    - [x] Mars
      - [ ] Deimos
      - [ ] Phobos

- \[ \] Mercury
- \[x\] Venus
- \[x\] Earth
  - \[x\] Moon
- \[x\] Mars
  - \[ \] Deimos
  - \[ \] Phobos

[_Read more about task lists in markdown documents._](https://github.com/blog/1825-task-lists-in-all-markdown-documents)

### Relative Links

Relative links are recommended in your Markdown files when linking to internal content.

    [Link to a header](#awesome-section)
    [Link to a file](docs/readme)

Absolute links have to be updated whenever the URL changes (e.g., repository renamed, username changed, project forked). Using relative links makes your documentation easily stand on its own.

[_Read more about relative links._](https://help.github.com/articles/relative-links-in-readmes/)

### Metadata and Plugin Support for GitHub Pages

Within Jekyll pages and posts, repository information is available within the `site.github` namespace, and can be displayed, for example, using `{{ site.github.project_title }}`.

The Jemoji and jekyll-mentions plugins enable [emoji](#emojis) and <span class="citation" data-cites="mentions">\[@mentions\]</span>(https://github.com/blog/821) in your Jekyll posts and pages to work just like you’d expect when interacting with a repository on GitHub.com.

[_Read more about repository metadata and plugin support for GitHub Pages._](https://github.com/blog/1797-repository-metadata-and-plugin-support-for-github-pages)

### Viewing YAML Metadata in your Documents

Many blogging websites, like [Jekyll](http://jekyllrb.com/) with [GitHub Pages](https://pages.github.com), depend on some YAML-formatted metadata at the beginning of your post. GitHub will render this metadata as a horizontal table, for easier reading

![YAML metadata](https://camo.githubusercontent.com/47245aa16728e242f74a9a324ce0d24c0b916075/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f36343035302f313232383236372f65303439643063362d323761302d313165332d396464382d6131636432323539393334342e706e67)

[_Read more about viewing YAML metadata in your documents._](https://github.com/blog/1647-viewing-yaml-metadata-in-your-documents)

### Rendering Tabular Data

GitHub supports rendering tabular data in the form of `.csv` (comma-separated) and `.tsv` (tab-separated) files.

![Tabular data](https://camo.githubusercontent.com/1b6dd0157ffb45d9939abf14233a0cb13b3b4dfe/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3238323735392f3937363436322f33323038336463652d303638642d313165332d393262322d3566323863313061353035392e706e67)

[_Read more about rendering tabular data._](https://github.com/blog/1601-see-your-csvs)

### Rendering PDF

GitHub supports rendering PDF:

![PDF](https://cloud.githubusercontent.com/assets/1000669/7492902/f8493160-f42e-11e4-8cea-1cb4f02757e7.png)

[_Read more about rendering PDF._](https://github.com/blog/1974-pdf-viewing)

### Revert a Pull Request

After a pull request is merged, you may find it does not help anything or it was a bad decision to merge the pull request.

You can revert it by clicking the **Revert** button on the right side of a commit in the pull request page to create a pull request with reverted changes to this specific pull request.

![Revert button](https://camo.githubusercontent.com/0d3350caf2bb1cba53123ffeafc00ca702b1b164/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f68656c702f70756c6c5f72657175657374732f7265766572742d70756c6c2d726571756573742d6c696e6b2e706e67)

[_Read more about reverting pull requests_](https://github.com/blog/1857-introducing-the-revert-button)

### Diffs

#### Rendered Prose Diffs

Commits and pull requests, including rendered documents supported by GitHub (e.g., Markdown), feature _source_ and _rendered_ views.

![Source / Rendered view](https://github-images.s3.amazonaws.com/help/repository/rendered_prose_diff.png)

Click the “rendered” button to see the changes as they’ll appear in the rendered document. Rendered prose view is handy when you’re adding, removing, and editing text:

![Rendered Prose Diffs](https://f.cloud.github.com/assets/17715/2003056/3997edb4-862b-11e3-90be-5e9586edecd7.png)

[_Read more about rendered prose diffs._](https://github.com/blog/1784-rendered-prose-diffs)

#### Diffable Maps

Any time you view a commit or pull request on GitHub that includes geodata, GitHub will render a visual representation of what was changed.

[![Diffable Maps](https://f.cloud.github.com/assets/282759/2090660/63f2e45a-8e97-11e3-9d8b-d4c8078b004e.gif)](https://github.com/benbalter/congressional-districts/commit/2233c76ca5bb059582d796f053775d8859198ec5)

[_Read more about diffable maps._](https://github.com/blog/1772-diffable-more-customizable-maps)

#### Expanding Context in Diffs

Using the _unfold_ button in the gutter of a diff, you can reveal additional lines of context with a click. You can keep clicking _unfold_ until you’ve revealed the whole file, and the feature is available anywhere GitHub renders diffs.

![Expanding Context in Diffs](https://f.cloud.github.com/assets/22635/1610539/863c1f64-5584-11e3-82bf-151b406a272f.gif)

[_Read more about expanding context in diffs._](https://github.com/blog/1705-expanding-context-in-diffs)

#### Diff or Patch of Pull Request

You can get the diff of a Pull Request by adding a `.diff` or `.patch` extension to the end of the URL. For example:

    https://github.com/tiimgreen/github-cheat-sheet/pull/15
    https://github.com/tiimgreen/github-cheat-sheet/pull/15.diff
    https://github.com/tiimgreen/github-cheat-sheet/pull/15.patch

The `.diff` extension would give you this in plain text:

    diff --git a/README.md b/README.md
    index 88fcf69..8614873 100644
    --- a/README.md
    +++ b/README.md
    @@ -28,6 +28,7 @@ All the hidden and not hidden features of Git and GitHub. This cheat sheet was i
     - [Merged Branches](#merged-branches)
     - [Quick Licensing](#quick-licensing)
     - [TODO Lists](#todo-lists)
    +- [Relative Links](#relative-links)
     - [.gitconfig Recommendations](#gitconfig-recommendations)
         - [Aliases](#aliases)
         - [Auto-correct](#auto-correct)
    @@ -381,6 +382,19 @@ When they are clicked, they will be updated in the pure Markdown:
     - [ ] Sleep

    (...)

#### Rendering and diffing images

GitHub can display several common image formats, including PNG, JPG, GIF, and PSD. In addition, there are several ways to compare differences between versions of those image formats.

[![Diffable PSD](https://cloud.githubusercontent.com/assets/2546/3165594/55f2798a-eb56-11e3-92e7-b79ad791a697.gif)](https://github.com/blog/1845-psd-viewing-diffing)

[_Read more about rendering and diffing images._](https://help.github.com/articles/rendering-and-diffing-images/)

### Hub

[Hub](https://github.com/github/hub) is a command line Git wrapper that gives you extra features and commands that make working with GitHub easier.

This allows you to do things like:

    $ hub clone tiimgreen/toc

[_Check out some more cool commands Hub has to offer._](https://github.com/github/hub#commands)

### Contribution Guidelines

GitHub supports adding 3 different files which help users contribute to your project. These files can either be placed in the root of your repository or a `.github` directory under the root.

#### CONTRIBUTING File

Adding a `CONTRIBUTING` or `CONTRIBUTING.md` file to either the root of your repository or a `.github` directory will add a link to your file when a contributor creates an Issue or opens a Pull Request.

![Contributing Guidelines](https://camo.githubusercontent.com/71995d6b0e620a9ef1ded00a04498241c69dd1bf/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f736b697463682f6973737565732d32303132303931332d3136323533392e6a7067)

[_Read more about contributing guidelines._](https://github.com/blog/1184-contributing-guidelines)

#### ISSUE_TEMPLATE file

You can define a template for all new issues opened in your project. The content of this file will pre-populate the new issue box when users create new issues. Add an `ISSUE_TEMPLATE` or `ISSUE_TEMPLATE.md` file to either the root of your repository or a `.github` directory.

[_Read more about issue templates._](https://github.com/blog/2111-issue-and-pull-request-templates)

[Issue template file generator](https://www.talater.com/open-source-templates/)

![GitHub Issue template](https://cloud.githubusercontent.com/assets/25792/13120859/733479fe-d564-11e5-8a1f-a03f95072f7a.png)

#### PULL_REQUEST_TEMPLATE file

You can define a template for all new pull requests opened in your project. The content of this file will pre-populate the text area when users create pull requests. Add a `PULL_REQUEST_TEMPLATE` or `PULL_REQUEST_TEMPLATE.md` file to either the root of your repository or a `.github` directory.

[_Read more about pull request templates._](https://github.com/blog/2111-issue-and-pull-request-templates)

[Pull request template file generator](https://www.talater.com/open-source-templates/)

### Octicons

GitHubs icons (Octicons) have now been open sourced.

![Octicons](https://og.github.com/octicons/octicons@1200x630.png)

[_Read more about GitHub’s Octicons_](https://octicons.github.com)

### GitHub Student Developer Pack

If you are a student you will be eligible for the GitHub Student Developer Pack. This gives you free credit, free trials and early access to software that will help you when developing.

![GitHub Student Developer Pack](http://i.imgur.com/9ru3K43.png)

[_Read more about GitHub’s Student Developer Pack_](https://education.github.com/pack)

### GitHub Resources

<table style="width:99%;"><colgroup><col style="width: 55%" /><col style="width: 44%" /></colgroup><thead><tr class="header"><th>Title</th><th>Link</th></tr></thead><tbody><tr class="odd"><td>GitHub Explore</td><td>https://github.com/explore</td></tr><tr class="even"><td>GitHub Blog</td><td>https://github.com/blog</td></tr><tr class="odd"><td>GitHub Help</td><td>https://help.github.com/</td></tr><tr class="even"><td>GitHub Training</td><td>https://training.github.com/</td></tr><tr class="odd"><td>GitHub Developer</td><td>https://developer.github.com/</td></tr><tr class="even"><td>Github Education (Free Micro Account and other stuff for students)</td><td>https://education.github.com/</td></tr><tr class="odd"><td>GitHub Best Practices</td><td><a href="https://www.datree.io/resources/github-best-practices">Best Practices List</a></td></tr></tbody></table>

#### GitHub Talks

<table style="width:99%;"><colgroup><col style="width: 55%" /><col style="width: 44%" /></colgroup><thead><tr class="header"><th>Title</th><th>Link</th></tr></thead><tbody><tr class="odd"><td>How GitHub Uses GitHub to Build GitHub</td><td>https://www.youtube.com/watch?v=qyz3jkOBbQY</td></tr><tr class="even"><td>Introduction to Git with Scott Chacon of GitHub</td><td>https://www.youtube.com/watch?v=ZDR433b0HJY</td></tr><tr class="odd"><td>How GitHub No Longer Works</td><td>https://www.youtube.com/watch?v=gXD1ITW7iZI</td></tr><tr class="even"><td>Git and GitHub Secrets</td><td>https://www.youtube.com/watch?v=Foz9yvMkvlA</td></tr><tr class="odd"><td>More Git and GitHub Secrets</td><td>https://www.youtube.com/watch?v=p50xsL-iVgU</td></tr></tbody></table>

### SSH keys

You can get a list of public ssh keys in plain text format by visiting:

    https://github.com/{user}.keys

e.g. <https://github.com/tiimgreen.keys>

[_Read more about accessing public ssh keys._](https://changelog.com/github-exposes-public-ssh-keys-for-its-users/)

### Profile Image

You can get a user’s profile image by visiting:

    https://github.com/{user}.png

e.g. <https://github.com/tiimgreen.png>

### Repository Templates

You can enable templating on your repository which allows anyone to copy the directory structure and files, allowing them to instantly use the files (e.g. for a tutorial or if writing boilerplate code). This can be enabled in the settings of your repository.

![Convert](https://i.postimg.cc/hGCrVm9F/Template.gif)

Changing to a template repository will give a new URL endpoint which can be shared and instantly allows users to use your repository as a template. Alternatively, they can go to your repository and click the ‘Use as template’ button.

![Template](https://i.postimg.cc/L8PKCHx0/New-Template.gif)

[_Read more about using repositories as templates_](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/)

## Git

### Remove All Deleted Files from the Working Tree

When you delete a lot of files using `/bin/rm` you can use the following command to remove them from the working tree and from the index, eliminating the need to remove each one individually:

    $ git rm $(git ls-files -d)

For example:

    $ git status
    On branch master
    Changes not staged for commit:
        deleted:    a
        deleted:    c

    $ git rm $(git ls-files -d)
    rm 'a'
    rm 'c'

    $ git status
    On branch master
    Changes to be committed:
        deleted:    a
        deleted:    c

### Previous Branch

To move to the previous branch in Git:

    $ git checkout -
    # Switched to branch 'master'

    $ git checkout -
    # Switched to branch 'next'

    $ git checkout -
    # Switched to branch 'master'

[_Read more about Git branching._](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)

### Stripspace

Git Stripspace:

- Strips trailing whitespace
- Collapses newlines
- Adds newline to end of file

A file must be passed when calling the command, e.g.:

    $ git stripspace < README.md

[_Read more about the Git `stripspace` command._](http://git-scm.com/docs/git-stripspace)

### Checking out Pull Requests

Pull Requests are special branches on the GitHub repository which can be retrieved locally in several ways:

Retrieve a specific Pull Request and store it temporarily in `FETCH_HEAD` for quickly `diff`-ing or `merge`-ing:

    $ git fetch origin refs/pull/[PR-Number]/head

Acquire all Pull Request branches as local remote branches by refspec:

    $ git fetch origin '+refs/pull/*/head:refs/remotes/origin/pr/*'

Or setup the remote to fetch Pull Requests automatically by adding these corresponding lines in your repository’s `.git/config`:

    [remote "origin"]
        fetch = +refs/heads/*:refs/remotes/origin/*
        url = git@github.com:tiimgreen/github-cheat-sheet.git

    [remote "origin"]
        fetch = +refs/heads/*:refs/remotes/origin/*
        url = git@github.com:tiimgreen/github-cheat-sheet.git
        fetch = +refs/pull/*/head:refs/remotes/origin/pr/*

For Fork-based Pull Request contributions, it’s useful to `checkout` a remote branch representing the Pull Request and create a local branch from it:

    $ git checkout pr/42 pr-42

Or should you work on more repositories, you can globally configure fetching pull requests in the global git config instead.

    git config --global --add remote.origin.fetch "+refs/pull/*/head:refs/remotes/origin/pr/*"

This way, you can use the following short commands in all your repositories:

    git fetch origin

    git checkout pr/42

[_Read more about checking out pull requests locally._](https://help.github.com/articles/checking-out-pull-requests-locally/)

### Empty Commits

Commits can be pushed with no code changes by adding `--allow-empty`:

    $ git commit -m "Big-ass commit" --allow-empty

Some use-cases for this (that make sense), include:

- Annotating the start of a new bulk of work or a new feature.
- Documenting when you make changes to the project that aren’t code related.
- Communicating with people using your repository.
- The first commit of a repository: `git commit -m "Initial commit" --allow-empty`.

### Styled Git Status

Running:

    $ git status

produces:

![git status](http://i.imgur.com/qjPyvXb.png)

By adding `-sb`:

    $ git status -sb

this is produced:

![git status -sb](http://i.imgur.com/K0OY3nm.png)

[_Read more about the Git `status` command._](http://git-scm.com/docs/git-status)

### Styled Git Log

Running:

    $ git log --all --graph --pretty=format:'%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative

produces:

![git log –all –graph –pretty=format:‘%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset’ –abbrev-commit –date=relative](http://i.imgur.com/58eOtkW.png)

Credit to [Palesz](http://stackoverflow.com/users/88355/palesz)

_This can be aliased using the instructions found [here](https://github.com/tiimgreen/github-cheat-sheet#aliases)._

[_Read more about the Git `log` command._](http://git-scm.com/docs/git-log)

### Git Query

A Git query allows you to search all your previous commit messages and find the most recent one matching the query.

    $ git show :/query

where `query` (case-sensitive) is the term you want to search, this then finds the last one and gives details on the lines that were changed.

    $ git show :/typo

![git show :/query](http://i.imgur.com/icaGiNt.png)

_Press `q` to quit._

### Git Grep

Git Grep will return a list of lines matching a pattern.

Running:

    $ git grep aliases

will show all the files containing the string _aliases_.

![git grep aliases](http://i.imgur.com/DL2zpQ9.png)

_Press `q` to quit._

You can also use multiple flags for more advanced search. For example:

- `-e` The next parameter is the pattern (e.g., regex)
- `--and`, `--or` and `--not` Combine multiple patterns.

Use it like this:

     $ git grep -e pattern --and -e anotherpattern

[_Read more about the Git `grep` command._](http://git-scm.com/docs/git-grep)

### Merged Branches

Running:

    $ git branch --merged

will give you a list of all branches that have been merged into your current branch.

Conversely:

    $ git branch --no-merged

will give you a list of branches that have not been merged into your current branch.

[_Read more about the Git `branch` command._](http://git-scm.com/docs/git-branch)

### Fixup and Autosquash

If there is something wrong with a previous commit (can be one or more from HEAD), for example `abcde`, run the following command after you’ve amended the problem:

    $ git commit --fixup=abcde
    $ git rebase abcde^ --autosquash -i

[_Read more about the Git `commit` command._](http://git-scm.com/docs/git-commit) [_Read more about the Git `rebase` command._](http://git-scm.com/docs/git-rebase)

### Web Server for Browsing Local Repositories

Use the Git `instaweb` command to instantly browse your working repository in `gitweb`. This command is a simple script to set up `gitweb` and a web server for browsing the local repository.

    $ git instaweb

opens:

![Git instaweb](http://i.imgur.com/Dxekmqc.png)

[_Read more about the Git `instaweb` command._](http://git-scm.com/docs/git-instaweb)

### Git Configurations

Your `.gitconfig` file contains all your Git configurations.

#### Aliases

Aliases are helpers that let you define your own git calls. For example you could set `git a` to run `git add --all`.

To add an alias, either navigate to `~/.gitconfig` and fill it out in the following format:

    [alias]
      co = checkout
      cm = commit
      p = push
      # Show verbose output about tags, branches or remotes
      tags = tag -l
      branches = branch -a
      remotes = remote -v

…or type in the command-line:

    $ git config --global alias.new_alias git_function

For example:

    $ git config --global alias.cm commit

For an alias with multiple functions use quotes:

    $ git config --global alias.ac 'add -A . && commit'

Some useful aliases include:

<table style="width:99%;"><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Alias</th><th>Command</th><th>What to Type</th></tr></thead><tbody><tr class="odd"><td><code>git cm</code></td><td><code>git commit</code></td><td><code>git config --global alias.cm commit</code></td></tr><tr class="even"><td><code>git co</code></td><td><code>git checkout</code></td><td><code>git config --global alias.co checkout</code></td></tr><tr class="odd"><td><code>git ac</code></td><td><code>git add . -A</code> <code>git commit</code></td><td><code>git config --global alias.ac '!git add -A &amp;&amp; git commit'</code></td></tr><tr class="even"><td><code>git st</code></td><td><code>git status -sb</code></td><td><code>git config --global alias.st 'status -sb'</code></td></tr><tr class="odd"><td><code>git tags</code></td><td><code>git tag -l</code></td><td><code>git config --global alias.tags 'tag -l'</code></td></tr><tr class="even"><td><code>git branches</code></td><td><code>git branch -a</code></td><td><code>git config --global alias.branches 'branch -a'</code></td></tr><tr class="odd"><td><code>git cleanup</code></td><td><code>git branch --merged \| grep -v '*' \| xargs git branch -d</code></td><td><code>git config --global alias.cleanup "!git branch --merged \| grep -v '*' \| xargs git branch -d"</code></td></tr><tr class="even"><td><code>git remotes</code></td><td><code>git remote -v</code></td><td><code>git config --global alias.remotes 'remote -v'</code></td></tr><tr class="odd"><td><code>git lg</code></td><td><code>git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset' --abbrev-commit --</code></td><td><code>git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset' --abbrev-commit --"</code></td></tr></tbody></table>

_Some Aliases are taken from <span class="citation" data-cites="mathiasbynens">\[@mathiasbynens\]</span>(https://github.com/mathiasbynens) dotfiles: https://github.com/mathiasbynens/dotfiles/blob/master/.gitconfig_

#### Auto-Correct

Git gives suggestions for misspelled commands and if auto-correct is enabled the command can be fixed and executed automatically. Auto-correct is enabled by specifying an integer which is the delay in tenths of a second before git will run the corrected command. Zero is the default value where no correcting will take place, and a negative value will run the corrected command with no delay.

For example, if you type `git comit` you will get this:

    $ git comit -m "Message"
    # git: 'comit' is not a git command. See 'git --help'.

    # Did you mean this?
    #   commit

Auto-correct can be enabled like this (with a 1.5 second delay):

    $ git config --global help.autocorrect 15

So now the command `git comit` will be auto-corrected to `git commit` like this:

    $ git comit -m "Message"
    # WARNING: You called a Git command named 'comit', which does not exist.
    # Continuing under the assumption that you meant 'commit'
    # in 1.5 seconds automatically...

The delay before git will rerun the command is so the user has time to abort.

#### Color

To add more color to your Git output:

    $ git config --global color.ui 1

[_Read more about the Git `config` command._](http://git-scm.com/docs/git-config)

### Git Resources

<table style="width:99%;"><colgroup><col style="width: 55%" /><col style="width: 44%" /></colgroup><thead><tr class="header"><th>Title</th><th>Link</th></tr></thead><tbody><tr class="odd"><td>Official Git Site</td><td>http://git-scm.com/</td></tr><tr class="even"><td>Official Git Video Tutorials</td><td>http://git-scm.com/videos</td></tr><tr class="odd"><td>Code School Try Git</td><td>http://try.github.com/</td></tr><tr class="even"><td>Introductory Reference &amp; Tutorial for Git</td><td>http://gitref.org/</td></tr><tr class="odd"><td>Official Git Tutorial</td><td>http://git-scm.com/docs/gittutorial</td></tr><tr class="even"><td>Everyday Git</td><td>http://git-scm.com/docs/everyday</td></tr><tr class="odd"><td>Git Immersion</td><td>http://gitimmersion.com/</td></tr><tr class="even"><td>Git God</td><td>https://github.com/gorosgobe/git-god</td></tr><tr class="odd"><td>Git for Computer Scientists</td><td>http://eagain.net/articles/git-for-computer-scientists/</td></tr><tr class="even"><td>Git Magic</td><td>http://www-cs-students.stanford.edu/~blynn/gitmagic/</td></tr><tr class="odd"><td>Git Visualization Playground</td><td>http://onlywei.github.io/explain-git-with-d3/#freeplay</td></tr><tr class="even"><td>Learn Git Branching</td><td>http://pcottle.github.io/learnGitBranching/</td></tr><tr class="odd"><td>A collection of useful .gitignore templates</td><td>https://github.com/github/gitignore</td></tr><tr class="even"><td>Unixorn’s git-extra-commands collection of git scripts</td><td>https://github.com/unixorn/git-extra-commands</td></tr></tbody></table>

#### Git Books

<table style="width:99%;"><colgroup><col style="width: 55%" /><col style="width: 44%" /></colgroup><thead><tr class="header"><th>Title</th><th>Link</th></tr></thead><tbody><tr class="odd"><td>Pragmatic Version Control Using Git</td><td>https://pragprog.com/titles/tsgit/pragmatic-version-control-using-git</td></tr><tr class="even"><td>Pro Git</td><td>http://git-scm.com/book</td></tr><tr class="odd"><td>Git Internals PluralSight</td><td>https://github.com/pluralsight/git-internals-pdf</td></tr><tr class="even"><td>Git in the Trenches</td><td>http://cbx33.github.io/gitt/</td></tr><tr class="odd"><td>Version Control with Git</td><td>http://www.amazon.com/Version-Control-Git-collaborative-development/dp/1449316387</td></tr><tr class="even"><td>Pragmatic Guide to Git</td><td>https://pragprog.com/titles/pg_git/pragmatic-guide-to-git</td></tr><tr class="odd"><td>Git: Version Control for Everyone</td><td>https://www.packtpub.com/application-development/git-version-control-everyone</td></tr></tbody></table>

#### Git Videos

<table style="width:99%;"><colgroup><col style="width: 55%" /><col style="width: 44%" /></colgroup><thead><tr class="header"><th>Title</th><th>Link</th></tr></thead><tbody><tr class="odd"><td>Linus Torvalds on Git</td><td>https://www.youtube.com/watch?v=4XpnKHJAok8</td></tr><tr class="even"><td>Introduction to Git with Scott Chacon</td><td>https://www.youtube.com/watch?v=ZDR433b0HJY</td></tr><tr class="odd"><td>Git From the Bits Up</td><td>https://www.youtube.com/watch?v=MYP56QJpDr4</td></tr><tr class="even"><td>Graphs, Hashes, and Compression, Oh My!</td><td>https://www.youtube.com/watch?v=ig5E8CcdM9g</td></tr><tr class="odd"><td>GitHub Training &amp; Guides</td><td>https://www.youtube.com/watch?list=PLg7s6cbtAD15G8lNyoaYDuKZSKyJrgwB-&amp;v=FyfwLX4HAxM</td></tr></tbody></table>

#### Git Articles

<table style="width:99%;"><colgroup><col style="width: 55%" /><col style="width: 44%" /></colgroup><thead><tr class="header"><th>Title</th><th>Link</th></tr></thead><tbody><tr class="odd"><td>GitHub Flow</td><td>http://scottchacon.com/2011/08/31/github-flow.html</td></tr><tr class="even"><td>Migrating to Git Large File Storate (Git LFS)</td><td>http://vooban.com/en/tips-articles-geek-stuff/migrating-to-git-lfs-for-developing-deep-learning-applications-with-large-files/</td></tr></tbody></table>
