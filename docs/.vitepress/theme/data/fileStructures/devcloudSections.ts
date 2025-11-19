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
         { label: "Docker Core Concepts", link: "/dev-cloud/devops/docker/1_intro/u11" },
         { label: "Docker Architecture", link: "/dev-cloud/devops/docker/1_intro/u12" },
         { label: "Application Design Philosophy", link: "/dev-cloud/devops/docker/1_intro/u13" },
        ]
      },
      {
        title: "Docker Files",
        items: [
         { label: "Dockerfile", link: "/dev-cloud/devops/docker/2_files/u21" },
         { label: "Docker Compose", link: "/dev-cloud/devops/docker/2_files/u22" },
         { label: "Managing Data and Storage", link: "/dev-cloud/devops/docker/2_files/u23" },
         { label: "Container Security", link: "/dev-cloud/devops/docker/2_files/u24" },

         { label: "Docker Lifecycle", link: "/dev-cloud/devops/docker/1_intro/u14" },
         { label: "Container Networking", link: "/dev-cloud/devops/docker/1_intro/u15" },
         { label: "Docker Ecosystem", link: "/dev-cloud/devops/docker/1_intro/u16" },
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