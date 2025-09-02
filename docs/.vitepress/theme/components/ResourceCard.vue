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
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.resource-card:hover,
.resource-card:focus-visible {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.resource-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
  word-break: break-all;
  transition: color 0.3s ease;
}

.resource-card:hover .resource-link,
.resource-card:focus-visible .resource-link {
  color: var(--vp-c-brand-3);
}

</style>

