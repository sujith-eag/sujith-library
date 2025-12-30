---
layout: home
title: Project Documentation Hub
hero:
  name: Project Documentation Hub
  text: Comprehensive Resources
  tagline: Technical guides, development blogs, and articles for my projects
  image:
    src: /logo/logo.png
    alt: Sujith's Library

---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'

import { projectsSection } from '@theme/data/fileStructures/projectsSections.ts'

</script>

## 📝 Development Blogs

<CollapsibleList :sections="projectsSection.slice(0, 2)" />

## 🚀 Project Documentations

<CollapsibleList :sections="projectsSection.slice(2)" />

---

*Explore the sidebar for detailed navigation through all content.*