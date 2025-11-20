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
      // {
      //   title: "L",
      //   items: [
      //    { label: "AWS VPC Setup ", link: "/dev-cloud/cclab/l10" },
      //   ]
      // },
    ]
  }
]

export const cloud2Section = [
  {
    title: "AWS Setup & Practice",
    items: [
     {
        title: "Network Lab",
        items: [
         { label: "AWS VPC Setup ", link: "/dev-cloud/cclab/l10" },
        ]
      },
      // {
      //   title: "B",
      //   items: [
      //   //  { label: "Application Layer", link: "/mca/cn/u2/u11" },
      //   ]
      // },
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