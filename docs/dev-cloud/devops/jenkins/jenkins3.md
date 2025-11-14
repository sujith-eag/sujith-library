# Creating a Job

### General Steps to Create a Job

Create a new "item" (which is what Jenkins calls a job) and giving it a name and type.

1. From the Jenkins dashboard, click **New Item** in the top-left corner.
    
2. Enter a name for your job (e.g., `my-github-project` or `my-local-build`).
    
3. Select **Freestyle project**. This is a good, all-purpose job type for basic tasks.
    
4. Click **OK**. You will be taken to the job's configuration page.
    

Specific instructions below can be followd for either GitHub or a local repository.

---

### 1. Configure Job for a GitHub Repository

This is the most common method. Jenkins will clone the repository from GitHub.com.

1. **Go to Source Code Management:** On the configuration page, scroll down to the **Source Code Management** section.
    
2. **Select Git:** Click on **Git**.
    
3. **Enter Repository URL:** In the **Repository URL** field, paste the HTTPS or SSH URL of your GitHub repository (e.g., `https://github.com/your-username/your-repo.git`).
    
4. **Add Credentials (if private):**
    
    - If your repository is **private**, you'll need to add credentials.
        
    - Click the **Add** button next to the **Credentials** dropdown.
        
    - Select **Jenkins** as the provider.
        
    - Choose the **Kind** of credential:
        
        - **Username with password:** Use your GitHub username and a **Personal Access Token (PAT)** as the password. (Using actual password often won't work).
            
        - **SSH Username with private key:** Use this if you've set up SSH keys between your Jenkins server and GitHub.
            
    - Enter the details, give it an **ID** (e.g., `github-credentials`), and click **Add**.
        
    - Select your new credentials from the dropdown.
        
5. **Specify Branch:** In the **Branches to build** section, specify which branch to build ( `*/main`).
    
6. **Add Build Steps:** Scroll down to the **Build Steps** section.
    
    - Click **Add build step** and choose what you want Jenkins to do (e.g., **Execute shell** to run a script like `npm install && npm test`, or **Invoke Ant/Maven/Gradle script**).
        
7. **Save:** Click **Save** at the bottom of the page.
    

To run it, go to the job's page and click **Build Now**.

---

### 2. Configure Job for a Local Directory

This method tells Jenkins to pull code from a folder that is **already on the same machine** (the Jenkins server or agent) where the job will run.

> [!NOTE] 
> This is less common and generally not recommended for team environments, as it's harder to manage. It's usually better to push your local code to a Git server (like GitHub, GitLab, or Gitea) first.

1. **Go to Source Code Management:** On the configuration page, scroll down to the **Source Code Management** section.
    
2. **Select Git:** Click on **Git**.
    
3. **Enter Repository URL:** In the **Repository URL** field, enter the **file path** to your local `.git` repository using the `file://` protocol.
    
    - **On Linux/macOS:** `file:///path/to/your/local/repo` (Note the three slashes)
        
    - **On Windows:** `file://C:/path/to/your/local/repo`
        
4. **Specify Branch:** In the **Branches to build** section, specify the local branch you want to build (e.g., `*/main`).
    
5. **Add Build Steps:** Scroll down to the **Build Steps** section and add your steps (e.g., **Execute shell**).
    
6. **Save:** Click **Save**.
    

> [!note] Possible Security Error:
> 
> For security reasons, Jenkins blocks local repository access by default. If your build fails with an error like local-checkout-is-not-allowed, you must start your Jenkins server with a special Java system property:
> 
> `java -Dhudson.plugins.git.GitSCM.ALLOW_LOCAL_CHECKOUT=true -jar jenkins.war`
> 
> You'll need to modify your Jenkins service's startup configuration to add this flag.

