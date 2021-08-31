This is a collection of command examples that are **commonly used by instructors** here at Lambda School.

This is _not_ a complete reference or a tutorial. It is just the commands that we commonly use in order to edit quickly. See the [links](#see-also) for more in-depth information.

* `[ESC]` means to hit the escape key.
* `[RET]` means to hit the return key.
* `CTRL-x` means hold down control and `x`.

## See Also

* [OpenVim Tutorial](http://www.openvim.com/)
* [Vim Adventures](https://vim-adventures.com/)
* [Vim Reference Card (utexas)](http://users.ece.utexas.edu/~adnan/vimqrc.html)
* [Vim Reference Card (rtorr)](https://vim.rtorr.com/)
* [Vim Quick Reference Card (vimqrc)](http://tnerual.eriogerg.free.fr/vim.html)

## Editing

* `I`: insert at the beginning of the line
* `A`: append starting at end of line
* `D`: delete to end of line
* `C`: change from here to end of line
* `rX`: replace the current character with character _X_
* `R`: start replacing characters from the cursor on
* `~`: change the case of a character
* `dd`: delete (cut) the current line
* `dw`: delete the current word
* `d$`: delete from cursor to end of line
* `dtX`: delete all characters up to the next occurrence of _X_ in the line
* `dTX`: delete all characters down to the previous occurrence of _X_ in the line
* `ctX`: change the characters from the cursor to the next occurrence of _X_ in the line

## Moving

* `h` `j` `k` `l`: move the cursor left, down, up, and right faster than reaching for the arrow keys
* `$`: move to end of line
* `^`: move to the first non-space character in the line
* `0`: move to the beginning of the line
* `tX`: move to the next _X_ character in the line
* `TX`: move to just after the previous _X_ character in the line
* `e`: move to the end of the next (or current) word
* `b`: move to the beginning of the previous (or current) word
* `w`: move to the beginning of the next (or current) word
* `CTRL-f`: move forward a page (page down)
* `CTRL-b`: move backward a page (page up)
* `*`: move to the next occurrence of the word under the cursor
* `#`: move to the previous occurrence of a word under the cursor
* `%`: move to the open/close brace/bracket/paren paired with the one under the cursor
* `/foo[RET]`: search for the next occurrence of `foo` in the file
* `?foo[RET]`: search for the previous occurrence of `foo` in the file
* `n`: repeat the last search
* `N`: repeat the last search, but in the other direction

## Markers

* `ma`: set marker `a` at the cursor location (can use any letter a-z)
* `` `a``: jump to marker `a` (can use any letter a-z)

## Visual Blocks

* `v`: start a cursor-oriented visual block
* `V`: start a line-oriented visual block
* `CTRL-v`: start a rectangular visual block

Once a block is selected:

* `c`: change the block to different text (with rectangular blocks, this makes one cursor per line)
* `d`: delete the block
* `y`: yank (copy) the block
* `:s/foo/bar/g[RET]`: replace all occurrences of `foo` with `bar` in the block (this will show up as `:'<,'>` when you first start typing)

## Search and Replace

The following use [regexes](http://vimregex.com/):

* `:s/foo/bar[RET]`: replace the first occurrence of `foo` with `bar` on the current line
* `:s/foo/bar/g[RET]`: replace all occurrences of `foo` with `bar` on the current line
* `:%s/foo/bar/g[RET]`: replace all occurrence of `foo` with `bar` on all lines in the file

## Cut/Copy/Paste

* `dd`: delete (cut) the current line
* `dw`: delete the current word
* `d$`: delete from cursor to end of line
* `dtX`: delete all characters up to the next occurrence of _X_ in the line
* `dTX`: delete all characters down to the previous occurrence of _X_ in the line
* `x`: delete the character under the cursor
* `yy`: copy the current line
* `yw`: copy the current word
* `y$`: copy from cursor to end of line
* `p`: paste after cursor position
* `P`: paste before cursor position

GUI-based vims often support `COMMAND-c`/`CTRL-c` and `COMMAND-v`/`CTRL-v` for copying and pasting from the system buffer. (Note that the system copy/paste buffer is different from that used by the `y` and `p` commands.) If you're using the console-based vim, you might have to select the text to copy with the mouse if you want to copy it to the system copy/paste buffer.

## Counting

* `20ix[ESC]`: insert 20 `x` characters
* `15~`: change the case of the next 15 characters
* `5k`: move the cursor up 5 lines
* `12yy`: copy 12 lines

## Saving and Quitting

* `:q[RET]`: quit unless the file has been modified
* `:q![RET]`: quit even if the file has been modified, discarding changes
* `ZZ`: save the file (only if it has been modified) and quit
* `:qa[RET]`: quit all open tabs
* `:qa![RET]`: quit all open tabs even if the files have been modified, discarding changes

## Misc

* `.`: repeat the last edit command, e.g. `AHello[ESC]j.` will add `Hello` to the end of the current and next line
* `xp`: transpose the character under the cursor with the next one; not really a special command--simply `x` to cut the current character under the cursor followed by `p` to paste it after the cursor position
* `!!ls[RET]`: run the `ls` command and insert its output into the document (can run any command)
* `:sh[RET]`: spawn an interactive shell (hit `CTRL-d` or type `exit[RET]` to get back to vim)

## Tabs

* WIP
* `:q[RET]`: close the current window or tab (if multiple windows or tabs are open)

## Split Screen/Windows

* WIP
* `:q[RET]`: close the current window or tab (if multiple windows or tabs are open)

## Macros

* WIP