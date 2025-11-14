# Jenkins Pipeline with GitHub (Pipeline as Code)

This guide walks through setting up a Jenkins **Pipeline** job which pulls its configuration (the "pipeline") directly from a special file `Jenkinsfile` in GitHub repository.

### Step 1: Create the `Jenkinsfile` in GitHub

This file defines entire build, test, and deploy process in code. It should live in the root directory of repository.

1. Navigate to GitHub repository.
    
2. Click **Add file** > **Create new file**.
    
3. Type `Jenkinsfile` as the name of the file. (The name must be exact, with a capital 'J' and no file extension).
    
4. Paste the following Groovy pipeline script into the file.
    

#### Pipeline Script (`Jenkinsfile`)

```groovy
pipeline {
    // 'agent any' means this pipeline can run on any available Jenkins agent (server)
    agent any

    stages {
        // NOTE: A 'Checkout' stage is not needed here.
        // Jenkins automatically checks out source code
        // from the repository specified in the job configuration.

        stage('Build') {
            steps {
                // Placeholder.
                // e.g., for Node.js: 'sh "npm install"'
                // e.g., for Java:   'sh "mvn clean package"'
                echo "Building..."
            }
        }

        stage('Test') {
            steps {
                // Placeholder.
                // e.g., for Node.js: 'sh "npm test"'
                // e.g., for Java:   'sh "mvn test"'
                echo "Testing..."
            }
        }

        stage('Deploy') {
            steps {
                // Placeholder for your deployment steps
                echo "Deploying..."
            }
        }
    }
}
```

5. Add a commit message (e.g., "Add initial Jenkinsfile") and **commit the new file** directly to your `main` (or `master`) branch.
    

---

### Step 2: Create the Pipeline Job in Jenkins

Create a job in Jenkins and tell it to read that `Jenkinsfile` from GitHub repo.

1. From the Jenkins dashboard, click **New Item** on the left menu.
    
2. Enter a name for your pipeline.
    
3. Select **Pipeline** as the job type. Click **OK**.
    
4. On the job configuration page, scroll down to the **Pipeline** section.
    
5. In the **Definition** dropdown, select **Pipeline script from SCM**. (SCM stands for Source Control Management).
    
6. Anew **SCM** dropdown will appear. Select **Git**.
    
7. In the **Repository URL** field, paste the HTTPS or SSH URL of your GitHub repository (e.g., `https://github.com/your-username/your-repo.git`).
    
8. If your repository is **private**, you must select the correct **Credentials** from the dropdown. (You may need to add your GitHub Personal Access Token as a credential in Jenkins first).
    
9. Verify the **Branch to build** is correct (e.g., `*/main` or `*/master`).
    
10. Ensure the **Script Path** is `Jenkinsfile`. This is the default value and matches the file you just created.
    
11. Click **Save**.
    

---

### Step 3: Run Your Pipeline

Your pipeline is now set up and ready to run.

1. Go to the dashboard page for your new pipeline job.
    
2. Click **Build Now** on the left menu.
    

Jenkins will now:

- Connect to your GitHub repo.
    
- Pull the `Jenkinsfile` from the specified branch.
    
- Read the stages from the file.
    
- Execute each stage (`Build`, `Test`, `Deploy`) in order.
    

You can click on the build number (e.g., `#1`) and then **Console Output** to see the logs, including the `echo` messages from your script.

___

### What This Workflow Does

Explanation of the workflow and why it's a standard practice in modern software development.

You set up a **"Pipeline as Code"** workflow. Instead of manually adding build steps (like `Execute shell`) inside the Jenkins job configuration page, you did this:

1. **You defined the pipeline in code:** You created a `Jenkinsfile` in your GitHub repository. This file is written in Groovy and describes all the `stages` (like `Build`, `Test`, `Deploy`) of your workflow.
    
2. **You created a Jenkins "Pipeline" job:** This special job type is mostly empty.
    
3. **You linked them:** You configured this Jenkins job to look at your GitHub repository, find the file named `Jenkinsfile`, and use _that file_ as its set of instructions.
    

When you click **"Build Now"**:

- Jenkins connects to GitHub repo.
    
- It automatically checks out source code.
    
- It reads the `Jenkinsfile`.
    
- It follows the instructions in the file, executing each stage in order.
    

---

### The Benefits of this Workflow

This "Pipeline as Code" method is considered a best practice for several critical reasons:

- **Versioning:** Your build process is now **version-controlled** just like the rest of your code. You can see the history of who changed the pipeline, when, and why. If a pipeline change breaks something, you can easily revert it by reverting the `Jenkinsfile`.
    
- **Collaboration:** Developers can edit the `Jenkinsfile` directly in their code editor. They don't need admin access to Jenkins to modify the build or test steps. They can even propose pipeline changes in a pull request, allowing for code review _of the pipeline itself_.
    
- **Durability & Recovery:** If your Jenkins server ever crashes or you need to move it, you don't lose your job configurations. The pipeline definitions are stored safely in GitHub. You just set up a new Jenkins instance and point it back to your repositories.
    
- **Reusability:** You can copy this `Jenkinsfile` to other, similar projects and have a working pipeline instantly. It's much easier than manually re-creating a job in the UI.
    
- **Branching:** You can have different `Jenkinsfile` versions in different branches. This allows you to test changes to your build process in a feature branch without affecting your main production pipeline.

## Running Java or Python files

Workflow for running either a Java or Python file from GitHub repo using the "Pipeline as Code" format.

---

### 1. Important Prerequisites

This workflow will **only work if the necessary software is installed** on Jenkins agent (the machine that runs the job).

- **For Java:** Your Jenkins agent must have a **JDK (Java Development Kit)** installed and available in its system `PATH`.
    
- **For Python:** Your Jenkins agent must have **Python** (preferably `python3`) and `pip` installed and available in its system `PATH`.
    
---

### 2. Workflow for a Java Program

Workflow to compile `.java` file and then run the resulting `.class` file.

#### Step 1: Add Java file to GitHub

Ensure your Java file (e.g., `HelloWorld.java`) is in repository.

#### Step 2: Use this `Jenkinsfile`

Commit this as the `Jenkinsfile` in repository.

```groovy
pipeline {
    agent any

    stages {
        stage('Build and Run Java') {
            steps {
                // Step 1: Compile the .java file
                // This creates a HelloWorld.class file
                echo "Compiling Java code..."
                sh 'javac HelloWorld.java'
                
                // Step 2: Run the compiled .class file
                // Note: You run 'java' on the class name, not the file name
                echo "Running Java program..."
                sh 'java HelloWorld'
            }
        }
    }
}
```

- `sh 'javac HelloWorld.java'`: This executes the Java compiler on your source file.
    
- `sh 'java HelloWorld'`: This executes the Java Virtual Machine (JVM) on your compiled class.
    
---

### 3. Workflow for a Python Program

Workflow will first install any dependencies from a `requirements.txt` file and then run `.py` script.

#### Step 1: Add your Python files to GitHub

Ensure your Python file (e.g., `app.py`) is in your repository. If you have dependencies, also add a `requirements.txt` file.

Example `requirements.txt`:

```
requests
numpy
```

(If you have no dependencies, you can skip the `pip install` step in the `Jenkinsfile`.)

#### Step 2: Use this `Jenkinsfile`

Commit this as the `Jenkinsfile` in repository.

```groovy
pipeline {
    agent any

    stages {
        stage('Build and Run Python') {
            steps {
                // Step 1: Install dependencies
                // This is a best practice.
                echo "Installing Python dependencies..."
                sh 'pip install -r requirements.txt'
                
                // Step 2: Run the Python script
                echo "Running Python script..."
                sh 'python3 app.py'
            }
        }
    }
}
```

- `sh 'pip install -r requirements.txt'`: This reads your `requirements.txt` file and installs all listed packages.
    
- `sh 'python3 app.py'`: This executes your script using the Python 3 interpreter.

> [!NOTE] Debugging
> Issue might occur due to missing jdk, so javac not found error. 
> Can be fixed Fixed by `sudo apt install default-jdk`
> Using `readlink -f $(which java)`
> Adding home path without `/bin/java` in the global setting and using this tool `java21` in pipeline.
> 

