// .vitepress/theme/components/data/projectsData.ts

export interface Project {
  title: string
  link: string
  description: string
  tags: string[]
}

export const projects: Project[] = [

  {
  title: "Eagle Campus: Full-Stack College Management & Productivity Platform",
  link: "https://task.sujith-eag.in/",
  description: "A Production-Grade MERN application. An all-in-one platform designed for the modern educational institution. Teachers can manage classes and track attendance in real-time, students can engage with their coursework and provide feedback, and administrators have a complete toolkit to manage the entire academic structure. Beyond the campus, every user gets a powerful suite of personal productivity tools, including an AI-powered planner, secure file sharing, and instant messaging.",
  tags: [
    "React", 
    "Node.js", 
    "Express.js", 
    "Redux Toolkit",
    "Socket.IO",
    "MongoDB", 
    "Material-UI (MUI)", 
    "JWT Authentication",
    "REST API",
    "AWS S3, EC2",
    "Role-Based Access Control (RBAC)"
    ]
  },
  {
    title: "Sujith's Library: A High-Performance Knowledge Platform",
    link: "https://www.sujith-eag.in/",
    description: "An extensive personal knowledge management system and portfolio, meticulously organized into over 800 pages. This project leverages the power of Static Site Generation (SSG) using Vue.js and VitePress, resulting in a blazing-fast, secure, and SEO-optimized user experience. It features a robust, Markdown-based content workflow.",
    tags: ["Vue.js", "VitePress", "TypeScript", "Static Site Generation (SSG)", "Jamstack"]
  },
  // {
  //   title: "Responsive UI Catalog Site",
  //   link: "https://sujith-eag.github.io/library/",
  //   description: "An interactive and responsive catalog for various learning topics, serving as a UI wrapper for the main content library. Built with Hugo.",
  //   tags: ["Hugo", "UI/UX", "GitHub Actions"]
  // },
  // {
  //   title: "Black Jack Card Game",
  //   link: "https://sujith-eag.github.io/projects/blackjack/index.html",
  //   description: "A simple Black-Jack game built with vanilla JavaScript to practice game logic and DOM manipulation.",
  //   tags: ["JavaScript", "HTML", "CSS"]
  // },
  // {
  //   title: "Rock Paper Scissor Game",
  //   link: "https://sujith-eag.github.io/projects/rps_game/index.html",
  //   description: "The classic game with best-of-three logic and a reset feature, demonstrating event handling in JavaScript.",
  //   tags: ["JavaScript", "Game Logic"]
  // },
  // {
  //   title: "Google Page Clone",
  //   link: "https://sujith-eag.github.io/projects/google_page/index.html",
  //   description: "A minimal, responsive clone of Google's homepage created to practice advanced CSS Flexbox layouts.",
  //   tags: ["HTML", "CSS", "Flexbox"]
  // }
];