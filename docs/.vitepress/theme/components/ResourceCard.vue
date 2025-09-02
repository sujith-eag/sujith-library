<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="card resource-card">
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <span class="resource-link">Visit Resource &rarr;</span>
      <!-- <span class="resource-link">{{ link }}</span> -->
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
});
</script>

<style scoped>
.resource-card {
  text-decoration: none;
  color: inherit;
  transition: border-color 0.3s ease;
}

.resource-card:hover {
  border-color: var(--vp-c-brand-1);
}

.resource-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
  word-break: break-all;
  transition: color 0.3s ease;
}

.resource-card:hover .resource-link {
  color: var(--vp-c-brand-3);
}
</style>

