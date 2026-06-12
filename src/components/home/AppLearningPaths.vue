<template>
  <section class="section-breathing" id="learning-paths">
    <div style="text-align: center; margin-bottom: 4rem;">
      <h2 class="text-title font-bold text-black">Yo'nalishlar</h2>
      <p class="text-gray-mid mt-4" style="font-size: 1.25rem;">O'zingizga mos keladigan sohani tanlang</p>
    </div>

    <div class="paths-grid">
      <!-- Path 1 -->
      <div class="gallery-card path-card">
        <div class="path-icon"><Code /></div>
        <h3 style="font-size: 2rem; font-weight: var(--weight-bold); margin: 1.5rem 0 1rem 0;">Dasturlash</h3>
        <p style="color: var(--gray-light); font-size: 1.1rem; line-height: 1.6; text-align: center; margin-bottom: 2rem; max-width: 280px;">
          Frontend, Backend va Full-Stack yo'nalishlarida zamonaviy dasturlash tillarini o'rganing.
        </p>
      </div>

      <!-- Path 2 -->
      <div class="gallery-card path-card">
        <div class="path-icon"><Palette /></div>
        <h3 style="font-size: 2rem; font-weight: var(--weight-bold); margin: 1.5rem 0 1rem 0;">Dizayn</h3>
        <p style="color: var(--gray-light); font-size: 1.1rem; line-height: 1.6; text-align: center; margin-bottom: 2rem; max-width: 280px;">
          Grafik dizayn, UI/UX va 3D modellashtirish orqali ijodiy salohiyatingizni ro'yobga chiqaring.
        </p>
      </div>

      <!-- Path 3 -->
      <div class="gallery-card path-card">
        <div class="path-icon"><Megaphone /></div>
        <h3 style="font-size: 2rem; font-weight: var(--weight-bold); margin: 1.5rem 0 1rem 0;">Marketing</h3>
        <p style="color: var(--gray-light); font-size: 1.1rem; line-height: 1.6; text-align: center; margin-bottom: 2rem; max-width: 280px;">
          SMM, Digital Marketing va zamonaviy brending asoslarini mukammal egallang.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Code, Palette, Megaphone } from 'lucide-vue-next'
// Educational Learning Paths component
</script>

<style scoped>
.font-bold { font-weight: var(--weight-bold); }
.text-black { color: var(--black); }
.text-gray-mid { color: var(--gray-mid); }
.mt-4 { margin-top: 1rem; }

.paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.path-card {
  padding: 3rem 2rem;
  background-color: var(--royal-blue); /* Royal Blue */
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.path-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

.path-icon {
  width: 80px;
  height: 80px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--white);
}
</style>
