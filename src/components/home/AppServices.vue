<template>
  <section class="section-breathing" id="services">
    <div class="text-center" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
      <h2 class="text-title"><span class="font-light text-gray-muted">Bizning ustunligimiz</span><br/><span class="font-bold">DevOps IT Center</span></h2>
    </div>

    <!-- Gallery Card 1: IT Experts -->
    <div class="gallery-card">
      <h3 class="text-display gradient-text-dark text-center">Ekspertlar</h3>
      <p class="text-white mt-4 text-center" style="max-width: 600px; font-size: 1.25rem; opacity: 0.9;">
        IT sohasidagi barcha xizmatlarni o'z kasbining ustalari tomonidan bajaradigan professionallar jamlangan maskan.
      </p>
      <div style="font-size: 4rem; margin-top: 3rem; opacity: 0.8;">
        <i class="fas fa-users"></i>
      </div>
    </div>

    <!-- Stats represented cleanly -->
    <div style="display: flex; flex-direction: column; gap: 4rem; margin-top: 2rem; align-items: center; text-align: center;">
      <div>
        <div style="font-size: 4rem; font-weight: 800; color: var(--black); letter-spacing: -2px;">85%</div>
        <div style="color: var(--gray-mid); font-size: 1.1rem; max-width: 400px; margin-top: 0.5rem;">
          Bitiruvchilarimiz IT sohasi va kompyuter kurslarini tugatib ish o'rnini topgan.
        </div>
      </div>
      <div>
        <div style="font-size: 4rem; font-weight: 800; color: var(--black); letter-spacing: -2px;">75%</div>
        <div style="color: var(--gray-mid); font-size: 1.1rem; max-width: 400px; margin-top: 0.5rem;">
          O'quvchilarimiz real loyihalarda qatnashib kelishmoqda.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Refactored to match premium whitespace UI, removing grids and focusing on single high-impact statements.
</script>

<style scoped>
.text-center {
  text-align: center;
}
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-12 { margin-top: 3rem; }
.mt-16 { margin-top: 4rem; }
.font-light { font-weight: var(--weight-thin); }
.font-bold { font-weight: var(--weight-bold); }
.text-gray-muted { color: var(--gray-muted); }
</style>