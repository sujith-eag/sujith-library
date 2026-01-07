# Unit-5: Commands and Scripting


## manual page

* Explain `man` documentation with an example.

`man` is the manual for a command (if it exists). 
It expects the name of the command as its argument and displays the corresponding **man page**.

```bash {frame="none"}
man ls
man mkdir
```

Note: **`man cd`** doesn't exist because `cd` is a built-in shell function. Use `--help` instead.

The man page is displayed within the `vi` editor (view/search mode only).



## Basic Utility Commands

* Explain any eight general purpose utilities available in UNIX.
* List and explain the four features of cat Command and also write the advantage of script and who command.
* Explain the following commands with example. i)find ii) touch iii) script
* Explain the following commands with options and examples. (i) date (ii) printf (iii) bc (iv)uname (v) cal (vi)script.
* With suitable example, illustrate the following UNIX Commands: i) bc ii) wc iii) rm iv) cal v) date.
* Discuss the following commands with an example. i. date ii. cat iii. wc
* Explain the command to set the modification and access time of a file with syntax and options.

**Answer :**


### touch (Create/Modify File Timestamps)

Creates a new empty file or updates the access/modification timestamp of an existing file.
```bash {frame="none"}
touch newfile.txt       
# Create a new empty file
```

- `-a`: Update access time.
- `-m`: Update modification time.


### wc (Word Count)

Counts lines, words, and characters in a file.
```bash {frame="none"}
wc file.txt

wc -l file.txt       
# Count lines in file
```

- `-c`: Count characters.
- `-w`: Count words.
- `-l`: Count lines.



### cat (Concatenate and Display Files)

The cat (concatenate) command is used to view, combine, and create files.

`cat [options] filename`

Displays the contents of files.
- `-n`: Add line numbers to output.
- `-T`: Show tab characters as `^I`.

```bash {frame="none"}
cat file.txt
cat -n file.txt        
# Display with line numbers
```



### ls (List Directory Contents)

Lists files in the current directory with several options:

```bash {frame="none"}
ls ~/Desktop/trial
# Using absolute path

ls -F Desktop
# List contents of Desktop directory
```

`-a` Show hidden files (those starting with `.`) and the `.` (current directory) and `..` (parent directory).     

`-h` Displays file sizes in human readable format (KB, MB) (along with `-l`).    
`-i` Shows inode numbers for the files

`-r` Reverse alphabetical order of file listing.    
`-R` Recursive listing (listing all contents of all sub directories)

`-S` Sort files by size (used with `-l`)
`-t` Sorts files by modification time (along with `-l`).    
`-X` Extension based sorting (along with `-l`)




### pwd (Print Working Directory)

Displays the current working directory. `~`  tilde character at the start of a path means **the current users home directory**

`~/data` refers to `/Users/sujith/data`, useful for absolute path typing.



### cd (Change Directory)

Used to change the current directory.

```bash {frame="none"}
cd /home/user/Documents
cd ~     # Go to the home directory
cd ..    # Go to the parent directory
cd -     # Toggle to previous directory
cd /     # goes to root directory
cd ../.. # goes up two levels (parent of parent)
```



### date 

The `date` command is used to display or set the system date and time. 
```bash {frame="none"}
date [OPTION]... [+FORMAT]

date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][]]
```

OPTION : Various options to customize how the date is displayed.
FORMAT : The format in which you want to display the date. (it has to follow `+`)

```bash {frame="none"}
$ date "+%a, %b %d, %Y - %r"

Sun, Dec 31, 2024 - 02:00:00 PM
```

```bash {frame="none"}
$ date +%a:%A

Sun:Sunday
```


### bc (Basic Calculator)


`bc` is an arbitrary precision calculator language. It's used for performing arithmetic operations, and it supports a variety of functions and operations, including basic math, variable assignments, and more.

Simply typing `bc` will start an interactive mode, where we can input mathematical expressions and get results.      
We can also use `bc` for calculations directly from the command line.

```bash {frame="none"}
$ echo "3 + 4" | bc
7
```

- **Addition and Division**:
```bash {frame="none"}
$ echo "5 + 3" | bc
8
$ echo "10 / 4" | bc
2
```

- **Using `scale` for Decimal Precision**:
```bash {frame="none"}
$ echo "scale=4; 7/3" | bc
2.3333
```

- **Using Functions with `-l`**:
```bash {frame="none"}
$ echo "scale=5; sqrt(100)" | bc -l
10.00000
```

- **Assigning Variables**:
```bash {frame="none"}
$ echo "a=5; b=3; a*b" | bc
15
```


## File Management Commands

* Explain the effect of copying a file to an existing file? How is it different from copying to a new file? Give examples.
* Illustrate with an example how will you perform renaming and moving operation in UNIX.
* Illustrate cp and mv command. Highlight the difference between them.
* List and explain any Three directory related commands.

**Answer :**


### mv (Move or Rename Files)

Used to move or rename files and directories.
```
mv [options] source destination
```

- `-f`: Force move (overwrite without prompting).
- `-i`: Interactive move (prompt before overwriting).
- `-n`: Do not overwrite existing files.
```bash {frame="none"}
mv oldfile.txt newfile.txt
mv file1 /home/user/dir/  
# Move file1 to a directory
```

If `destination` is a directory without a file name, the file's name is not changed.

```bash {frame="none"}
mv fo1.txt ~/temp
# moves to temp

mv fo1.txt ~/temp/fo2.txt
# moves and renames

mv *.txt /home/zapp
```

To move a file into the current directory, `.` can be used as the destination.


**Renaming Files**
To rename a file or move it to a new location:
```bash {frame="none"}
mv [old] [new]  # Moves or renames a file
```

```bash {frame="none"}
mv trial/draft.txt trial/quotes.txt  
# Renames draft.txt to quotes.txt

mv draft.txt quotes.txt
# Renames within the same directory
```


### cp (Copy Files)

Copies files or directories.
- Destination is another directory, then the file name remains the same after copying.
- Destination is a directory and a file name, then the file is copied with a new name.
- Destination is a filename, then the file is copied into the current directory with a new name.

```bash {frame="none"}
cp [old] [new]  # Copies a file

cp quotes.txt thesis/quotation.txt  
# Copies to a new location
```

- `-r`: Recursive copy (used for directories).
- `-b`: Create backups of each destination file.
- `-L`: Follow symbolic links.
- `-p`: Preserve the original file’s metadata (permissions, timestamps).
- `-v`: Verbose mode (shows each step).
- `-I` `-s`   Create hard/symbolic link rather than physical copy
- `-u`  copy only if source is newer than the destination or destination missing

```bash {frame="none"}
cp file1.txt file2.txt   
# Copy a file

cp -r dir1 dir2          
# Copy a directory recursively
```


### rm (Remove Files)

Deletes files and directories.

```
rm [options] file(s)
```

- `-f`: Force removal (no confirmation).
- `-i`: Interactive removal (prompt before each deletion).
- `-r`: Recursive removal (for directories).

```bash {frame="none"}
rm file1.txt

rm -r dir1    
# Remove a directory and its contents
```

Use `rm -i` to prompt for confirmation before deletion. `rm` permanently deletes files, so it's advisable to use `-i` to ask for confirmation before deleting. 


### mkdir (Make Directory)

Used to create a directory, in the current directory or a specified path.

```bash {frame="none"}
mkdir newdir
```
- `-m` `--mode`: Specify the initial permissions of the directory.

To create multiple directories at once:
```bash {frame="none"}
mkdir north south pacific  
# Creates three separate directories
```


Creating a Directory Tree, by creating the main directory first, then child directories inside.
```bash {frame="none"}
mkdir place place/one place/two
```


The `-p` option is used to create multiple directories at once:
```bash {frame="none"}
mkdir -p [path/to/nested/directories]  
# Creates nested directories

mkdir -p ../project/data ../project/results
```

```bash {frame="none"}
mkdir -p 2016/data/{processed,raw}  
# Creates the full structure in one command
```

To list all nested subdirectories within a directory, use `ls -R`.



### rmdir (Remove Directory)

Removes an empty directory.

```bash {frame="none"}
rmdir emptydir
```


____

Assuming that you are positioned in the directory /home/mca, what are these commands presumed to do and explain whether they will work at all
(i) cd../..
(ii) mkdir ../bin
(iii) rmdir ..
(iv) ls ..

Which of these following commands work? Explain with reasons.
(i) mkdir a/b/c
(ii) mkdir a a/b
(iii) rmdir a/b/c
(iv)rmdir a a/b
(v) mkdir /bin/foo

What does the following command lines do?
```
(i) mv * ../bin
(ii) lp note[0-1][0-9]
(iii) rm *.[!l][!o][!g]
(iv) cp –r /home/kumar/{include,lib,bin}
```



## Filter Commands

* Give the syntax of Head, Tail, command with example
* Explain the following commands: i) pr ii) head iii) tail iv) cut v) sort.
* Explain the following commands with options. (i) sort (ii) Cut (iii) Pr (iv) Head
* Illustrate by creating files of the following UNIX commands: head, tail, cut, uniq.
* How are the following Unix command useful? Also, write the syntax and explain them with all options. i) sort  ii) uniq
* Explain the working of cut command depicting the working to show how the slitting a file vertically.
* What happens when you use head with multiple filenames?

**Answer :**

Filters are the set of commands that take input from standard input stream i.e. stdin, perform some operations and write output to standard output stream i.e. stdout.

Filters in Unix are commands that take input, process it, and produce output, typically used for text processing.

Common filter commands are `cat, cut, head, tail, sort, uniq, tr`

### head (Display the First Part of a File)

The head command is used to display the first few lines or bytes of a file. It is useful for quickly viewing the beginning of large text files.

`head [options].. [files]..`

Displays the first 10 lines of a file by default.
- `-n #`: Specify the number of lines to display.
- `-c #`: Display the first number of bytes.

```bash {frame="none"}
head file.txt

head -n 5 file.txt    # Display the first 5 lines
```

### tail (Display the End of a File)

The tail command is used to display the last few lines or bytes of a file. It is useful for viewing logs, real-time updates, and recent data.

`tail [options].. [files]..`

Displays the last 10 lines of a file by default.
- `-n #`: Specify the number of lines to display.
- `-c #`: Display the last number of bytes.

```bash {frame="none"}
tail file.txt

tail -n 5 file.txt    # Display the last 5 lines
```


### sort 

The sort command is used to arrange lines in text files in a specific order.
`sort [options].. [files]..`

```bash {frame="none"}
sort lengths.txt  # Sorts alphanumerically by default
sort -n           # Sorts numerically
sort -r           # Sorts in reverse order
```
- `-r`: Reverse order.
- `-f`: Ignore case differences.
- `-n`: Numeric sorting.

Sort doesn't change the file, but sends results to screen.     
To sort a file and redirect the output to a new file:

```bash {frame="none"}
sort -n lengths.txt > sorted-lengths.txt
```


### cut (Remove Portions of Each Line)

The cut command in Unix is used to extract specific sections of each line from a file or standard input. It is commonly used for text processing and works by selecting portions of data based on bytes, characters or fields.

`cut [options] filename`

Extracts parts of lines from a file based on specified delimiters.
- `-b`: Select bytes.
- `-c`: Select characters.
- `-d`: Specifies the delimiter (e.g., comma, space).    
- `-f`: Specifies the field(s) to extract.     
- `--complement`: Returns everything except the specified fields.

```bash {frame="none"}
cut -d -f1 /etc/passwd      
# Extract first field of /etc/passwd
```

Slitting a file vertically.      
The `cut` command is used to remove or extract specific sections of each line in a file:
```bash {frame="none"}
cut -d , -f 2 animals.csv
# Extracts the second field from a comma-delimited file
```


### uniq

The uniq command in Linux is used to filter out adjacent duplicate lines from a sorted file or input. It helps in detecting and removing consecutive duplicate entries while keeping the first occurrence.
`uniq [options] file1`

It operates on a single file, searching for consecutive duplicate lines.     Parameters can be used to remove duplicate lines.      
It does not overwrite the file but the output can be can be moved to a new file.

```bash {frame="none"}
uniq file.txt > file_without_duplicates.txt
```

`-c` for counting occurrences,      
`-d` for displaying only duplicate lines.


### Merging Files with 'paste'

The paste command in Linux is used to merge lines of files horizontally (side by side) by joining them column-wise.
`paste [options] file1 file2 ...`

```bash {frame="none"}
paste file1.txt file2.txt
```
**`paste`** merges files line by line without requiring a common field. The first line is appended to the first line of other file.


### Joining Files with 'join'

Joins two sorted files based on a common field (default is field 1).
```bash {frame="none"}
join file1.txt file2.txt
```
When the two files contain a row that contains that same value, then those two lines are joined together. Lines that do not contain a matching first field are not joined. (Joining tables using a matching keys)

`-1 NUM`: Specifies which field to join on in the first file.    
`-2 NUM`: Specifies which field to join on in the second file.     
`-i`: Ignore case differences.      
`-e` uses `STRING` in place of an empty field      
`-a 1` or `-a 2` outputs lines from the first or second file which did not contain a match to the other file.

---



The tr (translate) command in Linux is used for text transformation by replacing, deleting, or compressing characters from standard input (stdin)
`tr [options] set1 [set2]`


The pr command in Linux is used to format text files for printing. It adds headers, footers, page breaks, columns, and more to make output look structured when printed
`pr [options] [file]`



## Filters and regular expression: 
grep: Searching for a pattern, Basic Regular Expression, Extended Regular Expression and egrep, types of grep. 


* What are regular expressions? Explain any seven meta characters in regular expressions with an example for each.
* What is regular expression? Explain the meaning of special character `+` and `$` with example.

Write Regular expressions for the followings:
i. Match all positive numbers with or without sign “+”
ii. To match a number between 2000 and 2999
iii. To match a non-digit character
iv. List all the lines ends with 4 digit numbers begins with 9 such as
9001, 9002
v. List all the lines begins with printf
vi. To match agarawal, Agrawal, aggrawal.



## grep command

* Explain the command grep and egrep in detail with example.
* Explain the different grep options with example.
* What is `grep` command? How does ‘grep’ command help in searching pattern? Explain with suitable examples and options.
* Explain the “grep” command using n, l and f options with examples.
* Demonstrate the usage of the following UNIX commands: tr, sort, egrep, paste.

**Answer :**

The grep stands for Global Regular Expression Print. The grep command in Linux is used to search for specific text or patterns in files or input streams.

```bash {frame="none"}
egrep [options] regex filename(s)

grep [OPTIONS] PATTERNS [FILE(s)]

grep -c "hello" file.txt
```

`-i, --ignore-case`    ignore case distinctions in patterns and data 
(Perform case-insensitive search  `grep -i "error\|fail" logfile.txt`)

`-n, --line-number  `       print line number along with matching output lines
`grep -n "error" logfile.txt`

`-v, --invert-match`        select non-matching lines (print the lines that do not have the pattern) `grep -v "sucess" logfile.txt`

`^` Matches the lines that starts with the specific pattern

`$` Match lines that end with specific pattern
`grep "^Start" logfile.txt`   `grep "End$" logfile.txt`


`grep` program searches one or more files by line to match against a specified regular expression. Each line is treated as the string and `grep` searches for any substring of the line that matches the regex. If found, by default `grep` outputs the matching lines.

regex is a string that can but does not have to include metacharacters.     
Files can be listed with space or wildcards.     

>[!important]
>The regex is placed in single quotes `' '` to avoid metacharacters being interpreted as wildcards and doing filename expansion (globbing) on wildcards.     
>`|` will sets up pipes instead of performing OR action. 
>Items Found in `" "` are interpreted, they are not treated literally like in `' '`


To search for a specific phrase using quotes makes it easier to search for phrases or single words:
```bash {frame="none"}
$ egrep "is not" haiku.txt

$ egrep "not" haiku.txt
```

```bash {frame="none"}
egrep 2022 *.txt  
# all lines that contain 2022

egrep ^a *.txt
# all lines that start with an a
```

```bash {frame="none"}
egrep '[Ss]mith' *.txt
# Find lines having smith or Smith

egrep 'Duke|Zappa' *.txt
# Find lines containing Duke or Zappa
```

```bash {frame="none"}
egrep '[0-9]+' *.txt
# Find lines that contain atleast one digit 
```

```bash {frame="none"}
egrep '^[0-9]*[^0-9]+$' *.txt
# Finds lines that if they have digits are found at the beginning of the line.

egrep '^[A-Z][a-z]+ [A-Z][a-z]+$' *.txt
# Find all lines that contain exactly two words, both capitalized

egrep '[a-z]+ [a-z]+ [a-z]+' *.txt
# Find lines that contain at least 3 words, lowercased
```


## sed: stream editor, Line addressing, Context addressing, Text editing, Substitution. 


* What is sed? Explain Using multiple instructions, line addressing and context addressing.
* Explain the command sed wih respect to line and context addressing.
* Explain the following with respect to sed: i) Line addressing ii) Context addressing iii) Text Editing iv) Substitution.

How do you achieve the following using sed:
i) Append !! at the end of each line
ii) Delete multiple spaces in a file
iii) Replace lower case characters with upper case characters.
iv) Print the lines that do not contain the word Read.


**Answer :**

`sed` is **stream-editor** which a program that takes a stream of text and modifies it.     
It is a multipurpose tool that combines the work of several filters.   

A stream is a short for I/O stream meaning the stream of text characters that are being input from one source and output to another.      
The role of `sed` is to manipulate the text in the stream en route from input to output.      

Like `diff` command, `sed` uses instructions to act on text.     
An instruction combines an **address** for selecting lines, with an **action** to be taken on them.  

```bash {frame="none"}
sed [options] script file(s)

sed [options] 'address action' file(s)
```
`-e`option that lets use multiple instructions       
`-f` to take instructions from a file.      


Addressing in `sed` is done in two ways:
* One line number to select a single line or two line numbers (3,7), which specifies a group of contiguous lines. 
* By specifying a `/` enclosed pattern which occurs in a line (`/From:/`)

The action component is drawn from `sed`'s internal commands.

`sed` processes several instruction in a sequential manner. each instruction operates on the previous instruction.

To select first two lines similar to head command.
```bash {frame="none"}
sed -n '1,2p' emp.lst
```


`$` to select the last line. which is simulating the tail command.
```bash {frame="none"}
sed -n '$p' emp.lst
```

But `sed` can select a contiguous lines from anywhere `(9,11)`which is not possible with head and tail.     
It can also select multiple groups of lines from many sections.
```bash {frame="none"}
sed -n '1,2p 
7,9p 
$p' emp.lst
```

`-e` allows for entering multiple instructions each preceded by the option.
```bash {frame="none"}
sed -n -e '1,2p' -e '7,9p' -e '$p' emp.lst
```


### Context Addressing

Context addressing allows for specifying one or two patterns to locate lines. Patterns must be bordered with `/` on either side.
```bash {frame="none"}
sed -n '/director/p' emp.lst
```
A comma separated pair of context addresses to select a group of lines. Line and context address can also be mixed.
```bash {frame="none"}
sed -n '/guptha/,/Sena/p' emp.lst

sed -n '1,/guptha/p' emp.lst
```

> Note: Multiple files, file gobbing works only in the context addressing but not in line addressing and not even when line addressing and context are mixed.

Here two files are given but only one is selected and read
```bash {frame="none"}
$ sed -n '1,/void/p' singly_list.c singly_list_final.c 
#include <stdio.h>
#include <stdlib.h>

void create(int x);
```

This will search from multiple files because both are context addressing
```bash {frame="none"}
$ sed -n '/struct/,/void/p' singly_list.c singly_list_final.c 
$ sed -n '/struct/,/void/p' *.c
```


### Using Regular Expressions

Context addressing can also use Regular expressions.
```bash {frame="none"}
sed -n '[aA]gg*[ar]wal/p' emp.lst

sed -n '/sa[kx]s*ena/p
		guptha/p' emp.lst
```
First to select all the Agarwals and second to select Saksena or guptha.


### Writing Selected lines to a file

`w` write command can be used to write the selected line to a separate file.
```bash {frame="none"}
sed -n '/director/w dlist' emp.lst 
```
Here when `-n` is used there will be no display of all the lines but it is not needed to write to file.    

Full file can be split up by giving multiple address.
```bash {frame="none"}
sed -n '/director/w dlist
		/manager/w mlist
		/executive/w elist' emp.lst

sed -n '1,500w file1
	501,$w file2' file.main
```



## Introduction to Shell Script: 
Shell scripts, read, command line arguments, exit, variables, wildcards, escape characters logical operators and conditional operators, if conditional, case conditional, expr computations and string handling, while looping, for looping,
set and shift, trap interrupting a program, debugging shell scripts with set command.


* What are wild cards? Explain each of them with suitable example.
* Explain the pattern matching with wild cards. Give suitable example.
* What is the difference between a wild card and a regular expression? 

**Answer :**

Bash allows the use of wildcards (also called globbing) to match multiple files.
- `*`: Matches any number of characters.
- `?`: Matches exactly one character.
- `[chars]`: Matches one character from the specified list.
- `[char1-char2]`: Matches one character within the specified range. `[0-9] [a-e] [A-Z]`
- `{word1, word2, word3}`: Matches any of the specified words.
- `[!chars]`  match any one character not in the list   `ls [!a]*` means first character not `a`

Examples of Wildcard Usage :

* `ls *.txt`: Lists all files with a `.txt` extension.

* `ls f*`: Lists all files starting with `f`.

* `ls [abc]*`: Lists all files starting with either `a`, `b`, or `c`. `[]` is for one character only.

* `ls [abc][abc][abc]`

* `ls file?.{dat,txt}`: Lists files like `file1.dat`, `file2.txt`, etc.

```bash {frame="none"}
ls *t*ane.pdb   
# Lists files with 't' and 'ane' in their names

cp *dataset* backup/datasets  
# Copies all files with 'dataset' in the name

ls *t?ne.*     # matches octane, pentane
ls *t??ne.pdb  # matches ethane, methane
ls ethane.*    # only ethane
```

Wildcards can be combined for more specific patterns:

```bash {frame="none"}
ls ???ane.pdb  
# Matches any three characters followed by 'ane.pdb'
```

When a shell sees a wildcard, it expands the wildcard to create a list of matching filenames before running the preceding command.

___

Write the command with wild card patterns to match the expressions below :       
(i) msrcse msrmca msrmech msrise msrece.
(ii) MCa MCA MCb MCB MCC MCc.
(iii) MCa MCA MCb MCB MCC MCc using character class.
(iv) mca1.txt mcamca.txt mcaa.txt mcab.txt mcaz.txt

Frame wild card patterns for : 
i) filenames containing ‘msrit’ as an embedded string.
ii) filesnames except ‘.sh’ extension
iii) filesnames Chapx, Chap1, Chapz, Chaty
iv) filenames that have atleast four characters
v) filenames in the range note0 to note19.



## Shell Scripting Characters and Commands

* Describe the role of meta-characters in shell scripting. Provide examples of commonly used meta-characters and explain their functions.
* Write a short note with help of examples on control structures in Linux.
* Explain the commands used to schedule the execution of processes in UNIX.
* What are the commands available for manipulating positional parameters in shell programming? Explain.
* With suitable examples, discuss the following command used in shell scripting: i) shift ii) set.

* Explain the following commands with examples: i) expr ii) while iii) read iv) exit v)shift.
* With suitable examples, discuss the following command used in shell scripting: i) expr ii) test.
* How do the following commands work? i)expr ii) set and shift iii) for.
* Give syntax of ‘for’ loop in a shell script? Explain different ways of making lists.


## Shell Script Programs

* Demonstrate the running jobs in background.

* Write a shell script to display all filenames in a directory having n number of characters in the current directory. You can take value of n from user.

* Write a shell script to accept two command line arguments from user and then display sum, different, product of the arguments. Use expr command for calculations. Explain the script.

* Develop a shell script to perform the following: i) To find whether a given number is even or odd.  ii) To accept a number and find its reverse.

* Write a shell script that accepts two files names as arguments, check if the permissions for these files are identical and if the permissions are identical, then output common permissions and otherwise output each file name followed by its permissions.

* Write a shell program to find whether a given number is even or odd.


Write a shell script that folds long lines into 40 columns. Thus any line that exceeds 40 characters must be broken after 40th, a “\” is to be appended as the indication of folding and the processing is to be continued with the residue. The input is to be supplied through a text file created by the user.

Develop a menu driven program to achieve the following:
i) Check whether a given file is readable
ii) Search in the file emp.txt for the patterns stored in a file pat.lst
iii) Display the contents of the file.
iv) Display an attributes of the file ab.txt
v) List the login users
vi) Quit.


Develop a script that computes the gross salary of an employee according to the following rules: i) If basic salary is `< 1500` then HRA =10% of the basic and DA =90% of the basic. ii)If basic salary is `>=1500` then HRA =Rs500 and DA=98% of the basic The basic salary is entered interactively through the key board. 


## Unix OS Theory

* List the salient features of Unix operating system.
* List and explain the features of UNIX Operating system.
* Explain the architecture of Unix Operating System in detail with a neat diagram.
* What is the command structure in UNIX? Explain how it is processed by the shell with example.
* What is POSIX standard? List and Explain the different subsets of POSIX standard? Also write a Structure of a POSIX program.
* Describe the Kernel-Shell relationship in the Architecture of Unix with neat diagram.