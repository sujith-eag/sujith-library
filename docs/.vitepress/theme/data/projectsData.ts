// .vitepress/theme/components/data/projectsData.ts

export interface Project {
  title: string
  link: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: "State Managed Task App",
    link: "https://task.sujith-eag.in/",
    description: "A MERN Stack application that handles Authentication and User State using Redux Toolkit. Data is stored in MongoDB, hosted on Netlify with a backend on Render.",
    tags: ["React", "Redux", "Express.js", "MongoDB"]
  },
  {
    title: "Library and Portfolio Site",
    link: "https://www.sujith-eag.in/",
    description: "A full-scale library site with over 600 organized pages. Built with Vue.js and VitePress, it includes authentication and is deployed on Netlify.",
    tags: ["Vue.js", "VitePress", "TypeScript"]
  },
  {
    title: "Responsive UI Catalog Site",
    link: "https://sujith-eag.github.io/library/",
    description: "An interactive and responsive catalog for various learning topics, serving as a UI wrapper for the main content library. Built with Hugo.",
    tags: ["Hugo", "UI/UX", "Responsive"]
  },
  {
    title: "Black Jack Card Game",
    link: "https://sujith-eag.github.io/projects/blackjack/index.html",
    description: "A simple Black-Jack game built with vanilla JavaScript to practice game logic and DOM manipulation.",
    tags: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "Rock Paper Scissor Game",
    link: "https://sujith-eag.github.io/projects/rps_game/index.html",
    description: "The classic game with best-of-three logic and a reset feature, demonstrating event handling in JavaScript.",
    tags: ["JavaScript", "Game Logic"]
  },
  {
    title: "Google Page Clone",
    link: "https://sujith-eag.github.io/projects/google_page/index.html",
    description: "A minimal, responsive clone of Google's homepage created to practice advanced CSS Flexbox layouts.",
    tags: ["HTML", "CSS", "Flexbox"]
  }
];