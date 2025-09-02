<template>
  <div class="card book-card">
    <img class="book-image" :src="img" :alt="title" loading="lazy" />
    <div class="book-info">
      <h3>{{ title }}</h3>
      <p class="book-meta"><strong>Author:</strong> {{ author }}</p>
      <p class="book-meta"><strong>Year:</strong> {{ year }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: String,
  title: String,
  author: String,
  year: String,
});
</script>

<style scoped>
.book-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.book-image {
  width: 80px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}

.book-info {
  display: flex;
  flex-direction: column;
}

.book-info h3 {
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

.book-meta {
  margin: 0.1rem 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>