## Prerequisites
First, [install your compiler.](https://github.com/LambdaSchool/CS-Wiki/wiki/Getting-Your-C-Compiler-Installed)

Then, go to the extensions panel in VS Code and search for `C/C++`. Choose the extension by Microsoft (ms-vscode.cpptools).

Install that extension and restart VSC.

[Here is an example project](https://github.com/LambdaSchool/CS-Wiki/tree/master/vscdebugc).


## Building the Project in VS Code

_**Currently, this build process only works for MacOS and Linux.  It is unknown if it will work on Windows 10 with WSL.  See below for additional instructions on compiling in Windows 7 with Cygwin.**_

What we want to be able to do is build the project with CTRL-SHIFT-B (or COMMAND-SHIFT-B).

The `tasks.json` file controls which tasks VSC can run. The one we're interested in is the Default Build Task.

1. With VSC open to your root project directory, hit CTRL-SHIFT-P (or COMMAND-SHIFT-P).
2. Type `tasks` and choose "Tasks: Configure Default Build Task".
3. Choose "Create tasks.json file from template".
4. Choose "Others".

At this point you should be editing `tasks.json`.

1. Change the `label` to something representative, like `Build`
2. Change the `command` to the command you want to run, like `gcc -Wall -o foo foo.c` or `make`
3. Hit CTRL-SHIFT-P (or COMMAND-SHIFT-P) again.
4. Type `default` and choose "Tasks: Configure Default Build Task" again.
5. Select the value you put in for `label` in step 1.
6. Save `tasks.json`.

At this point, your `tasks.json` should look something like this:

```javascript
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build",
      "type": "shell",
      "command": "make",
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

Now you should be able to hit CTRL-SHIFT-B (or COMMAND-SHIFT-B) and see a build.

### Adding PROBLEMS Panel Support (OPTIONAL)

Adding a _Problem Matcher_ will automatically extract error information from the build and put it in the PROBLEMS panel to make it easier to jump to those line numbers.

Here is a `tasks.json` file with a [`problemMatcher` for C/C++](https://code.visualstudio.com/docs/editor/tasks#_defining-a-problem-matcher) added in:

```javascript
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build",
      "type": "shell",
      "command": "make",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": {
        "owner": "cpp",
        "fileLocation": ["relative", "${workspaceFolder}"],
        "pattern": {
          "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
          "file": 1,
          "line": 2,
          "column": 3,
          "severity": 4,
          "message": 5
        }
      }
    }
  ]
}
```

`tasks.json` will be found in the `.vscode/` directory in the project workspace.

### Compiling in Windows/Cygwin
We need to complete a few more setup items to be able to compile using the Cygwin Bash terminal.  We will be able to build programs, but the above build shortcut and problem matcher will not work.  **Please let us know if you have found a workaround!**

1. We need to install two additional packages for Cygwin.  Open cmd.exe as an administrator (not the Cygwin terminal).
2. Navigate to the directory where you saved the installer.
3. Run the following command: `setup-x86_64.exe -q -P chere -P gdb`.
    *  If this step is not performed, the bash terminal will crash on open in VS Code.
4. Press `Ctrl + Shift + P` and type in `Open User Settings`.  Click on the result.  This will open a file called `User Settings`
5. Add the following lines to your settings.  Note that items in this object are comma separated.

>             "terminal.integrated.shell.windows": "C:\\cygwin64\\bin\\bash.exe",
>             "terminal.integrated.shellArgs.windows": ["/bin/xhere","/bin/bash"]

6. Verify that there are no errors indicated by squiggles, then save and close the file.

These steps are necessary for each new project you work on:

1. Open your project in VS Code.  If you don't have another one yet, use the project linked above to make sure this works.  
2. Open a file with an `#include` statement at the top.  Open \vscdebugc\hello.c if you are using the example project.
3. The lines with `#include` statements will have green squiggles underneath them.  Click on one, then click on the lightbulb that appears on the left side.
4. Select `Edit "includePath" Settings`.  This will create and open a file called `c_cpp_properties.json`.
5. Scroll to the `"Win32"` section.  Under `"includePath"` **AND** the `"path"` part of `"browse"`, add the following:

>             "C:/cygwin64/lib/gcc/x86_64-pc-cygwin/6.4.0/include",
>             "C:/cygwin64/lib/gcc/x86_64-pc-cygwin/6.4.0/include/c++/*",
>             "C:/cygwin64/lib/gcc/x86_64-pc-cygwin/6.4.0/include/c++/tr1/",
>             "C:/cygwin64/lib/gcc/x86_64-pc-cygwin/6.4.0/include/c++/tr2/",
>             "C:/cygwin64/lib/gcc/x86_64-pc-cygwin/6.4.0/include/c++/bits/",
>             "C:/cygwin64/lib/gcc/x86_64-pc-cygwin/6.4.0/include/c++/x86_64-pc-cygwin/",

6. Verify that this has worked by returning to `hello.c`.
    * The squiggles under any `#include`s should be gone.
    * Start to type `printf()`.  If Intellisense is working, the function should pop up.

To compile and run your program, you cannot use the `Ctrl + Shift + B` shortcut.  Instead:
1. Open the terminal (View -> Integrated Terminal).
2. Navigate to the folder containing your project.
    * To get to your Windows directory from bash, type `cd cygdrive/c/Users/YourUserName`
3. If there is a makefile set up, you can navigate to the location with that file and simply enter the command `make`.
    * In the demo, this is located in `/CS-Wiki/vscdebugc`
4. Otherwise, enter `gcc -Wall -Wextra -o foo foo.c`
    * In the demo, this command would be `gcc -Wall -Wextra -o hello hello.c`.
5. Other than a slight hitch in the terminal, it may appear that nothing has happened when compiling a small program.  If this is the first time compiling, foo.exe will appear in the Explorer.
    *  It can be useful to keep a window open so that you can easily see the last updated time and verify that the build completed.
6. To run your new program, type `./foo.exe` in the terminal.


## Debugging the Project in VS Code

**IMPORTANT**: You *must* build your C code with the `-g` switch to `gcc` or `clang`. This causes debugging information to be included in the binary.

### Setting up the Debugger

To set up debugging, perform the following steps:

1. Open the debugging panel (with the "anti-bug" symbol on the left).
2. Where it says "No Configurations on the top, pull down that menu.
3. Choose "Add Configuration".
4. Choose C++
5. It'll pop up an editor for `launch.json`. Edit the `name` to be something you like, e.g. "My Server"
6. Change `program` to be the name of your binary from the build step, e.g. `"${workspaceFolder}/myserver"`
7. Change `miDebuggerPath` to the location of gdb.exe.  This will be somewhere in your compiler folder.
8. If you are using `fork()`, it might be helpful to modify GDB's `detach-on-fork` setting to `off` in `setupCommands`.`text`, for example:

    `"text": "-enable-pretty-printing -gdb-set detach-on-fork off",`

9. Save `launch.json`.

Example `launch.json`:

```javascript
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [

    {
      "name": "Hello world",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/hello",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": true,
      "MIMode": "gdb",
      "miDebuggerPath": "/path/to/gdb",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb and add better child debugging",
          "text": "-enable-pretty-printing -gdb-set detach-on-fork off",
          "ignoreFailures": true
        }
      ]
    }
  ]
}
```

`launch.json` will be found in the `.vscode/` directory in the project workspace.

### Intellisense in Windows/WSL

Follow [the instructions on this page](https://github.com/Microsoft/vscode-cpptools/blob/master/Documentation/LanguageServer/Windows%20Subsystem%20for%20Linux.md).

Note that if `<stdio.h>` fails to highlight, you might need to add a final `/*` to the last line in the `includePath` section:

```
"${localappdata}/Packages/CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc/LocalState/rootfs/usr/include/*"
```

### Running the Debugger

1. Perform a build.
2. In the editor for the file you wish to debug, click just left of the line number where you want a breakpoint. A red dot will appear.
3. In the debugger panel, click the green run arrow at the top, or select `Debug`→`Start Debugging`, or hit `F5`.
4. The run should break on the line with the breakpoint.

**If the run doesn't break on the line you specified you probably didn't compile with the `-g` switch for `gcc` or `clang`. Make sure to rebuild.**

#### Variables

The debugging panel will show local variables in the `VARIABLES` pane. You can add expressions to watch in the `WATCH` pane, e.g.

```c
node->next->val
```

If you have a `char a[1000]` that you want to view as a string instead of an array, add this to the `WATCH` section:

```c
(char *)a
```

#### Console I/O

Console input and output will be in another window that pops up. It might hide behind the VSCode window, so look for it there.

#### Controls

Once you've hit the breakpoint, you can do one of these main things:

* **Continue**: `F5` or green arrow. Keep running to the next breakpoint or the end.
* **Step Over**: `F10` or "jump over" icon. Execute this line and go to the next without entering any functions.
* **Step Into**: `F11` or "down arrow" icon. If this line is a function call, step into that function.
* **Step Out**: `SHIFT-F11` or "up arrow" icon. Continue running until you get out of this function.

See the "Debug" pulldown menu for all options.


Happy hacking!