// docs/.vitepress/sidebar/projectsSidebar.ts

export const projectsSidebar = () => [
  {
    text: 'Project Documentation',
    items: [
      { text: 'Overview', link: '/projects/' },
      {
        text: 'Browser & DOM Exploits',
        collapsed: true,
        items: [
          { text: 'Summary: The Hostile DOM', link: '/projects/security_blog/dom_exploits/00-hostile-dom-summary' },
          { text: 'Master Index & Coverage Map', link: '/projects/security_blog/dom_exploits/01-hostile-dom-index' },
          { text: 'Part 1: Browser Architecture & Instrumentation', link: '/projects/security_blog/dom_exploits/deep_dive/02-hostile-dom-architecture' },
          { text: 'Part 2: Visual & UI Deception', link: '/projects/security_blog/dom_exploits/deep_dive/03-hostile-dom-visual-attacks' },
          { text: 'Part 3: Persistence & Background Execution', link: '/projects/security_blog/dom_exploits/deep_dive/04-hostile-dom-persistence' },
          { text: 'Part 4: Code Injection & Execution', link: '/projects/security_blog/dom_exploits/deep_dive/05-hostile-dom-injection' },
          { text: 'Part 5: Credential & Session Theft', link: '/projects/security_blog/dom_exploits/deep_dive/06-hostile-dom-theft' },
          { text: 'Part 6: Permission & Extension Exploitation', link: '/projects/security_blog/dom_exploits/deep_dive/07-hostile-dom-extensions' },
          { text: 'Part 7: Fingerprinting & Tracking', link: '/projects/security_blog/dom_exploits/deep_dive/08-hostile-dom-fingerprinting' },
          { text: 'Part 8: Advanced Attack Vectors', link: '/projects/security_blog/dom_exploits/deep_dive/09-hostile-dom-advanced' },
          { text: 'Part 9: Spectre & Meltdown Attacks', link: '/projects/security_blog/dom_exploits/deep_dive/10_spectre_meltdown' }
        ]
      },
      {
        text: 'Sujith\'s Library',
        collapsed: true,
        items: [
        //   { text: 'Setup & Installation', link: '/projects/sujith-library/setup' },
        //   { text: 'Contributing Guide', link: '/projects/sujith-library/contributing' },
        //   { text: 'Architecture Overview', link: '/projects/sujith-library/architecture' },
        //   { text: 'Deployment Guide', link: '/projects/sujith-library/deployment' },
          {
            text: 'Development Blog',
            collapsed: true,
            items: [
            //   { text: 'Building a Knowledge Platform: The Beginning', link: '/projects/sujith-library/blog/knowledge-platform-beginning' },
            //   { text: 'Choosing VitePress for Static Site Generation', link: '/projects/sujith-library/blog/vitepress-choice' },
            //   { text: 'Content Organization & Markdown Workflow', link: '/projects/sujith-library/blog/content-organization' },
            //   { text: 'Performance Optimization Strategies', link: '/projects/sujith-library/blog/performance-optimization' },
            //   { text: 'SEO & Accessibility Implementation', link: '/projects/sujith-library/blog/seo-accessibility' },
            //   { text: 'GitHub Actions & Automated Deployment', link: '/projects/sujith-library/blog/github-actions-deployment' },
            //   { text: 'Scaling to 800+ Pages: Lessons Learned', link: '/projects/sujith-library/blog/scaling-lessons' }
            ]
          }
        ]
      },
      {
        text: 'Eagle Campus',
        collapsed: true,
        items: [
          { text: 'Overview & Features', link: '/projects/eagle-campus/blog/01-introduction-to-eagle-campus' },
          { text: 'Security first Architecture', link: '/projects/eagle-campus/blog/02-security-first-architecture' },
          { text: 'Student Project Platform', link: '/projects/eagle-campus/blog/03-student-project-platform' },
        //   { text: 'Admin Guide', link: '/projects/eagle-campus/admin-guide' },
        //   { text: 'API Documentation', link: '/projects/eagle-campus/api' },
        //   { text: 'Deployment Guide', link: '/projects/eagle-campus/deployment' },
        //   { text: 'Contributing', link: '/projects/eagle-campus/contributing' },
          // {
          //   text: 'Development Blog',
          //   collapsed: true,
          //   items: [
          //   //   { text: 'From Concept to College Management Platform', link: '/projects/eagle-campus/blog/concept-to-platform' },
            //   { text: 'Building the MERN Architecture', link: '/projects/eagle-campus/blog/mern-architecture' },
            //   { text: 'Implementing Real-Time Features with Socket.IO', link: '/projects/eagle-campus/blog/realtime-features' },
            //   { text: 'Role-Based Access Control Implementation', link: '/projects/eagle-campus/blog/rbac-implementation' },
            //   { text: 'AWS Deployment & Scaling Challenges', link: '/projects/eagle-campus/blog/aws-deployment' },
            //   { text: 'User Experience Design Decisions', link: '/projects/eagle-campus/blog/ux-design' },
            //   { text: 'Production Launch & User Feedback', link: '/projects/eagle-campus/blog/production-launch' }
            // ]
          // }
        ]
      },
      {
        text: 'Agentic Workstation',
        collapsed: true,
        items: [
        //   { text: 'Getting Started', link: '/projects/agentic-workstation/getting-started' },
        //   { text: 'Architecture Overview', link: '/projects/agentic-workstation/architecture' },
        //   { text: 'CLI Usage Guide', link: '/projects/agentic-workstation/cli-guide' },
        //   { text: 'Flow Engineering', link: '/projects/agentic-workstation/flow-engineering' },
        //   { text: 'Multi-Agent Orchestration', link: '/projects/agentic-workstation/multi-agent' },
        //   { text: 'API Documentation', link: '/projects/agentic-workstation/api' },
        //   { text: 'Contributing', link: '/projects/agentic-workstation/contributing' },
          {
            text: 'Development Blog',
            collapsed: true,
            items: [
            //   { text: 'The Vision: Solving AI Context Drift', link: '/projects/agentic-workstation/blog/vision' },
            //   { text: 'Flow Engineering Fundamentals', link: '/projects/agentic-workstation/blog/flow-engineering-basics' },
            //   { text: 'Building the Multi-Agent Architecture', link: '/projects/agentic-workstation/blog/multi-agent-architecture' },
            //   { text: 'Zero-Infrastructure Design Decisions', link: '/projects/agentic-workstation/blog/zero-infrastructure' },
            //   { text: 'Quality Gating & Audit Trail Implementation', link: '/projects/agentic-workstation/blog/quality-gating' },
            //   { text: 'Production Deployment Challenges', link: '/projects/agentic-workstation/blog/production-deployment' },
            //   { text: 'Lessons Learned & Future Roadmap', link: '/projects/agentic-workstation/blog/lessons-learned' }
            ]
          }
        ]
      },
    ]
  }
];