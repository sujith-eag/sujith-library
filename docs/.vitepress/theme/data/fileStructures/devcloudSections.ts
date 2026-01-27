export const cloud1Section = [
  {
    title: "Cloud Basics",
    items: [
      {
        title: "Cloud Foundations",
        items: [
         { label: "Cloud Characteristics", link: "/dev-cloud/cu1/u11" },
         { label: "Cloud Service Models", link: "/dev-cloud/cu1/u12" }, 
         { label: "Cloud Deployment Models", link: "/dev-cloud/cu1/u13" }, 
         { label: "Conceptializing Cloud", link: "/dev-cloud/cu1/u14" }, 
        ]
      },
    ]
  }
]

export const cloud2Section = [
  {
    title: "AWS Labs",
    items: [
      {
        title: "Account & IAM",
        items: [
          { label: "AWS Account Setup", link: "/dev-cloud/cloud_lab/1_account_IAM/lab_1" },
          { label: "IAM Users, Groups, Roles", link: "/dev-cloud/cloud_lab/1_account_IAM/lab_2" },
        ]
      },
      {
        title: "S3 Storage",
        items: [
          { label: "S3 Introduction", link: "/dev-cloud/cloud_lab/2_S3/lab_3" },
          { label: "S3 Advanced Features", link: "/dev-cloud/cloud_lab/2_S3/lab_4" },
          { label: "S3 Data Analysis with Athena", link: "/dev-cloud/cloud_lab/2_S3/lab_26" },
          { label: "S3 Website with CloudFront", link: "/dev-cloud/cloud_lab/2_S3/lab_28" },
          { label: "Global S3 Website Delivery", link: "/dev-cloud/cloud_lab/2_S3/lab_29" },
        ]
      },
      {
        title: "EC2 Compute",
        items: [
          { label: "Windows EC2 Instance with RDP Access", link: "/dev-cloud/cloud_lab/3_EC2/lab_5" },
          { label: "Linux EC2 Instance with SSH Access", link: "/dev-cloud/cloud_lab/3_EC2/lab_6" },
          { label: "Static Website on EC2", link: "/dev-cloud/cloud_lab/3_EC2/lab_7" },
          { label: "Using Custom AMI", link: "/dev-cloud/cloud_lab/3_EC2/lab_8" },
          { label: "Deploying a Web Application", link: "/dev-cloud/cloud_lab/3_EC2/lab_9" },
        ]
      },
      {
        title: "VPC Networking",
        items: [
          { label: "Creating a Custom VPC", link: "/dev-cloud/cloud_lab/4_VPC/lab_10" },
          { label: "EC2 in Public and Private Subnets", link: "/dev-cloud/cloud_lab/4_VPC/lab_11" },
        ]
      },
      {
        title: "Load Balancing",
        items: [
          { label: "Load-Balanced App with ALB and ASG", link: "/dev-cloud/cloud_lab/5_Load_Balancing/lab_12" },
          { label: "Stress Testing EC2 Instance", link: "/dev-cloud/cloud_lab/5_Load_Balancing/lab_13" },
          { label: "Application Load Balancer (ALB)", link: "/dev-cloud/cloud_lab/5_Load_Balancing/lab_14" },
        ]
      },
      {
        title: "Lightsail",
        items: [
          { label: "WordPress Website on Lightsail", link: "/dev-cloud/cloud_lab/6_Lightsail/lab_15" },
        ]
      },
      {
        title: "Databases",
        items: [
          { label: "Building Flask Web Application", link: "/dev-cloud/cloud_lab/7_Databases/lab_16" },
          { label: "Relational Database with Amazon RDS", link: "/dev-cloud/cloud_lab/7_Databases/lab_17" },
          { label: "NoSQL Database with Amazon DynamoDB", link: "/dev-cloud/cloud_lab/7_Databases/lab_18" },
          { label: "ElastiCache (Redis) as an In-Memory Cache", link: "/dev-cloud/cloud_lab/7_Databases/lab_19" },
        ]
      },
      {
        title: "Elastic Beanstalk",
        items: [
          { label: "Flask Application on Elastic Beanstalk", link: "/dev-cloud/cloud_lab/8_Elastic_Beanstalk/lab_20" },
          { label: "Flask + DynamoDB on Elastic Beanstalk", link: "/dev-cloud/cloud_lab/8_Elastic_Beanstalk/lab_21" },
        ]
      },
      {
        title: "CloudFormation",
        items: [
          { label: "Launching EC2, Apache using UserData", link: "/dev-cloud/cloud_lab/9_CloudFormation/lab_22" },
          { label: "EC2 + S3 : using CloudFormation", link: "/dev-cloud/cloud_lab/9_CloudFormation/lab_23" },
        ]
      },
      {
        title: "AWS Lambda",
        items: [
          { label: "Input Processing, Business Logic Execution", link: "/dev-cloud/cloud_lab/10_AWS_Lambda/lab_24" },
          { label: "Event-Driven Notifications", link: "/dev-cloud/cloud_lab/10_AWS_Lambda/lab_25" },
        ]
      },
      {
        title: "IoT",
        items: [
          { label: "Sensor Monitoring with IoT Core", link: "/dev-cloud/cloud_lab/11_IoT/lab_27" },
        ]
      },
      {
        title: "EKS",
        items: [
          { label: "Containerized App on EKS", link: "/dev-cloud/cloud_lab/12_EKS/lab_30" },
        ]
      },
    ]
  }
]


export const cloudSection = [
  ...cloud1Section,
  ...cloud2Section,
]

export const dev1Section = [
  {
    title: "Jenkins",
    items: [
      {
        title: "Basics",
        items: [
         { label: "Jenkins Introduction", link: "/dev-cloud/devops/jenkins/jenkins1" },
        ]
      },
      {
        title: "Setup & Pipeline",
        items: [
         { label: "Jenkins Setup", link: "/dev-cloud/devops/jenkins/jenkins2" },
         { label: "Creating Job", link: "/dev-cloud/devops/jenkins/jenkins3" },
         { label: "Pipeline as Code", link: "/dev-cloud/devops/jenkins/jenkins4" },
        ]
      },
      {
        title: "Comparing Platforms",
        items: [
         { label: "Syntax", link: "/dev-cloud/devops/cmp/1" },
         { label: "Environment", link: "/dev-cloud/devops/cmp/2" },
        ]
      },
      { label: "Lab-Practice", link: "/dev-cloud/devops/jenkins/jenkins5" },
    ]
  }
]

export const dev2Section = [
  {
    title: "Docker",
    items: [
      {
        title: "Introduction",
        items: [
          { label: "Core Concepts", link: "/dev-cloud/devops/docker/1_intro/u11" },
          { label: "Docker Architecture", link: "/dev-cloud/devops/docker/1_intro/u12" },
          { label: "Design Philosophy", link: "/dev-cloud/devops/docker/1_intro/u13" },
        ]
      },
      {
        title: "Installation & Files",
        items: [
          { label: "Install & Setup", link: "/dev-cloud/devops/docker/2_install/u21" },
          { label: "Dockerfile", link: "/dev-cloud/devops/docker/2_install/u22" },
          { label: "Docker Compose", link: "/dev-cloud/devops/docker/2_install/u23" },
        ]
      },
      {
        title: "Technical Concepts",
        items: [
          { label: "Data & Storage Management", link: "/dev-cloud/devops/docker/3_tech/u31" },
          { label: "Container Networking", link: "/dev-cloud/devops/docker/3_tech/u32" },
          { label: "Security Best Practices", link: "/dev-cloud/devops/docker/3_tech/u33" },
          { label: "Advanced Security", link: "/dev-cloud/devops/docker/3_tech/u34" },
        ]
      },
      {
        title: "Lifecycle & Optimization",
        items: [
          { label: "Docker Lifecycle", link: "/dev-cloud/devops/docker/4_life_ecj/u41" },
          { label: "Docker Ecosystem", link: "/dev-cloud/devops/docker/4_life_ecj/u42" },
          { label: "Image Optimization", link: "/dev-cloud/devops/docker/4_life_ecj/u43" },
        ]
      },
      {
        title: "Registries & CI",
        items: [
          { label: "Managing Registries", link: "/dev-cloud/devops/docker/5_reg/u51" },
          { label: "CI Testing", link: "/dev-cloud/devops/docker/5_reg/u52" },
          { label: "CI Pipelines", link: "/dev-cloud/devops/docker/5_reg/u53" },
        ]
      },
      {
        title: "Orchestration",
        items: [
          { label: "Swarm", link: "/dev-cloud/devops/docker/6_cloud/u61" },
          { label: "Kubernetes", link: "/dev-cloud/devops/docker/6_cloud/u62" },
          { label: "Managed K8s", link: "/dev-cloud/devops/docker/6_cloud/u63" },
          { label: "Observability", link: "/dev-cloud/devops/docker/6_cloud/u64" },
        ]
      },
    ]
  }
]

export const devopsSection = [
  ...dev1Section,
  ...dev2Section,
]
  
export const devcloudSection = [
  ...cloudSection,
  ...devopsSection,
]