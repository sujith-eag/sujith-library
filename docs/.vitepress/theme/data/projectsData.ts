// .vitepress/theme/components/data/projectsData.ts

export interface Project {
  title: string
  link: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  // {
  //   title: "State Managed Task App",
  //   link: "https://task.sujith-eag.in/",
  //   description: "A MERN Stack application that handles Authentication and User State using Redux Toolkit. Data is stored in MongoDB, hosted on Netlify with a backend on Render.",
  //   tags: ["React", "Redux", "Express.js", "Node.js", "MongoDB"]
  // },
{
  title: "Eagle Tasks: A Production-Grade MERN Application",
  link: "https://task.sujith-eag.in/",
  description: "A MERN task manager architected with a modular, feature-based design for exceptional maintainability and scalability. The backend features a secure RESTful API, JWT authentication, and role-based access control. The frontend is a performant SPA built with React and Vite. State is managed via Redux Toolkit using advanced patterns like optimistic updates for a seamless UI.",
  tags: [
    "React", 
    "Node.js", 
    "Express.js", 
    "Redux Toolkit",
    "MongoDB", 
    "Material-UI (MUI)", 
    "JWT Authentication",
    "REST API"
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