Instructions and pitfalls in getting your C compiler installed.

* [General Build Instructions](#general-build-instructions)
* [macos](#macos)
* [Windows](#windows)
* [Linux/Unix-likes](#linuxunix-likes)
* [Raspberry Pi](#raspberry-pi)
* [Virtual Machines](#virtual-machines-windows-macos)

## General Build Instructions

(See the sections below for specific per-platform instructions.)

Here's a sample C program. You should type this in and save it as `hello.c` with your favorite IDE (e.g. VS Code) or editor (e.g. vim, emacs, etc.):

```c
#include <stdio.h>

int main(void)
{
    printf("Hello, world!\n");

    return 0;
}
```

To build your C program from the command line (Bash shell or Terminal), first use the `cd` (_change directory_) command to switch to the directory (when I was a kid, folders were called directories) that has your `hello.c` in it. Then build with:

```
gcc -Wall -Wextra -o hello hello.c
```

To run it from the command line:

```
./hello
```

(In PowerShell, use `.\hello`.)

### A More Advanced Test

If you want to make doubly sure that your environment will work for everything we need it to do at Lambda School, try compiling and running this program, `ctest.c`:

```c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/wait.h>

int main(void)
{
    printf("This program should print 1,2,3 in order.\n");
    printf("If it does, you're good to go with Lambda School C.\n\n");
    
    printf("1\n");

    if (fork() == 0) {
        sleep(1);
        printf("2\n");
        exit(0);
    }

    wait(NULL);

    printf("3\n");

    return 0;
}
```

## General Pitfalls

* If you accidentally tell `gcc` to overwrite your `.c` file with the `-o` (output) flag, you'll get errors. And your source code will be overwritten!

    ```
    # WRONG!!
    gcc -Wall -Wextra -o foo.c foo

    # RIGHT!!
    gcc -Wall -Wextra -o foo foo.c
    ```

* If you're on Windows and get errors about `WinMain`, make sure you have a `main()` function in your code! There are also other reasons you might see this error. Read on, below.

* If you're on Windows, you might also want to run

  ```
  git config --global core.autocrlf false
  ```

  This makes it so git doesn't automatically set newlines to Windows-style when it clones a repo. VS Code and other editors should work fine with Unix-style newlines. (And Windows-style newlines cause bash scripts to break.)

## macos

### Option A: Command Line Tools

* Open a Terminal.
* Run `xcode-select --install`.
* When prompted to install the developer command line tools, click `Install`.

### Option B: Full XCode install

If you're going to install XCode anyway for some other reason, you can use these instructions:

* Install _XCode_ from the AppStore.
* Open a Terminal.
* Run `gcc`.
* When prompted to install the developer command line tools, click `Install`.

## Windows

The two options for Windows that we know of for building the Unix-like code we play with at Lambda School are WSL and Cygwin. MinGW is too minimalist for our use.

### Option A: WSL

**This is the recommended option, but is only available for Windows 10 and higher. Earlier versions must use Cygwin, below.**

The [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) is an officially-supported binary compatibility layer for Linux apps running on Windows.

This basically gives you a mini Linux install. Ubuntu is recommended, but not required.

Requires Windows 10.

* [Install WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)--we recommend using Ubuntu as your distribution.
  * [Check your build number](https://docs.microsoft.com/en-us/windows/wsl/troubleshooting#check-your-build-number). If it is pre-16215, you'll need to turn on developer mode, as per the above instructions.
* Run bash from the command prompt or start menu.
* Run `sudo apt install build-essential` to install GCC.
 * See below if you get a long string of 404 errors.

#### Drive Access

* To get to your Windows drive from Bash, type:
  ```
  cd /mnt/c/Users/YourUserName
  ```
* There is no supported way to access your WSL drive from Windows command prompt. _[Don't do it](https://blogs.msdn.microsoft.com/commandline/2016/11/17/do-not-change-linux-files-using-windows-apps-and-tools/)_.

#### VSCode and WSL

* Keep your program files on your Windows drive.
* Run VSCode as normal.
* You can bring up a bash shell then switch to your Windows drive, as outlined above. Then run `gcc` or whatever you need to.
* To get VSCode's integrated terminal to use WSL bash, add the following to your VS Code user settings:

   ```
   "terminal.integrated.shell.windows": "C:\\Windows\\System32\\bash.exe"
   ```

  [More info here](https://code.visualstudio.com/docs/editor/integrated-terminal).

* Unrelated to C programming, VSCode has some integrated WSL support for running the node debugger. See [launching WSL node from the VSCode debugger](https://code.visualstudio.com/updates/v1_17#_first-steps-towards-wsl-support).

#### WSL Pitfalls

* If you later get errors about `make` not being installed, type `sudo apt-get make`.
* If you get 404s when doing `sudo apt-get`, try:
   ```
   sudo apt-get update && sudo apt-get install X 
   ```

### Option B: Cygwin

[Cygwin](https://cygwin.com/) is a library compatibility layer for building and running Linux apps.

If you're not running Windows 10 or higher, this is the only option.

**_WARNING!!!  Any programs you compile with Cygwin will only run within Cygwin.  They will not function in regular Windows/DOS, Linux, or Mac._**

* [Install Cygwin](https://cygwin.com/install.html).
* Launch a _Windows_ command prompt.
* Install the necessary packages by running the Cygwin Setup utility.
  ```
  setup-x86_64.exe -q -P wget -P gcc-g++ -P make -P diffutils -P libmpfr-devel -P libgmp-devel -P libmpc-devel
  ```
  * If you're using PowerShell, you might have to put a path in front of the `setup` command, e.g.
    ```
    .\setup-x86_64.exe etc. etc.
    ```
  * 32-bit users would run:
    ```
    setup-x86.exe -q -P wget -P gcc-g++ -P make -P diffutils -P libmpfr-devel -P libgmp-devel -P libmpc-devel
    ```
* [Add the appropriate entry at the front/top of your Windows path](https://www.computerhope.com/issues/ch000549.htm):
  ```
  C:\cygwin64\bin
  ```
  or, for 32-bit:
  ```
  C:\cygwin\bin
  ```
  If you are editing the entire `PATH` variable at once, remember that entries are separated from one another by `;`s.
* Launch Cygwin-Terminal from its icon.

#### Drive Access

* To get to your Windows drive from Bash, type:
  ```
  cd /cygdrive/c/Users/YourUserName
  ```
  or 
  ```
  cd c:/Users/YourUserName
  ```

* To get to your Cygwin drive from Windows command prompt, type:
  ```
  cd c:\cygwin64\home\youruser
  ```

  On 32-bit systems, this might be:
  ```
  cd c:\cygwin\home\youruser
  ```

#### VSCode and Cygwin

* Keep your files either on your Windows drive or Cygwin drive. Access them as per above.
* Run VSCode as normal.
* Run `gcc` from the Cygwin Terminal bash shell.
* To get VSCode's integrated terminal to use Cygwin bash, add the following to your VS Code user settings:
   ```
   "terminal.integrated.shell.windows": "C:\\cygwin\\bin\\bash.exe",
   "terminal.integrated.env.windows" {"CHERE_INVOKING": "1"},
   "terminal.integrated.shellArgs.windows": ["-l"]
   ```
  [More info here](https://stackoverflow.com/questions/46061894/vs-code-cygwin-as-integrated-terminal).


#### Cygwin Pitfalls

* If you have MinGW also installed, make sure that the Cygwin binaries are first in your `PATH`. If not, it will run the wrong GCC on the command line and you'll receive an error about `WinMain` not being found. Uninstall MinGW, per below.

* If you get the `base mismatch` error:

  ```
  C:\cygwin64\bin\make.exe: *** fatal error - cygheap base mismatch detected
  ```

It could be because of an incompatibility with MinGW. Recommend uninstalling MinGW, or at least make sure Cygwin is in your `PATH` first, as above.

* Another way to get an error about `WinMain` not being found is if you accidentally specify your source `.c` program as the _output_ file with `-o`. See [General Pitfalls](#general-pitfalls), above.

* If gcc gives you an error along these lines:
  ```
     0 [sig] make 7332 get_proc_lock: Couldn't acquire sync_proc_subproc for(5, 1), last 7, Win32 error 0
  1324 [sig] make 7332 proc_subproc: couldn't get proc lock. what 5, val 1
  ```
  disable your Avast (or other) anti-virus software.

### Not Sufficient: MinGW

[MinGW does not support `fork()`, so will not work for LS classes](http://www.mingw.org/node/21).

Having a MinGW install can interfere with the workings of Cygwin. You might get errors related to an undefined `WinMain`. Here are [instructions for uninstalling MinGW](https://stackoverflow.com/questions/15741692/how-to-uninstall-mingw-and-make-cygwin-make-as-deafult-make-program-with-gcc-3).

### Not Sufficient: Visual Studio Community, or other Visual Studio

While great for building Windows apps, our learning takes place in Unix-like environments. As such, Visual Studio won't work. WSL or Cygwin is necessary for that environment.

## Linux/Unix-likes

Google for specific instructions using your distribution name, e.g. `ubuntu gcc install`.

### Ubuntu/clang Pitfalls

If you get an error like this during a build:

```
/usr/bin/ld: cannot find crti.o: No such file or directory
```

Add the following to your `~/.bashrc` or `~/.bash_profile` and relaunch your shell:

```
export LIBRARY_PATH=/usr/lib64:/usr/lib32:$LIBRARY_PATH
```

## Raspberry Pi

A modern Raspberry Pi image comes with gcc ready to go out of the box. You'll need an external HDMI monitor, USB keyboard, and USB mouse.

Once you have it set up, you can enable `ssh` access to the Pi and then log into it from your main computer.

### Raspberry Pi Pitfalls

* If your mouse is behaving sluggishly, add the following line to `/boot/cmdline.txt` then reboot:
  ```
  usbhid.mousepoll=0
  ```
  If that breaks your mousewheel, another value that might work is `usbhid.mousepoll=4`.

## Virtual Machines (Windows, macos)

Instead of the above options for Windows and Mac, you could opt to install a virtual machine (VM) on your computer.  This is like giving yourself a completely separate new computer to run another OS on (e.g. Linux).

This is more work than any of the approaches, above, but does give you a complete Linux system and GUI. A GUI is _not_ required for what we do at Lambda School, so this would be more of a labor of love. If you just want the command line tools and VS Code, consider WSL or Cygwin instead.

Popular VMs are [VirtualBox](https://www.virtualbox.org/) (free) or [VMWare](https://www.vmware.com/).

If you go this route, you'll be following the terse [Linux instructions, above](#linux-unix-likes).

To run a VM, you'll need to set aside some of your system RAM and disk to support it. We'd recommend at least 12 GB total RAM, with 4 GB for Linux and 8 GB for Windows. 20 GB of disk reserved for Linux should be sufficient.

> 4 GB for Linux is really a minimum. 16 GB total system RAM evenly split between Windows and Linux is better.

You'll also need to choose a Linux distribution and install it. [Mint](https://linuxmint.com/) is popular, [Ubuntu](https://www.ubuntu.com/) is user-friendly, [Arch](https://www.archlinux.org/) is low-level. There are hundreds of distributions. Virtually all of them will work for Lambda School.
