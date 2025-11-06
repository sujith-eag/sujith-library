# Git: Local Workflow & Basics

## Basic Setup After Installing Git

Check Git Version
```bash
git --version
```

Sets 'main' as the default branch name for new repositories created with 'git init'.
```bash
git config --global init.defaultBranch main
```

Configure User Information that gets embedded into commits. Use the same name and email you use for services.
```bash
git config --global user.name "Your Full Name"
# Verify the username was set
git config --get user.name

git config --global user.email "youremail@example.com"
# Verify the email was set
git config --get user.email
```

Enable Colored Output (Highly Recommended)
```bash
git config --global color.ui auto
```

Configure Pull Behavior (Merge vs. Rebase) : This sets the default strategy for git pull (which is a remote command). Using false (merge) is often simpler for beginners.
```bash
git config --global pull.rebase false
```

for rebase by default on pull (more advanced)
```bash
git config --global pull.rebase true
```

## Basic Git Commands: The Core Workflow

### Starting a Local Project

```bash
# Creates a new Git repository in the current directory
git init

# A modern one-liner to create a repo with the default branch named 'main'
git init -b main

# Check Repository Status
git status
```

`git status` displays the state of the **working tree** and the **staging area**.

- **Tracked:** Files Git knows about.
    
- **Untracked:** New files Git doesn't yet know about.
    
- **Modified:** Tracked files that have changes.
    
- **Staged:** Files whose current versions are marked to be included in the next commit.

### Inspect Changes (Diffing)

See changes that are **not yet staged** (in your working directory).

```bash
git diff
```

See changes that **are staged** (in your staging area, ready to be committed).

```bash
git diff --cached
```

### Stage Changes (Adding to the Staging Area/Index)

The staging area (or "index") is an intermediate step before committing. It allows you to select which changes go into the next commit.

```bash
# Stage a specific file
git add <file_name.txt>

# Stage multiple specific files
git add <file1.txt> <file2.js>

# Stage all changes
git add .
git add -A
git add --all
```

### Stage Changes Interactively (Patch Mode)

`git add -p` (patch mode) is a powerful command that lets you interactively review each "hunk" (or chunk) of change within a file and decide whether to stage it.

```bash
git add -p [file_name]
```

While in the interactive prompt, you can use these keys:

- `y` - stage this hunk
    
- `n` - do NOT stage this hunk
    
- `s` - **split** this hunk into smaller pieces (if possible)
    
- `e` - manually edit the hunk
    
- `q` - quit and stage nothing
    
- `?` - show help

### Commit Changes

A commit saves a snapshot of your staged changes to the repository's history. The data saved includes the author, date, commit message, and the unique identifier of the preceding commit.

```bash
git commit -m "Your concise and descriptive commit message"
```

If you omit `-m`, Git will open your configured text editor.

### View Commit History

Press 'q' to exit the log view if it's paginated
```bash
git log

git log --oneline   
# Shows a compact, one-line summary of each commit
```

```bash
git log --graph          
# Shows an ASCII graph of branch and merge history

git log --pretty=format:"%h - %an, %ar : %s" 
# Custom format
```

```bash
# Show a diff of the changes in each commit
git log -p

# Show an overview of changes (files changed, insertions/deletions)
git log --stat --summary
```

## Exploring History

You can inspect any commit, or its parents, using `git show`.

```bash
# Show details of the most recent commit
git show HEAD

# Show details of a specific commit by its hash
git show 0472ffea0f
```

You can navigate the history using `^` (parent) and `~` (ancestor):

```bash
git show HEAD^  # to see the parent of HEAD
git show HEAD^^ # to see the grandparent of HEAD
git show HEAD~4 # to see the great-great grandparent of HEAD
```

For merge commits (which have two parents):

```bash
git show HEAD^1 # show the first parent of HEAD
git show HEAD^2 # show the second parent of HEAD
```

## Undoing Changes

### Discarding Local, Unstaged Changes

The new, preferred command to restore a file to its last committed state (discarding unstaged changes) is `git restore`.

```bash
# Discard changes in a specific file
git restore <file_name.txt>
```

This is safer than the old `git checkout -- <file>` command.

### "Undoing" a Commit

There are two main ways to undo a commit:

1. git revert (The Safe Way)

This creates a new commit that does the exact opposite of the specified commit. It's the preferred way to undo a commit that has already been shared with others.

```bash
git revert <commit_hash_to_revert>
```

2. git reset (The Destructive Way)

This moves the HEAD pointer to a previous commit, effectively rewriting history.

```bash
git reset --hard <commit_hash>
```

> **Warning:** `git reset --hard` is destructive. It **discards all changes** in the working directory and staging area that came after that commit. Do not use this on commits that you have already shared.

## Working with Tags

You can give a permanent, human-readable name to a specific commit by creating a tag. This is often used to mark release versions (e.g., `v1.0`).

```bash
# Create a tag named 'v2.5' pointing to a specific commit
git tag v2.5 1b2e1d63ff
```

You can then use this tag name in any command that accepts a commit hash:

```bash
# See the difference between your current state and the v2.5 tag
git diff v2.5 HEAD
```

## Ignoring Files and Directories (`.gitignore`)

The `.gitignore` file tells Git which files or directories it should ignore. Ignored files won't be tracked and won't show up in `git status` as untracked files.

- Create a file named `.gitignore` in the root directory of your repository.
    
- Add patterns, filenames, or directory names to this file, one per line.
    
```
# Ignore specific files
secret_keys.txt
.env
*.log
*.tmp

# Ignore directories
node_modules/
build/
dist/
.vscode/
public/
```

**Stop Tracking an Already Tracked File/Directory:**

1.  Add the file/directory pattern to your `.gitignore` file.

2.  Remove the file/directory from Git's tracking (but keep it in your local working directory).

*   For a directory:
```bash
git rm -r --cached public/
```

*   For a single file:
```bash
git rm --cached path/to/your/file.txt
```
	
3.  Commit the changes
```bash
git add .gitignore
git commit -m "Stop tracking public/ directory and add to .gitignore"
```


## Working with Branches

Branches allow for working on different features, bug fixes, or experiments in isolation without affecting the main codebase (`main` branch).


List all local branches. The current branch will be marked with an asterisk `*`.
```bash
git branch

# List all local and remote-tracking branches:
git branch -a
```

### Creating and Switching Branches

Git (version 2.23+) introduced `git switch` and `git restore` to make these operations clearer and safer than the older `git checkout` command.

```bash
# Create a new branch (does not switch to it)
git branch <new_branch_name>

# Switch to an existing branch
git switch <branch_name>

# Create a new branch AND switch to it in one command
git switch -c <new_branch_name>
```

### Merging Branches

Merging integrates changes from one branch into another.

Switch to the branch to merge changes INTO (the target branch).
```bash
git checkout main

# Merge the desired branch into the current branch.
git merge <branch_name_to_merge_from>
```

If there are no conflicting changes, Git might perform a "fast-forward" merge. If there are divergent changes, Git will create a new "merge commit".

### Handling Merge Conflicts

Merge conflicts occur when Git cannot automatically resolve differences in the same part of a file between the two branches being merged.

*   Happens when modified the same lines in the same file.

*   Git will pause the merge and mark the conflicting sections in the affected file(s) with conflict markers (e.g., `<<<<<<< HEAD`, `=======`, `>>>>>>> branch-name`).

To be done :

1. **Open** the conflicted file(s). Git will mark the conflicting sections.
    
2. **Manually edit** the file to resolve the differences.
    
3. **Remove** the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
    
4. **Save** the file.
    
5. **Stage** the resolved file: `git add <conflicted_file_name>`.
    
6. **Commit** the merge: `git commit` (Git will pre-fill a commit message).
    
If you want to abort the merge: `git merge --abort`.

### Deleting a Branch

Once a feature branch has been successfully merged into the main branch and is no longer needed, it can be deleted.

This is a "safe" delete; Git prevents it if the branch has unmerged changes.
```bash
git branch -d <branch_name>
```

Force delete a local branch, even if it has unmerged changes.
```bash
git branch -D <branch_name>
```

Delete a remote branch (on GitHub/origin):
```bash
git push origin --delete <remote_branch_name>
```

## Using Git in VS Code

**Opening VS Code from Terminal:** Navigate to project directory in the terminal. Type `code .` to open the current directory in VS Code.

Setting VS Code as the default editor for commit messages:
```bash
git config --global core.editor "code --wait"
```

## Crafting Good Commit Messages

Clear, concise commit messages are vital for understanding project history and collaborating effectively.

**The Seven Rules of a Great Git Commit Message (by Chris Beams):**

1.  **Separate subject from body with a blank line.**
    
2.  **Limit the subject line to 50 characters.**
	
3.  **Capitalize the subject line.**
    
4.  **Do not end the subject line with a period.**
    
5.  **Use the imperative mood in the subject line.**
    *   Write as if giving a command: The subject line should complete the sentence, "If applied, this commit will..."  "Fix bug," "Add feature," "Update documentation" (not "Fixed bug" or "Adds feature").

6.  **Wrap the body at 72 characters.**
    *   Improves readability in terminals and Git tools.

7.  **Use the body to explain *what* and *why* vs. *how*.**
    *   The code itself shows *how*. The commit message should explain the reasoning behind the change and what it accomplishes, especially for complex changes.

>[!note]
>- **[Pro Git Book](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)**: A comprehensive guide to Git.
>- [Cheat Sheet](https://git-scm.com/cheat-sheet): Official
