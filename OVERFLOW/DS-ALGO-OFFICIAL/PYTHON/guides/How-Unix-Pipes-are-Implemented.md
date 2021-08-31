In the shell, you can do something like

```
ls -la / | wc
```

The pipe `|` symbol says "let's take the output from `ls -la /` and pipe it into the input of `wc`. (`wc` is "word count"--tells you how many characters, words, and lines its input has.)

Steps are:

1. Create a pipe with `pipe()`.
2. Fork a child process to run `wc`. (The parent process will run `ls -la /`.)
3. In the child:
     1. Use `dup2()` to hook file descriptor `0` (`stdin`) up to the "read" end of the pipe `fd[0]`. This makes it so that whenever the child process reads from `stdin`, it actually reads from the pipe.
     2. Use `execlp()` to run `wc`. `wc` will read from `stdin` as per usual, but unbeknownst to it, we've hooked that up to the pipe.
4. In the parent:
     1. Use `dup2()` to hook file descriptor `1` (`stdout`) up to the "write" end of the pipe `fd[1]`. This makes it so that whenever the parent process writes to `stdout`, it actually writes into the pipe.
     2. Use `execlp()` to run `ls -la /`. `ls` will write to `stdout` as per usual, but unbeknownst to it, we've hooked that up to the pipe.

That's it!

Source code:

```c
/**
 * Pipe example
 *
 * Runs the command: ls -la / | wc
 *
 * Try running the above command on the command line to see if the
 * output matches.
 */

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>

int main(void)
{
    int fd[2];

    // Make the pipe for communication
    pipe(fd);

    // Fork a child process
    pid_t pid = fork();

    if (pid == -1) {
        perror("fork");
        exit(1);
    }

    if (pid == 0) {
        // Child process

        // Hook up standard input to the "read" end of the pipe
        dup2(fd[0], 0);

        // Close the "write" end of the pipe for the child.
        // Parent still has it open; child doesn't need it.
        close(fd[1]);

        // Run "wc"
        execlp("wc", "wc", NULL);

        // We only get here if exec() fails
        perror("exec wc");
        exit(1);
    } else {
        // Parent process

        // Hook up standard output to the "write" end of the pipe
        dup2(fd[1], 1);

        // Close the "read" end of the pipe for the parent.
        // Child still has it open; parent doesn't need it.
        close(fd[0]);

        // Run "ls -la /"
        execlp("ls", "ls", "-la", "/", NULL);

        // We only get here if exec() fails
        perror("exec ls");
        exit(1);
    }

    return 0;
}
```