Lots of times at LambdaSchool and in Real Life, you'll make a fork of a repo. Then the owner of the original repo will make further commits to their repo and your fork will fall out of sync.

This is normal, and can be handled from the command line with a little bit of setup and a couple commands.

Unfortunately, as of now, [you can't do this from the GitHub web UI](https://github.com/isaacs/github/issues/121) and, given how old that feature request is, it might never happen.

## A Bit of Perspective

Before we begin, it's useful to know what repos are at play and how they interact.

There are three, and we're going to give them all names:

* `origin`: this is your fork on GitHub (of the original repo on GitHub, the `upstream`)
* `local`: this is your clone on your local computer (of your fork on GitHub, the `origin`)
* `upstream`: this is the original repo on GitHub that you forked

When we bring our `origin` into sync with the `upstream`, there are two possible approaches:

1. You get the `upstream` owner to issue you a pull request and you accept it in the GitHub UI. **This barely ever happens**, since they'd have to do it for everyone who forked the repo, and that might be hundreds of people.

2. You fetch the commits from `upstream` into your `local` repo, merge them, and then push the result to your `origin`. **This is almost always the way it happens**.

![Syncing the fork repo](https://github.com/LambdaSchool/BeejWiki/blob/master/wiki-images/repo-fork-sync.svg)

## What is `upstream`?

**This is important one-time setup! Once you set the `upstream`, you don't need to do it again for this repo!**

`upstream` is what we call a _remote_ in git. It's a nice human-readable name for a repo URL. You could use the full URL every time you wanted to refer to a repo, but that's a pain, so we make these aliases.

`origin` is a remote name you might already have seen. It's "the URL this repo was cloned from". This gets set up for you automatically by git.

For example, if I have a local repo that's a clone of one of my forks, I can see the remotes for the repo with `git remote -v`:

```bash
$ git clone git@github.com:MyName/My-Forked-Repo.git
[...cloning output...] 

$ git remote -v
origin	git@github.com:MyName/My-Forked-Repo.git (fetch)
origin	git@github.com:MyName/My-Forked-Repo.git (push)
```

But you can have as many remotes as you want; they're just names for other repos. So let's add another remote that _refers to the original repo we forked from_, and let's call it `upstream`.

```bash
$ git remote add upstream https://github.com/LambdaSchool/Original-Repo.git

$ git remote -v
origin	git@github.com:MyName/My-Forked-Repo.git (fetch)
origin	git@github.com:MyName/My-Forked-Repo.git (push)
upstream     https://github.com/LambdaSchool/Original-Repo.git (fetch)
upstream     https://github.com/LambdaSchool/Original-Repo.git (push)
```

Now we have two remotes listed.

Note that we used the HTTPS URL for the original repo for `upstream`. This is because we presumably don't have SSH access to that repo, but that's OK--we only need to read from it, not write to it.

## Syncing Your Fork

As shown in the diagram up above, we're going to grab commits from `upstream`, merge them into our `local`, and then push them to our `origin`. After that, all repos should be in sync.

**The following assumes you're merging the `origin`'s `master` branch with your `master` branch. If you're merging other branches, you'll have to adjust the following instructions to suit.**

### Fetching new commits from `upstream`

`git fetch` is like `git pull`, except it doesn't merge. It goes and grabs all the new commits from the named remote and puts them in your local repo, but doesn't update anything in your working directory. The commits are just sitting there in git's local database.

> Fun fact: `git pull` is shorthand for `git fetch` followed by `git merge`.


Fetch the new commits from the original repo, `upstream`, like so:

```bash
$ git fetch upstream
[...fetch output...]
```

### Merging your `master` with `upstream/master`

Now you have all the new commits from `upstream`, but you have to merge them with all the changes you've been making.

**First, make sure you've fully committed your stuff**:

```bash
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean
```

If it says you have changes that are staged (or not staged), make a commit before proceeding. (Or learn how to use [`git stash`](https://git-scm.com/book/en/v1/Git-Tools-Stashing).)

Second, make sure you're on your local `master` branch (the branch with the `*` next to it is the current):

```bash
$ git checkout master

$ git branch
* master
```

You need to be on your `master` branch because that's the one you're _merging into_.

Third, merge! In the following example, `upstream/master` refers to the `master` branch on the `upstream` remote. (As opposed to `master` on your local.)

```bash
$ git merge upstream/master
[...merge output...]
```

Note that the above will most likely ask you to create a message for this commit. Just say you merged or whatever you wish. (If it does a [fast-forward merge](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging), it won't ask for a commit message.)

This is the _interesting_ part since it's the only place you can get into trouble with merging. Unfortunately, [how to deal with merge conflicts](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) is beyond the scope of this tutorial, but it's not the end of the world if you have to do it.

If you don't see anything about conflicts on the merge output, you're good to go. Otherwise [resolve them](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) before proceeding to the next step.

A useful [gitconfig alias](https://git-scm.com/docs/git-config), `git up`:
>    
>    `up = "!git remote update -p; git merge --ff-only `[`@{u}`](https://git-scm.com/docs/gitrevisions)`"`

Using this lets you more or less forget how to properly use `git pull` -- you still have to `git merge` if you're on a different branch, but can just do `git up` for master/any collaborative branch where there are commits from others.

### Push to your `origin`

After fetching and merging, the `upstream` and your `local` are in sync. To get your `origin` in sync as well, just push to it:

```bash
$ git push
[...push output...]
```

And then you should be in sync!

## References

* [GitHub help on syncing a fork](https://help.github.com/articles/syncing-a-fork/)
* [GitHub help on setting a remote](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
* [Perpetual GitHub feature request to get this in their UI](https://github.com/isaacs/github/issues/121)
* [Resolving merge conflicts](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
* [`git stash`](https://git-scm.com/book/en/v1/Git-Tools-Stashing)