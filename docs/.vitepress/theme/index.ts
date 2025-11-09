// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BookCard from './components/BookCard.vue'
import ProfilePage from './components/ProfilePage.vue'
import ProjectsShowcase from './components/ProjectsShowcase.vue'
import 'katex/dist/katex.min.css'

import './style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('BookCard', BookCard)
    app.component('ProfilePage', ProfilePage)
    app.component('ProjectsShowcase', ProjectsShowcase)
  }
} satisfies Theme

