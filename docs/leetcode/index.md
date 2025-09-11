---
layout: home
title: LeetCode & System Design
hero:
  name: LeetCode & System Design
  # text: Learn about various subjects
  tagline: Problem Solving and Interview Preparation 
  image:
    src: /logo/leetcode_p.svg
    alt: LeetCode logo

---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed } from '@theme/data/resources/interviewResources.ts'

import { interviewSection } from '@theme/data/fileStructures/interviewSections.ts'

</script>

## LeetCode Problems
 
<CollapsibleList :sections="interviewSection" />
Check out the books on react which were really helpful
___
 
<h3>Resource Links</h3>

<div class="book-container">
  <ResourceCard
    v-for="(resource, index) in resourcesUsed"
    :key="index"
    v-bind="resource"
  />
</div>

<h3>Books Used</h3>

<div class="book-container">
  <template v-for="(book, index) in booksUsed" :key="index">
    <BookCard v-bind="book" />
  </template>
</div>

<h3>Books Still to be Read</h3>

<div class="book-container">
  <template v-for="(book, index) in booksPending" :key="index">
    <BookCard v-bind="book" />
  </template>
</div>

