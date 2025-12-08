// .vitepress/theme/components/data/profileData.ts

interface Link {
  text: string;
  url: string;
  icon: string;
}

interface ListItem {
  title: string;
  details: string | string[];
}

interface Section {
  title: string;
  type: 'links' | 'list' | 'paragraph';
  items?: Link[] | ListItem[];
  content?: string;
}

export const profileData = {
  personal: {
    name: "Sujith Kumar",
    avatar: "/sujith_1.jpg",
    tagline: "Full-stack Developer | Cyber Security Enthusiast",
    bio: "A practical and driven professional with a strong foundation in computer science and a passion for continuous learning. Experienced in teaching, tech integration, and web development, with a focus on real-world application, digital security, and open-source collaboration."
  },
  sections: [
    {
      title: "💼 Links",
      type: "links",
      items: [
        { text: "GitHub", url: "https://github.com/sujith-eag", icon: "/logo/github-w.svg" },
        { text: "LinkedIn", url: "https://linkedin.com/in/sujith-eag", icon: "/logo/linkedin_c.svg" },
        { text: "Email", url: "mailto:sujith.eag@gmail.com", icon: "/logo/gmail.svg" },
        { text: "Resume", url: "/sujith_resume.pdf", icon: "/logo/resume.svg" },
      ]
    },
    {
      title: "📚 Publications & Case Studies",
      type: "list",
      items: [
        { title: '"Beyond Traditional Cryptography: An Adaptive Chaos-Based Encryption..."', details: "2nd National Level Student Research Conference (SRC-2025), Dayananda Sagar College." },
        { title: '"Zero Trust Enforcement Through NGFW and Deception..."', details: "Upcoming publication on Zero Trust Networks for Intrusion Detection & Prevention." },
        { title: '"Coordinated Web Attacks: A Chained Threat Vector"', details: "Case Study Presentation at MSRIT on a large-scale attack involving JavaScript injections, TDS, and malware loaders." },
        { title: '"Cryptography Through Graph Structures: A Study of RSA and ECC"', details: "Case Study Presentation at MSRIT." }
      ]
    },
        {
      title: "🏆 Technical Skills",
      type: "list",
      items: [
        { title: "Languages:", details: ["Java", "Python", "TypeScript", "JavaScript", "C", "Bash"] },
        { title: "Web & Data:", details: ["React.js", "Vue.js", "Express", "Next.js", "Redux", "MongoDB", "SQL"] },
        { title: "Tools & Platforms:", details: ["GitHub", "Node.js", "Arduino", "VS Code", "IntelliJ", "Obsidian", "LaTeX"] }
      ]
    },
    {
      title: "🛠 Workshops & Trainings",
      type: "list",
      items: [
        { title: "IoT 4.0: Internet of Things in Industry, Healthcare and Smart Cities", details: "Attended a 3-day hands-on workshop on IoT systems, working with Arduino, NodeMCU, and various sensors. Implemented internet-connected automation using Python scripting." }
      ]
    },
    {
      title: "🎓 Education",
      type: "list",
      items: [
        { title: "MCA, Ramaiah Institute of Technology (VTU)", details: "CGPA: 9.66 (Dec 2024 – May 2026)" },
        { title: "B.Ed, Sri Kongadiyappa College (BNU)", details: "CGPA: 8.86 (Aug 2018 – Nov 2020)" },
        { title: "B.Sc (PCM), Sri Kongadiyappa College (BU)", details: "Percentage: 56.3% (Mar 2011 – May 2014)" },
      ]
    },
    {
      title: "💼 Experience",
      type: "list",
      items: [
        { title: "Administrative and Teaching Faculty, Geethanjali Public School", details: "Taught Science and Mathematics, integrating digital tools to enhance learning. Led the transition to Google Workspace for Education, trained staff, and developed the school's website. Designed and managed a digital fee-entry and student data system, improving administrative efficiency." },
        { title: "Sadhanapada Program Participant, Isha Foundation", details: "Participated in an intensive 10-month advanced yoga training program. Volunteered in event coordination and execution, enhancing focus, discipline, and leadership abilities." }
      ]
    },
    // {
    //   title: "🏆 Achievements & Extra-Curriculars",
    //   type: "list",
    //   items: [
    //     { title: "Winner of Technical Quiz", details: "Conducted by the MCA Coding Club (January 2025)." },
    //     { title: "40th State Rank in PGCET", details: "Exam conducted by KSEEB (August 2024)." },
    //     { title: "Best Teacher Award (District Level)", details: "Awarded by the Karnataka State School and Colleges Administration Committee (October 2022)." },
    //     { title: "Qualified Teacher Eligibility Test (TET)", details: "Achieved a qualification rate of 1 in 100 (November 2022)." }
    //   ]
    // },
    // {
    //   title: "📂 Projects",
    //   type: "list",
    //   items: [
    //     { title: "Task/Note App (React.js, Redux, Express.js)", details: "Building a full-stack app with JWT-based authentication and Redux for state management. Features a secure REST API backend with Express, MongoDB, bcrypt, and JWT." },
    //     { title: "Sujith’s Library (Vue.js, VitePress)", details: "Created and maintaining an open-source documentation site with 600+ pages on programming concepts. Built with Vue.js and TypeScript, deployed via GitHub Actions." },
    //     { title: "Note’s Library (Hugo, GitHub Pages)", details: "Developed a personal knowledge base on programming concepts using the Hugo framework. Deployed on GitHub Pages with a user-friendly catalog site for easy navigation." }
    //   ]
    // },
  ]
};