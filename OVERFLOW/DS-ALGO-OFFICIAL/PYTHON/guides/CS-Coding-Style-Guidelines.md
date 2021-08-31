Though individual programs might have their own guidelines, these are the style guidelines for the CS portion of the curriculum.

## Python

Be compliant with [PEP 8](https://www.python.org/dev/peps/pep-0008/).

* [Autopep8](https://pypi.org/project/autopep8/): tool to reformat code.
* [autoflake](https://pypi.org/project/autoflake/): removes unused variables and imports.
* [VS Code linting](https://code.visualstudio.com/docs/python/linting): can get the job done in VS Code.

## C

We'll use a variant of [K&R style](https://en.wikipedia.org/wiki/Indentation_style#K&R_style).

* Function braces on the next line after the function definition.
* Flow control braces on the same line as the flow control statement.
* 4 spaces for an indent.
* Spaces around operators for clarity.
  * Just a space _after_ a `;` or `,`.
* Asterisk next to the variable name in pointer declarations.

```c
#include <stdio.h>

int mul2(int x)
{
    return x * 2;
}

int main(void)
{
    int i, j;
    char *p, *q;

    for (i = 0; i < 20; i++) {
        if (i > 10) {
            printf("Hi!\n");
        } else {
            printf("Hello!\n");
        }
    }

    return 0;
}
```