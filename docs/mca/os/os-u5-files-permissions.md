# Unit-5: File System and Permissions


## Common Shell Commands

Some common shell commands and their functions:

- **`cd`**: Change the directory
- **`ls`**: List files in the current directory
- **`pwd`**: Display the current directory path      

- **`vi`** or **`emacs`**: Text editors for editing files     

- **`who`**: Show who is logged in     
- **`whoami`**: Display the current username
- **`hostname`**: Display the computer’s hostname
- **`uname`**: Show system information (e.g., `uname -o` for the operating system)
- **`arch`**: Show the computer’s architecture

- **`echo`**: Print text or values to the screen (e.g., `echo $SHELL` to display the shell being used)
- **`bash`**: Start a new Bash session within the current session
- **`exit`**: Exit the current Bash session (If it is the outermost one, it will close the window)
- **`passwd`**: Change the user password
- **`ps`** : Report a snapshot of the current processes.
- **`stty`** : Change and prints Terminal Settings (`-a` to show all settings)


## General purpose utility commands

File Names, Path Name, type, locating commands, The file attributes. 


### Hard and Soft Links

* Explain links and their types. List out the difference between them.
* Comparison of Hard-Link and Soft-link with example each.
* Define hard links and symbolic links.

**Answer :**

`link` is a pointer which points from a file in a directory to its `inode`.

An **inode** is a data structure which is part of Linux file space, it doesn't contain the name and contents but stores all metadata about a file and contains pointers to point at the files's physical blocks.

### Hard Link  

A **hard link** is essentially an additional directory entry that associates a file name with the same inode number. 

A hard link is a direct reference to the inode of a file. Multiple hard links can point to the same inode, and they are indistinguishable from the original file. 

When the link count of a file (i.e., the number of hard links) is greater than one, the file is still accessible as long as one link exists.

### Symbolic Links (Soft links)

A **symbolic link** (also known as a **soft link**) is a special type of file that contains a reference to another file or directory in the form of a **path**.

* Points at a hard link of a file. A symbolic link is a reference to another file or directory by its path. 

* Symbolic links are identified by the `l` file type when viewed using the `ls -l` command.  (`lrwxrwxrwx`).

* Symbolic links **do not increase the link count** of the original file, unlike hard links.

* The name is indicated as `link -> file` where `link` is the symbolic link and the `file` is the item being pointed at. The file will be in another directory.


### Relative and Absolute Path

* Bring out the difference between Absolute path and Relative path with example.
* Define path name? Explain different types of path names with an example for each.

**Answer :**

There are two primary ways to access files:

1. **Absolute Path**: Starts from the root directory (`/`) and specifies the full path to a file or directory. `/home/user/Documents/file.txt`

2. **Relative Path**: Describes the location relative to the current working directory. It does not start with a `/` and uses `.` for the current directory and `..` for the parent directory.

 `../Documents/file.txt` (moving up one directory and then down into `Documents`).
 
**Special Directory References**:
- `.`  : Represents the current directory.
- `..`  : Represents the parent directory.



## Command Substitution

* What do you mean by command substitution? Explain with suitable example.

**Answer :**

Shell enables one or more command argument to be obtained from the standard output of another command. Which is called as Command substitution.     

```bash {frame="none"}
echo "The date today is `date` " 

echo The date today is `date`

echo The date today is $(date)

# The date today is Sat Jan 4 11:33:27 AM IST 2025
```

The date is put inside `backquotes` which are not single quotes. In Bash it is recommended to use of the form `$(command)` rather than the `backquotes`.  


## Redirection 

* Explain the following with examples. (i) Pipes  (ii) tee  (iii) Standard input
* What is pipe? Explain with suitable example.
* Exemplify the three different types of redirection with example.
* Demonstrate redirection of input and output with suitable examples.
**Answer :**

Redirection is the process of using operators to control where input or output from a command goes.

`>  <  >>  <<`

___

**`>`** : Redirects output to a file, overwriting its contents.
```bash {frame="none"}
$ cat *.txt > newfile.txt
```
This command combines all `.txt` files in the directory and writes them to `newfile.txt`. If the file already exists, it will be overwritten.

**`>>`** : Appends output to a file if it already exists.
```bash {frame="none"}
$ cat *.txt >> newfile.txt
```
This command appends the content of all `.txt` files to `newfile.txt`.

**`<`** : Redirect input to a command.
```bash {frame="none"}
$ cat < *.txt
```
This will feed the content of all `.txt` files as input to the `cat` command.

**Here Documents (`<<`)** : Accepts input until a specified delimiter is reached.
```bash {frame="none"}
$ cat << quit
```
This will take input until the word `quit` is typed.

```bash {frame="none"}
$ cat << done > fruit.txt
```
This will take input until `done` is typed and save it into `fruit.txt`.

**List and redirect output to a file:**     
This command lists the contents of `/home/sujith` and writes it to `user_entries.txt`.
```bash {frame="none"}
$ ls -l /home/sujith > user_entries.txt
```


**Count lines of `.pdb` files and redirect to a new file:**     
This command counts the number of lines in each `.pdb` file and writes the result to `lengths.txt`.
```bash {frame="none"}
$ wc -l *.pdb > lengths.txt
```


**Read and write specific lines from a file:**     
This creates `animals-subset.csv` containing the first 3 lines of `animal.csv`.
```bash {frame="none"}
$ head -n 3 animal.csv > animals-subset.csv
```

This appends the last 2 lines of `animals.csv` to `animals-subset.csv`.
```bash {frame="none"}
$ tail -n 2 animals.csv >> animals-subset.csv
```


## Pipes

Pipes (`|`) allow the output of one command to be used as input for another command, enabling efficient chaining of multiple commands.

Sort a file and display the smallest value.
```bash {frame="none"}
$ sort -n lengths.txt | head -n 1
```
This command sorts `lengths.txt` numerically and then displays the first line (smallest value).


Chain `wc` with `sort` and `head`.
```bash {frame="none"}
$ wc -l *.pdb | sort -n | head -n 1
```
This command counts the lines in all `.pdb` files, sorts them, and then displays the shortest file.


Pipe output to a new file.    
```bash {frame="none"}
$ cat *.txt | sort > newfile.txt
```
This command concatenates all `.txt` files, sorts their contents, and writes the sorted output to `newfile.txt`.

____

* Explain the two special files /dev/null and /dev/tty.
* Explain standard input, standard output, and standard error for redirection.
* Explain the three standard files for redirection. 

**Answer :**

Two Special files are `/dev/null` and `dev/tty`.    

These files always have zero size and will incinerate any output written to it. This facility is useful to redirecting error messages away from terminal. Or to check the program running successfully without seeing the output. 


### Internal and External Commands

* Differentiate between internal and external commands with suitable examples.
* Is the “echo” command treated by the shell as an external command or as an internal command.
* Differentiate between internal and external commands in shell scripting. Provide examples of each and explain how they are executed by the shell.

**Answer :**

Shell built-in commands (also called **internal commands**) are commands that are executed directly by the shell, without calling an external program. These are part of the shell itself and are typically used for basic shell control, environment configuration, and scripting.

```bash {frame="none"}
type <command>
```

```bash {frame="none"}
type cd
# cd is a shell builtin

type echo
# echo is a shell builtin
```

`echo` is not an external command, Shell won't look for it in the PATH variable to locate it when it is called. Rather it will execute it from its own set of built in commands that are not stored as separate files.

Certain commands are built into the shell because it is difficult or impossible to implement them as separate external commands.    
The child process inherits the current working directory from its parent as one of the environmental parameters. It is important for the `cd` command to not spawn any children to achieve a change of directory. If it did so through a separate process then after `cd` had completed its run, control would revert to the parent and the original directory would be restored. Then it would be impossible to change directory.  

- `cd` – Change the current directory
- `pwd` – Print working directory
- `echo` – Print text to the terminal
- `help` – Display help for builtins
- `set` – Set shell options or positional parameters
- `shift` – Shift positional parameters
- `alias` / `unalias` – Create or remove command aliases



## File Attributes

* What are file attributes? Write commands to list the various attributes of a file.
* Give the significance of seven attributes ls -l command and date command with format specifiers.
* List and explain the attributes displayed by ls –l command.
* Define file attributes? How will you obtain them? Explain each of them.

**Answer :**

`-l` option to get a more detailed view of files and directories:

```bash {frame="none"}
sujith@sujith-Latitude-7490:~/Desktop$ ls -l
```

```bash {frame="none"}
total 24
drwxrwxr-x 4 sujith sujith 4096 Sep  3 15:29  courses
drwxr-xr-x 2 sujith sujith 4096 Dec 22 16:11 'MCA Sem1 Books'
drwxr-xr-x 4 sujith sujith 4096 Dec 18 19:56  obsidian-vaults
drwxrwxr-x 7 sujith sujith 4096 Oct  6 15:21  Opage
drwxrwxr-x 6 sujith sujith 4096 Dec 24 10:09  pylab
drwxrwxr-x 8 sujith sujith 4096 Oct 26 09:04  websites
-rw-rw-r--  1 sujith sujith   68146 Dec 24 12:43  sujith.jpeg
-rw-rw-r--  1 sujith sujith 2957628 Oct 30 13:52 'WorkSheet.pdf'
```

1. **File Type**:  The first part of file permissions. 
    `d` represents a directory
    `-` represents a regular file
    `l` represents a symbolic link

2. **Permissions** (Mode): Shows the file’s access permissions for the owner, group, and others. `rw- r-- ---` 9 characters combined with file type becomes 10 characters.  (`.` at end of permissions to indicate the `SELinux` content)

3. **Hard Links**: The number of hard links pointing to the file. For files, it is usually `1`, and for directories, it is typically `2` but can be more.

4. **User, Group**: The user who owns the file and the group to which it belongs. For most users the group is the user's private group.  `sujith sujith`
 
5. **Size**: The size of the file or directory in bytes. `68146` for the `sujith.jpeg` file.

6. **Last Modified Date**: The last modification date and time of the file or directory. (creation date/time if not modified)

7. **Name**: The name of the file or directory. (For a symbolic link, the name is followed by `->`)  `sujith.jpeg`



## Files in Linux

* What is a file? Discuss different type of files supported by UNIX briefly.
* What are the Ordinary, Directory and Device files?
* Discuss the types of files supported in Unix file system.

**Answer :**

A File is the smallest logical unit within the file space. It is a container for storing information or a sequence of characters. It has properties like name, type, and data.

The file will contain only what is written in it, there is no end-of-file (eof) mark. A file's size, nor even it's name is not stored in the file itself. It is all kept separately in the disk which is only accessible to the kernel.    

**Ordinary file (Regular files)** : Contains only data as a stream of characters. Text files and Binary files.
* **Text file** contains printable characters which makes up viewable contents.
* **Binary files** contain both printable and unprintable characters that cover the entire ASCII range.  Most of UNIX commands are Binary files. Executable files, Pictures, sound and video files are all binary files.

**Directory files** : A directory contains no data but keeps the names of files / directories it contains and a number associated with them called the inode number.

**Device files** : All devices and peripherals are represented by files. To read or write a device, operations has to be performed on its associated file.    
Device file names are usually found within the `/dev` directory.



## File Permission Commands

* List various file permissions. Explain the different ways of changing them with an example.
* What is Relative Permissions and Absolute Permission? Give example.
* Explain the following commands: (i) umask (ii) chown (iii) chmod
* Change file permission using chmod with both symbolic and numeric mode. 

**Answer :**

Each **user** or **group** can have specific access rights to a file.
- The **owner** might have **read**, **write**, and **execute** permissions.
- Other users (members of the **group** or the **world**) might have different levels of access, such as **read** or **execute** only.

In Linux, file permissions are defined for **three categories**:
- **Owner (`u`)**
- **Group (`g`)**
- **Others (`o`)**, also known as **world**


### Access Rights:

**`r` (read)**:
- For **files**: Allows viewing, copying, or opening as read-only.
- For **directories**: Allows listing the contents with `ls`.

**`w` (write)**:
- For **files**: Allows overwriting or modifying the file.
- For **directories**: Allows creating, modifying, or deleting files in the directory.

**`x` (execute)**:
- For **files**: Allows executing the file (important for programs or shell scripts).
- For **directories**: Allows `cd` into the directory.


### 'chmod' Command

`chmod` (change mode) is used to alter the permissions of a file or directory.

```bash {frame="none"}
chmod permissions file(s)
```
**`file(s)`** refers to the file(s) or directories to which you want to apply the permissions.

**`permissions`** can be specified in three ways: 
using symbols (`+`, `-`, `=`), or numeric values (3-digit numbers). 



### 1. Using `+` and `-` for Permission Changes

This approach adds (`+`) or removes (`-`) specific permissions for the **user (`u`)**, **group (`g`)**, or **others (`o`)** along with `r, w, x`

To **remove** write permission for the **group** and **read** permission for **others**:
```bash {frame="none"}
chmod g-w, o-r file.txt
```

To **add** execute permission for the **owner** and **group**:
```bash {frame="none"}
chmod u+x, g+x file.txt
```

To apply changes to **all** categories (owner, group, others) at once using `a`:
```bash {frame="none"}
chmod a+x file.txt
```



### 2. Using `=` to Set Exact Permissions

Instead of adding or removing permissions, you can **assign** permissions directly using `=`.

To **assign** `rwx` (read, write, and execute) permissions to the **owner**, `r` (read) to the **group**, and **no permissions** to **others**:
```bash {frame="none"}
chmod u=rwx, g=r, o= file.txt
```

If you do not specify a category (like `u=`), it will **not change** the permissions for that category:
```bash {frame="none"}
chmod g=, o= file.txt  
# Does not change owner permissions
```

You can combine `=` with `+` or `-`:
```bash {frame="none"}
chmod u=rwx, g-w,o-r file
chmod u=rwx, g-w,o= file
chmod u+x, g=r, o-r file
chmod u+x, g-w, o= file
```


### 3. Using Numeric Permissions

This approach uses **3-digit numbers** to represent permissions. Each digit corresponds to the permissions for **owner**, **group**, and **others**, respectively.

The numbers are calculated by adding:
- `4` for **read (r)**
- `2` for **write (w)**
- `1` for **execute (x)**

To set `rwx`(7), `r-x`(5), and no permissions `---`(0) for owner, group, and others respectively:
```bash {frame="none"}
chmod 750 file.txt  
# rwx (7) for owner, r-x (5) for group, 
# no permissions (0) for others
```

- `rwx` = 4 + 2 + 1 = **7**
- `r-x` = 4 + 1 = **5**
- `---` = 0 = **0**

So, `750` represents the permissions `rwx r-x ---`.

`----- 000`    
`--x--x--x  111`
`r----- 400` Many more combinations

| Permission | `rwx` | `rw-` | `r-x` | `---` |
| ---------- | ----- | ----- | ----- | ----- |
| **Owner**  | 7     | 6     | 5     | 0     |
| **Group**  | 7     | 6     | 5     | 0     |
| **Others** | 7     | 6     | 5     | 0     |



## Commands to Change Ownership

**`chown`** is used to change both **owner** and **group** of a file or directory.
```bash {frame="none"}
chown newowner file(s)

chown newowner:newgroup file(s)
```

**`chgrp`** is used to change only the **group** of a file.
```bash {frame="none"}
chgrp newgroup file(s)
```

```bash {frame="none"}
chown fox /home/fox/*.txt

chown www:www /usr/local/apache/htdocs/*

chgrp citg /home/fox/citg/project-data.txt
```

--- 


* An user issues the following command umask 022, What are the permissions for all files and directories created after this command.
* How do you add write permission to group and execute permission to others for a file named test.
* What is the impact of removing write and execute permission for a user of a directory.


A file’s current permission are r_- r_x rw_ specify the chmod expression required to change them for the following
(i) rwx rwx rwx
(ii) r_ _ r_ _ _ _ _
(iii) _ _ _ _ _ _ _ _ _
(iv)_ _ _ r_ _ r_ _
Using relative and octal methods.

Assuming that a file’s current permissions are rw-r-xr--, specify the chmod expression to change them to
i) rwxrwxrwx
ii) r--r-----
iii) ---------
iv) rw-rwx--x
using both relative and octal methods of assigning permissions.