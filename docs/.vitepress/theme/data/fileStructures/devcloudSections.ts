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
      //   title: "B",
      //   items: [
      //   //  { label: "Application Layer", link: "/mca/cn/u2/u11" },
      //   ]
      // },
    ]
  }
]

export const cloud2Section = [
  {
    title: "Cloud Architecture",
    items: [
      {
        title: "A",
        items: [
        //  { label: "Networking Devices", link: "/mca/cn/u1/u11" },

        ]
      },
      {
        title: "B",
        items: [
        //  { label: "Application Layer", link: "/mca/cn/u2/u11" },
        ]
      },
    ]
  }
]
 
export const dev1Section = [
  {
    title: "DevOps Basics",
    items: [
      {
        title: "A",
        items: [
        //  { label: "Networking Devices", link: "/mca/cn/u1/u11" },
        ]
      },
      {
        title: "B",
        items: [
      //   //  { label: "Application Layer", link: "/mca/cn/u2/u11" },
        ]
      },
    ]
  }
]

export const dev2Section = [
  {
    title: "Pipelines",
    items: [
      {
        title: "A",
        items: [
        //  { label: "Networking Devices", link: "/mca/cn/u1/u11" },

        ]
      },
      {
        title: "B",
        items: [
        //  { label: "Application Layer", link: "/mca/cn/u2/u11" },
        ]
      },
    ]
  }
]

export const cloudSection = [
  ...cloud1Section,
  ...cloud2Section,
]

export const devopsSection = [
  ...dev1Section,
  ...dev2Section,
]
  
export const devcloudSection = [
  ...cloudSection,
  ...devopsSection,
]