<template>
  <div class="projects-grid">
    <a 
      v-for="project in projects" 
      :key="project.title" 
      :href="project.link" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="project-card"
    >
      <div class="project-content">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="tags-container">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { projects } from '../data/projectsData.ts';
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  display: flex; /* Changed to flex for better internal alignment */
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.project-card:hover,
.project-card:focus-visible {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  border-color: var(--vp-c-brand-1);
}

.project-card:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.project-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Ensures footer (tags) stays at the bottom */
}

.project-content h3 {
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  line-height: 1.4;
}

.project-content p {
  margin: 0 0 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  flex-grow: 1; /* Pushes tags to the bottom */
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto; /* Aligns tags to the bottom */
}

.tag {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.25rem 0.6rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>