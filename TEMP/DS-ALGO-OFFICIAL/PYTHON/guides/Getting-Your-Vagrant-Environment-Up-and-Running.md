# What is Vagrant?

In a nutshell, Vagrant is an isolated environment that runs locally on your machine. When you set up Vagrant and start it up in a directory that contains a Vagrantfile, your Vagrant environment gets shared access to everything in that directory. 

The biggest win from using Vagrant though is the fact that it standardizes everyone's environment to be the same thing, regardless of whether you're on a Mac, a Windows, or another Linux distro. This ensures that everyone is working in the same environment, meaning there's essentially no chance that you'll see an error that is unique to you because it was caused by some environment issue. If you encounter an issue, _everyone_ else using the same virtual environment should be able to replicate that issue.

The other important thing that Vagrant provides is seamless synchronization of directories. At the root level directory where you place your `Vagrantfile`, any files and subdirectories will be mirrored between both your local machine and the virtual environment. This is great because it means that most of your workflow doesn't need to change. Continue using whatever text editor you've been using up to this point to make changes to files. The only thing that does change is that you'll need to test your changes within the virtual environment (seeing if your code compiles, running tests, etc.). 

And that's about it! It might like seem like much right now, but trust me when I say that having everyone work in the same environment is a huge boon to both you as a student as well as to the instructors (no more having to figure out if some issue is being caused by some obscure environmental factor). It's also nice that you're getting some experience with virtual environment now, because they are a tool used in the software development workflows of many companies!

# Getting Vagrant Up and Running

1. Head to [https://www.vagrantup.com/downloads.html](https://www.vagrantup.com/downloads.html) and grab the installer for your particular operating system. 

2. VirtualBox is a dependency that Vagrant relies on, so we'll need to install that as well. Head to [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) and grab the installer for your particular operating system. 

 > NOTE: If you're on a recent version of OSX such as High Sierra or Mojave and the VirtualBox installation failed, you may need to explicitly allow the installation in your security preferences. [This](https://matthewpalmer.net/blog/2017/12/10/install-virtualbox-mac-high-sierra/index.html) walks through what you'll need to do.

3. Open up a terminal window and create a new directory that will be the root-level directory for all of your CS curriculum material (`lamdbda-cs` for example). If you already have some of the CS repositories forked/cloned locally, you'll want to move all of them into one directory. Your repositories from other tracks don't need to be included; just CS repos will suffice. 

4. In the root-level directory, make a file called `Vagrantfile` (yes, no extension) and copy the contents of [this gist](https://gist.github.com/seanchen1991/ac80020058439c0fc88159cddd42a324) into the `Vagrantfile`. This is the configuration file for our virtual environment. 

5. In your terminal at the root-level directory where the `Vagrantfile` is located, run `vagrant up` to initialize the vagrant environment. This could take ~10 minutes to complete. 

6. Now that the Vagrant environment has been initialized, we need to SSH into it. If you're on OSX or Linux, you can do this with the `vagrant ssh` command. If you're on a Windows machine, you'll need to SSH using your favorite SSH client (such as [PUTTY](https://www.putty.org/)).

```
protocol: SSH
Hostname: 127.0.0.1
Port 2222
```

7. That's it! You should now have successfully booted up and entered the Vagrant virtual environment. You might see a message saying 
```
New release '18.04.2 LTS' available.
Run 'do-release-upgrade' to upgrade to it.
```
_DON'T_ run this command. We want everyone to be on the same Ubuntu version, so we'll all be sticking with version 16.04.

From here, execute `cd /vagrant` to `cd` into the mirror of the root-level directory that will contain all of your local CS repositories. Any changes to files/directories you make in the virtual environment will be mirrored in your local environment and vice versa. 

In order to exit out of the virtual environment, simply type `exit` at the prompt. 

# What's In the Box?

Here's what's included in the box when you first boot up your shiny new virtual environment:

 - Ubuntu 16.04.6 LTS
 - Python 2.7.12 (old version of Python that's still used quite a lot)
 - Python 3.5.2 (newer version of Python, but not new enough for our purposes)
 - Pip 8.1.1 (Python package manager)
 - GDB 7.11.1 (a C debugger)
 - GCC 5.4.0 (a C compiler)

# Installing Some Additional Tools

We'll need to install some additional tools in preparation for the CS curriculum. 

### Installing Python 3.7

Run the following commands in your Vagrant virtual environment to install Python 3.7:

1. `sudo apt update`
2. `sudo apt install software-properties-common`
3. `sudo add-apt-repository ppa:deadsnakes/ppa`
4. `sudo apt update`
5. `sudo apt install python3.7`

At this point, we have three versions of Python installed in our virtual env: Python 2.7 (which can be accessed with the command `python`), Python 3.5 (which can be accessed with the command `python3`), and Python 3.7 (which can be accessed with the command `python3.7`).

Let's map Python 3.7 to the `python3` command (we're going to leave Python 2 mapped to the `python` command). We won't be using Python 3.5. 

In order to do this, run the following:

1. `sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.5 1`
2. `sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.7 2`
3. `sudo update-alternatives --config python3`

A little menu will be brought up and you can just hit ENTER/RETURN at the prompt. At this point, Python 3.7 should be mapped to the `python3` command. Test it out with `python3 -V` to confirm if it worked. 