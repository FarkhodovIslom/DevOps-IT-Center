<template>
  <section class="section-breathing">
    <div class="text-center" style="margin-bottom: 3rem;">
      <h2 class="text-title font-bold text-black">O'quvchilarimizning fikrlari</h2>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
      <div 
        v-for="testimonial in testimonials" 
        :key="testimonial.id"
        style="background: var(--white); border: 1px solid var(--gray-light); padding: 2rem; border-radius: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;"
      >
        <div style="display: flex; gap: 0.5rem; color: #FBBF24;">
          <Star v-for="n in 5" :key="n" :size="16" fill="currentColor" />
        </div>
        <p style="color: var(--black); font-size: 1.1rem; line-height: 1.6; flex: 1;">
          "{{ testimonial.comment }}"
        </p>
        <div style="display: flex; align-items: center; gap: 1rem; border-top: 1px solid var(--gray-light); padding-top: 1.5rem;">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--gray-light); overflow: hidden;">
            <img :src="testimonial.avatar" :alt="testimonial.name" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          <div>
            <h4 style="font-weight: var(--weight-bold); color: var(--black); margin-bottom: 0.2rem;">{{ testimonial.name }}</h4>
            <p style="color: var(--gray-mid); font-size: 0.9rem;">{{ testimonial.course }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'

const testimonials = [
  {
    id: 1,
    name: 'Aliyev Samandar',
    course: 'Frontend Development',
    avatar: '/assets/images/student__card-image.png',
    comment: "Bu kurslarda o'qishdan oldin umuman coding bilmasdim. Hozir esa professional darajada React va Vue.js da ishlayapman.",
  },
  {
    id: 2,
    name: 'Karimova Malika',
    course: 'Full-Stack Development',
    avatar: '/assets/images/student__card-image.png',
    comment: "MERN stack ni mukammal o'rganib oldim. Kurs davomida 8 ta real loyiha qildik. Portfolio yasab, ishga joylashdim!",
  },
  {
    id: 3,
    name: 'Nazarov Jasurbek',
    course: 'UI/UX Design',
    avatar: '/assets/images/student__card-image.png',
    comment: "Design thinking, user research, prototyping - hammasi juda amaliy va zamonaviy. Hozir startup da ishlayman.",
  }
]
</script>

<style scoped>
.text-center { text-align: center; }
.font-bold { font-weight: var(--weight-bold); }
.text-black { color: var(--black); }
</style>