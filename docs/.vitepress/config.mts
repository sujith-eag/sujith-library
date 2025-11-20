import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import { withMermaid } from 'vitepress-plugin-mermaid'

import { cSidebar } from './sidebar/cSidebar'
import { javaSidebar } from './sidebar/javaSidebar'
import { htmlcssSidebar } from './sidebar/htmlcssSidebar'
import { toolsSidebar } from './sidebar/toolsSidebar'
import { dbmsSidebar } from './sidebar/dbmsSidebar'
import { jsdomSidebar } from './sidebar/jsdomSidebar'
import { javascriptSidebar } from './sidebar/jsSidebar'
import { linuxSidebar } from './sidebar/linuxSidebar'
import { osSidebar } from './sidebar/osSidebar'
import { pythonSidebar } from './sidebar/pythonSidebar'
import { reactSidebar } from './sidebar/reactSidebar'
import { mcaSidebar } from './sidebar/mcaSidebar'
import { interviewSidebar } from './sidebar/interviewSidebar'
import { devcloudSidebar } from './sidebar/devcloudSidebar'
import { softwareModelingSidebar } from './sidebar/softwareModelingSidebar'

// https://vitepress.dev/reference/site-config

export default withMermaid(
  defineConfig({

    /* --------------------------------------------------------
     *  Site Identity
     * ------------------------------------------------------*/
    title: "Sujith's Library",
    description: "A curated collection of learning resources and code examples.",
    base: '/',
    cleanUrls: true,
    ignoreDeadLinks: true,

    /* --------------------------------------------------------
     *  SEO: Sitemap & Head Meta Tags + Analytics
     * ------------------------------------------------------*/
    sitemap: {
      hostname: 'https://sujith-eag.in'
    },

    head: [
      // Favicon
      ['link', { rel: 'icon', href: '/logo/logo.png' }],
      ['link', { rel: 'shortcut icon', href: '/logo/logo.png', type: 'image/png' }],

      // Social sharing metadata
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'en' }],
      ['meta', { property: 'og:site_name', content: "Sujith's Library" }],
      ['meta', { property: 'og:image', content: '/logo/logo.png' }],

      // Analytics
      [
        'script',
        {
          'data-goatcounter': 'https://sujith.goatcounter.com/count',
          src: '//gc.zgo.at/count.js',
          async: 'true'
        }
      ]
    ],

    /* --------------------------------------------------------
     *  Markdown Settings
     * ------------------------------------------------------*/
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      },
      lineNumbers: true,
      config: (md) => {
        md.use(katex)
      }
    },

    /* --------------------------------------------------------
     *  Vite Configuration
     * ------------------------------------------------------*/
    vite: {
      optimizeDeps: {
        include: ['mermaid']
      },
      ssr: {
        noExternal: ['mermaid', 'vitepress-plugin-mermaid']
      }
    },

    /* --------------------------------------------------------
     *  Theme Configuration: Navbar, Sidebar, Outline
     * ------------------------------------------------------*/
    themeConfig: {
      logo: '/logo/logo.png',

      /* Navigation Menu */
      nav: [
        { text: 'Home', link: '/' },

        /* Programming Languages */
        {
          text: 'Languages',
          items: [
            { text: 'C', link: '/c/' },
            { text: 'Java', link: '/java/' },
            { text: 'Python', link: '/python/' }
          ]
        },

        /* Web Development */
        {
          text: 'Web Dev',
          items: [
            { text: 'HTML & CSS', link: '/html/' },
            { text: 'JavaScript', link: '/java-script/' },
            { text: 'JavaScript DOM', link: '/java-script-dom/' },
            { text: 'React', link: '/react/' }
          ]
        },

        /* CS Core Subjects */
        {
          text: 'Computer Science',
          items: [
            { text: 'Operating Systems', link: '/os/' },
            { text: 'Databases (DBMS)', link: '/dbms/' },
            { text: 'Software Modeling', link: '/software-modeling/' },
            { text: 'DSA / LeetCode', link: '/leetcode/' }
          ]
        },

        /* Tools, Platforms, Extra */
        {
          text: 'Platforms',
          items: [
            { text: 'Linux', link: '/linux/' },
            { text: 'Tools & Git', link: '/tools/' },
            { text: 'Dev Cloud', link: '/dev-cloud/' }
          ]
        },

        /* Academics / University */
        {
          text: 'Academics',
          items: [
            { text: 'MCA', link: '/mca/' }
          ]
        }
      ],

      /* Sidebar groups */
      sidebar: {
        '/c/': cSidebar(),
        '/css/': htmlcssSidebar(),
        '/linux/bash/': linuxSidebar(),
        '/dbms/': dbmsSidebar(),
        '/html/': htmlcssSidebar(),
        '/java/': javaSidebar(),
        '/java-script/': javascriptSidebar(),
        '/java-script-dom/': jsdomSidebar(),
        '/linux/': linuxSidebar(),
        '/mca/': mcaSidebar(),
        '/os/': osSidebar(),
        '/python/': pythonSidebar(),
        '/react/': reactSidebar(),
        '/tools/': toolsSidebar(),
        '/leetcode/': interviewSidebar(),
        '/dev-cloud/': devcloudSidebar(),
        '/software-modeling/': softwareModelingSidebar
      },

      /* Page structure */
      outline: {
        level: [2, 6]
      },

      /* Search */
      search: {
        provider: 'local',
        options: {
          detailedView: true
        }
      },

      // editLink: {
      //   pattern: 'https://github.com/sujith-eag/vu-library/edit/main/docs/:path',
      //   text: 'Edit this page on Github'
      // },

      /* Footer */
      footer: {
        message: 'Made with ❤️ for students, by a fellow learner.',
        copyright: `© ${new Date().getFullYear()} Sujith.`
      },

      /* Last updated timestamp */
      lastUpdated: {
        text: 'Updated on',
        formatOptions: {
          dateStyle: 'long'
        }
      },

      /* Social icons */
      socialLinks: [
        { icon: 'github', link: 'https://github.com/sujith-eag/' },
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/sujith-eag' }
      ]
    }
  })
)
