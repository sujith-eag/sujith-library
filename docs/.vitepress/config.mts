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
    title: "Sujith's Library",
    description: "A curated collection of learning resources and code examples.",

    // Catch broken links during the build process
    ignoreDeadLinks: true,
    base: '/',
    cleanUrls: true,

    // Add sitemap for SEO
    sitemap: {
      hostname: 'https://sujith-eag.in'
    },

    vite: {
      optimizeDeps: {
        include: ['mermaid']
      },
      ssr: {
        noExternal: ['mermaid', 'vitepress-plugin-mermaid']
      }
    },

    head: [
      // Favicon
      ['link', { rel: 'icon', href: '/logo/logo.png' }],
      ['link', { rel: 'shortcut icon', href: '/logo/logo.png', type: 'image/png' }],

      // Social media meta tags for better link sharing
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'en' }],
      ['meta', { property: 'og:site_name', content: "Sujith's Library" }],
      ['meta', { property: 'og:image', content: '/logo/logo.png' }],

      [
        'script',
        {
          'data-goatcounter': 'https://sujith.goatcounter.com/count',
          src: '//gc.zgo.at/count.js',
          async: 'true'
        }
      ]
    ],

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

    themeConfig: {
      logo: '/logo/logo.png',

      nav: [
        { text: 'Home', link: '/' },
        {
          text: 'Languages',
          items: [
            { text: 'Java', link: '/java/' },
            { text: 'Python', link: '/python/' },
            { text: 'C', link: '/c/' }
          ]
        },
        {
          text: 'Web Dev',
          items: [
            { text: 'JavaScript', link: '/java-script/' },
            { text: 'JavaScript DOM', link: '/java-script-dom/' },
            { text: 'React', link: '/react/' },
            { text: 'HTML & CSS', link: '/html/' }
          ]
        },
        {
          text: 'CS Fundamentals',
          items: [
            { text: 'Operating Systems', link: '/os/' },
            { text: 'Databases (DBMS)', link: '/dbms/' },
            { text: 'Software Modeling', link: '/software-modeling/' },
            { text: 'DSA Problems', link: '/leetcode/' }
          ]
        },
        {
          text: 'More',
          items: [
            { text: 'Linux', link: '/linux/' },
            { text: 'Tools & Git', link: '/tools/' },
            { text: 'MCA', link: '/mca/' }
          ]
        }
      ],

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

      outline: {
        level: [2, 6]
      },

      // Enable detailed view for local search
      search: {
        provider: 'local',
        options: {
          detailedView: true
        }
      },

      // Edit link (currently disabled)
      // editLink: {
      //   pattern: 'https://github.com/sujith-eag/vu-library/edit/main/docs/:path',
      //   text: 'Edit this page on Github'
      // },

      footer: {
        message: 'Made with ❤️ for students, by a fellow learner.',
        copyright: `© ${new Date().getFullYear()} Sujith.`
      },

      lastUpdated: {
        text: 'Updated on',
        formatOptions: {
          dateStyle: 'long'
        }
      },

      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/sujith-eag/'
        },
        {
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/sujith-eag'
        }
      ]
    }
  })
)