---
layout: home
title: DevOps & Cloud
hero:
  name: Devops & Cloud
#   text: Basics of DevOps and Cloud Concepts for 
  tagline: Basics of DevOps and Cloud Concepts for Curated from multiple sources
  image:
    src: /logo/cloud_dev.svg
    alt: Cloud logo
    
---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/devcloudResources.ts'

import { cloudSection, devopsSection } from '@theme/data/fileStructures/devcloudSections.ts'

</script>

## Cloud Topics
 
<CollapsibleList :sections="cloudSection" />


## DevOps Topics
 
<CollapsibleList :sections="devopsSection" />

___

<h3>Books Reffered to learn</h3>

<div class="book-container">
  <template v-for="(book, index) in booksUsed" :key="index">
    <BookCard v-bind="book" />
  </template>
</div>

<h3>Books yet to be Completed</h3>

<div class="book-container">
  <template v-for="(book, index) in booksPending" :key="index">
    <BookCard v-bind="book" />
  </template>
</div>

<!-- <div class="book-container">
  <ResourceCard
    v-for="(resource, index) in resourcesUsed"
    :key="index"
    v-bind="resource"
  />
</div> -->


