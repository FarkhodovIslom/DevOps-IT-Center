<template>
  <section id="contact" class="section-breathing">
    <div class="gallery-card" style="padding: 4rem 2rem; border-radius: 2rem;">
      <div style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 3rem;">
        <h2 class="text-display" style="font-size: 2.5rem; color: var(--white); margin-bottom: 1rem;">
          Bepul Konsultatsiya
        </h2>
        <p style="color: var(--gray-light); font-size: 1.1rem; max-width: 500px;">
          Ma'lumotlaringizni qoldiring, biz sizga tez fursatda aloqaga chiqamiz.
        </p>
      </div>

      <div style="width: 100%; max-width: 500px; margin: 0 auto; background: var(--royal-blue); padding: 2rem; border-radius: 1.5rem; box-shadow: 0 10px 30px rgba(10, 37, 88, 0.3);">
        <form @submit.prevent="submitForm" style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <input 
              type="text" 
              v-model="formData.name"
              placeholder="Ismingizni yozing"
              style="width: 100%; padding: 1rem; border-radius: 0.5rem; background: rgba(255, 255, 255, 0.1); color: var(--white); border: 1px solid rgba(255, 255, 255, 0.2);"
              required
            >
          </div>

          <div>
            <input 
              type="tel" 
              v-model="formData.phone"
              placeholder="+998 88 578 11 99"
              style="width: 100%; padding: 1rem; border-radius: 0.5rem; background: rgba(255, 255, 255, 0.1); color: var(--white); border: 1px solid rgba(255, 255, 255, 0.2);"
              required
            >
          </div>

          <label style="display: flex; gap: 0.5rem; align-items: flex-start; color: var(--gray-light); font-size: 0.9rem; cursor: pointer;">
            <input type="checkbox" v-model="formData.consent" required style="margin-top: 0.25rem;">
            Shaxsiy ma'lumotlarni qayta ishlashga roziman
          </label>

          <button 
            type="submit" 
            class="btn-white"
            :disabled="isLoading"
            style="width: 100%; padding: 1rem; border-radius: 0.5rem; font-weight: bold; background: var(--white); color: var(--black); border: none; cursor: pointer;"
          >
            <span v-if="!isLoading">So'rov yuborish</span>
            <span v-else>Yuborilmoqda...</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['form-submitted'])

const isLoading = ref(false)
const formData = ref({ name: '', phone: '+998 ', consent: false })

watch(() => formData.value.phone, (newVal) => {
  if (!newVal.startsWith('+998 ')) {
    formData.value.phone = '+998 '
  }
})

const submitForm = async () => {
  if (!formData.value.name || !formData.value.phone || !formData.value.consent) return
  isLoading.value = true
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/leads/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullname: formData.value.name.trim(),
        phone_number: formData.value.phone,
        is_agree: formData.value.consent
      })
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    emit('form-submitted', formData.value)
    formData.value = { name: '', phone: '+998 ', consent: false }
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>