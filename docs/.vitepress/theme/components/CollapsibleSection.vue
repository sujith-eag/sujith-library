<template>
  <div class="collapsible-section" :class="{ 'is-open': isOpen }">
    <button 
      @click="emit('toggle')" 
      class="collapsible-btn" 
      :class="{ open: isOpen }"
      :aria-expanded="isOpen">
      <span class="title">{{ title }}</span>
      
      <span class="chevron" :class="{ open: isOpen }">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </span>
    </button>

<transition name="slide" @enter="onEnter" @leave="onLeave" @after-enter="onAfterEnter">
      <div v-if="isOpen" class="collapsible-content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    isOpen: Boolean
  })
  const emit = defineEmits(['toggle'])

  function onEnter(el) {
    el.style.height = 'auto';
    const height = getComputedStyle(el).height;
    el.style.height = 0;
    getComputedStyle(el); 
    setTimeout(() => {
      el.style.height = height;
    });
  }

  function onLeave(el) {
    el.style.height = getComputedStyle(el).height;
    // Force repaint
    getComputedStyle(el);
    setTimeout(() => {
      el.style.height = 0;
    });
  }
  
  function onAfterEnter(el) {
    el.style.height = 'auto';
  }
</script>

<style scoped>
.collapsible-section {
  margin-bottom: 0.3rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  
  position: relative;
  transition: border 0.3s ease, box-shadow 0.3s ease, z-index 0s 0.3s;
}

.collapsible-section.is-open {
  z-index: 10;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.collapsible-btn {
  /* all: unset; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: var(--vp-c-bg-alt);
  font-weight: 600;
  font-size: 1rem;
  color: var(--vp-c-text-1);
  transition: background-color 0.3s ease, color 0.3s ease;
  color: var(--vp-c-text-1);
  /* border-bottom: 1px solid var(--vp-c-border); */
  border-bottom: none;
}

.collapsible-btn.open {
  border-bottom: 1px solid var(--vp-c-border);
}

.collapsible-btn:hover {
  background-color: var(--vp-c-bg-hover);
  color: var(--vp-c-brand-1);
}

.title {
  flex: 1;
  text-align: left;
}

.chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
  transition: transform 0.3s ease;
  color: inherit;
}
.chevron svg {
  fill: currentColor;
}
.chevron.open {
  transform: rotate(90deg);
}

.collapsible-content {
  padding: 0.75rem 1rem;
  background-color: var(--vp-c-bg);
  border-top: none;
  transition: background-color 0.3s ease;
}

.slide-enter-active,
.slide-leave-active {
  transition: height 0.2s ease-in-out;
  overflow: hidden;
}


.collapsible-btn:focus-visible {
  /* Use an inset box-shadow which respects overflow: hidden */
  box-shadow: inset 0 0 0 2px var(--vp-c-brand-1);
  outline: none; /* Optional: explicitly remove the default outline */
}

.collapsible-section:hover {
  border-color: var(--vp-c-gray-1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:deep(.collapsible-content a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.3s ease;
}

:deep(.collapsible-content a:hover) {
  color: var(--vp-c-brand-3);
  text-decoration: underline;
}

:deep(.collapsible-content ul) {
  list-style: none;
  padding-left: 1rem;
  margin: 0;
}

:deep(.collapsible-content li) {
  margin: 0.5rem 0;
  line-height: 1.6;
}

</style>
