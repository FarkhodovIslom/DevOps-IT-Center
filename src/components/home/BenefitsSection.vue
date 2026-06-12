<template>
  <section class="section-breathing">
    <div style="text-align: center; margin-bottom: 3rem;">
      <h2 class="text-title font-bold">Nega aynan biz?</h2>
      <p class="text-gray-mid mt-4">Ta'lim jarayonidagi eng muhim afzalliklarimiz.</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div v-for="benefit in benefits" :key="benefit.title" style="display: flex; align-items: flex-start; gap: 1.5rem; padding: 2rem 0; border-bottom: 1px solid var(--gray-light);">
        <div style="font-size: 2rem; color: var(--black);">
          <component :is="benefit.icon" :size="32" />
        </div>
        <div>
          <h3 style="font-size: 1.5rem; font-weight: var(--weight-bold); color: var(--black);">{{ benefit.title }}</h3>
          <p style="color: var(--gray-mid); margin-top: 0.5rem; font-size: 1.1rem; line-height: 1.6;">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GraduationCap, Laptop, Award, Briefcase } from 'lucide-vue-next'

const benefits = [
  { icon: GraduationCap, title: 'Kuchli ustozlar', description: 'Katta tajribaga ega bo\'lgan malakali mutaxassislar' },
  { icon: Laptop, title: 'Amaliy mashg\'ulotlar', description: 'Nazariyadan ko\'ra ko\'proq amaliyot va real loyihalar' },
  { icon: Award, title: 'Sertifikat', description: 'Kursni muvaffaqiyatli tamomlaganlarga maxsus sertifikat' },
  { icon: Briefcase, title: 'Ish bilan ta\'minlash', description: 'Eng yaxshi bitiruvchilarga ishga joylashishda ko\'mak' }
]
</script>