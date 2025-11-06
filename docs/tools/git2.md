# Git & GitHub: Remote Workflows

This guide covers connecting your local Git repository to a remote host like GitHub and the standard workflows for collaboration.

## Connecting Local Git to GitHub with SSH

SSH (Secure Shell) provides a secure way to interact with remote repositories without needing to enter username and password every time.

### Setting Up an SSH Key Pair

An SSH key pair consists of a private key (kept secret on your computer) and a public key (which you can share with services like GitHub).

```bash
# Check if an SSH key (ED25519 type) already exists.
ls -al ~/.ssh/id_ed25519.pub
```

If it prints "No such file or directory" or similar, create one.
```bash
# Create a new ED25519 SSH key pair
ssh-keygen -t ed25519 -C "your_email@example.com"
```

* `-t ed25519`: Specifies the key type.
* `-C "your_email@example.com"`: Adds a comment (usually email) to the key, making it easier to identify.


When prompted: "Enter file in which to save the key `(/Users/your_username/.ssh/id_ed25519)`:"

Press **Enter** to accept the default file location and **Enter** again for no passphrase (or enter a secure passphrase if you prefer).

```bash
# Display and Copy the Public SSH Key
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output of this command.

### Adding the SSH Public Key to GitHub

1.  Go to your GitHub account, select **Settings**.

2.  In the user settings sidebar, click on **SSH and GPG keys**.

3.  Click the **New SSH key** or **Add SSH key** button.

4.  Give your key a descriptive **Title** (e.g., "My Work Laptop" ).

5.  Paste the copied public key into the **Key** field.

6.  Click **Add SSH key**. You may be asked to confirm your GitHub password.


## Working with Remote Repositories

A "remote" is a named reference to another Git repository, which is usually hosted on a server.

### Cloning an Existing Repository from GitHub

Cloning creates a local copy of a remote repository on your machine. This is the most common way to start working on a project.

1. Go to the GitHub repository page.
    
2. Click the green "Code" button.
    
3. Make sure "SSH" is selected.
    
4. Copy the SSH URL (e.g., `git@github.com:YourUsername/RepositoryName.git`).
    
```bash
# Create a directory to store your repositories.
mkdir ~/Projects  # Or ~/repos, ~/git
cd ~/Projects
```

```bash
# Clone the repository.
git clone <paste_the_ssh_url_here>

# Clone the repository into a new directory
git clone git@github.com:YourUsername/RepositoryName.git

# Navigate into your new project directory
cd RepositoryName
```

Cloning automatically sets up a remote named **`origin`** that points to the URL you cloned from.

### Managing Remotes

Verify the remote connection. `-v` (verbose) shows the URLs for fetch and push.

```bash
# List all remotes with their URLs
git remote -v
```

Output should look like:
```bash
origin  git@github.com:YourUsername/MyProject.git (fetch)
origin  git@github.com:YourUsername/MyProject.git (push)
```

## Pushing an Existing Local Repository to GitHub

Local Git repository that has to be connected to a new, empty repository on GitHub:

```bash
# Initialize a Git repository
git init # (if not yet under Git)

# Add all files to the staging area.
git add .

# Commit the changes.
git commit -m "Initial commit"
```

On GitHub, Create a new, *empty* repository on GitHub. Do NOT initialize it with a README, .gitignore, or license

```bash
# Add the remote GitHub repository URL to your local repository.
git remote add origin <paste_the_ssh_url_from_github_here>

# Verify the remote was added.
git remote -v
```

```bash
# Change the URL of an existing remote
git remote set-url origin <NEW_SSH_OR_HTTPS_URL>
```

If not done, Rename your local default branch to 'main'
```bash
git branch -M main

# Push your local 'main' branch to the 'origin' remote.
git push -u origin main
```

### Changing a Remote URL:

```bash
git remote set-url origin <NEW_SSH_OR_HTTPS_URL>
```


## The Collaboration Loop: Fetch, Pull, Push


### `git fetch` (Download Only)

`git fetch` downloads all new commits, branches, and tags from a remote but **does not integrate them** into your local working branch. It only updates your remote-tracking branches (e.g., `origin/main`).

This is a safe way to see what others have done before merging it.

```bash
# Fetch all updates from the 'origin' remote
git fetch origin
```

After fetching, you can compare your local branch with the downloaded remote branch:

```bash
# See a log of commits that are in origin/main but not in your local main
git log -p main..origin/main
```

### `git pull` (Download and Integrate)

`git pull` is a combination of two commands: `git fetch` (downloads) and `git merge` (integrates). It fetches changes from the remote and immediately tries to merge them into your current local branch.

```bash
# Fetch from origin and merge into your current local branch
git pull
```

If you have local, uncommitted changes, `git pull` may fail.

**`git pull` Strategies:**

- **Merge (Default):** If `pull.rebase` is `false`, `git pull` performs a `git merge`. This creates a "merge commit" if there are divergent changes, preserving the history of both branches. This is simpler for beginners.
    
- **Rebase:** If `pull.rebase` is `true`, `git pull` performs a `git rebase`. It takes your local commits, removes them temporarily, pulls the remote changes, and then re-applies your local commits _on top_ of the new remote changes. This results in a cleaner, linear history but rewrites your local commits.
    
## Handling Shared History Safely

### `git revert` (The Safe Way to "Undo")

If you need to undo a commit that has **already been pushed and shared** with others:

```bash
git revert <commit_hash_to_revert>
```

This creates a **new commit** that does the exact opposite of the bad commit. This is safe for shared history because it doesn't rewrite the past; it just adds a new commit on top.

### `git reset` (The Dangerous Way)

```bash
git reset --hard <commit_hash>
```

`git reset` rewrites history by moving the branch pointer. **Never use `git reset` on commits that you have already pushed and shared with others.** It creates a different history, which will cause massive problems and conflicts for everyone else who has a copy of the repository. Use `git reset` only for local, un-pushed commits.

## Forks and Pull Requests: The Standard Workflow

This is the standard model for contributing to projects you don't have direct write access to.

Standard workflow :
1.  **Forking** the repository.
2.  **Cloning** your fork to your local machine.
3.  Creating a **new branch** for your changes.
4.  Making and committing your changes locally.
5.  **Pushing** your changes to your fork.
6.  Creating a **Pull Request (PR)** from your fork to the original (upstream) repository.

### A. Forking a Repository

On the GitHub website, go to the original (upstream) repository and click the **"Fork"** button. This creates a personal copy of the repository under your own account.

### B. Cloning Your Fork to Your Local Machine

To get your forked repository onto your local computer to make changes.

```bash
cd ~/Projects  # Or your preferred directory

git clone <url_of_your_fork>

cd RepositoryName
```

### C. Configuring Remotes: Linking to the Original (Upstream) Repository

* Cloned fork, by default, has a remote named **`origin`** that points to *your fork* on GitHub. 
* You need to add a second remote that points to the _original_ repository so you can pull in its latest changes. This remote is conventionally named **`upstream`**.

```bash
# Add the original repo's URL as 'upstream'
git remote add upstream <url_of_original_repository>

# Verify you now have two remotes
git remote -v
```

Output:

```bash
origin    git@github.com:YourUsername/RepositoryName.git (fetch)
origin    git@github.com:YourUsername/RepositoryName.git (push)
upstream  git@github.com:OriginalOwner/RepositoryName.git (fetch)
upstream  git@github.com:OriginalOwner/RepositoryName.git (push)
```

### D. Keeping Fork Synced with the Upstream Repository

Before starting new work, it's good practice to sync fork's `main` branch (or other relevant branches) with the latest changes from the upstream repository.

```bash
# 1. Switch to your local main branch
git switch main

# 2. Fetch the latest changes from the upstream repository
git fetch upstream

# 3. Merge the changes from upstream/main into your local main
git merge upstream/main

# 4. (Optional) Push the synced main branch to your fork (origin)
git push origin main
```

### E. Creating a New Branch for Your Changes

It's crucial to make your changes on a new feature branch, not directly on `main`. This keeps `main` clean and makes it easier to manage multiple contributions.

```bash
# Create and switch to a new descriptive branch
git switch -c <your_feature_branch_name>
```

```bash
# Example: git checkout -b feature/add-user-authentication
# Example: git checkout -b bugfix/fix-login-error
```

### F. Making and Committing Your Changes

```bash

git add . # To stage all changes

git commit -m "feat: Implement user signup functionality"
```

### G. Pushing Your Branch to Your Fork on GitHub

Push your new feature branch to _your fork_ (the `origin` remote).

```bash
# For the first push of a new branch, to set upstream
git push -u origin <your_feature_branch_name>


git push origin <your_feature_branch_name>
# Example: git push origin feature/add-user-authentication
```

### H. Creating a Pull Request (PR)

Now that your changes are on your fork on GitHub, you can create a Pull Request to propose merging your changes into the original (upstream) repository.

1.  **Go to Fork on GitHub:** Navigate to your forked repository (e.g., `https://github.com/YourUsername/RepositoryName`).

2.  **GitHub often detects recent pushes:** You might see a banner prompting you to "Compare & pull request" for your recently pushed branch. Click this button if it appears.

3.  **Alternatively, initiate manually:**
    *   Go to the "Pull requests" tab in your forked repository.
    *   Click the "New pull request" button.

4.  **Set the Base and Compare Branches:**
    *   **Base repository:** This should be the *original upstream repository* (e.g., `OriginalOwner/RepositoryName`).
    *   **Base branch:** This is the branch in the upstream repository you want your changes merged *into* (usually `main`, `master`, or `develop`).
    *   **Head repository:** This should be *your forked repository* (e.g., `YourUsername/RepositoryName`).
    *   **Compare branch:** This is the branch in your fork that contains *your changes* (e.g., `feature/add-user-authentication`).
    GitHub will show you a diff of the changes.

5.  **Write a Clear Pull Request Title and Description:**
    *   **Title:** A concise summary of your changes (often similar to your main commit message).
    *   **Description:**
        *   Explain *what* problem your changes solve or *what* feature they add.
        *   Explain *why* these changes are necessary or beneficial.
        *   Reference any related issues (e.g., "Closes #123" or "Fixes #456").
        *   Describe how to test your changes, if applicable.

6.  **Click "Create pull request."**

This fork-and-PR workflow is fundamental for collaborative software development, especially in open-source communities.

## Understanding `git pull` Strategies:

`git pull` fetches changes from a remote repository and integrates them into local branch. By default, `git pull` uses `git merge`. Setting `pull.rebase` to `false` explicitly confirms this default merge strategy. 

Setting it to `true` would make `git pull` use `git rebase` instead. For beginners, sticking with the default (merge) is often simpler.

**`git pull` (Default: Merge):**
*   This command is a combination of `git fetch` (downloads changes from the remote) and `git merge` (integrates those changes into current local branch).

*   A merge creates a "merge commit" if there are divergent changes, preserving the history of both branches.

**Rebasing (`git pull --rebase` or if `pull.rebase true`):**
*   Rebasing takes local commits, temporarily removes them, pulls the remote changes, and then re-applies your local commits one by one *on top* of the newly fetched remote changes.

*   This results in a cleaner, more linear project history but rewrites your local commit history (which can be problematic if the branch is shared and others have based work on your old commits).

Without `--global` (or using `--local`): Applies the configuration only to the current repository. These settings are stored in the `.git/config` file within that specific repository. Local settings override global settings.
