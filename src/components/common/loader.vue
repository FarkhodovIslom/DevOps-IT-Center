<template>
  <div
    id="loader-container"
    class="loader-container"
    :class="{ 'fade-out': isHiding }"
    role="status"
    aria-live="polite"
    aria-label="Sahifa yuklanmoqda"
  >
    <div class="loader">
      <span class="loader-text">loading</span>
      <span class="load"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits<{
  done: []
}>()

const isHiding = ref(false)

onMounted(() => {
  // Start fade-out after 1.2 seconds
  setTimeout(() => {
    isHiding.value = true

    // Emit done after the fade animation completes (800ms transition)
    setTimeout(() => {
      emit('done')
    }, 800)
  }, 1200)
})
</script>

<style scoped>
.loader-container {
  width: 100%;
  height: 100%;
  background-color: var(--bg-light);
  position: fixed;
  top: 0; bottom: 0; left: 0; right: 0;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.8s ease-out, visibility 0.8s ease-out;
}

.loader-container.fade-out {
  opacity: 0;
  visibility: hidden;
}

.loader {
  width: 110px;
  height: 50px;
  position: relative;
}

.loader-text {
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  color: var(--gray-mid);
  animation: text_713 3.5s ease both infinite;
  font-size: 1rem;
  font-weight: var(--weight-bold);
  letter-spacing: 1px;
}

.load {
  background-color: var(--royal-blue);
  border-radius: 50px;
  display: block;
  height: 16px;
  width: 16px;
  bottom: 0;
  position: absolute;
  transform: translateX(64px);
  animation: loading_713 3.5s ease both infinite;
}

.load::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgba(10, 37, 88, 0.3); /* royal blue with opacity */
  border-radius: inherit;
  animation: loading2_713 3.5s ease both infinite;
}

@keyframes text_713 {
  0% { letter-spacing: 1px; transform: translateX(0px); }
  40% { letter-spacing: 2px; transform: translateX(26px); }
  80% { letter-spacing: 1px; transform: translateX(32px); }
  90% { letter-spacing: 2px; transform: translateX(0px); }
  100% { letter-spacing: 1px; transform: translateX(0px); }
}

@keyframes loading_713 {
  0% { width: 16px; transform: translateX(0px); }
  40% { width: 100%; transform: translateX(0px); }
  80% { width: 16px; transform: translateX(64px); }
  90% { width: 100%; transform: translateX(0px); }
  100% { width: 16px; transform: translateX(0px); }
}

@keyframes loading2_713 {
  0% { transform: translateX(0px); width: 16px; }
  40% { transform: translateX(0%); width: 80%; }
  80% { width: 100%; transform: translateX(0px); }
  90% { width: 80%; transform: translateX(15px); }
  100% { transform: translateX(0px); width: 16px; }
}
</style>