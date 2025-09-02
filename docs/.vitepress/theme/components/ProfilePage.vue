<template>
  <div class="profile-container">
    <div class="profile-card">
      <div class="image-name-card">
        <img :src="profileData.personal.avatar" :alt="profileData.personal.name" class="avatar" />
        <div>
          <h1>{{ profileData.personal.name }}</h1>
          <p class="tagline">{{ profileData.personal.tagline }}</p>
        </div>
      </div>

      <p class="bio">{{ profileData.personal.bio }}</p>

      <div v-for="section in profileData.sections" :key="section.title" class="section-card">
        <h3>{{ section.title }}</h3>
        
        <div v-if="section.type === 'links'" class="info-list">
          <a v-for="link in section.items" :key="link.text" :href="link.url" target="_blank" rel="noopener noreferrer">
            <img :src="link.icon" :alt="link.text" /> {{ link.text }}
          </a>
        </div>

        <ul v-else-if="section.type === 'list'" class="content-list">
          <li v-for="item in section.items" :key="item.title">
            <b>{{ item.title }}</b>
            <div v-if="Array.isArray(item.details)" class="skills-container">
              <span v-for="skill in item.details" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
            <span v-else-if="item.details"><br />{{ item.details }}</span>
          </li>
        </ul>

        <p v-else-if="section.type === 'paragraph'">{{ section.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { profileData } from '../data/profileData.ts';
</script>

<style scoped>
/* --- Theming Variables (remains the same) --- */
.profile-container {
  --bg: #f8f9fa;
  --card-bg: #ffffff;
  --section-bg: #f1f1f1;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --link-color: #0077cc;
  --link-hover-bg: #e1effc;
  --divider: #ddd;
  --tag-bg: #e9ecef;
  --tag-text: #495057;
}

html.dark .profile-container {
  --bg: #1e1e1e;
  --card-bg: #2a2a2a;
  --section-bg: #2e2e2e;
  --text-primary: #f1f1f1;
  --text-secondary: #b0b0b0;
  --link-color: #66aaff;
  --link-hover-bg: #3a3a3a;
  --divider: #444;
  --tag-bg: #3a3a3a;
  --tag-text: #ced4da;
}

/* --- General Styles (mostly the same) --- */
.profile-container {
  display: flex;
  justify-content: center;
  padding: 3rem;
  background: var(--bg);
}

.profile-card {
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  border-radius: 12px;
  background: var(--card-bg);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-primary);
}

.image-name-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

h1 { margin: 0; }
.tagline { font-style: italic; color: var(--text-secondary); margin-top: 0.3rem; }
.bio { font-size: 1rem; margin-bottom: 2rem; text-align: center; }

.section-card {
  margin-bottom: 1rem;
  padding: 1.5rem;
  background: var(--section-bg);
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  /* ✨ ADDED: Transition for hover effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* ✨ ADDED: Subtle hover effect for all sections */
.section-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.section-card h3 {
  margin: 0.2rem 0 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid var(--divider);
  padding-bottom: 0.5rem;
}

/* --- Links Section --- */
.info-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-top: 1.4rem;
}

.info-list a {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;
  color: var(--link-color);
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  background: var(--card-bg); /* Use main card bg for contrast */
  border-radius: 8px;
  transition: background 0.2s ease;
}
.info-list a:hover { background: var(--link-hover-bg); }
.info-list img { width: 24px; height: 24px; }
   
/* --- List-based Content --- */
.content-list { list-style: none; padding-left: 0; }
.content-list li { margin-bottom: 0.75rem; line-height: 1.6; }

/* --- ✨ ADDED: New Styles for Skill Tags --- */
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
}

.skill-tag {
  background-color: var(--tag-bg);
  color: var(--tag-text);
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* --- Media Queries (remains the same) --- */
@media (max-width: 600px) {
  .profile-container { padding: 1rem; }
  .image-name-card { flex-direction: column; text-align: center; }
  .avatar { width: 100px; height: 100px; }
  .info-list { justify-content: center; }
  .profile-card { font-size: 0.9rem; }
}
</style>
