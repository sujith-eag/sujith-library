# Collection of Linux Commands

This document provides a structured list of essential and specialized command-line utilities for Linux, categorized for easier reference and logical function.


## GNU Core Utilities (coreutils)

The **GNU Core Utilities** are the basic file, shell, and text manipulation utilities of the GNU operating system. These tools are expected to exist on every POSIX-like operating system.

### File Utilities

These commands are grouped by their primary function: creating, modifying, linking, and managing files and directories.

**Creating & Linking**

- **`mktemp`**: Create a temporary file or directory securely.
    
- **`ln`**: Create links (hard or symbolic) between files.
    
- **`mkfifo`**: Create named pipes (FIFOs).
    
- **`mknod`**: Create special files (block, character, or FIFO).
    
**Copying & Installing**

- **`install`**: A more feature-rich version of `cp`, often used in build scripts to set permissions and ownership during installation.
    
- **`dd`**: Convert and copy a file, often used for low-level block-by-block copying.
    
**Modifying Permissions & Attributes**

- **`chmod`**: Change the access permissions of files.
    
- **`chown`**: Change the user and group ownership of files.
    
- **`chgrp`**: Change the group ownership of files.
    
- **`truncate`**: Shrink or extend the size of a file to a specified size.
    
**Listing**

- **`dir`**: A variant of `ls`, lists directory contents.
    
- **`vdir`**: A variant of `ls`, lists directory contents in a verbose format.
    
**System Operations**

- **`sync`**: Flush filesystem buffers to disk, synchronizing data.
    
### Text Utilities

These commands are organized from simple viewing and formatting to complex, programmatic text transformation.

**Viewing & Basic Formatting**

- **`tac`**: Concatenate and print files in reverse line order (`cat` backwards).
    
- **`nl`**: Number the lines of files.
    
- **`fmt`**: A simple text formatter that reformats paragraph text.
    
- **`fold`**: Wrap each input line to fit a specified width.
    
- **`od`**: Dump files in octal and other formats (useful for viewing binary files).
    

**Transforming Content (Characters & Columns)**

- **`tr`**: Translate or delete characters.
    
- **`expand`**: Convert tabs to spaces in files.
    
- **`unexpand`**: Convert spaces to tabs in files.
    
- **`cut`**: Remove sections (columns) from each line of a file.
    
- **`paste`**: Merge lines of files side-by-side.
    

**Comparing & Combining Files**

- **`comm`**: Compare two sorted files line by line.
    
- **`join`**: Join lines of two files on a common field.
    

**Splitting Files**

- **`split`**: Split a file into smaller pieces.
    
- **`csplit`**: Split a file into sections determined by context lines.
    

**Advanced Processing (Stream Editing)**

- **`sed`**: A stream editor for filtering and transforming text.
    
- **`awk`**: A powerful pattern scanning and processing language. (Note: `gawk` is the GNU implementation, often symlinked to `awk`).
    

**Analysis & Indexing**

- **`sum`**: Print checksum and block counts for a file.
    
- **`ptx`**: Produce a permuted index of file contents.
    

### Shell Utilities

These commands are grouped by their role in providing system information, managing processes, and aiding shell scripting.

**Displaying System & User Information**

- **`date`**: Print or set the system date and time.
    
- **`uptime`**: Tell how long the system has been running.
    
- **`nproc`**: Print the number of processing units available.
    
- **`hostid`**: Print the numeric identifier for the current host.
    
- **`who`**: Show who is logged on.
    
- **`users`**: Print the login names of users currently logged in.
    
- **`groups`**: Print the groups a user is in.
    
- **`logname`**: Print the user's login name.
    
- **`tty`**: Print the filename of the terminal connected to standard input.
    
- **`printenv`**: Print all or part of the environment.
    

**Process & Command Management**

- **`kill`**: Send a signal to a process (most often to terminate it).
    
- **`nice`**: Run a program with a modified scheduling priority.
    
- **`nohup`**: Run a command immune to hangups, with output to a non-tty.
    
- **`timeout`**: Run a command with a time limit.
    
- **`env`**: Run a program in a modified environment.
    
- **`chroot`**: Run a command or shell in a different root directory.
    

**Scripting & Automation**

- **`echo`**: Display a line of text.
    
- **`printf`**: Format and print data, similar to the C `printf` function.
    
- **`seq`**: Print a sequence of numbers.
    
- **`yes`**: Output a string repeatedly until killed.
    
- **`sleep`**: Delay for a specified amount of time.
    
- **`test`**: Check file types and compare values, returning an exit code.
    
- **`true`**: Do nothing, successfully. It always exits with a status code of 0.
    
- **`false`**: Do nothing, unsuccessfully. It always exits with a status code of 1.
    
- **`tee`**: Read from standard input and write to standard output and files simultaneously.
    

**Path & Filename Manipulation**

- **`basename`**: Strip the directory and suffix from a filename.
    
- **`dirname`**: Strip the non-directory suffix from a filename.
    
- **`readlink`**: Print the value of a symbolic link.
    

**Other Utilities**

- **`expr`**: Evaluate expressions.
    
- **`factor`**: Print the prime factors of numbers.
    
- **`stty`**: Change and print terminal line settings.
    


## Specialized Command-Line Utilities

This section covers powerful tools that are not part of the standard core utilities and may require separate installation.

### Archive and Data Formatting

- **`unp`**: A versatile script that unpacks various types of archives. It intelligently handles different formats like `.zip`, `.tar.gz`, and `.rar`, so you don't have to remember the specific extraction command for each.
    
    - **Standard Alternatives**: `tar`, `unzip`, `unrar`.
        
- **`column`**: A utility that formats input into well-aligned, multi-column tables, which is very useful for making the output of other commands more readable.
    

### Development Environment Management

- **`dstack`**: A specialized tool for provisioning and running development environments. It is not a general-purpose Linux command but is used for managing specific development workflows.
    
    - **Common Alternatives**: `Vagrant`, `Docker Compose`.
    
