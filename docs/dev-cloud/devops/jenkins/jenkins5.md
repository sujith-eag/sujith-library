# CI/CD Pipeline with Jenkins, Docker, Kubernetes, and Docker Swarm

This document outlines the complete workflow for developing, containerizing, and deploying both a Flask and a Maven Spring Boot application using a Jenkins CI/CD pipeline and Minikube.

## 1. Application Setup & Local Development

### Flask Web Application

1. **Initialize Directory**: Create a folder named `my_webapp` and navigate into it.
    
2. **`app.py`**: Create the application entry point.

::: details Flask    
```python
from flask import Flask
app=Flask(__name__)

@app.route("/")
def home():
	return "Hello from Jenkins Pipeline Demo"

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=5000)
```

3. **`requirements.txt`**: Define the dependencies.
    
```text
flask
```

4. **`Dockerfile`**: Configure the container image.
    
```dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python","app.py"]
```

5. **Local Testing**: Build and run the Docker image locally to verify.
    
```bash
docker build -t my_webapp .
docker run -p 5000:5000 my_webapp:latest
```
:::


### Maven Spring Boot Application

::: details Maven Setup
1. **Project Generation**: Use [Spring Initializr](https://start.spring.io/) to generate a Maven project.
   - Project: Maven Project
   - Language: Java
   - Spring Boot: Latest version
   - Project Metadata:
     - Group: com.example
     - Artifact: my_maven_app
     - Name: my_maven_app
     - Description: Demo project for Spring Boot
     - Package name: com.example.my_maven_app
     - Packaging: Jar
     - Java: 21
   - Dependencies: Add "Spring Web"
   - Click Generate to download the ZIP file.
   
   Extract the ZIP file into your working directory.
:::

2. Add a **`HomeController.java`** file with rest controller at `src/main/java/com/example/my_maven_app/`

::: details Java and Dockerfile
```java
package com.example.my_maven_app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "Hello from Spring Boot Maven App!";
    }
}
```

3. **`Dockerfile`**: Configure the container for the Java application.
    
```dockerfile
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
CMD ["java","-jar","app.jar"]
```

4. **Local Build**: Install Maven and build the project while skipping tests.
    
```bash
sudo apt install maven
mvn clean package -DskipTests
```

5. **Local Testing**: Build and run the Docker image locally to verify.
    
```bash
docker build -t my_maven_app .
docker run -p 10000:8080 my_maven_app:latest
```

   - Open `localhost:10000` in your browser to verify the application displays "Hello from Spring Boot Maven App!".
:::


### React Web Application (Using Vite)

1. **Initialize Directory**: Create a folder named `my_react_app` and navigate into it.

::: details React Setup

2. **Create Vite App**: Use Vite to scaffold the application.
    
```bash
npm create vite@latest
```

3. **Customize App**: Edit `src/App.jsx` to add custom content.
    
```jsx
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React CI/CD Pipeline Demo with Vite</h1>
      </header>
    </div>
  );
}

export default App;
```

4. **Build the App**: Compile the React app for production.
    
```bash
npm run build
```

5. **`Dockerfile`**: Configure the container image using Nginx to serve the built app (Vite builds to `dist` folder).
    
```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

6. **Local Testing**: Build and run the Docker image locally to verify.
    
```bash
docker build -t my_react_app .
docker run -p 3000:80 my_react_app:latest
```

   - Open `localhost:3000` in your browser to verify the React app loads.

:::


### Jenkinsfile Setup

Create a `Jenkinsfile` in the root of your project directory.

**Flask/Maven/React Pipeline Example:**

The Cron job can be added at the trigger section in the pipeline instead of the code also as `H/5 * * * *`

::: details Jenkinsfile
```groovy
pipeline {
	agent any
	
	// Use only if Cron job is needed, Remove for manual
	triggers {
		cron('H/5 * * * *')  // Runs every 5 minutes
	}

	environment {
		DOCKERHUB_CRED=credentials('dockerhub')
		IMAGE_NAME="<docker_hub_username>/<docker_hub_repo_name>"
	}
	
	stages {
		stage('checkout') {
			steps {
				git url:'https://github.com/<username>/<repo>.git', branch:'main'
				// For SSH: 
				// git url:'<github_repo_ssh_url>', branch:'main'
			}
		}

	// Stage only for a Maven project, skip for others
		stage('Build Maven Project') {
			steps {
				retry(3) {
					sh "mvn clean package -DskipTests"
				}
			}
		}

	// Only for React Project, skip for others
		stage('Install Dependencies and Build React App') {
			steps {
				retry(3) {
					sh 'npm install'
					sh 'npm run build'
				}
			}
		}

	// Note: No build stage needed for Flask as it's a simple Python script

		stage('Build Docker Image') {
			steps {
				retry(3) {
					script {
						dockerImage=docker.build("${IMAGE_NAME}:latest")
					}
				}
			}
		}
		
		stage('Push to DockerHub') {
			steps {
				retry(3) {
					script {
						docker.withRegistry('https://index.docker.io/v1/','dockerhub') {
							dockerImage.push()
						}
					}
				}
			}
		}
	}
	
	post {
		success {
			echo "Pipeline Successful"
		}
		failure {
			echo "Pipeline Failed"
		}
		always {
			echo "Cleaning Up WorkSpace"
			deleteDir()
		}
	}
}
```
:::

For cron-based pipelines, the trigger automatically starts the pipeline at set intervals (e.g., every 5 minutes) without manual intervention.

::: details Pipeline Stages

- **Checkout Stage**: Jenkins clones the repository from GitHub using the specified branch (e.g., main). This pulls the latest code changes.
- **Build Stages** (varies by app):
  - Flask: Not needed (app is simple).
  - Maven: `mvn clean package -DskipTests` compiles and packages the JAR, skipping tests for speed.
  - React: `npm install` installs dependencies, `npm run build` creates production build.
- **Docker Build Stage**: Builds the Docker image using the Dockerfile, tagging it with the IMAGE_NAME.
- **Push to DockerHub Stage**: Logs into Docker Hub and pushes the image for storage and deployment.
- **Deploy Stage** (varies):
  - Docker Swarm: Uses `docker service create` or `docker stack deploy` to run the container on the Swarm cluster.
  - Kubernetes: Uses `kubectl apply` to deploy pods/services on the K8s cluster.
- **Post Actions**: Logs success/failure and cleans up the workspace.
:::


## 2. Source Control & Repository Configuration

### Docker Hub Setup

1. Log in to Docker Hub and create new repositories named `my_webapp` and `my_maven_app`.

### GitHub Initialization

For both applications, initialize a local Git repository and push to GitHub.

1. **Git Init**:
    
```bash
git init
git branch -m main
git add .
git commit -m "Initial Commit"
```

2. **Remote Setup**: Create a new repository on GitHub and link it locally.
    
```bash
git remote add origin <ssh-url-of-github-repo>
```

3. **SSH Authentication**: Generate an SSH key and add the public key to your GitHub account settings.
    
```bash
ssh-keygen -t ed25519 -C "<your-email>"
cat ~/.ssh/id_ed25519.pub
ssh -T git@github.com # Test connection
```

4. **Push Code**:
    
```bash
git push origin main
```

Can use fine-grained personal access token(HTTPS) for authentication.

::: details Token Usage

1. **Generate Token**: Go to GitHub Settings > Developer settings > Personal access tokens > Fine-grained tokens. Create a new token with repository permissions (e.g., Contents: Read and write).

2. **Remote Setup**: Use the HTTPS URL instead of SSH.

```bash
git remote add origin https://github.com/<username>/<repo>.git
```

3. **Push Code**: When pushing, enter your GitHub username and the token as the password.
    
```bash
git push origin main
# Enter username and token when prompted
```

   - For automation, you can configure Git to store credentials, but be cautious with security.
:::


## 3. Jenkins CI/CD Pipeline Configuration

::: details Jenkins Installation

```bash
sudo apt update
sudo apt install fontconfig openjdk-21-jre
java -version
```

```bash
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian/jenkins.io-2026.key
```

```bash
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
```

```bash
sudo apt update
sudo apt install jenkins
```

```bash
sudo systemctl enable jenkins
sudo systemctl start jenkins
sudo systemctl status jenkins
```

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```
`admin`, 
`http://localhost:8080`

:::

### Plugin & System Requirements

1. **Install Plugins**: Ensure the following are installed: **Git**, **Pipeline**, **Docker Pipeline**, and **Credential Binding**.
    
2. **Restart Jenkins**: `sudo systemctl restart jenkins`.
    
3. **Permissions**: Add the Jenkins user to the Docker group to allow command execution.
    
```bash
sudo usermod -aG docker jenkins
```

```bash
sudo systemctl restart docker
sudo systemctl restart jenkins
```

### Credentials

1. **Docker Hub Credentials**: Go to **Manage Jenkins > Credentials > Global > Add Credentials**. Select "Username and Password," use the ID `dockerhub`, and enter your Docker Hub credentials.
    
2. **(Optional for Public Repos) GitHub Access for Jenkins**:
    
    Jenkins only needs to pull (clone) the repository code for building and does not push back to GitHub. Only Docker Hub push occurs.

::: details Github to Jenkins
- **For Public Repositories**: No authentication is required. Jenkins can clone the repo directly using the HTTPS URL without credentials.
    
- **For Private Repositories or to Avoid Rate Limits**: Configure authentication as follows:
- **Token Method**:
	- Generate a fine-grained personal access token with read-only permissions (e.g., Contents: Read).
	- In Jenkins, go to **Manage Jenkins > Credentials > Global > Add Credentials**. Select "Username and Password," use the ID `github_token`, enter your GitHub username and the token as password.

- **SSH Method**:
	- Switch to the jenkins user: `sudo -su jenkins`
	- Generate an SSH key and add it to GitHub (ensure the key has read access to the repo).
	- Add GitHub to known hosts:

```bash
ssh-keyscan github.com >> ~/.ssh/known_hosts
chmod 600 ~/.ssh/known_hosts
```
:::

### Creating the Jenkins Pipeline Job

1. **Create New Pipeline Job**: Go to Jenkins dashboard > New Item > Pipeline > Enter a name (e.g., `my_webapp_pipeline`) > OK.
    
2. **Configure Pipeline**:
   - Under **Pipeline** section, select **Pipeline script from SCM**.
   - **SCM**: Git.
   - **Repository URL**: `<https_url_of_github_repo>` (for token or no auth) or `<ssh_url_of_github_repo>` (for SSH).
   - **Credentials**: Select credentials if using authentication (optional for public repos).
   - **Branch Specifier**: `*/main`.
   - **Script Path**: `jenkinsfile`.
   - Save and click **Build Now**.

### Verify in Docker Hub

- After the pipeline runs successfully, check your Docker Hub repository to confirm the image has been pushed.


## 4. Kubernetes Deployment with Minikube

### Environment Initialization

1. **Install Minikube & Kubectl**:

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb
```

```bash
sudo dpkg -i minikube_latest_amd64.deb
```

```bash
minikube start
minikube status
```

> [!NOTE] minikube issue
> If you encounter issues with the default driver, try `minikube start --driver=docker`
> check with `minikube status`
> Delete existing cluster with `minikube delete` and restart if needed.
> Error can also happen because of kvm and needs to be disabled.

::: details kvm disable

To stop kvm modules temporarily for the current session:

```bash
sudo modprobe -r kvm_intel
sudo modprobe -r kvm_amd
sudo modprobe -r kvm
```
To start kvm modules again:

```bash
sudo modprobe kvm
sudo modprobe kvm_intel  # For Intel CPUs
sudo modprobe kvm_amd    # For AMD CPUs
```
:::

```bash
sudo snap install kubectl --classic

kubectl version --client

kubectl cluster-info
```

2. If using private Docker Hub repo, login to Docker Hub:

Docker Authentication in Minikube

```bash
eval $(minikube docker-env)
```
This command tells your local terminal's Docker client to talk to the Docker engine inside the Minikube virtual machine instead of your host machine's Docker engine.

```bash
docker login
```

### Deployment & Service Management

1. **Create Deployment**: Deploy the image from Docker Hub.
    
```bash
kubectl create deployment <app-name> --image=<username>/<repo>:<tag>
```

   - Example: `kubectl create deployment my-webapp --image=myuser/my_webapp:latest`

::: details kubernetes Notes
- This command creates a Deployment named `<app-name>` that manages a Pod running the specified Docker image.
- By default, Kubernetes creates a single replica of the Pod. You can scale this later.
- To verify the deployment, run:
```bash
kubectl get deployments
kubectl get pods
```

To Scale your application to 3 replicas, run:
```bash
kubectl scale deployment/my-webapp --replicas=3

kubectl get pods
```
You should be able to see all three instances starting up or running
:::

2. **Expose Port**: Make the application accessible.
    
```bash
kubectl expose deployment <app-name> --type=NodePort --port=<app_port>
```

   - Flask Example: `kubectl expose deployment my-webapp --type=NodePort --port=5000`

3. **Verify Service**: Retrieve the URL to access the application.
    
```bash
minikube service <app-name>
```

::: details kubernetes Troubleshooting
- This command tunnels the Minikube service to localhost and opens the browser.
- **No Access**: Ensure `minikube service` is run in a terminal (it starts a tunnel). 
- Check for running status 
```bash
minikube status
kubectl get pods
kubectl get services
```
- **Image Issues**: Verify the image exists on Docker Hub and is public or authenticated.
- **Port Binding**: Apps are configured to bind to `0.0.0.0`; if custom, ensure Dockerfile CMD exposes correctly.
:::

4. **Cleanup**:
    
```bash
kubectl delete deployment <app-name>

kubectl delete service <app-name>

minikube stop
```


## 5. Docker Swarm Deployment

### Environment Initialization

1. **Initialize Docker Swarm**:

Use `hostname -I` to get your machine's IP address.
Use the first IP address from the output to initialize the swarm.

```bash
docker swarm init --advertise-addr <your_machine_ip>
```

   - This sets up the current node as a Swarm manager.

2. If using private Docker Hub repo, login to Docker Hub:

```bash
docker login
```

### Service Management

1. **Create Service**: Deploy the image from Docker Hub as a service.
    
```bash
docker service create --name <app-name> --publish <host_port>:<container_port> <username>/<repo>:<tag>
```

   - Flask Example: `docker service create --name my-webapp --publish 5000:5000 myuser/my_webapp:latest`

2. **Scale Service**: Increase the number of replicas.
    
```bash
docker service scale <app-name>=<number_of_replicas>
```

   - Example: `docker service scale my-webapp=3`

3. **Verify Service**: Check the status of the service.
    
```bash
docker service ls
docker service ps <app-name>
```

   - Access the app at `machine_ip:host_port` in your browser.
   - If not accessible, check service logs with `docker service logs <app-name>` and ensure the container exposes the port correctly.

4. **Cleanup**:
    
```bash
docker service rm <app-name>

docker swarm leave --force
```


## Alternative: Orchestration with Docker Stack

While `docker service` is useful for single containers, **Docker Stack** is the production-standard for Swarm. It allows for defining the entire application state (scaling, networking, and resource limits) in a single file.

::: details stack benefits
- **Declarative State**: Unlike manual commands, a Stack file defines the _desired state_. If a node fails, Swarm automatically re-distributes containers to match the YAML definition.
    
- **Overlay Networking**: Docker Stack automatically creates an isolated virtual network that allows containers across different physical hosts to communicate securely.
    
- **The Routing Mesh**: When you publish a port in a Stack, Docker opens that port on _every_ node in the cluster. Even if a container isn't running on a specific node, the Routing Mesh forwards the traffic to a node that has the container.
:::

::: details Implementation Steps

#### 1. Create the Stack Definition

Create a file named `docker-stack.yml` in your project root. This configuration works for your Flask, Maven, or React images by simply changing the image name.

```yaml
version: '3.8'
services:
  webapp:
    image: <docker_hub_username>/<repo_name>:latest
    ports:
      - "5000:5000"  # Map Host Port 5000 to Container Port 5000 (Flask)
    networks:
      - app-net
    deploy:
      replicas: 2  # High availability: 2 instances running
      update_config:
        parallelism: 2
        delay: 10s
      restart_policy:
        condition: on-failure

networks:
  app-net:
    driver: overlay
```

#### 2. Initialize Swarm

```bash
docker swarm init
```

   - This sets up the current node as a Swarm manager.

To avoid the networking issues found in manual setups, initialize using your machine's actual IP address rather than the loopback address.

```bash
# Get your local IP
export MY_IP=$(hostname -I | awk '{print $1}')

# Initialize Swarm
docker swarm init --advertise-addr $MY_IP
```

#### 3. Deploy the Stack

The `docker stack deploy` command sends the YAML configuration to the Swarm manager, which then schedules the tasks.

Deploy the stack (named 'lab_stack')
```bash
docker stack deploy -c docker-stack.yml lab_stack
```

#### 4. Verification and Management

- **List Stacks and Check service status**: 
 
```bash
docker stack ls.

docker stack services lab_stack

# List tasks in the stack
docker stack ps lab_stack
```
- **Access the Application**: Open your browser and navigate to `http://<your_machine_ip>:5000` to see the application running.
- **Scale Dynamically**: You can change the `replicas` in the YAML and re-run the `deploy` command; Docker will perform a rolling update without downtime.
    
### Cleanup

To remove the entire application, including the network and all services:

```bash
docker stack rm lab_stack

docker swarm leave --force
```
:::
