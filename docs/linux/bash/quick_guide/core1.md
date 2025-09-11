# A Guide to the Linux Command Line

This guide introduces the essential tools that come with nearly every Linux system and highlights some powerful, modern alternatives for better experience.

## Getting Help

The most important commands are those that teach about other commands.

| Command      | Description                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| **`man`**    | The manual. `man ls` will show you the complete manual page for the `ls` command, including all its options. |
| **`--help`** | Most commands support a `--help` flag (e.g., `ls --help`) for a quick summary of their usage.                |


## Essential GNU Core Utilities (Coreutils)

The `coreutils` package contains the foundational command-line tools found on virtually every GNU/Linux system. They are the bedrock of command-line work, grouped into three main categories:

- **File Utilities**: For managing files and directories (e.g., `ls`, `cp`, `rm`, `mv`, `mkdir`, `chmod`, `chown`, `touch`).
    
- **Text Utilities**: For processing and manipulating text (e.g., `grep`, `cat`, `sort`, `head`, `tail`, `uniq`, `cut`, `sed`, `awk`, `wc`).
    
- **Shell Utilities**: For interacting with the system and shell (e.g., `pwd`, `whoami`, `date`, `echo`, `uname`).
    

Below are the most crucial commands organized by common tasks.

### Navigating and Managing Files & Directories

These are the first commands you'll need to learn to move around and interact with the filesystem.

- **`pwd`** (Print Working Directory): Shows the full path of the directory you are currently in.
    
- **`ls`** (List): Lists the contents of a directory. A common and more informative usage is `ls -la`.
    
- **`cd`** (Change Directory): The primary command for navigating between directories. `cd ..` moves you up one level.
    
- **`mkdir`** (Make Directory): Creates a new directory.
    
* **`rmdir`**: Remove empty directories.
	
- **`cp`** (Copy): Copies files or directories. Example: `cp source.txt destination.txt`.
    
- **`mv`** (Move): Moves or renames files and directories.
	
- **`rm`** (Remove): Deletes files. To delete a directory and all its contents, use `rm -r`. **Use this command with extreme caution.**
	
- **`shred`**: Securely delete a file by overwriting it multiple times, making recovery difficult.
	
- **`touch`**: Creates an empty file or updates the timestamp of an existing file.
    
- **`stat`**: Displays detailed status information about a file or filesystem, such as size, permissions, and access times.
    
### Viewing and Processing Text

These tools are essential for reading, searching, and manipulating the contents of text files.

- **`cat`** (Concatenate): Displays the entire content of a file on the screen.
    
- **`less`**: An improved file viewer that allows you to scroll up and down through a file. It's more practical than `cat` for long files.
    
- **`head` / `tail`**: Show the first (`head`) or last (`tail`) few lines of a file. Useful for checking log files.
    
- **`grep`** (Global Regular Expression Print): Searches for a specific pattern of text within files. Example: `grep "error" server.log`.
    
- **`wc`** (Word Count): Counts the lines, words, and characters in a file.
    
- **`sort`**: Sorts the lines of a text file alphabetically or numerically.
    
- **`uniq`**: Reports or removes repeated lines from a sorted file.
    
### User and System Information

These commands help you understand your environment, system resources, and user permissions.

- **`whoami`**: Prints your current effective username.
    
- **`id`**: Displays user and group information for the current user.
    
- **`uname`**: Prints system information, such as the kernel name and version. Use `uname -a` for all information.
    
- **`df`** (Disk Free): Reports the amount of available disk space on your filesystems.
    
- **`du`** (Disk Usage): Estimates and displays the disk space used by files and directories.
    
## Modern & Enhanced Command-Line Tools

While the core utilities are powerful, a vibrant ecosystem of modern, third-party tools has emerged to improve on their functionality. These tools are typically more user-friendly, colorful, and feature-rich.

:::warning Installation Required!

Unlike the core utilities, these tools are not installed by default. You'll need to install them using your distribution's package manager ( e.g., `sudo apt install exa`, `sudo dnf install bat` ).

:::

### Enhanced File Listing & Navigation

- **`exa`**: A modern replacement for `ls`. It provides a more user-friendly output with colors, icons, a tree view, and git integration.
    
- **`ranger`**: A console-based file manager with VI key bindings. It provides an interactive, visual way to navigate and manage your files in the terminal.
    
### Modern File Viewing & Editing

- **`bat`** (from `batcat`): A superior `cat` clone. It offers syntax highlighting for code, Git integration to show modifications, and automatic paging (like `less`).
    
- **`micro`**: An intuitive and easy-to-use terminal-based text editor. It aims to be a successor to `nano`, offering more features like plugin support and familiar keybindings out of the box.
    
### Advanced Disk Usage Analysis

- **`ncdu`**: An interactive disk usage analyzer. It scans a directory and presents an interactive, navigable list of files and folders, making it easy to see what's consuming your disk space.
    
- **`gdu`**: A very fast disk usage analyzer written in Go. It is similar to `ncdu` but is significantly faster due to parallel processing.
    
### Powerful File Management & Transfer

- **`rsync`**: A fast and versatile tool for synchronizing files and directories, either locally or remotely. It's highly efficient because it only transfers the differences between the source and destination.
    
- **`duff`**: A duplicate file finder. It scans directories to identify and report redundant files, helping you clean up clutter.
    
- **`wormhole`**: A tool for securely sending files and directories from one computer to another. It generates a simple, one-time code to make sharing easy and private.
    
### Detailed Hardware Information

- **`lshw`** (List Hardware): A tool that provides extremely detailed information about the hardware configuration of your machine, including memory, CPU, mainboard, and firmware versions.
    
## Reference: Comprehensive GNU Core Utilities List

### File Utilities

`cat`, `chgrp`, `chmod`, `chown`, `cp`, `dd`, `df`, `dir`, `du`, `install`, `ln`, `ls`, `mkdir`, `mkfifo`, `mknod`, `mktemp`, `mv`, `rm`, `rmdir`, `shred`, `sync`, `touch`, `truncate`, `vdir`.

### Text Utilities

`awk`, `comm`, `csplit`, `cut`, `expand`, `fmt`, `fold`, `grep`, `head`, `join`, `nl`, `od`, `paste`, `ptx`, `sed`, `sort`, `split`, `sum`, `tac`, `tail`, `tr`, `unexpand`, `uniq`, `wc`.

### Shell Utilities

`basename`, `chroot`, `date`, `dirname`, `echo`, `env`, `expr`, `factor`, `false`, `groups`, `hostid`, `id`, `kill`, `logname`, `nice`, `nohup`, `nproc`, `printenv`, `printf`, `pwd`, `readlink`, `seq`, `sleep`, `stat`, `stty`, `tee`, `test`, `timeout`, `true`, `tty`, `uname`, `uptime`, `users`, `who`, `whoami`, `yes`.
