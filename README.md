# 📚 Sujith's Library

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.3+-blue)](https://vitepress.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)

An open-source knowledge base and portfolio site built with VitePress, featuring comprehensive notes on computer science and software engineering topics. This extensive personal knowledge management system is meticulously organized into over 800+ pages, leveraging Static Site Generation (SSG) for blazing-fast, secure, and SEO-optimized performance. This project aims to create a collaborative resource where developers, students, and educators can contribute and learn together.

🌐 **[Live Demo](https://sujith-eag.in)** | 📖 **[Documentation](https://sujith-eag.in/projects/)**

## ✨ Features

- **📖 Comprehensive Content**: Detailed notes on programming languages, algorithms, system design, and more
- **🎨 Interactive Diagrams**: Mermaid.js powered flowcharts, sequence diagrams, and visualizations
- **📐 Math Support**: KaTeX integration for mathematical equations and formulas
- **🌙 Theme Aware**: Automatic light/dark mode support with custom theming
- **🔍 Search Functionality**: Built-in search across all documentation
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **🚀 Fast Performance**: VitePress powered static site generation
- **🤝 Community Driven**: Open source with contributions welcome

## 🎯 Topics Covered

| Category | Topics |
|----------|--------|
| **Programming Languages** | C, Java, JavaScript, Python |
| **Computer Science** | Data Structures, Algorithms, Operating Systems |
| **Databases** | SQL, Database Management Systems |
| **Web Development** | HTML, CSS, JavaScript DOM |
| **DevOps & Cloud** | Cloud platforms, Development tools |
| **And More** | System Design, Best Practices, Tutorials |

## Vision

This project started as a personal collection of notes and code examples gathered during learning from various courses and resources. The vision is to build a comprehensive, community-driven knowledge base that serves as a valuable reference for anyone studying computer science and software development. By making it open source, we hope to foster collaboration and continuous improvement of the content, with a focus on real-world application, digital security, and open-source collaboration.

## Effort and Community

Built through dedicated note-taking, hands-on coding, and debugging sessions, this library represents significant effort in organizing and structuring complex technical concepts. Now open to the community, we welcome contributions that help expand and improve this resource for everyone.

## Evolution from Previous Version

This project evolved from an earlier version built with Hugo. The previous site served as a valuable learning experience but was limited in terms of customization and modern web development practices. The current VitePress-based site addresses these shortcomings with improved performance, better documentation features, and easier maintenance.

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| [VitePress](https://vitepress.dev/) | Static site generator framework |
| TypeScript | Configuration and utilities |
| Vue.js | UI components and theme customization |
| [Mermaid.js](https://mermaid.js.org/) | Diagrams via `vitepress-plugin-mermaid` |
| [KaTeX](https://katex.org/) | Math rendering via `markdown-it-katex` |

## 📁 Project Structure

```
vu-library/
├── docs/                          # All Markdown content
│   ├── .vitepress/                # Site configuration and theme
│   ├── c/                         # C programming
│   ├── java/                      # Java programming
│   ├── java-script/               # JavaScript
│   ├── python/                    # Python
│   ├── os/                        # Operating Systems
│   ├── dbms/                      # Database Management
│   └── dev-cloud/                 # Cloud & DevOps
├── public/                        # Static assets (images, logos)
├── package.json                   # Dependencies and scripts
├── CONTRIBUTING.md                # Contribution guidelines
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sujith-eag/sujith-library.git
cd sujith-library

# Install dependencies
npm ci
```

### Development

```bash
# Start local dev server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

> **Note:** The build script uses `node --max-old-space-size=4096` for handling large builds.

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing a typo, adding new content, or improving the site's functionality, your help is appreciated.

For detailed guidelines on contributing, including content formatting standards and development setup, please see our [Contributing Guide](CONTRIBUTING.md).

## 📈 Roadmap

- [ ] Add more programming languages (Go, Rust, etc.)
- [ ] Expand system design and architecture content
- [ ] Include interactive coding examples
- [ ] Add video tutorials and screencasts
- [ ] Implement user feedback system
- [ ] Create contributor spotlight section

## 📞 Support & Contact

- 📧 **Email**: [sujith.eag@gmail.com](mailto:sujith.eag@gmail.com)
- 💼 **LinkedIn**: [Sujith Kumar](https://linkedin.com/in/sujith-eag)
- 🐛 **Issues**: [GitHub Issues](https://github.com/sujith-eag/sujith-library/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/sujith-eag/sujith-library/discussions)

## 🙏 Acknowledgments

Special thanks to all contributors and the open-source community for making this project possible. This library builds upon the excellent work of VitePress, Mermaid.js, and other amazing tools.

## 📄 License

© 2025 Sujith Kumar. Made with ❤️ for learning and sharing knowledge.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
