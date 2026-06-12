<template>
  <section class="section-breathing">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;">
      <div>
        <h2 class="text-display" style="margin-bottom: 2rem;">Bizning manzilimiz</h2>
        
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: var(--weight-bold); color: var(--black); margin-bottom: 0.5rem;">Asosiy ofis</h3>
            <p style="color: var(--gray-mid); font-size: 1.1rem; line-height: 1.6;">Urgut tuman, Do'stlik MFY, Navoiyshox ko'chasi 120-uy. Mo'ljal: Hamkorbank yonidagi Uzagrosug'urta binosining 2-qavati</p>
          </div>
          
          <div>
            <h3 style="font-size: 1.25rem; font-weight: var(--weight-bold); color: var(--black); margin-bottom: 0.5rem;">Ish vaqti</h3>
            <p style="color: var(--gray-mid); font-size: 1.1rem; line-height: 1.6;">Dushanbadan Jumagacha<br>08:00 dan 18:00 gacha</p>
          </div>
          
          <div>
            <h3 style="font-size: 1.25rem; font-weight: var(--weight-bold); color: var(--black); margin-bottom: 0.5rem;">Telefon</h3>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <a href="tel:+998957281199" style="color: var(--black); font-size: 1.1rem; text-decoration: none;">+998 95 728 11 99</a>
              <a href="tel:+998885781199" style="color: var(--black); font-size: 1.1rem; text-decoration: none;">+998 88 578 11 99</a>
            </div>
          </div>
          
          <div style="margin-top: 1rem;">
            <button @click="openDirections" class="btn-black">
              Yo'nalish olish
            </button>
          </div>
        </div>
      </div>
      
      <div style="width: 100%; height: 500px; border-radius: 1.5rem; overflow: hidden; background: var(--gray-light);">
        <iframe
          :src="mapSrc"
          width="100%"
          height="100%"
          style="border:0;"
          :allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const address = "Urgut tuman, Do'stlik MFY, Navoiyshox ko'chasi 120-uy, Uzbekistan"

const mapSrc = computed(() => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  if (apiKey) {
    const query = encodeURIComponent(address)
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`
  }
  return `https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d385.2625426295737!2d67.23878918272594!3d39.42185539191596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m3!3m2!1d39.4218799!2d67.2387475!4m0!5e0!3m2!1sru!2s!4v1753847595784!5m2!1sru!2s`
})

const openDirections = () => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
  window.open(url, '_blank')
}
</script>

<style scoped>
@media (max-width: 1024px) {
  div[style*="grid-template-columns"] {
    grid-template-columns: 1fr !important;
  }
}
</style>