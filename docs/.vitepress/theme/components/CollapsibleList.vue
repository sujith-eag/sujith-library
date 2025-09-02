<template>
  <div class="collapsible-list-grid">
    <template v-for="(item, index) in sections" :key="index">
      <template v-if="item.label && item.link">
        <a class="collapsible-item-link" :href="item.link">{{ item.label }}</a>
      </template>

      <CollapsibleSection
        v-else-if="item.title && item.items"
        :title="item.title"
        :is-open="openIndices.has(index)"
        @toggle="() => toggle(index)"
      >
        <CollapsibleList :sections="item.items" />
      </CollapsibleSection>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CollapsibleSection from './CollapsibleSection.vue'

defineOptions({ name: 'CollapsibleList' })

defineProps({
  sections: {
    type: Array,
    required: true
  }
})

const openIndices = ref(new Set())

function toggle(index) {
  if (openIndices.value.has(index)) {
    openIndices.value.delete(index)
  } else {
    openIndices.value.add(index)
  }
}
</script>

<style scoped>
.collapsible-list-grid {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 600px) {
  .collapsible-list-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    align-items: start;
  }
}

.collapsible-item-link {
  display: block;
  padding: 0.6rem 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand-1);
  transition: background-color 0.2s, color 0.2s;
}

.collapsible-item-link:hover {
  color: var(--vp-c-brand-3);
  background: var(--vp-c-bg-hover);
}

.collapsible-item-link:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  background-color: var(--vp-c-bg-hover);
}
</style>

