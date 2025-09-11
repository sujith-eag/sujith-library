# Advanced Linux Command-Line Utilities

This guide covers a collection of powerful utilities for system monitoring, networking, file management, and more, aimed at enhancing productivity and control in the terminal.

## System Monitoring and Performance

These tools help you monitor your system's resources, performance, and boot process.

|Command|Description|Explanation|Alternatives|
|---|---|---|---|
|**`btop`**|A resource monitor showing usage for processor, memory, disks, network, and processes.|A visually appealing and feature-rich real-time system monitor; a significant upgrade over `top`.|`htop`, `top`, `glances`|
|**`glances`**|A cross-platform system monitoring tool.|Provides a large amount of information in a single screen, including CPU, memory, disk I/O, network, and processes.|`btop`, `htop`|
|**`iotop`**|Monitor I/O usage by processes.|A `top`-like interface showing which processes are responsible for disk I/O, useful for identifying bottlenecks.||
|**`ps`**|Report a snapshot of the current processes.|The standard command for listing currently running processes on the system.|`procs`, `htop`|
|**`procs`**|A modern replacement for `ps`.|Offers user-friendly output with color-coding, tree view, and TCP/UDP port display.|`ps`, `htop`|
|**`watch`**|Execute a program periodically.|Runs a command repeatedly, displaying its output to monitor changes over time.||
|**`progress`**|Monitor the progress of coreutils commands.|Shows the progress of commands like `cp`, `mv`, `dd`, `tar`, and `gzip` as they are running.||
|**`systemd-analyze blame`**|Show how long each systemd unit took to start.|Helps identify services slowing down the boot process by showing their initialization time.||
|**`systemd-analyze critical-chain`**|Show the critical chain of units for system startup.|Displays a tree of the time-critical chain of units to understand boot dependencies and bottlenecks.||

## Network Utilities

Tools for network analysis, troubleshooting, and remote communication.

|Command|Description|Explanation|Alternatives|
|---|---|---|---|
|**`mosh`**|A robust mobile shell for remote connections.|Offers a more robust connection than SSH, especially on unstable networks, supporting roaming and session resumption.|`ssh`, `et`|
|**`et`** (Eternal Terminal)|A remote shell that automatically reconnects.|Similar to `mosh`, it provides a reliable shell that survives network outages and IP address changes.|`mosh`, `ssh`|
|**`mtr`**|A network diagnostic tool.|Combines `ping` and `traceroute` to provide a real-time view of the network path and packet loss.|`ping`, `traceroute`|
|**`dig`**|DNS lookup utility.|A powerful tool for querying DNS servers and troubleshooting DNS issues.|`dog`, `nslookup`|
|**`dog`**|A command-line DNS client.|A modern, user-friendly alternative to `dig` with a clean, colorful output.|`dig`, `nslookup`|
|**`tcpdump`**|A command-line packet analyzer.|Captures and analyzes network traffic on a specific interface for troubleshooting and security analysis.|`tshark`, `wireshark`|
|**`tshark`**|A terminal-oriented version of Wireshark.|The command-line equivalent of Wireshark, allowing for detailed packet inspection from the terminal.|`tcpdump`|
|**`termshark`**|A terminal UI for `tshark`.|Provides a user-friendly, interactive terminal interface for `tshark`, making packet analysis easier.|`tshark`, `tcpdump`|
|**`lsof`**|List open files.|Can list all open network connections and the processes using them, which is useful for network troubleshooting.|`netstat`, `ss`|
|**`ipcalc`**|An IP address calculator.|A command-line tool for calculating IP information like netmasks, broadcast addresses, and network ranges.||


## Search, Navigation, and Data Manipulation

Tools to find files, navigate the filesystem efficiently, and process data streams.

|Command|Description|Explanation|Alternatives|
|---|---|---|---|
|**`rg`** (ripgrep)|A very fast recursive search tool.|Searches for text within files at extreme speed, respecting `.gitignore` by default.|`grep`, `ag`|
|**`fd`**|A fast and user-friendly alternative to `find`.|A modern replacement for the `find` command with a more intuitive syntax and better performance.|`find`|
|**`fzf`**|A command-line fuzzy finder.|An interactive tool for searching files, command history, processes, and more.|`skim`|
|**`zoxide`**|A smarter `cd` command.|Tracks frequently visited directories, allowing you to jump to them quickly using partial names.|`autojump`, `fasd`|
|**`jq`**|A lightweight command-line JSON processor.|An essential tool to slice, filter, map, and transform JSON data from the command line.|`gron`|


## Terminal Enhancements

Utilities designed to improve the features, usability, and experience of the terminal itself.

|Command|Description|Explanation|Alternatives|
|---|---|---|---|
|**`wezterm`**|A GPU-accelerated cross-platform terminal emulator.|A powerful, customizable terminal with features like multiplexing, ligatures, and GPU rendering.|`alacritty`, `kitty`|
|**`terminator`**|A terminal emulator with multiple panes.|Allows you to split a single terminal window into multiple panes to manage several shell sessions at once.|`tmux`, `wezterm`|
|**`tmux`**|A terminal multiplexer.|Creates and manages multiple terminal sessions in one window. You can detach and reattach, keeping processes running.|`screen`|
|**`asciinema`**|A tool for recording and sharing terminal sessions.|Records terminal activity as a lightweight, text-based animation, great for tutorials and demos.|`script`|


## Development and Automation

Tools for software development, automation, and task management.

|Command|Description|Explanation|Alternatives|
|---|---|---|---|
|**`lazydocker`**|A terminal UI for Docker.|Provides an interactive terminal interface for managing Docker containers, services, and images.|`docker-compose`, `portainer`|
|**`lazygit`**|A terminal UI for Git.|Offers a simple terminal interface for Git, allowing common operations with single keystrokes.|`gitui`, `tig`|
|**`fabric`**|A Python library for streamlining SSH for deployment.|Automates administrative tasks over SSH, often used for deploying applications and managing remote servers.|`ansible`, `saltstack`|
|**`ollama`**|Run large language models locally.|Allows you to download and run large language models on your own machine.||
|**`taskwarrior`**|A command-line task manager.|A powerful and flexible to-do list manager that operates entirely from the command line.|`todo.txt`, `khal`|


## Moreutils: A Collection of Useful Extras

`moreutils` is a package of small, sharp utilities that solve common command-line problems but are not included in the standard `coreutils` package.

- **`chronic`**: Runs a command and hides its output unless the command fails (returns a non-zero exit code).
	Incredibly useful for cron jobs. `chronic` ensures you only receive an email from a cron job if it fails, which is usually the only time you care.        
    - **Example**: `chronic /path/to/my/backup_script.sh`
        
- **`combine`**: Combines lines from two files based on boolean logic (AND, OR, NOT, XOR).
    It performs set operations on the lines of files. For example, `combine fileA and fileB` outputs only the lines present in both files.        
    - **Example**: `combine users_in_group.txt and users_with_access.txt`
        
- **`errno`**: Look up errno names and descriptions.
    Helps you decipher system error codes by showing their standard names and descriptions.  
      
- **`ifdata`**: Get network interface information.
	A simple script to check for the existence of a network interface or get information about it, like its IP address.
        
- **`ifne`**: (If Not Empty) Runs a command only if its standard input is not empty.
	Prevents a command in a pipeline from running if there's no data for it to process, which can avoid errors.        
    - **Example**: `find . -name "*.bak" | ifne xargs rm`
        
- **`isutf8`**: Checks if a file or standard input is valid UTF-8 encoded text.
	A simple utility that exits with a status of 0 if the input is valid UTF-8 and 1 otherwise. Useful for validating text encoding in scripts.        
    - **Example**: `if isutf8 somefile.txt; then echo "File is valid UTF-8"; fi`
        
- **`lckdo`**: Executes a command while holding a lock file.
    A simple way to ensure that only one instance of a script can run at a time.        
    - **Example**: `lckdo /var/run/myjob.lock /path/to/my/sensitive_script.sh`
        
- **`mispipe`**: Pipes two commands, but the exit status is taken from the first command, not the last.
    Useful when you need to know if the first command in a pipe succeeded, regardless of the second command's outcome.    
    - **Example**: `mispipe "grep -q 'ERROR' log.file" "echo 'Found an error'"`
        
- **`pee`**: Acts like `tee` but for pipes, sending its input to multiple command pipelines.
    While `tee` writes to files and stdout, `pee` sends the data stream to other commands for simultaneous, independent operations.        
    - **Example**: `cat access.log | pee "grep 'GET /' > gets.log" "grep 'POST /' > posts.log"`
        
- **`sponge`**: Soak up all input before writing to a file.
	Allows you to read from and write to the same file in a pipeline, which is not possible with standard shell redirection.
        
- **`ts`**: Add a timestamp to each line of input.
	A simple utility that prepends a timestamp to each line of output from another command.
        
- **`vidir`**: Edit the contents of a directory in a text editor.
	Allows you to rename files in a directory by editing their names in a text editor, which is efficient for bulk renaming.
        
- **`vipe` / `vip`**: Edit a command's output in a text editor in the middle of a pipeline.
	Lets you manually edit the output of one command before it gets passed as input to the next command.        
    - **Example**: `grep "user:" /etc/passwd | vipe | cut -d: -f1,5`

