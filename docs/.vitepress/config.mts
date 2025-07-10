import { defineConfig } from 'vitepress'

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

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sujith's Library",
  description: "Curated collection of learning resources with examples.",
  ignoreDeadLinks: true,
  base: '/',
  
  cleanUrls: true,  // removing .html
  // appearance: false, // defaults to light, user can still toggle

  head: [
    ['link', { rel: 'icon', href: './logo/logo.png' }]
  ],

  markdown: {
    theme: {
        light: 'github-light',
        dark: 'github-dark'
    },
    lineNumbers: true
  },
    
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo/logo.png',
    // siteTitle: 'This Site',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Java', link: '/java/' },
      { text: 'Python', link: '/python/' },
      // { text: 'C', link: '/c/' },
      { text: 'JS', link: '/java-script/' },
      { text: 'React', link: '/react/'},
      { text: 'Linux', link: '/linux/' },
      { text: 'MCA', link: '/mca/' },
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
      '/tools/': toolsSidebar()
       // need to plan for multiple return functions with collapsed
    },
      
    outline: {
      level: [2, 6],
    },
    
    
    search:{
      provider: 'local' // 'agolia'
    },
    
    footer: {
      message: 'Made with ❤️ for students, by a fellow learner.',
      copyright: '© Sujith.'
    },
    
//    editLink: {
//      pattern: 'https://github.com/sujith-eag/vu-library/edit/main/docs/:path',    
//      text: 'Edit this page on Github' 
//    },
    
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
