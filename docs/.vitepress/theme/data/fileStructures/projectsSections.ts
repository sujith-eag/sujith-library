// Individual content sections for modularity and easy maintenance

// Security Blog
export const securityBlog = {
  title: 'Security Blog',
  items: [
    {
      title: 'DOM Exploits',
      items: [
        { label: 'The Hostile DOM', link: '/projects/blogs/security/dom_exploits/00-hostile-dom-summary' },
        {
          title: 'Deep Dive',
          items: [
            { label: 'Master Index & Coverage Map', link: '/projects/blogs/security/dom_exploits/01-hostile-dom-index' },
            { label: 'Part 1: Browser Architecture & Instrumentation', link: '/projects/blogs/security/dom_exploits/deep_dive/02-hostile-dom-architecture' },
            { label: 'Part 2: Visual & UI Deception', link: '/projects/blogs/security/dom_exploits/deep_dive/03-hostile-dom-visual-attacks' },
            { label: 'Part 3: Persistence & Background Execution', link: '/projects/blogs/security/dom_exploits/deep_dive/04-hostile-dom-persistence' },
            { label: 'Part 4: Code Injection & Execution', link: '/projects/blogs/security/dom_exploits/deep_dive/05-hostile-dom-injection' },
            { label: 'Part 5: Credential & Session Theft', link: '/projects/blogs/security/dom_exploits/deep_dive/06-hostile-dom-theft' },
            { label: 'Part 6: Permission & Extension Exploitation', link: '/projects/blogs/security/dom_exploits/deep_dive/07-hostile-dom-extensions' },
            { label: 'Part 7: Fingerprinting & Tracking', link: '/projects/blogs/security/dom_exploits/deep_dive/08-hostile-dom-fingerprinting' },
            { label: 'Part 8: Advanced Attack Vectors', link: '/projects/blogs/security/dom_exploits/deep_dive/09-hostile-dom-advanced' },
            { label: 'Part 9: Spectre & Meltdown Attacks', link: '/projects/blogs/security/dom_exploits/deep_dive/10_spectre_meltdown' }
          ]
        }
      ]
    },

    {
      title: 'Security Architecture',
      items: [
        { label: 'Overview', link: '/projects/blogs/security/security_architecture/00_overview' },
        { label: 'Foundation', link: '/projects/blogs/security/security_architecture/1_foundation' },
        { label: 'Prevention & IAM', link: '/projects/blogs/security/security_architecture/2_prevention_iam' },
        { label: 'Endpoint & Network', link: '/projects/blogs/security/security_architecture/3_endpoint_network' },
        { label: 'Application & Data', link: '/projects/blogs/security/security_architecture/4_application_data' },
        { label: 'Detection & Response', link: '/projects/blogs/security/security_architecture/5_detection_response' }
      ]
    }
  ]
};

// Articles
export const articles = {
  title: 'Articles',
  items: [
    //   { label: 'All Articles', link: '/projects/articles/' },
    //   { label: 'Contributing to Open Source Guide', link: '/projects/articles/contributing-to-open-source-guide' },
  ]
};

// Project-specific blogs
export const eagleCampusBlogs = {
  title: 'Eagle Campus',
  items: [
    { label: 'Introduction to Eagle Campus', link: '/projects/blogs/eagle-campus/01-introduction-to-eagle-campus' },
    { label: 'Security First Architecture', link: '/projects/blogs/eagle-campus/02-security-first-architecture' },
    { label: 'Student Project Platform', link: '/projects/blogs/eagle-campus/03-student-project-platform' }
  ]
};

export const agenticWorkstationBlogs = {
  title: 'Agentic Workstation',
  items: [
    //   { label: 'The Vision: Solving AI Context Drift', link: '/projects/blogs/agentic-workstation/vision' },
  ]
};

export const sujithLibraryBlogs = {
  title: 'Sujith\'s Library',
  items: [
    { label: 'Building a Knowledge Platform: The Beginning', link: '/projects/blogs/sujith-library/knowledge-platform-beginning' },
    { label: 'Choosing VitePress for SSG', link: '/projects/blogs/sujith-library/vitepress-choice' },
    { label: 'Content Organization & Markdown Workflow', link: '/projects/blogs/sujith-library/content-organization' },
  ]
};

// Project-specific docs
export const eagleCampusDocs = {
  title: 'Eagle Campus',
  items: [
    //   { label: 'Getting Started', link: '/projects/docs/eagle-campus/getting-started' },

  ]
};

export const agenticWorkstationDocs = {
  title: 'Agentic Workstation',
  items: [
    //   { label: 'Getting Started', link: '/projects/docs/agentic-workstation/getting-started' },
  ]
};

export const sujithLibraryDocs = {
  title: 'Sujith\'s Library',
  items: [
    //   { label: 'Setup Guide', link: '/projects/docs/sujith-library/setup' },
  ]
};

// Combined project sections
export const eagleCampus = {
  title: 'Eagle Campus',
  items: [
    {
      title: 'Blogs',
      items: eagleCampusBlogs.items
    },
    {
      title: 'Documentation',
      items: eagleCampusDocs.items
    }
  ]
};

export const agenticWorkstation = {
  title: 'Agentic Workstation',
  items: [
    {
      title: 'Blogs',
      items: agenticWorkstationBlogs.items
    },
    {
      title: 'Documentation',
      items: agenticWorkstationDocs.items
    }
  ]
};

export const sujithLibrary = {
  title: 'Sujith\'s Library',
  items: [
    {
      title: 'Blogs',
      items: sujithLibraryBlogs.items
    },
    {
      title: 'Documentation',
      items: sujithLibraryDocs.items
    }
  ]
};

// Combined projectsSection for easy management
// To add a new blog (e.g., architectureBlog), export it above and add to this array.
// To add a new project, create separate blog/doc exports and a combined project export, then add to this array.
export const projectsSection = [
  securityBlog,
  articles,
  eagleCampus,
  agenticWorkstation,
  sujithLibrary
]