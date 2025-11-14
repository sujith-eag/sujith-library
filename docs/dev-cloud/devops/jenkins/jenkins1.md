# Jenkins

## What is Jenkins?

Jenkins is an open-source automation server written in Java. It provides hundreds of plugins to support automating, building, testing, and deploying virtually any software project.

It is a server-based system that runs in a servlet container, such as Apache Tomcat. It is primarily used to implement **Continuous Integration (CI)** and **Continuous Delivery/Deployment (CD)** workflows. Jenkins automates the repetitive tasks in the software development lifecycle, such as watching a Source Code Management (SCM) system (like Git) for changes, triggering a build, running automated tests, and then deploying the application to various environments.

## Jenkins Importance for DevOps Engineers

For DevOps engineers, Jenkins functions as a central control hub for the entire automated development lifecycle. 

- **Automation:** It automates the complete CI/CD pipeline, from code commit to production deployment. This eliminates manual, error-prone processes and accelerates the delivery cycle.
    
- **Fast Feedback Loop:** By automatically building and testing every commit, it provides immediate feedback to developers on the impact of their changes. This adheres to the core DevOps principle of "failing fast" to fix issues while they are small and isolated.
    
- **Integration Hub:** Jenkins' primary strength is its extensibility. Through its vast plugin ecosystem (over 1,800 plugins), it acts as the central integration point connecting all other tools in the DevOps toolchain, including:
    
    - **Source Control (SCM):** GitHub, GitLab, Bitbucket
        
    - **Build Tools:** Maven, Gradle, npm, Ant
        
    - **Containerization & Orchestration:** Docker, Kubernetes
        
    - **Configuration Management:** Ansible, Puppet, Chef
        
    - **Testing Frameworks:** Selenium, JUnit, PyTest
        
    - **Notification & Reporting:** Slack, Email, Jira
        
- **Build Consistency:** It ensures that the build and test process is standardized and executed consistently every time, removing the "it worked on my machine" problem.
    
## Key Concepts of Jenkins

The following are foundational terms within the Jenkins ecosystem:

- **Job / Item:** A single, configurable task that Jenkins executes. Examples include a "Freestyle project" for simple tasks or a "Pipeline" for complex, multi-step workflows.
    
- **Pipeline:** The most important modern concept. A pipeline defines the entire CI/CD workflow as a series of steps grouped into logical **stages**.
    
- **`Jenkinsfile`:** A text file that defines a Jenkins Pipeline. By storing this file in the project's SCM repository, it enables **"Pipeline as Code."** This allows the CI/CD pipeline to be versioned, reviewed, and iterated upon just like the application code.
    
- **Controller (formerly "Master"):** The main Jenkins server. It is responsible for orchestrating jobs, scheduling builds, serving the Jenkins web UI, and dispatching work to agents.
    
- **Agent (formerly "Slave"):** A worker machine (physical, virtual, or containerized) that connects to the Controller. Its sole purpose is to execute the tasks and build steps assigned to it by the Controller.
    
- **Stage:** A logical block in a `Jenkinsfile` that defines a distinct phase of the pipeline (e.g., `Build`, `Test`, `Deploy`).
    
- **Step:** A single command or action within a stage. `echo "Building..."` and `sh 'npm install'` are examples of steps.
    
- **Plugin:** A software extension that enhances Jenkins' functionality. Plugins are the primary method for integrating Jenkins with third-party tools.
    
## Architecture of Jenkins

Jenkins employs a **Distributed (Controller-Agent)** architecture to enable scalability and specialized builds.

1. **Jenkins Controller:**
    
    - This is the central server that manages the system.
        
    - It hosts the web UI and stores all job configurations and build history.
        
    - It is responsible for scheduling _when_ and _where_ jobs should run.
        
    - The Controller should be configured for orchestration and management only; it should not execute the builds itself.
        
2. **Jenkins Agents:**
    
    - These are the worker nodes that perform the actual build, test, and deploy tasks.
        
    - They connect to the Controller and wait for instructions.
        
    - When the Controller schedules a job, it selects an available agent, sends it the build commands, and the agent executes them.
        
    - Upon completion, the agent reports the build results and artifacts back to the Controller.
        

This architecture is essential because it allows for:

- **Scalability:** If build times become slow, more agents can be added to the pool.
    
- **Specialized Environments:** Different agents can be set up for different environments (e.g., a `windows-agent` for .NET builds, a `linux-agent` for Docker builds, and a `macos-agent` for iOS builds), all managed by one Controller.

## How to Extend Jenkins

The primary method for extending Jenkins' functionality is by **installing plugins**.

Jenkins' core functionality is intentionally minimal. Its power is derived from its community-contributed plugin ecosystem. These plugins provide integrations with other tools, new UI features, additional build tools, and enhanced administrative capabilities.

Plugins are managed via the **Manage Jenkins > Plugins** (or **Manage Plugins**) page in the web UI.

## How are packages handled in Jenkinsfiles?

This is a critical concept: **Jenkins does not handle packages.**

A `Jenkinsfile` provides a list of shell commands (using `sh` for Linux/macOS or `bat` for Windows) that are to be executed on an agent. Jenkins is simply the **orchestrator** that runs these commands.

This means that the responsibility for handling packages (e.g., `pip`, `npm`, `maven`, `javac`) belongs to the **tools installed on the agent machine**.

- **Example:** When a `Jenkinsfile` contains the step `sh 'pip install -r requirements.txt'`, it will only succeed if the agent machine executing that step has `python` and `pip` installed and available in its system `PATH`.
    
- **Error Handling:** The error `javac: not found` is a direct message from the agent's operating system, indicating that the `javac` executable (part of the JDK) is not installed or not in the `PATH`.
    

#### Modern Best Practice: Docker Agents

To avoid the maintenance burden of pre-installing every required tool on all agents, the modern best practice is to run builds inside **Docker containers**.

A `Jenkinsfile` can specify a Docker image to use. This image (e.g., `node:18`, `python:3.10`) comes with the necessary tools (like `npm` or `pip`) pre-installed. Jenkins will start that container and execute the build steps _inside_ it, guaranteeing a clean, isolated, and reproducible build environment.

## Alternatives to Jenkins

While Jenkins is a powerful and flexible standard, several alternatives have emerged, often with a focus on tighter SCM integration and a SaaS (Software as a Service) model.

- **GitLab CI/CD:** A complete DevOps platform built directly into GitLab.
    
- **GitHub Actions:** A CI/CD platform built directly into GitHub, using YAML configurations and an event-driven model.
    
- **CircleCI:** A popular, cloud-native CI/CD platform known for its speed and simple YAML-based configuration.
    
- **GoCD:** An open-source CI/CD server focused on Continuous Delivery, providing strong support for visualizing complex pipeline dependencies.
    
## Comparison: Jenkins vs. GitLab CI

This section compares Jenkins with **GitLab CI/CD**, another prominent open-source automation server.

|**Feature**|**Jenkins**|**GitLab CI/CD**|
|---|---|---|
|**Primary Function**|A standalone, flexible **automation server** for CI/CD.|An **all-in-one DevOps platform** (Git SCM, CI/CD, Registry, etc.).|
|**Configuration**|`Jenkinsfile` (written in **Groovy**). Also supports UI-based configuration (Freestyle).|`.gitlab-ci.yml` (written in **YAML**). Configuration is strictly "as code."|
|**Setup & Maintenance**|**High.** Requires manual setup of the server, Java, and plugins. Maintenance ("plugin hell") can be complex.|**Low.** CI/CD is a built-in feature of the GitLab platform.|
|**Extensibility**|**High.** This is its greatest strength. Thousands of plugins allow integration with almost any tool.|**Medium.** Core features (Docker, Kubernetes) are built-in. Integration with external tools is less flexible.|
|**Integration**|**Vendor-Neutral.** Connects equally well to GitHub, GitLab, Bitbucket, and other SCMs.|**Tightly Integrated.** Designed to work perfectly with GitLab repositories. Connecting to external repos is possible but not its primary design.|
|**UI Experience**|The classic UI can feel dated. Modern UI requires plugins like `Blue Ocean`.|A single, modern, and unified web interface for code, issues, and pipelines.|

### Pros & Cons Summary

**Jenkins:**

- **Pros:** Unmatched flexibility, vendor-neutral (works with any SCM), and a massive community/plugin ecosystem.
    
- **Cons:** High maintenance overhead, can be complex to manage, and has a steeper learning curve (Groovy).
    

**GitLab CI/CD:**

- **Pros:** A seamless, all-in-one experience. Easy to learn (YAML). CI is integrated by default, requiring no separate setup.
    
- **Cons:** Primarily designed to work only with GitLab repositories. Less flexible for non-standard or highly complex workflows.
