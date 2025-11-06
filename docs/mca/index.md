---
layout: home
title: MCA Section
hero:
  name: MCA Section
  # text: Learn about various subjects
  tagline: Subject Notes, Practice Codes, Previous QP & Solutions
  image:
    src: /logo/terminal.svg
    alt: Code logo
  actions:
  - theme: alt
    text: Timetable
    link: https://task.sujith-eag.in/timetable
    
---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/mcaResources.ts'

import { mca1Section, mca2Section, mca3Section } from '@theme/data/fileStructures/mcaSections.ts'

</script>

## Third Semester

<CollapsibleList :sections="mca3Section" />


## Second Semester

<CollapsibleList :sections="mca2Section" />


## First Semester

<CollapsibleList :sections="mca1Section" />

___


<h3>Resource Links</h3>

<div class="book-container">
  <ResourceCard
    v-for="(resource, index) in resourcesUsed"
    :key="index"
    v-bind="resource"
  />
</div>

<!-- <h3>Text Books Recommended</h3> -->

<!-- <div class="book-container">

  <template v-for="(book, index) in booksPending" :key="index">
    <BookCard v-bind="book" />
  </template>

</div> -->
