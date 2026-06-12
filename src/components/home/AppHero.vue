<template>
  <section class="section-breathing hero">
    <div class="hero-text">
      <h1 class="text-display" style="margin-bottom: 1rem;">
        <span class="font-light text-gray-muted">Kelajak kasbini</span><br/>
        <span class="font-bold text-black">tanlang va o'rganing.</span>
      </h1>
      <p class="hero-subtitle">
        Eng talabgor IT yo'nalishlarida ta'lim oling. Real loyihalar, kuchli mentorlar va ishga joylashishda ko'mak.
      </p>
      
      <div class="hero-actions" style="margin-top: 2.5rem;">
        <a href="#courses" class="btn-royal" style="font-size: 1.25rem; padding: 1rem 3rem;">
          Kurslarni ko'rish
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Educational hero focused on course discovery
</script>

<style scoped>
.hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--bg-light);
}
.hero-text {
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}
.font-light { font-weight: var(--weight-thin); }
.font-bold { font-weight: var(--weight-bold); }
.text-gray-muted { color: var(--gray-muted); }
.text-black { color: var(--black); }
.hero-subtitle {
  font-size: 1.5rem;
  color: var(--gray-mid);
  line-height: 1.5;
  max-width: 700px;
  margin-top: 1rem;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>