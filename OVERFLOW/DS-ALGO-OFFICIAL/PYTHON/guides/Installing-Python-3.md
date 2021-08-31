**NOTE: pipenv is _optional_! We don't use it in CS.** But it's a neat package manager if you get into more complex Python projects. It can be a headache of an install for some people. You can safely ignore anything about pipenv below if you don't want to mess with it.

We'll want to install Python 3 (version 3.x), which is the runtime for the language itself. The runtime is what allows you to execute Python code and files by typing `python [file_or_code_to_execute]` in your terminal. You can also open up a Python REPL (Read-Eval-Print Loop) to quickly and easily mess around with Python code once you've gotten the runtime installed. If you recall how Node let's you execute and run JavaScript code locally on your machine instead of having to rely on the browser, the Python runtime pretty much let's you do the same thing but with Python code. 

Additionally, we'll be talking about how to install the (optional) pipenv virtual environment manager. Think of it as the `npm` of Python (though pipenv is also capable of performing a bunch of other tasks as well, most notably running your Python projects in an isolated virtual environment). 

## Note for Anaconda users

Unfortunately, we haven't found a way to get Anaconda to play nicely with pipenv. If you get them working together, please let your instructor know how you did it.

## Testing the Install

If you can run `python` or `python3` and see a 3.7 or later version, you're good to go:

```
$ python3 --version
Python 3.6.5
```
or on some systems, Python 3 is just `python`:

```
$ python --version
Python 3.6.5
```

And optionally try `pipenv`:

```
$ pipenv --version
pipenv, version [some remotely recent date, probably]
```

Otherwise, keep reading. :)

## macOS

While macOS comes with Python 2, we need to get Python 3 in there as well.

If you don't have Brew installed, [follow the instructions on the brew website](https://brew.sh/).

Use Brew to install Python and pipenv at the Terminal prompt:

```
brew install python pipenv
```

## Windows

_**Note**:_ Git Bash doesn't seem to cooperate if you're trying to install Python on Windows. Try another terminal like Powershell. 

Recommend updating Windows to the latest version.

### Windows Store

Python 3 is in the Windows Store and can be installed from there.

### Official Binaries

When installing the official package, be sure to check the

```
[ ] Add to PATH
```

checkbox!!

[Official Package](https://www.python.org/downloads/windows/)

### Pipenv

This is what worked for Beej. YMMV.

1. Install Python, as per above.
2. Bring up a shell (cmd.exe or Powershell)
3. Run `py -m pip`
4. Run `py -m pip install --user pipenv`

   At this point, you should be able to always run pipenv with `py -m pipenv`, but that's a little inconvenient. Read on for making it easier.

5. You'll see a message like this in the pipenv install output, but with a slightly different path:
   ```
   add C:\Users\username\AppData\Roaming\Python\Python38\Scripts to your path
   ```
6. Select that path (not including any quotes around it), and copy it
7. Go to the Start menu, type "environment" and run the program `Edit Environment Variables`
8. In the System Properties popup, hit the `Advanced` tab, then `Environment Variables`
9. On the list of environment variables, doubleclick `Path`
10. Click `New`
11. Paste that path from step 5 into the new entry slot. Make sure there aren't any quotes around it.
12. Click `OK`, `OK`, `OK`.
13. Relaunch any shells you have open.
14. Now you should be able to just run `pip` and `pipenv` in Powershell without putting `py -m` in front of it.

#### Pipenv official instructions

[Install pipenv per these instructions](http://docs.python-guide.org/en/latest/dev/virtualenvs/#virtualenvironments-ref)

### Chocolatey

[Install Chocolatey](https://chocolatey.org/install)

[Install Python 3 with Chocolatey](https://chocolatey.org/packages/python3)

[Install pipenv per these instructions](http://docs.python-guide.org/en/latest/dev/virtualenvs/#virtualenvironments-ref)

### WSL

If you're running Windows 10+, you might want to install the Windows Subsystem for Linux. This gives you a mini, integrated Linux system inside Windows. You then install and use Python from there.

1. Update Windows to latest if you haven't already.
2. [Install WSL from here](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Go to the Microsoft store and install Ubuntu.
4. Run Ubuntu to get a bash shell.
5. Make a new username and password. This is completely separate from your Windows username and password, but I made mine the same so that I wouldn't forget.
6. Upgrade the Ubuntu system. Run:
   ```
   sudo apt-get update
   sudo apt-get upgrade
   ```
   Give your newly-entered password if prompted.
7. Running `python3 --version` should give you 3.6 or higher.
8. Run `pip install pipenv`.

If you've installed VS Code, add the "Remote WSL" extension. This way you can run `code` from within Ubuntu.

In the Ubuntu shell, you can run `explorer.exe .` in any directory to open a Windows Explorer window in that directory.

Also in Windows Explorer, you can put `\\wsl$` in the URL bar to see your Ubuntu drive. (If it doesn't show up, relaunch your Ubuntu shell.)

If you run into trouble with the above, try the following:

1. Open cmd.exe as an administrator and start bash with `bash`
    1. Type `Python -V' and 'Python3 -V`
        1. If one of these responds with `Python 3.6.8` use that command from now on
        2. If neither response is `Python 3.6.8` but one is a higher version of Python, this means one of two things
            1. If you have manually installed a higher version of Python, we recommend uninstalling it
            2. If you have not, it is possible that Microsoft has updated WSL and you will need to adjust these instructions to accommodate
        3. Otherwise, update Ubuntu:
            1. `sudo apt-get update`
            2. `sudo apt-get upgrade`
    2. Repeat 2.1 above to determine if you should use `Python` or `Python3` when using Python.  *Note:* inside the shell, you will always use *Python* as the command.
2. Make sure pip is installed for *Python 3*
    1. `pip --version` and `pip3 --version`. One of these needs to respond with a version that has a version of Python 3 at the end of the line.
    2. If you only have it for 2.7, you will need to install for 3 with:
        1. `sudo apt update && sudo apt upgrade`
        2. `sudo apt install python3-pip`
    3. Check versions and commands again. You will likely need to use `pip3` for the next step, but it's possible it may be just `pip`. Use the one with the version associated with Python 3.6.8
3. Make sure pipenv is installed for Python 3 `python3 -m pipenv --version`
    1. If not, install pipenv:
        1. `sudo apt update && sudo apt upgrade` (if you didn't just do this above)
        2. `pip3 install --user pipenv`
    2. Check the version again
4. Try `pipenv shell`. If this fails, make sure that every reference in the error refers to Python 3.6. If not, review the above steps
    1. If the error does refer to 3.6:
        1. Confirm that `python --version` refers to 2.7.something
        2. Confirm that `/usr/bin/python3 --version` refers to 3.6.8
        3. `pipenv --three --python=`which python3`` *NOTE* that there are backticks (`) around *which python3*
        4. This should create the shell forcing it to use 3.6.8

## Linux
Consult the documentation for your distribution.